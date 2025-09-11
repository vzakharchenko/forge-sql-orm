import { DateTime } from "luxon";
import * as crypto from "crypto";
import { Query } from "drizzle-orm";
import { AnyMySqlTable } from "drizzle-orm/mysql-core";
import { getTableName } from "drizzle-orm/table";
import { Filter, FilterConditions, kvs, WhereConditions } from "@forge/kvs";
import { ForgeSqlOrmOptions } from "../core/ForgeSQLQueryBuilder";
import { cacheApplicationContext, isTableContainsTableInCacheContext } from "./cacheContextUtils";

// Constants for better maintainability
const CACHE_CONSTANTS = {
  BATCH_SIZE: 25,
  MAX_RETRY_ATTEMPTS: 3,
  INITIAL_RETRY_DELAY: 1000,
  RETRY_DELAY_MULTIPLIER: 2,
  DEFAULT_ENTITY_QUERY_NAME: "sql",
  DEFAULT_EXPIRATION_NAME: "expiration",
  DEFAULT_DATA_NAME: "data",
  HASH_LENGTH: 32,
} as const;

// Types for better type safety
type CacheEntity = {
  [key: string]: string | number;
};

/**
 * Gets the current Unix timestamp in seconds.
 * 
 * @returns Current timestamp as integer
 */
function getCurrentTime(): number {
  const dt = DateTime.now();
  return Math.floor(dt.toSeconds());
}

/**
 * Calculates a future timestamp by adding seconds to the current time.
 * Validates that the result is within 32-bit integer range.
 * 
 * @param secondsToAdd - Number of seconds to add to current time
 * @returns Future timestamp in seconds
 * @throws Error if the result is out of 32-bit integer range
 */
function nowPlusSeconds(secondsToAdd: number): number {
  const dt = DateTime.now().plus({ seconds: secondsToAdd });
  const seconds = Math.floor(dt.toSeconds());

  if (seconds < -2147483648 || seconds > 2147483647) {
    throw new Error(`Value ${seconds} is out of 32-bit integer range`);
  }

  return seconds;
}

/**
 * Generates a hash key for a query based on its SQL and parameters.
 * 
 * @param query - The Drizzle query object
 * @returns 32-character hexadecimal hash
 */
function hashKey(query: Query): string {
  const h = crypto.createHash("sha256");
  h.update(query.sql);
  h.update(JSON.stringify(query.params));
  return h.digest("hex").slice(0, CACHE_CONSTANTS.HASH_LENGTH);
}

/**
 * Deletes cache entries in batches to respect Forge limits and timeouts.
 * 
 * @param results - Array of cache entries to delete
 * @param cacheEntityName - Name of the cache entity
 * @returns Promise that resolves when all deletions are complete
 */
async function deleteCacheEntriesInBatches(
  results: Array<{ key: string }>,
  cacheEntityName: string,
): Promise<void> {
  for (let i = 0; i < results.length; i += CACHE_CONSTANTS.BATCH_SIZE) {
    const batch = results.slice(i, i + CACHE_CONSTANTS.BATCH_SIZE);
    let transactionBuilder = kvs.transact();
    batch.forEach((result) => {
      transactionBuilder = transactionBuilder.delete(result.key, { entityName: cacheEntityName });
    });
    await transactionBuilder.execute();
  }
}

/**
 * Clears cache entries for specific tables using cursor-based pagination.
 * 
 * @param tables - Array of table names to clear cache for
 * @param cursor - Pagination cursor for large result sets
 * @param options - ForgeSQL ORM options
 * @returns Total number of deleted cache entries
 */
async function clearCursorCache(
  tables: string[],
  cursor: string,
  options: ForgeSqlOrmOptions,
): Promise<number> {
  const cacheEntityName = options.cacheEntityName;
  if (!cacheEntityName) {
    throw new Error("cacheEntityName is not configured");
  }
  
  const entityQueryName = options.cacheEntityQueryName ?? CACHE_CONSTANTS.DEFAULT_ENTITY_QUERY_NAME;
  let filters = new Filter<{
    [entityQueryName]: string;
  }>();

  for (const table of tables) {
    const wrapIfNeeded = options.cacheWrapTable ? `\`${table}\`` : table;
    filters.or(entityQueryName, FilterConditions.contains(wrapIfNeeded?.toLowerCase()));
  }

  let entityQueryBuilder = kvs
    .entity<{
      [entityQueryName]: string;
    }>(cacheEntityName)
    .query()
    .index(entityQueryName)
    .filters(filters);
    
  if (cursor) {
    entityQueryBuilder = entityQueryBuilder.cursor(cursor);
  }
  
  const listResult = await entityQueryBuilder.limit(100).getMany();
  
  if (options.logRawSqlQuery) {
    console.warn(`clear cache Records: ${JSON.stringify(listResult.results.map((r) => r.key))}`);
  }
  
  await deleteCacheEntriesInBatches(listResult.results, cacheEntityName);
  
  if (listResult.nextCursor) {
    return (
      listResult.results.length + (await clearCursorCache(tables, listResult.nextCursor, options))
    );
  } else {
    return listResult.results.length;
  }
}

/**
 * Clears expired cache entries using cursor-based pagination.
 * 
 * @param cursor - Pagination cursor for large result sets
 * @param options - ForgeSQL ORM options
 * @returns Total number of deleted expired cache entries
 */
async function clearExpirationCursorCache(
  cursor: string,
  options: ForgeSqlOrmOptions,
): Promise<number> {
  const cacheEntityName = options.cacheEntityName;
  if (!cacheEntityName) {
    throw new Error("cacheEntityName is not configured");
  }
  
  const entityExpirationName = options.cacheEntityExpirationName ?? CACHE_CONSTANTS.DEFAULT_EXPIRATION_NAME;
  let entityQueryBuilder = kvs
    .entity<{
      [entityExpirationName]: number;
    }>(cacheEntityName)
    .query()
    .index(entityExpirationName)
    .where(WhereConditions.lessThan(Math.floor(DateTime.now().toSeconds())));

  if (cursor) {
    entityQueryBuilder = entityQueryBuilder.cursor(cursor);
  }
  
  const listResult = await entityQueryBuilder.limit(100).getMany();
  
  if (options.logRawSqlQuery) {
    console.warn(`clear expired Records: ${JSON.stringify(listResult.results.map((r) => r.key))}`);
  }
  
  await deleteCacheEntriesInBatches(listResult.results, cacheEntityName);
  
  if (listResult.nextCursor) {
    return (
      listResult.results.length + (await clearExpirationCursorCache(listResult.nextCursor, options))
    );
  } else {
    return listResult.results.length;
  }
}

/**
 * Executes a function with retry logic and exponential backoff.
 * 
 * @param operation - Function to execute with retry
 * @param operationName - Name of the operation for logging
 * @param options - ForgeSQL ORM options for logging
 * @returns Promise that resolves to the operation result
 */
async function executeWithRetry<T>(
  operation: () => Promise<T>,
  operationName: string
): Promise<T> {
  let attempt = 0;
  let delay = CACHE_CONSTANTS.INITIAL_RETRY_DELAY;
  
  while (attempt < CACHE_CONSTANTS.MAX_RETRY_ATTEMPTS) {
    try {
      return await operation();
    } catch (err: any) {
      console.warn(`Error during ${operationName}: ${err.message}, retry ${attempt}`, err);
      attempt++;
      
      if (attempt >= CACHE_CONSTANTS.MAX_RETRY_ATTEMPTS) {
        console.error(`Error during ${operationName}: ${err.message}`, err);
        throw err;
      }
      
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= CACHE_CONSTANTS.RETRY_DELAY_MULTIPLIER;
    }
  }
  
  throw new Error(`Maximum retry attempts exceeded for ${operationName}`);
}

/**
 * Clears cache for a specific table.
 * Uses cache context if available, otherwise clears immediately.
 * 
 * @param schema - The table schema to clear cache for
 * @param options - ForgeSQL ORM options
 */
export async function clearCache<T extends AnyMySqlTable>(schema: T, options: ForgeSqlOrmOptions): Promise<void> {
  const tableName = getTableName(schema);
  if (cacheApplicationContext.getStore()) {
    cacheApplicationContext.getStore()?.tables.add(tableName);
  } else {
    await clearTablesCache([tableName], options);
  }
}

/**
 * Clears cache for multiple tables with retry logic and performance logging.
 * 
 * @param tables - Array of table names to clear cache for
 * @param options - ForgeSQL ORM options
 * @returns Promise that resolves when cache clearing is complete
 */
export async function clearTablesCache(tables: string[], options: ForgeSqlOrmOptions): Promise<void> {
  if (!options.cacheEntityName) {
    throw new Error("cacheEntityName is not configured");
  }
  
  const startTime = DateTime.now();
  let totalRecords = 0;
  
  try {
    totalRecords = await executeWithRetry(
      () => clearCursorCache(tables, "", options),
      "clearing cache",
    );
  } finally {
    if (options.logRawSqlQuery) {
      const duration = DateTime.now().toSeconds() - startTime.toSeconds();
      console.info(`Cleared ${totalRecords} cache records in ${duration} seconds`);
    }
  }
}
/**
 * Clears expired cache entries with retry logic and performance logging.
 * 
 * @param options - ForgeSQL ORM options
 * @returns Promise that resolves when expired cache clearing is complete
 */
export async function clearExpiredCache(options: ForgeSqlOrmOptions): Promise<void> {
  if (!options.cacheEntityName) {
    throw new Error("cacheEntityName is not configured");
  }
  
  const startTime = DateTime.now();
  let totalRecords = 0;
  
  try {
    totalRecords = await executeWithRetry(
      () => clearExpirationCursorCache("", options),
      "clearing expired cache",
    );
  } finally {
    const duration = DateTime.now().toSeconds() - startTime.toSeconds();
    console.info(`Cleared ${totalRecords} expired cache records in ${duration} seconds`);
  }
}

/**
 * Retrieves data from cache if it exists and is not expired.
 * 
 * @param query - Query object with toSQL method
 * @param options - ForgeSQL ORM options
 * @returns Cached data if found and valid, undefined otherwise
 */
export async function getFromCache<T>(
  query: { toSQL: () => Query },
  options: ForgeSqlOrmOptions,
): Promise<T | undefined> {
  if (!options.cacheEntityName) {
    throw new Error("cacheEntityName is not configured");
  }

  const entityQueryName = options.cacheEntityQueryName ?? CACHE_CONSTANTS.DEFAULT_ENTITY_QUERY_NAME;
  const expirationName = options.cacheEntityExpirationName ?? CACHE_CONSTANTS.DEFAULT_EXPIRATION_NAME;
  const dataName = options.cacheEntityDataName ?? CACHE_CONSTANTS.DEFAULT_DATA_NAME;
  
  const sqlQuery = query.toSQL();
  const key = hashKey(sqlQuery);
  
  // Skip cache if table is in cache context (will be cleared)
  if (await isTableContainsTableInCacheContext(sqlQuery.sql, options)) {
    if (options.logRawSqlQuery) {
      console.warn(`Context contains value to clear. Skip getting from cache`);
    }
    return undefined;
  }
  
  try {
    const cacheResult = await kvs
      .entity<CacheEntity>(options.cacheEntityName)
      .get(key);
      
    if (
      cacheResult &&
      (cacheResult[expirationName] as number) >= getCurrentTime() &&
      sqlQuery.sql.toLowerCase() === cacheResult[entityQueryName]
    ) {
      if (options.logRawSqlQuery) {
        console.warn(`Get value from cache, cacheKey: ${key}`);
      }
      const results = cacheResult[dataName];
      return JSON.parse(results as string);
    }
  } catch (error: any) {
    console.error(`Error getting from cache: ${error.message}`, error);
  }

  return undefined;
}

/**
 * Stores query results in cache with specified TTL.
 * 
 * @param query - Query object with toSQL method
 * @param options - ForgeSQL ORM options
 * @param results - Data to cache
 * @param cacheTtl - Time to live in seconds
 * @returns Promise that resolves when data is stored in cache
 */
export async function setCacheResult(
  query: { toSQL: () => Query },
  options: ForgeSqlOrmOptions,
  results: unknown,
  cacheTtl: number,
): Promise<void> {
  if (!options.cacheEntityName) {
    throw new Error("cacheEntityName is not configured");
  }
  
  try {
    const entityQueryName = options.cacheEntityQueryName ?? CACHE_CONSTANTS.DEFAULT_ENTITY_QUERY_NAME;
    const expirationName = options.cacheEntityExpirationName ?? CACHE_CONSTANTS.DEFAULT_EXPIRATION_NAME;
    const dataName = options.cacheEntityDataName ?? CACHE_CONSTANTS.DEFAULT_DATA_NAME;
    
    const sqlQuery = query.toSQL();
    const key = hashKey(sqlQuery);
    
    await kvs.entity(options.cacheEntityName).set(key, {
      [entityQueryName]: sqlQuery.sql.toLowerCase(),
      [expirationName]: nowPlusSeconds(cacheTtl),
      [dataName]: JSON.stringify(results),
    });
    
    if (options.logRawSqlQuery) {
      console.warn(`Store value to cache, cacheKey: ${key}`);
    }
  } catch (error: any) {
    console.error(`Error setting cache: ${error.message}`, error);
  }
}
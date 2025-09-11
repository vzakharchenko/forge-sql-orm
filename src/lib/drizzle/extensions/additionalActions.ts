import {MySqlRemoteDatabase, MySqlRemotePreparedQueryHKT, MySqlRemoteQueryResultHKT,} from "drizzle-orm/mysql-proxy";
import type {SelectedFields} from "drizzle-orm/mysql-core/query-builders/select.types";
import {applyFromDriverTransform, ForgeSqlOrmOptions, mapSelectFieldsWithAlias} from "../../..";
import {MySqlSelectBuilder} from "drizzle-orm/mysql-core";
import type {MySqlTable} from "drizzle-orm/mysql-core/table";
import {MySqlDeleteBase, MySqlInsertBuilder, MySqlUpdateBuilder,} from "drizzle-orm/mysql-core/query-builders";
import {clearCache, getFromCache, setCacheResult} from "../../../utils/cacheUtils";
import {saveTableIfInsideCacheContext} from "../../../utils/cacheContextUtils";

// Types for better type safety
type QueryBuilder = {
  execute: (...args: any[]) => Promise<any>;
  then?: (onfulfilled?: any, onrejected?: any) => Promise<any>;
  toSQL?: () => any;
};

type CacheableQueryBuilder = QueryBuilder & {
  then: (onfulfilled?: any, onrejected?: any) => Promise<any>;
  toSQL: () => any;
};

/**
 * Determines whether cache should be cleared based on the error type.
 * Only clears cache for errors that might indicate data consistency issues.
 * 
 * @param error - The error that occurred during query execution
 * @returns true if cache should be cleared, false otherwise
 */
function shouldClearCacheOnError(error: any): boolean {
  // Don't clear cache for client-side errors (validation, etc.)
  if (error?.code === 'VALIDATION_ERROR' || 
      error?.code === 'CONSTRAINT_ERROR' ||
      error?.message?.includes('validation')) {
    return false;
  }
  
  // Clear cache for database-level errors that might affect data consistency
  if (error?.code === 'DEADLOCK' ||
      error?.code === 'LOCK_WAIT_TIMEOUT' ||
      error?.code === 'CONNECTION_ERROR' ||
      error?.message?.includes('timeout') ||
      error?.message?.includes('connection')) {
    return true;
  }
  
  // For unknown errors, be conservative and clear cache
  return true;
}

export type SelectAliasedType = <TSelection extends SelectedFields>(
  fields: TSelection,
) => MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;

export type SelectAliasedDistinctType = <TSelection extends SelectedFields>(
  fields: TSelection,
) => MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;

export type SelectAliasedCacheableType = <TSelection extends SelectedFields>(
  fields: TSelection,
  cacheTtl?: number,
) => MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;

export type SelectAliasedDistinctCacheableType = <TSelection extends SelectedFields>(
  fields: TSelection,
  cacheTtl?: number,
) => MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;

export type InsertAndEvictCacheType = <TTable extends MySqlTable>(
  table: TTable,
) => MySqlInsertBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;
export type UpdateAndEvictCacheType = <TTable extends MySqlTable>(
  table: TTable,
) => MySqlUpdateBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;
export type DeleteAndEvictCacheType = <TTable extends MySqlTable>(
  table: TTable,
) => MySqlDeleteBase<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;

/**
 * Handles successful query execution with cache management.
 * 
 * @param rows - Query result rows
 * @param onfulfilled - Success callback
 * @param table - The table being modified
 * @param options - ForgeSQL ORM options
 * @param isCached - Whether to clear cache immediately
 * @returns Promise with result
 */
async function handleSuccessfulExecution(
  rows: unknown[],
  onfulfilled: any,
  table: MySqlTable,
  options: ForgeSqlOrmOptions,
  isCached: boolean
): Promise<any> {
  try {
    const result = onfulfilled?.(rows);
    if (isCached) {
      await clearCache(table, options);
    } else {
      await saveTableIfInsideCacheContext(table);
    }
    return result;
  } catch (error) {
    // Only clear cache for certain types of errors
    if (shouldClearCacheOnError(error)) {
      if (isCached) {
        await clearCache(table, options).catch(() => {
          console.warn('Ignore cache clear errors');
        });
      } else {
        await saveTableIfInsideCacheContext(table);
      }
    }
    throw error;
  }
}

/**
 * Handles function calls on the wrapped builder.
 * 
 * @param value - The function to call
 * @param target - The target object
 * @param args - Function arguments
 * @param table - The table being modified
 * @param options - ForgeSQL ORM options
 * @param isCached - Whether to clear cache immediately
 * @returns Function result or wrapped builder
 */
function handleFunctionCall(
  value: Function,
  target: any,
  args: any[],
  table: MySqlTable,
  options: ForgeSqlOrmOptions,
  isCached: boolean
): any {
  const result = value.apply(target, args);
  if (typeof result === "object" && result !== null && "execute" in result) {
    return wrapCacheEvictBuilder(result as QueryBuilder, table, options, isCached);
  }
  return result;
}

/**
 * Wraps a query builder with cache eviction functionality.
 * Automatically clears cache after successful execution of insert/update/delete operations.
 * 
 * @param rawBuilder - The original query builder to wrap
 * @param table - The table being modified (used for cache eviction)
 * @param options - ForgeSQL ORM options including cache configuration
 * @param isCached - Whether to clear cache immediately
 * @returns Wrapped query builder with cache eviction
 */
const wrapCacheEvictBuilder = <TTable extends MySqlTable>(
  rawBuilder: QueryBuilder,
  table: TTable,
  options: ForgeSqlOrmOptions,
  isCached: boolean,
): QueryBuilder => {
  return new Proxy(rawBuilder, {
    get(target, prop, receiver) {
      if (prop === "then") {
        return (onfulfilled?: any, onrejected?: any) =>
          target.execute().then(
            (rows: unknown[]) => handleSuccessfulExecution(rows, onfulfilled, table, options, isCached),
            onrejected
          );
      }

      const value = Reflect.get(target, prop, receiver);

      if (typeof value === "function") {
        return (...args: any[]) => handleFunctionCall(value, target, args, table, options, isCached);
      }

      return value;
    },
  });
};

/**
 * Creates an insert query builder that automatically evicts cache after execution.
 * 
 * @param db - The database instance
 * @param table - The table to insert into
 * @param options - ForgeSQL ORM options
 * @returns Insert query builder with cache eviction
 */
function insertAndEvictCacheBuilder<TTable extends MySqlTable>(
  db: MySqlRemoteDatabase<any>,
  table: TTable,
  options: ForgeSqlOrmOptions,
  isCached:boolean,
): MySqlInsertBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
  const builder = db.insert(table);
  return wrapCacheEvictBuilder(
    builder as unknown as QueryBuilder,
    table,
    options,
      isCached
  ) as unknown as MySqlInsertBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;
}

/**
 * Creates an update query builder that automatically evicts cache after execution.
 * 
 * @param db - The database instance
 * @param table - The table to update
 * @param options - ForgeSQL ORM options
 * @returns Update query builder with cache eviction
 */
function updateAndEvictCacheBuilder<TTable extends MySqlTable>(
  db: MySqlRemoteDatabase<any>,
  table: TTable,
  options: ForgeSqlOrmOptions,
  isCached: boolean
): MySqlUpdateBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
  const builder = db.update(table);
  return wrapCacheEvictBuilder(
    builder as unknown as QueryBuilder,
    table,
    options,
      isCached
  ) as unknown as MySqlUpdateBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;
}

/**
 * Creates a delete query builder that automatically evicts cache after execution.
 * 
 * @param db - The database instance
 * @param table - The table to delete from
 * @param options - ForgeSQL ORM options
 * @returns Delete query builder with cache eviction
 */
function deleteAndEvictCacheBuilder<TTable extends MySqlTable>(
  db: MySqlRemoteDatabase<any>,
  table: TTable,
  options: ForgeSqlOrmOptions,
  isCached:boolean
): MySqlDeleteBase<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
  const builder = db.delete(table);
  return wrapCacheEvictBuilder(
    builder as unknown as QueryBuilder,
    table,
    options,
      isCached
  ) as unknown as MySqlDeleteBase<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;
}

/**
 * Handles cached query execution with proper error handling.
 * 
 * @param target - The query target
 * @param options - ForgeSQL ORM options
 * @param cacheTtl - Cache TTL
 * @param selections - Field selections
 * @param aliasMap - Field alias mapping
 * @param onfulfilled - Success callback
 * @param onrejected - Error callback
 * @returns Promise with cached result
 */
async function handleCachedQuery(
  target: any,
  options: ForgeSqlOrmOptions,
  cacheTtl: number,
  selections: any,
  aliasMap: any,
  onfulfilled?: any,
  onrejected?: any
): Promise<any> {
  try {
    const cacheResult = await getFromCache(target, options);
    if (cacheResult) {
      return onfulfilled?.(cacheResult);
    }
    
    const rows = await target.execute();
    const transformed = applyFromDriverTransform(rows, selections, aliasMap);
    
    await setCacheResult(target, options, transformed, cacheTtl)
      .catch((cacheError) => {
        // Log cache error but don't fail the query
        console.warn('Cache set error:', cacheError);
      });
    
    return onfulfilled?.(transformed);
  } catch (error) {
    return onrejected?.(error);
  }
}

/**
 * Handles non-cached query execution.
 * 
 * @param target - The query target
 * @param selections - Field selections
 * @param aliasMap - Field alias mapping
 * @param onfulfilled - Success callback
 * @param onrejected - Error callback
 * @returns Promise with transformed result
 */
async function handleNonCachedQuery(
  target: any,
  selections: any,
  aliasMap: any,
  onfulfilled?: any,
  onrejected?: any
): Promise<any> {
  try {
    const rows = await target.execute();
    const transformed = applyFromDriverTransform(rows, selections, aliasMap);
    return onfulfilled?.(transformed);
  } catch (error) {
    return onrejected?.(error);
  }
}

/**
 * Creates a select query builder with field aliasing and optional caching support.
 * 
 * @param db - The database instance
 * @param fields - The fields to select with aliases
 * @param selectFn - Function to create the base select query
 * @param useCache - Whether to enable caching for this query
 * @param options - ForgeSQL ORM options
 * @param cacheTtl - Optional cache TTL override
 * @returns Select query builder with aliasing and optional caching
 */
function createAliasedSelectBuilder<TSelection extends SelectedFields>(
  db: MySqlRemoteDatabase<any>,
  fields: TSelection,
  selectFn: (selections: any) => MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>,
  useCache: boolean,
  options: ForgeSqlOrmOptions,
  cacheTtl?: number,
): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT> {
  const { selections, aliasMap } = mapSelectFieldsWithAlias(fields);
  const builder = selectFn(selections);

  const wrapBuilder = (rawBuilder: any): any => {
    return new Proxy(rawBuilder, {
      get(target, prop, receiver) {
        if (prop === "execute") {
          return async (...args: any[]) => {
              const rows = await target.execute(...args);
              return applyFromDriverTransform(rows, selections, aliasMap);
          };
        }

        if (prop === "then") {
          return (onfulfilled?: any, onrejected?: any) => {
            if (useCache) {
              const ttl = cacheTtl ?? options.cacheTTL ?? 120;
              return handleCachedQuery(target, options, ttl, selections, aliasMap, onfulfilled, onrejected);
            } else {
              return handleNonCachedQuery(target, selections, aliasMap, onfulfilled, onrejected);
            }
          };
        }

        const value = Reflect.get(target, prop, receiver);

        if (typeof value === "function") {
          return (...args: any[]) => {
            const result = value.apply(target, args);

            if (typeof result === "object" && result !== null && "execute" in result) {
              return wrapBuilder(result);
            }

            return result;
          };
        }

        return value;
      },
    });
  };

  return wrapBuilder(builder);
}

// Default options for better type safety
const DEFAULT_OPTIONS: ForgeSqlOrmOptions = {
  logRawSqlQuery: false,
  disableOptimisticLocking: false,
  cacheTTL: 120,
  cacheWrapTable: true,
  cacheEntityQueryName: "sql",
  cacheEntityExpirationName: "expiration",
  cacheEntityDataName: "data",
};

/**
 * Patches a Drizzle database instance with additional methods for aliased selects and cache management.
 * 
 * This function extends the database instance with:
 * - selectAliased: Select with field aliasing support
 * - selectAliasedDistinct: Select distinct with field aliasing support
 * - selectAliasedCacheable: Select with field aliasing and caching
 * - selectAliasedDistinctCacheable: Select distinct with field aliasing and caching
 * - insertAndEvictCache: Insert operations that automatically evict cache
 * - updateAndEvictCache: Update operations that automatically evict cache
 * - deleteAndEvictCache: Delete operations that automatically evict cache
 * 
 * @param db - The Drizzle database instance to patch
 * @param options - Optional ForgeSQL ORM configuration
 * @returns The patched database instance with additional methods
 */
export function patchDbWithSelectAliased(
  db: MySqlRemoteDatabase<any>,
  options?: ForgeSqlOrmOptions,
): MySqlRemoteDatabase<any> & {
  selectAliased: SelectAliasedType;
  selectAliasedDistinct: SelectAliasedDistinctType;
  selectAliasedCacheable: SelectAliasedCacheableType;
  selectAliasedDistinctCacheable: SelectAliasedDistinctCacheableType;
  insertWithCacheContext: InsertAndEvictCacheType;
  insertAndEvictCache: InsertAndEvictCacheType;
  updateAndEvictCache: UpdateAndEvictCacheType;
  updateWithCacheContext: UpdateAndEvictCacheType;
  deleteAndEvictCache: DeleteAndEvictCacheType;
  deleteWithCacheContext: DeleteAndEvictCacheType;
} {
  const newOptions = { ...DEFAULT_OPTIONS, ...options };

  // Select aliased without cache
  db.selectAliased = function <TSelection extends SelectedFields>(fields: TSelection) {
    return createAliasedSelectBuilder(
      db,
      fields,
      (selections) => db.select(selections),
      false,
      newOptions,
    );
  };

  // Select aliased distinct without cache
  db.selectAliasedDistinct = function <TSelection extends SelectedFields>(fields: TSelection) {
    return createAliasedSelectBuilder(
      db,
      fields,
      (selections) => db.selectDistinct(selections),
      false,
      newOptions,
    );
  };

  // Select aliased with cache
  db.selectAliasedCacheable = function <TSelection extends SelectedFields>(
    fields: TSelection,
    cacheTtl?: number,
  ) {
    return createAliasedSelectBuilder(
      db,
      fields,
      (selections) => db.select(selections),
      true,
      newOptions,
      cacheTtl,
    );
  };

  // Select aliased distinct with cache
  db.selectAliasedDistinctCacheable = function <TSelection extends SelectedFields>(
    fields: TSelection,
    cacheTtl?: number,
  ) {
    return createAliasedSelectBuilder(
      db,
      fields,
      (selections) => db.selectDistinct(selections),
      true,
      newOptions,
      cacheTtl,
    );
  };

  // Insert with cache context support (participates in cache clearing when used within cache context)
  db.insertWithCacheContext = function <TTable extends MySqlTable>(table: TTable) {
    return insertAndEvictCacheBuilder(db, table, newOptions, false);
  };
  // Insert with cache eviction
  db.insertAndEvictCache = function <TTable extends MySqlTable>(table: TTable) {
    return insertAndEvictCacheBuilder(db, table, newOptions,true);
  };

  // Update with cache context support (participates in cache clearing when used within cache context)
  db.updateWithCacheContext = function <TTable extends MySqlTable>(table: TTable) {
    return updateAndEvictCacheBuilder(db, table, newOptions, false);
  };
  // Update with cache eviction
  db.updateAndEvictCache = function <TTable extends MySqlTable>(table: TTable) {
    return updateAndEvictCacheBuilder(db, table, newOptions,true);
  };

  // Delete with cache context support (participates in cache clearing when used within cache context)
  db.deleteWithCacheContext = function <TTable extends MySqlTable>(table: TTable) {
    return deleteAndEvictCacheBuilder(db, table, newOptions, false);
  };
  // Delete with cache eviction
  db.deleteAndEvictCache = function <TTable extends MySqlTable>(table: TTable) {
    return deleteAndEvictCacheBuilder(db, table, newOptions,true);
  };

  return db;
}

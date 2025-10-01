import {
  MySqlRawQueryResult,
  MySqlRemoteDatabase,
  MySqlRemotePreparedQueryHKT,
  MySqlRemoteQueryResultHKT,
} from "drizzle-orm/mysql-proxy";

import { SelectedFields } from "drizzle-orm/mysql-core/query-builders/select.types";
import { applyFromDriverTransform, ForgeSqlOrmOptions, mapSelectFieldsWithAlias } from "../../..";
import { MySqlSelectBase, MySqlSelectBuilder } from "drizzle-orm/mysql-core";
import type { MySqlTable } from "drizzle-orm/mysql-core/table";
import {
  MySqlDeleteBase,
  MySqlInsertBuilder,
  MySqlUpdateBuilder,
} from "drizzle-orm/mysql-core/query-builders";
import { clearCache, getFromCache, setCacheResult } from "../../../utils/cacheUtils";
import {
  cacheApplicationContext,
  evictLocalCacheQuery,
  getQueryLocalCacheQuery,
  saveQueryLocalCacheQuery,
  saveTableIfInsideCacheContext,
} from "../../../utils/cacheContextUtils";
import { BuildQueryConfig, isSQLWrapper, SQLWrapper } from "drizzle-orm/sql/sql";
import type { MySqlQueryResultKind } from "drizzle-orm/mysql-core/session";
import { getTableColumns, Query, SQL } from "drizzle-orm";
import { MySqlDialect } from "drizzle-orm/mysql-core/dialect";
import type {
  GetSelectTableName,
  GetSelectTableSelection,
} from "drizzle-orm/query-builders/select.types";

// ============================================================================
// TYPES AND INTERFACES
// ============================================================================

/**
 * Base interface for query builders that can be executed
 */
interface QueryBuilder {
  execute: (...args: any[]) => Promise<any>;
  then?: (onfulfilled?: any, onrejected?: any) => Promise<any>;
  toSQL?: () => any;
}

/**
 * Error codes that should not trigger cache clearing
 */
const NON_CACHE_CLEARING_ERROR_CODES = ["VALIDATION_ERROR", "CONSTRAINT_ERROR"] as const;

/**
 * Error codes that should trigger cache clearing
 */
const CACHE_CLEARING_ERROR_CODES = ["DEADLOCK", "LOCK_WAIT_TIMEOUT", "CONNECTION_ERROR"] as const;

/**
 * Error message patterns that should not trigger cache clearing
 */
const NON_CACHE_CLEARING_PATTERNS = [/validation/i, /constraint/i] as const;

/**
 * Error message patterns that should trigger cache clearing
 */
const CACHE_CLEARING_PATTERNS = [/timeout/i, /connection/i] as const;

// ============================================================================
// CACHE MANAGEMENT UTILITIES
// ============================================================================

/**
 * Determines whether cache should be cleared based on the error type.
 * Only clears cache for errors that might indicate data consistency issues.
 *
 * @param error - The error that occurred during query execution
 * @returns true if cache should be cleared, false otherwise
 */
function shouldClearCacheOnError(error: any): boolean {
  // Don't clear cache for client-side errors (validation, etc.)
  if (error?.code && NON_CACHE_CLEARING_ERROR_CODES.includes(error.code)) {
    return false;
  }

  if (
    error?.message &&
    NON_CACHE_CLEARING_PATTERNS.some((pattern) => pattern.test(error.message))
  ) {
    return false;
  }

  // Clear cache for database-level errors that might affect data consistency
  if (error?.code && CACHE_CLEARING_ERROR_CODES.includes(error.code)) {
    return true;
  }

  if (error?.message && CACHE_CLEARING_PATTERNS.some((pattern) => pattern.test(error.message))) {
    return true;
  }

  // For unknown errors, be conservative and clear cache
  return true;
}

// ============================================================================
// EXPORTED TYPES
// ============================================================================

/**
 * Type for select queries with field aliasing
 */
export type SelectAliasedType = <TSelection extends SelectedFields>(
  fields: TSelection,
) => MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;

/**
 * Type for select distinct queries with field aliasing
 */
export type SelectAliasedDistinctType = <TSelection extends SelectedFields>(
  fields: TSelection,
) => MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;

/**
 * Type for select queries with field aliasing and caching
 */
export type SelectAliasedCacheableType = <TSelection extends SelectedFields>(
  fields: TSelection,
  cacheTtl?: number,
) => MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;

/**
 * Type for select distinct queries with field aliasing and caching
 */
export type SelectAliasedDistinctCacheableType = <TSelection extends SelectedFields>(
  fields: TSelection,
  cacheTtl?: number,
) => MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;

/**
 * Type for select queries from table with field aliasing
 */
export type SelectAllFromAliasedType = <T extends MySqlTable>(
  table: T,
) => MySqlSelectBase<
  GetSelectTableName<T>,
  T["_"]["columns"] extends undefined ? GetSelectTableSelection<T> : T["_"]["columns"],
  T["_"]["columns"] extends undefined ? "single" : "partial",
  MySqlRemotePreparedQueryHKT,
  GetSelectTableName<T> extends string ? Record<string & GetSelectTableName<T>, "not-null"> : {},
  false,
  never,
  any
>;

/**
 * Type for select distinct queries from table with field aliasing
 */
export type SelectAllDistinctFromAliasedType = <T extends MySqlTable>(
  table: T,
) => MySqlSelectBase<
  GetSelectTableName<T>,
  T["_"]["columns"] extends undefined ? GetSelectTableSelection<T> : T["_"]["columns"],
  T["_"]["columns"] extends undefined ? "single" : "partial",
  MySqlRemotePreparedQueryHKT,
  GetSelectTableName<T> extends string ? Record<string & GetSelectTableName<T>, "not-null"> : {},
  false,
  never,
  any
>;

/**
 * Type for select queries from table with field aliasing and caching
 */
export type SelectAllFromCacheableAliasedType = <T extends MySqlTable>(
  table: T,
  cacheTtl?: number,
) => MySqlSelectBase<
  GetSelectTableName<T>,
  T["_"]["columns"] extends undefined ? GetSelectTableSelection<T> : T["_"]["columns"],
  T["_"]["columns"] extends undefined ? "single" : "partial",
  MySqlRemotePreparedQueryHKT,
  GetSelectTableName<T> extends string ? Record<string & GetSelectTableName<T>, "not-null"> : {},
  false,
  never,
  any
>;

/**
 * Type for select distinct queries from table with field aliasing and caching
 */
export type SelectAllDistinctFromCacheableAliasedType = <T extends MySqlTable>(
  table: T,
  cacheTtl?: number,
) => MySqlSelectBase<
  GetSelectTableName<T>,
  T["_"]["columns"] extends undefined ? GetSelectTableSelection<T> : T["_"]["columns"],
  T["_"]["columns"] extends undefined ? "single" : "partial",
  MySqlRemotePreparedQueryHKT,
  GetSelectTableName<T> extends string ? Record<string & GetSelectTableName<T>, "not-null"> : {},
  false,
  never,
  any
>;

/**
 * Type for executing raw SQL queries with local cache
 */
export type ExecuteQuery = <T>(
  query: SQLWrapper | string,
) => Promise<MySqlQueryResultKind<MySqlRemoteQueryResultHKT, T>>;

/**
 * Type for executing raw SQL queries with local and global cache
 */
export type ExecuteQueryCacheable = <T>(
  query: SQLWrapper | string,
  cacheTtl?: number,
) => Promise<MySqlQueryResultKind<MySqlRemoteQueryResultHKT, T>>;

/**
 * Type for insert operations with cache eviction
 */
export type InsertAndEvictCacheType = <TTable extends MySqlTable>(
  table: TTable,
) => MySqlInsertBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;

/**
 * Type for update operations with cache eviction
 */
export type UpdateAndEvictCacheType = <TTable extends MySqlTable>(
  table: TTable,
) => MySqlUpdateBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;

/**
 * Type for delete operations with cache eviction
 */
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
  isCached: boolean,
): Promise<any> {
  try {
    await evictLocalCacheQuery(table, options);
    await saveTableIfInsideCacheContext(table);
    if (isCached && !cacheApplicationContext.getStore()) {
      await clearCache(table, options);
    }
    const result = onfulfilled?.(rows);
    return result;
  } catch (error) {
    // Only clear cache for certain types of errors
    if (shouldClearCacheOnError(error)) {
      await evictLocalCacheQuery(table, options);
      if (isCached) {
        await clearCache(table, options).catch((e) => {
          // eslint-disable-next-line no-console
          console.warn("Ignore cache clear errors", e);
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
  isCached: boolean,
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
          target
            .execute()
            .then(
              (rows: unknown[]) =>
                handleSuccessfulExecution(rows, onfulfilled, table, options, isCached),
              onrejected,
            );
      }

      const value = Reflect.get(target, prop, receiver);

      if (typeof value === "function") {
        return (...args: any[]) =>
          handleFunctionCall(value, target, args, table, options, isCached);
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
  isCached: boolean,
): MySqlInsertBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
  const builder = db.insert(table);
  return wrapCacheEvictBuilder(
    builder as unknown as QueryBuilder,
    table,
    options,
    isCached,
  ) as unknown as MySqlInsertBuilder<
    TTable,
    MySqlRemoteQueryResultHKT,
    MySqlRemotePreparedQueryHKT
  >;
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
  isCached: boolean,
): MySqlUpdateBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
  const builder = db.update(table);
  return wrapCacheEvictBuilder(
    builder as unknown as QueryBuilder,
    table,
    options,
    isCached,
  ) as unknown as MySqlUpdateBuilder<
    TTable,
    MySqlRemoteQueryResultHKT,
    MySqlRemotePreparedQueryHKT
  >;
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
  isCached: boolean,
): MySqlDeleteBase<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
  const builder = db.delete(table);
  return wrapCacheEvictBuilder(
    builder as unknown as QueryBuilder,
    table,
    options,
    isCached,
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
  onrejected?: any,
): Promise<any> {
  try {
    const localCached = await getQueryLocalCacheQuery(target, options);
    if (localCached) {
      return onfulfilled?.(localCached);
    }
    const cacheResult = await getFromCache(target, options);
    if (cacheResult) {
      return onfulfilled?.(cacheResult);
    }
    const rows = await target.execute();
    const transformed = applyFromDriverTransform(rows, selections, aliasMap);
    await saveQueryLocalCacheQuery(target, transformed, options);
    await setCacheResult(target, options, transformed, cacheTtl).catch((cacheError) => {
      // Log cache error but don't fail the query
      // eslint-disable-next-line no-console
      console.warn("Cache set error:", cacheError);
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
 * @param options - ForgeSQL ORM options
 * @param selections - Field selections
 * @param aliasMap - Field alias mapping
 * @param onfulfilled - Success callback
 * @param onrejected - Error callback
 * @returns Promise with transformed result
 */
async function handleNonCachedQuery(
  target: any,
  options: any,
  selections: any,
  aliasMap: any,
  onfulfilled?: any,
  onrejected?: any,
): Promise<any> {
  try {
    const localCached = await getQueryLocalCacheQuery(target, options);
    if (localCached) {
      return onfulfilled?.(localCached);
    }
    const rows = await target.execute();
    const transformed = applyFromDriverTransform(rows, selections, aliasMap);
    await saveQueryLocalCacheQuery(target, transformed, options);
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
              return handleCachedQuery(
                target,
                options,
                ttl,
                selections,
                aliasMap,
                onfulfilled,
                onrejected,
              );
            } else {
              return handleNonCachedQuery(
                target,
                options,
                selections,
                aliasMap,
                onfulfilled,
                onrejected,
              );
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

// ============================================================================
// CONFIGURATION AND CONSTANTS
// ============================================================================

/**
 * Default options for ForgeSQL ORM
 */
const DEFAULT_OPTIONS: ForgeSqlOrmOptions = {
  logRawSqlQuery: false,
  disableOptimisticLocking: false,
  cacheTTL: 120,
  cacheWrapTable: true,
  cacheEntityQueryName: "sql",
  cacheEntityExpirationName: "expiration",
  cacheEntityDataName: "data",
} as const;

// ============================================================================
// QUERY BUILDER FACTORIES
// ============================================================================

/**
 * Creates a raw SQL query executor with caching support
 */
function createRawQueryExecutor(
  db: MySqlRemoteDatabase<any>,
  options: ForgeSqlOrmOptions,
  useGlobalCache: boolean = false,
) {
  return async function <T extends { [column: string]: any }>(
    query: SQLWrapper | string,
    cacheTtl?: number,
  ): Promise<MySqlRawQueryResult> {
    let sql: Query;

    if (isSQLWrapper(query)) {
      const dialect = (db as unknown as { dialect: MySqlDialect }).dialect;
      sql = dialect.sqlToQuery(query as SQL);
    } else {
      sql = {
        sql: query,
        params: [],
      };
    }

    // Check local cache first
    const localCacheResult = await getQueryLocalCacheQuery(sql, options);
    if (localCacheResult) {
      return localCacheResult as MySqlRawQueryResult;
    }

    // Check global cache if enabled
    if (useGlobalCache) {
      const cacheResult = await getFromCache({ toSQL: () => sql }, options);
      if (cacheResult) {
        return cacheResult as MySqlRawQueryResult;
      }
    }

    // Execute query
    const results = await db.execute<T>(query);

    // Save to local cache
    await saveQueryLocalCacheQuery(sql, results, options);

    // Save to global cache if enabled
    if (useGlobalCache) {
      await setCacheResult(
        { toSQL: () => sql },
        options,
        results,
        cacheTtl ?? options.cacheTTL ?? 120,
      );
    }

    return results;
  };
}

// ============================================================================
// MAIN PATCH FUNCTION
// ============================================================================

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

  // ============================================================================
  // SELECT METHODS WITH FIELD ALIASING
  // ============================================================================

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

  // ============================================================================
  // TABLE-BASED SELECT METHODS
  // ============================================================================

  /**
   * Creates a select query builder for all columns from a table with field aliasing support.
   * This is a convenience method that automatically selects all columns from the specified table.
   *
   * @param table - The table to select from
   * @returns Select query builder with all table columns and field aliasing support
   * @example
   * ```typescript
   * const users = await db.selectFrom(userTable).where(eq(userTable.id, 1));
   * ```
   */
  db.selectFrom = function <T extends MySqlTable>(table: T) {
    return db.selectAliased(getTableColumns(table)).from(table);
  };

  /**
   * Creates a select query builder for all columns from a table with field aliasing and caching support.
   * This is a convenience method that automatically selects all columns from the specified table with caching enabled.
   *
   * @param table - The table to select from
   * @param cacheTtl - Optional cache TTL override (defaults to global cache TTL)
   * @returns Select query builder with all table columns, field aliasing, and caching support
   * @example
   * ```typescript
   * const users = await db.selectFromCacheable(userTable, 300).where(eq(userTable.id, 1));
   * ```
   */
  db.selectFromCacheable = function <T extends MySqlTable>(table: T, cacheTtl?: number) {
    return db.selectAliasedCacheable(getTableColumns(table), cacheTtl).from(table);
  };

  /**
   * Creates a select distinct query builder for all columns from a table with field aliasing support.
   * This is a convenience method that automatically selects all distinct columns from the specified table.
   *
   * @param table - The table to select from
   * @returns Select distinct query builder with all table columns and field aliasing support
   * @example
   * ```typescript
   * const uniqueUsers = await db.selectDistinctFrom(userTable).where(eq(userTable.status, 'active'));
   * ```
   */
  db.selectDistinctFrom = function <T extends MySqlTable>(table: T) {
    return db.selectAliasedDistinct(getTableColumns(table)).from(table);
  };

  /**
   * Creates a select distinct query builder for all columns from a table with field aliasing and caching support.
   * This is a convenience method that automatically selects all distinct columns from the specified table with caching enabled.
   *
   * @param table - The table to select from
   * @param cacheTtl - Optional cache TTL override (defaults to global cache TTL)
   * @returns Select distinct query builder with all table columns, field aliasing, and caching support
   * @example
   * ```typescript
   * const uniqueUsers = await db.selectDistinctFromCacheable(userTable, 300).where(eq(userTable.status, 'active'));
   * ```
   */
  db.selectDistinctFromCacheable = function <T extends MySqlTable>(table: T, cacheTtl?: number) {
    return db.selectAliasedDistinctCacheable(getTableColumns(table), cacheTtl).from(table);
  };

  // ============================================================================
  // CACHE-AWARE MODIFY OPERATIONS
  // ============================================================================

  // Insert with cache context support (participates in cache clearing when used within cache context)
  db.insertWithCacheContext = function <TTable extends MySqlTable>(table: TTable) {
    return insertAndEvictCacheBuilder(db, table, newOptions, false);
  };

  // Insert with cache eviction
  db.insertAndEvictCache = function <TTable extends MySqlTable>(table: TTable) {
    return insertAndEvictCacheBuilder(db, table, newOptions, true);
  };

  // Update with cache context support (participates in cache clearing when used within cache context)
  db.updateWithCacheContext = function <TTable extends MySqlTable>(table: TTable) {
    return updateAndEvictCacheBuilder(db, table, newOptions, false);
  };

  // Update with cache eviction
  db.updateAndEvictCache = function <TTable extends MySqlTable>(table: TTable) {
    return updateAndEvictCacheBuilder(db, table, newOptions, true);
  };

  // Delete with cache context support (participates in cache clearing when used within cache context)
  db.deleteWithCacheContext = function <TTable extends MySqlTable>(table: TTable) {
    return deleteAndEvictCacheBuilder(db, table, newOptions, false);
  };

  // Delete with cache eviction
  db.deleteAndEvictCache = function <TTable extends MySqlTable>(table: TTable) {
    return deleteAndEvictCacheBuilder(db, table, newOptions, true);
  };

  // ============================================================================
  // RAW SQL QUERY EXECUTORS
  // ============================================================================

  /**
   * Executes a raw SQL query with local cache support.
   * This method provides local caching for raw SQL queries within the current invocation context.
   * Results are cached locally and will be returned from cache on subsequent identical queries.
   *
   * @param query - The SQL query to execute (SQLWrapper or string)
   * @returns Promise with query results
   * @example
   * ```typescript
   * // Using SQLWrapper
   * const result = await db.executeQuery(sql`SELECT * FROM users WHERE id = ${userId}`);
   *
   * // Using string
   * const result = await db.executeQuery("SELECT * FROM users WHERE status = 'active'");
   * ```
   */
  db.executeQuery = createRawQueryExecutor(db, newOptions, false);

  /**
   * Executes a raw SQL query with both local and global cache support.
   * This method provides comprehensive caching for raw SQL queries:
   * - Local cache: Within the current invocation context
   * - Global cache: Cross-invocation caching using @forge/kvs
   *
   * @param query - The SQL query to execute (SQLWrapper or string)
   * @param cacheTtl - Optional cache TTL override (defaults to global cache TTL)
   * @returns Promise with query results
   * @example
   * ```typescript
   * // Using SQLWrapper with custom TTL
   * const result = await db.executeQueryCacheable(sql`SELECT * FROM users WHERE id = ${userId}`, 300);
   *
   * // Using string with default TTL
   * const result = await db.executeQueryCacheable("SELECT * FROM users WHERE status = 'active'");
   * ```
   */
  db.executeQueryCacheable = createRawQueryExecutor(db, newOptions, true);

  return db;
}

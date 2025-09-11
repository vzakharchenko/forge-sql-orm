import { AsyncLocalStorage } from "node:async_hooks";
import { AnyMySqlTable } from "drizzle-orm/mysql-core";
import { getTableName } from "drizzle-orm/table";
import { ForgeSqlOrmOptions } from "../core/ForgeSQLQueryBuilder";

/**
 * Interface representing the cache application context.
 * Stores information about tables that are being processed within a cache context.
 */
export interface CacheApplicationContext {
  /** Set of table names (in lowercase) that are being processed within the cache context */
  tables: Set<string>;
}

/**
 * AsyncLocalStorage instance for managing cache context across async operations.
 * This allows tracking which tables are being processed within a cache context
 * without explicitly passing context through function parameters.
 */
export const cacheApplicationContext = new AsyncLocalStorage<CacheApplicationContext>();

/**
 * Saves a table name to the current cache context if one exists.
 * This function is used to track which tables are being processed within
 * a cache context for proper cache invalidation.
 * 
 * @param table - The Drizzle table schema to track
 * @returns Promise that resolves when the table is saved to context
 * 
 * @example
 * ```typescript
 * await saveTableIfInsideCacheContext(usersTable);
 * ```
 */
export async function saveTableIfInsideCacheContext<T extends AnyMySqlTable>(table: T): Promise<void> {
  const context = cacheApplicationContext.getStore();
  if (context) {
    const tableName = getTableName(table).toLowerCase();
    context.tables.add(tableName);
  }
}

/**
 * Checks if the given SQL query contains any tables that are currently being processed
 * within a cache context. This is used to determine if cache should be bypassed
 * for queries that affect tables being modified within the context.
 * 
 * @param sql - The SQL query string to check
 * @param options - ForgeSQL ORM options containing cache configuration
 * @returns Promise that resolves to true if the SQL contains tables in cache context
 * 
 * @example
 * ```typescript
 * const shouldBypassCache = await isTableContainsTableInCacheContext(
 *   "SELECT * FROM users WHERE id = 1",
 *   forgeSqlOptions
 * );
 * ```
 */
export async function isTableContainsTableInCacheContext(
  sql: string,
  options: ForgeSqlOrmOptions,
): Promise<boolean> {
  const context = cacheApplicationContext.getStore();
  if (!context) {
    return false;
  }

  const tables = Array.from(context.tables);
  const lowerSql = sql.toLowerCase();
  
  return tables.some((table) => {
    const tablePattern = options.cacheWrapTable ? `\`${table}\`` : table;
    return lowerSql.includes(tablePattern);
  });
}

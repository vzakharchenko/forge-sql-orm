import { clearExpiredCache } from "../utils/cacheUtils";
import { ForgeSqlOrmOptions } from "../core/ForgeSQLQueryBuilder";

/**
 * Scheduler trigger for clearing expired cache entries.
 * 
 * This trigger should be configured as a Forge scheduler to automatically
 * clean up expired cache entries based on their TTL (Time To Live).
 * 
 * @param options - Optional ForgeSQL ORM configuration. If not provided,
 *                  uses default cache settings with cacheEntityName: "cache"
 * @returns Promise that resolves to HTTP response object
 * 
 * @example
 * ```typescript
 * // In your index.ts
 * import { clearCacheSchedulerTrigger } from "forge-sql-orm";
 * 
 * export const clearCache = () => {
 *   return clearCacheSchedulerTrigger({ 
 *     cacheEntityName: "cache", 
 *     logRawSqlQuery: true 
 *   });
 * };
 * ```
 * 
 * @example
 * ```yaml
 * # In manifest.yml
 * scheduledTrigger:
 *   - key: clear-cache-trigger
 *     function: clearCache
 *     interval: fiveMinute
 * 
 * function:
 *   - key: clearCache
 *     handler: index.clearCache
 * ```
 */
export const clearCacheSchedulerTrigger = async (options?: ForgeSqlOrmOptions) => {
  try {
    const newOptions: ForgeSqlOrmOptions = options ?? {
      logRawSqlQuery: false,
      disableOptimisticLocking: false,
      cacheTTL: 120,
      cacheEntityName: "cache",
      cacheEntityQueryName: "sql",
      cacheEntityExpirationName: "expiration",
      cacheEntityDataName: "data",
    };
    if (!newOptions.cacheEntityName) {
      throw new Error("cacheEntityName is not configured");
    }
    await clearExpiredCache(newOptions);

    return {
      headers: { "Content-Type": ["application/json"] },
      statusCode: 200,
      statusText: "OK",
      body: JSON.stringify({
        success: true,
        message: "Cache cleanup completed successfully",
        timestamp: new Date().toISOString()
      }),
    };
  } catch (error) {
    console.error("Error during cache cleanup: ", JSON.stringify(error));
    return {
      headers: { "Content-Type": ["application/json"] },
      statusCode: 500,
      statusText: "Internal Server Error",
      body: JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error during cache cleanup",
        timestamp: new Date().toISOString()
      }),
    };
  }
};

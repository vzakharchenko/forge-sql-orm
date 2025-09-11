import { clearExpiredCache } from "../utils/cacheUtils";
import { ForgeSqlOrmOptions } from "../core/ForgeSQLQueryBuilder";

export const clearCacheSchedulerTrigger = async (options?: ForgeSqlOrmOptions) => {
  try {
    const newOptions: ForgeSqlOrmOptions = options ?? {
      logRawSqlQuery: false,
      disableOptimisticLocking: false,
      cacheTTL: 120,
      cacheEntityQueryName: "sql",
      cacheEntityExpirationName: "expiration",
      cacheEntityDataName: "data",
    };
    if (!newOptions.cacheEntityName) {
      throw new Error("cacheEntityQueryName is not configured");
    }
    await clearExpiredCache(newOptions);

    return {
      headers: { "Content-Type": ["application/json"] },
      statusCode: 200,
      statusText: "OK",
      body: "Clear Cache successfully executed",
    };
  } catch (error) {
    console.error("Error during cleaning cache: ", JSON.stringify(error));
    return {
      headers: { "Content-Type": ["application/json"] },
      statusCode: 500,
      statusText: "Internal Server Error",
      body: error instanceof Error ? error.message : "Unknown error during migration",
    };
  }
};

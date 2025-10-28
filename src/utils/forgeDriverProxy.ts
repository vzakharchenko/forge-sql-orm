import { forgeDriver } from "./forgeDriver";
import { injectSqlHints, SqlHints } from "./sqlHints";
import { ForgeSqlOperation } from "../core/ForgeSQLQueryBuilder";
import { printQueriesWithPlan } from "./sqlUtils";

/**
 * Error codes and constants for query analysis
 */
const QUERY_ERROR_CODES = {
  TIMEOUT: "SQL_QUERY_TIMEOUT",
  OUT_OF_MEMORY_ERRNO: 8175,
} as const;

/**
 * Delay to wait for CLUSTER_STATEMENTS_SUMMARY to be populated
 */
const STATEMENTS_SUMMARY_DELAY_MS = 200;

/**
 * Creates a proxy for the forgeDriver that injects SQL hints and handles query analysis
 * @param forgeSqlOperation - The ForgeSQL operation instance
 * @param options - SQL hints to inject
 * @param logRawSqlQuery - Whether to log raw SQL queries
 * @returns A proxied version of the forgeDriver
 */
export function createForgeDriverProxy(
  forgeSqlOperation: ForgeSqlOperation,
  options?: SqlHints,
  logRawSqlQuery?: boolean,
) {
  return async (
    query: string,
    params: any[],
    method: "all" | "execute",
  ): Promise<{
    rows: any[];
    insertId?: number;
    affectedRows?: number;
  }> => {
    // Inject SQL hints into the query
    const modifiedQuery = injectSqlHints(query, options);

    if (options && logRawSqlQuery && modifiedQuery !== query) {
      // eslint-disable-next-line no-console
      console.debug(`SQL Hints injected: ${modifiedQuery}`);
    }

    const queryStartTime = Date.now();

    try {
      // Execute the query with injected hints
      return await forgeDriver(modifiedQuery, params, method);
    } catch (error: any) {
      // Check if this is a timeout or out-of-memory error that we want to analyze
      const isTimeoutError = error.code === QUERY_ERROR_CODES.TIMEOUT;
      const isOutOfMemoryError =
        error?.context?.debug?.errno === QUERY_ERROR_CODES.OUT_OF_MEMORY_ERRNO;

      if (isTimeoutError || isOutOfMemoryError) {
        if (isTimeoutError) {
          // eslint-disable-next-line no-console
          console.error(` TIMEOUT detected - Query exceeded time limit`);
        } else {
          // eslint-disable-next-line no-console
          console.error(`OUT OF MEMORY detected - Query exceeded memory limit`);
        }

        // Wait for CLUSTER_STATEMENTS_SUMMARY to be populated with our failed query data
        await new Promise((resolve) => setTimeout(resolve, STATEMENTS_SUMMARY_DELAY_MS));

        const queryEndTime = Date.now();
        const queryDuration = queryEndTime - queryStartTime;

        // Analyze the failed query using CLUSTER_STATEMENTS_SUMMARY
        await printQueriesWithPlan(forgeSqlOperation, queryDuration);
      }

      // Log SQL error details if requested
      if (logRawSqlQuery) {
        // eslint-disable-next-line no-console
        console.debug(`SQL Error Details:`, JSON.stringify(error, null, 2));
      }

      // Re-throw the original error
      throw error;
    }
  };
}

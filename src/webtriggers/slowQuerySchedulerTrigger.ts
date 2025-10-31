import { getHttpResponse, TriggerResponse } from "./index";
import { slowQueryPerHours } from "../utils/sqlUtils";
import { ForgeSqlOperation } from "../core/ForgeSQLQueryBuilder";

/**
 * Scheduler trigger for analyzing slow queries from the last specified number of hours.
 *
 * This trigger analyzes slow queries from TiDB's slow query log system table and provides
 * detailed performance information including SQL query text, memory usage, execution time,
 * and execution plans. It's designed to be used as a scheduled trigger in Atlassian Forge
 * to monitor query performance over time.
 *
 * The function queries the slow query system table to find queries executed within the
 * specified time window and logs detailed performance information to the console. Results
 * are limited to the top 50 slow queries to prevent excessive output.
 *
 * @param forgeSQLORM - The ForgeSQL operation instance for database access
 * @param options - Configuration options for the slow query analysis
 * @param options.hours - Number of hours to look back for slow queries (default: 1)
 * @param options.timeout - Timeout in milliseconds for the query execution (default: 2000ms)
 *
 * @returns Promise<TriggerResponse<string>> - HTTP response with JSON stringified query results or error message
 *
 * @example
 * ```typescript
 * import ForgeSQL, { slowQuerySchedulerTrigger } from "forge-sql-orm";
 *
 * const forgeSQL = new ForgeSQL();
 *
 * // Basic usage with default options (1 hour, 2000ms timeout)
 * export const slowQueryTrigger = () =>
 *   slowQuerySchedulerTrigger(forgeSQL, { hours: 1, timeout: 2000 });
 *
 * // Analyze slow queries from the last 6 hours with extended timeout
 * export const sixHourSlowQueryTrigger = () =>
 *   slowQuerySchedulerTrigger(forgeSQL, { hours: 6, timeout: 5000 });
 *
 * // Analyze slow queries from the last 24 hours
 * export const dailySlowQueryTrigger = () =>
 *   slowQuerySchedulerTrigger(forgeSQL, { hours: 24, timeout: 3000 });
 * ```
 *
 * @example
 * ```yaml
 * # manifest.yml configuration
 * scheduledTrigger:
 *   - key: slow-query-trigger
 *     function: slowQueryTrigger
 *     interval: hour
 *
 * function:
 *   - key: slowQueryTrigger
 *     handler: index.slowQueryTrigger
 * ```
 *
 * @remarks
 * - Results are automatically logged to the Forge Developer Console via `console.warn()`
 * - The function returns up to 50 slow queries to prevent excessive logging
 * - Transient timeouts are usually fine; repeated timeouts indicate the diagnostic query itself is slow
 * - This trigger is best used with hourly intervals to catch slow queries in a timely manner
 * - Error responses return HTTP 500 with error details
 *
 * @see {@link slowQueryPerHours} - The underlying function that performs the actual query analysis
 */
export async function slowQuerySchedulerTrigger(
  forgeSQLORM: ForgeSqlOperation,
  options: {
    hours: number;
    timeout: number;
  },
): Promise<TriggerResponse<string>> {
  try {
    return getHttpResponse<string>(
      200,
      JSON.stringify(
        await slowQueryPerHours(forgeSQLORM, options?.hours ?? 1, options?.timeout ?? 3000),
      ),
    );
  } catch (error: any) {
    const errorMessage =
      error?.debug?.sqlMessage ??
      error?.debug?.message ??
      error.message ??
      "Unknown error occurred";
    // eslint-disable-next-line no-console
    console.error(errorMessage);
    return getHttpResponse<string>(500, errorMessage);
  }
}

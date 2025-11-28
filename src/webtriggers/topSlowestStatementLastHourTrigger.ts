import { ForgeSqlOperation } from "../core/ForgeSQLQueryBuilder";
import { slowQuerySchedulerTrigger, TriggerResponse } from "./";
import { OperationType } from "../utils/requestTypeContextUtils";

export interface TriggerOptions {
  warnThresholdMs?: number;
  memoryThresholdBytes?: number;
  showPlan?: boolean;
  operationType?: OperationType;
  topN?: number;
  hours?: number;
  tables?: "SUMMARY_AND_HISTORY" | "CLUSTER_SUMMARY_AND_HISTORY";
}

/**
 * @deprecated This function is deprecated and will be removed in a future version.
 *
 * This function was previously a complex implementation that directly queried
 * CLUSTER_STATEMENTS_SUMMARY tables to analyze query performance. However, this approach
 * had reliability issues with long-running functions where metadata could be evicted
 * before the function completes.
 *
 * The recommended replacement is to use the new observability system with `executeWithMetadata`:
 * - **TopSlowest mode** (default): Deterministic logging of SQL digests executed in resolvers
 * - **SummaryTable mode** (optional): Uses CLUSTER_STATEMENTS_SUMMARY with a short memory window
 * - Automatic fallback mechanisms for long-running functions
 * - More reliable post-mortem diagnostics for Timeout and OOM errors
 *
 * Note: `slowQuerySchedulerTrigger` is a different function that analyzes TiDB's slow query log
 * and is not a direct replacement for this function.
 *
 * For more details on the improvements and migration path, see:
 * https://community.developer.atlassian.com/t/practical-sql-observability-for-forge-apps-with-forge-sql-orm/123456
 *
 * @param orm - ForgeSQL ORM instance
 * @param options - Configuration options (currently passed to slowQuerySchedulerTrigger as a temporary wrapper)
 * @returns Promise<TriggerResponse<string>> - HTTP response with query results or error
 *
 * @example
 * ```typescript
 * // Old usage (deprecated):
 * await topSlowestStatementLastHourTrigger(forgeSQL, { hours: 1 });
 *
 * // New usage (recommended - use executeWithMetadata in your resolvers):
 * await forgeSQL.executeWithMetadata(
 *   async () => {
 *     // your resolver logic
 *   },
 *   async (totalDbTime, totalResponseSize, printPlan) => {
 *     // custom observability logic
 *     if (totalDbTime > 1000) await printPlan();
 *   },
 *   {
 *     mode: "TopSlowest",
 *     topQueries: 1,
 *     showSlowestPlans: true
 *   }
 * );
 * ```
 */
export const topSlowestStatementLastHourTrigger = async (
  orm: ForgeSqlOperation,
  options?: TriggerOptions,
): Promise<TriggerResponse<string>> => {
  return slowQuerySchedulerTrigger(
    orm,
    options ? { timeout: 3000, hours: options.hours ?? 1 } : { timeout: 3000, hours: 1 },
  );
};

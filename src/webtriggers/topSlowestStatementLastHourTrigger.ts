import { ForgeSqlOperation } from "../core/ForgeSQLQueryBuilder";
import {clusterStatementsSummary, clusterStatementsSummaryHistory, statementsSummary} from "../core/SystemTables";
import { desc, gte, sql } from "drizzle-orm";
import { unionAll } from "drizzle-orm/mysql-core";
import { formatLimitOffset } from "../utils/sqlUtils";
import { OperationType } from "../utils/requestTypeContextUtils";

const DEFAULT_MEMORY_THRESHOLD = 8 * 1024 * 1024;
const DEFAULT_TIMEOUT = 300;
/**
 * Scheduler trigger: log and return the single slowest statement from the last hour, filtered by latency OR memory usage.
 *
 * When scheduled (e.g. hourly), this trigger queries
 * INFORMATION_SCHEMA.CLUSTER_STATEMENTS_SUMMARY_HISTORY for the last hour
 * and prints the TOP 1 entry (by AVG_LATENCY) if it exceeds either threshold.
 *
 * **OR Logic**: Statements are included if they exceed EITHER threshold:
 * - avgLatencyMs > warnThresholdMs OR
 * - avgMemBytes > memoryThresholdBytes
 *
 * **Pro Tips:**
 * - Memory-only monitoring: Set warnThresholdMs to 10000ms (effectively disabled)
 * - Latency-only monitoring: Set memoryThresholdBytes to 16MB (16 * 1024 * 1024) (effectively disabled)
 * - Combined monitoring: Use both thresholds for comprehensive monitoring
 *
 * Excludes statements with empty `digestText`, empty `digest`, or service statements (`Use`, `Set`, `Show`).
 *
 * Logging rule:
 *  - Query exceeds warnThresholdMs OR memoryThresholdBytes → console.warn (logged)
 *  - otherwise → not logged
 *
 * @param orm             ForgeSQL ORM instance (required)
 * @param options         Configuration options object
 * @param options.warnThresholdMs Milliseconds threshold for logging and filtering (default: 300ms)
 * @param options.memoryThresholdBytes Bytes threshold for average memory usage (default: 8MB)
 * @param options.showPlan Whether to include execution plan in logs (default: false)
 * @param options.maxQueryMs Maximum query execution time in milliseconds (default: 10,000)
 * @param options.retries Number of retry attempts on failure (default: 2)
 * @param options.retryBaseDelayMs Initial delay before retry in milliseconds (default: 2,000)
 * @param options.retryBackoffFactor Factor by which the retry delay increases after each attempt (default: 2)
 * @returns HTTP response with a JSON payload containing the filtered rows
 *
 * @example
 * ```ts
 * import ForgeSQL, { topSlowestStatementLastHourTrigger } from "forge-sql-orm";
 *
 * const FORGE_SQL_ORM = new ForgeSQL();
 *
 * // Default thresholds: 300ms latency OR 8MB memory
 * export const topSlowQueryTrigger = () =>
 *   topSlowestStatementLastHourTrigger(FORGE_SQL_ORM);
 *
 * // Only latency monitoring: 500ms threshold (memory effectively disabled)
 * export const latencyOnlyTrigger = () =>
 *   topSlowestStatementLastHourTrigger(FORGE_SQL_ORM, { warnThresholdMs: 500, memoryThresholdBytes: 16 * 1024 * 1024 });
 *
 * // Only memory monitoring: 4MB threshold (latency effectively disabled)
 * export const memoryOnlyTrigger = () =>
 *   topSlowestStatementLastHourTrigger(FORGE_SQL_ORM, { warnThresholdMs: 10000, memoryThresholdBytes: 4 * 1024 * 1024 });
 *
 * // Both thresholds: 500ms latency OR 8MB memory
 * export const bothThresholdsTrigger = () =>
 *   topSlowestStatementLastHourTrigger(FORGE_SQL_ORM, { warnThresholdMs: 500, memoryThresholdBytes: 8 * 1024 * 1024 });
 *
 * // With execution plan in logs
 * export const withPlanTrigger = () =>
 *   topSlowestStatementLastHourTrigger(FORGE_SQL_ORM, { showPlan: true });
 *
 *
 * @example
 * ```yaml
 * scheduledTrigger:
 *   - key: top-slow-query-trigger
 *     function: topSlowQueryTrigger
 *     interval: hour
 *
 * function:
 *   - key: topSlowQueryTrigger
 *     handler: index.topSlowQueryTrigger
 * ```
 */
// Main scheduler trigger function to log the single slowest SQL statement from the last hour.
export const topSlowestStatementLastHourTrigger = async (
  orm: ForgeSqlOperation,
  options?: {
    warnThresholdMs?: number;
    memoryThresholdBytes?: number;
    showPlan?: boolean;
    operationType?: OperationType;
    topN?: number;
    hours?: number;
    tables?: "SUMMARY_AND_HISTORY"|"CLUSTER_SUMMARY_AND_HISTORY"
  },
) => {
  // Validate required parameters
  if (!orm) {
    return {
      statusCode: 500,
      headers: { "Content-Type": ["application/json"] },
      body: JSON.stringify({
        success: false,
        message: "ORM instance is required",
        timestamp: new Date().toISOString(),
      }),
    };
  }
  let newOptions = options ?? {
    warnThresholdMs: DEFAULT_TIMEOUT,
    memoryThresholdBytes: DEFAULT_MEMORY_THRESHOLD,
    showPlan: false,
    operationType: "DML",
      topN: 1,
      hours: 1,
      tables: 'SUMMARY_AND_HISTORY'
  };

  // Helper: Convert nanoseconds to milliseconds (for latency fields)
  const nsToMs = (v: unknown) => {
    const n = Number(v);
    return Number.isFinite(n) ? n / 1e6 : NaN;
  };

  // Helper: Convert bytes to megabytes (for memory fields)
  const bytesToMB = (v: unknown) => {
    const n = Number(v);
    return Number.isFinite(n) ? n / (1024 * 1024) : NaN;
  };

  // Helper: JSON.stringify replacer to handle BigInt values (so BigInt serializes as string)
  const jsonSafeStringify = (value: unknown) =>
    JSON.stringify(value, (_k, v) => (typeof v === "bigint" ? v.toString() : v));

  /**
   * Simple SQL sanitizer for safe logging.
   * - removes comments
   * - replaces string and numeric literals with '?'
   * - normalizes whitespace
   * - truncates long queries
   */
  function sanitizeSQL(sql: string, maxLen = 1000): string {
    let s = sql;

    // 1. Remove comments (-- ... and /* ... */)
    s = s.replace(/--[^\n\r]*/g, "").replace(/\/\*[\s\S]*?\*\//g, "");

    // 2. Replace string literals with '?'
    s = s.replace(/'(?:\\'|[^'])*'/g, "?");
    // 3. Replace numbers with '?'
    s = s.replace(/\b-?\d+(?:\.\d+)?\b/g, "?");
    // 4. Normalize whitespace
    s = s.replace(/\s+/g, " ").trim();
    // 5. Truncate long queries
    if (s.length > maxLen) {
      s = s.slice(0, maxLen) + " …[truncated]";
    }
    return s;
  }

  /**
   * Promise timeout helper: rejects if the promise doesn't settle within `ms`.
   * Logs a warning on timeout and lets the caller decide how to proceed.
   */
  async function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      return await Promise.race<T>([
        p,
        new Promise<T>((_resolve, reject) => {
          timer = setTimeout(() => reject(new Error(`TIMEOUT:${ms}`)), ms);
        }),
      ]);
    } finally {
      if (timer) clearTimeout(timer);
    }
  }

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async function executeWithRetries<T>(task: () => Promise<T>, label: string): Promise<T> {
    let attempt = 0;
    let delay = 1_000;
    // attempts = 1 (initial) + retries
    while (true) {
      try {
        attempt++;
        return await task();
      } catch (e: any) {
        const msg = String(e?.message ?? e);
        const isTimeout = msg.startsWith("TIMEOUT:");
        if (attempt > 2) throw e;
        // eslint-disable-next-line no-console
        console.warn(
          `${label}: attempt ${attempt} failed${isTimeout ? " (timeout)" : e}; retrying in ${delay}ms...`,
        );
        await sleep(delay);
      }
    }
  }

  // Number of top slow queries to fetch
  const TOP_N = newOptions.topN ?? 1;

  try {
    // Get references to system summary tables
    const summaryHistory = statementsSummary;
    const summary = statementsSummary;
    const summaryHistoryCluster = clusterStatementsSummaryHistory;
    const summaryCluster = clusterStatementsSummary;
    // Helper to define the selected fields (selection shape) for both tables
    const selectShape = (t: typeof summaryHistory | typeof summary| typeof summaryCluster| typeof summaryHistoryCluster) => ({
      digest: t.digest,
      stmtType: t.stmtType,
      schemaName: t.schemaName,
      execCount: t.execCount,

      avgLatencyNs: t.avgLatency,
      maxLatencyNs: t.maxLatency,
      minLatencyNs: t.minLatency,

      avgProcessTimeNs: t.avgProcessTime,
      avgWaitTimeNs: t.avgWaitTime,
      avgBackoffTimeNs: t.avgBackoffTime,

      avgTotalKeys: t.avgTotalKeys,
      firstSeen: t.firstSeen,
      lastSeen: t.lastSeen,
      planInCache: t.planInCache,
      planCacheHits: t.planCacheHits,
      digestText: t.digestText,
      plan: t.plan,
      avgMemBytes: (t as any).avgMem,
      maxMemBytes: (t as any).maxMem,
    });

    // Filters: Only include rows from the last hour for each table
    const lastHoursFilterHistory = gte(
      summaryHistory.summaryEndTime,
      sql`DATE_SUB(NOW(), INTERVAL ${newOptions.hours ?? 1} HOUR)`,
    );
    const lastHoursFilterSummary = gte(
      summary.summaryEndTime,
      sql`DATE_SUB(NOW(), INTERVAL ${newOptions.hours ?? 1} HOUR)`,
    );
    const lastHoursFilterHistoryCluster = gte(
      summaryHistoryCluster.summaryEndTime,
      sql`DATE_SUB(NOW(), INTERVAL ${newOptions.hours ?? 1} HOUR)`,
    );
    const lastHoursFilterSummaryCluster = gte(
      summaryCluster.summaryEndTime,
      sql`DATE_SUB(NOW(), INTERVAL ${newOptions.hours ?? 1} HOUR)`,
    );

    // Query for summary history table (last hour)
    const qHistory = orm
      .getDrizzleQueryBuilder()
      .select(selectShape(summaryHistory))
      .from(summaryHistory)
      .where(lastHoursFilterHistory);

    const qHistoryCluster = orm
      .getDrizzleQueryBuilder()
      .select(selectShape(summaryHistoryCluster))
      .from(summaryHistoryCluster)
      .where(lastHoursFilterHistoryCluster);

    // Query for summary table (last hour)
    const qSummary = orm
      .getDrizzleQueryBuilder()
      .select(selectShape(summary))
      .from(summary)
      .where(lastHoursFilterSummary);
    const qSummaryCluster = orm
      .getDrizzleQueryBuilder()
      .select(selectShape(summaryCluster))
      .from(summaryCluster)
      .where(lastHoursFilterSummaryCluster);
    let tables = newOptions.tables ?? 'CLUSTER_SUMMARY_AND_HISTORY'
    // Use UNION ALL to combine results from both tables (avoids duplicates, keeps all rows)
    // This is necessary because some statements may only be present in one of the tables.
    let combined = unionAll(qHistory, qSummary).as("combined");
     switch (tables) {
         case 'SUMMARY_AND_HISTORY': {
             combined = unionAll(qHistory, qSummary).as("combined");
             break;
         }
         case 'CLUSTER_SUMMARY_AND_HISTORY': {
             combined = unionAll(qHistoryCluster, qSummaryCluster).as("combined");
             break;
         }
         default: {
             throw new Error('Unsupported table '+tables)
         }
     }

    // Threshold in nanoseconds (warnThresholdMs → ns)
    const thresholdNs = Math.floor((newOptions.warnThresholdMs ?? DEFAULT_TIMEOUT) * 1e6);
    // memoryThresholdBytes is already provided in bytes (default 8MB)
    const memoryThresholdBytes = newOptions.memoryThresholdBytes ?? DEFAULT_MEMORY_THRESHOLD;

    // Group duplicates by digest+stmtType+schemaName and aggregate metrics
    const grouped = orm
      .getDrizzleQueryBuilder()
      .select({
        digest: combined.digest,
        stmtType: combined.stmtType,
        schemaName: combined.schemaName,
        execCount: sql<number>`SUM(${combined.execCount})`.as("execCount"),

        avgLatencyNs: sql<number>`MAX(${combined.avgLatencyNs})`.as("avgLatencyNs"),
        maxLatencyNs: sql<number>`MAX(${combined.maxLatencyNs})`.as("maxLatencyNs"),
        minLatencyNs: sql<number>`MIN(${combined.minLatencyNs})`.as("minLatencyNs"),

        avgProcessTimeNs: sql<number>`MAX(${combined.avgProcessTimeNs})`.as("avgProcessTimeNs"),
        avgWaitTimeNs: sql<number>`MAX(${combined.avgWaitTimeNs})`.as("avgWaitTimeNs"),
        avgBackoffTimeNs: sql<number>`MAX(${combined.avgBackoffTimeNs})`.as("avgBackoffTimeNs"),

        avgMemBytes: sql<number>`MAX(${combined.avgMemBytes})`.as("avgMemBytes"),
        maxMemBytes: sql<number>`MAX(${combined.maxMemBytes})`.as("maxMemBytes"),

        avgTotalKeys: sql<number>`MAX(${combined.avgTotalKeys})`.as("avgTotalKeys"),
        firstSeen: sql<string>`MIN(${combined.firstSeen})`.as("firstSeen"),
        lastSeen: sql<string>`MAX(${combined.lastSeen})`.as("lastSeen"),
        planInCache: sql<boolean>`MAX(${combined.planInCache})`.as("planInCache"),
        planCacheHits: sql<number>`SUM(${combined.planCacheHits})`.as("planCacheHits"),
        // Prefer a non-empty sample text/plan via MAX; acceptable for de-dup
        digestText: sql<string>`MAX(${combined.digestText})`.as("digestText"),
        plan: sql<string>`MAX(${combined.plan})`.as("plan"),
      })
      .from(combined)
      .where(
        sql`COALESCE(${combined.digest}, '') <> '' AND COALESCE(${combined.digestText}, '') <> '' AND COALESCE(${combined.stmtType}, '') NOT IN ('Use','Set','Show')`,
      )
      .groupBy(combined.digest, combined.stmtType, combined.schemaName)
      .as("grouped");

    // Build the SELECT each time (Drizzle query builders are single-use once awaited)
    const buildQuery = () => {
      const query = orm
        .getDrizzleQueryBuilder()
        .select({
          digest: grouped.digest,
          stmtType: grouped.stmtType,
          schemaName: grouped.schemaName,
          execCount: grouped.execCount,

          avgLatencyNs: grouped.avgLatencyNs,
          maxLatencyNs: grouped.maxLatencyNs,
          minLatencyNs: grouped.minLatencyNs,

          avgProcessTimeNs: grouped.avgProcessTimeNs,
          avgWaitTimeNs: grouped.avgWaitTimeNs,
          avgBackoffTimeNs: grouped.avgBackoffTimeNs,

          avgMemBytes: grouped.avgMemBytes,
          maxMemBytes: grouped.maxMemBytes,

          avgTotalKeys: grouped.avgTotalKeys,
          firstSeen: grouped.firstSeen,
          lastSeen: grouped.lastSeen,
          planInCache: grouped.planInCache,
          planCacheHits: grouped.planCacheHits,
          digestText: grouped.digestText,
          plan: grouped.plan,
        })
        .from(grouped)
        .where(
          sql`${grouped.avgLatencyNs} > ${thresholdNs} OR ${grouped.avgMemBytes} > ${memoryThresholdBytes}`,
        )
        .orderBy(desc(grouped.avgLatencyNs))
        .limit(formatLimitOffset(TOP_N));
      if (newOptions.operationType === "DDL") {
        return orm.executeDDLActions(async () => await query);
      } else {
        return query;
      }
    };

    const rows = await executeWithRetries(
      () => withTimeout(buildQuery(), 3_000),
      "topSlowestStatementLastHourTrigger",
    );
    // Map each row into a formatted object with ms and rank, for easier consumption/logging
    const formatted = rows.map((r, i) => ({
      rank: i + 1, // 1-based rank in the top N
      digest: r.digest,
      stmtType: r.stmtType,
      schemaName: r.schemaName,
      execCount: r.execCount,
      avgLatencyMs: nsToMs(r.avgLatencyNs), // Convert ns to ms for readability
      maxLatencyMs: nsToMs(r.maxLatencyNs),
      minLatencyMs: nsToMs(r.minLatencyNs),
      avgProcessTimeMs: nsToMs(r.avgProcessTimeNs),
      avgWaitTimeMs: nsToMs(r.avgWaitTimeNs),
      avgBackoffTimeMs: nsToMs(r.avgBackoffTimeNs),
      avgMemMB: bytesToMB(r.avgMemBytes),
      maxMemMB: bytesToMB(r.maxMemBytes),
      avgMemBytes: r.avgMemBytes,
      maxMemBytes: r.maxMemBytes,
      avgTotalKeys: r.avgTotalKeys,
      firstSeen: r.firstSeen,
      lastSeen: r.lastSeen,
      planInCache: r.planInCache,
      planCacheHits: r.planCacheHits,
      digestText: newOptions.operationType === "DDL" ? r.digestText : sanitizeSQL(r.digestText),
      plan: newOptions.showPlan ? r.plan : undefined,
    }));

    // Log each entry (SQL already filtered by threshold)
    for (const f of formatted) {
      // eslint-disable-next-line no-console
      console.warn(
        `${f.rank}. ${f.stmtType}  avg=${f.avgLatencyMs?.toFixed?.(2)}ms  max=${f.maxLatencyMs?.toFixed?.(2)}ms  mem≈${f.avgMemMB?.toFixed?.(2)}MB(max ${f.maxMemMB?.toFixed?.(2)}MB)  exec=${f.execCount} \n` +
          `   digest=${f.digest}\n` +
          `   sql=${(f.digestText || "").slice(0, 300)}${f.digestText && f.digestText.length > 300 ? "…" : ""}`,
      );
      if (newOptions.showPlan && f.plan) {
        // print full plan separately (not truncated)
        // eslint-disable-next-line no-console
        console.warn(`   full plan:\n${f.plan}`);
      }
    }

    // Return HTTP response with JSON payload of the results
    return {
      headers: { "Content-Type": ["application/json"] },
      statusCode: 200,
      statusText: "OK",
      body: jsonSafeStringify({
        success: true,
        window: `last_${newOptions.hours??1}h`,
        top: TOP_N,
        warnThresholdMs: newOptions.warnThresholdMs,
        memoryThresholdBytes: newOptions.memoryThresholdBytes,
        showPlan: newOptions.showPlan,
        rows: formatted,
        generatedAt: new Date().toISOString(),
      }),
    };
  } catch (error: any) {
    // Catch any error (DB, logic, etc) and log with details for debugging
    // This ensures the scheduler never crashes and always returns a response.
    // eslint-disable-next-line no-console
    console.warn(
      "Error in topSlowestStatementLastHourTrigger (one-off errors can be ignored; if it recurs, investigate):",
      error?.cause?.context?.debug?.sqlMessage ?? error?.cause ?? error,
    );
    return {
      headers: { "Content-Type": ["application/json"] },
      statusCode: 500,
      statusText: "Internal Server Error",
      body: jsonSafeStringify({
        success: false,
        message: "Failed to fetch or log slow queries",
        error: error?.cause?.context?.debug?.sqlMessage ?? error?.cause?.message,
        timestamp: new Date().toISOString(),
      }),
    };
  }
};

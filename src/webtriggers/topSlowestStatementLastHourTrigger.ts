import { ForgeSqlOperation } from "../core/ForgeSQLQueryBuilder";
import { clusterStatementsSummary, clusterStatementsSummaryHistory } from "../core/SystemTables";
import { desc, gte, sql } from "drizzle-orm";
import { unionAll } from "drizzle-orm/mysql-core";
import { formatLimitOffset } from "../utils/sqlUtils";

/**
 * Scheduler trigger: log and return the single slowest statement from the last hour, filtered by latency.
 *
 * When scheduled (e.g. hourly), this trigger queries
 * INFORMATION_SCHEMA.CLUSTER_STATEMENTS_SUMMARY_HISTORY for the last hour
 * and prints the TOP 1 entry (by AVG_LATENCY) if and only if
 * its average latency (ns → ms) exceeds `warnThresholdMs`.
 *
 * Both logging and returned rows only include statements slower than `warnThresholdMs`.
 *
 * Excludes statements with empty `digestText`, empty `digest`, or service statements (`Use`, `Set`, `Show`).
 *
 * Logging rule:
 *  - avgLatencyMs > warnThresholdMs → console.warn (logged)
 *  - otherwise → not logged
 *
 * Additionally, statements are included if their average memory usage exceeds `memoryThresholdBytes` (default: 8MB).
 *
 * @param orm             ForgeSQL ORM instance (required)
 * @param warnThresholdMs Milliseconds threshold for logging and filtering (default: 300ms)
 * @param memoryThresholdBytes Bytes threshold for average memory usage (default: 8MB)
 * @returns HTTP response with a JSON payload containing the filtered rows
 *
 * @example
 * ```ts
 * import ForgeSQL, { topSlowestStatementLastHourTrigger } from "forge-sql-orm";
 *
 * const FORGE_SQL_ORM = new ForgeSQL();
 *
 * // Default threshold: 300ms
 * export const topSlowQueryTrigger = () =>
 *   topSlowestStatementLastHourTrigger(FORGE_SQL_ORM);
 *
 * // Custom threshold: log only entries slower than 500ms
 * export const topSlowQueryTrigger500 = () =>
 *   topSlowestStatementLastHourTrigger(FORGE_SQL_ORM, 500);
 *
 * // Custom thresholds: 500ms latency OR 8MB memory
 * export const topSlowQueryTriggerMem = () =>
 *   topSlowestStatementLastHourTrigger(FORGE_SQL_ORM, 500, 8 * 1024 * 1024);
 * ```
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
  // warnThresholdMs: Only log queries whose average latency (ms) exceeds this threshold (default: 300ms)
  warnThresholdMs: number = 300,
  // memoryThresholdBytes: Also include queries whose avg memory usage exceeds this threshold (default: 8MB)
  memoryThresholdBytes: number = 8 * 1024 * 1024,
) => {
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

  // Number of top slow queries to fetch
  const TOP_N = 1;

  try {
    // Get references to system summary tables
    const summaryHistory = clusterStatementsSummaryHistory;
    const summary = clusterStatementsSummary;
    // Helper to define the selected fields (selection shape) for both tables
    const selectShape = (t: typeof summaryHistory | typeof summary) => ({
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
    const lastHourFilterHistory = gte(
      summaryHistory.summaryEndTime,
      sql`DATE_SUB(NOW(), INTERVAL 1 HOUR)`,
    );
    const lastHourFilterSummary = gte(
      summary.summaryEndTime,
      sql`DATE_SUB(NOW(), INTERVAL 1 HOUR)`,
    );

    // Query for summary history table (last hour)
    const qHistory = orm
      .getDrizzleQueryBuilder()
      .select(selectShape(summaryHistory))
      .from(summaryHistory)
      .where(lastHourFilterHistory);

    // Query for summary table (last hour)
    const qSummary = orm
      .getDrizzleQueryBuilder()
      .select(selectShape(summary))
      .from(summary)
      .where(lastHourFilterSummary);

    // Use UNION ALL to combine results from both tables (avoids duplicates, keeps all rows)
    // This is necessary because some statements may only be present in one of the tables.
    const combined = unionAll(qHistory, qSummary).as("combined");

    // Threshold in nanoseconds (warnThresholdMs → ns)
    const thresholdNs = Math.floor(warnThresholdMs * 1e6);
    // memoryThresholdBytes is already provided in bytes (default 8MB)

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

    // Final selection: filter by threshold, sort by avg latency desc, limit TOP_N
    const rows = await orm
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
      digestText: r.digestText,
      plan: r.plan,
    }));

    // Log each entry (SQL already filtered by threshold)
    for (const f of formatted) {
      // eslint-disable-next-line no-console
      console.warn(
        `${f.rank}. ${f.stmtType}  avg=${f.avgLatencyMs?.toFixed?.(2)}ms  max=${f.maxLatencyMs?.toFixed?.(2)}ms  mem≈${f.avgMemMB?.toFixed?.(2)}MB(max ${f.maxMemMB?.toFixed?.(2)}MB)  exec=${f.execCount} \n` +
          `   digest=${f.digest}\n` +
          `   sql=${(f.digestText || "").slice(0, 300)}${f.digestText && f.digestText.length > 300 ? "…" : ""}`,
      );
      if (f.plan) {
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
        window: "last_1h",
        top: TOP_N,
        warnThresholdMs,
        memoryThresholdBytes,
        rows: formatted,
        generatedAt: new Date().toISOString(),
      }),
    };
  } catch (error: any) {
    // Catch any error (DB, logic, etc) and log with details for debugging
    // This ensures the scheduler never crashes and always returns a response.
    // eslint-disable-next-line no-console
    console.error(
      "Error in topSlowestStatementLastHourTrigger:",
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

import { ForgeSqlOperation } from "../core/ForgeSQLQueryBuilder";
import { clusterStatementsSummary, clusterStatementsSummaryHistory, statementsSummary } from "../core/SystemTables";
import { desc, gte, sql } from "drizzle-orm";
import { unionAll } from "drizzle-orm/mysql-core";
import { formatLimitOffset } from "../utils/sqlUtils";
import { OperationType } from "../utils/requestTypeContextUtils";

// Constants
const DEFAULT_MEMORY_THRESHOLD = 8 * 1024 * 1024; // 8MB
const DEFAULT_TIMEOUT = 300; // 300ms
const DEFAULT_TOP_N = 1;
const DEFAULT_HOURS = 1;
const DEFAULT_TABLES = 'CLUSTER_SUMMARY_AND_HISTORY' as const;
const MAX_QUERY_TIMEOUT_MS = 3_000;
const MAX_SQL_LENGTH = 1000;
const RETRY_ATTEMPTS = 2;
const RETRY_BASE_DELAY_MS = 1_000;

// Types
interface TriggerOptions {
    warnThresholdMs?: number;
    memoryThresholdBytes?: number;
    showPlan?: boolean;
    operationType?: OperationType;
    topN?: number;
    hours?: number;
  tables?: "SUMMARY_AND_HISTORY" | "CLUSTER_SUMMARY_AND_HISTORY";
}

interface FormattedQueryResult {
  rank: number;
  digest: string;
  stmtType: string;
  schemaName: string;
  execCount: number;
  avgLatencyMs: number;
  maxLatencyMs: number;
  minLatencyMs: number;
  avgProcessTimeMs: number;
  avgWaitTimeMs: number;
  avgBackoffTimeMs: number;
  avgMemMB: number;
  maxMemMB: number;
  avgMemBytes: number;
  maxMemBytes: number;
  avgTotalKeys: number;
  firstSeen: string;
  lastSeen: string;
  planInCache: boolean;
  planCacheHits: number;
  digestText: string;
  plan?: string;
}

interface TriggerResponse {
  headers: { "Content-Type": string[] };
  statusCode: number;
  statusText?: string;
  body: string;
}

// Utility Functions
/**
 * Converts nanoseconds to milliseconds for better readability
 */
const nsToMs = (value: unknown): number => {
  const n = Number(value);
    return Number.isFinite(n) ? n / 1e6 : NaN;
  };

/**
 * Converts bytes to megabytes for better readability
 */
const bytesToMB = (value: unknown): number => {
  const n = Number(value);
    return Number.isFinite(n) ? n / (1024 * 1024) : NaN;
  };

/**
 * JSON stringify replacer to handle BigInt values safely
 */
const jsonSafeStringify = (value: unknown): string =>
    JSON.stringify(value, (_k, v) => (typeof v === "bigint" ? v.toString() : v));

  /**
 * Sanitizes SQL for safe logging by removing comments, replacing literals, and truncating
 */
const sanitizeSQL = (sql: string, maxLen = MAX_SQL_LENGTH): string => {
    let s = sql;

  // Remove comments (-- ... and /* ... */)
    s = s.replace(/--[^\n\r]*/g, "").replace(/\/\*[\s\S]*?\*\//g, "");

  // Replace string literals with '?'
    s = s.replace(/'(?:\\'|[^'])*'/g, "?");
  
  // Replace numbers with '?'
    s = s.replace(/\b-?\d+(?:\.\d+)?\b/g, "?");
  
  // Normalize whitespace
    s = s.replace(/\s+/g, " ").trim();
  
  // Truncate long queries
    if (s.length > maxLen) {
      s = s.slice(0, maxLen) + " …[truncated]";
    }
  
    return s;
};

  /**
 * Promise timeout helper that rejects if the promise doesn't settle within the specified time
   */
const withTimeout = async <T>(promise: Promise<T>, ms: number): Promise<T> => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      return await Promise.race<T>([
      promise,
        new Promise<T>((_resolve, reject) => {
          timer = setTimeout(() => reject(new Error(`TIMEOUT:${ms}`)), ms);
        }),
      ]);
    } finally {
      if (timer) clearTimeout(timer);
    }
};

/**
 * Sleep utility function
 */
const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Executes a task with retries and exponential backoff
 */
const executeWithRetries = async <T>(task: () => Promise<T>, label: string): Promise<T> => {
    let attempt = 0;
  let delay = RETRY_BASE_DELAY_MS;
  
    while (true) {
      try {
        attempt++;
        return await task();
    } catch (error: any) {
      const msg = String(error?.message ?? error);
        const isTimeout = msg.startsWith("TIMEOUT:");
      
      if (attempt > RETRY_ATTEMPTS) throw error;
        // eslint-disable-next-line no-console
        console.warn(
        `${label}: attempt ${attempt} failed${isTimeout ? " (timeout)" : ""}; retrying in ${delay}ms...`,
        error
        );
      
        await sleep(delay);
      delay *= 2; // Exponential backoff
    }
  }
};

/**
 * Creates error response for failed operations
 */
const createErrorResponse = (message: string, error?: any): TriggerResponse => ({
  headers: { "Content-Type": ["application/json"] },
  statusCode: 500,
  statusText: "Internal Server Error",
  body: jsonSafeStringify({
    success: false,
    message,
    error: error?.cause?.context?.debug?.sqlMessage ?? error?.cause?.message?? error?.message,
    timestamp: new Date().toISOString(),
  }),
});

/**
 * Creates success response with query results
 */
const createSuccessResponse = (
  formatted: FormattedQueryResult[],
  options: Required<TriggerOptions>
): TriggerResponse => ({
  headers: { "Content-Type": ["application/json"] },
  statusCode: 200,
  statusText: "OK",
  body: jsonSafeStringify({
    success: true,
    window: `last_${options.hours}h`,
    top: options.topN,
    warnThresholdMs: options.warnThresholdMs,
    memoryThresholdBytes: options.memoryThresholdBytes,
    showPlan: options.showPlan,
    rows: formatted,
    generatedAt: new Date().toISOString(),
  }),
});

// Query Building Functions
/**
 * Creates the selection shape for query results
 */
const createSelectShape = (table: any) => ({
  digest: table.digest,
  stmtType: table.stmtType,
  schemaName: table.schemaName,
  execCount: table.execCount,
  avgLatencyNs: table.avgLatency,
  maxLatencyNs: table.maxLatency,
  minLatencyNs: table.minLatency,
  avgProcessTimeNs: table.avgProcessTime,
  avgWaitTimeNs: table.avgWaitTime,
  avgBackoffTimeNs: table.avgBackoffTime,
  avgTotalKeys: table.avgTotalKeys,
  firstSeen: table.firstSeen,
  lastSeen: table.lastSeen,
  planInCache: table.planInCache,
  planCacheHits: table.planCacheHits,
  digestText: table.digestText,
  plan: table.plan,
  avgMemBytes: (table as any).avgMem,
  maxMemBytes: (table as any).maxMem,
});

/**
 * Builds the combined query from multiple tables
 */
const buildCombinedQuery = (orm: ForgeSqlOperation, options: Required<TriggerOptions>) => {
    const summaryHistory = statementsSummary;
    const summary = statementsSummary;
    const summaryHistoryCluster = clusterStatementsSummaryHistory;
    const summaryCluster = clusterStatementsSummary;

  // Time filters for last N hours
  const lastHoursFilter = (table: any) => gte(
    table.summaryEndTime,
    sql`DATE_SUB(NOW(), INTERVAL ${options.hours} HOUR)`
  );

  // Build queries for each table
    const qHistory = orm
      .getDrizzleQueryBuilder()
    .select(createSelectShape(summaryHistory))
      .from(summaryHistory)
    .where(lastHoursFilter(summaryHistory));

  const qSummary = orm
    .getDrizzleQueryBuilder()
    .select(createSelectShape(summary))
    .from(summary)
    .where(lastHoursFilter(summary));

    const qHistoryCluster = orm
      .getDrizzleQueryBuilder()
    .select(createSelectShape(summaryHistoryCluster))
      .from(summaryHistoryCluster)
    .where(lastHoursFilter(summaryHistoryCluster));

    const qSummaryCluster = orm
      .getDrizzleQueryBuilder()
    .select(createSelectShape(summaryCluster))
      .from(summaryCluster)
    .where(lastHoursFilter(summaryCluster));

  // Combine tables based on configuration
  switch (options.tables) {
    case 'SUMMARY_AND_HISTORY':
      return unionAll(qHistory, qSummary).as("combined");
    case 'CLUSTER_SUMMARY_AND_HISTORY':
      return unionAll(qHistoryCluster, qSummaryCluster).as("combined");
    default:
      throw new Error(`Unsupported table configuration: ${options.tables}`);
  }
};

/**
 * Builds the final grouped query with filtering and sorting
 */
const buildGroupedQuery = (orm: ForgeSqlOperation, combined: any) => {
  return orm
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
        digestText: sql<string>`MAX(${combined.digestText})`.as("digestText"),
        plan: sql<string>`MAX(${combined.plan})`.as("plan"),
      })
      .from(combined)
      .where(
      sql`COALESCE(${combined.digest}, '') <> '' AND COALESCE(${combined.digestText}, '') <> '' AND COALESCE(${combined.stmtType}, '') NOT IN ('Use','Set','Show')`
      )
      .groupBy(combined.digest, combined.stmtType, combined.schemaName)
      .as("grouped");
};

/**
 * Builds the final query with filtering, sorting, and limiting
 */
const buildFinalQuery = (orm: ForgeSqlOperation, grouped: any, options: Required<TriggerOptions>) => {
  const thresholdNs = Math.floor(options.warnThresholdMs * 1e6);
  const memoryThresholdBytes = options.memoryThresholdBytes;

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
      sql`${grouped.avgLatencyNs} > ${thresholdNs} OR ${grouped.avgMemBytes} > ${memoryThresholdBytes}`
        )
        .orderBy(desc(grouped.avgLatencyNs))
    .limit(formatLimitOffset(options.topN));

  // Execute with DDL context if specified
  if (options.operationType === "DDL") {
        return orm.executeDDLActions(async () => await query);
  }
  
        return query;
};

/**
 * Formats query results for output
 */
const formatQueryResults = (rows: any[], options: Required<TriggerOptions>): FormattedQueryResult[] => {
  return rows.map((row, index) => ({
    rank: index + 1,
    digest: row.digest,
    stmtType: row.stmtType,
    schemaName: row.schemaName,
    execCount: row.execCount,
    avgLatencyMs: nsToMs(row.avgLatencyNs),
    maxLatencyMs: nsToMs(row.maxLatencyNs),
    minLatencyMs: nsToMs(row.minLatencyNs),
    avgProcessTimeMs: nsToMs(row.avgProcessTimeNs),
    avgWaitTimeMs: nsToMs(row.avgWaitTimeNs),
    avgBackoffTimeMs: nsToMs(row.avgBackoffTimeNs),
    avgMemMB: bytesToMB(row.avgMemBytes),
    maxMemMB: bytesToMB(row.maxMemBytes),
    avgMemBytes: row.avgMemBytes,
    maxMemBytes: row.maxMemBytes,
    avgTotalKeys: row.avgTotalKeys,
    firstSeen: row.firstSeen,
    lastSeen: row.lastSeen,
    planInCache: row.planInCache,
    planCacheHits: row.planCacheHits,
    digestText: options.operationType === "DDL" ? row.digestText : sanitizeSQL(row.digestText),
    plan: options.showPlan ? row.plan : undefined,
  }));
};

/**
 * Logs formatted query results to console
 */
const logQueryResults = (formatted: FormattedQueryResult[], options: Required<TriggerOptions>): void => {
  for (const result of formatted) {
      // eslint-disable-next-line no-console
    console.warn(
      `${result.rank}. ${result.stmtType}  avg=${result.avgLatencyMs?.toFixed?.(2)}ms  max=${result.maxLatencyMs?.toFixed?.(2)}ms  mem≈${result.avgMemMB?.toFixed?.(2)}MB(max ${result.maxMemMB?.toFixed?.(2)}MB)  exec=${result.execCount} \n` +
        `   digest=${result.digest}\n` +
        `   sql=${(result.digestText || "").slice(0, 300)}${result.digestText && result.digestText.length > 300 ? "…" : ""}`
    );
    
    if (options.showPlan && result.plan) {
        // eslint-disable-next-line no-console
      console.warn(`   full plan:\n${result.plan}`);
    }
  }
};

/**
 * Performance monitoring scheduler trigger for Atlassian Forge SQL.
 * 
 * This trigger analyzes query performance from the last hour and identifies slow or memory-intensive queries
 * that exceed configurable thresholds. It's designed specifically for Atlassian Forge's 16 MiB memory limit
 * and provides detailed insights for query optimization.
 *
 * ## Key Features
 * - **Memory-focused monitoring**: Primary focus on memory usage with configurable thresholds
 * - **Atlassian 16 MiB limit awareness**: Designed specifically for Forge SQL's memory constraints
 * - **Execution plan analysis**: Shows detailed query plans to help optimize memory consumption
 * - **Configurable thresholds**: Set custom memory usage and latency thresholds
 * - **Automatic filtering**: Excludes system queries (`Use`, `Set`, `Show`) and empty queries
 * - **Scheduled monitoring**: Run automatically on configurable intervals
 *
 * ## OR Logic Thresholds
 * Statements are included if they exceed **EITHER** threshold:
 * - `avgLatencyMs > warnThresholdMs` **OR**
 * - `avgMemBytes > memoryThresholdBytes`
 *
 * ## Configuration Tips
 * - **Memory-only monitoring**: Set `warnThresholdMs` to 10000ms (effectively disabled)
 * - **Latency-only monitoring**: Set `memoryThresholdBytes` to 16MB (16 * 1024 * 1024) (effectively disabled)
 * - **Combined monitoring**: Use both thresholds for comprehensive monitoring
 * - **Conservative monitoring**: 4MB warning (25% of 16MB limit)
 * - **Default monitoring**: 8MB warning (50% of 16MB limit)
 * - **Aggressive monitoring**: 12MB warning (75% of 16MB limit)
 *
 * ## Exclusions
 * - Statements with empty `digestText` or `digest`
 * - Service statements (`Use`, `Set`, `Show`)
 * - Queries that don't exceed either threshold
 *
 * @param orm - ForgeSQL ORM instance (required)
 * @param options - Configuration options
 * @param options.warnThresholdMs - Milliseconds threshold for latency monitoring (default: 300ms)
 * @param options.memoryThresholdBytes - Bytes threshold for memory usage monitoring (default: 8MB)
 * @param options.showPlan - Whether to include execution plan in logs (default: false)
 * @param options.operationType - Operation type context for query execution (default: "DML")
 * @param options.topN - Number of top slow queries to return (default: 1)
 * @param options.hours - Number of hours to look back (default: 1)
 * @param options.tables - Table configuration to use (default: "CLUSTER_SUMMARY_AND_HISTORY")
 * @returns Promise<TriggerResponse> - HTTP response with query results or error
 *
 * @example
 * ```typescript
 * import ForgeSQL, { topSlowestStatementLastHourTrigger } from "forge-sql-orm";
 *
 * const forgeSQL = new ForgeSQL();
 *
 * // Default thresholds: 300ms latency OR 8MB memory
 * export const performanceTrigger = () =>
 *   topSlowestStatementLastHourTrigger(forgeSQL);
 *
 * // Conservative memory monitoring: 4MB threshold
 * export const conservativeTrigger = () =>
 *   topSlowestStatementLastHourTrigger(forgeSQL, { 
 *     memoryThresholdBytes: 4 * 1024 * 1024 
 *   });
 *
 * // Memory-only monitoring: 4MB threshold (latency effectively disabled)
 * export const memoryOnlyTrigger = () =>
 *   topSlowestStatementLastHourTrigger(forgeSQL, { 
 *     warnThresholdMs: 10000, 
 *     memoryThresholdBytes: 4 * 1024 * 1024 
 *   });
 *
 * // With execution plan in logs
 * export const withPlanTrigger = () =>
 *   topSlowestStatementLastHourTrigger(forgeSQL, { showPlan: true });
 * ```
 *
 * @example
 * ```yaml
 * # manifest.yml configuration
 * scheduledTrigger:
 *   - key: performance-trigger
 *     function: performanceTrigger
 *     interval: hour
 *
 * function:
 *   - key: performanceTrigger
 *     handler: index.performanceTrigger
 * ```
 */
/**
 * Main scheduler trigger function to log the single slowest SQL statement from the last hour.
 * 
 * @param orm - ForgeSQL ORM instance (required)
 * @param options - Configuration options
 * @returns Promise<TriggerResponse> - HTTP response with query results or error
 */
export const topSlowestStatementLastHourTrigger = async (
  orm: ForgeSqlOperation,
  options?: TriggerOptions,
): Promise<TriggerResponse> => {
  // Validate required parameters
  if (!orm) {
    return createErrorResponse("ORM instance is required");
  }

  // Merge options with defaults
  const mergedOptions: Required<TriggerOptions> = {
    warnThresholdMs: options?.warnThresholdMs ?? DEFAULT_TIMEOUT,
    memoryThresholdBytes: options?.memoryThresholdBytes ?? DEFAULT_MEMORY_THRESHOLD,
    showPlan: options?.showPlan ?? false,
    operationType: options?.operationType ?? "DML",
    topN: options?.topN ?? DEFAULT_TOP_N,
    hours: options?.hours ?? DEFAULT_HOURS,
    tables: options?.tables ?? DEFAULT_TABLES,
  };

  try {
    // Build the combined query from multiple tables
    const combined = buildCombinedQuery(orm, mergedOptions);
    
    // Build the grouped query with filtering and aggregation
    const grouped = buildGroupedQuery(orm, combined);
    
    // Build the final query with filtering, sorting, and limiting
    const finalQuery = buildFinalQuery(orm, grouped, mergedOptions);

    // Execute the query with retries and timeout
    const rows = await executeWithRetries(
      () => withTimeout(finalQuery, MAX_QUERY_TIMEOUT_MS),
      "topSlowestStatementLastHourTrigger"
    );

    // Format the results for output
    const formatted = formatQueryResults(rows, mergedOptions);

    // Log the results to console
    logQueryResults(formatted, mergedOptions);

    // Return success response
    return createSuccessResponse(formatted, mergedOptions);

  } catch (error: any) {
    // Log error details for debugging
      // eslint-disable-next-line no-console
    console.warn(
      "Error in topSlowestStatementLastHourTrigger (one-off errors can be ignored; if it recurs, investigate):",
      error?.cause?.context?.debug?.sqlMessage ?? error?.cause ?? error
    );

    // Return error response
    return createErrorResponse("Failed to fetch or log slow queries", error);
  }
};

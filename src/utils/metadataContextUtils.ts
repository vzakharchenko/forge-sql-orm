import { AsyncLocalStorage } from "node:async_hooks";
import { ForgeSQLMetadata } from "./forgeDriver";
import { ForgeSqlOperation } from "../core/ForgeSQLQueryBuilder";
import { ExplainAnalyzeRow } from "../core/SystemTables";
import { printQueriesWithPlan } from "./sqlUtils";
import { Parser } from "node-sql-parser";

const DEFAULT_WINDOW_SIZE = 15 * 1000;

type Statistic = { query: string; params: unknown[]; metadata: ForgeSQLMetadata };

export type QueryPlanMode = "TopSlowest" | "SummaryTable";

export type MetadataQueryOptions = {
  mode?: QueryPlanMode;
  summaryTableWindowTime?: number;
  topQueries?: number;
  showSlowestPlans?: boolean;
  normalizeQuery?: boolean;
};

export type MetadataQueryContext = {
  totalDbExecutionTime: number;
  totalResponseSize: number;
  beginTime: Date;
  options?: MetadataQueryOptions;
  statistics: Statistic[];
  printQueriesWithPlan: () => Promise<void>;
  forgeSQLORM: ForgeSqlOperation;
};

export const metadataQueryContext = new AsyncLocalStorage<MetadataQueryContext>();

/**
 * Creates default options for metadata query context.
 * @returns Default options object
 */
function createDefaultOptions(): Required<MetadataQueryOptions> {
  return {
    mode: "TopSlowest",
    topQueries: 1,
    summaryTableWindowTime: DEFAULT_WINDOW_SIZE,
    showSlowestPlans: true,
    normalizeQuery: true,
  };
}

/**
 * Merges provided options with defaults, using defaults only for undefined fields.
 * @param options - Optional partial options to merge
 * @returns Complete options object with all fields set
 */
function mergeOptionsWithDefaults(options?: MetadataQueryOptions): Required<MetadataQueryOptions> {
  const defaults = createDefaultOptions();
  return {
    mode: options?.mode ?? defaults.mode,
    topQueries: options?.topQueries ?? defaults.topQueries,
    summaryTableWindowTime: options?.summaryTableWindowTime ?? defaults.summaryTableWindowTime,
    showSlowestPlans: options?.showSlowestPlans ?? defaults.showSlowestPlans,
    normalizeQuery: options?.normalizeQuery ?? defaults.normalizeQuery,
  };
}

/**
 * Normalizes SQL query using regex fallback by replacing parameter values with placeholders.
 * Replaces string literals, numeric values, and boolean values with '?' for logging.
 *
 * Note: This is a fallback function used when node-sql-parser fails.
 * It uses simple, safe regex patterns to avoid ReDoS (Regular Expression Denial of Service) vulnerabilities.
 * For proper handling of escaped quotes and complex SQL, use the main normalizeSqlForLogging function
 * which uses node-sql-parser.
 *
 * @param sql - SQL query string to normalize
 * @returns Normalized SQL string with parameters replaced by '?'
 */
function normalizeSqlForLoggingRegex(sql: string): string {
  let normalized = sql;

  // Replace string literals (single quotes) - using simple greedy match
  // This avoids catastrophic backtracking by using a simple [^']* pattern
  // Note: This does not handle SQL-style escaped quotes (doubled quotes: '')
  // For proper handling, use the main normalizeSqlForLogging function with node-sql-parser
  normalized = normalized.replace(/'[^']*'/g, "?");

  // Replace string literals (double quotes) - using simple greedy match
  // Same safety considerations as above
  normalized = normalized.replace(/"[^"]*"/g, "?");

  // Replace numeric literals - simplified pattern to avoid backtracking
  // Match: optional minus, digits, optional decimal point and more digits
  // Using word boundaries (\b) for safety - avoids complex lookahead/lookbehind
  normalized = normalized.replace(/\b-?\d+\.?\d*\b/g, "?");

  // Replace boolean literals - safe pattern with word boundaries
  // Simple alternation with word boundaries - no nested quantifiers
  normalized = normalized.replace(/\b(true|false)\b/gi, "?");

  // Replace NULL values (but be careful not to replace in identifiers)
  // Simple word boundary match - safe from backtracking
  normalized = normalized.replace(/\bNULL\b/gi, "?");

  return normalized;
}

/**
 * Normalizes SQL query by replacing parameter values with placeholders.
 * First attempts to use node-sql-parser for structure normalization, then applies regex for value replacement.
 * Falls back to regex-based normalization if parsing fails.
 * @param sql - SQL query string to normalize
 * @returns Normalized SQL string with parameters replaced by '?'
 */
function normalizeSqlForLogging(sql: string): string {
  try {
    const parser = new Parser();
    const ast = parser.astify(sql.trim());

    // Convert AST back to SQL (this normalizes structure and formatting)
    const normalized = parser.sqlify(Array.isArray(ast) ? ast[0] : ast);

    // Apply regex-based value replacement to the normalized SQL
    // This handles the case where sqlify might preserve some literal values
    let result = normalizeSqlForLoggingRegex(normalized.trim());

    // Remove backticks added by sqlify for cleaner logging (optional - can be removed if backticks are preferred)
    result = result.replace(/`/g, "");

    return result;
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    // If parsing fails, fall back to regex-based normalization
    return normalizeSqlForLoggingRegex(sql);
  }
}

/**
 * Formats row information (estRows, actRows) into a string.
 * @param row - ExplainAnalyzeRow object
 * @returns Formatted row info string or null if no row info available
 */
function formatRowInfo(row: ExplainAnalyzeRow): string | null {
  const rowInfo: string[] = [];
  if (row.estRows) rowInfo.push(`estRows:${row.estRows}`);
  if (row.actRows) rowInfo.push(`actRows:${row.actRows}`);
  return rowInfo.length > 0 ? `[${rowInfo.join(", ")}]` : null;
}

/**
 * Formats resource information (memory, disk) into a string.
 * @param row - ExplainAnalyzeRow object
 * @returns Formatted resource info string or null if no resource info available
 */
function formatResourceInfo(row: ExplainAnalyzeRow): string | null {
  const resourceInfo: string[] = [];
  if (row.memory) resourceInfo.push(`memory:${row.memory}`);
  if (row.disk) resourceInfo.push(`disk:${row.disk}`);
  return resourceInfo.length > 0 ? `(${resourceInfo.join(", ")})` : null;
}

/**
 * Formats a single execution plan row into a string.
 * @param row - ExplainAnalyzeRow object
 * @returns Formatted string representation of the row
 */
function formatPlanRow(row: ExplainAnalyzeRow): string {
  const parts: string[] = [];

  if (row.id) parts.push(row.id);
  if (row.task) parts.push(`task:${row.task}`);
  if (row.operatorInfo) parts.push(row.operatorInfo);

  const rowInfo = formatRowInfo(row);
  if (rowInfo) parts.push(rowInfo);

  if (row.executionInfo) parts.push(`execution info:${row.executionInfo}`);

  const resourceInfo = formatResourceInfo(row);
  if (resourceInfo) parts.push(resourceInfo);

  if (row.accessObject) parts.push(`access object:${row.accessObject}`);

  return parts.join(" | ");
}

/**
 * Formats an execution plan array into a readable string representation.
 * @param planRows - Array of ExplainAnalyzeRow objects representing the execution plan
 * @returns Formatted string representation of the execution plan
 */
function formatExplainPlan(planRows: ExplainAnalyzeRow[]): string {
  if (!planRows || planRows.length === 0) {
    return "No execution plan available";
  }

  return planRows.map(formatPlanRow).join("\n");
}

/**
 * Prints query plans using summary tables if mode is SummaryTable and within time window.
 * @param context - The metadata query context
 * @param options - The merged options with defaults
 * @returns Promise that resolves when plans are printed
 */
async function printPlansUsingSummaryTables(
  context: MetadataQueryContext,
  options: Required<MetadataQueryOptions>,
): Promise<boolean> {
  const timeDiff = Date.now() - context.beginTime.getTime();

  if (options.mode !== "SummaryTable") {
    return false;
  }

  if (timeDiff <= options.summaryTableWindowTime) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const summaryTableDiffMs = Date.now() - context.beginTime.getTime();
    await printQueriesWithPlan(context.forgeSQLORM, summaryTableDiffMs);
    return true;
  }
  // eslint-disable-next-line no-console
  console.warn("Summary table window expired — showing query plans instead");
  return false;
}

/**
 * Prints query plans for the top slowest queries.
 * @param context - The metadata query context
 * @param options - The merged options with defaults
 * @returns Promise that resolves when plans are printed
 */
async function printTopQueriesPlans(
  context: MetadataQueryContext,
  options: Required<MetadataQueryOptions>,
): Promise<void> {
  const topQueries = context.statistics
    .toSorted((a, b) => b.metadata.dbExecutionTime - a.metadata.dbExecutionTime)
    .slice(0, options.topQueries);

  for (const query of topQueries) {
    const normalizedQuery = options.normalizeQuery
      ? normalizeSqlForLogging(query.query)
      : query.query;
    if (options.showSlowestPlans) {
      const explainAnalyzeRows = await context.forgeSQLORM
        .analyze()
        .explainAnalyzeRaw(query.query, query.params);
      const formattedPlan = formatExplainPlan(explainAnalyzeRows);
      // eslint-disable-next-line no-console
      console.warn(
        `SQL: ${normalizedQuery} | Time: ${query.metadata.dbExecutionTime} ms\n Plan:\n${formattedPlan}`,
      );
    } else {
      // eslint-disable-next-line no-console
      console.warn(`SQL: ${normalizedQuery} | Time: ${query.metadata.dbExecutionTime} ms`);
    }
  }
}

/**
 * Saves query metadata to the current context and sets up the printQueriesWithPlan function.
 * @param stringQuery - The SQL query string
 * @param params - Query parameters
 * @param metadata - Query execution metadata
 */
export async function saveMetaDataToContext(
  stringQuery: string,
  params: unknown[],
  metadata: ForgeSQLMetadata,
): Promise<void> {
  const context = metadataQueryContext.getStore();
  if (!context) {
    return;
  }

  // Initialize statistics array if needed
  if (!context.statistics) {
    context.statistics = [];
  }

  // Merge options with defaults
  context.options = mergeOptionsWithDefaults(context.options);

  // Add query statistics
  context.statistics.push({ query: stringQuery, params, metadata });

  // Set up printQueriesWithPlan function
  context.printQueriesWithPlan = async () => {
    const options = mergeOptionsWithDefaults(context.options);

    // Try to use summary tables first if enabled
    const usedSummaryTables = await printPlansUsingSummaryTables(context, options);
    if (usedSummaryTables) {
      return;
    }

    // Fall back to printing top queries plans
    await printTopQueriesPlans(context, options);
  };

  // Update aggregated metrics
  if (metadata) {
    context.totalResponseSize += metadata.responseSize;
    context.totalDbExecutionTime += metadata.dbExecutionTime;
  }
}

/**
 * Gets the latest metadata from the current context.
 * @returns The current metadata context or undefined if not in a context
 */
export async function getLastestMetadata(): Promise<MetadataQueryContext | undefined> {
  return metadataQueryContext.getStore();
}

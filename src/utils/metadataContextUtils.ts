import { AsyncLocalStorage } from "node:async_hooks";
import { ForgeSQLMetadata } from "./forgeDriver";
import { ForgeSqlOperation } from "../core/ForgeSQLQueryBuilder";
import { ExplainAnalyzeRow } from "../core/SystemTables";
import { printQueriesWithPlan } from "./sqlUtils";

const DEFAULT_WINDOW_SIZE = 15 * 1000;

type Statistic = { query: string; params: unknown[]; metadata: ForgeSQLMetadata };

export type QueryPlanMode = "TopSlowest" | "SummaryTable";

export type MetadataQueryOptions = {
  mode: QueryPlanMode;
  summaryTableWindowTime: number;
  topQueries: number;
};

export type MetadataQueryContext = {
  totalDbExecutionTime: number;
  totalResponseSize: number;
  beginTime: Date;
  options?: Partial<MetadataQueryOptions>;
  statistics: Statistic[];
  printQueriesWithPlan: () => Promise<void>;
  forgeSQLORM: ForgeSqlOperation;
};

export const metadataQueryContext = new AsyncLocalStorage<MetadataQueryContext>();

/**
 * Creates default options for metadata query context.
 * @returns Default options object
 */
function createDefaultOptions(): MetadataQueryOptions {
  return {
    mode: "TopSlowest",
    topQueries: 1,
    summaryTableWindowTime: DEFAULT_WINDOW_SIZE,
  };
}

/**
 * Merges provided options with defaults, using defaults only for undefined fields.
 * @param options - Optional partial options to merge
 * @returns Complete options object with all fields set
 */
function mergeOptionsWithDefaults(options?: Partial<MetadataQueryOptions>): MetadataQueryOptions {
  const defaults = createDefaultOptions();
  return {
    mode: options?.mode ?? defaults.mode,
    topQueries: options?.topQueries ?? defaults.topQueries,
    summaryTableWindowTime: options?.summaryTableWindowTime ?? defaults.summaryTableWindowTime,
  };
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

  const lines: string[] = [];

  for (const row of planRows) {
    const parts: string[] = [];

    if (row.id) parts.push(row.id);
    if (row.task) parts.push(`task:${row.task}`);
    if (row.operatorInfo) parts.push(row.operatorInfo);

    const rowInfo: string[] = [];
    if (row.estRows) rowInfo.push(`estRows:${row.estRows}`);
    if (row.actRows) rowInfo.push(`actRows:${row.actRows}`);
    if (rowInfo.length > 0) parts.push(`[${rowInfo.join(", ")}]`);

    if (row.executionInfo) parts.push(`execution info:${row.executionInfo}`);

    const resourceInfo: string[] = [];
    if (row.memory) resourceInfo.push(`memory:${row.memory}`);
    if (row.disk) resourceInfo.push(`disk:${row.disk}`);
    if (resourceInfo.length > 0) parts.push(`(${resourceInfo.join(", ")})`);

    if (row.accessObject) parts.push(`access object:${row.accessObject}`);

    lines.push(parts.join(" | "));
  }

  return lines.join("\n");
}

/**
 * Prints query plans using summary tables if mode is SummaryTable and within time window.
 * @param context - The metadata query context
 * @param options - The merged options with defaults
 * @returns Promise that resolves when plans are printed
 */
async function printPlansUsingSummaryTables(
  context: MetadataQueryContext,
  options: MetadataQueryOptions,
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
  options: MetadataQueryOptions,
): Promise<void> {
  const topQueries = context.statistics
    .sort((a, b) => b.metadata.dbExecutionTime - a.metadata.dbExecutionTime)
    .slice(0, options.topQueries);

  for (const query of topQueries) {
    const explainAnalyzeRows = await context.forgeSQLORM
      .analyze()
      .explainAnalyzeRaw(query.query, query.params);
    const formattedPlan = formatExplainPlan(explainAnalyzeRows);
    // eslint-disable-next-line no-console
    console.warn(
      `SQL: ${query.query} | Time: ${query.metadata.dbExecutionTime} ms\n Plan:\n${formattedPlan}`,
    );
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

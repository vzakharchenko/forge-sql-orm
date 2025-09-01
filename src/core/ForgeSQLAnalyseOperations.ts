import { ForgeSqlOperation, SchemaAnalyzeForgeSql } from "./ForgeSQLQueryBuilder";
import { Query } from "drizzle-orm";
import {
  ClusterStatementRowCamelCase,
  ExplainAnalyzeRow,
  SlowQueryNormalized,
} from "./SystemTables";
import { SqlParameters } from "@forge/sql/out/sql-statement";
import { AnyMySqlTable } from "drizzle-orm/mysql-core/index";
import { getTableName } from "drizzle-orm/table";
import {DateTime} from "luxon";

/**
 * Interface representing a row from the EXPLAIN ANALYZE output
 */
interface DecodedPlanRow {
  id: string;
  estRows?: string;
  estCost?: string;
  actRows?: string;
  task?: string;
  "access object"?: string;
  "execution info"?: string;
  "operator info"?: string;
  memory?: string;
  disk?: string;
}

/**
 * Interface representing a raw slow query row from the database
 */
interface SlowQueryRaw {
  Time: string;
  Txn_start_ts: number;
  User: string;
  Host: string;
  Conn_ID: number;
  DB: string;
  Query: string;
  Digest: string;
  Query_time: number;
  Compile_time: number;
  Optimize_time: number;
  Process_time: number;
  Wait_time: number;
  Parse_time: number;
  Rewrite_time: number;
  Cop_time: number;
  Cop_proc_avg: number;
  Cop_proc_max: number;
  Cop_proc_p90: number;
  Cop_proc_addr: string;
  Cop_wait_avg: number;
  Cop_wait_max: number;
  Cop_wait_p90: number;
  Cop_wait_addr: string;
  Mem_max: number;
  Disk_max: number;
  Total_keys: number;
  Process_keys: number;
  Request_count: number;
  KV_total: number;
  PD_total: number;
  Result_rows: number;
  Rocksdb_block_cache_hit_count: number;
  Rocksdb_block_read_count: number;
  Rocksdb_block_read_byte: number;
  Plan: string;
  Binary_plan: string;
  Plan_digest: string;
}

/**
 * Interface representing a row from the cluster statements table
 */
export interface ClusterStatementRow {
  INSTANCE: string;
  SUMMARY_BEGIN_TIME: string;
  SUMMARY_END_TIME: string;
  STMT_TYPE: string;
  SCHEMA_NAME: string;
  DIGEST: string;
  DIGEST_TEXT: string;
  TABLE_NAMES: string;
  INDEX_NAMES: string | null;
  SAMPLE_USER: string;
  EXEC_COUNT: number;
  SUM_ERRORS: number;
  SUM_WARNINGS: number;
  SUM_LATENCY: number;
  MAX_LATENCY: number;
  MIN_LATENCY: number;
  AVG_LATENCY: number;
  AVG_PARSE_LATENCY: number;
  MAX_PARSE_LATENCY: number;
  AVG_COMPILE_LATENCY: number;
  MAX_COMPILE_LATENCY: number;
  SUM_COP_TASK_NUM: number;
  MAX_COP_PROCESS_TIME: number;
  MAX_COP_PROCESS_ADDRESS: string;
  MAX_COP_WAIT_TIME: number;
  MAX_COP_WAIT_ADDRESS: string;
  AVG_PROCESS_TIME: number;
  MAX_PROCESS_TIME: number;
  AVG_WAIT_TIME: number;
  MAX_WAIT_TIME: number;
  AVG_BACKOFF_TIME: number;
  MAX_BACKOFF_TIME: number;
  AVG_TOTAL_KEYS: number;
  MAX_TOTAL_KEYS: number;
  AVG_PROCESSED_KEYS: number;
  MAX_PROCESSED_KEYS: number;
  AVG_ROCKSDB_DELETE_SKIPPED_COUNT: number;
  MAX_ROCKSDB_DELETE_SKIPPED_COUNT: number;
  AVG_ROCKSDB_KEY_SKIPPED_COUNT: number;
  MAX_ROCKSDB_KEY_SKIPPED_COUNT: number;
  AVG_ROCKSDB_BLOCK_CACHE_HIT_COUNT: number;
  MAX_ROCKSDB_BLOCK_CACHE_HIT_COUNT: number;
  AVG_ROCKSDB_BLOCK_READ_COUNT: number;
  MAX_ROCKSDB_BLOCK_READ_COUNT: number;
  AVG_ROCKSDB_BLOCK_READ_BYTE: number;
  MAX_ROCKSDB_BLOCK_READ_BYTE: number;
  AVG_PREWRITE_TIME: number;
  MAX_PREWRITE_TIME: number;
  AVG_COMMIT_TIME: number;
  MAX_COMMIT_TIME: number;
  AVG_GET_COMMIT_TS_TIME: number;
  MAX_GET_COMMIT_TS_TIME: number;
  AVG_COMMIT_BACKOFF_TIME: number;
  MAX_COMMIT_BACKOFF_TIME: number;
  AVG_RESOLVE_LOCK_TIME: number;
  MAX_RESOLVE_LOCK_TIME: number;
  AVG_LOCAL_LATCH_WAIT_TIME: number;
  MAX_LOCAL_LATCH_WAIT_TIME: number;
  AVG_WRITE_KEYS: number;
  MAX_WRITE_KEYS: number;
  AVG_WRITE_SIZE: number;
  MAX_WRITE_SIZE: number;
  AVG_PREWRITE_REGIONS: number;
  MAX_PREWRITE_REGIONS: number;
  AVG_TXN_RETRY: number;
  MAX_TXN_RETRY: number;
  SUM_EXEC_RETRY: number;
  SUM_EXEC_RETRY_TIME: number;
  SUM_BACKOFF_TIMES: number;
  BACKOFF_TYPES: string | null;
  AVG_MEM: number;
  MAX_MEM: number;
  AVG_DISK: number;
  MAX_DISK: number;
  AVG_KV_TIME: number;
  AVG_PD_TIME: number;
  AVG_BACKOFF_TOTAL_TIME: number;
  AVG_WRITE_SQL_RESP_TIME: number;
  AVG_TIDB_CPU_TIME: number;
  AVG_TIKV_CPU_TIME: number;
  MAX_RESULT_ROWS: number;
  MIN_RESULT_ROWS: number;
  AVG_RESULT_ROWS: number;
  PREPARED: number;
  AVG_AFFECTED_ROWS: number;
  FIRST_SEEN: string;
  LAST_SEEN: string;
  PLAN_IN_CACHE: number;
  PLAN_CACHE_HITS: number;
  PLAN_IN_BINDING: number;
  QUERY_SAMPLE_TEXT: string;
  PREV_SAMPLE_TEXT: string;
  PLAN_DIGEST: string;
  PLAN: string;
  BINARY_PLAN: string;
  CHARSET: string;
  COLLATION: string;
  PLAN_HINT: string;
  MAX_REQUEST_UNIT_READ: number;
  AVG_REQUEST_UNIT_READ: number;
  MAX_REQUEST_UNIT_WRITE: number;
  AVG_REQUEST_UNIT_WRITE: number;
  MAX_QUEUED_RC_TIME: number;
  AVG_QUEUED_RC_TIME: number;
  RESOURCE_GROUP: string;
  PLAN_CACHE_UNQUALIFIED: number;
  PLAN_CACHE_UNQUALIFIED_LAST_REASON: string;
}

/**
 * Class implementing SQL analysis operations for ForgeSQL ORM.
 * Provides methods for analyzing query performance, execution plans, and slow queries.
 */
export class ForgeSQLAnalyseOperation implements SchemaAnalyzeForgeSql {
  private readonly forgeOperations: ForgeSqlOperation;

  /**
   * Creates a new instance of ForgeSQLAnalizeOperation.
   * @param {ForgeSqlOperation} forgeOperations - The ForgeSQL operations instance
   */
  constructor(forgeOperations: ForgeSqlOperation) {
    this.forgeOperations = forgeOperations;
    this.mapToCamelCaseClusterStatement = this.mapToCamelCaseClusterStatement.bind(this);
  }

  /**
   * Executes EXPLAIN on a raw SQL query.
   * @param {string} query - The SQL query to analyze
   * @param {unknown[]} bindParams - The query parameters
   * @returns {Promise<ExplainAnalyzeRow[]>} The execution plan analysis results
   */
  async explainRaw(query: string, bindParams: unknown[]): Promise<ExplainAnalyzeRow[]> {
    const results = await this.forgeOperations
      .fetch()
      .executeRawSQL<DecodedPlanRow>(`EXPLAIN ${query}`, bindParams as SqlParameters);
    return results.map((row) => ({
      id: row.id,
      estRows: row.estRows,
      actRows: row.actRows,
      task: row.task,
      accessObject: row["access object"],
      executionInfo: row["execution info"],
      operatorInfo: row["operator info"],
      memory: row.memory,
      disk: row.disk,
    }));
  }

  /**
   * Executes EXPLAIN on a Drizzle query.
   * @param {{ toSQL: () => Query }} query - The Drizzle query to analyze
   * @returns {Promise<ExplainAnalyzeRow[]>} The execution plan analysis results
   */
  async explain(query: { toSQL: () => Query }): Promise<ExplainAnalyzeRow[]> {
    const { sql, params } = query.toSQL();
    return this.explainRaw(sql, params);
  }

  /**
   * Executes EXPLAIN ANALYZE on a raw SQL query.
   * @param {string} query - The SQL query to analyze
   * @param {unknown[]} bindParams - The query parameters
   * @returns {Promise<ExplainAnalyzeRow[]>} The execution plan analysis results
   */
  async explainAnalyzeRaw(query: string, bindParams: unknown[]): Promise<ExplainAnalyzeRow[]> {
    const results = await this.forgeOperations
      .fetch()
      .executeRawSQL<DecodedPlanRow>(`EXPLAIN ANALYZE ${query}`, bindParams as SqlParameters);
    return results.map((row) => ({
      id: row.id,
      estRows: row.estRows,
      actRows: row.actRows,
      task: row.task,
      accessObject: row["access object"],
      executionInfo: row["execution info"],
      operatorInfo: row["operator info"],
      memory: row.memory,
      disk: row.disk,
    }));
  }

  /**
   * Executes EXPLAIN ANALYZE on a Drizzle query.
   * @param {{ toSQL: () => Query }} query - The Drizzle query to analyze
   * @returns {Promise<ExplainAnalyzeRow[]>} The execution plan analysis results
   */
  async explainAnalyze(query: { toSQL: () => Query }): Promise<ExplainAnalyzeRow[]> {
    const { sql, params } = query.toSQL();
    return this.explainAnalyzeRaw(sql, params);
  }

  /**
   * Decodes a query execution plan from its string representation.
   * @param {string} input - The raw execution plan string
   * @returns {ExplainAnalyzeRow[]} The decoded execution plan rows
   */
  decodedPlan(input: string): ExplainAnalyzeRow[] {
    if (!input) {
      return [];
    }
    const lines = input.trim().split("\n");
    if (lines.length < 2) return [];

    const headersRaw = lines[0]
      .split("\t")
      .map((h) => h.trim())
      .filter(Boolean);
    const headers = headersRaw.map((h) => {
      return h
        .replace(/\s+/g, " ")
        .replace(/[-\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
        .replace(/^./, (s) => s.toLowerCase());
    });

    return lines.slice(1).map((line) => {
      const values = line
        .split("\t")
        .map((s) => s.trim())
        .filter(Boolean);
      const row: Record<string, string> = {};
      headers.forEach((key, i) => {
        row[key] = values[i] ?? "";
      });
      return row as unknown as ExplainAnalyzeRow;
    });
  }

  /**
   * Normalizes a raw slow query row into a more structured format.
   * @param {SlowQueryRaw} row - The raw slow query data
   * @returns {SlowQueryNormalized} The normalized slow query data
   */
  normalizeSlowQuery(row: SlowQueryRaw): SlowQueryNormalized {
    return {
      time: row.Time,
      txnStartTs: row.Txn_start_ts,
      user: row.User,
      host: row.Host,
      connId: row.Conn_ID,
      db: row.DB,
      query: row.Query,
      digest: row.Digest,
      queryTime: row.Query_time,
      compileTime: row.Compile_time,
      optimizeTime: row.Optimize_time,
      processTime: row.Process_time,
      waitTime: row.Wait_time,
      parseTime: row.Parse_time,
      rewriteTime: row.Rewrite_time,
      copTime: row.Cop_time,
      copProcAvg: row.Cop_proc_avg,
      copProcMax: row.Cop_proc_max,
      copProcP90: row.Cop_proc_p90,
      copProcAddr: row.Cop_proc_addr,
      copWaitAvg: row.Cop_wait_avg,
      copWaitMax: row.Cop_wait_max,
      copWaitP90: row.Cop_wait_p90,
      copWaitAddr: row.Cop_wait_addr,
      memMax: row.Mem_max,
      diskMax: row.Disk_max,
      totalKeys: row.Total_keys,
      processKeys: row.Process_keys,
      requestCount: row.Request_count,
      kvTotal: row.KV_total,
      pdTotal: row.PD_total,
      resultRows: row.Result_rows,
      rocksdbBlockCacheHitCount: row.Rocksdb_block_cache_hit_count,
      rocksdbBlockReadCount: row.Rocksdb_block_read_count,
      rocksdbBlockReadByte: row.Rocksdb_block_read_byte,
      plan: row.Plan,
      binaryPlan: row.Binary_plan,
      planDigest: row.Plan_digest,
      parsedPlan: this.decodedPlan(row.Plan),
    };
  }

  /**
   * Builds a SQL query for retrieving cluster statement history.
   * @param {string[]} tables - The tables to analyze
   * @param {Date} [from] - The start date for the analysis
   * @param {Date} [to] - The end date for the analysis
   * @returns {string} The SQL query for cluster statement history
   */
  buildClusterStatementQuery(tables: string[], from?: Date, to?: Date): string {
    const formatDateTime = (date: Date): string => DateTime.fromJSDate(date).toFormat("yyyy-LL-dd'T'HH:mm:ss.SSS");

    const tableConditions = tables
      .map((table) => `TABLE_NAMES LIKE CONCAT(SCHEMA_NAME, '.', '%', '${table}', '%')`)
      .join(" OR ");

    const timeConditions: string[] = [];
    if (from) {
      timeConditions.push(`SUMMARY_BEGIN_TIME >= '${formatDateTime(from)}'`);
    }
    if (to) {
      timeConditions.push(`SUMMARY_END_TIME <= '${formatDateTime(to)}'`);
    }

    let whereClauses;
    if (tableConditions?.length) {
      whereClauses = [tableConditions ? `(${tableConditions})` : "", ...timeConditions];
    } else {
      whereClauses = timeConditions;
    }

    return `
      SELECT *
      FROM (
        SELECT * FROM INFORMATION_SCHEMA.CLUSTER_STATEMENTS_SUMMARY
        UNION ALL
        SELECT * FROM INFORMATION_SCHEMA.CLUSTER_STATEMENTS_SUMMARY_HISTORY
      ) AS combined
      ${whereClauses?.length > 0 ? `WHERE ${whereClauses.join(" AND ")}` : ""}
    `;
  }

  /**
   * Retrieves and analyzes slow queries from the database.
   * @returns {Promise<SlowQueryNormalized[]>} The normalized slow query data
   */
  //  CLUSTER_SLOW_QUERY STATISTICS
  async analyzeSlowQueries(): Promise<SlowQueryNormalized[]> {
    const results = await this.forgeOperations.fetch().executeRawSQL<SlowQueryRaw>(`
      SELECT *
      FROM information_schema.slow_query 
      ORDER BY time DESC
    `);
    return results.map((row) => this.normalizeSlowQuery(row));
  }

  /**
   * Converts a cluster statement row to camelCase format.
   * @param {Record<string, any>} input - The input row data
   * @returns {ClusterStatementRowCamelCase} The converted row data
   */
  mapToCamelCaseClusterStatement(input: Record<string, any>): ClusterStatementRowCamelCase {
    if (!input) {
      return {} as ClusterStatementRowCamelCase;
    }

    const result: any = {};
    result.parsedPlan = this.decodedPlan(input["PLAN"] ?? "");
    for (const key in input) {
      const camelKey = key.toLowerCase().replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      result[camelKey] = input[key];
    }

    return result as ClusterStatementRowCamelCase;
  }

  /**
   * Analyzes query history for specific tables using raw table names.
   * @param {string[]} tables - The table names to analyze
   * @param {Date} [fromDate] - The start date for the analysis
   * @param {Date} [toDate] - The end date for the analysis
   * @returns {Promise<ClusterStatementRowCamelCase[]>} The analyzed query history
   */
  async analyzeQueriesHistoryRaw(
    tables: string[],
    fromDate?: Date,
    toDate?: Date,
  ): Promise<ClusterStatementRowCamelCase[]> {
    const results = await this.forgeOperations
      .fetch()
      .executeRawSQL<ClusterStatementRow>(
        this.buildClusterStatementQuery(tables ?? [], fromDate, toDate),
      );
    return results.map((r) => this.mapToCamelCaseClusterStatement(r));
  }

  /**
   * Analyzes query history for specific tables using Drizzle table objects.
   * @param {AnyMySqlTable[]} tables - The Drizzle table objects to analyze
   * @param {Date} [fromDate] - The start date for the analysis
   * @param {Date} [toDate] - The end date for the analysis
   * @returns {Promise<ClusterStatementRowCamelCase[]>} The analyzed query history
   */
  async analyzeQueriesHistory(
    tables: AnyMySqlTable[],
    fromDate?: Date,
    toDate?: Date,
  ): Promise<ClusterStatementRowCamelCase[]> {
    const tableNames = tables?.map((table) => getTableName(table)) ?? [];
    return this.analyzeQueriesHistoryRaw(tableNames, fromDate, toDate);
  }
}

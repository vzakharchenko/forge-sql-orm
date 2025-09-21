import {
  bigint,
  mysqlTable,
  timestamp,
  varchar,
  double,
  mysqlSchema,
  longtext,
  int,
  text,
  boolean,
} from "drizzle-orm/mysql-core";
import { Table } from "drizzle-orm";
import { sql } from "@forge/sql";

export const migrations = mysqlTable("__migrations", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  migratedAt: timestamp("migratedAt").defaultNow().notNull(),
});

const informationSchema = mysqlSchema("information_schema");

export const slowQuery = informationSchema.table("SLOW_QUERY", {
  time: timestamp("Time", { fsp: 6, mode: "string" }).notNull(), // Timestamp when the slow query was recorded

  txnStartTs: bigint("Txn_start_ts", { mode: "bigint", unsigned: true }), // Transaction start timestamp (TSO)
  user: varchar("User", { length: 64 }), // User executing the query
  host: varchar("Host", { length: 64 }), // Host from which the query originated
  connId: bigint("Conn_ID", { mode: "bigint", unsigned: true }), // Connection ID
  sessionAlias: varchar("Session_alias", { length: 64 }), // Session alias

  execRetryCount: bigint("Exec_retry_count", { mode: "bigint", unsigned: true }), // Number of retries during execution
  execRetryTime: double("Exec_retry_time"), // Time spent in retries
  queryTime: double("Query_time"), // Total execution time
  parseTime: double("Parse_time"), // Time spent parsing SQL
  compileTime: double("Compile_time"), // Time spent compiling query plan
  rewriteTime: double("Rewrite_time"), // Time spent rewriting query
  preprocSubqueries: bigint("Preproc_subqueries", { mode: "bigint", unsigned: true }), // Number of subqueries preprocessed
  preprocSubqueriesTime: double("Preproc_subqueries_time"), // Time spent preprocessing subqueries
  optimizeTime: double("Optimize_time"), // Time spent in optimizer
  waitTs: double("Wait_TS"), // Wait time for getting TSO
  prewriteTime: double("Prewrite_time"), // Time spent in prewrite phase
  waitPrewriteBinlogTime: double("Wait_prewrite_binlog_time"), // Time waiting for binlog prewrite
  commitTime: double("Commit_time"), // Commit duration
  getCommitTsTime: double("Get_commit_ts_time"), // Time waiting for commit TSO
  commitBackoffTime: double("Commit_backoff_time"), // Backoff time during commit
  backoffTypes: varchar("Backoff_types", { length: 64 }), // Types of backoff occurred
  resolveLockTime: double("Resolve_lock_time"), // Time resolving locks
  localLatchWaitTime: double("Local_latch_wait_time"), // Time waiting on local latch

  writeKeys: bigint("Write_keys", { mode: "bigint" }), // Number of keys written
  writeSize: bigint("Write_size", { mode: "bigint" }), // Amount of data written
  prewriteRegion: bigint("Prewrite_region", { mode: "bigint" }), // Regions involved in prewrite
  txnRetry: bigint("Txn_retry", { mode: "bigint" }), // Transaction retry count

  copTime: double("Cop_time"), // Time spent in coprocessor
  processTime: double("Process_time"), // Processing time
  waitTime: double("Wait_time"), // Wait time in TiKV
  backoffTime: double("Backoff_time"), // Backoff wait time
  lockKeysTime: double("LockKeys_time"), // Time spent waiting for locks

  requestCount: bigint("Request_count", { mode: "bigint", unsigned: true }), // Total number of requests
  totalKeys: bigint("Total_keys", { mode: "bigint", unsigned: true }), // Total keys scanned
  processKeys: bigint("Process_keys", { mode: "bigint", unsigned: true }), // Keys processed

  rocksdbDeleteSkippedCount: bigint("Rocksdb_delete_skipped_count", {
    mode: "bigint",
    unsigned: true,
  }), // RocksDB delete skips
  rocksdbKeySkippedCount: bigint("Rocksdb_key_skipped_count", { mode: "bigint", unsigned: true }), // RocksDB key skips
  rocksdbBlockCacheHitCount: bigint("Rocksdb_block_cache_hit_count", {
    mode: "bigint",
    unsigned: true,
  }), // RocksDB block cache hits
  rocksdbBlockReadCount: bigint("Rocksdb_block_read_count", { mode: "bigint", unsigned: true }), // RocksDB block reads
  rocksdbBlockReadByte: bigint("Rocksdb_block_read_byte", { mode: "bigint", unsigned: true }), // RocksDB block read bytes

  db: varchar("DB", { length: 64 }), // Database name
  indexNames: varchar("Index_names", { length: 100 }), // Indexes used

  isInternal: boolean("Is_internal"), // Whether the query is internal
  digest: varchar("Digest", { length: 64 }), // SQL digest hash
  stats: varchar("Stats", { length: 512 }), // Stats used during planning

  copProcAvg: double("Cop_proc_avg"), // Coprocessor average processing time
  copProcP90: double("Cop_proc_p90"), // Coprocessor 90th percentile processing time
  copProcMax: double("Cop_proc_max"), // Coprocessor max processing time
  copProcAddr: varchar("Cop_proc_addr", { length: 64 }), // Coprocessor address for processing

  copWaitAvg: double("Cop_wait_avg"), // Coprocessor average wait time
  copWaitP90: double("Cop_wait_p90"), // Coprocessor 90th percentile wait time
  copWaitMax: double("Cop_wait_max"), // Coprocessor max wait time
  copWaitAddr: varchar("Cop_wait_addr", { length: 64 }), // Coprocessor address for wait

  memMax: bigint("Mem_max", { mode: "bigint" }), // Max memory usage
  diskMax: bigint("Disk_max", { mode: "bigint" }), // Max disk usage

  kvTotal: double("KV_total"), // Total KV request time
  pdTotal: double("PD_total"), // Total PD request time
  backoffTotal: double("Backoff_total"), // Total backoff time
  writeSqlResponseTotal: double("Write_sql_response_total"), // SQL response write time

  resultRows: bigint("Result_rows", { mode: "bigint" }), // Rows returned
  warnings: longtext("Warnings"), // Warnings during execution
  backoffDetail: varchar("Backoff_Detail", { length: 4096 }), // Detailed backoff info

  prepared: boolean("Prepared"), // Whether query was prepared
  succ: boolean("Succ"), // Success flag
  isExplicitTxn: boolean("IsExplicitTxn"), // Whether explicit transaction
  isWriteCacheTable: boolean("IsWriteCacheTable"), // Whether wrote to cache table
  planFromCache: boolean("Plan_from_cache"), // Plan was from cache
  planFromBinding: boolean("Plan_from_binding"), // Plan was from binding
  hasMoreResults: boolean("Has_more_results"), // Query returned multiple results

  resourceGroup: varchar("Resource_group", { length: 64 }), // Resource group name
  requestUnitRead: double("Request_unit_read"), // RU consumed for read
  requestUnitWrite: double("Request_unit_write"), // RU consumed for write
  timeQueuedByRc: double("Time_queued_by_rc"), // Time queued by resource control

  tidbCpuTime: double("Tidb_cpu_time"), // TiDB CPU time
  tikvCpuTime: double("Tikv_cpu_time"), // TiKV CPU time

  plan: longtext("Plan"), // Query execution plan
  planDigest: varchar("Plan_digest", { length: 128 }), // Plan digest hash
  binaryPlan: longtext("Binary_plan"), // Binary execution plan
  prevStmt: longtext("Prev_stmt"), // Previous statement in session
  query: longtext("Query"), // Original SQL query
});

export type SlowQuery = typeof slowQuery.$inferSelect;

// Common schema for cluster statements summary tables
const createClusterStatementsSummarySchema = () => ({
  instance: varchar("INSTANCE", { length: 64 }), // TiDB/TiKV instance address

  summaryBeginTime: timestamp("SUMMARY_BEGIN_TIME", { mode: "string" }).notNull(), // Begin time of this summary window
  summaryEndTime: timestamp("SUMMARY_END_TIME", { mode: "string" }).notNull(), // End time of this summary window

  stmtType: varchar("STMT_TYPE", { length: 64 }).notNull(), // Statement type (e.g., Select/Insert/Update)
  schemaName: varchar("SCHEMA_NAME", { length: 64 }), // Current schema name
  digest: varchar("DIGEST", { length: 64 }), // SQL digest (normalized hash)
  digestText: text("DIGEST_TEXT").notNull(), // Normalized SQL text

  tableNames: text("TABLE_NAMES"), // Involved table names
  indexNames: text("INDEX_NAMES"), // Used index names

  sampleUser: varchar("SAMPLE_USER", { length: 64 }), // Sampled user who executed the statements

  execCount: bigint("EXEC_COUNT", { mode: "bigint", unsigned: true }).notNull(), // Total executions
  sumErrors: int("SUM_ERRORS", { unsigned: true }).notNull(), // Sum of errors
  sumWarnings: int("SUM_WARNINGS", { unsigned: true }).notNull(), // Sum of warnings

  sumLatency: bigint("SUM_LATENCY", { mode: "bigint", unsigned: true }).notNull(), // Sum of latency (ns)
  maxLatency: bigint("MAX_LATENCY", { mode: "bigint", unsigned: true }).notNull(), // Max latency (ns)
  minLatency: bigint("MIN_LATENCY", { mode: "bigint", unsigned: true }).notNull(), // Min latency (ns)
  avgLatency: bigint("AVG_LATENCY", { mode: "bigint", unsigned: true }).notNull(), // Avg latency (ns)

  avgParseLatency: bigint("AVG_PARSE_LATENCY", { mode: "bigint", unsigned: true }).notNull(), // Avg parse time (ns)
  maxParseLatency: bigint("MAX_PARSE_LATENCY", { mode: "bigint", unsigned: true }).notNull(), // Max parse time (ns)
  avgCompileLatency: bigint("AVG_COMPILE_LATENCY", { mode: "bigint", unsigned: true }).notNull(), // Avg compile time (ns)
  maxCompileLatency: bigint("MAX_COMPILE_LATENCY", { mode: "bigint", unsigned: true }).notNull(), // Max compile time (ns)

  sumCopTaskNum: bigint("SUM_COP_TASK_NUM", { mode: "bigint", unsigned: true }).notNull(), // Total number of cop tasks
  maxCopProcessTime: bigint("MAX_COP_PROCESS_TIME", { mode: "bigint", unsigned: true }).notNull(), // Max TiKV coprocessor processing time (ns)
  maxCopProcessAddress: varchar("MAX_COP_PROCESS_ADDRESS", { length: 256 }), // Address of cop task with max processing time
  maxCopWaitTime: bigint("MAX_COP_WAIT_TIME", { mode: "bigint", unsigned: true }).notNull(), // Max TiKV coprocessor wait time (ns)
  maxCopWaitAddress: varchar("MAX_COP_WAIT_ADDRESS", { length: 256 }), // Address of cop task with max wait time

  avgProcessTime: bigint("AVG_PROCESS_TIME", { mode: "bigint", unsigned: true }).notNull(), // Avg TiKV processing time (ns)
  maxProcessTime: bigint("MAX_PROCESS_TIME", { mode: "bigint", unsigned: true }).notNull(), // Max TiKV processing time (ns)
  avgWaitTime: bigint("AVG_WAIT_TIME", { mode: "bigint", unsigned: true }).notNull(), // Avg TiKV wait time (ns)
  maxWaitTime: bigint("MAX_WAIT_TIME", { mode: "bigint", unsigned: true }).notNull(), // Max TiKV wait time (ns)

  avgBackoffTime: bigint("AVG_BACKOFF_TIME", { mode: "bigint", unsigned: true }).notNull(), // Avg backoff time before retry (ns)
  maxBackoffTime: bigint("MAX_BACKOFF_TIME", { mode: "bigint", unsigned: true }).notNull(), // Max backoff time before retry (ns)

  avgTotalKeys: bigint("AVG_TOTAL_KEYS", { mode: "bigint", unsigned: true }).notNull(), // Avg scanned keys
  maxTotalKeys: bigint("MAX_TOTAL_KEYS", { mode: "bigint", unsigned: true }).notNull(), // Max scanned keys
  avgProcessedKeys: bigint("AVG_PROCESSED_KEYS", { mode: "bigint", unsigned: true }).notNull(), // Avg processed keys
  maxProcessedKeys: bigint("MAX_PROCESSED_KEYS", { mode: "bigint", unsigned: true }).notNull(), // Max processed keys

  avgRocksdbDeleteSkippedCount: double("AVG_ROCKSDB_DELETE_SKIPPED_COUNT").notNull(), // Avg RocksDB deletes skipped
  maxRocksdbDeleteSkippedCount: int("MAX_ROCKSDB_DELETE_SKIPPED_COUNT", {
    unsigned: true,
  }).notNull(), // Max RocksDB deletes skipped
  avgRocksdbKeySkippedCount: double("AVG_ROCKSDB_KEY_SKIPPED_COUNT").notNull(), // Avg RocksDB keys skipped
  maxRocksdbKeySkippedCount: int("MAX_ROCKSDB_KEY_SKIPPED_COUNT", { unsigned: true }).notNull(), // Max RocksDB keys skipped
  avgRocksdbBlockCacheHitCount: double("AVG_ROCKSDB_BLOCK_CACHE_HIT_COUNT").notNull(), // Avg RocksDB block cache hits
  maxRocksdbBlockCacheHitCount: int("MAX_ROCKSDB_BLOCK_CACHE_HIT_COUNT", {
    unsigned: true,
  }).notNull(), // Max RocksDB block cache hits
  avgRocksdbBlockReadCount: double("AVG_ROCKSDB_BLOCK_READ_COUNT").notNull(), // Avg RocksDB block reads
  maxRocksdbBlockReadCount: int("MAX_ROCKSDB_BLOCK_READ_COUNT", { unsigned: true }).notNull(), // Max RocksDB block reads
  avgRocksdbBlockReadByte: double("AVG_ROCKSDB_BLOCK_READ_BYTE").notNull(), // Avg RocksDB block read bytes
  maxRocksdbBlockReadByte: int("MAX_ROCKSDB_BLOCK_READ_BYTE", { unsigned: true }).notNull(), // Max RocksDB block read bytes

  avgPrewriteTime: bigint("AVG_PREWRITE_TIME", { mode: "bigint", unsigned: true }).notNull(), // Avg prewrite phase time (ns)
  maxPrewriteTime: bigint("MAX_PREWRITE_TIME", { mode: "bigint", unsigned: true }).notNull(), // Max prewrite phase time (ns)
  avgCommitTime: bigint("AVG_COMMIT_TIME", { mode: "bigint", unsigned: true }).notNull(), // Avg commit phase time (ns)
  maxCommitTime: bigint("MAX_COMMIT_TIME", { mode: "bigint", unsigned: true }).notNull(), // Max commit phase time (ns)
  avgGetCommitTsTime: bigint("AVG_GET_COMMIT_TS_TIME", {
    mode: "bigint",
    unsigned: true,
  }).notNull(), // Avg get commit_ts time (ns)
  maxGetCommitTsTime: bigint("MAX_GET_COMMIT_TS_TIME", {
    mode: "bigint",
    unsigned: true,
  }).notNull(), // Max get commit_ts time (ns)
  avgCommitBackoffTime: bigint("AVG_COMMIT_BACKOFF_TIME", {
    mode: "bigint",
    unsigned: true,
  }).notNull(), // Avg backoff during commit (ns)
  maxCommitBackoffTime: bigint("MAX_COMMIT_BACKOFF_TIME", {
    mode: "bigint",
    unsigned: true,
  }).notNull(), // Max backoff during commit (ns)
  avgResolveLockTime: bigint("AVG_RESOLVE_LOCK_TIME", {
    mode: "bigint",
    unsigned: true,
  }).notNull(), // Avg resolve lock time (ns)
  maxResolveLockTime: bigint("MAX_RESOLVE_LOCK_TIME", {
    mode: "bigint",
    unsigned: true,
  }).notNull(), // Max resolve lock time (ns)
  avgLocalLatchWaitTime: bigint("AVG_LOCAL_LATCH_WAIT_TIME", {
    mode: "bigint",
    unsigned: true,
  }).notNull(), // Avg local latch wait (ns)
  maxLocalLatchWaitTime: bigint("MAX_LOCAL_LATCH_WAIT_TIME", {
    mode: "bigint",
    unsigned: true,
  }).notNull(), // Max local latch wait (ns)

  avgWriteKeys: double("AVG_WRITE_KEYS").notNull(), // Avg number of written keys
  maxWriteKeys: bigint("MAX_WRITE_KEYS", { mode: "bigint", unsigned: true }).notNull(), // Max written keys
  avgWriteSize: double("AVG_WRITE_SIZE").notNull(), // Avg written bytes
  maxWriteSize: bigint("MAX_WRITE_SIZE", { mode: "bigint", unsigned: true }).notNull(), // Max written bytes
  avgPrewriteRegions: double("AVG_PREWRITE_REGIONS").notNull(), // Avg regions in prewrite
  maxPrewriteRegions: int("MAX_PREWRITE_REGIONS", { unsigned: true }).notNull(), // Max regions in prewrite
  avgTxnRetry: double("AVG_TXN_RETRY").notNull(), // Avg transaction retry count
  maxTxnRetry: int("MAX_TXN_RETRY", { unsigned: true }).notNull(), // Max transaction retry count

  sumExecRetry: bigint("SUM_EXEC_RETRY", { mode: "bigint", unsigned: true }).notNull(), // Sum of execution retries (pessimistic)
  sumExecRetryTime: bigint("SUM_EXEC_RETRY_TIME", { mode: "bigint", unsigned: true }).notNull(), // Sum time of execution retries (ns)
  sumBackoffTimes: bigint("SUM_BACKOFF_TIMES", { mode: "bigint", unsigned: true }).notNull(), // Sum of backoff retries
  backoffTypes: varchar("BACKOFF_TYPES", { length: 1024 }), // Backoff types with counts

  avgMem: bigint("AVG_MEM", { mode: "bigint", unsigned: true }).notNull(), // Avg memory used (bytes)
  maxMem: bigint("MAX_MEM", { mode: "bigint", unsigned: true }).notNull(), // Max memory used (bytes)
  avgDisk: bigint("AVG_DISK", { mode: "bigint", unsigned: true }).notNull(), // Avg disk used (bytes)
  maxDisk: bigint("MAX_DISK", { mode: "bigint", unsigned: true }).notNull(), // Max disk used (bytes)

  avgKvTime: bigint("AVG_KV_TIME", { mode: "bigint", unsigned: true }).notNull(), // Avg time spent in TiKV (ns)
  avgPdTime: bigint("AVG_PD_TIME", { mode: "bigint", unsigned: true }).notNull(), // Avg time spent in PD (ns)
  avgBackoffTotalTime: bigint("AVG_BACKOFF_TOTAL_TIME", {
    mode: "bigint",
    unsigned: true,
  }).notNull(), // Avg total backoff time (ns)
  avgWriteSqlRespTime: bigint("AVG_WRITE_SQL_RESP_TIME", {
    mode: "bigint",
    unsigned: true,
  }).notNull(), // Avg write SQL response time (ns)

  avgTidbCpuTime: bigint("AVG_TIDB_CPU_TIME", { mode: "bigint", unsigned: true }).notNull(), // Avg TiDB CPU time (ns)
  avgTikvCpuTime: bigint("AVG_TIKV_CPU_TIME", { mode: "bigint", unsigned: true }).notNull(), // Avg TiKV CPU time (ns)

  maxResultRows: bigint("MAX_RESULT_ROWS", { mode: "bigint" }).notNull(), // Max number of result rows
  minResultRows: bigint("MIN_RESULT_ROWS", { mode: "bigint" }).notNull(), // Min number of result rows
  avgResultRows: bigint("AVG_RESULT_ROWS", { mode: "bigint" }).notNull(), // Avg number of result rows

  prepared: boolean("PREPARED").notNull(), // Whether statements are prepared
  avgAffectedRows: double("AVG_AFFECTED_ROWS").notNull(), // Avg affected rows

  firstSeen: timestamp("FIRST_SEEN", { mode: "string" }).notNull(), // First time statements observed
  lastSeen: timestamp("LAST_SEEN", { mode: "string" }).notNull(), // Last time statements observed

  planInCache: boolean("PLAN_IN_CACHE").notNull(), // Whether last stmt hit plan cache
  planCacheHits: bigint("PLAN_CACHE_HITS", { mode: "bigint" }).notNull(), // Number of plan cache hits
  planInBinding: boolean("PLAN_IN_BINDING").notNull(), // Whether matched bindings

  querySampleText: text("QUERY_SAMPLE_TEXT"), // Sampled original SQL
  prevSampleText: text("PREV_SAMPLE_TEXT"), // Sampled previous SQL before commit

  planDigest: varchar("PLAN_DIGEST", { length: 64 }), // Plan digest hash
  plan: text("PLAN"), // Sampled textual plan
  binaryPlan: text("BINARY_PLAN"), // Sampled binary plan

  charset: varchar("CHARSET", { length: 64 }), // Sampled charset
  collation: varchar("COLLATION", { length: 64 }), // Sampled collation
  planHint: varchar("PLAN_HINT", { length: 64 }), // Sampled plan hint

  maxRequestUnitRead: double("MAX_REQUEST_UNIT_READ").notNull(), // Max RU cost (read)
  avgRequestUnitRead: double("AVG_REQUEST_UNIT_READ").notNull(), // Avg RU cost (read)
  maxRequestUnitWrite: double("MAX_REQUEST_UNIT_WRITE").notNull(), // Max RU cost (write)
  avgRequestUnitWrite: double("AVG_REQUEST_UNIT_WRITE").notNull(), // Avg RU cost (write)

  maxQueuedRcTime: bigint("MAX_QUEUED_RC_TIME", { mode: "bigint", unsigned: true }).notNull(), // Max queued time waiting for RU (ns)
  avgQueuedRcTime: bigint("AVG_QUEUED_RC_TIME", { mode: "bigint", unsigned: true }).notNull(), // Avg queued time waiting for RU (ns)

  resourceGroup: varchar("RESOURCE_GROUP", { length: 64 }), // Bound resource group name

  planCacheUnqualified: bigint("PLAN_CACHE_UNQUALIFIED", { mode: "bigint" }).notNull(), // Times not eligible for plan cache
  planCacheUnqualifiedLastReason: text("PLAN_CACHE_UNQUALIFIED_LAST_REASON"), // Last reason of plan cache ineligibility
});

export const clusterStatementsSummaryHistory = informationSchema.table(
  "CLUSTER_STATEMENTS_SUMMARY_HISTORY",
  createClusterStatementsSummarySchema(),
);

// Types
export type ClusterStatementsSummaryHistory = typeof clusterStatementsSummaryHistory.$inferSelect;

export const clusterStatementsSummary = informationSchema.table(
  "CLUSTER_STATEMENTS_SUMMARY",
  createClusterStatementsSummarySchema(),
);

// Types
export type ClusterStatementsSummary = typeof clusterStatementsSummary.$inferSelect;

export interface ExplainAnalyzeRow {
  id: string;
  estRows?: string;
  estCost?: string;
  actRows?: string;
  task?: string;
  accessObject?: string;
  executionInfo?: string;
  operatorInfo?: string;
  memory?: string;
  disk?: string;
}

export interface SlowQueryNormalized {
  time: string;
  txnStartTs: number;
  user: string;
  host: string;
  connId: number;
  db: string;
  query: string;
  digest: string;
  queryTime: number;
  compileTime: number;
  optimizeTime: number;
  processTime: number;
  waitTime: number;
  parseTime: number;
  rewriteTime: number;
  copTime: number;
  copProcAvg: number;
  copProcMax: number;
  copProcP90: number;
  copProcAddr: string;
  copWaitAvg: number;
  copWaitMax: number;
  copWaitP90: number;
  copWaitAddr: string;
  memMax: number;
  diskMax: number;
  totalKeys: number;
  processKeys: number;
  requestCount: number;
  kvTotal: number;
  pdTotal: number;
  resultRows: number;
  rocksdbBlockCacheHitCount: number;
  rocksdbBlockReadCount: number;
  rocksdbBlockReadByte: number;
  plan: string;
  parsedPlan?: ExplainAnalyzeRow[];
  binaryPlan: string;
  planDigest: string;
}

export interface ClusterStatementRowCamelCase {
  instance: string;
  summaryBeginTime: string;
  summaryEndTime: string;
  stmtType: string;
  schemaName: string;
  digest: string;
  digestText: string;
  tableNames: string;
  indexNames: string | null;
  sampleUser: string;
  execCount: number;
  sumErrors: number;
  sumWarnings: number;
  sumLatency: number;
  maxLatency: number;
  minLatency: number;
  avgLatency: number;
  avgParseLatency: number;
  maxParseLatency: number;
  avgCompileLatency: number;
  maxCompileLatency: number;
  sumCopTaskNum: number;
  maxCopProcessTime: number;
  maxCopProcessAddress: string;
  maxCopWaitTime: number;
  maxCopWaitAddress: string;
  avgProcessTime: number;
  maxProcessTime: number;
  avgWaitTime: number;
  maxWaitTime: number;
  avgBackoffTime: number;
  maxBackoffTime: number;
  avgTotalKeys: number;
  maxTotalKeys: number;
  avgProcessedKeys: number;
  maxProcessedKeys: number;
  avgRocksdbDeleteSkippedCount: number;
  maxRocksdbDeleteSkippedCount: number;
  avgRocksdbKeySkippedCount: number;
  maxRocksdbKeySkippedCount: number;
  avgRocksdbBlockCacheHitCount: number;
  maxRocksdbBlockCacheHitCount: number;
  avgRocksdbBlockReadCount: number;
  maxRocksdbBlockReadCount: number;
  avgRocksdbBlockReadByte: number;
  maxRocksdbBlockReadByte: number;
  avgPrewriteTime: number;
  maxPrewriteTime: number;
  avgCommitTime: number;
  maxCommitTime: number;
  avgGetCommitTsTime: number;
  maxGetCommitTsTime: number;
  avgCommitBackoffTime: number;
  maxCommitBackoffTime: number;
  avgResolveLockTime: number;
  maxResolveLockTime: number;
  avgLocalLatchWaitTime: number;
  maxLocalLatchWaitTime: number;
  avgWriteKeys: number;
  maxWriteKeys: number;
  avgWriteSize: number;
  maxWriteSize: number;
  avgPrewriteRegions: number;
  maxPrewriteRegions: number;
  avgTxnRetry: number;
  maxTxnRetry: number;
  sumExecRetry: number;
  sumExecRetryTime: number;
  sumBackoffTimes: number;
  backoffTypes: string | null;
  avgMem: number;
  maxMem: number;
  avgDisk: number;
  maxDisk: number;
  avgKvTime: number;
  avgPdTime: number;
  avgBackoffTotalTime: number;
  avgWriteSqlRespTime: number;
  avgTidbCpuTime: number;
  avgTikvCpuTime: number;
  maxResultRows: number;
  minResultRows: number;
  avgResultRows: number;
  prepared: number;
  avgAffectedRows: number;
  firstSeen: string;
  lastSeen: string;
  planInCache: number;
  planCacheHits: number;
  planInBinding: number;
  querySampleText: string;
  prevSampleText: string;
  planDigest: string;
  plan: string;
  binaryPlan: string;
  charset: string;
  collation: string;
  planHint: string;
  maxRequestUnitRead: number;
  avgRequestUnitRead: number;
  maxRequestUnitWrite: number;
  avgRequestUnitWrite: number;
  maxQueuedRcTime: number;
  avgQueuedRcTime: number;
  resourceGroup: string;
  planCacheUnqualified: number;
  planCacheUnqualifiedLastReason: string;
  parsedPlan?: ExplainAnalyzeRow[];
}

/**
 * Retrieves all tables from the database
 */
export async function getTables(): Promise<string[]> {
  const tables = await sql.executeDDL<string>("SHOW TABLES");
  return tables.rows.flatMap((tableInfo) => Object.values(tableInfo));
}

export const forgeSystemTables: Table[] = [migrations];

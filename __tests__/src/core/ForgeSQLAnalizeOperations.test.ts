import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ForgeSQLAnalyseOperation } from '../../../src/core/ForgeSQLAnalyseOperations';
import { ForgeSqlOperation } from '../../../src/core/ForgeSQLQueryBuilder';
import {testEntity} from "../../entities/TestEntity";
import {testEntityJoin2} from "../../entities/TestEntityJoin2";

// Mock dependencies
vi.mock('../../../src/core/ForgeSQLQueryBuilder', () => ({
  ForgeSqlOperation: vi.fn(),
}));

describe('ForgeSQLAnalizeOperation', () => {
  let forgeOperations: ForgeSqlOperation;
  let analyzeOperation: ForgeSQLAnalyseOperation;

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();

    // Setup mock ForgeSqlOperation
    forgeOperations = {
      fetch: vi.fn().mockReturnValue({
        executeRawSQL: vi.fn(),
      }),
    } as unknown as ForgeSqlOperation;

    analyzeOperation = new ForgeSQLAnalyseOperation(forgeOperations);
  });

  describe('explainAnalyzeRaw', () => {
    it('should execute EXPLAIN ANALYZE query and return formatted results', async () => {
      // Mock raw SQL execution results
      const mockResults = [
        {
          id: '1',
          estRows: '100',
          actRows: '95',
          task: 'TableScan',
          'access object': 'table:t1',
          'execution info': 'time:1ms',
          'operator info': 'scan:t1',
          memory: '1MB',
          disk: '0B',
        },
      ];

      (forgeOperations.fetch().executeRawSQL as any).mockResolvedValue(mockResults);

      const result = await analyzeOperation.explainAnalyzeRaw('SELECT * FROM t1', []);

      expect(result).toEqual([
        {
          id: '1',
          estRows: '100',
          actRows: '95',
          task: 'TableScan',
          accessObject: 'table:t1',
          executionInfo: 'time:1ms',
          operatorInfo: 'scan:t1',
          memory: '1MB',
          disk: '0B',
        },
      ]);

      expect(forgeOperations.fetch().executeRawSQL).toHaveBeenCalledWith(
        'EXPLAIN ANALYZE SELECT * FROM t1',
        [],
      );
    });

    it('should handle empty results', async () => {
      (forgeOperations.fetch().executeRawSQL as any).mockResolvedValue([]);

      const result = await analyzeOperation.explainAnalyzeRaw('SELECT * FROM t1', []);

      expect(result).toEqual([]);
    });
  });

  describe('explainAnalyze', () => {
    it('should execute EXPLAIN ANALYZE on a Drizzle query', async () => {
      const mockQuery = {
        toSQL: vi.fn().mockReturnValue({
          sql: 'SELECT * FROM t1',
          params: ['param1'],
        }),
      };

      const mockResults = [
        {
          id: '1',
          estRows: '100',
          actRows: '95',
          task: 'TableScan',
          'access object': 'table:t1',
          'execution info': 'time:1ms',
          'operator info': 'scan:t1',
          memory: '1MB',
          disk: '0B',
        },
      ];
      const realResults = [
        {
          id: '1',
          estRows: '100',
          actRows: '95',
          task: 'TableScan',
          accessObject: 'table:t1',
          executionInfo: 'time:1ms',
          operatorInfo: 'scan:t1',
          memory: '1MB',
          disk: '0B',
        },
      ];

      (forgeOperations.fetch().executeRawSQL as any).mockResolvedValue(mockResults);

      const result = await analyzeOperation.explainAnalyze(mockQuery);

      expect(result).toEqual(realResults);
      expect(forgeOperations.fetch().executeRawSQL).toHaveBeenCalledWith(
        'EXPLAIN ANALYZE SELECT * FROM t1',
        ['param1'],
      );
    });
  });

  describe('decodedPlan', () => {
    it('should decode a plan string into structured data', () => {
      const planString = `id\testRows\tactRows\ttask\taccess object\texecution info\toperator info\tmemory\tdisk
1\t100\t95\tTableScan\ttable:t1\ttime:1ms\tscan:t1\t1MB\t0B`;

      const result = analyzeOperation.decodedPlan(planString);

      expect(result).toEqual([
        {
          id: '1',
          estRows: '100',
          actRows: '95',
          task: 'TableScan',
          accessObject: 'table:t1',
          executionInfo: 'time:1ms',
          operatorInfo: 'scan:t1',
          memory: '1MB',
          disk: '0B',
        },
      ]);
    });

    it('should handle empty input', () => {
      const result = analyzeOperation.decodedPlan('');
      expect(result).toEqual([]);
    });

    it('should handle malformed input', () => {
      const result = analyzeOperation.decodedPlan('invalid plan string');
      expect(result).toEqual([]);
    });
  });

  describe('normalizeSlowQuery', () => {
    it('should normalize a slow query row', () => {
      const rawQuery = {
        Time: '2024-01-01 12:00:00',
        Txn_start_ts: 1234567890,
        User: 'test_user',
        Host: 'localhost',
        Conn_ID: 1,
        DB: 'test_db',
        Query: 'SELECT * FROM t1',
        Digest: 'abc123',
        Query_time: 1.5,
        Compile_time: 0.1,
        Optimize_time: 0.2,
        Process_time: 0.8,
        Wait_time: 0.4,
        Parse_time: 0.05,
        Rewrite_time: 0.05,
        Cop_time: 0.3,
        Cop_proc_avg: 0.1,
        Cop_proc_max: 0.2,
        Cop_proc_p90: 0.15,
        Cop_proc_addr: '127.0.0.1',
        Cop_wait_avg: 0.1,
        Cop_wait_max: 0.2,
        Cop_wait_p90: 0.15,
        Cop_wait_addr: '127.0.0.1',
        Mem_max: 1024,
        Disk_max: 0,
        Total_keys: 100,
        Process_keys: 95,
        Request_count: 1,
        KV_total: 0.5,
        PD_total: 0.2,
        Result_rows: 10,
        Rocksdb_block_cache_hit_count: 50,
        Rocksdb_block_read_count: 5,
        Rocksdb_block_read_byte: 1024,
        Plan: 'TableScan',
        Binary_plan: 'binary_plan',
        Plan_digest: 'plan_digest',
      };

      const result = analyzeOperation.normalizeSlowQuery(rawQuery);

      expect(result).toEqual({
        time: '2024-01-01 12:00:00',
        txnStartTs: 1234567890,
        user: 'test_user',
        host: 'localhost',
        connId: 1,
        db: 'test_db',
        query: 'SELECT * FROM t1',
        digest: 'abc123',
        queryTime: 1.5,
        compileTime: 0.1,
        optimizeTime: 0.2,
        processTime: 0.8,
        waitTime: 0.4,
        parseTime: 0.05,
        rewriteTime: 0.05,
        copTime: 0.3,
        copProcAvg: 0.1,
        copProcMax: 0.2,
        copProcP90: 0.15,
        copProcAddr: '127.0.0.1',
        copWaitAvg: 0.1,
        copWaitMax: 0.2,
        copWaitP90: 0.15,
        copWaitAddr: '127.0.0.1',
        memMax: 1024,
        diskMax: 0,
        totalKeys: 100,
        processKeys: 95,
        requestCount: 1,
        kvTotal: 0.5,
        pdTotal: 0.2,
        resultRows: 10,
        rocksdbBlockCacheHitCount: 50,
        rocksdbBlockReadCount: 5,
        rocksdbBlockReadByte: 1024,
        plan: 'TableScan',
        binaryPlan: 'binary_plan',
        planDigest: 'plan_digest',
        parsedPlan: [],
      });
    });
  });

  describe('buildClusterStatementQuery', () => {
    it('should build a query with table conditions', () => {
      const tables = ['t1', 't2'];
      const query = analyzeOperation.buildClusterStatementQuery(tables);

      expect(query).toContain("TABLE_NAMES = CONCAT(SCHEMA_NAME, '.', 't1')");
      expect(query).toContain("TABLE_NAMES = CONCAT(SCHEMA_NAME, '.', 't2')");
    });

    it('should include date range conditions when provided', () => {
      const tables = ['t1'];
      const fromDate = new Date('2024-01-01');
      const toDate = new Date('2024-01-02');

      const query = analyzeOperation.buildClusterStatementQuery(tables, fromDate, toDate);

      expect(query).toContain("SUMMARY_BEGIN_TIME >= ");
      expect(query).toContain("SUMMARY_END_TIME <= ");
    });
  });

  describe('analyzeSlowQueries', () => {
    it('should fetch and normalize slow queries', async () => {
      const mockRawQueries = [
        {
          Time: '2024-01-01 12:00:00',
          Query: 'SELECT * FROM t1',
          // ... other fields
        },
      ];

      (forgeOperations.fetch().executeRawSQL as any).mockResolvedValue(mockRawQueries);

      const result = await analyzeOperation.analyzeSlowQueries();

      expect(result).toHaveLength(1);
      expect(result[0].time).toBe('2024-01-01 12:00:00');
      expect(result[0].query).toBe('SELECT * FROM t1');
    });
  });

  describe('mapToCamelCaseClusterStatement', () => {
    it('should convert snake_case to camelCase', () => {
      const input = {
        INSTANCE: 'instance1',
        SUMMARY_BEGIN_TIME: '2024-01-01',
        PLAN: 'TableScan',
      };

      const result = analyzeOperation.mapToCamelCaseClusterStatement(input);

      expect(result).toEqual({
        instance: 'instance1',
        summaryBeginTime: '2024-01-01',
        plan: 'TableScan',
        parsedPlan: [],
      });
    });

    it('should handle empty input', () => {
      const result = analyzeOperation.mapToCamelCaseClusterStatement({});
      expect(result).toEqual({ parsedPlan: [] });
    });
  });

  describe('analyzeQueriesHistory', () => {
    it('should analyze queries for Drizzle tables', async () => {

      const mockResults = [
        {
          INSTANCE: 'instance1',
          SUMMARY_BEGIN_TIME: '2024-01-01',
          PLAN: 'TableScan',
        },
      ];

      (forgeOperations.fetch().executeRawSQL as any).mockResolvedValue(mockResults);

      const result = await analyzeOperation.analyzeQueriesHistory([testEntity,testEntityJoin2]);

      expect(result).toHaveLength(1);
      expect(result[0].instance).toBe('instance1');
      expect(result[0].summaryBeginTime).toBe('2024-01-01');
    });
  });

  describe('analyzeQueriesHistoryRaw', () => {
    it('should analyze queries for raw table names', async () => {
      const tables = ['t1', 't2'];
      const fromDate = new Date('2024-01-01');
      const toDate = new Date('2024-01-02');

      const mockResults = [
        {
          INSTANCE: 'instance1',
          SUMMARY_BEGIN_TIME: '2024-01-01',
          PLAN: 'TableScan',
        },
      ];

      (forgeOperations.fetch().executeRawSQL as any).mockResolvedValue(mockResults);

      const result = await analyzeOperation.analyzeQueriesHistoryRaw(tables, fromDate, toDate);

      expect(result).toHaveLength(1);
      expect(result[0].instance).toBe('instance1');
      expect(result[0].summaryBeginTime).toBe('2024-01-01');
    });
  });
});
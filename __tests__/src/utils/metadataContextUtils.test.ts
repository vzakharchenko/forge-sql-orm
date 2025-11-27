import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  saveMetaDataToContext,
  getLastestMetadata,
  metadataQueryContext,
  MetadataQueryContext,
} from "../../../src/utils/metadataContextUtils";
import { ForgeSQLMetadata } from "../../../src/utils/forgeDriver";
import { ForgeSqlOperation } from "../../../src/core/ForgeSQLQueryBuilder";
import { ExplainAnalyzeRow } from "../../../src/core/SystemTables";
import { printQueriesWithPlan } from "../../../src/utils/sqlUtils";

// Mock dependencies
vi.mock("../../../src/utils/sqlUtils", () => ({
  printQueriesWithPlan: vi.fn(),
}));

describe("metadataContextUtils", () => {
  let mockForgeSQLORM: ForgeSqlOperation;
  let mockAnalyze: {
    explainAnalyzeRaw: ReturnType<typeof vi.fn>;
  };
  let mockContext: MetadataQueryContext;
  let consoleWarnSpy: ReturnType<typeof vi.spyOn>;
  let consoleLogSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // Mock console methods
    consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    // Mock ForgeSQLORM
    mockAnalyze = {
      explainAnalyzeRaw: vi.fn(),
    };
    mockForgeSQLORM = {
      analyze: vi.fn().mockReturnValue(mockAnalyze),
    } as unknown as ForgeSqlOperation;

    // Create mock context
    mockContext = {
      totalDbExecutionTime: 0,
      totalResponseSize: 0,
      beginTime: new Date(),
      statistics: [],
      printQueriesWithPlan: vi.fn(),
      forgeSQLORM: mockForgeSQLORM,
    };

    // Mock metadataQueryContext.getStore
    vi.spyOn(metadataQueryContext, "getStore").mockReturnValue(mockContext);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("getLastestMetadata", () => {
    it("should return context when available", async () => {
      const result = await getLastestMetadata();
      expect(result).toBe(mockContext);
    });

    it("should return undefined when no context is set", async () => {
      vi.spyOn(metadataQueryContext, "getStore").mockReturnValue(undefined);
      const result = await getLastestMetadata();
      expect(result).toBeUndefined();
    });
  });

  describe("saveMetaDataToContext", () => {
    const mockMetadata: ForgeSQLMetadata = {
      dbExecutionTime: 100,
      responseSize: 1024,
      fields: [],
    };

    it("should return early when no context is available", async () => {
      vi.spyOn(metadataQueryContext, "getStore").mockReturnValue(undefined);
      await saveMetaDataToContext("SELECT 1", [], mockMetadata);
      expect(mockContext.statistics).toHaveLength(0);
    });

    it("should initialize statistics array if undefined", async () => {
      mockContext.statistics = undefined as any;
      await saveMetaDataToContext("SELECT 1", [], mockMetadata);
      expect(mockContext.statistics).toBeDefined();
      expect(Array.isArray(mockContext.statistics)).toBe(true);
    });

    it("should add query statistics to context", async () => {
      await saveMetaDataToContext("SELECT * FROM users", ["param1"], mockMetadata);
      expect(mockContext.statistics).toHaveLength(1);
      expect(mockContext.statistics[0]).toEqual({
        query: "SELECT * FROM users",
        params: ["param1"],
        metadata: mockMetadata,
      });
    });

    it("should update aggregated metrics", async () => {
      mockContext.totalDbExecutionTime = 50;
      mockContext.totalResponseSize = 512;
      await saveMetaDataToContext("SELECT 1", [], mockMetadata);
      expect(mockContext.totalDbExecutionTime).toBe(150);
      expect(mockContext.totalResponseSize).toBe(1536);
    });

    it("should set default options when options are undefined", async () => {
      mockContext.options = undefined;
      await saveMetaDataToContext("SELECT 1", [], mockMetadata);
      expect(mockContext.options).toEqual({
        mode: "TopSlowest",
        topQueries: 1,
        summaryTableWindowTime: 15000,
        showSlowestPlans: true,
        normalizeQuery: true,
      });
    });

    it("should merge partial options with defaults", async () => {
      mockContext.options = {
        mode: "SummaryTable",
        topQueries: 3,
      };
      await saveMetaDataToContext("SELECT 1", [], mockMetadata);
      expect(mockContext.options).toEqual({
        mode: "SummaryTable",
        topQueries: 3,
        summaryTableWindowTime: 15000,
        showSlowestPlans: true,
        normalizeQuery: true,
      });
    });

    it("should set up printQueriesWithPlan function", async () => {
      await saveMetaDataToContext("SELECT 1", [], mockMetadata);
      expect(mockContext.printQueriesWithPlan).toBeDefined();
      expect(typeof mockContext.printQueriesWithPlan).toBe("function");
    });

    it("should not update metrics when metadata is null", async () => {
      mockContext.totalDbExecutionTime = 50;
      mockContext.totalResponseSize = 512;
      await saveMetaDataToContext("SELECT 1", [], null as any);
      expect(mockContext.totalDbExecutionTime).toBe(50);
      expect(mockContext.totalResponseSize).toBe(512);
    });
  });

  describe("printQueriesWithPlan - TopSlowest mode", () => {
    const mockMetadata1: ForgeSQLMetadata = {
      dbExecutionTime: 200,
      responseSize: 2048,
      fields: [],
    };
    const mockMetadata2: ForgeSQLMetadata = {
      dbExecutionTime: 100,
      responseSize: 1024,
      fields: [],
    };
    const mockMetadata3: ForgeSQLMetadata = {
      dbExecutionTime: 300,
      responseSize: 3072,
      fields: [],
    };

    const mockExplainPlan: ExplainAnalyzeRow[] = [
      {
        id: "1",
        task: "root",
        operatorInfo: "TableReader",
        estRows: 1000,
        actRows: 1000,
        executionInfo: "time:100ms",
        memory: "1MB",
        disk: "0B",
        accessObject: "table:users",
      },
    ];

    beforeEach(() => {
      mockContext.options = {
        mode: "TopSlowest",
        topQueries: 1,
      };
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue(mockExplainPlan);
    });

    it("should print top slowest query plan", async () => {
      await saveMetaDataToContext("SELECT * FROM users", [], mockMetadata1);
      await saveMetaDataToContext("SELECT * FROM orders", [], mockMetadata2);
      await saveMetaDataToContext("SELECT * FROM products", [], mockMetadata3);

      await mockContext.printQueriesWithPlan();

      // Should call explainAnalyzeRaw for the slowest query (300ms)
      expect(mockForgeSQLORM.analyze).toHaveBeenCalled();
      expect(mockAnalyze.explainAnalyzeRaw).toHaveBeenCalledWith("SELECT * FROM products", []);
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining("SQL: SELECT * FROM products | Time: 300 ms"),
      );
    });

    it("should print top N slowest queries when topQueries > 1", async () => {
      mockContext.options = {
        mode: "TopSlowest",
        topQueries: 2,
      };

      await saveMetaDataToContext("SELECT * FROM users", [], mockMetadata1);
      await saveMetaDataToContext("SELECT * FROM orders", [], mockMetadata2);
      await saveMetaDataToContext("SELECT * FROM products", [], mockMetadata3);

      await mockContext.printQueriesWithPlan();

      // Should call explainAnalyzeRaw for top 2 slowest queries (300ms and 200ms)
      expect(mockAnalyze.explainAnalyzeRaw).toHaveBeenCalledTimes(2);
      expect(mockAnalyze.explainAnalyzeRaw).toHaveBeenCalledWith("SELECT * FROM products", []);
      expect(mockAnalyze.explainAnalyzeRaw).toHaveBeenCalledWith("SELECT * FROM users", []);
      expect(consoleWarnSpy).toHaveBeenCalledTimes(2);
    });

    it("should format execution plan correctly", async () => {
      await saveMetaDataToContext("SELECT * FROM users", [], mockMetadata1);

      await mockContext.printQueriesWithPlan();

      const warnCall = consoleWarnSpy.mock.calls[0][0] as string;
      expect(warnCall).toContain("SQL: SELECT * FROM users | Time: 200 ms");
      expect(warnCall).toContain("Plan:");
      expect(warnCall).toContain("1 | task:root | TableReader");
      expect(warnCall).toContain("estRows:1000, actRows:1000");
      expect(warnCall).toContain("execution info:time:100ms");
      expect(warnCall).toContain("memory:1MB, disk:0B");
      expect(warnCall).toContain("access object:table:users");
    });

    it("should handle empty execution plan", async () => {
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue([]);
      await saveMetaDataToContext("SELECT * FROM users", [], mockMetadata1);

      await mockContext.printQueriesWithPlan();

      const warnCall = consoleWarnSpy.mock.calls[0][0] as string;
      expect(warnCall).toContain("No execution plan available");
    });

    it("should handle execution plan with missing fields", async () => {
      const partialPlan: ExplainAnalyzeRow[] = [
        {
          id: "1",
          operatorInfo: "TableReader",
        },
      ];
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue(partialPlan);
      await saveMetaDataToContext("SELECT * FROM users", [], mockMetadata1);

      await mockContext.printQueriesWithPlan();

      const warnCall = consoleWarnSpy.mock.calls[0][0] as string;
      expect(warnCall).toContain("1 | TableReader");
    });

    it("should handle execution plan with missing id and operatorInfo", async () => {
      const planWithoutIdAndOperator: ExplainAnalyzeRow[] = [
        {
          task: "root",
          estRows: 1000,
          actRows: 1000,
        },
      ];
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue(planWithoutIdAndOperator);
      await saveMetaDataToContext("SELECT * FROM users", [], mockMetadata1);

      await mockContext.printQueriesWithPlan();

      const warnCall = consoleWarnSpy.mock.calls[0][0] as string;
      expect(warnCall).toContain("task:root");
      expect(warnCall).toContain("estRows:1000, actRows:1000");
      // Should not contain id or operatorInfo since they are missing
      expect(warnCall).not.toContain("1 |");
      expect(warnCall).not.toContain("TableReader");
    });

    it("should not show execution plans when showSlowestPlans is false", async () => {
      mockContext.options = {
        mode: "TopSlowest",
        topQueries: 1,
        showSlowestPlans: false,
      };
      await saveMetaDataToContext("SELECT * FROM users", [], mockMetadata1);

      await mockContext.printQueriesWithPlan();

      // Should not call explainAnalyzeRaw
      expect(mockAnalyze.explainAnalyzeRaw).not.toHaveBeenCalled();
      // Should only print SQL and time
      expect(consoleWarnSpy).toHaveBeenCalledWith("SQL: SELECT * FROM users | Time: 200 ms");
    });

    it("should show execution plans when showSlowestPlans is true (default)", async () => {
      mockContext.options = {
        mode: "TopSlowest",
        topQueries: 1,
        showSlowestPlans: true,
      };
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue([
        {
          id: "1",
          operatorInfo: "TableReader",
        },
      ]);
      await saveMetaDataToContext("SELECT * FROM users", [], mockMetadata1);

      await mockContext.printQueriesWithPlan();

      // Should call explainAnalyzeRaw
      expect(mockAnalyze.explainAnalyzeRaw).toHaveBeenCalled();
      // Should print SQL, time, and plan
      const warnCall = consoleWarnSpy.mock.calls[0][0] as string;
      expect(warnCall).toContain("SQL: SELECT * FROM users | Time: 200 ms");
      expect(warnCall).toContain("Plan:");
    });
  });

  describe("printQueriesWithPlan - SummaryTable mode", () => {
    const mockMetadata: ForgeSQLMetadata = {
      dbExecutionTime: 100,
      responseSize: 1024,
      fields: [],
    };

    beforeEach(() => {
      vi.useFakeTimers();
      mockContext.beginTime = new Date("2023-01-01T00:00:00Z");
      vi.setSystemTime(new Date("2023-01-01T00:00:00Z"));
      mockContext.options = {
        mode: "SummaryTable",
        summaryTableWindowTime: 15000,
      };
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it("should use summary tables when within time window", async () => {
      await saveMetaDataToContext("SELECT * FROM users", [], mockMetadata);

      // Advance time by 5 seconds (within 15 second window)
      vi.advanceTimersByTime(5000);

      const printPromise = mockContext.printQueriesWithPlan();

      // Advance timers to trigger the setTimeout(200) inside printPlansUsingSummaryTables
      vi.advanceTimersByTime(200);

      await printPromise;

      expect(printQueriesWithPlan).toHaveBeenCalledWith(mockForgeSQLORM, expect.any(Number));
      expect(mockAnalyze.explainAnalyzeRaw).not.toHaveBeenCalled();
    });

    it("should fall back to top queries when time window expires", async () => {
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue([
        {
          id: "1",
          operatorInfo: "TableReader",
        },
      ]);

      await saveMetaDataToContext("SELECT * FROM users", [], mockMetadata);

      // Advance time by 20 seconds (beyond 15 second window)
      vi.advanceTimersByTime(20000);

      await mockContext.printQueriesWithPlan();

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        "Summary table window expired — showing query plans instead",
      );
      expect(mockAnalyze.explainAnalyzeRaw).toHaveBeenCalled();
    });

    it("should not use summary tables when mode is TopSlowest", async () => {
      mockContext.options = {
        mode: "TopSlowest",
        topQueries: 1,
      };
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue([
        {
          id: "1",
          operatorInfo: "TableReader",
        },
      ]);

      await saveMetaDataToContext("SELECT * FROM users", [], mockMetadata);

      await mockContext.printQueriesWithPlan();

      expect(printQueriesWithPlan).not.toHaveBeenCalled();
      expect(mockAnalyze.explainAnalyzeRaw).toHaveBeenCalled();
    });

    it("should wait 200ms before calling printQueriesWithPlan", async () => {
      await saveMetaDataToContext("SELECT * FROM users", [], mockMetadata);

      const printPromise = mockContext.printQueriesWithPlan();

      // Should not be called immediately
      expect(printQueriesWithPlan).not.toHaveBeenCalled();

      // Advance by 200ms
      vi.advanceTimersByTime(200);

      await printPromise;

      expect(printQueriesWithPlan).toHaveBeenCalled();
    });
  });

  describe("options merging", () => {
    const mockMetadata: ForgeSQLMetadata = {
      dbExecutionTime: 100,
      responseSize: 1024,
      fields: [],
    };

    it("should use default mode when mode is undefined", async () => {
      mockContext.options = {
        topQueries: 3,
      };
      await saveMetaDataToContext("SELECT 1", [], mockMetadata);
      expect(mockContext.options?.mode).toBe("TopSlowest");
    });

    it("should use default topQueries when topQueries is undefined", async () => {
      mockContext.options = {
        mode: "TopSlowest",
      };
      await saveMetaDataToContext("SELECT 1", [], mockMetadata);
      expect(mockContext.options?.topQueries).toBe(1);
    });

    it("should use default summaryTableWindowTime when undefined", async () => {
      mockContext.options = {
        mode: "SummaryTable",
      };
      await saveMetaDataToContext("SELECT 1", [], mockMetadata);
      expect(mockContext.options?.summaryTableWindowTime).toBe(15000);
    });

    it("should use default showSlowestPlans when undefined", async () => {
      mockContext.options = {
        mode: "TopSlowest",
      };
      await saveMetaDataToContext("SELECT 1", [], mockMetadata);
      expect(mockContext.options?.showSlowestPlans).toBe(true);
    });

    it("should preserve provided values", async () => {
      mockContext.options = {
        mode: "SummaryTable",
        topQueries: 5,
        summaryTableWindowTime: 20000,
        showSlowestPlans: false,
      };
      await saveMetaDataToContext("SELECT 1", [], mockMetadata);
      expect(mockContext.options).toEqual({
        mode: "SummaryTable",
        topQueries: 5,
        summaryTableWindowTime: 20000,
        showSlowestPlans: false,
        normalizeQuery: true,
      });
    });
  });

  describe("multiple queries accumulation", () => {
    it("should accumulate multiple queries in statistics", async () => {
      const metadata1: ForgeSQLMetadata = {
        dbExecutionTime: 100,
        responseSize: 1024,
        fields: [],
      };
      const metadata2: ForgeSQLMetadata = {
        dbExecutionTime: 200,
        responseSize: 2048,
        fields: [],
      };
      const metadata3: ForgeSQLMetadata = {
        dbExecutionTime: 300,
        responseSize: 3072,
        fields: [],
      };

      await saveMetaDataToContext("SELECT * FROM users", [], metadata1);
      await saveMetaDataToContext("SELECT * FROM orders", [], metadata2);
      await saveMetaDataToContext("SELECT * FROM products", [], metadata3);

      expect(mockContext.statistics).toHaveLength(3);
      expect(mockContext.totalDbExecutionTime).toBe(600);
      expect(mockContext.totalResponseSize).toBe(6144);
    });
  });

  describe("SQL normalization for logging", () => {
    const mockMetadata: ForgeSQLMetadata = {
      dbExecutionTime: 100,
      responseSize: 1024,
      fields: [],
    };

    it("should normalize SQL with string literals", async () => {
      mockContext.options = {
        mode: "TopSlowest",
        topQueries: 1,
        showSlowestPlans: false,
      };
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue([]);

      await saveMetaDataToContext("SELECT * FROM users WHERE name = 'John'", [], mockMetadata);

      await mockContext.printQueriesWithPlan();

      const warnCall = consoleWarnSpy.mock.calls[0][0] as string;
      expect(warnCall).toContain("SELECT * FROM users WHERE name = ?");
      expect(warnCall).not.toContain("John");
    });

    it("should normalize SQL with numeric literals", async () => {
      mockContext.options = {
        mode: "TopSlowest",
        topQueries: 1,
        showSlowestPlans: false,
      };
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue([]);

      await saveMetaDataToContext("SELECT sleep(4) FROM users WHERE id = 123", [], mockMetadata);

      await mockContext.printQueriesWithPlan();

      const warnCall = consoleWarnSpy.mock.calls[0][0] as string;
      expect(warnCall).toContain("SELECT sleep(?) FROM users WHERE id = ?");
      expect(warnCall).not.toContain("4");
      expect(warnCall).not.toContain("123");
    });

    it("should normalize SQL with boolean literals", async () => {
      mockContext.options = {
        mode: "TopSlowest",
        topQueries: 1,
        showSlowestPlans: false,
      };
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue([]);

      await saveMetaDataToContext("SELECT * FROM users WHERE active = true", [], mockMetadata);

      await mockContext.printQueriesWithPlan();

      const warnCall = consoleWarnSpy.mock.calls[0][0] as string;
      expect(warnCall).toContain("SELECT * FROM users WHERE active = ?");
      expect(warnCall).not.toContain("true");
    });

    it("should normalize SQL with NULL values", async () => {
      mockContext.options = {
        mode: "TopSlowest",
        topQueries: 1,
        showSlowestPlans: false,
      };
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue([]);

      await saveMetaDataToContext("SELECT * FROM users WHERE deleted_at IS NULL", [], mockMetadata);

      await mockContext.printQueriesWithPlan();

      const warnCall = consoleWarnSpy.mock.calls[0][0] as string;
      expect(warnCall).toContain("SELECT * FROM users WHERE deleted_at IS ?");
    });

    it("should normalize SQL with multiple parameter types", async () => {
      mockContext.options = {
        mode: "TopSlowest",
        topQueries: 1,
        showSlowestPlans: false,
      };
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue([]);

      await saveMetaDataToContext(
        "SELECT * FROM users WHERE name = 'John' AND age = 25 AND active = true AND deleted_at IS NULL",
        [],
        mockMetadata,
      );

      await mockContext.printQueriesWithPlan();

      const warnCall = consoleWarnSpy.mock.calls[0][0] as string;
      expect(warnCall).toContain(
        "SELECT * FROM users WHERE name = ? AND age = ? AND active = ? AND deleted_at IS ?",
      );
      expect(warnCall).not.toContain("John");
      expect(warnCall).not.toContain("25");
      expect(warnCall).not.toContain("true");
    });

    it("should normalize SQL with double-quoted strings", async () => {
      mockContext.options = {
        mode: "TopSlowest",
        topQueries: 1,
        showSlowestPlans: false,
      };
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue([]);

      await saveMetaDataToContext('SELECT * FROM users WHERE name = "John"', [], mockMetadata);

      await mockContext.printQueriesWithPlan();

      const warnCall = consoleWarnSpy.mock.calls[0][0] as string;
      expect(warnCall).toContain("SELECT * FROM users WHERE name = ?");
      expect(warnCall).not.toContain("John");
    });

    it("should normalize SQL with decimal numbers", async () => {
      mockContext.options = {
        mode: "TopSlowest",
        topQueries: 1,
        showSlowestPlans: false,
      };
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue([]);

      await saveMetaDataToContext("SELECT * FROM products WHERE price = 19.99", [], mockMetadata);

      await mockContext.printQueriesWithPlan();

      const warnCall = consoleWarnSpy.mock.calls[0][0] as string;
      expect(warnCall).toContain("SELECT * FROM products WHERE price = ?");
      expect(warnCall).not.toContain("19.99");
    });

    it("should fall back to regex normalization when parser fails", async () => {
      mockContext.options = {
        mode: "TopSlowest",
        topQueries: 1,
        showSlowestPlans: false,
      };
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue([]);

      // Use invalid SQL that will cause parser to fail
      // This will trigger fallback to regex normalization
      await saveMetaDataToContext(
        "SELECT * FROM users WHERE name = 'John' AND invalid syntax",
        [],
        mockMetadata,
      );

      await mockContext.printQueriesWithPlan();

      const warnCall = consoleWarnSpy.mock.calls[0][0] as string;
      // Should still normalize using regex fallback
      expect(warnCall).toContain("SELECT * FROM users WHERE name = ?");
      expect(warnCall).not.toContain("John");
    });

    it("should not normalize SQL when normalizeQuery is false", async () => {
      mockContext.options = {
        mode: "TopSlowest",
        topQueries: 1,
        showSlowestPlans: false,
        normalizeQuery: false,
      };
      mockAnalyze.explainAnalyzeRaw.mockResolvedValue([]);

      const originalQuery = "SELECT * FROM users WHERE name = 'John' AND id = 123";
      await saveMetaDataToContext(originalQuery, [], mockMetadata);

      await mockContext.printQueriesWithPlan();

      const warnCall = consoleWarnSpy.mock.calls[0][0] as string;
      // Should contain original query with parameters
      expect(warnCall).toContain(originalQuery);
      expect(warnCall).toContain("John");
      expect(warnCall).toContain("123");
      // Should not contain normalized version
      expect(warnCall).not.toContain("name = ?");
    });
  });
});

import { describe, it, expect, beforeEach, vi } from "vitest";
import { createForgeDriverProxy } from "../../../src/utils/forgeDriverProxy";
import { ForgeSqlOperation } from "../../../src/core/ForgeSQLQueryBuilder";
import { SqlHints } from "../../../src/utils/sqlHints";

// Mock dependencies
const mockForgeDriver = vi.fn();
const mockInjectSqlHints = vi.fn();
const mockPrintQueriesWithPlan = vi.fn();

vi.mock("../../../src/utils/forgeDriver", () => ({
  forgeDriver: (...args: any[]) => mockForgeDriver(...args),
}));

vi.mock("../../../src/utils/sqlHints", () => ({
  injectSqlHints: (...args: any[]) => mockInjectSqlHints(...args),
}));

vi.mock("../../../src/utils/sqlUtils", () => ({
  printQueriesWithPlan: (...args: any[]) => mockPrintQueriesWithPlan(...args),
}));

describe("forgeDriverProxy", () => {
  let mockForgeSqlOperation: ForgeSqlOperation;
  let proxiedDriver: ReturnType<typeof createForgeDriverProxy>;
  const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  const consoleDebugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});

  // Track promises to ensure they're handled
  const trackedPromises: Promise<any>[] = [];

  beforeEach(() => {
    vi.clearAllMocks();
    mockForgeSqlOperation = {} as ForgeSqlOperation;
    mockInjectSqlHints.mockImplementation((query: string) => query);
    mockForgeDriver.mockResolvedValue({ rows: [{ id: 1, name: "Test" }] });
    mockPrintQueriesWithPlan.mockResolvedValue(undefined);
    trackedPromises.length = 0;
  });

  afterEach(async () => {
    consoleErrorSpy.mockClear();
    consoleDebugSpy.mockClear();
    // Wait for all tracked promises to complete
    await Promise.allSettled(trackedPromises);
    // Wait for any pending async operations to complete
    await new Promise((resolve) => setTimeout(resolve, 100));
  });

  describe("createForgeDriverProxy", () => {
    it("should create a proxy function", () => {
      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation);
      expect(typeof proxiedDriver).toBe("function");
    });

    it("should execute query successfully", async () => {
      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation);
      const result = await proxiedDriver("SELECT * FROM users", [], "all");

      expect(result).toEqual({ rows: [{ id: 1, name: "Test" }] });
      expect(mockForgeDriver).toHaveBeenCalledWith("SELECT * FROM users", [], "all");
    });

    it("should inject SQL hints when options provided", async () => {
      const hints: SqlHints = { maxExecutionTime: 5000 };
      mockInjectSqlHints.mockReturnValue("SELECT /*+ MAX_EXECUTION_TIME(5000) */ * FROM users");

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation, hints);
      await proxiedDriver("SELECT * FROM users", [], "all");

      expect(mockInjectSqlHints).toHaveBeenCalledWith("SELECT * FROM users", hints);
      expect(mockForgeDriver).toHaveBeenCalledWith(
        "SELECT /*+ MAX_EXECUTION_TIME(5000) */ * FROM users",
        [],
        "all",
      );
    });

    it("should log SQL hints when logRawSqlQuery is true and query is modified", async () => {
      const hints: SqlHints = { maxExecutionTime: 5000 };
      mockInjectSqlHints.mockReturnValue("SELECT /*+ MAX_EXECUTION_TIME(5000) */ * FROM users");

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation, hints, true);
      await proxiedDriver("SELECT * FROM users", [], "all");

      expect(consoleDebugSpy).toHaveBeenCalledWith(
        "SQL Hints injected: SELECT /*+ MAX_EXECUTION_TIME(5000) */ * FROM users",
      );
    });

    it("should not log SQL hints when query is not modified", async () => {
      const hints: SqlHints = { maxExecutionTime: 5000 };
      mockInjectSqlHints.mockReturnValue("SELECT * FROM users");

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation, hints, true);
      await proxiedDriver("SELECT * FROM users", [], "all");

      expect(consoleDebugSpy).not.toHaveBeenCalledWith(
        expect.stringContaining("SQL Hints injected"),
      );
    });

    it("should not log SQL hints when logRawSqlQuery is false", async () => {
      const hints: SqlHints = { maxExecutionTime: 5000 };
      mockInjectSqlHints.mockReturnValue("SELECT /*+ MAX_EXECUTION_TIME(5000) */ * FROM users");

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation, hints, false);
      await proxiedDriver("SELECT * FROM users", [], "all");

      expect(consoleDebugSpy).not.toHaveBeenCalledWith(
        expect.stringContaining("SQL Hints injected"),
      );
    });

    it("should handle timeout errors and analyze query", async () => {
      const timeoutError = {
        code: "SQL_QUERY_TIMEOUT",
        message: "Query timeout",
      };
      mockForgeDriver.mockRejectedValueOnce(timeoutError);

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation);
      vi.useFakeTimers();

      const promise = proxiedDriver("SELECT * FROM users", [], "all");
      // Track the promise to ensure it's handled
      trackedPromises.push(promise.catch(() => {}));

      // Fast-forward time to skip the delay
      await vi.advanceTimersByTimeAsync(200);

      try {
        await promise;
        expect.fail("Expected promise to reject");
      } catch (error) {
        expect(error).toEqual(timeoutError);
      }

      expect(consoleErrorSpy).toHaveBeenCalledWith(" TIMEOUT detected - Query exceeded time limit");
      expect(mockPrintQueriesWithPlan).toHaveBeenCalledWith(
        mockForgeSqlOperation,
        expect.any(Number),
      );

      vi.useRealTimers();
      // Wait for all async operations to complete
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    it("should handle out of memory errors and analyze query", async () => {
      const outOfMemoryError = {
        code: "OTHER_ERROR",
        context: {
          debug: {
            errno: 8175,
          },
        },
        message: "Out of memory",
      };
      mockForgeDriver.mockRejectedValueOnce(outOfMemoryError);

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation);
      vi.useFakeTimers();

      const promise = proxiedDriver("SELECT * FROM users", [], "all");
      // Track the promise to ensure it's handled
      trackedPromises.push(promise.catch(() => {}));

      // Fast-forward time to skip the delay
      await vi.advanceTimersByTimeAsync(200);

      try {
        await promise;
        expect.fail("Expected promise to reject");
      } catch (error) {
        expect(error).toEqual(outOfMemoryError);
      }

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "OUT OF MEMORY detected - Query exceeded memory limit",
      );
      expect(mockPrintQueriesWithPlan).toHaveBeenCalledWith(
        mockForgeSqlOperation,
        expect.any(Number),
      );

      vi.useRealTimers();
      // Wait for all async operations to complete
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    it("should log SQL error details when logRawSqlQuery is true", async () => {
      const error = {
        code: "SOME_ERROR",
        message: "Some error",
      };
      mockForgeDriver.mockRejectedValueOnce(error);

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation, undefined, true);

      await expect(proxiedDriver("SELECT * FROM users", [], "all")).rejects.toEqual(error);

      expect(consoleDebugSpy).toHaveBeenCalledWith(
        "SQL Error Details:",
        JSON.stringify(error, null, 2),
      );
    });

    it("should not log SQL error details when logRawSqlQuery is false", async () => {
      const error = {
        code: "SOME_ERROR",
        message: "Some error",
      };
      mockForgeDriver.mockRejectedValueOnce(error);

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation, undefined, false);

      await expect(proxiedDriver("SELECT * FROM users", [], "all")).rejects.toEqual(error);

      expect(consoleDebugSpy).not.toHaveBeenCalledWith(
        expect.stringContaining("SQL Error Details"),
      );
    });

    it("should re-throw original error after handling", async () => {
      const error = {
        code: "SOME_ERROR",
        message: "Some error",
      };
      mockForgeDriver.mockRejectedValueOnce(error);

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation);

      await expect(proxiedDriver("SELECT * FROM users", [], "all")).rejects.toEqual(error);
    });

    it("should handle execute method", async () => {
      mockForgeDriver.mockResolvedValueOnce({
        rows: [],
        affectedRows: 1,
        insertId: 123,
      });

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation);
      const result = await proxiedDriver("UPDATE users SET name = ?", ["John"], "execute");

      expect(result).toEqual({
        rows: [],
        affectedRows: 1,
        insertId: 123,
      });
      expect(mockForgeDriver).toHaveBeenCalledWith(
        "UPDATE users SET name = ?",
        ["John"],
        "execute",
      );
    });

    it("should not analyze query for non-timeout, non-memory errors", async () => {
      const error = {
        code: "OTHER_ERROR",
        message: "Some other error",
      };
      mockForgeDriver.mockRejectedValueOnce(error);

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation);

      await expect(proxiedDriver("SELECT * FROM users", [], "all")).rejects.toEqual(error);

      expect(mockPrintQueriesWithPlan).not.toHaveBeenCalled();
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    it("should calculate query duration correctly", async () => {
      const timeoutError = {
        code: "SQL_QUERY_TIMEOUT",
        message: "Query timeout",
      };
      mockForgeDriver.mockRejectedValueOnce(timeoutError);

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation);
      vi.useFakeTimers();

      const startTime = Date.now();
      const promise = proxiedDriver("SELECT * FROM users", [], "all");
      // Track the promise to ensure it's handled
      trackedPromises.push(promise.catch(() => {}));

      // Fast-forward time
      await vi.advanceTimersByTimeAsync(200);

      try {
        await promise;
        expect.fail("Expected promise to reject");
      } catch (error) {
        expect(error).toEqual(timeoutError);
      }

      // Verify that printQueriesWithPlan was called with a duration
      expect(mockPrintQueriesWithPlan).toHaveBeenCalled();
      const callArgs = mockPrintQueriesWithPlan.mock.calls[0];
      expect(callArgs[1]).toBeGreaterThanOrEqual(0);

      vi.useRealTimers();
      // Wait for all async operations to complete
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    it("should handle errors without context.debug", async () => {
      const error = {
        code: "OTHER_ERROR",
        message: "Error without context",
      };
      mockForgeDriver.mockRejectedValueOnce(error);

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation);

      await expect(proxiedDriver("SELECT * FROM users", [], "all")).rejects.toEqual(error);

      expect(mockPrintQueriesWithPlan).not.toHaveBeenCalled();
    });

    it("should handle errors with context but without debug", async () => {
      const error = {
        code: "OTHER_ERROR",
        context: {},
        message: "Error with context but no debug",
      };
      mockForgeDriver.mockRejectedValueOnce(error);

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation);

      await expect(proxiedDriver("SELECT * FROM users", [], "all")).rejects.toEqual(error);

      expect(mockPrintQueriesWithPlan).not.toHaveBeenCalled();
    });

    it("should handle errors with context.debug but wrong errno", async () => {
      const error = {
        code: "OTHER_ERROR",
        context: {
          debug: {
            errno: 1234, // Not the OUT_OF_MEMORY_ERRNO
          },
        },
        message: "Error with wrong errno",
      };
      mockForgeDriver.mockRejectedValueOnce(error);

      proxiedDriver = createForgeDriverProxy(mockForgeSqlOperation);

      await expect(proxiedDriver("SELECT * FROM users", [], "all")).rejects.toEqual(error);

      expect(mockPrintQueriesWithPlan).not.toHaveBeenCalled();
    });
  });
});

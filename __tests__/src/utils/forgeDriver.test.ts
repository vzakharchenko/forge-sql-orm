import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  forgeDriver,
  isUpdateQueryResponse,
  ForgeSQLMetadata,
} from "../../../src/utils/forgeDriver";

// Mock dependencies
const mockSaveMetaDataToContext = vi.fn();
const mockGetOperationType = vi.fn();
const mockWithTimeout = vi.fn();

// Mock @forge/sql
const mockSqlPrepare = vi.fn();
const mockSqlExecuteDDL = vi.fn();
const mockBindParams = vi.fn();
const mockExecute = vi.fn();

const createMockSqlStatement = () => ({
  bindParams: mockBindParams,
  execute: mockExecute,
});

vi.mock("../../../src/utils/metadataContextUtils", () => ({
  saveMetaDataToContext: (...args: any[]) => mockSaveMetaDataToContext(...args),
}));

vi.mock("../../../src/utils/requestTypeContextUtils", () => ({
  getOperationType: (...args: any[]) => mockGetOperationType(...args),
}));

vi.mock("../../../src/utils/sqlUtils", () => ({
  withTimeout: (...args: any[]) => mockWithTimeout(...args),
}));

vi.mock("@forge/sql", () => ({
  sql: {
    prepare: (...args: any[]) => mockSqlPrepare(...args),
    executeDDL: (...args: any[]) => mockSqlExecuteDDL(...args),
  },
}));

describe("forgeDriver", () => {
  const mockMetadata: ForgeSQLMetadata = {
    dbExecutionTime: 100,
    responseSize: 1024,
    fields: [
      {
        catalog: "def",
        name: "id",
        schema: "",
        characterSet: 63,
        decimals: 0,
        table: "users",
        orgTable: "users",
        orgName: "id",
        flags: 0,
        columnType: 3,
        columnLength: 11,
      },
    ],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockGetOperationType.mockResolvedValue("QUERY");
    mockWithTimeout.mockImplementation(async (promise) => promise);
    // For execute method: sql.prepare returns synchronously
    // For all method: sql.prepare returns a promise
    mockSqlPrepare.mockImplementation((query: string) => {
      // Check if it's a SELECT query (all method) - return promise
      if (query.trim().toUpperCase().startsWith("SELECT")) {
        return Promise.resolve(createMockSqlStatement());
      }
      // For execute method (UPDATE/INSERT/DELETE) - return synchronously
      return createMockSqlStatement();
    });
    mockBindParams.mockReturnValue(undefined);
    mockExecute.mockResolvedValue({
      rows: [{ id: 1, name: "Test" }],
      metadata: mockMetadata,
    });
    mockSaveMetaDataToContext.mockResolvedValue(undefined);
  });

  describe("isUpdateQueryResponse", () => {
    it("should return true for valid UpdateQueryResponse", () => {
      const obj = { affectedRows: 1, insertId: 123 };
      expect(isUpdateQueryResponse(obj)).toBe(true);
    });

    it("should return false for null", () => {
      expect(isUpdateQueryResponse(null)).toBe(false);
    });

    it("should return false for non-object", () => {
      expect(isUpdateQueryResponse("string")).toBe(false);
      expect(isUpdateQueryResponse(123)).toBe(false);
      expect(isUpdateQueryResponse(true)).toBe(false);
    });

    it("should return false for object without affectedRows", () => {
      const obj = { insertId: 123 };
      expect(isUpdateQueryResponse(obj)).toBe(false);
    });

    it("should return false for object without insertId", () => {
      const obj = { affectedRows: 1 };
      expect(isUpdateQueryResponse(obj)).toBe(false);
    });

    it("should return false for object with non-number affectedRows", () => {
      const obj = { affectedRows: "1", insertId: 123 };
      expect(isUpdateQueryResponse(obj)).toBe(false);
    });

    it("should return false for object with non-number insertId", () => {
      const obj = { affectedRows: 1, insertId: "123" };
      expect(isUpdateQueryResponse(obj)).toBe(false);
    });
  });

  describe("forgeDriver - DDL operations", () => {
    it("should handle DDL operations with executeDDL", async () => {
      mockGetOperationType.mockResolvedValue("DDL");
      mockSqlExecuteDDL.mockResolvedValue({
        rows: [],
        metadata: mockMetadata,
      });

      const result = await forgeDriver("CREATE TABLE users (id INT)", [], "all");

      expect(result).toEqual({ rows: [] });
      expect(mockGetOperationType).toHaveBeenCalled();
      expect(mockSqlExecuteDDL).toHaveBeenCalledWith("CREATE TABLE users (id INT)");
      expect(mockSaveMetaDataToContext).toHaveBeenCalledWith(
        "CREATE TABLE users (id INT)",
        [],
        mockMetadata,
      );
    });

    it("should inline params for DDL operations", async () => {
      mockGetOperationType.mockResolvedValue("DDL");
      mockSqlExecuteDDL.mockResolvedValue({
        rows: [],
        metadata: mockMetadata,
      });

      await forgeDriver("CREATE TABLE users (id INT, name VARCHAR(?))", ["255"], "all");

      expect(mockSqlExecuteDDL).toHaveBeenCalledWith(
        "CREATE TABLE users (id INT, name VARCHAR('255'))",
      );
    });

    it("should handle null params in DDL operations", async () => {
      mockGetOperationType.mockResolvedValue("DDL");
      mockSqlExecuteDDL.mockResolvedValue({
        rows: [],
        metadata: mockMetadata,
      });

      await forgeDriver("CREATE TABLE users (id INT, name VARCHAR(?))", [null], "all");

      expect(mockSqlExecuteDDL).toHaveBeenCalledWith(
        "CREATE TABLE users (id INT, name VARCHAR(NULL))",
      );
    });

    it("should handle string params with quotes in DDL operations", async () => {
      mockGetOperationType.mockResolvedValue("DDL");
      mockSqlExecuteDDL.mockResolvedValue({
        rows: [],
        metadata: mockMetadata,
      });

      await forgeDriver("CREATE TABLE users (name VARCHAR(?))", ["O'Brien"], "all");

      expect(mockSqlExecuteDDL).toHaveBeenCalledWith(
        "CREATE TABLE users (name VARCHAR('O''Brien'))",
      );
    });

    it("should handle DDL result with UpdateQueryResponse rows", async () => {
      mockGetOperationType.mockResolvedValue("DDL");
      const updateResponse = { affectedRows: 1, insertId: 123 };
      mockSqlExecuteDDL.mockResolvedValue({
        rows: updateResponse,
        metadata: mockMetadata,
      });

      const result = await forgeDriver("CREATE TABLE users (id INT)", [], "all");

      expect(result).toEqual({
        rows: [updateResponse],
        affectedRows: 1,
        insertId: 123,
      });
    });

    it("should handle DDL result with array rows and execute method", async () => {
      mockGetOperationType.mockResolvedValue("DDL");
      mockSqlExecuteDDL.mockResolvedValue({
        rows: [{ id: 1 }],
        metadata: mockMetadata,
      });

      const result = await forgeDriver("CREATE TABLE users (id INT)", [], "execute");

      expect(result).toEqual({ rows: [[{ id: 1 }]] });
    });

    it("should handle DDL result with array rows and all method", async () => {
      mockGetOperationType.mockResolvedValue("DDL");
      mockSqlExecuteDDL.mockResolvedValue({
        rows: [{ id: 1, name: "Test" }],
        metadata: mockMetadata,
      });

      const result = await forgeDriver("CREATE TABLE users (id INT)", [], "all");

      expect(result).toEqual({ rows: [[1, "Test"]] });
    });

    it("should handle DDL result without rows", async () => {
      mockGetOperationType.mockResolvedValue("DDL");
      mockSqlExecuteDDL.mockResolvedValue({
        metadata: mockMetadata,
      });

      const result = await forgeDriver("CREATE TABLE users (id INT)", [], "all");

      expect(result).toEqual({ rows: [] });
    });

    it("should handle DDL result without metadata", async () => {
      mockGetOperationType.mockResolvedValue("DDL");
      mockSqlExecuteDDL.mockResolvedValue({
        rows: [],
      });

      const result = await forgeDriver("CREATE TABLE users (id INT)", [], "all");

      expect(result).toEqual({ rows: [] });
      expect(mockSaveMetaDataToContext).not.toHaveBeenCalled();
    });
  });

  describe("forgeDriver - execute method (UPDATE/INSERT/DELETE)", () => {
    it("should handle execute method with parameters", async () => {
      const updateResponse = { affectedRows: 1, insertId: 123 };
      mockExecute.mockResolvedValue({
        rows: updateResponse,
        metadata: mockMetadata,
      });

      const result = await forgeDriver(
        "UPDATE users SET name = ? WHERE id = ?",
        ["John", 1],
        "execute",
      );

      expect(result).toEqual({ rows: [updateResponse] });
      expect(mockSqlPrepare).toHaveBeenCalledWith("UPDATE users SET name = ? WHERE id = ?");
      expect(mockBindParams).toHaveBeenCalledWith("John", 1);
      expect(mockSaveMetaDataToContext).toHaveBeenCalledWith(
        "UPDATE users SET name = ? WHERE id = ?",
        ["John", 1],
        mockMetadata,
      );
    });

    it("should handle execute method without parameters", async () => {
      const updateResponse = { affectedRows: 1, insertId: 123 };
      mockExecute.mockResolvedValue({
        rows: updateResponse,
        metadata: mockMetadata,
      });

      const result = await forgeDriver("DELETE FROM users", undefined, "execute");

      expect(result).toEqual({ rows: [updateResponse] });
      expect(mockBindParams).not.toHaveBeenCalled();
      expect(mockSaveMetaDataToContext).toHaveBeenCalledWith("DELETE FROM users", [], mockMetadata);
    });

    it("should handle execute method with empty params array", async () => {
      const updateResponse = { affectedRows: 1, insertId: 123 };
      mockExecute.mockResolvedValue({
        rows: updateResponse,
        metadata: mockMetadata,
      });

      const result = await forgeDriver("DELETE FROM users", [], "execute");

      expect(result).toEqual({ rows: [updateResponse] });
      expect(mockBindParams).toHaveBeenCalledWith();
    });

    it("should handle execute method without rows", async () => {
      mockExecute.mockResolvedValue({
        metadata: mockMetadata,
      });

      const result = await forgeDriver("UPDATE users SET name = ?", ["John"], "execute");

      expect(result).toEqual({ rows: [[]] });
    });

    it("should use withTimeout for execute method", async () => {
      const updateResponse = { affectedRows: 1, insertId: 123 };
      const executePromise = Promise.resolve({
        rows: updateResponse,
        metadata: mockMetadata,
      });
      mockExecute.mockReturnValue(executePromise);
      mockWithTimeout.mockResolvedValue({
        rows: updateResponse,
        metadata: mockMetadata,
      });

      await forgeDriver("UPDATE users SET name = ?", ["John"], "execute");

      expect(mockWithTimeout).toHaveBeenCalledWith(
        executePromise,
        expect.stringContaining("Atlassian @forge/sql did not return"),
        10000,
      );
    });
  });

  describe("forgeDriver - all method (SELECT)", () => {
    it("should handle all method with parameters", async () => {
      mockExecute.mockResolvedValue({
        rows: [{ id: 1, name: "Test" }],
        metadata: mockMetadata,
      });

      const result = await forgeDriver("SELECT * FROM users WHERE id = ?", [1], "all");

      expect(result).toEqual({ rows: [[1, "Test"]] });
      expect(mockSqlPrepare).toHaveBeenCalledWith("SELECT * FROM users WHERE id = ?");
      expect(mockBindParams).toHaveBeenCalledWith(1);
      expect(mockSaveMetaDataToContext).toHaveBeenCalledWith(
        "SELECT * FROM users WHERE id = ?",
        [1],
        mockMetadata,
      );
    });

    it("should handle all method without parameters", async () => {
      mockExecute.mockResolvedValue({
        rows: [{ id: 1, name: "Test" }],
        metadata: mockMetadata,
      });

      const result = await forgeDriver("SELECT * FROM users", undefined, "all");

      expect(result).toEqual({ rows: [[1, "Test"]] });
      expect(mockBindParams).not.toHaveBeenCalled();
      expect(mockSaveMetaDataToContext).toHaveBeenCalledWith(
        "SELECT * FROM users",
        [],
        mockMetadata,
      );
    });

    it("should handle all method with empty params array", async () => {
      mockExecute.mockResolvedValue({
        rows: [{ id: 1, name: "Test" }],
        metadata: mockMetadata,
      });

      const result = await forgeDriver("SELECT * FROM users", [], "all");

      expect(result).toEqual({ rows: [[1, "Test"]] });
      expect(mockBindParams).toHaveBeenCalledWith();
    });

    it("should handle all method without rows", async () => {
      mockExecute.mockResolvedValue({
        metadata: mockMetadata,
      });

      const result = await forgeDriver("SELECT * FROM users WHERE id = ?", [999], "all");

      expect(result).toEqual({ rows: [] });
    });

    it("should transform rows to array of values", async () => {
      mockExecute.mockResolvedValue({
        rows: [
          { id: 1, name: "Test1", email: "test1@example.com" },
          { id: 2, name: "Test2", email: "test2@example.com" },
        ],
        metadata: mockMetadata,
      });

      const result = await forgeDriver("SELECT * FROM users", [], "all");

      expect(result).toEqual({
        rows: [
          [1, "Test1", "test1@example.com"],
          [2, "Test2", "test2@example.com"],
        ],
      });
    });

    it("should use withTimeout for all method", async () => {
      const executePromise = Promise.resolve({
        rows: [{ id: 1, name: "Test" }],
        metadata: mockMetadata,
      });
      mockExecute.mockReturnValue(executePromise);
      mockWithTimeout.mockResolvedValue({
        rows: [{ id: 1, name: "Test" }],
        metadata: mockMetadata,
      });

      await forgeDriver("SELECT * FROM users", [], "all");

      expect(mockWithTimeout).toHaveBeenCalledWith(
        executePromise,
        expect.stringContaining("Atlassian @forge/sql did not return"),
        10000,
      );
    });

    it("should handle single row result", async () => {
      mockExecute.mockResolvedValue({
        rows: [{ id: 1, name: "Test" }],
        metadata: mockMetadata,
      });

      const result = await forgeDriver("SELECT * FROM users WHERE id = ?", [1], "all");

      expect(result).toEqual({ rows: [[1, "Test"]] });
    });
  });

  describe("edge cases", () => {
    it("should handle undefined params for DDL", async () => {
      mockGetOperationType.mockResolvedValue("DDL");
      mockSqlExecuteDDL.mockResolvedValue({
        rows: [],
        metadata: mockMetadata,
      });

      await forgeDriver("CREATE TABLE users (id INT)", undefined, "all");

      expect(mockSqlExecuteDDL).toHaveBeenCalledWith("CREATE TABLE users (id INT)");
    });

    it("should handle numeric params in DDL", async () => {
      mockGetOperationType.mockResolvedValue("DDL");
      mockSqlExecuteDDL.mockResolvedValue({
        rows: [],
        metadata: mockMetadata,
      });

      await forgeDriver("CREATE TABLE users (id INT, count INT(?))", [100], "all");

      expect(mockSqlExecuteDDL).toHaveBeenCalledWith("CREATE TABLE users (id INT, count INT(100))");
    });

    it("should handle multiple params in DDL", async () => {
      mockGetOperationType.mockResolvedValue("DDL");
      mockSqlExecuteDDL.mockResolvedValue({
        rows: [],
        metadata: mockMetadata,
      });

      await forgeDriver(
        "CREATE TABLE users (id INT, name VARCHAR(?), age INT(?))",
        ["255", 50],
        "all",
      );

      expect(mockSqlExecuteDDL).toHaveBeenCalledWith(
        "CREATE TABLE users (id INT, name VARCHAR('255'), age INT(50))",
      );
    });

    it("should handle DDL result with non-array, non-UpdateQueryResponse rows", async () => {
      mockGetOperationType.mockResolvedValue("DDL");
      mockSqlExecuteDDL.mockResolvedValue({
        rows: "some string" as any,
        metadata: mockMetadata,
      });

      const result = await forgeDriver("CREATE TABLE users (id INT)", [], "all");

      expect(result).toEqual({ rows: [] });
    });
  });
});

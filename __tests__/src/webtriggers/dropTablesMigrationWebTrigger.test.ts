import { describe, it, expect, beforeEach, vi } from "vitest";
import { dropTableSchemaMigrations } from "../../../src/webtriggers/dropTablesMigrationWebTrigger";

// Mock dependencies
const mockGetTables = vi.fn();
const mockGenerateStatements = vi.fn();
const mockExecuteDDL = vi.fn();
const mockGetHttpResponse = vi.fn();
const consoleDebugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

vi.mock("../../../src/core/SystemTables", () => ({
  getTables: (...args: any[]) => mockGetTables(...args),
}));

vi.mock("../../../src/utils/sqlUtils", () => ({
  generateDropTableStatements: (...args: any[]) => mockGenerateStatements(...args),
}));

vi.mock("@forge/sql", () => ({
  sql: {
    executeDDL: (...args: any[]) => mockExecuteDDL(...args),
  },
}));

vi.mock("../../../src/webtriggers/index", () => ({
  getHttpResponse: (...args: any[]) => mockGetHttpResponse(...args),
}));

describe("dropTableSchemaMigrations", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockGetTables.mockResolvedValue(["users", "orders"]);
    mockGenerateStatements.mockReturnValue([
      "DROP TABLE IF EXISTS users",
      "DROP TABLE IF EXISTS orders",
    ]);
    mockExecuteDDL.mockResolvedValue(undefined);
    mockGetHttpResponse.mockImplementation((statusCode: number, body: string) => ({
      statusCode,
      body,
      headers: { "Content-Type": ["application/json"] },
      statusText: statusCode === 200 ? "Ok" : "Bad Request",
    }));
  });

  it("should successfully drop tables", async () => {
    const result = await dropTableSchemaMigrations();

    expect(mockGetTables).toHaveBeenCalled();
    expect(mockGenerateStatements).toHaveBeenCalledWith(["users", "orders"], {
      sequence: false,
      table: true,
    });
    expect(mockExecuteDDL).toHaveBeenCalledTimes(2);
    expect(mockExecuteDDL).toHaveBeenNthCalledWith(1, "DROP TABLE IF EXISTS users");
    expect(mockExecuteDDL).toHaveBeenNthCalledWith(2, "DROP TABLE IF EXISTS orders");
    expect(consoleDebugSpy).toHaveBeenCalledTimes(2);
    expect(consoleDebugSpy).toHaveBeenNthCalledWith(1, "execute DDL: DROP TABLE IF EXISTS users");
    expect(consoleDebugSpy).toHaveBeenNthCalledWith(2, "execute DDL: DROP TABLE IF EXISTS orders");
    expect(mockGetHttpResponse).toHaveBeenCalledWith(
      200,
      "⚠️ All data in these tables has been permanently deleted. This operation cannot be undone.",
    );
    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(
      "⚠️ All data in these tables has been permanently deleted. This operation cannot be undone.",
    );
  });

  it("should handle empty tables list", async () => {
    mockGetTables.mockResolvedValue([]);
    mockGenerateStatements.mockReturnValue([]);

    const result = await dropTableSchemaMigrations();

    expect(mockGetTables).toHaveBeenCalled();
    expect(mockGenerateStatements).toHaveBeenCalledWith([], { sequence: false, table: true });
    expect(mockExecuteDDL).not.toHaveBeenCalled();
    expect(consoleDebugSpy).not.toHaveBeenCalled();
    expect(mockGetHttpResponse).toHaveBeenCalledWith(
      200,
      "⚠️ All data in these tables has been permanently deleted. This operation cannot be undone.",
    );
    expect(result.statusCode).toBe(200);
  });

  it("should handle single table", async () => {
    mockGetTables.mockResolvedValue(["users"]);
    mockGenerateStatements.mockReturnValue(["DROP TABLE IF EXISTS users"]);

    const result = await dropTableSchemaMigrations();

    expect(mockExecuteDDL).toHaveBeenCalledTimes(1);
    expect(mockExecuteDDL).toHaveBeenCalledWith("DROP TABLE IF EXISTS users");
    expect(consoleDebugSpy).toHaveBeenCalledTimes(1);
    expect(result.statusCode).toBe(200);
  });

  it("should handle error with debug.sqlMessage", async () => {
    const error = {
      debug: {
        sqlMessage: "Table does not exist",
      },
    };
    mockGetTables.mockRejectedValue(error);

    const result = await dropTableSchemaMigrations();

    expect(consoleErrorSpy).toHaveBeenCalledWith("Table does not exist");
    expect(mockGetHttpResponse).toHaveBeenCalledWith(500, "Table does not exist");
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("Table does not exist");
  });

  it("should handle error with debug.message", async () => {
    const error = {
      debug: {
        message: "Database connection failed",
      },
    };
    mockGetTables.mockRejectedValue(error);

    const result = await dropTableSchemaMigrations();

    expect(consoleErrorSpy).toHaveBeenCalledWith("Database connection failed");
    expect(mockGetHttpResponse).toHaveBeenCalledWith(500, "Database connection failed");
    expect(result.statusCode).toBe(500);
  });

  it("should handle error with error.message", async () => {
    const error = new Error("Generic error message");
    mockGetTables.mockRejectedValue(error);

    const result = await dropTableSchemaMigrations();

    expect(consoleErrorSpy).toHaveBeenCalledWith("Generic error message");
    expect(mockGetHttpResponse).toHaveBeenCalledWith(500, "Generic error message");
    expect(result.statusCode).toBe(500);
  });

  it("should handle error without message", async () => {
    const error = {};
    mockGetTables.mockRejectedValue(error);

    const result = await dropTableSchemaMigrations();

    expect(consoleErrorSpy).toHaveBeenCalledWith("Unknown error occurred");
    expect(mockGetHttpResponse).toHaveBeenCalledWith(500, "Unknown error occurred");
    expect(result.statusCode).toBe(500);
  });

  it("should handle error during executeDDL", async () => {
    const error = {
      debug: {
        sqlMessage: "Cannot drop table: foreign key constraint",
      },
    };
    mockExecuteDDL.mockRejectedValueOnce(error);

    const result = await dropTableSchemaMigrations();

    expect(mockExecuteDDL).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith("Cannot drop table: foreign key constraint");
    expect(mockGetHttpResponse).toHaveBeenCalledWith(
      500,
      "Cannot drop table: foreign key constraint",
    );
    expect(result.statusCode).toBe(500);
  });

  it("should handle error during generateStatements", async () => {
    const error = new Error("Failed to generate statements");
    mockGenerateStatements.mockImplementation(() => {
      throw error;
    });

    const result = await dropTableSchemaMigrations();

    expect(consoleErrorSpy).toHaveBeenCalledWith("Failed to generate statements");
    expect(mockGetHttpResponse).toHaveBeenCalledWith(500, "Failed to generate statements");
    expect(result.statusCode).toBe(500);
  });

  it("should prioritize debug.sqlMessage over debug.message", async () => {
    const error = {
      debug: {
        sqlMessage: "SQL error message",
        message: "Generic message",
      },
    };
    mockGetTables.mockRejectedValue(error);

    const result = await dropTableSchemaMigrations();

    expect(consoleErrorSpy).toHaveBeenCalledWith("SQL error message");
    expect(mockGetHttpResponse).toHaveBeenCalledWith(500, "SQL error message");
    expect(result.statusCode).toBe(500);
  });

  it("should handle multiple statements execution", async () => {
    mockGetTables.mockResolvedValue(["table1", "table2", "table3"]);
    mockGenerateStatements.mockReturnValue([
      "DROP TABLE IF EXISTS table1",
      "DROP TABLE IF EXISTS table2",
      "DROP TABLE IF EXISTS table3",
    ]);

    const result = await dropTableSchemaMigrations();

    expect(mockExecuteDDL).toHaveBeenCalledTimes(3);
    expect(consoleDebugSpy).toHaveBeenCalledTimes(3);
    expect(result.statusCode).toBe(200);
  });
});

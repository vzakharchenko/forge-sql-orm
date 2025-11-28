import { describe, it, expect, beforeEach, vi } from "vitest";
import { applySchemaMigrations } from "../../../src/webtriggers/applyMigrationsWebTrigger";
import { MigrationRunner } from "@forge/sql/out/migration";

// Mock dependencies - defined before vi.mock
const mockProvision = vi.fn();
const mockEnqueue = vi.fn().mockReturnThis();
const mockRun = vi.fn();
const mockList = vi.fn();

const consoleDebugSpy = vi.spyOn(console, "debug").mockImplementation(() => {});
const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

vi.mock("@forge/sql", () => ({
  sql: {
    _provision: (...args: any[]) => mockProvision(...args),
  },
  migrationRunner: {
    enqueue: (...args: any[]) => mockEnqueue(...args),
    run: (...args: any[]) => mockRun(...args),
    list: (...args: any[]) => mockList(...args),
  },
}));

describe("applySchemaMigrations", () => {
  let mockMigrationRunner: MigrationRunner;

  beforeEach(() => {
    vi.clearAllMocks();
    mockProvision.mockResolvedValue(undefined);
    mockRun.mockResolvedValue(["migration1", "migration2"]);
    mockList.mockResolvedValue([
      {
        id: 1,
        name: "test_migration",
        migratedAt: new Date("2023-01-01T00:00:00Z"),
      },
      {
        id: 2,
        name: "another_migration",
        migratedAt: new Date("2023-01-02T00:00:00Z"),
      },
    ]);
    // Create a mock migration runner that uses the mocked functions
    mockMigrationRunner = {
      enqueue: mockEnqueue,
      run: mockRun,
      list: mockList,
    } as any;
  });

  it("should successfully apply migrations with history", async () => {
    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(mockMigration).toHaveBeenCalled();
    expect(mockProvision).toHaveBeenCalled();
    expect(mockRun).toHaveBeenCalled();
    expect(mockList).toHaveBeenCalled();
    expect(consoleDebugSpy).toHaveBeenCalledWith("Provisioning the database");
    expect(consoleDebugSpy).toHaveBeenCalledWith("Running schema migrations");
    expect(consoleDebugSpy).toHaveBeenCalledWith("Migrations applied:", [
      "migration1",
      "migration2",
    ]);
    expect(consoleDebugSpy).toHaveBeenCalledWith(
      "Migrations history:\nid, name, migrated_at\n",
      expect.stringContaining("1, test_migration"),
    );
    expect(result.statusCode).toBe(200);
    expect(result.statusText).toBe("OK");
    expect(result.body).toBe("Migrations successfully executed");
    expect(result.headers).toEqual({ "Content-Type": ["application/json"] });
  });

  it("should handle empty migration history", async () => {
    mockList.mockResolvedValue([]);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleDebugSpy).toHaveBeenCalledWith(
      "Migrations history:\nid, name, migrated_at\n",
      "No migrations found",
    );
    expect(result.statusCode).toBe(200);
    expect(result.body).toBe("Migrations successfully executed");
  });

  it("should handle null migration history", async () => {
    mockList.mockResolvedValue(null);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleDebugSpy).toHaveBeenCalledWith(
      "Migrations history:\nid, name, migrated_at\n",
      "No migrations found",
    );
    expect(result.statusCode).toBe(200);
  });

  it("should handle non-array migration history", async () => {
    mockList.mockResolvedValue({} as any);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleDebugSpy).toHaveBeenCalledWith(
      "Migrations history:\nid, name, migrated_at\n",
      "No migrations found",
    );
    expect(result.statusCode).toBe(200);
  });

  it("should sort migrations by migratedAt", async () => {
    mockList.mockResolvedValue([
      {
        id: 2,
        name: "later_migration",
        migratedAt: new Date("2023-01-02T00:00:00Z"),
      },
      {
        id: 1,
        name: "earlier_migration",
        migratedAt: new Date("2023-01-01T00:00:00Z"),
      },
    ]);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleDebugSpy).toHaveBeenCalledWith(
      "Migrations history:\nid, name, migrated_at\n",
      expect.stringContaining("1, earlier_migration"),
    );
    expect(consoleDebugSpy).toHaveBeenCalledWith(
      "Migrations history:\nid, name, migrated_at\n",
      expect.stringContaining("2, later_migration"),
    );
    expect(result.statusCode).toBe(200);
  });

  it("should handle single migration in history", async () => {
    mockList.mockResolvedValue([
      {
        id: 1,
        name: "single_migration",
        migratedAt: new Date("2023-01-01T00:00:00Z"),
      },
    ]);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleDebugSpy).toHaveBeenCalledWith(
      "Migrations history:\nid, name, migrated_at\n",
      expect.stringContaining("1, single_migration"),
    );
    expect(result.statusCode).toBe(200);
  });

  it("should handle invalid migration parameter (null)", async () => {
    const result = await applySchemaMigrations(null as any);

    expect(mockProvision).not.toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error during migration:",
      "migration is not a function",
    );
    expect(result.statusCode).toBe(500);
    expect(result.statusText).toBe("Internal Server Error");
    expect(result.body).toBe("migration is not a function");
  });

  it("should handle invalid migration parameter (undefined)", async () => {
    const result = await applySchemaMigrations(undefined as any);

    expect(mockProvision).not.toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error during migration:",
      "migration is not a function",
    );
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("migration is not a function");
  });

  it("should handle invalid migration parameter (string)", async () => {
    const result = await applySchemaMigrations("not a function" as any);

    expect(mockProvision).not.toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error during migration:",
      "migration is not a function",
    );
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("migration is not a function");
  });

  it("should handle error during provisioning", async () => {
    const error = new Error("Provisioning failed");
    mockProvision.mockRejectedValue(error);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleErrorSpy).toHaveBeenCalledWith("Error during migration:", "Provisioning failed");
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("Provisioning failed");
  });

  it("should handle error during migration execution", async () => {
    const error = new Error("Migration execution failed");
    const mockMigration = vi.fn().mockRejectedValue(error);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error during migration:",
      "Migration execution failed",
    );
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("Migration execution failed");
  });

  it("should handle error during run", async () => {
    const error = new Error("Run failed");
    mockRun.mockRejectedValue(error);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleErrorSpy).toHaveBeenCalledWith("Error during migration:", "Run failed");
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("Run failed");
  });

  it("should handle error with cause.context.debug.sqlMessage", async () => {
    const error = new Error("Base error");
    (error as any).cause = {
      context: {
        debug: {
          sqlMessage: "SQL error message",
        },
      },
    };
    mockProvision.mockRejectedValue(error);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleErrorSpy).toHaveBeenCalledWith("Error during migration:", "SQL error message");
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("SQL error message");
  });

  it("should handle error with cause.context.debug.message", async () => {
    const error = new Error("Base error");
    (error as any).cause = {
      context: {
        debug: {
          message: "Context debug message",
        },
      },
    };
    mockProvision.mockRejectedValue(error);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error during migration:",
      "Context debug message",
    );
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("Context debug message");
  });

  it("should handle error with debug.context.sqlMessage", async () => {
    const error = new Error("Base error");
    (error as any).debug = {
      context: {
        sqlMessage: "Debug context SQL message",
      },
    };
    mockProvision.mockRejectedValue(error);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error during migration:",
      "Debug context SQL message",
    );
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("Debug context SQL message");
  });

  it("should handle error with debug.context.message", async () => {
    const error = new Error("Base error");
    (error as any).debug = {
      context: {
        message: "Debug context message",
      },
    };
    mockProvision.mockRejectedValue(error);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error during migration:",
      "Debug context message",
    );
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("Debug context message");
  });

  it("should handle error with error.message", async () => {
    const error = new Error("Standard error message");
    mockProvision.mockRejectedValue(error);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error during migration:",
      "Standard error message",
    );
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("Standard error message");
  });

  it("should handle error without message", async () => {
    const error = {};
    mockProvision.mockRejectedValue(error);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error during migration:",
      "Unknown error occurred",
    );
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("Unknown error during migration");
  });

  it("should prioritize cause.context.debug.sqlMessage", async () => {
    const error = new Error("Standard message");
    (error as any).cause = {
      context: {
        debug: {
          sqlMessage: "SQL message",
          message: "Generic message",
        },
      },
    };
    (error as any).debug = {
      context: {
        sqlMessage: "Other SQL message",
      },
    };
    mockProvision.mockRejectedValue(error);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleErrorSpy).toHaveBeenCalledWith("Error during migration:", "SQL message");
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("SQL message");
  });

  it("should handle error during list", async () => {
    const error = new Error("List failed");
    mockList.mockRejectedValue(error);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleErrorSpy).toHaveBeenCalledWith("Error during migration:", "List failed");
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("List failed");
  });

  it("should handle non-Error object", async () => {
    const error = { someProperty: "value" };
    mockProvision.mockRejectedValue(error);

    const mockMigration = vi.fn().mockResolvedValue(mockMigrationRunner);

    const result = await applySchemaMigrations(mockMigration);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error during migration:",
      "Unknown error occurred",
    );
    expect(result.statusCode).toBe(500);
    expect(result.body).toBe("Unknown error during migration");
  });
});

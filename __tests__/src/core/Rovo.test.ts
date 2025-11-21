import { describe, it, expect, vi, beforeEach } from "vitest";
import { sql, Result } from "@forge/sql";
import { Rovo } from "../../../src/core/Rovo";
import { ForgeSqlOperation, ForgeSqlOrmOptions } from "../../../src/core/ForgeSQLQueryBuilder";
import { mysqlTable, varchar, int } from "drizzle-orm/mysql-core";
import { getTableName } from "drizzle-orm/table";

// Mock test table
const testTable = mysqlTable("test_users", {
  id: int("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  userId: varchar("user_id", { length: 255 }),
  createdBy: varchar("created_by", { length: 255 }),
  targetUserId: varchar("target_user_id", { length: 255 }),
});

// Mock ForgeSqlOperation
const createMockForgeOperations = (): ForgeSqlOperation => {
  const explainRawMock = vi.fn().mockResolvedValue([
    {
      id: "1",
      operatorInfo: "TableReader",
      accessObject: "table:test_users",
    },
  ]);

  return {
    analyze: () => ({
      explainRaw: explainRawMock,
    }),
  } as any;
};

describe("Rovo", () => {
  let rovo: Rovo;
  let mockForgeOperations: ForgeSqlOperation;
  let mockOptions: ForgeSqlOrmOptions;

  beforeEach(() => {
    vi.clearAllMocks();
    mockForgeOperations = createMockForgeOperations();
    mockOptions = {
      logRawSqlQuery: false,
    };
    rovo = new Rovo(mockForgeOperations, mockOptions);
  });

  describe("rovoRawSettingBuilder", () => {
    it("should create a settings builder with raw table name", () => {
      const builder = rovo.rovoRawSettingBuilder("test_users", "account-123");
      expect(builder).toBeDefined();
    });

    it("should allow adding context parameters", async () => {
      const settings = await rovo
        .rovoRawSettingBuilder("test_users", "account-123")
        .addContextParameter(":currentUserId", "account-123")
        .addContextParameter(":projectKey", "PROJ-123")
        .build();

      const params = settings.getParameters();
      expect(params[":currentUserId"]).toBe("account-123");
      expect(params[":projectKey"]).toBe("PROJ-123");
    });

    it("should return correct table name", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      expect(settings.getTableName()).toBe("test_users");
    });

    it("should return correct account ID", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      expect(settings.getActiveUser()).toBe("account-123");
    });
  });

  describe("rovoSettingBuilder", () => {
    it("should create a settings builder with Drizzle table object", () => {
      const builder = rovo.rovoSettingBuilder(testTable, "account-123");
      expect(builder).toBeDefined();
    });

    it("should extract table name from Drizzle table", async () => {
      const settings = await rovo.rovoSettingBuilder(testTable, "account-123").build();

      expect(settings.getTableName()).toBe("test_users");
    });
  });

  describe("RLS Configuration", () => {
    it("should enable RLS when useRLS is called", async () => {
      const settings = await rovo
        .rovoRawSettingBuilder("test_users", "account-123")
        .useRLS()
        .addRlsColumnName("id")
        .addRlsWherePart((alias) => `${alias}.id = 'account-123'`)
        .finish()
        .build();

      expect(settings.isUseRLS()).toBe(true);
    });

    it("should disable RLS when useRLS is not called", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      expect(settings.isUseRLS()).toBe(false);
    });

    it("should add RLS columns using column name", async () => {
      const settings = await rovo
        .rovoRawSettingBuilder("test_users", "account-123")
        .useRLS()
        .addRlsColumnName("id")
        .addRlsColumnName("userId")
        .addRlsWherePart((alias) => `${alias}.id = 'account-123'`)
        .finish()
        .build();

      const fields = settings.userScopeFields();
      expect(fields).toContain("id");
      expect(fields).toContain("userId");
    });

    it("should add RLS columns using Drizzle column object", async () => {
      const settings = await rovo
        .rovoSettingBuilder(testTable, "account-123")
        .useRLS()
        .addRlsColumn(testTable.id)
        .addRlsColumn(testTable.userId)
        .addRlsWherePart((alias) => `${alias}.id = 'account-123'`)
        .finish()
        .build();

      const fields = settings.userScopeFields();
      expect(fields).toContain("id");
      expect(fields).toContain("user_id");
    });

    it("should generate correct WHERE clause for RLS", async () => {
      const settings = await rovo
        .rovoRawSettingBuilder("test_users", "account-123")
        .useRLS()
        .addRlsColumnName("id")
        .addRlsWherePart((alias) => `${alias}.id = 'account-123'`)
        .finish()
        .build();

      const whereClause = settings.userScopeWhere("t");
      expect(whereClause).toBe("t.id = 'account-123'");
    });

    it("should support conditional RLS", async () => {
      const shouldApplyRLS = vi.fn().mockResolvedValue(false);

      const settings = await rovo
        .rovoRawSettingBuilder("test_users", "account-123")
        .useRLS()
        .addRlsCondition(shouldApplyRLS)
        .addRlsColumnName("id")
        .addRlsWherePart((alias) => `${alias}.id = 'account-123'`)
        .finish()
        .build();

      expect(settings.isUseRLS()).toBe(false);
      expect(shouldApplyRLS).toHaveBeenCalled();
    });

    it("should apply RLS when condition returns true", async () => {
      const shouldApplyRLS = vi.fn().mockResolvedValue(true);

      const settings = await rovo
        .rovoRawSettingBuilder("test_users", "account-123")
        .useRLS()
        .addRlsCondition(shouldApplyRLS)
        .addRlsColumnName("id")
        .addRlsWherePart((alias) => `${alias}.id = 'account-123'`)
        .finish()
        .build();

      expect(settings.isUseRLS()).toBe(true);
    });
  });

  describe("dynamicIsolatedQuery", () => {
    beforeEach(() => {
      vi.mock("@forge/sql", () => ({
        sql: {
          executeRaw: vi.fn(),
        },
      }));
    });

    it("should execute valid SELECT query", async () => {
      const mockResult: Result<unknown> = {
        rows: [{ id: 1, name: "Test" }],
        metadata: {
          fields: [
            { name: "id", orgTable: "test_users" },
            { name: "name", orgTable: "test_users" },
          ],
        },
      } as any;

      vi.mocked(sql.executeRaw).mockResolvedValue(mockResult);

      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      const result = await rovo.dynamicIsolatedQuery(
        "SELECT id, name FROM test_users WHERE id = 1",
        settings,
      );

      expect(result.rows).toEqual([{ id: 1, name: "Test" }]);
      expect(sql.executeRaw).toHaveBeenCalled();
    });

    it("should throw error for non-SELECT query", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      await expect(
        rovo.dynamicIsolatedQuery("INSERT INTO test_users VALUES (1, 'Test')", settings),
      ).rejects.toThrow("Only SELECT queries are allowed");
    });

    it("should throw error for empty query", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      await expect(rovo.dynamicIsolatedQuery("", settings)).rejects.toThrow(
        "SQL query is required",
      );
    });

    it("should throw error for missing table name", async () => {
      const settings = await rovo.rovoRawSettingBuilder("", "account-123").build();

      await expect(rovo.dynamicIsolatedQuery("SELECT * FROM test_users", settings)).rejects.toThrow(
        "Table Name is required",
      );
    });

    it("should throw error for query targeting wrong table", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      await expect(
        rovo.dynamicIsolatedQuery("SELECT * FROM other_table", settings),
      ).rejects.toThrow("Queries must target the 'TEST_USERS' table only");
    });

    it("should replace context parameters in query", async () => {
      const mockResult: Result<unknown> = {
        rows: [{ id: 1 }],
        metadata: { fields: [{ name: "id", orgTable: "test_users" }] },
      } as any;

      vi.mocked(sql.executeRaw).mockResolvedValue(mockResult);

      const settings = await rovo
        .rovoRawSettingBuilder("test_users", "account-123")
        .addContextParameter(":userId", "account-123")
        .build();

      await rovo.dynamicIsolatedQuery("SELECT id FROM test_users WHERE userId = :userId", settings);

      const callArgs = vi.mocked(sql.executeRaw).mock.calls[0][0];
      expect(callArgs).toContain("account-123");
      expect(callArgs).not.toContain(":userId");
    });

    it("should apply RLS filtering when enabled", async () => {
      const mockResult: Result<unknown> = {
        rows: [{ id: 1, name: "Test" }],
        metadata: {
          fields: [
            { name: "id", orgTable: "test_users" },
            { name: "name", orgTable: "test_users" },
          ],
        },
      } as any;

      vi.mocked(sql.executeRaw).mockResolvedValue(mockResult);

      const settings = await rovo
        .rovoRawSettingBuilder("test_users", "account-123")
        .useRLS()
        .addRlsColumnName("id")
        .addRlsWherePart((alias) => `${alias}.id = 'account-123'`)
        .finish()
        .build();

      await rovo.dynamicIsolatedQuery("SELECT id, name FROM test_users", settings);

      const callArgs = vi.mocked(sql.executeRaw).mock.calls[0][0];
      expect(callArgs).toContain("WHERE");
      expect(callArgs).toContain("t.id = 'account-123'");
    });

    it("should detect and block JOIN operations", async () => {
      const mockExplainResult = [
        {
          id: "1",
          operatorInfo: "HashJoin",
          accessObject: "table:test_users",
        },
      ];

      // Create new mock instance for this test
      const testForgeOperations = createMockForgeOperations();
      const explainRawMock = vi.fn().mockResolvedValue(mockExplainResult as any);
      testForgeOperations.analyze = () =>
        ({
          explainRaw: explainRawMock,
        }) as any;
      const testRovo = new Rovo(testForgeOperations, mockOptions);

      const settings = await testRovo.rovoRawSettingBuilder("test_users", "account-123").build();

      // Use a valid SQL query that will pass parsing but be detected as JOIN in EXPLAIN
      await expect(
        testRovo.dynamicIsolatedQuery("SELECT * FROM test_users", settings),
      ).rejects.toThrow("Security violation: JOIN operations are not allowed");

      expect(explainRawMock).toHaveBeenCalled();
    });

    it("should detect and block window functions", async () => {
      const mockExplainResult = [
        {
          id: "Window",
          operatorInfo: "COUNT(*) OVER()",
          accessObject: "table:test_users",
        },
      ];

      // Create new mock instance for this test
      const testForgeOperations = createMockForgeOperations();
      const explainRawMock = vi.fn().mockResolvedValue(mockExplainResult as any);
      testForgeOperations.analyze = () =>
        ({
          explainRaw: explainRawMock,
        }) as any;
      const testRovo = new Rovo(testForgeOperations, mockOptions);

      const settings = await testRovo.rovoRawSettingBuilder("test_users", "account-123").build();

      // Use a valid SQL query that will pass parsing but be detected as window function in EXPLAIN
      await expect(
        testRovo.dynamicIsolatedQuery("SELECT id FROM test_users", settings),
      ).rejects.toThrow("Window functions");

      expect(explainRawMock).toHaveBeenCalled();
    });

    it("should validate RLS fields are present in results", async () => {
      const mockResult: Result<unknown> = {
        rows: [{ name: "Test" }],
        metadata: {
          fields: [{ name: "name", orgTable: "test_users" }],
        },
      } as any;

      vi.mocked(sql.executeRaw).mockResolvedValue(mockResult);

      const settings = await rovo
        .rovoRawSettingBuilder("test_users", "account-123")
        .useRLS()
        .addRlsColumnName("id")
        .addRlsWherePart((alias) => `${alias}.id = 'account-123'`)
        .finish()
        .build();

      await expect(
        rovo.dynamicIsolatedQuery("SELECT name FROM test_users", settings),
      ).rejects.toThrow("Security validation failed: The query must include id");
    });

    it("should validate RLS fields come from correct table", async () => {
      const mockResult: Result<unknown> = {
        rows: [{ id: 1 }],
        metadata: {
          fields: [{ name: "id", orgTable: "other_table" }],
        },
      } as any;

      vi.mocked(sql.executeRaw).mockResolvedValue(mockResult);

      const settings = await rovo
        .rovoRawSettingBuilder("test_users", "account-123")
        .useRLS()
        .addRlsColumnName("id")
        .addRlsWherePart((alias) => `${alias}.id = 'account-123'`)
        .finish()
        .build();

      await expect(
        rovo.dynamicIsolatedQuery("SELECT id FROM test_users", settings),
      ).rejects.toThrow("must come directly from the TEST_USERS table");
    });

    it("should normalize SQL string (remove semicolons, whitespace)", async () => {
      const mockResult: Result<unknown> = {
        rows: [{ id: 1 }],
        metadata: { fields: [{ name: "id", orgTable: "test_users" }] },
      } as any;

      vi.mocked(sql.executeRaw).mockResolvedValue(mockResult);

      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      await rovo.dynamicIsolatedQuery("SELECT id FROM test_users;\n\n\t  ", settings);

      // Query should be normalized (no semicolon, normalized whitespace)
      const callArgs = vi.mocked(sql.executeRaw).mock.calls[0][0];
      expect(callArgs).not.toContain(";");
    });

    it("should handle queries with multiple statements", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      await expect(
        rovo.dynamicIsolatedQuery("SELECT * FROM test_users; SELECT * FROM other_table;", settings),
      ).rejects.toThrow("Only a single SELECT query is allowed");
    });

    it("should detect scalar subqueries in SELECT columns", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      await expect(
        rovo.dynamicIsolatedQuery(
          "SELECT id, (SELECT COUNT(*) FROM other_table) as count FROM test_users",
          settings,
        ),
      ).rejects.toThrow("Security violation: Scalar subqueries in SELECT columns");
    });

    it("should detect scalar subqueries in SELECT columns without expr", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      // This test covers the case when col.expr is not present
      // We need to mock both astify and sqlify to handle the mocked AST
      const Parser = (await import("node-sql-parser")).Parser;
      const originalAstify = Parser.prototype.astify;
      const originalSqlify = Parser.prototype.sqlify;

      const mockAst = {
        type: "select",
        from: [{ type: "table", table: { name: "test_users" } }],
        columns: [
          {
            type: "column_ref",
            table: null,
            column: "id",
          },
          {
            type: "subquery",
            // This simulates a subquery without expr wrapper
          },
        ],
      };

      Parser.prototype.astify = vi.fn().mockReturnValue(mockAst);
      Parser.prototype.sqlify = vi.fn().mockImplementation(() => {
        return "SELECT `id` FROM `test_users`";
      });

      await expect(
        rovo.dynamicIsolatedQuery("SELECT id FROM test_users", settings),
      ).rejects.toThrow("Security violation: Scalar subqueries in SELECT columns");

      // Restore original
      Parser.prototype.astify = originalAstify;
      Parser.prototype.sqlify = originalSqlify;
    });

    it("should detect references to other tables in AST", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      // Mock parser to return AST with reference to other table
      const Parser = (await import("node-sql-parser")).Parser;
      const originalAstify = Parser.prototype.astify;
      const originalSqlify = Parser.prototype.sqlify;

      const mockAst = {
        type: "select",
        from: [
          { type: "table", table: { name: "test_users" } },
          { type: "table", table: { name: "other_table" } },
        ],
        columns: [{ type: "column_ref", table: null, column: "id" }],
      };

      Parser.prototype.astify = vi.fn().mockReturnValue(mockAst);
      Parser.prototype.sqlify = vi.fn().mockImplementation((ast) => {
        // Return a valid SQL string for the mocked AST
        return "SELECT `id` FROM `test_users`, `other_table`";
      });

      await expect(
        rovo.dynamicIsolatedQuery("SELECT id FROM test_users", settings),
      ).rejects.toThrow("Security violation: Query references table(s) other than");

      // Restore original
      Parser.prototype.astify = originalAstify;
      Parser.prototype.sqlify = originalSqlify;
    });

    it("should remove ari:cloud:identity::user/ prefix from account IDs", async () => {
      const mockResult: Result<unknown> = {
        rows: [{ id: 1 }],
        metadata: { fields: [{ name: "id", orgTable: "test_users" }] },
      } as any;

      vi.mocked(sql.executeRaw).mockResolvedValue(mockResult);

      const settings = await rovo
        .rovoRawSettingBuilder("test_users", "ari:cloud:identity::user/account-123")
        .build();

      await rovo.dynamicIsolatedQuery(
        "SELECT id FROM test_users WHERE userId = 'ari:cloud:identity::user/account-123'",
        settings,
      );

      const callArgs = vi.mocked(sql.executeRaw).mock.calls[0][0];
      expect(callArgs).toContain("account-123");
      expect(callArgs).not.toContain("ari:cloud:identity::user/");
    });
  });

  describe("SQL Parsing and Validation", () => {
    it("should parse valid SELECT query", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      // This should not throw
      const mockResult: Result<unknown> = {
        rows: [],
        metadata: { fields: [] },
      } as any;

      vi.mocked(sql.executeRaw).mockResolvedValue(mockResult);

      await expect(
        rovo.dynamicIsolatedQuery("SELECT * FROM test_users", settings),
      ).resolves.toBeDefined();
    });

    it("should throw error for invalid SQL syntax", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      await expect(
        rovo.dynamicIsolatedQuery("SELECT * FROM test_users WHERE", settings),
      ).rejects.toThrow("SQL parsing error");
    });

    it("should detect references to other tables in execution plan", async () => {
      const mockExplainResult = [
        {
          id: "1",
          operatorInfo: "TableReader",
          accessObject: "table:other_table",
        },
      ];

      const testForgeOperations = createMockForgeOperations();
      const explainRawMock = vi.fn().mockResolvedValue(mockExplainResult as any);
      testForgeOperations.analyze = () =>
        ({
          explainRaw: explainRawMock,
        }) as any;
      const testRovo = new Rovo(testForgeOperations, mockOptions);

      const settings = await testRovo.rovoRawSettingBuilder("test_users", "account-123").build();

      await expect(
        testRovo.dynamicIsolatedQuery("SELECT * FROM test_users", settings),
      ).rejects.toThrow(
        "Security violation: Query execution plan detected references to tables other than",
      );

      expect(explainRawMock).toHaveBeenCalled();
    });

    it("should remove semicolon at end when RLS is enabled", async () => {
      const mockResult: Result<unknown> = {
        rows: [{ id: 1, name: "Test" }],
        metadata: {
          fields: [
            { name: "id", orgTable: "test_users" },
            { name: "name", orgTable: "test_users" },
          ],
        },
      } as any;

      vi.mocked(sql.executeRaw).mockResolvedValue(mockResult);

      const settings = await rovo
        .rovoRawSettingBuilder("test_users", "account-123")
        .useRLS()
        .addRlsColumnName("id")
        .addRlsWherePart((alias) => `${alias}.id = 'account-123'`)
        .finish()
        .build();

      await rovo.dynamicIsolatedQuery("SELECT id, name FROM test_users;", settings);

      const callArgs = vi.mocked(sql.executeRaw).mock.calls[0][0];
      // Should not contain semicolon at the end before wrapping
      expect(callArgs).toContain("WHERE");
    });

    it("should detect fields from other tables in post-execution validation", async () => {
      const mockResult: Result<unknown> = {
        rows: [{ id: 1, name: "Test" }],
        metadata: {
          fields: [
            { name: "id", orgTable: "test_users" },
            { name: "name", orgTable: "other_table" },
          ],
        },
      } as any;

      vi.mocked(sql.executeRaw).mockResolvedValue(mockResult);

      const settings = await rovo
        .rovoRawSettingBuilder("test_users", "account-123")
        .useRLS()
        .addRlsColumnName("id")
        .addRlsWherePart((alias) => `${alias}.id = 'account-123'`)
        .finish()
        .build();

      await expect(
        rovo.dynamicIsolatedQuery("SELECT id, name FROM test_users", settings),
      ).rejects.toThrow(
        "Security validation failed: All fields must come from the TEST_USERS table",
      );
    });

    it("should handle array AST with multiple statements", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      // Mock parser to return array with multiple statements
      const Parser = (await import("node-sql-parser")).Parser;
      const originalAstify = Parser.prototype.astify;
      Parser.prototype.astify = vi.fn().mockReturnValue([{ type: "select" }, { type: "select" }]);

      await expect(rovo.dynamicIsolatedQuery("SELECT * FROM test_users", settings)).rejects.toThrow(
        "Only a single SELECT query is allowed",
      );

      // Restore original
      Parser.prototype.astify = originalAstify;
    });

    it("should handle array AST with non-SELECT statement", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      // Mock parser to return array with non-SELECT
      const Parser = (await import("node-sql-parser")).Parser;
      const originalAstify = Parser.prototype.astify;
      Parser.prototype.astify = vi.fn().mockReturnValue([{ type: "insert" }]);

      await expect(rovo.dynamicIsolatedQuery("SELECT * FROM test_users", settings)).rejects.toThrow(
        "Only a single SELECT query is allowed",
      );

      // Restore original
      Parser.prototype.astify = originalAstify;
    });

    it("should handle non-SELECT AST type", async () => {
      const settings = await rovo.rovoRawSettingBuilder("test_users", "account-123").build();

      // Mock parser to return non-SELECT AST
      const Parser = (await import("node-sql-parser")).Parser;
      const originalAstify = Parser.prototype.astify;
      Parser.prototype.astify = vi.fn().mockReturnValue({ type: "insert" });

      await expect(rovo.dynamicIsolatedQuery("SELECT * FROM test_users", settings)).rejects.toThrow(
        "Only SELECT queries are allowed",
      );

      // Restore original
      Parser.prototype.astify = originalAstify;
    });
  });
});

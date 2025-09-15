import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  cacheApplicationContext,
  saveTableIfInsideCacheContext,
  isTableContainsTableInCacheContext,
  CacheApplicationContext,
} from "../../../src/utils/cacheContextUtils";
import { ForgeSqlOrmOptions } from "../../../src/core/ForgeSQLQueryBuilder";

// Mock Drizzle table
const mockTable = {
  _: {
    name: "users",
    schema: undefined,
    columns: {},
    indexes: [],
    foreignKeys: [],
    primaryKeys: [],
    uniqueConstraints: [],
    checkConstraints: [],
    _: {
      name: "users",
      schema: undefined,
      columns: {},
      indexes: [],
      foreignKeys: [],
      primaryKeys: [],
      uniqueConstraints: [],
      checkConstraints: [],
    },
  },
} as any;

// Mock getTableName function
vi.mock("drizzle-orm/table", () => ({
  getTableName: vi.fn((table: any) => table._.name),
}));

describe("cacheContextUtils", () => {
  const defaultOptions: ForgeSqlOrmOptions = {
    cacheEntityName: "cache",
    cacheTTL: 120,
    cacheWrapTable: true,
    logRawSqlQuery: false,
    disableOptimisticLocking: false,
  };

  describe("saveTableIfInsideCacheContext", () => {
    it("should add table to context when inside cache context", async () => {
      const context: CacheApplicationContext = { tables: new Set() };

      await cacheApplicationContext.run(context, async () => {
        await saveTableIfInsideCacheContext(mockTable);

        expect(context.tables.has("users")).toBe(true);
      });
    });

    it("should not add table to context when outside cache context", async () => {
      const context: CacheApplicationContext = { tables: new Set() };

      await saveTableIfInsideCacheContext(mockTable);

      expect(context.tables.has("users")).toBe(false);
    });

    it("should add multiple tables to the same context", async () => {
      const context: CacheApplicationContext = { tables: new Set() };
      const mockTable2 = { ...mockTable, _: { ...mockTable._, name: "orders" } } as any;

      await cacheApplicationContext.run(context, async () => {
        await saveTableIfInsideCacheContext(mockTable);
        await saveTableIfInsideCacheContext(mockTable2);

        expect(context.tables.has("users")).toBe(true);
        expect(context.tables.has("orders")).toBe(true);
        expect(context.tables.size).toBe(2);
      });
    });

    it("should convert table name to lowercase", async () => {
      const context: CacheApplicationContext = { tables: new Set() };
      const mockTableUpperCase = { ...mockTable, _: { ...mockTable._, name: "USERS" } } as any;

      await cacheApplicationContext.run(context, async () => {
        await saveTableIfInsideCacheContext(mockTableUpperCase);

        expect(context.tables.has("users")).toBe(true);
        expect(context.tables.has("USERS")).toBe(false);
      });
    });
  });

  describe("isTableContainsTableInCacheContext", () => {
    it("should return false when no cache context exists", async () => {
      const result = await isTableContainsTableInCacheContext(
        "SELECT * FROM users WHERE id = 1",
        defaultOptions,
      );

      expect(result).toBe(false);
    });

    it("should return false when context exists but no tables are tracked", async () => {
      const context: CacheApplicationContext = { tables: new Set() };

      await cacheApplicationContext.run(context, async () => {
        const result = await isTableContainsTableInCacheContext(
          "SELECT * FROM users WHERE id = 1",
          defaultOptions,
        );

        expect(result).toBe(false);
      });
    });

    it("should return true when SQL contains tracked table with cacheWrapTable enabled", async () => {
      const context: CacheApplicationContext = { tables: new Set(["users"]) };

      await cacheApplicationContext.run(context, async () => {
        const result = await isTableContainsTableInCacheContext(
          "SELECT * FROM `users` WHERE id = 1",
          defaultOptions,
        );

        expect(result).toBe(true);
      });
    });

    it("should return true when SQL contains tracked table with cacheWrapTable disabled", async () => {
      const options = { ...defaultOptions, cacheWrapTable: false };
      const context: CacheApplicationContext = { tables: new Set(["users"]) };

      await cacheApplicationContext.run(context, async () => {
        const result = await isTableContainsTableInCacheContext(
          "SELECT * FROM users WHERE id = 1",
          options,
        );

        expect(result).toBe(true);
      });
    });

    it("should return false when SQL does not contain tracked table", async () => {
      const context: CacheApplicationContext = { tables: new Set(["orders"]) };

      await cacheApplicationContext.run(context, async () => {
        const result = await isTableContainsTableInCacheContext(
          "SELECT * FROM users WHERE id = 1",
          defaultOptions,
        );

        expect(result).toBe(false);
      });
    });

    it("should handle case-insensitive table name matching", async () => {
      const context: CacheApplicationContext = { tables: new Set(["users"]) };

      await cacheApplicationContext.run(context, async () => {
        const result = await isTableContainsTableInCacheContext(
          "SELECT * FROM USERS WHERE id = 1",
          { ...defaultOptions, cacheWrapTable: false },
        );

        expect(result).toBe(true);
      });
    });

    it("should return true when SQL contains any of multiple tracked tables", async () => {
      const context: CacheApplicationContext = { tables: new Set(["users", "orders", "products"]) };

      await cacheApplicationContext.run(context, async () => {
        const result = await isTableContainsTableInCacheContext(
          "SELECT * FROM orders WHERE user_id = 1",
          { ...defaultOptions, cacheWrapTable: false },
        );

        expect(result).toBe(true);
      });
    });

    it("should return false when SQL contains none of the tracked tables", async () => {
      const context: CacheApplicationContext = { tables: new Set(["users", "orders"]) };

      await cacheApplicationContext.run(context, async () => {
        const result = await isTableContainsTableInCacheContext(
          "SELECT * FROM products WHERE id = 1",
          { ...defaultOptions, cacheWrapTable: false },
        );

        expect(result).toBe(false);
      });
    });

    it("should handle complex SQL queries with joins", async () => {
      const context: CacheApplicationContext = { tables: new Set(["users", "orders"]) };

      await cacheApplicationContext.run(context, async () => {
        const result = await isTableContainsTableInCacheContext(
          "SELECT u.*, o.* FROM `users` u INNER JOIN `orders` o ON u.id = o.user_id",
          defaultOptions,
        );

        expect(result).toBe(true);
      });
    });

    it("should handle SQL with table names in different positions", async () => {
      const context: CacheApplicationContext = { tables: new Set(["users"]) };

      await cacheApplicationContext.run(context, async () => {
        const result = await isTableContainsTableInCacheContext(
          'UPDATE `users` SET name = "test" WHERE id = 1',
          defaultOptions,
        );

        expect(result).toBe(true);
      });
    });
  });

  describe("cacheApplicationContext", () => {
    it("should maintain context across async operations", async () => {
      const context: CacheApplicationContext = { tables: new Set() };
      let capturedContext: CacheApplicationContext | undefined;

      await cacheApplicationContext.run(context, async () => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        capturedContext = cacheApplicationContext.getStore();
      });

      expect(capturedContext).toBe(context);
    });

    it("should isolate contexts between different runs", async () => {
      const context1: CacheApplicationContext = { tables: new Set(["users"]) };
      const context2: CacheApplicationContext = { tables: new Set(["orders"]) };

      await cacheApplicationContext.run(context1, async () => {
        const store1 = cacheApplicationContext.getStore();
        expect(store1?.tables.has("users")).toBe(true);
        expect(store1?.tables.has("orders")).toBe(false);
      });

      await cacheApplicationContext.run(context2, async () => {
        const store2 = cacheApplicationContext.getStore();
        expect(store2?.tables.has("users")).toBe(false);
        expect(store2?.tables.has("orders")).toBe(true);
      });
    });

    it("should return undefined when no context is set", () => {
      const store = cacheApplicationContext.getStore();
      expect(store).toBeUndefined();
    });
  });
});

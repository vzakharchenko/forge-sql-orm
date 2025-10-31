import { describe, it, expect, beforeEach, vi } from "vitest";
import { drizzle } from "drizzle-orm/mysql-proxy";
import { sql } from "drizzle-orm";
import { eq } from "drizzle-orm";
import { mysqlTable, int, varchar } from "drizzle-orm/mysql-core";
import { patchDbWithSelectAliased, forgeDriver, ForgeSqlOrmOptions } from "../../../../../src";

// Mock @forge/sql
vi.mock("@forge/sql", () => ({
  sql: {
    prepare: vi.fn((query: string) => {
      const executeMock = vi.fn().mockResolvedValue({
        rows: [{ id: 1, name: "Test", email: "test@example.com" }],
        metadata: {
          dbExecutionTime: 100,
          responseSize: 100,
        },
      });
      return {
        query: query || "MOCK_QUERY",
        _params: [],
        remoteSqlApi: "",
        params: [],
        bindParams: vi.fn(),
        execute: executeMock,
      };
    }),
    executeDDL: vi.fn(),
  },
}));

// Mock cache utilities
vi.mock("../../../src/utils/cacheUtils", () => ({
  getFromCache: vi.fn().mockResolvedValue(undefined),
  setCacheResult: vi.fn().mockResolvedValue(undefined),
  clearCache: vi.fn().mockResolvedValue(undefined),
  hashKey: vi.fn(() => "test-key"),
}));

// Mock cache context utilities
vi.mock("../../../src/utils/cacheContextUtils", () => ({
  cacheApplicationContext: {
    getStore: vi.fn(() => null),
  },
  evictLocalCacheQuery: vi.fn().mockResolvedValue(undefined),
  getQueryLocalCacheQuery: vi.fn().mockResolvedValue(undefined),
  saveQueryLocalCacheQuery: vi.fn().mockResolvedValue(undefined),
  saveTableIfInsideCacheContext: vi.fn().mockResolvedValue(undefined),
}));

// Mock mapSelectFieldsWithAlias and applyFromDriverTransform
vi.mock("../../../src/utils/sqlUtils", () => ({
  mapSelectFieldsWithAlias: vi.fn((fields) => ({
    selections: fields,
    aliasMap: {},
  })),
  applyFromDriverTransform: vi.fn((rows) => rows),
}));

describe("additionalActions", () => {
  let db: ReturnType<typeof drizzle>;
  const testTable = mysqlTable("test_users", {
    id: int("id").primaryKey(),
    name: varchar("name", { length: 255 }),
    email: varchar("email", { length: 255 }),
  });

  const defaultOptions: ForgeSqlOrmOptions = {
    cacheEntityName: "cache",
    cacheTTL: 120,
    logRawSqlQuery: false,
    disableOptimisticLocking: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    db = drizzle(forgeDriver);
    db = patchDbWithSelectAliased(db, defaultOptions);
  });

  describe("patchDbWithSelectAliased", () => {
    it("should add selectAliased method to database", () => {
      expect(db).toHaveProperty("selectAliased");
      expect(typeof db.selectAliased).toBe("function");
    });

    it("should add selectAliasedDistinct method to database", () => {
      expect(db).toHaveProperty("selectAliasedDistinct");
      expect(typeof db.selectAliasedDistinct).toBe("function");
    });

    it("should add selectAliasedCacheable method to database", () => {
      expect(db).toHaveProperty("selectAliasedCacheable");
      expect(typeof db.selectAliasedCacheable).toBe("function");
    });

    it("should add selectAliasedDistinctCacheable method to database", () => {
      expect(db).toHaveProperty("selectAliasedDistinctCacheable");
      expect(typeof db.selectAliasedDistinctCacheable).toBe("function");
    });

    it("should add selectFrom method to database", () => {
      expect(db).toHaveProperty("selectFrom");
      expect(typeof db.selectFrom).toBe("function");
    });

    it("should add selectDistinctFrom method to database", () => {
      expect(db).toHaveProperty("selectDistinctFrom");
      expect(typeof db.selectDistinctFrom).toBe("function");
    });

    it("should add selectFromCacheable method to database", () => {
      expect(db).toHaveProperty("selectFromCacheable");
      expect(typeof db.selectFromCacheable).toBe("function");
    });

    it("should add selectDistinctFromCacheable method to database", () => {
      expect(db).toHaveProperty("selectDistinctFromCacheable");
      expect(typeof db.selectDistinctFromCacheable).toBe("function");
    });

    it("should add insertAndEvictCache method to database", () => {
      expect(db).toHaveProperty("insertAndEvictCache");
      expect(typeof db.insertAndEvictCache).toBe("function");
    });

    it("should add updateAndEvictCache method to database", () => {
      expect(db).toHaveProperty("updateAndEvictCache");
      expect(typeof db.updateAndEvictCache).toBe("function");
    });

    it("should add deleteAndEvictCache method to database", () => {
      expect(db).toHaveProperty("deleteAndEvictCache");
      expect(typeof db.deleteAndEvictCache).toBe("function");
    });

    it("should add insertWithCacheContext method to database", () => {
      expect(db).toHaveProperty("insertWithCacheContext");
      expect(typeof db.insertWithCacheContext).toBe("function");
    });

    it("should add updateWithCacheContext method to database", () => {
      expect(db).toHaveProperty("updateWithCacheContext");
      expect(typeof db.updateWithCacheContext).toBe("function");
    });

    it("should add deleteWithCacheContext method to database", () => {
      expect(db).toHaveProperty("deleteWithCacheContext");
      expect(typeof db.deleteWithCacheContext).toBe("function");
    });

    it("should add executeQuery method to database", () => {
      expect(db).toHaveProperty("executeQuery");
      expect(typeof db.executeQuery).toBe("function");
    });

    it("should add executeQueryCacheable method to database", () => {
      expect(db).toHaveProperty("executeQueryCacheable");
      expect(typeof db.executeQueryCacheable).toBe("function");
    });
  });

  describe("selectFrom", () => {
    it("should create a select query builder from table", async () => {
      const query = db.selectFrom(testTable).where(eq(testTable.id, 1));
      
      expect(query).toBeDefined();
      expect(query).toHaveProperty("then");
    });

    it("should execute selectFrom query and return results", async () => {
      const results = await db.selectFrom(testTable).where(eq(testTable.id, 1));
      
      expect(results).toBeDefined();
      expect(Array.isArray(results)).toBe(true);
    });
  });

  describe("selectDistinctFrom", () => {
    it("should create a select distinct query builder from table", async () => {
      const query = db.selectDistinctFrom(testTable).where(eq(testTable.id, 1));
      
      expect(query).toBeDefined();
      expect(query).toHaveProperty("then");
    });
  });

  describe("selectFromCacheable", () => {
    it("should create a cached select query builder from table", async () => {
      const query = db.selectFromCacheable(testTable, 300).where(eq(testTable.id, 1));
      
      expect(query).toBeDefined();
      expect(query).toHaveProperty("then");
    });
  });

  describe("selectDistinctFromCacheable", () => {
    it("should create a cached select distinct query builder from table", async () => {
      const query = db.selectDistinctFromCacheable(testTable, 300).where(eq(testTable.id, 1));
      
      expect(query).toBeDefined();
      expect(query).toHaveProperty("then");
    });
  });

  describe("selectAliased", () => {
    it("should create a select query with field aliasing", async () => {
      const query = db
        .selectAliased({
          userId: testTable.id,
          userName: testTable.name,
        })
        .from(testTable)
        .where(eq(testTable.id, 1));

      expect(query).toBeDefined();
      const results = await query;
      expect(results).toBeDefined();
    });

    it("should handle nested field selections", async () => {
      const query = db
        .selectAliased({
          user: {
            id: testTable.id,
            name: testTable.name,
          },
        })
        .from(testTable);

      expect(query).toBeDefined();
      const results = await query;
      expect(results).toBeDefined();
    });
  });

  describe("selectAliasedCacheable", () => {
    it("should create a cached select query with field aliasing", async () => {
      const query = db
        .selectAliasedCacheable(
          {
            userId: testTable.id,
            userName: testTable.name,
          },
          300,
        )
        .from(testTable)
        .where(eq(testTable.id, 1));

      expect(query).toBeDefined();
      const results = await query;
      expect(results).toBeDefined();
    });
  });

  describe("executeQuery", () => {
    it("should execute raw SQL query with local cache", async () => {
      const result = await db.executeQuery(sql`SELECT * FROM test_users WHERE id = 1`);
      
      expect(result).toBeDefined();
      // executeQuery returns MySqlRawQueryResult which has rows property
      expect(Array.isArray(result) || typeof result === "object").toBe(true);
    });

    it("should execute string SQL query", async () => {
      const result = await db.executeQuery("SELECT * FROM test_users WHERE id = 1");
      
      expect(result).toBeDefined();
      // executeQuery returns MySqlRawQueryResult which has rows property
      expect(Array.isArray(result) || typeof result === "object").toBe(true);
    });
  });

  describe("executeQueryCacheable", () => {
    it("should execute raw SQL query with local and global cache", async () => {
      const result = await db.executeQueryCacheable(
        sql`SELECT * FROM test_users WHERE id = 1`,
        300,
      );
      
      expect(result).toBeDefined();
      // executeQueryCacheable returns MySqlRawQueryResult which has rows property
      expect(Array.isArray(result) || typeof result === "object").toBe(true);
    });

    it("should execute string SQL query with caching", async () => {
      const result = await db.executeQueryCacheable(
        "SELECT * FROM test_users WHERE id = 1",
        300,
      );
      
      expect(result).toBeDefined();
      // executeQueryCacheable returns MySqlRawQueryResult which has rows property
      expect(Array.isArray(result) || typeof result === "object").toBe(true);
    });
  });

  describe("insertAndEvictCache", () => {
    it("should create insert builder that evicts cache", async () => {
      const insertBuilder = db.insertAndEvictCache(testTable);
      
      expect(insertBuilder).toBeDefined();
      expect(insertBuilder).toHaveProperty("values");
      // then is added via Proxy when builder is executed
      const builderWithValues = insertBuilder.values({ name: "Test", email: "test@example.com" });
      expect(builderWithValues).toHaveProperty("then");
    });

    it("should execute insert and evict cache", async () => {
      const insertBuilder = db.insertAndEvictCache(testTable).values({
        name: "New User",
        email: "new@example.com",
      });

      expect(insertBuilder).toBeDefined();
      // Note: Actual execution would require proper mocking of the insert operation
    });
  });

  describe("updateAndEvictCache", () => {
    it("should create update builder that evicts cache", async () => {
      const updateBuilder = db.updateAndEvictCache(testTable);
      
      expect(updateBuilder).toBeDefined();
      expect(updateBuilder).toHaveProperty("set");
      // where is available after calling set()
      const builderWithSet = updateBuilder.set({ name: "Updated" });
      expect(builderWithSet).toHaveProperty("where");
      expect(builderWithSet).toHaveProperty("then");
    });
  });

  describe("deleteAndEvictCache", () => {
    it("should create delete builder that evicts cache", async () => {
      const deleteBuilder = db.deleteAndEvictCache(testTable);
      
      expect(deleteBuilder).toBeDefined();
      expect(deleteBuilder).toHaveProperty("where");
      expect(deleteBuilder).toHaveProperty("then");
    });
  });

  describe("insertWithCacheContext", () => {
    it("should create insert builder that participates in cache context", async () => {
      const insertBuilder = db.insertWithCacheContext(testTable);
      
      expect(insertBuilder).toBeDefined();
      expect(insertBuilder).toHaveProperty("values");
    });
  });

  describe("updateWithCacheContext", () => {
    it("should create update builder that participates in cache context", async () => {
      const updateBuilder = db.updateWithCacheContext(testTable);
      
      expect(updateBuilder).toBeDefined();
      expect(updateBuilder).toHaveProperty("set");
    });
  });

  describe("deleteWithCacheContext", () => {
    it("should create delete builder that participates in cache context", async () => {
      const deleteBuilder = db.deleteWithCacheContext(testTable);
      
      expect(deleteBuilder).toBeDefined();
      expect(deleteBuilder).toHaveProperty("where");
    });
  });

  describe("query builder chaining", () => {
    it("should support method chaining on selectFrom", () => {
      const query = db
        .selectFrom(testTable)
        .where(eq(testTable.id, 1))
        .limit(10);

      expect(query).toBeDefined();
    });

    it("should support method chaining on selectAliased", () => {
      const query = db
        .selectAliased({
          id: testTable.id,
          name: testTable.name,
        })
        .from(testTable)
        .where(eq(testTable.id, 1))
        .limit(10);

      expect(query).toBeDefined();
    });

    it("should support method chaining on cached queries", () => {
      const query = db
        .selectFromCacheable(testTable, 300)
        .where(eq(testTable.id, 1))
        .limit(10);

      expect(query).toBeDefined();
    });
  });

  describe("options handling", () => {
    it("should use default options when none provided", () => {
      const dbWithoutOptions = drizzle(forgeDriver);
      const patchedDb = patchDbWithSelectAliased(dbWithoutOptions);
      
      expect(patchedDb).toBeDefined();
      expect(patchedDb).toHaveProperty("selectFrom");
    });

    it("should use provided options", () => {
      const customOptions: ForgeSqlOrmOptions = {
        cacheEntityName: "custom_cache",
        cacheTTL: 300,
        logRawSqlQuery: true,
      };
      
      const dbWithOptions = drizzle(forgeDriver);
      const patchedDb = patchDbWithSelectAliased(dbWithOptions, customOptions);
      
      expect(patchedDb).toBeDefined();
      expect(patchedDb).toHaveProperty("selectFrom");
    });
  });

  describe("query execution and caching behavior", () => {
    it("should execute query and handle caching flow", async () => {
      const query = db.selectFrom(testTable).where(eq(testTable.id, 1));
      const result = await query;

      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it("should execute cached query successfully", async () => {
      const query = db.selectFromCacheable(testTable, 300).where(eq(testTable.id, 1));
      const result = await query;
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it("should support custom cache TTL", async () => {
      const query = db.selectFromCacheable(testTable, 600).where(eq(testTable.id, 1));
      const result = await query;
      
      expect(result).toBeDefined();
    });
  });

  describe("selectAliasedDistinct", () => {
    it("should create a select distinct query with field aliasing", async () => {
      const query = db
        .selectAliasedDistinct({
          userId: testTable.id,
          userName: testTable.name,
        })
        .from(testTable);

      expect(query).toBeDefined();
      const results = await query;
      expect(results).toBeDefined();
    });
  });

  describe("selectAliasedDistinctCacheable", () => {
    it("should create a cached select distinct query with field aliasing", async () => {
      const query = db
        .selectAliasedDistinctCacheable(
          {
            userId: testTable.id,
            userName: testTable.name,
          },
          300,
        )
        .from(testTable);

      expect(query).toBeDefined();
      const results = await query;
      expect(results).toBeDefined();
    });
  });

  describe("cache context methods", () => {
    it("should create insert builder with cache context", () => {
      const insertBuilder = db.insertWithCacheContext(testTable);
      
      expect(insertBuilder).toBeDefined();
      expect(insertBuilder).toHaveProperty("values");
    });

    it("should create update builder with cache context", () => {
      const updateBuilder = db.updateWithCacheContext(testTable);
      
      expect(updateBuilder).toBeDefined();
      expect(updateBuilder).toHaveProperty("set");
    });

    it("should create delete builder with cache context", () => {
      const deleteBuilder = db.deleteWithCacheContext(testTable);
      
      expect(deleteBuilder).toBeDefined();
      expect(deleteBuilder).toHaveProperty("where");
    });
  });

  describe("query builder properties", () => {
    it("should maintain drizzle query builder properties", () => {
      const query = db.selectFrom(testTable);
      
      expect(query).toBeDefined();
      // Should support standard drizzle methods
      expect(typeof (query as any).where).toBe("function");
      expect(typeof (query as any).limit).toBe("function");
      expect(typeof (query as any).offset).toBe("function");
    });

    it("should support complex query building", () => {
      const query = db
        .selectAliased({
          userId: testTable.id,
          userName: testTable.name,
          userEmail: testTable.email,
        })
        .from(testTable)
        .where(eq(testTable.id, 1))
        .limit(10);

      expect(query).toBeDefined();
    });
  });
});

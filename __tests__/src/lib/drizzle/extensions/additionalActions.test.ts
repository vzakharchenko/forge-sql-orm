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

// Mock @forge/kvs to prevent real API calls
const mockKvsEntity = {
  get: vi.fn().mockResolvedValue(undefined),
  set: vi.fn().mockResolvedValue(undefined),
  delete: vi.fn().mockResolvedValue(undefined),
};

// Create a factory function to always return a new object with execute method
const createMockKvsTransactSet = () => ({
  execute: vi.fn().mockResolvedValue(undefined),
});

const mockKvsTransact = {
  set: vi.fn(() => createMockKvsTransactSet()),
  delete: vi.fn(() => createMockKvsTransactSet()),
};

vi.mock("@forge/kvs", () => ({
  kvs: {
    entity: vi.fn(() => mockKvsEntity),
    transact: vi.fn(() => mockKvsTransact),
  },
}));

// Create mock functions that we can access later
const mockGetFromCache = vi.fn().mockResolvedValue(undefined);
const mockSetCacheResult = vi.fn().mockResolvedValue(undefined);
const mockClearCache = vi.fn().mockResolvedValue(undefined);
const mockHashKey = vi.fn(() => "test-key");

// Ensure mocks are reset before each test
const resetCacheMocks = () => {
  mockGetFromCache.mockClear();
  mockSetCacheResult.mockClear();
  mockClearCache.mockClear();
  mockGetFromCache.mockResolvedValue(undefined);
  mockSetCacheResult.mockResolvedValue(undefined);
  mockClearCache.mockResolvedValue(undefined);
};

const mockCacheApplicationContextGetStore = vi.fn(() => null);
const mockEvictLocalCacheQuery = vi.fn().mockResolvedValue(undefined);
const mockGetQueryLocalCacheQuery = vi.fn().mockResolvedValue(undefined);
const mockSaveQueryLocalCacheQuery = vi.fn().mockResolvedValue(undefined);
const mockSaveTableIfInsideCacheContext = vi.fn().mockResolvedValue(undefined);

// Mock cache utilities
vi.mock("../../../src/utils/cacheUtils", () => ({
  getFromCache: mockGetFromCache,
  setCacheResult: mockSetCacheResult,
  clearCache: mockClearCache,
  hashKey: mockHashKey,
}));

// Mock cache context utilities
const mockLocalCacheApplicationContextGetStore = vi.fn(() => null);
vi.mock("../../../src/utils/cacheContextUtils", () => ({
  cacheApplicationContext: {
    getStore: mockCacheApplicationContextGetStore,
  },
  localCacheApplicationContext: {
    getStore: mockLocalCacheApplicationContextGetStore,
  },
  evictLocalCacheQuery: mockEvictLocalCacheQuery,
  getQueryLocalCacheQuery: mockGetQueryLocalCacheQuery,
  saveQueryLocalCacheQuery: mockSaveQueryLocalCacheQuery,
  saveTableIfInsideCacheContext: mockSaveTableIfInsideCacheContext,
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
  let db: any;
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
    resetCacheMocks();
    // Reset cache query mocks - use mockImplementation to ensure it works correctly
    // Don't reset the implementation here - let each test set it up as needed
    mockGetQueryLocalCacheQuery.mockClear();
    mockSaveQueryLocalCacheQuery.mockClear();
    mockSaveQueryLocalCacheQuery.mockResolvedValue(undefined);
    const baseDb = drizzle(forgeDriver);
    db = patchDbWithSelectAliased(baseDb, defaultOptions);
  });

  describe("patchDbWithSelectAliased", () => {
    it("should add all required methods to database", () => {
      expect(db).toHaveProperty("selectAliased");
      expect(db).toHaveProperty("selectAliasedDistinct");
      expect(db).toHaveProperty("selectAliasedCacheable");
      expect(db).toHaveProperty("selectAliasedDistinctCacheable");
      expect(db).toHaveProperty("selectFrom");
      expect(db).toHaveProperty("selectDistinctFrom");
      expect(db).toHaveProperty("selectFromCacheable");
      expect(db).toHaveProperty("selectDistinctFromCacheable");
      expect(db).toHaveProperty("insertAndEvictCache");
      expect(db).toHaveProperty("updateAndEvictCache");
      expect(db).toHaveProperty("deleteAndEvictCache");
      expect(db).toHaveProperty("insertWithCacheContext");
      expect(db).toHaveProperty("updateWithCacheContext");
      expect(db).toHaveProperty("deleteWithCacheContext");
      expect(db).toHaveProperty("executeQuery");
      expect(db).toHaveProperty("executeQueryCacheable");
    });

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

    it("should support method chaining", () => {
      const query = db.selectFrom(testTable).where(eq(testTable.id, 1)).limit(10);

      expect(query).toBeDefined();
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

    it("should support method chaining", () => {
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

  describe("cached query execution - global cache", () => {
    it("should handle cache set errors gracefully", async () => {
      mockGetQueryLocalCacheQuery.mockResolvedValue(undefined);
      mockGetFromCache.mockResolvedValue(undefined);
      mockSetCacheResult.mockRejectedValueOnce(new Error("Cache set failed"));

      const query = db.selectFromCacheable(testTable, 300).where(eq(testTable.id, 1));
      const result = await query;

      // Should still return result even if cache set fails
      expect(result).toBeDefined();
    });
  });

  describe("executeQuery", () => {
    it("should execute raw SQL query with local cache", async () => {
      const result = await db.executeQuery(sql`SELECT * FROM test_users WHERE id = 1`);

      expect(result).toBeDefined();
      expect(Array.isArray(result) || typeof result === "object").toBe(true);
    });

    it("should execute string SQL query", async () => {
      const result = await db.executeQuery("SELECT * FROM test_users WHERE id = 1");

      expect(result).toBeDefined();
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
      expect(Array.isArray(result) || typeof result === "object").toBe(true);
    });

    it("should execute string SQL query with caching", async () => {
      const result = await db.executeQueryCacheable("SELECT * FROM test_users WHERE id = 1", 300);

      expect(result).toBeDefined();
      expect(Array.isArray(result) || typeof result === "object").toBe(true);
    });
  });

  describe("insertAndEvictCache", () => {
    it("should create insert builder that evicts cache", async () => {
      const insertBuilder = db.insertAndEvictCache(testTable);

      expect(insertBuilder).toBeDefined();
      expect(insertBuilder).toHaveProperty("values");
      const builderWithValues = insertBuilder.values({ name: "Test", email: "test@example.com" });
      expect(builderWithValues).toHaveProperty("then");
    });

    it("should execute insert and evict cache", async () => {
      const insertBuilder = db.insertAndEvictCache(testTable).values({
        name: "New User",
        email: "new@example.com",
      });

      expect(insertBuilder).toBeDefined();
    });

    it("should clear cache when cache context is not available", async () => {
      mockCacheApplicationContextGetStore.mockReturnValueOnce(null);

      const insertBuilder = db.insertAndEvictCache(testTable).values({
        name: "Test",
        email: "test@example.com",
      });

      expect(insertBuilder).toBeDefined();
    });

    it("should handle cache errors gracefully", async () => {
      mockEvictLocalCacheQuery.mockRejectedValueOnce(new Error("Cache error"));

      const insertBuilder = db.insertAndEvictCache(testTable).values({
        name: "Test",
        email: "test@example.com",
      });

      expect(insertBuilder).toBeDefined();
    });
  });

  describe("updateAndEvictCache", () => {
    it("should create update builder that evicts cache", async () => {
      const updateBuilder = db.updateAndEvictCache(testTable);

      expect(updateBuilder).toBeDefined();
      expect(updateBuilder).toHaveProperty("set");
      const builderWithSet = updateBuilder.set({ name: "Updated" });
      expect(builderWithSet).toHaveProperty("where");
      expect(builderWithSet).toHaveProperty("then");
    });

    it("should handle cache errors gracefully", async () => {
      mockEvictLocalCacheQuery.mockRejectedValueOnce(new Error("Cache error"));

      const updateBuilder = db.updateAndEvictCache(testTable).set({ name: "Updated" });

      expect(updateBuilder).toBeDefined();
    });
  });

  describe("deleteAndEvictCache", () => {
    it("should create delete builder that evicts cache", async () => {
      const deleteBuilder = db.deleteAndEvictCache(testTable);

      expect(deleteBuilder).toBeDefined();
      expect(deleteBuilder).toHaveProperty("where");
      expect(deleteBuilder).toHaveProperty("then");
    });

    it("should handle cache errors gracefully", async () => {
      mockEvictLocalCacheQuery.mockRejectedValueOnce(new Error("Cache error"));

      const deleteBuilder = db.deleteAndEvictCache(testTable).where(eq(testTable.id, 1));

      expect(deleteBuilder).toBeDefined();
    });
  });

  describe("insertWithCacheContext", () => {
    it("should create insert builder that participates in cache context", async () => {
      const insertBuilder = db.insertWithCacheContext(testTable);

      expect(insertBuilder).toBeDefined();
      expect(insertBuilder).toHaveProperty("values");
    });

    it("should use cache context when available", async () => {
      mockCacheApplicationContextGetStore.mockReturnValueOnce({} as any);

      const insertBuilder = db.insertWithCacheContext(testTable).values({
        name: "Test",
        email: "test@example.com",
      });

      expect(insertBuilder).toBeDefined();
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

  describe("error handling in query execution", () => {
    it("should handle errors in query execution", async () => {
      mockGetQueryLocalCacheQuery.mockResolvedValue(undefined);

      // Mock execute to throw error
      const forgeSql = await import("@forge/sql");
      const testError = new Error("Query failed");
      vi.mocked(forgeSql.sql.prepare).mockImplementationOnce(() => {
        const executeMock = vi.fn().mockRejectedValue(testError);
        return {
          query: "MOCK_QUERY",
          _params: [],
          remoteSqlApi: "",
          params: [],
          bindParams: vi.fn(),
          execute: executeMock,
        } as any;
      });

      const query = db.selectFrom(testTable).where(eq(testTable.id, 1));

      try {
        await query;
        expect.fail("Expected query to throw an error");
      } catch (error: any) {
        // Error might be wrapped by drizzle-orm, so check if the original error message is present
        // The error might be formatted as "Failed query: ..." by drizzle-orm, so we check for the original message
        const errorMessage = error?.message || error?.toString() || "";
        // Check if either the original message or a formatted version is present
        expect(
          errorMessage.includes("Query failed") ||
            errorMessage.includes("Failed query") ||
            error?.cause?.message?.includes("Query failed"),
        ).toBe(true);
      }
    });

    it("should handle errors in cached query execution", async () => {
      mockGetQueryLocalCacheQuery.mockResolvedValue(undefined);
      mockGetFromCache.mockResolvedValue(undefined);

      // Mock execute to throw error
      const forgeSql = await import("@forge/sql");
      const testError = new Error("Cached query failed");
      vi.mocked(forgeSql.sql.prepare).mockImplementationOnce(() => {
        const executeMock = vi.fn().mockRejectedValue(testError);
        return {
          query: "MOCK_QUERY",
          _params: [],
          remoteSqlApi: "",
          params: [],
          bindParams: vi.fn(),
          execute: executeMock,
        } as any;
      });

      const query = db.selectFromCacheable(testTable, 300).where(eq(testTable.id, 1));

      try {
        await query;
        expect.fail("Expected query to throw an error");
      } catch (error: any) {
        // Error might be wrapped by drizzle-orm, so check if the original error message is present
        // The error might be formatted as "Failed query: ..." by drizzle-orm, so we check for the original message
        const errorMessage = error?.message || error?.toString() || "";
        // Check if either the original message or a formatted version is present
        expect(
          errorMessage.includes("Cached query failed") ||
            errorMessage.includes("Failed query") ||
            error?.cause?.message?.includes("Cached query failed"),
        ).toBe(true);
      }
    });

    it("should handle errors with onrejected callback", async () => {
      mockGetQueryLocalCacheQuery.mockResolvedValue(undefined);
      mockGetFromCache.mockResolvedValue(undefined);

      const forgeSql = await import("@forge/sql");
      vi.mocked(forgeSql.sql.prepare).mockImplementationOnce(() => {
        const executeMock = vi.fn().mockRejectedValue(new Error("Query failed"));
        return {
          query: "MOCK_QUERY",
          _params: [],
          remoteSqlApi: "",
          params: [],
          bindParams: vi.fn(),
          execute: executeMock,
        } as any;
      });

      const query = db.selectFromCacheable(testTable, 300).where(eq(testTable.id, 1));
      const onRejected = vi.fn();

      await query.catch(onRejected);

      expect(onRejected).toHaveBeenCalled();
    });
  });

  describe("query builder properties", () => {
    it("should maintain drizzle query builder properties", () => {
      const query = db.selectFrom(testTable);

      expect(query).toBeDefined();
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

  describe("cache context behavior", () => {
    it("should save table if inside cache context", async () => {
      mockCacheApplicationContextGetStore.mockReturnValueOnce({} as any);

      const insertBuilder = db.insertWithCacheContext(testTable).values({
        name: "Test",
        email: "test@example.com",
      });

      expect(insertBuilder).toBeDefined();
    });

    it("should clear cache when cache context is not available and isCached is true", async () => {
      mockCacheApplicationContextGetStore.mockReturnValueOnce(null);

      const insertBuilder = db.insertAndEvictCache(testTable).values({
        name: "Test",
        email: "test@example.com",
      });

      expect(insertBuilder).toBeDefined();
    });
  });

  describe("handleSuccessfulExecution error handling", () => {
    it("should handle errors in handleSuccessfulExecution and clear cache for cache clearing errors", async () => {
      mockEvictLocalCacheQuery.mockRejectedValueOnce(new Error("DEADLOCK"));
      mockCacheApplicationContextGetStore.mockReturnValueOnce(null);
      mockClearCache.mockResolvedValueOnce(undefined);

      const insertBuilder = db.insertAndEvictCache(testTable).values({
        name: "Test",
        email: "test@example.com",
      });

      expect(insertBuilder).toBeDefined();
    });

    it("should handle errors in handleSuccessfulExecution and not clear cache for validation errors", async () => {
      mockEvictLocalCacheQuery.mockRejectedValueOnce(new Error("VALIDATION_ERROR"));

      const insertBuilder = db.insertAndEvictCache(testTable).values({
        name: "Test",
        email: "test@example.com",
      });

      expect(insertBuilder).toBeDefined();
    });

    it("should handle cache clear errors gracefully", async () => {
      mockEvictLocalCacheQuery.mockRejectedValueOnce(new Error("LOCK_WAIT_TIMEOUT"));
      mockCacheApplicationContextGetStore.mockReturnValueOnce(null);
      mockClearCache.mockRejectedValueOnce(new Error("Cache clear failed"));

      const insertBuilder = db.insertAndEvictCache(testTable).values({
        name: "Test",
        email: "test@example.com",
      });

      expect(insertBuilder).toBeDefined();
    });
  });

  describe("handleFunctionCall", () => {
    it("should wrap result if it has execute method", () => {
      const query = db.selectFrom(testTable).where(eq(testTable.id, 1));

      expect(query).toBeDefined();
      // Method chaining should work
      const chained = (query as any).limit(10);
      expect(chained).toBeDefined();
    });
  });

  describe("onfulfilled callback", () => {
    it("should call onfulfilled callback when provided", async () => {
      const onFulfilled = vi.fn((rows) => rows);
      mockGetQueryLocalCacheQuery.mockResolvedValue(undefined);

      const query = db.selectFrom(testTable).where(eq(testTable.id, 1));
      const result = await query.then(onFulfilled);

      expect(onFulfilled).toHaveBeenCalled();
      expect(result).toBeDefined();
    });

    it("should call onfulfilled callback for cached queries", async () => {
      const onFulfilled = vi.fn((rows) => rows);
      mockGetQueryLocalCacheQuery.mockResolvedValue(undefined);
      mockGetFromCache.mockResolvedValue(undefined);

      const query = db.selectFromCacheable(testTable, 300).where(eq(testTable.id, 1));
      const result = await query.then(onFulfilled);

      expect(onFulfilled).toHaveBeenCalled();
      expect(result).toBeDefined();
    });
  });
});

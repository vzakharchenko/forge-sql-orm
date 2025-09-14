import { describe, it, expect, beforeEach, vi } from "vitest";
import { ForgeSQLCacheOperations } from "../../../src/core/ForgeSQLCacheOperations";
import { ForgeSqlOrmOptions } from "../../../src/core/ForgeSQLQueryBuilder";
import {
  clearCache,
  clearTablesCache,
  getFromCache,
  setCacheResult,
} from "../../../src/utils/cacheUtils";
import { TestEntityVersion } from "../../entities/TestEntityVersion";
import { TestEntity } from "../../entities/TestEntity";

// Mock cache utilities
vi.mock("../../../src/utils/cacheUtils");
const mockClearCache = vi.mocked(clearCache);
const mockClearTablesCache = vi.mocked(clearTablesCache);
const mockGetFromCache = vi.mocked(getFromCache);
const mockSetCacheResult = vi.mocked(setCacheResult);

// Mock getTableName
vi.mock("drizzle-orm/table", () => ({
  getTableName: vi.fn((table) => {
    if (table === TestEntityVersion) return "test_entity_version";
    if (table === TestEntity) return "test_entity";
    return "unknown_table";
  }),
}));

// Mock ForgeSQL operations
const mockInsert = vi.fn();
const mockDeleteById = vi.fn();
const mockUpdateById = vi.fn();
const mockUpdateFields = vi.fn();

const mockForgeOperations = {
  modifyWithVersioning: vi.fn(() => ({
    insert: mockInsert,
    deleteById: mockDeleteById,
    updateById: mockUpdateById,
    updateFields: mockUpdateFields,
  })),
};

describe("ForgeSQLCacheOperations", () => {
  let cacheOperations: ForgeSQLCacheOperations;
  let options: ForgeSqlOrmOptions;

  beforeEach(() => {
    vi.clearAllMocks();

    options = {
      cacheEntityName: "test_cache",
      cacheTTL: 300,
    };

    // Reset mock implementations
    mockInsert.mockReset();
    mockDeleteById.mockReset();
    mockUpdateById.mockReset();
    mockUpdateFields.mockReset();

    cacheOperations = new ForgeSQLCacheOperations(options, mockForgeOperations as any);
  });

  describe("constructor", () => {
    it("should create instance with provided options and operations", () => {
      expect(cacheOperations).toBeInstanceOf(ForgeSQLCacheOperations);
    });
  });

  describe("evictCacheEntities", () => {
    it("should evict cache for multiple tables using Drizzle table objects", async () => {
      const tables = [TestEntityVersion, TestEntity];

      await cacheOperations.evictCacheEntities(tables);

      expect(mockClearTablesCache).toHaveBeenCalledWith(
        ["test_entity_version", "test_entity"],
        options,
      );
    });

    it("should throw error if cacheEntityName is not configured", async () => {
      const optionsWithoutCache = { ...options, cacheEntityName: undefined };
      const operationsWithoutCache = new ForgeSQLCacheOperations(
        optionsWithoutCache,
        mockForgeOperations as any,
      );

      await expect(operationsWithoutCache.evictCacheEntities([TestEntityVersion])).rejects.toThrow(
        "cacheEntityName is not configured",
      );
    });
  });

  describe("evictCache", () => {
    it("should evict cache for multiple tables by names", async () => {
      const tableNames = ["test_entity_version", "test_entity"];

      await cacheOperations.evictCache(tableNames);

      expect(mockClearTablesCache).toHaveBeenCalledWith(tableNames, options);
    });

    it("should throw error if cacheEntityName is not configured", async () => {
      const optionsWithoutCache = { ...options, cacheEntityName: undefined };
      const operationsWithoutCache = new ForgeSQLCacheOperations(
        optionsWithoutCache,
        mockForgeOperations as any,
      );

      await expect(operationsWithoutCache.evictCache(["test_entity"])).rejects.toThrow(
        "cacheEntityName is not configured",
      );
    });
  });

  describe("insert", () => {
    it("should insert records with versioning and evict cache", async () => {
      mockInsert.mockResolvedValue(1);

      const models = [{ name: "test", version: 1 }];

      const result = await cacheOperations.insert(TestEntityVersion, models);

      expect(mockInsert).toHaveBeenCalledWith(TestEntityVersion, models, undefined);
      expect(mockClearCache).toHaveBeenCalledWith(TestEntityVersion, options);
      expect(result).toBe(1);
    });

    it("should insert records with updateIfExists option", async () => {
      mockInsert.mockResolvedValue(1);

      const models = [{ name: "test", version: 1 }];
      const updateIfExists = true;

      await cacheOperations.insert(TestEntityVersion, models, updateIfExists);

      expect(mockInsert).toHaveBeenCalledWith(TestEntityVersion, models, updateIfExists);
      expect(mockClearCache).toHaveBeenCalledWith(TestEntityVersion, options);
    });

    it("should throw error if cacheEntityName is not configured", async () => {
      const optionsWithoutCache = { ...options, cacheEntityName: undefined };
      const operationsWithoutCache = new ForgeSQLCacheOperations(
        optionsWithoutCache,
        mockForgeOperations as any,
      );

      await expect(
        operationsWithoutCache.insert(TestEntityVersion, [{ name: "test" }]),
      ).rejects.toThrow("cacheEntityName is not configured");
    });
  });

  describe("deleteById", () => {
    it("should delete record by ID with versioning and evict cache", async () => {
      mockDeleteById.mockResolvedValue(1);

      const id = 1;

      const result = await cacheOperations.deleteById(id, TestEntityVersion);

      expect(mockDeleteById).toHaveBeenCalledWith(id, TestEntityVersion);
      expect(mockClearCache).toHaveBeenCalledWith(TestEntityVersion, options);
      expect(result).toBe(1);
    });

    it("should throw error if cacheEntityName is not configured", async () => {
      const optionsWithoutCache = { ...options, cacheEntityName: undefined };
      const operationsWithoutCache = new ForgeSQLCacheOperations(
        optionsWithoutCache,
        mockForgeOperations as any,
      );

      await expect(operationsWithoutCache.deleteById(1, TestEntityVersion)).rejects.toThrow(
        "cacheEntityName is not configured",
      );
    });
  });

  describe("updateById", () => {
    it("should update record by ID with versioning and evict cache", async () => {
      mockUpdateById.mockResolvedValue(1);

      const entity = { id: 1, name: "updated" };

      const result = await cacheOperations.updateById(entity, TestEntityVersion);

      expect(mockUpdateById).toHaveBeenCalledWith(entity, TestEntityVersion);
      expect(mockClearCache).toHaveBeenCalledWith(TestEntityVersion, options);
      expect(result).toBe(1);
    });

    it("should throw error if cacheEntityName is not configured", async () => {
      const optionsWithoutCache = { ...options, cacheEntityName: undefined };
      const operationsWithoutCache = new ForgeSQLCacheOperations(
        optionsWithoutCache,
        mockForgeOperations as any,
      );

      await expect(operationsWithoutCache.updateById({ id: 1 }, TestEntityVersion)).rejects.toThrow(
        "cacheEntityName is not configured",
      );
    });
  });

  describe("updateFields", () => {
    it("should update fields with versioning and evict cache", async () => {
      mockUpdateFields.mockResolvedValue(1);

      const updateData = { name: "updated" };
      const where = { id: 1 } as any;

      const result = await cacheOperations.updateFields(updateData, TestEntityVersion, where);

      expect(mockUpdateFields).toHaveBeenCalledWith(updateData, TestEntityVersion, where);
      expect(mockClearCache).toHaveBeenCalledWith(TestEntityVersion, options);
      expect(result).toBe(1);
    });

    it("should update fields without where clause", async () => {
      mockUpdateFields.mockResolvedValue(2);

      const updateData = { name: "updated" };

      const result = await cacheOperations.updateFields(updateData, TestEntityVersion);

      expect(mockUpdateFields).toHaveBeenCalledWith(updateData, TestEntityVersion, undefined);
      expect(mockClearCache).toHaveBeenCalledWith(TestEntityVersion, options);
      expect(result).toBe(2);
    });

    it("should throw error if cacheEntityName is not configured", async () => {
      const optionsWithoutCache = { ...options, cacheEntityName: undefined };
      const operationsWithoutCache = new ForgeSQLCacheOperations(
        optionsWithoutCache,
        mockForgeOperations as any,
      );

      await expect(
        operationsWithoutCache.updateFields({ name: "test" }, TestEntityVersion),
      ).rejects.toThrow("cacheEntityName is not configured");
    });
  });

  describe("executeQuery", () => {
    it("should return cached result if available", async () => {
      const cachedResult = [{ id: 1, name: "cached" }];
      mockGetFromCache.mockResolvedValue(cachedResult);

      const mockQuery = { toSQL: () => ({ sql: "SELECT * FROM test" }) } as any;

      const result = await cacheOperations.executeQuery(mockQuery);

      expect(mockGetFromCache).toHaveBeenCalledWith(mockQuery, options);
      expect(mockSetCacheResult).not.toHaveBeenCalled();
      expect(result).toBe(cachedResult);
    });

    it("should execute query and cache result if not in cache", async () => {
      mockGetFromCache.mockResolvedValue(null);

      const queryResult = [{ id: 1, name: "fresh" }];
      const mockQuery = {
        toSQL: () => ({ sql: "SELECT * FROM test" }),
        then: (resolve: any) => resolve(queryResult),
      } as any;

      const result = await cacheOperations.executeQuery(mockQuery);

      expect(mockGetFromCache).toHaveBeenCalledWith(mockQuery, options);
      expect(mockSetCacheResult).toHaveBeenCalledWith(mockQuery, options, queryResult, 300);
      expect(result).toBe(queryResult);
    });

    it("should use custom TTL when provided", async () => {
      mockGetFromCache.mockResolvedValue(null);

      const queryResult = [{ id: 1, name: "fresh" }];
      const mockQuery = {
        toSQL: () => ({ sql: "SELECT * FROM test" }),
        then: (resolve: any) => resolve(queryResult),
      } as any;

      const customTTL = 600;
      await cacheOperations.executeQuery(mockQuery, customTTL);

      expect(mockSetCacheResult).toHaveBeenCalledWith(mockQuery, options, queryResult, customTTL);
    });

    it("should use default TTL when not provided", async () => {
      mockGetFromCache.mockResolvedValue(null);

      const queryResult = [{ id: 1, name: "fresh" }];
      const mockQuery = {
        toSQL: () => ({ sql: "SELECT * FROM test" }),
        then: (resolve: any) => resolve(queryResult),
      } as any;

      await cacheOperations.executeQuery(mockQuery);

      expect(mockSetCacheResult).toHaveBeenCalledWith(mockQuery, options, queryResult, 300);
    });

    it("should throw error if cacheEntityName is not configured", async () => {
      const optionsWithoutCache = { ...options, cacheEntityName: undefined };
      const operationsWithoutCache = new ForgeSQLCacheOperations(
        optionsWithoutCache,
        mockForgeOperations as any,
      );

      const mockQuery = { toSQL: () => ({ sql: "SELECT * FROM test" }) } as any;

      await expect(operationsWithoutCache.executeQuery(mockQuery)).rejects.toThrow(
        "cacheEntityName is not configured",
      );
    });
  });

  describe("error handling", () => {
    it("should propagate errors from modifyWithVersioning operations", async () => {
      const error = new Error("Version conflict");
      mockInsert.mockRejectedValue(error);

      await expect(cacheOperations.insert(TestEntityVersion, [{ name: "test" }])).rejects.toThrow(
        "Version conflict",
      );

      expect(mockClearCache).not.toHaveBeenCalled();
    });

    it("should propagate errors from cache operations", async () => {
      const error = new Error("Cache error");
      mockClearCache.mockRejectedValue(error);
      mockInsert.mockResolvedValue(1);

      await expect(cacheOperations.insert(TestEntityVersion, [{ name: "test" }])).rejects.toThrow(
        "Cache error",
      );
    });
  });

  describe("integration scenarios", () => {
    it("should handle complete CRUD workflow with caching", async () => {
      // Insert
      mockInsert.mockResolvedValue(1);
      await cacheOperations.insert(TestEntityVersion, [{ name: "test", version: 1 }]);
      expect(mockClearCache).toHaveBeenCalledWith(TestEntityVersion, options);

      // Update
      mockUpdateById.mockResolvedValue(1);
      await cacheOperations.updateById({ id: 1, name: "updated" }, TestEntityVersion);
      expect(mockClearCache).toHaveBeenCalledWith(TestEntityVersion, options);

      // Delete
      mockDeleteById.mockResolvedValue(1);
      await cacheOperations.deleteById(1, TestEntityVersion);
      expect(mockClearCache).toHaveBeenCalledWith(TestEntityVersion, options);
    });

    it("should handle batch cache eviction", async () => {
      const tables = [TestEntityVersion, TestEntity];

      await cacheOperations.evictCacheEntities(tables);

      expect(mockClearTablesCache).toHaveBeenCalledWith(
        ["test_entity_version", "test_entity"],
        options,
      );
    });
  });
});

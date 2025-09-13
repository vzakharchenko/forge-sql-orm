import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { eq } from 'drizzle-orm';
import ForgeSQL from '../../../src/core/ForgeSQLORM';
import { testEntityDateVersion } from '../../entities/TestEntityDateVersion';

// Mock @forge/sql
vi.mock('@forge/sql', () => ({
  sql: {
    prepare: vi.fn((query: string) => {
      const procedureMock = vi.fn().mockResolvedValue({ 
        rows: [{ id: 1, name: 'Test', version: '2023-04-12 00:00:01.000' }] 
      });
      return {
        query: query || "MOCK_QUERY",
        _params: [],
        remoteSqlApi: "",
        params: [],
        bindParams: vi.fn(),
        execute: procedureMock,
      };
    }),
  },
}));

// Mock @forge/kvs
vi.mock('@forge/kvs', () => ({
  kvs: {
    entity: vi.fn(() => ({
      get: vi.fn(),
      set: vi.fn(),
      query: vi.fn(() => ({
        index: vi.fn(() => ({
          filters: vi.fn(() => ({
            cursor: vi.fn(() => ({
              limit: vi.fn(() => ({
                getMany: vi.fn()
              }))
            }))
          })),
          where: vi.fn(() => ({
            cursor: vi.fn(() => ({
              limit: vi.fn(() => ({
                getMany: vi.fn()
              }))
            }))
          }))
        }))
      }))
    })),
    transact: vi.fn(() => ({
      set: vi.fn().mockReturnThis(),
      delete: vi.fn().mockReturnThis(),
      execute: vi.fn()
    }))
  },
  Filter: vi.fn(() => ({
    or: vi.fn().mockReturnThis()
  })),
  FilterConditions: {
    contains: vi.fn((value) => ({ contains: value }))
  },
  WhereConditions: {
    lessThan: vi.fn((value) => ({ lessThan: value }))
  }
}));

// Mock cacheContextUtils
vi.mock('../../../src/utils/cacheContextUtils', () => ({
  cacheApplicationContext: {
    getStore: vi.fn(),
    run: vi.fn()
  },
  localCacheApplicationContext: {
    getStore: vi.fn(),
    run: vi.fn()
  },
  isTableContainsTableInCacheContext: vi.fn().mockResolvedValue(false),
  saveTableIfInsideCacheContext: vi.fn(),
  saveQueryLocalCacheQuery: vi.fn(),
  getQueryLocalCacheQuery: vi.fn(),
  evictLocalCacheQuery: vi.fn()
}));

describe('ForgeSQL Local Cache', () => {
  let forgeSQL: ForgeSQL;

  beforeEach(() => {
    vi.clearAllMocks();
    forgeSQL = new ForgeSQL({
      logRawSqlQuery: false,
      disableOptimisticLocking: false,
      cacheWrapTable: true,
      cacheTTL: 120
    });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('executeWithLocalContext', () => {
    it('should execute operations within local cache context', async () => {
      const { localCacheApplicationContext } = await import('../../../src/utils/cacheContextUtils');
      const mockRun = vi.fn().mockImplementation((context, callback) => callback());
      (localCacheApplicationContext.run as any).mockImplementation(mockRun);

      let executed = false;
      await forgeSQL.executeWithLocalContext(async () => {
        executed = true;
      });

      expect(executed).toBe(true);
      expect(mockRun).toHaveBeenCalledWith({ cache: {} }, expect.any(Function));
    });

    it('should handle errors in local cache context', async () => {
      const { localCacheApplicationContext } = await import('../../../src/utils/cacheContextUtils');
      const mockRun = vi.fn().mockImplementation((context, callback) => callback());
      (localCacheApplicationContext.run as any).mockImplementation(mockRun);

      const error = new Error('Test error');
      await expect(
        forgeSQL.executeWithLocalContext(async () => {
          throw error;
        })
      ).rejects.toThrow('Test error');
    });
  });

  describe('executeWithLocalCacheContextAndReturnValue', () => {
    it('should execute operations and return value within local cache context', async () => {
      const { localCacheApplicationContext } = await import('../../../src/utils/cacheContextUtils');
      const mockRun = vi.fn().mockImplementation((context, callback) => callback());
      (localCacheApplicationContext.run as any).mockImplementation(mockRun);

      const result = await forgeSQL.executeWithLocalCacheContextAndReturnValue(async () => {
        return 'test result';
      });

      expect(result).toBe('test result');
      expect(mockRun).toHaveBeenCalledWith({ cache: {} }, expect.any(Function));
    });

    it('should handle errors and return undefined', async () => {
      const { localCacheApplicationContext } = await import('../../../src/utils/cacheContextUtils');
      const mockRun = vi.fn().mockImplementation((context, callback) => callback());
      (localCacheApplicationContext.run as any).mockImplementation(mockRun);

      const error = new Error('Test error');
      await expect(
        forgeSQL.executeWithLocalCacheContextAndReturnValue(async () => {
          throw error;
        })
      ).rejects.toThrow('Test error');
    });
  });

  describe('Local Cache Query Operations', () => {
    it('should cache select queries within local context', async () => {
      const { localCacheApplicationContext, getQueryLocalCacheQuery, saveQueryLocalCacheQuery } = 
        await import('../../../src/utils/cacheContextUtils');
      
      // Mock local cache context
      const mockContext = { cache: {} };
      const mockRun = vi.fn().mockImplementation((context, callback) => {
        (localCacheApplicationContext.getStore as any).mockReturnValue(mockContext);
        return callback();
      });
      (localCacheApplicationContext.run as any).mockImplementation(mockRun);

      // Mock cache operations
      (getQueryLocalCacheQuery as any).mockResolvedValue(undefined);
      (saveQueryLocalCacheQuery as any).mockResolvedValue(undefined);

      await forgeSQL.executeWithLocalContext(async () => {
        // First call - should execute and cache
        const result1 = await forgeSQL
          .select({ id: testEntityDateVersion.id, version: testEntityDateVersion.version })
          .from(testEntityDateVersion)
          .where(eq(testEntityDateVersion.id, 1));

        // Second call - should get from cache
        const result2 = await forgeSQL
          .select({ id: testEntityDateVersion.id, version: testEntityDateVersion.version })
          .from(testEntityDateVersion)
          .where(eq(testEntityDateVersion.id, 1));

        expect(result1).toEqual(result2);
      });

      expect(getQueryLocalCacheQuery).toHaveBeenCalled();
      expect(saveQueryLocalCacheQuery).toHaveBeenCalled();
    });

    it('should evict local cache on insert operations', async () => {
      const { localCacheApplicationContext, evictLocalCacheQuery } = 
        await import('../../../src/utils/cacheContextUtils');
      
      // Mock local cache context
      const mockContext = { cache: {} };
      const mockRun = vi.fn().mockImplementation((context, callback) => {
        (localCacheApplicationContext.getStore as any).mockReturnValue(mockContext);
        return callback();
      });
      (localCacheApplicationContext.run as any).mockImplementation(mockRun);

      // Mock evict operation
      (evictLocalCacheQuery as any).mockResolvedValue(undefined);

      await forgeSQL.executeWithLocalContext(async () => {
        await forgeSQL.insert(testEntityDateVersion).values([
          {
            id: 1,
            name: 'Test',
            version: new Date(),
          } as { id: number; name: string; version: Date },
        ]);
      });

      expect(evictLocalCacheQuery).toHaveBeenCalledWith(testEntityDateVersion, expect.any(Object));
    });

    it('should evict local cache on update operations', async () => {
      const { localCacheApplicationContext, evictLocalCacheQuery } = 
        await import('../../../src/utils/cacheContextUtils');
      
      // Mock local cache context
      const mockContext = { cache: {} };
      const mockRun = vi.fn().mockImplementation((context, callback) => {
        (localCacheApplicationContext.getStore as any).mockReturnValue(mockContext);
        return callback();
      });
      (localCacheApplicationContext.run as any).mockImplementation(mockRun);

      // Mock evict operation
      (evictLocalCacheQuery as any).mockResolvedValue(undefined);

      await forgeSQL.executeWithLocalContext(async () => {
        await forgeSQL.update(testEntityDateVersion)
          .set({ name: 'Updated' })
          .where(eq(testEntityDateVersion.id, 1));
      });

      expect(evictLocalCacheQuery).toHaveBeenCalledWith(testEntityDateVersion, expect.any(Object));
    });

    it('should evict local cache on delete operations', async () => {
      const { localCacheApplicationContext, evictLocalCacheQuery } = 
        await import('../../../src/utils/cacheContextUtils');
      
      // Mock local cache context
      const mockContext = { cache: {} };
      const mockRun = vi.fn().mockImplementation((context, callback) => {
        (localCacheApplicationContext.getStore as any).mockReturnValue(mockContext);
        return callback();
      });
      (localCacheApplicationContext.run as any).mockImplementation(mockRun);

      // Mock evict operation
      (evictLocalCacheQuery as any).mockResolvedValue(undefined);

      await forgeSQL.executeWithLocalContext(async () => {
        await forgeSQL.delete(testEntityDateVersion)
          .where(eq(testEntityDateVersion.id, 1));
      });

      expect(evictLocalCacheQuery).toHaveBeenCalledWith(testEntityDateVersion, expect.any(Object));
    });
  });

  describe('Integration Test - Complete Scenario', () => {
    it('should handle complete local cache scenario', async () => {
      const { 
        localCacheApplicationContext, 
        getQueryLocalCacheQuery, 
        saveQueryLocalCacheQuery,
        evictLocalCacheQuery 
      } = await import('../../../src/utils/cacheContextUtils');
      
      // Mock local cache context
      const mockContext = { cache: {} };
      const mockRun = vi.fn().mockImplementation((context, callback) => {
        (localCacheApplicationContext.getStore as any).mockReturnValue(mockContext);
        return callback();
      });
      (localCacheApplicationContext.run as any).mockImplementation(mockRun);

      // Mock cache operations
      let cacheHit = false;
      (getQueryLocalCacheQuery as any).mockImplementation(() => {
        if (cacheHit) {
          return Promise.resolve([{ id: 1, version: '2023-04-12 00:00:01.000' }]);
        }
        return Promise.resolve(undefined);
      });
      
      (saveQueryLocalCacheQuery as any).mockImplementation(() => {
        cacheHit = true;
        return Promise.resolve();
      });
      
      (evictLocalCacheQuery as any).mockImplementation(() => {
        cacheHit = false;
        return Promise.resolve();
      });

      await forgeSQL.executeWithLocalContext(async () => {
        // First select - should execute and cache
        const result1 = await forgeSQL
          .select({ id: testEntityDateVersion.id, version: testEntityDateVersion.version })
          .from(testEntityDateVersion)
          .where(eq(testEntityDateVersion.id, 1));

        // Second select - should get from cache
        const result2 = await forgeSQL
          .select({ id: testEntityDateVersion.id, version: testEntityDateVersion.version })
          .from(testEntityDateVersion)
          .where(eq(testEntityDateVersion.id, 1));

        // Third select - should get from cache
        const result3 = await forgeSQL
          .select({ id: testEntityDateVersion.id, version: testEntityDateVersion.version })
          .from(testEntityDateVersion)
          .where(eq(testEntityDateVersion.id, 1));

        // Insert - should evict cache
        await forgeSQL.insert(testEntityDateVersion).values([
          {
            id: 1,
            name: 'Test',
            version: new Date(),
          } as { id: number; name: string; version: Date },
        ]);

        // Fourth select - should execute and cache again
        const result4 = await forgeSQL
          .select({ id: testEntityDateVersion.id, version: testEntityDateVersion.version })
          .from(testEntityDateVersion)
          .where(eq(testEntityDateVersion.id, 1));

        // Fifth select - should get from cache
        const result5 = await forgeSQL
          .select({ id: testEntityDateVersion.id, version: testEntityDateVersion.version })
          .from(testEntityDateVersion)
          .where(eq(testEntityDateVersion.id, 1));

        expect(result1).toHaveLength(1);
        expect(result1[0]).toHaveProperty('id', 1);
        expect(result2).toHaveLength(1);
        expect(result2[0]).toHaveProperty('id', 1);
        expect(result3).toHaveLength(1);
        expect(result3[0]).toHaveProperty('id', 1);
        expect(result4).toHaveLength(1);
        expect(result4[0]).toHaveProperty('id', 1);
        expect(result5).toHaveLength(1);
        expect(result5[0]).toHaveProperty('id', 1);
      });

      // Verify cache operations were called
      expect(getQueryLocalCacheQuery).toHaveBeenCalledTimes(5);
      expect(saveQueryLocalCacheQuery).toHaveBeenCalledTimes(2); // After first and fourth select
      expect(evictLocalCacheQuery).toHaveBeenCalledTimes(1); // After insert
    });
  });
});

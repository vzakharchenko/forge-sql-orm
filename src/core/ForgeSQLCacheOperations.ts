import { MySqlSelectDynamic } from "drizzle-orm/mysql-core/query-builders/select.types";
import { AnyMySqlSelectQueryBuilder, AnyMySqlTable } from "drizzle-orm/mysql-core";
import { CacheForgeSQL, ForgeSqlOperation, ForgeSqlOrmOptions } from "./ForgeSQLQueryBuilder";
import { InferInsertModel, Query, SQL } from "drizzle-orm";
import { clearCache, getFromCache, setCacheResult, clearTablesCache } from "../utils/cacheUtils";
import { getTableName } from "drizzle-orm/table";

/**
 * Implementation of cache operations for ForgeSQL ORM.
 * Provides methods for cacheable database operations with automatic cache management.
 *
 * ⚠️ **IMPORTANT**: All modification methods in this class use optimistic locking/versioning
 * through `modifyWithVersioning()` internally. This ensures data consistency and prevents
 * concurrent modification conflicts.
 */
export class ForgeSQLCacheOperations implements CacheForgeSQL {
  private readonly options: ForgeSqlOrmOptions;
  private readonly forgeOperations: ForgeSqlOperation;

  /**
   * Creates a new instance of ForgeSQLCacheOperations.
   *
   * @param options - Configuration options for the ORM
   * @param forgeOperations - The ForgeSQL operations instance
   */
  constructor(options: ForgeSqlOrmOptions, forgeOperations: ForgeSqlOperation) {
    this.options = options;
    this.forgeOperations = forgeOperations;
  }

  /**
   * Evicts cache for multiple tables using Drizzle table objects.
   *
   * @param tables - Array of Drizzle table objects to clear cache for
   * @returns Promise that resolves when cache eviction is complete
   * @throws Error if cacheEntityName is not configured
   */
  async evictCacheEntities(tables: AnyMySqlTable[]): Promise<void> {
    if (!this.options.cacheEntityName) {
      throw new Error("cacheEntityName is not configured");
    }
    await this.evictCache(tables.map((t) => getTableName(t)));
  }

  /**
   * Evicts cache for multiple tables by their names.
   *
   * @param tables - Array of table names to clear cache for
   * @returns Promise that resolves when cache eviction is complete
   * @throws Error if cacheEntityName is not configured
   */
  async evictCache(tables: string[]): Promise<void> {
    if (!this.options.cacheEntityName) {
      throw new Error("cacheEntityName is not configured");
    }
    await clearTablesCache(tables, this.options);
  }

  /**
   * Inserts records with optimistic locking/versioning and automatically evicts cache.
   *
   * This method uses `modifyWithVersioning().insert()` internally, providing:
   * - Automatic version field initialization
   * - Optimistic locking support
   * - Cache eviction after successful operation
   *
   * @param schema - The table schema
   * @param models - Array of entities to insert
   * @param updateIfExists - Whether to update existing records
   * @returns Promise that resolves to the number of inserted rows
   * @throws Error if cacheEntityName is not configured
   * @throws Error if optimistic locking check fails
   */
  async insert<T extends AnyMySqlTable>(
    schema: T,
    models: InferInsertModel<T>[],
    updateIfExists?: boolean,
  ): Promise<number> {
    this.validateCacheConfiguration();
    const number = await this.forgeOperations
      .modifyWithVersioning()
      .insert(schema, models, updateIfExists);
    await clearCache(schema, this.options);
    return number;
  }

  /**
   * Deletes a record by ID with optimistic locking/versioning and automatically evicts cache.
   *
   * This method uses `modifyWithVersioning().deleteById()` internally, providing:
   * - Optimistic locking checks before deletion
   * - Version field validation
   * - Cache eviction after successful operation
   *
   * @param id - The ID of the record to delete
   * @param schema - The table schema
   * @returns Promise that resolves to the number of affected rows
   * @throws Error if cacheEntityName is not configured
   * @throws Error if optimistic locking check fails
   */
  async deleteById<T extends AnyMySqlTable>(id: unknown, schema: T): Promise<number> {
    this.validateCacheConfiguration();
    const number = await this.forgeOperations.modifyWithVersioning().deleteById(id, schema);
    await clearCache(schema, this.options);
    return number;
  }

  /**
   * Updates a record by ID with optimistic locking/versioning and automatically evicts cache.
   *
   * This method uses `modifyWithVersioning().updateById()` internally, providing:
   * - Optimistic locking checks before update
   * - Version field incrementation
   * - Cache eviction after successful operation
   *
   * @param entity - The entity with updated values (must include primary key)
   * @param schema - The table schema
   * @returns Promise that resolves to the number of affected rows
   * @throws Error if cacheEntityName is not configured
   * @throws Error if optimistic locking check fails
   */
  async updateById<T extends AnyMySqlTable>(
    entity: Partial<InferInsertModel<T>>,
    schema: T,
  ): Promise<number> {
    this.validateCacheConfiguration();
    const number = await this.forgeOperations.modifyWithVersioning().updateById(entity, schema);
    await clearCache(schema, this.options);
    return number;
  }

  /**
   * Updates fields based on conditions with optimistic locking/versioning and automatically evicts cache.
   *
   * This method uses `modifyWithVersioning().updateFields()` internally, providing:
   * - Optimistic locking support (if version field is configured)
   * - Version field validation and incrementation
   * - Cache eviction after successful operation
   *
   * @param updateData - The data to update
   * @param schema - The table schema
   * @param where - Optional WHERE conditions
   * @returns Promise that resolves to the number of affected rows
   * @throws Error if cacheEntityName is not configured
   * @throws Error if optimistic locking check fails
   */
  async updateFields<T extends AnyMySqlTable>(
    updateData: Partial<InferInsertModel<T>>,
    schema: T,
    where?: SQL<unknown>,
  ): Promise<number> {
    this.validateCacheConfiguration();
    const number = await this.forgeOperations
      .modifyWithVersioning()
      .updateFields(updateData, schema, where);
    await clearCache(schema, this.options);
    return number;
  }

  /**
   * Executes a query with caching support.
   * First checks cache, if not found executes query and stores result in cache.
   *
   * @param query - The Drizzle query to execute
   * @param cacheTtl - Optional cache TTL override
   * @returns Promise that resolves to the query results
   * @throws Error if cacheEntityName is not configured
   */
  async executeQuery<T extends MySqlSelectDynamic<AnyMySqlSelectQueryBuilder>>(
    query: T,
    cacheTtl?: number,
  ): Promise<Awaited<T>> {
    this.validateCacheConfiguration();
    const sqlQuery = query as { toSQL: () => Query };
    const cacheResult = await getFromCache<Awaited<T>>(sqlQuery, this.options);
    if (cacheResult) {
      return cacheResult;
    }
    const results = await query;
    await setCacheResult(sqlQuery, this.options, results, cacheTtl ?? this.options.cacheTTL ?? 60);
    return results;
  }

  /**
   * Validates that cache configuration is properly set up.
   *
   * @throws Error if cacheEntityName is not configured
   * @private
   */
  private validateCacheConfiguration(): void {
    if (!this.options.cacheEntityName) {
      throw new Error("cacheEntityName is not configured");
    }
  }
}

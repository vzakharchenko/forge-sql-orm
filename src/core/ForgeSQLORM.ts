import { ForgeSQLCrudOperations } from "./ForgeSQLCrudOperations";
import {
  VerioningModificationForgeSQL,
  ForgeSqlOperation,
  ForgeSqlOrmOptions,
  SchemaAnalyzeForgeSql,
  SchemaSqlForgeSql,
} from "./ForgeSQLQueryBuilder";
import { ForgeSQLSelectOperations } from "./ForgeSQLSelectOperations";
import {
  drizzle,
  MySqlRemoteDatabase,
  MySqlRemotePreparedQueryHKT,
  MySqlRemoteQueryResultHKT,
} from "drizzle-orm/mysql-proxy";
import { createForgeDriverProxy } from "../utils/forgeDriverProxy";
import type { SelectedFields } from "drizzle-orm/mysql-core/query-builders/select.types";
import { MySqlSelectBuilder } from "drizzle-orm/mysql-core";
import {
  DeleteAndEvictCacheType,
  InsertAndEvictCacheType,
  patchDbWithSelectAliased,
  SelectAliasedCacheableType,
  SelectAliasedDistinctCacheableType,
  SelectAliasedDistinctType,
  SelectAliasedType,
  UpdateAndEvictCacheType,
} from "../lib/drizzle/extensions/additionalActions";
import { ForgeSQLAnalyseOperation } from "./ForgeSQLAnalyseOperations";
import { ForgeSQLCacheOperations } from "./ForgeSQLCacheOperations";
import type { MySqlTable } from "drizzle-orm/mysql-core/table";
import {
  MySqlDeleteBase,
  MySqlInsertBuilder,
  MySqlUpdateBuilder,
} from "drizzle-orm/mysql-core/query-builders";
import { cacheApplicationContext, localCacheApplicationContext } from "../utils/cacheContextUtils";
import { clearTablesCache } from "../utils/cacheUtils";

/**
 * Implementation of ForgeSQLORM that uses Drizzle ORM for query building.
 * This class provides a bridge between Forge SQL and Drizzle ORM, allowing
 * to use Drizzle's query builder while executing queries through Forge SQL.
 */
class ForgeSQLORMImpl implements ForgeSqlOperation {
  private static instance: ForgeSQLORMImpl | null = null;
  private readonly drizzle: MySqlRemoteDatabase<any> & {
    selectAliased: SelectAliasedType;
    selectAliasedDistinct: SelectAliasedDistinctType;
    selectAliasedCacheable: SelectAliasedCacheableType;
    selectAliasedDistinctCacheable: SelectAliasedDistinctCacheableType;
    insertWithCacheContext: InsertAndEvictCacheType;
    insertAndEvictCache: InsertAndEvictCacheType;
    updateAndEvictCache: UpdateAndEvictCacheType;
    updateWithCacheContext: UpdateAndEvictCacheType;
    deleteAndEvictCache: DeleteAndEvictCacheType;
    deleteWithCacheContext: DeleteAndEvictCacheType;
  };
  private readonly crudOperations: VerioningModificationForgeSQL;
  private readonly fetchOperations: SchemaSqlForgeSql;
  private readonly analyzeOperations: SchemaAnalyzeForgeSql;
  private readonly cacheOperations: ForgeSQLCacheOperations;
  private readonly options: ForgeSqlOrmOptions;

  /**
   * Private constructor to enforce singleton behavior.
   * @param options - Options for configuring ForgeSQL ORM behavior.
   */
  private constructor(options?: ForgeSqlOrmOptions) {
    try {
      const newOptions: ForgeSqlOrmOptions = options ?? {
        logRawSqlQuery: false,
        disableOptimisticLocking: false,
        cacheWrapTable: true,
        cacheTTL: 120,
        cacheEntityQueryName: "sql",
        cacheEntityExpirationName: "expiration",
        cacheEntityDataName: "data",
      };
      this.options = newOptions;
      if (newOptions.logRawSqlQuery) {
        console.debug("Initializing ForgeSQLORM...");
      }
      // Initialize Drizzle instance with our custom driver
      const proxiedDriver = createForgeDriverProxy(newOptions.hints, newOptions.logRawSqlQuery);
      this.drizzle = patchDbWithSelectAliased(
        drizzle(proxiedDriver, { logger: newOptions.logRawSqlQuery }),
        newOptions,
      );
      this.crudOperations = new ForgeSQLCrudOperations(this, newOptions);
      this.fetchOperations = new ForgeSQLSelectOperations(newOptions);
      this.analyzeOperations = new ForgeSQLAnalyseOperation(this);
      this.cacheOperations = new ForgeSQLCacheOperations(newOptions, this);
    } catch (error) {
      console.error("ForgeSQLORM initialization failed:", error);
      throw error;
    }
  }

  /**
   * Executes operations within a cache context that collects cache eviction events.
   * All clearCache calls within the context are collected and executed in batch at the end.
   * Queries executed within this context will bypass cache for tables that were marked for clearing.
   *
   * This is useful for:
   * - Batch operations that affect multiple tables
   * - Transaction-like operations where you want to clear cache only at the end
   * - Performance optimization by reducing cache clear operations
   *
   * @param cacheContext - Function containing operations that may trigger cache evictions
   * @returns Promise that resolves when all operations and cache clearing are complete
   *
   * @example
   * ```typescript
   * await forgeSQL.executeWithCacheContext(async () => {
   *   await forgeSQL.modifyWithVersioning().insert(users, userData);
   *   await forgeSQL.modifyWithVersioning().insert(orders, orderData);
   *   // Cache for both users and orders tables will be cleared at the end
   * });
   * ```
   */
  executeWithCacheContext(cacheContext: () => Promise<void>): Promise<void> {
    return this.executeWithCacheContextAndReturnValue<void>(cacheContext);
  }

  /**
   * Executes operations within a cache context and returns a value.
   * All clearCache calls within the context are collected and executed in batch at the end.
   * Queries executed within this context will bypass cache for tables that were marked for clearing.
   *
   * @param cacheContext - Function containing operations that may trigger cache evictions
   * @returns Promise that resolves to the return value of the cacheContext function
   *
   * @example
   * ```typescript
   * const result = await forgeSQL.executeWithCacheContextAndReturnValue(async () => {
   *   await forgeSQL.modifyWithVersioning().insert(users, userData);
   *   return await forgeSQL.fetch().executeQueryOnlyOne(selectUserQuery);
   * });
   * ```
   */
  async executeWithCacheContextAndReturnValue<T>(cacheContext: () => Promise<T>): Promise<T> {
    return await this.executeWithLocalCacheContextAndReturnValue(
      async () =>
        await cacheApplicationContext.run({ tables: new Set<string>() }, async () => {
          try {
            return await cacheContext();
          } finally {
            await clearTablesCache(
              Array.from(cacheApplicationContext.getStore()?.tables ?? []),
              this.options,
            );
          }
        }),
    );
  }
  /**
   * Executes operations within a local cache context and returns a value.
   * This provides in-memory caching for select queries within a single request scope.
   * 
   * @param cacheContext - Function containing operations that will benefit from local caching
   * @returns Promise that resolves to the return value of the cacheContext function
   */
  async executeWithLocalCacheContextAndReturnValue<T>(cacheContext: () => Promise<T>): Promise<T> {
    return await localCacheApplicationContext.run({ cache: {} }, async () => {
      return await cacheContext();
    });
  }

  /**
   * Executes operations within a local cache context.
   * This provides in-memory caching for select queries within a single request scope.
   * 
   * @param cacheContext - Function containing operations that will benefit from local caching
   * @returns Promise that resolves when all operations are complete
   */
  executeWithLocalContext(cacheContext: () => Promise<void>): Promise<void> {
    return this.executeWithLocalCacheContextAndReturnValue<void>(cacheContext);
  }
  /**
   * Creates an insert query builder.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned inserts, use `modifyWithVersioning().insert()` or `modifyWithVersioningAndEvictCache().insert()` instead.
   *
   * @param table - The table to insert into
   * @returns Insert query builder (no versioning, no cache management)
   */
  insert<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlInsertBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
    return this.drizzle.insertWithCacheContext(table);
  }
  /**
   * Creates an insert query builder that automatically evicts cache after execution.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned inserts, use `modifyWithVersioning().insert()` or `modifyWithVersioningAndEvictCache().insert()` instead.
   *
   * @param table - The table to insert into
   * @returns Insert query builder with automatic cache eviction (no versioning)
   */
  insertAndEvictCache<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlInsertBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
    return this.drizzle.insertAndEvictCache(table);
  }

  /**
   * Creates an update query builder that automatically evicts cache after execution.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned updates, use `modifyWithVersioning().updateById()` or `modifyWithVersioningAndEvictCache().updateById()` instead.
   *
   * @param table - The table to update
   * @returns Update query builder with automatic cache eviction (no versioning)
   */
  updateAndEvictCache<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlUpdateBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
    return this.drizzle.updateAndEvictCache(table);
  }

  /**
   * Creates an update query builder.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned updates, use `modifyWithVersioning().updateById()` or `modifyWithVersioningAndEvictCache().updateById()` instead.
   *
   * @param table - The table to update
   * @returns Update query builder (no versioning, no cache management)
   */
  update<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlUpdateBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
    return this.drizzle.updateWithCacheContext(table);
  }

  /**
   * Creates a delete query builder.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned deletes, use `modifyWithVersioning().deleteById()` or `modifyWithVersioningAndEvictCache().deleteById()` instead.
   *
   * @param table - The table to delete from
   * @returns Delete query builder (no versioning, no cache management)
   */
  delete<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlDeleteBase<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
    return this.drizzle.deleteWithCacheContext(table);
  }
  /**
   * Creates a delete query builder that automatically evicts cache after execution.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned deletes, use `modifyWithVersioning().deleteById()` or `modifyWithVersioningAndEvictCache().deleteById()` instead.
   *
   * @param table - The table to delete from
   * @returns Delete query builder with automatic cache eviction (no versioning)
   */
  deleteAndEvictCache<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlDeleteBase<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
    return this.drizzle.deleteAndEvictCache(table);
  }

  /**
   * Create the modify operations instance.
   * @returns modify operations.
   */
  modifyWithVersioning(): VerioningModificationForgeSQL {
    return this.crudOperations;
  }

  /**
   * Returns the singleton instance of ForgeSQLORMImpl.
   * @param options - Options for configuring ForgeSQL ORM behavior.
   * @returns The singleton instance of ForgeSQLORMImpl.
   */
  static getInstance(options?: ForgeSqlOrmOptions): ForgeSqlOperation {
    ForgeSQLORMImpl.instance ??= new ForgeSQLORMImpl(options);
    return ForgeSQLORMImpl.instance;
  }

  /**
   * Retrieves the fetch operations instance.
   * @returns Fetch operations.
   */
  fetch(): SchemaSqlForgeSql {
    return this.fetchOperations;
  }

  /**
   * Provides query analysis capabilities including EXPLAIN ANALYZE and slow query analysis.
   * @returns {SchemaAnalyzeForgeSql} Interface for analyzing query performance
   */
  analyze(): SchemaAnalyzeForgeSql {
    return this.analyzeOperations;
  }

  /**
   * Provides schema-level SQL operations with optimistic locking/versioning and automatic cache eviction.
   *
   * This method returns operations that use `modifyWithVersioning()` internally, providing:
   * - Optimistic locking support
   * - Automatic version field management
   * - Cache eviction after successful operations
   *
   * @returns {ForgeSQLCacheOperations} Interface for executing versioned SQL operations with cache management
   */
  modifyWithVersioningAndEvictCache(): ForgeSQLCacheOperations {
    return this.cacheOperations;
  }

  /**
   * Returns a Drizzle query builder instance.
   *
   * ⚠️ IMPORTANT: This method should be used ONLY for query building purposes.
   * The returned instance should NOT be used for direct database connections or query execution.
   * All database operations should be performed through Forge SQL's executeRawSQL or executeRawUpdateSQL methods.
   *
   * @returns A Drizzle query builder instance for query construction only.
   */
  getDrizzleQueryBuilder(): MySqlRemoteDatabase<Record<string, unknown>> & {
    selectAliased: SelectAliasedType;
    selectAliasedDistinct: SelectAliasedDistinctType;
    selectAliasedCacheable: SelectAliasedCacheableType;
    selectAliasedDistinctCacheable: SelectAliasedDistinctCacheableType;
    insertWithCacheContext: InsertAndEvictCacheType;
    insertAndEvictCache: InsertAndEvictCacheType;
    updateAndEvictCache: UpdateAndEvictCacheType;
    updateWithCacheContext: UpdateAndEvictCacheType;
    deleteAndEvictCache: DeleteAndEvictCacheType;
    deleteWithCacheContext: DeleteAndEvictCacheType;
  } {
    return this.drizzle;
  }

  /**
   * Creates a select query with unique field aliases to prevent field name collisions in joins.
   * This is particularly useful when working with Atlassian Forge SQL, which collapses fields with the same name in joined tables.
   *
   * @template TSelection - The type of the selected fields
   * @param {TSelection} fields - Object containing the fields to select, with table schemas as values
   * @returns {MySqlSelectBuilder<TSelection, MySql2PreparedQueryHKT>} A select query builder with unique field aliases
   * @throws {Error} If fields parameter is empty
   * @example
   * ```typescript
   * await forgeSQL
   *   .select({user: users, order: orders})
   *   .from(orders)
   *   .innerJoin(users, eq(orders.userId, users.id));
   * ```
   */
  select<TSelection extends SelectedFields>(
    fields: TSelection,
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT> {
    if (!fields) {
      throw new Error("fields is empty");
    }
    return this.drizzle.selectAliased(fields);
  }

  /**
   * Creates a distinct select query with unique field aliases to prevent field name collisions in joins.
   * This is particularly useful when working with Atlassian Forge SQL, which collapses fields with the same name in joined tables.
   *
   * @template TSelection - The type of the selected fields
   * @param {TSelection} fields - Object containing the fields to select, with table schemas as values
   * @returns {MySqlSelectBuilder<TSelection, MySql2PreparedQueryHKT>} A distinct select query builder with unique field aliases
   * @throws {Error} If fields parameter is empty
   * @example
   * ```typescript
   * await forgeSQL
   *   .selectDistinct({user: users, order: orders})
   *   .from(orders)
   *   .innerJoin(users, eq(orders.userId, users.id));
   * ```
   */
  selectDistinct<TSelection extends SelectedFields>(
    fields: TSelection,
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT> {
    if (!fields) {
      throw new Error("fields is empty");
    }
    return this.drizzle.selectAliasedDistinct(fields);
  }

  /**
   * Creates a cacheable select query with unique field aliases to prevent field name collisions in joins.
   * This is particularly useful when working with Atlassian Forge SQL, which collapses fields with the same name in joined tables.
   *
   * @template TSelection - The type of the selected fields
   * @param {TSelection} fields - Object containing the fields to select, with table schemas as values
   * @param {number} cacheTTL - cache ttl optional default is 60 sec.
   * @returns {MySqlSelectBuilder<TSelection, MySql2PreparedQueryHKT>} A select query builder with unique field aliases
   * @throws {Error} If fields parameter is empty
   * @example
   * ```typescript
   * await forgeSQL
   *   .selectCacheable({user: users, order: orders},60)
   *   .from(orders)
   *   .innerJoin(users, eq(orders.userId, users.id));
   * ```
   */
  selectCacheable<TSelection extends SelectedFields>(
    fields: TSelection,
    cacheTTL?: number,
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT> {
    if (!fields) {
      throw new Error("fields is empty");
    }
    return this.drizzle.selectAliasedCacheable(fields, cacheTTL);
  }

  /**
   * Creates a cacheable distinct select query with unique field aliases to prevent field name collisions in joins.
   * This is particularly useful when working with Atlassian Forge SQL, which collapses fields with the same name in joined tables.
   *
   * @template TSelection - The type of the selected fields
   * @param {TSelection} fields - Object containing the fields to select, with table schemas as values
   * @param {number} cacheTTL - cache ttl optional default is 60 sec.
   * @returns {MySqlSelectBuilder<TSelection, MySql2PreparedQueryHKT>} A distinct select query builder with unique field aliases
   * @throws {Error} If fields parameter is empty
   * @example
   * ```typescript
   * await forgeSQL
   *   .selectDistinctCacheable({user: users, order: orders}, 60)
   *   .from(orders)
   *   .innerJoin(users, eq(orders.userId, users.id));
   * ```
   */
  selectDistinctCacheable<TSelection extends SelectedFields>(
    fields: TSelection,
    cacheTTL?: number,
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT> {
    if (!fields) {
      throw new Error("fields is empty");
    }
    return this.drizzle.selectAliasedDistinctCacheable(fields, cacheTTL);
  }
}

/**
 * Public class that acts as a wrapper around the private ForgeSQLORMImpl.
 * Provides a clean interface for working with Forge SQL and Drizzle ORM.
 */
class ForgeSQLORM implements ForgeSqlOperation {
  private readonly ormInstance: ForgeSqlOperation;

  constructor(options?: ForgeSqlOrmOptions) {
    this.ormInstance = ForgeSQLORMImpl.getInstance(options);
  }

  selectCacheable<TSelection extends SelectedFields>(
    fields: TSelection,
    cacheTTL?: number,
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT> {
    return this.ormInstance.selectCacheable(fields, cacheTTL);
  }

  selectDistinctCacheable<TSelection extends SelectedFields>(
    fields: TSelection,
    cacheTTL?: number,
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT> {
    return this.ormInstance.selectDistinctCacheable(fields, cacheTTL);
  }

  executeWithCacheContext(cacheContext: () => Promise<void>): Promise<void> {
    return this.ormInstance.executeWithCacheContext(cacheContext);
  }
  executeWithCacheContextAndReturnValue<T>(cacheContext: () => Promise<T>): Promise<T> {
    return this.ormInstance.executeWithCacheContextAndReturnValue(cacheContext);
  }
  /**
   * Executes operations within a local cache context.
   * This provides in-memory caching for select queries within a single request scope.
   * 
   * @param cacheContext - Function containing operations that will benefit from local caching
   * @returns Promise that resolves when all operations are complete
   */
  executeWithLocalContext(cacheContext: () => Promise<void>): Promise<void> {
    return this.ormInstance.executeWithLocalContext(cacheContext);
  }

  /**
   * Executes operations within a local cache context and returns a value.
   * This provides in-memory caching for select queries within a single request scope.
   * 
   * @param cacheContext - Function containing operations that will benefit from local caching
   * @returns Promise that resolves to the return value of the cacheContext function
   */
  executeWithLocalCacheContextAndReturnValue<T>(cacheContext: () => Promise<T>): Promise<T> {
    return this.ormInstance.executeWithLocalCacheContextAndReturnValue(cacheContext);
  }

  /**
   * Creates an insert query builder.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned inserts, use `modifyWithVersioning().insert()` or `modifyWithVersioningAndEvictCache().insert()` instead.
   *
   * @param table - The table to insert into
   * @returns Insert query builder (no versioning, no cache management)
   */
  insert<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlInsertBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
    return this.ormInstance.insert(table);
  }

  /**
   * Creates an insert query builder that automatically evicts cache after execution.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned inserts, use `modifyWithVersioning().insert()` or `modifyWithVersioningAndEvictCache().insert()` instead.
   *
   * @param table - The table to insert into
   * @returns Insert query builder with automatic cache eviction (no versioning)
   */
  insertAndEvictCache<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlInsertBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
    return this.ormInstance.insertAndEvictCache(table);
  }

  /**
   * Creates an update query builder.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned updates, use `modifyWithVersioning().updateById()` or `modifyWithVersioningAndEvictCache().updateById()` instead.
   *
   * @param table - The table to update
   * @returns Update query builder (no versioning, no cache management)
   */
  update<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlUpdateBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
    return this.ormInstance.update(table);
  }

  /**
   * Creates an update query builder that automatically evicts cache after execution.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned updates, use `modifyWithVersioning().updateById()` or `modifyWithVersioningAndEvictCache().updateById()` instead.
   *
   * @param table - The table to update
   * @returns Update query builder with automatic cache eviction (no versioning)
   */
  updateAndEvictCache<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlUpdateBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
    return this.ormInstance.updateAndEvictCache(table);
  }

  /**
   * Creates a delete query builder.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned deletes, use `modifyWithVersioning().deleteById()` or `modifyWithVersioningAndEvictCache().deleteById()` instead.
   *
   * @param table - The table to delete from
   * @returns Delete query builder (no versioning, no cache management)
   */
  delete<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlDeleteBase<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
    return this.ormInstance.delete(table);
  }

  /**
   * Creates a delete query builder that automatically evicts cache after execution.
   *
   * ⚠️ **IMPORTANT**: This method does NOT support optimistic locking/versioning.
   * For versioned deletes, use `modifyWithVersioning().deleteById()` or `modifyWithVersioningAndEvictCache().deleteById()` instead.
   *
   * @param table - The table to delete from
   * @returns Delete query builder with automatic cache eviction (no versioning)
   */
  deleteAndEvictCache<TTable extends MySqlTable>(
    table: TTable,
  ): MySqlDeleteBase<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT> {
    return this.ormInstance.deleteAndEvictCache(table);
  }

  /**
   * Creates a select query with unique field aliases to prevent field name collisions in joins.
   * This is particularly useful when working with Atlassian Forge SQL, which collapses fields with the same name in joined tables.
   *
   * @template TSelection - The type of the selected fields
   * @param {TSelection} fields - Object containing the fields to select, with table schemas as values
   * @returns {MySqlSelectBuilder<TSelection, MySql2PreparedQueryHKT>} A select query builder with unique field aliases
   * @throws {Error} If fields parameter is empty
   * @example
   * ```typescript
   * await forgeSQL
   *   .select({user: users, order: orders})
   *   .from(orders)
   *   .innerJoin(users, eq(orders.userId, users.id));
   * ```
   */
  select<TSelection extends SelectedFields>(
    fields: TSelection,
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT> {
    return this.ormInstance.select(fields);
  }

  /**
   * Creates a distinct select query with unique field aliases to prevent field name collisions in joins.
   * This is particularly useful when working with Atlassian Forge SQL, which collapses fields with the same name in joined tables.
   *
   * @template TSelection - The type of the selected fields
   * @param {TSelection} fields - Object containing the fields to select, with table schemas as values
   * @returns {MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>} A distinct select query builder with unique field aliases
   * @throws {Error} If fields parameter is empty
   * @example
   * ```typescript
   * await forgeSQL
   *   .selectDistinct({user: users, order: orders})
   *   .from(orders)
   *   .innerJoin(users, eq(orders.userId, users.id));
   * ```
   */
  selectDistinct<TSelection extends SelectedFields>(
    fields: TSelection,
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT> {
    return this.ormInstance.selectDistinct(fields);
  }

  /**
   * Proxies the `modify` method from `ForgeSQLORMImpl`.
   * @returns Modify operations.
   */
  modifyWithVersioning(): VerioningModificationForgeSQL {
    return this.ormInstance.modifyWithVersioning();
  }

  /**
   * Proxies the `fetch` method from `ForgeSQLORMImpl`.
   * @returns Fetch operations.
   */
  fetch(): SchemaSqlForgeSql {
    return this.ormInstance.fetch();
  }

  /**
   * Provides query analysis capabilities including EXPLAIN ANALYZE and slow query analysis.
   * @returns {SchemaAnalyzeForgeSql} Interface for analyzing query performance
   */
  analyze(): SchemaAnalyzeForgeSql {
    return this.ormInstance.analyze();
  }

  /**
   * Provides schema-level SQL cacheable operations with type safety.
   * @returns {ForgeSQLCacheOperations} Interface for executing schema-bound SQL queries
   */
  modifyWithVersioningAndEvictCache(): ForgeSQLCacheOperations {
    return this.ormInstance.modifyWithVersioningAndEvictCache();
  }

  /**
   * Returns a Drizzle query builder instance.
   *
   * @returns A Drizzle query builder instance for query construction only.
   */
  getDrizzleQueryBuilder() {
    return this.ormInstance.getDrizzleQueryBuilder();
  }
}

export default ForgeSQLORM;

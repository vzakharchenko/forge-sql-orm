import { UpdateQueryResponse } from "@forge/sql";
import { SqlParameters } from "@forge/sql/out/sql-statement";
import {
  AnyMySqlSelectQueryBuilder,
  AnyMySqlTable,
  customType,
  MySqlSelectBuilder,
  MySqlTable,
} from "drizzle-orm/mysql-core";
import {
  MySqlSelectDynamic,
  type SelectedFields,
} from "drizzle-orm/mysql-core/query-builders/select.types";
import { InferInsertModel, Query, SQL } from "drizzle-orm";
import { parseDateTime, formatDateTime } from "../utils/sqlUtils";
import { MySqlRemoteDatabase, MySqlRemotePreparedQueryHKT } from "drizzle-orm/mysql-proxy";
import { SqlHints } from "../utils/sqlHints";
import {
  ClusterStatementRowCamelCase,
  ExplainAnalyzeRow,
  SlowQueryNormalized,
} from "./SystemTables";
import { ForgeSQLCacheOperations } from "./ForgeSQLCacheOperations";
import {
    DeleteAndEvictCacheType, ExecuteQuery, ExecuteQueryCacheable,
    InsertAndEvictCacheType,
    SelectAliasedCacheableType,
    SelectAliasedDistinctCacheableType,
    SelectAliasedDistinctType,
    SelectAliasedType, SelectAllDistinctFromAliasedType,
    SelectAllDistinctFromCacheableAliasedType, SelectAllFromAliasedType, SelectAllFromCacheableAliasedType,
    UpdateAndEvictCacheType,
} from "..";
import {
  MySqlDeleteBase,
  MySqlInsertBuilder,
    MySqlSelectBase,
  MySqlUpdateBuilder,
} from "drizzle-orm/mysql-core/query-builders";
import { MySqlRemoteQueryResultHKT } from "drizzle-orm/mysql-proxy";
import {GetSelectTableName, GetSelectTableSelection} from "drizzle-orm/query-builders/select.types";
import {SQLWrapper} from "drizzle-orm/sql/sql";
import type {MySqlQueryResultKind} from "drizzle-orm/mysql-core/session";
import type {WithBuilder} from "drizzle-orm/mysql-core/subquery";
import {WithSubquery} from "drizzle-orm/subquery";

/**
 * Core interface for ForgeSQL operations.
 * Provides access to CRUD operations, schema-level SQL operations, and query analysis capabilities.
 *
 * This is the main interface that developers interact with when using ForgeSQL ORM.
 * It combines query building capabilities with database operations and caching.
 *
 * @interface ForgeSqlOperation
 * @extends {QueryBuilderForgeSql}
 */
export interface ForgeSqlOperation extends QueryBuilderForgeSql {
  /**
   * Creates a new query builder for the given entity.
   * @returns {MySqlRemoteDatabase<Record<string, unknown>>} The Drizzle database instance for building queries
   */
  getDrizzleQueryBuilder(): MySqlRemoteDatabase<Record<string, unknown>> & {
    selectAliased: SelectAliasedType;
    selectAliasedDistinct: SelectAliasedDistinctType;
      executeQuery: ExecuteQuery;
      selectAliasedCacheable: SelectAliasedCacheableType;
      selectAliasedDistinctCacheable: SelectAliasedDistinctCacheableType;
      executeQueryCacheable: ExecuteQueryCacheable;
      insertWithCacheContext: InsertAndEvictCacheType;
      insertAndEvictCache: InsertAndEvictCacheType;
      updateAndEvictCache: UpdateAndEvictCacheType;
      updateWithCacheContext: UpdateAndEvictCacheType;
      deleteAndEvictCache: DeleteAndEvictCacheType;
      deleteWithCacheContext: DeleteAndEvictCacheType;
      selectFrom: SelectAllFromAliasedType;
      selectDistinctFrom: SelectAllDistinctFromAliasedType;
      selectFromCacheable: SelectAllFromCacheableAliasedType;
      selectDistinctFromCacheable: SelectAllDistinctFromCacheableAliasedType;
  };

  /**
   * Provides modify (Create, Update, Delete) operations with optimistic locking support.
   * @returns {VerioningModificationForgeSQL} Interface for performing CRUD operations
   */
  modifyWithVersioning(): VerioningModificationForgeSQL;

  /**
   * Provides schema-level SQL fetch operations with type safety.
   * @returns {SchemaSqlForgeSql} Interface for executing schema-bound SQL queries
   */
  fetch(): SchemaSqlForgeSql;

  /**
   * Provides query analysis capabilities including EXPLAIN ANALYZE and slow query analysis.
   * @returns {SchemaAnalyzeForgeSql} Interface for analyzing query performance
   */
  analyze(): SchemaAnalyzeForgeSql;

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
  modifyWithVersioningAndEvictCache(): ForgeSQLCacheOperations;
}

/**
 * Interface for Query Builder operations.
 * Provides access to the underlying Drizzle ORM query builder with enhanced functionality.
 *
 * This interface extends Drizzle's query building capabilities with:
 * - Field aliasing to prevent name collisions in joins
 * - Caching support for select operations
 * - Automatic cache eviction for modify operations
 *
 * @interface QueryBuilderForgeSql
 */
export interface QueryBuilderForgeSql {
  /**
   * Creates a new query builder for the given entity.
   * @returns {MySqlRemoteDatabase<Record<string, unknown>>} The Drizzle database instance for building queries
   */
  getDrizzleQueryBuilder(): MySqlRemoteDatabase<Record<string, unknown>> & {
    selectAliased: SelectAliasedType;
    selectAliasedDistinct: SelectAliasedDistinctType;
      executeQuery: ExecuteQuery;
    selectAliasedCacheable: SelectAliasedCacheableType;
    selectAliasedDistinctCacheable: SelectAliasedDistinctCacheableType;
      executeQueryCacheable: ExecuteQueryCacheable;
    insertWithCacheContext: InsertAndEvictCacheType;
    insertAndEvictCache: InsertAndEvictCacheType;
    updateAndEvictCache: UpdateAndEvictCacheType;
    updateWithCacheContext: UpdateAndEvictCacheType;
    deleteAndEvictCache: DeleteAndEvictCacheType;
    deleteWithCacheContext: DeleteAndEvictCacheType;
  };

  /**
   * Creates a select query with unique field aliases to prevent field name collisions in joins.
   * This is particularly useful when working with Atlassian Forge SQL, which collapses fields with the same name in joined tables.
   *
   * @template TSelection - The type of the selected fields
   * @param {TSelection} fields - Object containing the fields to select, with table schemas as values
   * @returns {MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>} A select query builder with unique field aliases
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
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;

  /**
   * Creates a select query builder for all columns from a table with field aliasing support.
   * This is a convenience method that automatically selects all columns from the specified table.
   *
   * @template T - The type of the table
   * @param table - The table to select from
   * @returns Select query builder with all table columns and field aliasing support
   * @example
   * ```typescript
   * const users = await forgeSQL.selectFrom(userTable).where(eq(userTable.id, 1));
   * ```
   */
  selectFrom<T extends MySqlTable>(
      table: T,
  ):  MySqlSelectBase<GetSelectTableName<T>, T["_"]["columns"] extends undefined ? GetSelectTableSelection<T> : T["_"]["columns"], T["_"]["columns"] extends undefined ? "single" : "partial", MySqlRemotePreparedQueryHKT, GetSelectTableName<T> extends string ? Record<string & GetSelectTableName<T>, "not-null"> : {}, false, never, any>;

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
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;
    /**
     * Creates a select distinct query builder for all columns from a table with field aliasing support.
     * This is a convenience method that automatically selects all distinct columns from the specified table.
     *
     * @template T - The type of the table
     * @param table - The table to select from
     * @returns Select distinct query builder with all table columns and field aliasing support
     * @example
     * ```typescript
     * const uniqueUsers = await forgeSQL.selectDistinctFrom(userTable).where(eq(userTable.status, 'active'));
     * ```
     */
    selectDistinctFrom<T extends MySqlTable>(
        table: T,
    ):  MySqlSelectBase<GetSelectTableName<T>, T["_"]["columns"] extends undefined ? GetSelectTableSelection<T> : T["_"]["columns"], T["_"]["columns"] extends undefined ? "single" : "partial", MySqlRemotePreparedQueryHKT, GetSelectTableName<T> extends string ? Record<string & GetSelectTableName<T>, "not-null"> : {}, false, never, any>;

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
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;

  /**
   * Creates a cacheable select query builder for all columns from a table with field aliasing and caching support.
   * This is a convenience method that automatically selects all columns from the specified table with caching enabled.
   *
   * @template T - The type of the table
   * @param table - The table to select from
   * @param cacheTTL - Optional cache TTL override (defaults to global cache TTL)
   * @returns Select query builder with all table columns, field aliasing, and caching support
   * @example
   * ```typescript
   * const users = await forgeSQL.selectCacheableFrom(userTable, 300).where(eq(userTable.id, 1));
   * ```
   */
  selectCacheableFrom<T extends MySqlTable>(
        table: T,
        cacheTTL?: number,
    ):  MySqlSelectBase<GetSelectTableName<T>, T["_"]["columns"] extends undefined ? GetSelectTableSelection<T> : T["_"]["columns"], T["_"]["columns"] extends undefined ? "single" : "partial", MySqlRemotePreparedQueryHKT, GetSelectTableName<T> extends string ? Record<string & GetSelectTableName<T>, "not-null"> : {}, false, never, any>;

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
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;

    /**
     * Creates a cacheable select distinct query builder for all columns from a table with field aliasing and caching support.
     * This is a convenience method that automatically selects all distinct columns from the specified table with caching enabled.
     *
     * @template T - The type of the table
     * @param table - The table to select from
     * @param cacheTTL - Optional cache TTL override (defaults to global cache TTL)
     * @returns Select distinct query builder with all table columns, field aliasing, and caching support
     * @example
     * ```typescript
     * const uniqueUsers = await forgeSQL.selectDistinctCacheableFrom(userTable, 300).where(eq(userTable.status, 'active'));
     * ```
     */
    selectDistinctCacheableFrom<T extends MySqlTable>(
        table: T,
        cacheTTL?: number,
    ):  MySqlSelectBase<GetSelectTableName<T>, T["_"]["columns"] extends undefined ? GetSelectTableSelection<T> : T["_"]["columns"], T["_"]["columns"] extends undefined ? "single" : "partial", MySqlRemotePreparedQueryHKT, GetSelectTableName<T> extends string ? Record<string & GetSelectTableName<T>, "not-null"> : {}, false, never, any>;

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
  ): MySqlInsertBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;

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
  ): MySqlInsertBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;

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
  ): MySqlUpdateBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;

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
  ): MySqlUpdateBuilder<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;

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
  ): MySqlDeleteBase<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;
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
  ): MySqlDeleteBase<TTable, MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT>;

  /**
   * Executes operations within a cache context that collects cache eviction events.
   * All clearCache calls within the context are collected and executed in batch at the end.
   * Queries executed within this context will bypass cache for tables that were marked for clearing.
   *
   * @param cacheContext - Function containing operations that may trigger cache evictions
   * @returns Promise that resolves when all operations and cache clearing are complete
   */
  executeWithCacheContext(cacheContext: () => Promise<void>): Promise<void>;

  /**
   * Executes operations within a cache context and returns a value.
   * All clearCache calls within the context are collected and executed in batch at the end.
   * Queries executed within this context will bypass cache for tables that were marked for clearing.
   *
   * @param cacheContext - Function containing operations that may trigger cache evictions
   * @returns Promise that resolves to the return value of the cacheContext function
   */
  executeWithCacheContextAndReturnValue<T>(cacheContext: () => Promise<T>): Promise<T>;

  /**
   * Executes operations within a local cache context that provides in-memory caching for select queries.
   * This is useful for optimizing queries within a single resolver or request scope.
   *
   * Local cache features:
   * - Caches select query results in memory for the duration of the context
   * - Automatically evicts cache when insert/update/delete operations are performed
   * - Provides faster access to repeated queries within the same context
   * - Does not persist across different requests or contexts
   *
   * @param cacheContext - Function containing operations that will benefit from local caching
   * @returns Promise that resolves when all operations are complete
   *
   * @example
   * ```typescript
   * await forgeSQL.executeWithLocalContext(async () => {
   *   // First call - executes query and caches result
   *   const users = await forgeSQL.select({ id: users.id, name: users.name })
   *     .from(users).where(eq(users.active, true));
   *
   *   // Second call - gets result from local cache (no database query)
   *   const cachedUsers = await forgeSQL.select({ id: users.id, name: users.name })
   *     .from(users).where(eq(users.active, true));
   *
   *   // Insert operation - evicts local cache
   *   await forgeSQL.insert(users).values({ name: 'New User', active: true });
   * });
   * ```
   */
  executeWithLocalContext(cacheContext: () => Promise<void>): Promise<void>;

  /**
   * Executes operations within a local cache context and returns a value.
   * This is useful for optimizing queries within a single resolver or request scope.
   *
   * Local cache features:
   * - Caches select query results in memory for the duration of the context
   * - Automatically evicts cache when insert/update/delete operations are performed
   * - Provides faster access to repeated queries within the same context
   * - Does not persist across different requests or contexts
   *
   * @param cacheContext - Function containing operations that will benefit from local caching
   * @returns Promise that resolves to the return value of the cacheContext function
   *
   * @example
   * ```typescript
   * const result = await forgeSQL.executeWithLocalCacheContextAndReturnValue(async () => {
   *   // First call - executes query and caches result
   *   const users = await forgeSQL.select({ id: users.id, name: users.name })
   *     .from(users).where(eq(users.active, true));
   *
   *   // Second call - gets result from local cache (no database query)
   * const cachedUsers = await forgeSQL.select({ id: users.id, name: users.name })
   *     .from(users).where(eq(users.active, true));
   *
   *   return { users, cachedUsers };
   * });
   * ```
   */
  executeWithLocalCacheContextAndReturnValue<T>(cacheContext: () => Promise<T>): Promise<T>;

  /**
   * Executes a raw SQL query with local cache support.
   * This method provides local caching for raw SQL queries within the current invocation context.
   * Results are cached locally and will be returned from cache on subsequent identical queries.
   *
   * @param query - The SQL query to execute (SQLWrapper or string)
   * @returns Promise with query results
   * @example
   * ```typescript
   * // Using SQLWrapper
   * const result = await forgeSQL.execute(sql`SELECT * FROM users WHERE id = ${userId}`);
   * 
   * // Using string
   * const result = await forgeSQL.execute("SELECT * FROM users WHERE status = 'active'");
   * ```
   */
  execute(query: SQLWrapper | string): Promise<MySqlQueryResultKind<MySqlRemoteQueryResultHKT, unknown>>;

  /**
   * Executes a raw SQL query with both local and global cache support.
   * This method provides comprehensive caching for raw SQL queries:
   * - Local cache: Within the current invocation context
   * - Global cache: Cross-invocation caching using @forge/kvs
   *
   * @param query - The SQL query to execute (SQLWrapper or string)
   * @param cacheTtl - Optional cache TTL override (defaults to global cache TTL)
   * @returns Promise with query results
   * @example
   * ```typescript
   * // Using SQLWrapper with custom TTL
   * const result = await forgeSQL.executeCacheable(sql`SELECT * FROM users WHERE id = ${userId}`, 300);
   * 
   * // Using string with default TTL
   * const result = await forgeSQL.executeCacheable("SELECT * FROM users WHERE status = 'active'");
   * ```
   */
  executeCacheable(query: SQLWrapper | string, cacheTtl?: number): Promise<MySqlQueryResultKind<MySqlRemoteQueryResultHKT, unknown>>;
    /**
     * Creates a Common Table Expression (CTE) builder for complex queries.
     * CTEs allow you to define temporary named result sets that exist within the scope of a single query.
     *
     * @returns WithBuilder for creating CTEs
     * @example
     * ```typescript
     * const withQuery = forgeSQL.$with('userStats').as(
     *   forgeSQL.select({ userId: users.id, count: sql<number>`count(*)` })
     *     .from(users)
     *     .groupBy(users.id)
     * );
     * ```
     */
    $with: WithBuilder;

    /**
     * Creates a query builder that uses Common Table Expressions (CTEs).
     * CTEs allow you to define temporary named result sets that exist within the scope of a single query.
     *
     * @param queries - Array of CTE queries created with $with()
     * @returns Query builder with CTE support
     * @example
     * ```typescript
     * const withQuery = forgeSQL.$with('userStats').as(
     *   forgeSQL.select({ userId: users.id, count: sql<number>`count(*)` })
     *     .from(users)
     *     .groupBy(users.id)
     * );
     * 
     * const result = await forgeSQL.with(withQuery)
     *   .select({ userId: withQuery.userId, count: withQuery.count })
     *   .from(withQuery);
     * ```
     */
    with(...queries: WithSubquery[]): {
        select: {
            (): MySqlSelectBuilder<undefined, MySqlRemotePreparedQueryHKT>;
            <TSelection extends SelectedFields>(fields: TSelection): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;
        };
        selectDistinct: {
            (): MySqlSelectBuilder<undefined, MySqlRemotePreparedQueryHKT>;
            <TSelection extends SelectedFields>(fields: TSelection): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;
        };
    }
}

/**
 * Interface for Modify (Create, Update, Delete) operations.
 * Provides methods for basic database operations with support for optimistic locking.
 *
 * @interface VerioningModificationForgeSQL
 */
export interface VerioningModificationForgeSQL {
  /**
   * Inserts multiple records into the database.
   * @template T - The type of the table schema
   * @param {T} schema - The entity schema
   * @param {InferInsertModel<T>[]} models - The list of entities to insert
   * @param {boolean} [updateIfExists] - Whether to update the row if it already exists (default: false)
   * @returns {Promise<number>} The number of inserted rows
   * @throws {Error} If the insert operation fails
   */
  insert<T extends AnyMySqlTable>(
    schema: T,
    models: InferInsertModel<T>[],
    updateIfExists?: boolean,
  ): Promise<number>;

  /**
   * Deletes a record by its ID.
   * @template T - The type of the table schema
   * @param {unknown} id - The ID of the record to delete
   * @param {T} schema - The entity schema
   * @returns {Promise<number>} The number of rows affected
   * @throws {Error} If the delete operation fails
   */
  deleteById<T extends AnyMySqlTable>(id: unknown, schema: T): Promise<number>;

  /**
   * Updates a record by its ID with optimistic locking support.
   * If a version field is defined in the schema, versioning is applied:
   * - the current record version is retrieved
   * - checked for concurrent modifications
   * - and then incremented
   *
   * @template T - The type of the table schema
   * @param {Partial<InferInsertModel<T>>} entity - The entity with updated values
   * @param {T} schema - The entity schema
   * @returns {Promise<number>} The number of rows affected
   * @throws {Error} If the primary key is not included in the update fields
   * @throws {Error} If optimistic locking check fails
   */
  updateById<T extends AnyMySqlTable>(
    entity: Partial<InferInsertModel<T>>,
    schema: T,
  ): Promise<number>;

  /**
   * Updates specified fields of records based on provided conditions.
   * If the "where" parameter is not provided, the WHERE clause is built from the entity fields
   * that are not included in the list of fields to update.
   *
   * @template T - The type of the table schema
   * @param {Partial<InferInsertModel<T>>} updateData - The object containing values to update
   * @param {T} schema - The entity schema
   * @param {SQL<unknown>} [where] - Optional filtering conditions for the WHERE clause
   * @returns {Promise<number>} The number of affected rows
   * @throws {Error} If no filtering criteria are provided
   * @throws {Error} If the update operation fails
   */
  updateFields<T extends AnyMySqlTable>(
    updateData: Partial<InferInsertModel<T>>,
    schema: T,
    where?: SQL<unknown>,
  ): Promise<number>;
}

export interface CacheForgeSQL extends VerioningModificationForgeSQL {
  evictCache(tables: string[]): Promise<void>;
  evictCacheEntities(tables: AnyMySqlTable[]): Promise<void>;
}

/**
 * Interface for schema analysis operations.
 * Provides methods for analyzing query performance and execution plans.
 *
 * @interface SchemaAnalyzeForgeSql
 */
export interface SchemaAnalyzeForgeSql {
  /**
   * Executes EXPLAIN on a Drizzle query.
   * @param {{ toSQL: () => Query }} query - The Drizzle query to analyze
   * @returns {Promise<ExplainAnalyzeRow[]>} The execution plan analysis results
   */
  explain(query: { toSQL: () => Query }): Promise<ExplainAnalyzeRow[]>;

  /**
   * Executes EXPLAIN on a raw SQL query.
   * @param {string} query - The SQL query to analyze
   * @param {unknown[]} bindParams - The query parameters
   * @returns {Promise<ExplainAnalyzeRow[]>} The execution plan analysis results
   */
  explainRaw(query: string, bindParams: unknown[]): Promise<ExplainAnalyzeRow[]>;

  /**
   * Executes EXPLAIN ANALYZE on a Drizzle query.
   * @param {{ toSQL: () => Query }} query - The Drizzle query to analyze
   * @returns {Promise<ExplainAnalyzeRow[]>} The execution plan analysis results
   */
  explainAnalyze(query: { toSQL: () => Query }): Promise<ExplainAnalyzeRow[]>;

  /**
   * Executes EXPLAIN ANALYZE on a raw SQL query.
   * @param {string} query - The SQL query to analyze
   * @param {unknown[]} bindParams - The query parameters
   * @returns {Promise<ExplainAnalyzeRow[]>} The execution plan analysis results
   */
  explainAnalyzeRaw(query: string, bindParams: unknown[]): Promise<ExplainAnalyzeRow[]>;

  /**
   * Analyzes slow queries from the database.
   * @returns {Promise<SlowQueryNormalized[]>} The normalized slow query data
   */
  analyzeSlowQueries(): Promise<SlowQueryNormalized[]>;

  /**
   * Analyzes query history for specific tables using Drizzle table objects.
   * @param {AnyMySqlTable[]} tables - The Drizzle table objects to analyze
   * @param {Date} [fromDate] - The start date for the analysis
   * @param {Date} [toDate] - The end date for the analysis
   * @returns {Promise<ClusterStatementRowCamelCase[]>} The analyzed query history
   */
  analyzeQueriesHistory(
    tables: AnyMySqlTable[],
    fromDate?: Date,
    toDate?: Date,
  ): Promise<ClusterStatementRowCamelCase[]>;

  /**
   * Analyzes query history for specific tables using raw table names.
   * @param {string[]} tables - The table names to analyze
   * @param {Date} [fromDate] - The start date for the analysis
   * @param {Date} [toDate] - The end date for the analysis
   * @returns {Promise<ClusterStatementRowCamelCase[]>} The analyzed query history
   */
  analyzeQueriesHistoryRaw(
    tables: string[],
    fromDate?: Date,
    toDate?: Date,
  ): Promise<ClusterStatementRowCamelCase[]>;
}

/**
 * Interface for schema-level SQL operations.
 * Provides methods for executing SQL queries with schema binding and type safety.
 *
 * @interface SchemaSqlForgeSql
 */
export interface SchemaSqlForgeSql {
  /**
   * Executes a Drizzle query and returns a single result.
   * @template T - The type of the query builder
   * @param {T} query - The Drizzle query to execute
   * @returns {Promise<Awaited<T> extends Array<any> ? Awaited<T>[number] | undefined : Awaited<T> | undefined>} A single result object or undefined
   * @throws {Error} If more than one record is returned
   * @throws {Error} If the query execution fails
   */
  executeQueryOnlyOne<T extends MySqlSelectDynamic<AnyMySqlSelectQueryBuilder>>(
    query: T,
  ): Promise<
    Awaited<T> extends Array<any> ? Awaited<T>[number] | undefined : Awaited<T> | undefined
  >;

  /**
   * Executes a raw SQL query and returns the results.
   * @template T - The type of the result objects
   * @param {string} query - The raw SQL query
   * @param {SqlParameters[]} [params] - Optional SQL parameters
   * @returns {Promise<T[]>} A list of results as objects
   * @throws {Error} If the query execution fails
   */
  executeRawSQL<T extends object | unknown>(query: string, params?: SqlParameters[]): Promise<T[]>;

  /**
   * Executes a raw SQL update query.
   *
   * @param query - The raw SQL update query
   * @param params - Optional SQL parameters
   * @returns Promise that resolves to the update response containing affected rows
   * @throws Error if the update operation fails
   */
  executeRawUpdateSQL(query: string, params?: unknown[]): Promise<UpdateQueryResponse>;
}

/**
 * Interface for version field metadata.
 * Defines the configuration for optimistic locking version fields.
 *
 * @interface VersionFieldMetadata
 */
export interface VersionFieldMetadata {
  /** Name of the version field */
  fieldName: string;
}

/**
 * Interface for table metadata.
 * Defines the configuration for a specific table.
 *
 * @interface TableMetadata
 */
export interface TableMetadata {
  /** Name of the table */
  tableName: string;
  /** Version field configuration for optimistic locking */
  versionField: VersionFieldMetadata;
}

/**
 * Type for additional metadata configuration.
 * Maps table names to their metadata configuration.
 *
 * @type {AdditionalMetadata}
 */
export type AdditionalMetadata = Record<string, TableMetadata>;

/**
 * Interface for ForgeSQL ORM options
 *
 * @interface ForgeSqlOrmOptions
 */
export interface ForgeSqlOrmOptions {
  /** Whether to log raw SQL queries */
  logRawSqlQuery?: boolean;
  /** Whether to disable optimistic locking */
  disableOptimisticLocking?: boolean;
  /** SQL hints to be applied to queries */
  hints?: SqlHints;
  cacheTTL?: number;
  cacheEntityName?: string;
  cacheEntityQueryName?: string;
  cacheWrapTable?: boolean;
  cacheEntityExpirationName?: string;
  cacheEntityDataName?: string;

  /**
   * Additional metadata for table configuration.
   * Allows specifying table-specific settings and behaviors.
   * @example
   * ```typescript
   * {
   *   users: {
   *     tableName: "users",
   *     versionField: {
   *       fieldName: "updatedAt",
   *       type: "datetime",
   *       nullable: false
   *     }
   *   }
   * }
   * ```
   */
  additionalMetadata?: AdditionalMetadata;
}

/**
 * Custom type for MySQL datetime fields.
 * Handles conversion between JavaScript Date objects and MySQL datetime strings.
 *
 * @type {CustomType}
 */
export const forgeDateTimeString = customType<{
  data: Date;
  driver: string;
  config: { format?: string };
}>({
  dataType() {
    return "datetime";
  },
  toDriver(value: Date) {
    return formatDateTime(value, "yyyy-LL-dd' 'HH:mm:ss.SSS");
  },
  fromDriver(value: unknown) {
    const format = "yyyy-LL-dd'T'HH:mm:ss.SSS";
    return parseDateTime(value as string, format);
  },
});

/**
 * Custom type for MySQL timestamp fields.
 * Handles conversion between JavaScript Date objects and MySQL timestamp strings.
 *
 * @type {CustomType}
 */
export const forgeTimestampString = customType<{
  data: Date;
  driver: string;
  config: { format?: string };
}>({
  dataType() {
    return "timestamp";
  },
  toDriver(value: Date) {
    return formatDateTime(value, "yyyy-LL-dd' 'HH:mm:ss.SSS");
  },
  fromDriver(value: unknown) {
    const format = "yyyy-LL-dd'T'HH:mm:ss.SSS";
    return parseDateTime(value as string, format);
  },
});

/**
 * Custom type for MySQL date fields.
 * Handles conversion between JavaScript Date objects and MySQL date strings.
 *
 * @type {CustomType}
 */
export const forgeDateString = customType<{
  data: Date;
  driver: string;
  config: { format?: string };
}>({
  dataType() {
    return "date";
  },
  toDriver(value: Date) {
    return formatDateTime(value, "yyyy-LL-dd");
  },
  fromDriver(value: unknown) {
    const format = "yyyy-LL-dd";
    return parseDateTime(value as string, format);
  },
});

/**
 * Custom type for MySQL time fields.
 * Handles conversion between JavaScript Date objects and MySQL time strings.
 *
 * @type {CustomType}
 */
export const forgeTimeString = customType<{
  data: Date;
  driver: string;
  config: { format?: string };
}>({
  dataType() {
    return "time";
  },
  toDriver(value: Date) {
    return formatDateTime(value, "HH:mm:ss.SSS");
  },
  fromDriver(value: unknown) {
    return parseDateTime(value as string, "HH:mm:ss.SSS");
  },
});

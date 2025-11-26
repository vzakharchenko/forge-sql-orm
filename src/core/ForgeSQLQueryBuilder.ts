import { Result, UpdateQueryResponse } from "@forge/sql";
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
import {
  MySqlRemoteDatabase,
  MySqlRemotePreparedQueryHKT,
  MySqlRemoteQueryResultHKT,
} from "drizzle-orm/mysql-proxy";
import { SqlHints } from "../utils/sqlHints";
import {
  ClusterStatementRowCamelCase,
  ExplainAnalyzeRow,
  SlowQueryNormalized,
} from "./SystemTables";
import { ForgeSQLCacheOperations } from "./ForgeSQLCacheOperations";
import {
  DeleteAndEvictCacheType,
  ExecuteQuery,
  ExecuteQueryCacheable,
  InsertAndEvictCacheType,
  SelectAliasedCacheableType,
  SelectAliasedDistinctCacheableType,
  SelectAliasedDistinctType,
  SelectAliasedType,
  SelectAllDistinctFromAliasedType,
  SelectAllDistinctFromCacheableAliasedType,
  SelectAllFromAliasedType,
  SelectAllFromCacheableAliasedType,
  UpdateAndEvictCacheType,
} from "..";
import {
  MySqlDeleteBase,
  MySqlInsertBuilder,
  MySqlSelectBase,
  MySqlUpdateBuilder,
} from "drizzle-orm/mysql-core/query-builders";

import {
  GetSelectTableName,
  GetSelectTableSelection,
  SelectResultField,
} from "drizzle-orm/query-builders/select.types";
import { SQLWrapper } from "drizzle-orm/sql/sql";
import type { MySqlQueryResultKind } from "drizzle-orm/mysql-core/session";
import type { WithBuilder } from "drizzle-orm/mysql-core/subquery";
import { WithSubquery } from "drizzle-orm/subquery";
import { MySqlColumn } from "drizzle-orm/mysql-core";
import { MetadataQueryOptions } from "../utils/metadataContextUtils";

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

  /**
   * Provides access to Rovo integration - a secure pattern for natural-language analytics.
   *
   * Rovo enables secure execution of dynamic SQL queries with comprehensive security validations:
   * - Only SELECT queries are allowed
   * - Queries are restricted to a single table
   * - JOINs, subqueries, and window functions are blocked
   * - Row-Level Security (RLS) support for data isolation
   *
   * @returns {RovoIntegration} Rovo integration instance for secure dynamic queries
   *
   * @example
   * ```typescript
   * const rovo = forgeSQL.rovo();
   * const settings = await rovo.rovoSettingBuilder(usersTable, accountId)
   *   .useRLS()
   *   .addRlsColumn(usersTable.id)
   *   .addRlsWherePart((alias) => `${alias}.id = '${accountId}'`)
   *   .finish()
   *   .build();
   *
   * const result = await rovo.dynamicIsolatedQuery(
   *   "SELECT id, name FROM users WHERE status = 'active'",
   *   settings
   * );
   * ```
   */
  rovo(): RovoIntegration;
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
  ): MySqlSelectBase<
    GetSelectTableName<T>,
    GetSelectTableSelection<T>,
    "single",
    MySqlRemotePreparedQueryHKT,
    GetSelectTableName<T> extends string ? Record<string & GetSelectTableName<T>, "not-null"> : {},
    false,
    never,
    {
      [K in keyof {
        [Key in keyof GetSelectTableSelection<T>]: SelectResultField<
          GetSelectTableSelection<T>[Key]
        >;
      }]: {
        [Key in keyof GetSelectTableSelection<T>]: SelectResultField<
          GetSelectTableSelection<T>[Key]
        >;
      }[K];
    }[],
    any
  >;

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
  ): MySqlSelectBase<
    GetSelectTableName<T>,
    GetSelectTableSelection<T>,
    "single",
    MySqlRemotePreparedQueryHKT,
    GetSelectTableName<T> extends string ? Record<string & GetSelectTableName<T>, "not-null"> : {},
    false,
    never,
    {
      [K in keyof {
        [Key in keyof GetSelectTableSelection<T>]: SelectResultField<
          GetSelectTableSelection<T>[Key]
        >;
      }]: {
        [Key in keyof GetSelectTableSelection<T>]: SelectResultField<
          GetSelectTableSelection<T>[Key]
        >;
      }[K];
    }[],
    any
  >;

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
  ): MySqlSelectBase<
    GetSelectTableName<T>,
    GetSelectTableSelection<T>,
    "single",
    MySqlRemotePreparedQueryHKT,
    GetSelectTableName<T> extends string ? Record<string & GetSelectTableName<T>, "not-null"> : {},
    false,
    never,
    {
      [K in keyof {
        [Key in keyof GetSelectTableSelection<T>]: SelectResultField<
          GetSelectTableSelection<T>[Key]
        >;
      }]: {
        [Key in keyof GetSelectTableSelection<T>]: SelectResultField<
          GetSelectTableSelection<T>[Key]
        >;
      }[K];
    }[],
    any
  >;

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
  ): MySqlSelectBase<
    GetSelectTableName<T>,
    GetSelectTableSelection<T>,
    "single",
    MySqlRemotePreparedQueryHKT,
    GetSelectTableName<T> extends string ? Record<string & GetSelectTableName<T>, "not-null"> : {},
    false,
    never,
    {
      [K in keyof {
        [Key in keyof GetSelectTableSelection<T>]: SelectResultField<
          GetSelectTableSelection<T>[Key]
        >;
      }]: {
        [Key in keyof GetSelectTableSelection<T>]: SelectResultField<
          GetSelectTableSelection<T>[Key]
        >;
      }[K];
    }[],
    any
  >;

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
   * Executes a query and provides access to execution metadata with performance monitoring.
   * This method allows you to capture detailed information about query execution
   * including database execution time, response size, and query analysis capabilities.
   *
   * The method aggregates metrics across all database operations within the query function,
   * making it ideal for monitoring resolver performance and detecting performance issues.
   *
   * @template T - The return type of the query
   * @param query - A function that returns a Promise with the query result. Can contain multiple database operations.
   * @param onMetadata - Callback function that receives aggregated execution metadata
   * @param onMetadata.totalDbExecutionTime - Total database execution time across all operations in the query function (in milliseconds)
   * @param onMetadata.totalResponseSize - Total response size across all operations (in bytes)
   * @param onMetadata.printQueriesWithPlan - Function to analyze and print query execution plans. Supports two modes:
   *   - TopSlowest: Prints execution plans for the slowest queries from the current resolver (default)
   *   - SummaryTable: Uses CLUSTER_STATEMENTS_SUMMARY if within time window
   * @param options - Optional configuration for query plan printing behavior
   * @param options.mode - Query plan printing mode: 'TopSlowest' (default) or 'SummaryTable'
   * @param options.summaryTableWindowTime - Time window in milliseconds for summary table queries (default: 15000ms). Only used when mode is 'SummaryTable'
   * @param options.topQueries - Number of top slowest queries to analyze when mode is 'TopSlowest' (default: 1)
   * @param options.showSlowestPlans - Whether to show execution plans for slowest queries in TopSlowest mode (default: true)
   * @param options.normalizeQuery - Whether to normalize SQL queries by replacing parameter values with '?' placeholders (default: true). Set to false to disable normalization if it causes issues
   * @returns Promise with the query result
   *
   * @example
   * ```typescript
   * // Basic usage with performance monitoring
   * const result = await forgeSQL.executeWithMetadata(
   *   async () => {
   *     const users = await forgeSQL.selectFrom(usersTable);
   *     const orders = await forgeSQL.selectFrom(ordersTable).where(eq(ordersTable.userId, usersTable.id));
   *     return { users, orders };
   *   },
   *   (totalDbExecutionTime, totalResponseSize, printQueriesWithPlan) => {
   *     const threshold = 500; // ms baseline for this resolver
   *
   *     if (totalDbExecutionTime > threshold * 1.5) {
   *       console.warn(`[Performance Warning] Resolver exceeded DB time: ${totalDbExecutionTime} ms`);
   *       await printQueriesWithPlan(); // Analyze and print query execution plans
   *     } else if (totalDbExecutionTime > threshold) {
   *       console.debug(`[Performance Debug] High DB time: ${totalDbExecutionTime} ms`);
   *     }
   *
   *     console.log(`DB response size: ${totalResponseSize} bytes`);
   *   }
   * );
   * ```
   *
   * @example
   * ```typescript
   * // Resolver with performance monitoring
   * resolver.define("fetch", async (req: Request) => {
   *   try {
   *     return await forgeSQL.executeWithMetadata(
   *       async () => {
   *         // Resolver logic with multiple queries
   *         const users = await forgeSQL.selectFrom(demoUsers);
   *         const orders = await forgeSQL.selectFrom(demoOrders)
   *           .where(eq(demoOrders.userId, demoUsers.id));
   *         return { users, orders };
   *       },
   *       async (totalDbExecutionTime, totalResponseSize, printQueries) => {
   *         const threshold = 500; // ms baseline for this resolver
   *
   *         if (totalDbExecutionTime > threshold * 1.5) {
   *           console.warn(`[Performance Warning fetch] Resolver exceeded DB time: ${totalDbExecutionTime} ms`);
   *           await printQueries(); // Optionally log or capture diagnostics for further analysis
   *         } else if (totalDbExecutionTime > threshold) {
   *           console.debug(`[Performance Debug] High DB time: ${totalDbExecutionTime} ms`);
   *         }
   *
   *         console.log(`DB response size: ${totalResponseSize} bytes`);
   *       }
   *     );
   *   } catch (e) {
   *     const error = e?.cause?.debug?.sqlMessage ?? e?.cause;
   *     console.error(error, e);
   *     throw error;
   *   }
   * });
   * ```
   *
   * @note **Important**: When multiple resolvers are running concurrently, their query data may also appear in `printQueries()` analysis, as it queries the global `CLUSTER_STATEMENTS_SUMMARY` table.
   */
  executeWithMetadata<T>(
    query: () => Promise<T>,
    onMetadata: (
      totalDbExecutionTime: number,
      totalResponseSize: number,
      printQueriesWithPlan: () => Promise<void>,
    ) => Promise<void> | void,
    options?: MetadataQueryOptions,
  ): Promise<T>;
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
  execute<T>(
    query: SQLWrapper | string,
  ): Promise<MySqlQueryResultKind<MySqlRemoteQueryResultHKT, T>>;

  /**
   * Executes a Data Definition Language (DDL) SQL query.
   * DDL operations include CREATE, ALTER, DROP, TRUNCATE, and other schema modification statements.
   *
   * This method is specifically designed for DDL operations and provides:
   * - Proper operation type context for DDL queries
   * - No caching (DDL operations should not be cached)
   * - Direct execution without query optimization
   *
   * @template T - The expected return type of the query result
   * @param query - The DDL SQL query to execute (SQLWrapper or string)
   * @returns Promise with query results
   * @throws {Error} If the DDL operation fails
   *
   * @example
   * ```typescript
   * // Create a new table
   * await forgeSQL.executeDDL(`
   *   CREATE TABLE users (
   *     id INT PRIMARY KEY AUTO_INCREMENT,
   *     name VARCHAR(255) NOT NULL,
   *     email VARCHAR(255) UNIQUE
   *   )
   * `);
   *
   * // Alter table structure
   * await forgeSQL.executeDDL(sql`
   *   ALTER TABLE users
   *   ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   * `);
   *
   * // Drop a table
   * await forgeSQL.executeDDL("DROP TABLE IF EXISTS old_users");
   * ```
   */
  executeDDL<T>(
    query: SQLWrapper | string,
  ): Promise<MySqlQueryResultKind<MySqlRemoteQueryResultHKT, T>>;

  /**
   * Executes a series of actions within a DDL operation context.
   * This method provides a way to execute regular SQL queries that should be treated
   * as DDL operations, ensuring proper operation type context for performance monitoring.
   *
   * This method is useful for:
   * - Executing regular SQL queries in DDL context for monitoring purposes
   * - Wrapping non-DDL operations that should be treated as DDL for analysis
   * - Ensuring proper operation type context for complex workflows
   * - Maintaining DDL operation context across multiple function calls
   *
   * @template T - The return type of the actions function
   * @param actions - Function containing SQL operations to execute in DDL context
   * @returns Promise that resolves to the return value of the actions function
   *
   * @example
   * ```typescript
   * // Execute regular SQL queries in DDL context for monitoring
   * await forgeSQL.executeDDLActions(async () => {
   *   const slowQueries = await forgeSQL.execute(`
   *     SELECT * FROM INFORMATION_SCHEMA.STATEMENTS_SUMMARY
   *     WHERE AVG_LATENCY > 1000000
   *   `);
   *   return slowQueries;
   * });
   *
   * // Execute complex analysis queries in DDL context
   * const result = await forgeSQL.executeDDLActions(async () => {
   *   const tableInfo = await forgeSQL.execute("SHOW TABLES");
   *   const performanceData = await forgeSQL.execute(`
   *     SELECT * FROM INFORMATION_SCHEMA.CLUSTER_STATEMENTS_SUMMARY_HISTORY
   *     WHERE SUMMARY_END_TIME > DATE_SUB(NOW(), INTERVAL 1 HOUR)
   *   `);
   *   return { tableInfo, performanceData };
   * });
   *
   * // Execute monitoring queries with error handling
   * try {
   *   await forgeSQL.executeDDLActions(async () => {
   *     const metrics = await forgeSQL.execute(`
   *       SELECT COUNT(*) as query_count
   *       FROM INFORMATION_SCHEMA.STATEMENTS_SUMMARY
   *     `);
   *     console.log(`Total queries: ${metrics[0].query_count}`);
   *   });
   * } catch (error) {
   *   console.error("Monitoring query failed:", error);
   * }
   * ```
   */
  executeDDLActions<T>(actions: () => Promise<T>): Promise<T>;

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
  executeCacheable<T>(
    query: SQLWrapper | string,
    cacheTtl?: number,
  ): Promise<MySqlQueryResultKind<MySqlRemoteQueryResultHKT, T>>;
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
      <TSelection extends SelectedFields>(
        fields: TSelection,
      ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;
    };
    selectDistinct: {
      (): MySqlSelectBuilder<undefined, MySqlRemotePreparedQueryHKT>;
      <TSelection extends SelectedFields>(
        fields: TSelection,
      ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;
    };
  };
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
 * Interface for Rovo integration settings.
 * Defines configuration for secure dynamic SQL query execution.
 *
 * @interface RovoIntegrationSetting
 */
export interface RovoIntegrationSetting {
  /**
   * Gets the account ID of the active user.
   *
   * @returns {string} The account ID of the active user
   */
  getActiveUser(): string;

  /**
   * Gets the context parameters for query substitution.
   *
   * @returns {Record<string, string>} Map of parameter names to their values
   */
  getParameters(): Record<string, string>;

  /**
   * Gets the name of the table to query.
   *
   * @returns {string} The table name
   */
  getTableName(): string;

  /**
   * Checks if Row-Level Security is enabled.
   *
   * @returns {boolean} True if RLS is enabled, false otherwise
   */
  isUseRLS(): boolean;

  /**
   * Generates the WHERE clause for Row-Level Security filtering.
   *
   * @param {string} alias - The table alias to use in the WHERE clause
   * @returns {string} SQL WHERE clause condition for RLS filtering
   */
  userScopeWhere(alias: string): string;

  /**
   * Gets the list of field names required for RLS validation.
   *
   * @returns {string[]} Array of field names that must be present in SELECT clause for RLS
   */
  userScopeFields(): string[];
}

/**
 * Interface for configuring Row-Level Security (RLS) settings.
 * Provides a fluent API for setting up RLS conditions, required columns, and WHERE clauses.
 *
 * @interface RlsSettings
 */
export interface RlsSettings {
  /**
   * Sets a conditional function to determine if RLS should be applied.
   *
   * @param {() => Promise<boolean>} condition - Async function that returns true if RLS should be enabled
   * @returns {RlsSettings} This builder instance for method chaining
   */
  addRlsCondition(condition: () => Promise<boolean>): RlsSettings;

  /**
   * Adds a column name that must be present in the SELECT clause for RLS validation.
   *
   * @param {string} columnName - The name of the column to require
   * @returns {RlsSettings} This builder instance for method chaining
   */
  addRlsColumnName(columnName: string): RlsSettings;

  /**
   * Adds a Drizzle column that must be present in the SELECT clause for RLS validation.
   *
   * @param {MySqlColumn} column - The Drizzle column object
   * @returns {RlsSettings} This builder instance for method chaining
   */
  addRlsColumn(columnName: MySqlColumn): RlsSettings;

  /**
   * Sets the WHERE clause function for RLS filtering.
   *
   * @param {(alias: string) => string} wherePart - Function that generates WHERE clause
   * @returns {RlsSettings} This builder instance for method chaining
   */
  addRlsWherePart(wherePart: (alias: string) => string): RlsSettings;

  /**
   * Finishes RLS configuration and returns to the settings builder.
   *
   * @returns {RovoIntegrationSettingCreator} The parent settings builder
   */
  finish(): RovoIntegrationSettingCreator;
}

/**
 * Interface for building Rovo integration settings.
 * Provides a fluent API for configuring query settings including context parameters and RLS.
 *
 * @interface RovoIntegrationSettingCreator
 */
export interface RovoIntegrationSettingCreator {
  /**
   * Adds a context parameter for query substitution.
   *
   * @param {string} parameterName - The parameter name to replace in the query
   * @param {string} value - The value to substitute for the parameter
   * @returns {RovoIntegrationSettingCreator} This builder instance for method chaining
   */
  addContextParameter(parameterName: string, value: string): RovoIntegrationSettingCreator;

  /**
   * Enables Row-Level Security (RLS) for the query.
   *
   * @returns {RlsSettings} RLS settings builder for configuring security options
   */
  useRLS(): RlsSettings;

  /**
   * Builds and returns the RovoIntegrationSetting instance.
   *
   * @returns {Promise<RovoIntegrationSetting>} The configured RovoIntegrationSetting instance
   */
  build(): Promise<RovoIntegrationSetting>;
}

/**
 * Interface for Rovo integration - a secure pattern for natural-language analytics.
 *
 * Rovo provides secure execution of dynamic SQL queries with comprehensive security validations.
 *
 * @interface RovoIntegration
 */
export interface RovoIntegration {
  /**
   * Creates a settings builder for Rovo queries using a raw table name.
   *
   * @param {string} tableName - The name of the table to query
   * @param {string} accountId - The account ID of the active user
   * @returns {RovoIntegrationSettingCreator} Builder for configuring Rovo query settings
   */
  rovoRawSettingBuilder(tableName: string, accountId: string): RovoIntegrationSettingCreator;

  /**
   * Creates a settings builder for Rovo queries using a Drizzle table object.
   *
   * @param {AnyMySqlTable} table - The Drizzle table object
   * @param {string} accountId - The account ID of the active user
   * @returns {RovoIntegrationSettingCreator} Builder for configuring Rovo query settings
   */
  rovoSettingBuilder(table: AnyMySqlTable, accountId: string): RovoIntegrationSettingCreator;

  /**
   * Executes a dynamic SQL query with comprehensive security validations.
   *
   * @param {string} dynamicSql - The SQL query to execute (must be a SELECT statement)
   * @param {RovoIntegrationSetting} settings - Configuration settings for the query
   * @returns {Promise<Result<unknown>>} Query execution result with metadata
   * @throws {Error} If the query violates security restrictions
   */
  dynamicIsolatedQuery(
    dynamicSql: string,
    settings: RovoIntegrationSetting,
  ): Promise<Result<unknown>>;
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
  /** Whether to log raw SQL queries to the console */
  logRawSqlQuery?: boolean;
  /** Whether to log cache operations (hits, misses, evictions) */
  logCache?: boolean;
  /** Whether to disable optimistic locking for update operations */
  disableOptimisticLocking?: boolean;
  /** SQL hints to be applied to queries for optimization */
  hints?: SqlHints;
  /** Default Cache TTL (Time To Live) in seconds */
  cacheTTL?: number;
  /** Name of the KVS entity used for cache storage */
  cacheEntityName?: string;
  /** Name of the field in cache entity that stores SQL query */
  cacheEntityQueryName?: string;
  /** Whether to wrap table names with backticks in cache keys */
  cacheWrapTable?: boolean;
  /** Name of the field in cache entity that stores expiration timestamp */
  cacheEntityExpirationName?: string;
  /** Name of the field in cache entity that stores cached data */
  cacheEntityDataName?: string;

  /**
   * Additional metadata for table configuration.
   * Allows specifying table-specific settings and behaviors such as version fields for optimistic locking.
   *
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
    return formatDateTime(value, "yyyy-MM-dd' 'HH:mm:ss.SSS", false);
  },
  fromDriver(value: unknown) {
    const format = "yyyy-MM-dd' 'HH:mm:ss.SSS";
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
    return formatDateTime(value, "yyyy-MM-dd' 'HH:mm:ss.SSS", true);
  },
  fromDriver(value: unknown) {
    const format = "yyyy-MM-dd' 'HH:mm:ss.SSS";
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
    return formatDateTime(value, "yyyy-MM-dd", false);
  },
  fromDriver(value: unknown) {
    const format = "yyyy-MM-dd";
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
    return formatDateTime(value, "HH:mm:ss.SSS", false);
  },
  fromDriver(value: unknown) {
    return parseDateTime(value as string, "HH:mm:ss.SSS");
  },
});

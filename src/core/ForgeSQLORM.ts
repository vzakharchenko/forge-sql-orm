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
import { MySqlTable } from "drizzle-orm/mysql-core/table";
import {
  MySqlDeleteBase,
  MySqlInsertBuilder,
  MySqlUpdateBuilder,
} from "drizzle-orm/mysql-core/query-builders";
import { cacheApplicationContext, localCacheApplicationContext } from "../utils/cacheContextUtils";
import { clearTablesCache } from "../utils/cacheUtils";
import { SQLWrapper } from "drizzle-orm/sql/sql";
import { WithSubquery } from "drizzle-orm/subquery";
import { getLastestMetadata, metadataQueryContext } from "../utils/metadataContextUtils";
import { operationTypeQueryContext } from "../utils/requestTypeContextUtils";
import type { MySqlQueryResultKind } from "drizzle-orm/mysql-core/session";

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
        logCache: false,
        disableOptimisticLocking: false,
        cacheWrapTable: true,
        cacheTTL: 120,
        cacheEntityQueryName: "sql",
        cacheEntityExpirationName: "expiration",
        cacheEntityDataName: "data",
      };
      this.options = newOptions;
      if (newOptions.logRawSqlQuery) {
        // eslint-disable-next-line no-console
        console.debug("Initializing ForgeSQLORM...");
      }
      // Initialize Drizzle instance with our custom driver
      const proxiedDriver = createForgeDriverProxy(
        this,
        newOptions.hints,
        newOptions.logRawSqlQuery,
      );
      this.drizzle = patchDbWithSelectAliased(
        drizzle(proxiedDriver, { logger: newOptions.logRawSqlQuery }),
        newOptions,
      );
      this.crudOperations = new ForgeSQLCrudOperations(this, newOptions);
      this.fetchOperations = new ForgeSQLSelectOperations(newOptions);
      this.analyzeOperations = new ForgeSQLAnalyseOperation(this);
      this.cacheOperations = new ForgeSQLCacheOperations(newOptions, this);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("ForgeSQLORM initialization failed:", error);
      throw error;
    }
  }

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
   * @param onMetadata.printQueries - Function to analyze and print query execution plans from CLUSTER_STATEMENTS_SUMMARY
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
   *   (totalDbExecutionTime, totalResponseSize, printQueries) => {
   *     const threshold = 500; // ms baseline for this resolver
   *
   *     if (totalDbExecutionTime > threshold * 1.5) {
   *       console.warn(`[Performance Warning] Resolver exceeded DB time: ${totalDbExecutionTime} ms`);
   *       await printQueries(); // Analyze and print query execution plans
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
  async executeWithMetadata<T>(
    query: () => Promise<T>,
    onMetadata: (
      totalDbExecutionTime: number,
      totalResponseSize: number,
      printQueriesWithPlan: () => Promise<void>,
    ) => Promise<void> | void,
  ): Promise<T> {
    return metadataQueryContext.run(
      {
        totalDbExecutionTime: 0,
        totalResponseSize: 0,
        beginTime: new Date(),
        forgeSQLORM: this,
        printQueriesWithPlan: async () => {
          return;
        },
      },
      async () => {
           const result = await query();
          const metadata = await getLastestMetadata();
          try {
               if (metadata) {
                   await onMetadata(
                       metadata.totalDbExecutionTime,
                       metadata.totalResponseSize,
                       metadata.printQueriesWithPlan,
                   );
               }
           } catch (e: any) {
              // eslint-disable-next-line no-console
               console.error(
                 "[ForgeSQLORM][executeWithMetadata] Failed to run onMetadata callback",
                 {
                   errorMessage: e?.message,
                   errorStack: e?.stack,
                   totalDbExecutionTime: metadata?.totalDbExecutionTime,
                   totalResponseSize: metadata?.totalResponseSize,
                   beginTime: metadata?.beginTime,
                 },
                 e,
               );
           }
           return result;
      },
    );
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
        await cacheApplicationContext.run(
          cacheApplicationContext.getStore() ?? { tables: new Set<string>() },
          async () => {
            try {
              return await cacheContext();
            } finally {
              await clearTablesCache(
                Array.from(cacheApplicationContext.getStore()?.tables ?? []),
                this.options,
              );
            }
          },
        ),
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
    return await localCacheApplicationContext.run(
      localCacheApplicationContext.getStore() ?? { cache: {} },
      async () => {
        return await cacheContext();
      },
    );
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
  selectFrom<T extends MySqlTable>(table: T) {
    return this.drizzle.selectFrom(table);
  }

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
  selectDistinctFrom<T extends MySqlTable>(table: T) {
    return this.drizzle.selectDistinctFrom(table);
  }

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
  selectCacheableFrom<T extends MySqlTable>(table: T, cacheTTL?: number) {
    return this.drizzle.selectFromCacheable(table, cacheTTL);
  }

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
  selectDistinctCacheableFrom<T extends MySqlTable>(table: T, cacheTTL?: number) {
    return this.drizzle.selectDistinctFromCacheable(table, cacheTTL);
  }

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
  execute<T>(query: SQLWrapper | string) {
    return this.drizzle.executeQuery<T>(query);
  }

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
  async executeDDL<T>(query: SQLWrapper | string) {
    return this.executeDDLActions(async () => this.drizzle.executeQuery<T>(query));
  }

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
  async executeDDLActions<T>(actions: () => Promise<T>): Promise<T> {
    return operationTypeQueryContext.run({ operationType: "DDL" }, async () => actions());
  }

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
  executeCacheable<T>(query: SQLWrapper | string, cacheTtl?: number) {
    return this.drizzle.executeQueryCacheable<T>(query, cacheTtl);
  }

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
  get $with() {
    return this.drizzle.$with;
  }

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
  with(...queries: WithSubquery[]) {
    return this.drizzle.with(...queries);
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
   * @param onMetadata.printQueries - Function to analyze and print query execution plans from CLUSTER_STATEMENTS_SUMMARY
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
   *   (totalDbExecutionTime, totalResponseSize, printQueries) => {
   *     const threshold = 500; // ms baseline for this resolver
   *
   *     if (totalDbExecutionTime > threshold * 1.5) {
   *       console.warn(`[Performance Warning] Resolver exceeded DB time: ${totalDbExecutionTime} ms`);
   *       await printQueries(); // Analyze and print query execution plans
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
  async executeWithMetadata<T>(
    query: () => Promise<T>,
    onMetadata: (
      totalDbExecutionTime: number,
      totalResponseSize: number,
      printQueriesWithPlan: () => Promise<void>,
    ) => Promise<void> | void,
  ): Promise<T> {
    return this.ormInstance.executeWithMetadata(query, onMetadata);
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
  selectFrom<T extends MySqlTable>(table: T) {
    return this.ormInstance.getDrizzleQueryBuilder().selectFrom(table);
  }

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
  selectDistinctFrom<T extends MySqlTable>(table: T) {
    return this.ormInstance.getDrizzleQueryBuilder().selectDistinctFrom(table);
  }

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
  selectCacheableFrom<T extends MySqlTable>(table: T, cacheTTL?: number) {
    return this.ormInstance.getDrizzleQueryBuilder().selectFromCacheable(table, cacheTTL);
  }

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
  selectDistinctCacheableFrom<T extends MySqlTable>(table: T, cacheTTL?: number) {
    return this.ormInstance.getDrizzleQueryBuilder().selectDistinctFromCacheable(table, cacheTTL);
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
  ): Promise<MySqlQueryResultKind<MySqlRemoteQueryResultHKT, T>> {
    return this.ormInstance.execute(query);
  }

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
  executeDDL(query: SQLWrapper | string) {
    return this.ormInstance.executeDDL(query);
  }

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
  executeDDLActions<T>(actions: () => Promise<T>): Promise<T> {
    return this.ormInstance.executeDDLActions(actions);
  }

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
  executeCacheable(query: SQLWrapper | string, cacheTtl?: number) {
    return this.ormInstance.executeCacheable(query, cacheTtl);
  }

  /**
   * Creates a Common Table Expression (CTE) builder for complex queries.
   * CTEs allow you to define temporary named result sets that exist within the scope of a single query.
   *
   * @returns WithBuilder for creating CTEs
   * @example
   * ```typescript
   * const withQuery = forgeSQL.$with('userStats').as(
   *   forgeSQL.getDrizzleQueryBuilder().select({ userId: users.id, count: sql<number>`count(*)` })
   *     .from(users)
   *     .groupBy(users.id)
   * );
   * ```
   */
  get $with() {
    return this.ormInstance.getDrizzleQueryBuilder().$with;
  }

  /**
   * Creates a query builder that uses Common Table Expressions (CTEs).
   * CTEs allow you to define temporary named result sets that exist within the scope of a single query.
   *
   * @param queries - Array of CTE queries created with $with()
   * @returns Query builder with CTE support
   * @example
   * ```typescript
   * const withQuery = forgeSQL.$with('userStats').as(
   *   forgeSQL.getDrizzleQueryBuilder().select({ userId: users.id, count: sql<number>`count(*)` })
   *     .from(users)
   *     .groupBy(users.id)
   * );
   *
   * const result = await forgeSQL.with(withQuery)
   *   .select({ userId: withQuery.userId, count: withQuery.count })
   *   .from(withQuery);
   * ```
   */
  with(...queries: WithSubquery[]) {
    return this.ormInstance.getDrizzleQueryBuilder().with(...queries);
  }
}

export default ForgeSQLORM;

import { UpdateQueryResponse } from "@forge/sql";
import { SqlParameters } from "@forge/sql/out/sql-statement";
import {
  AnyMySqlSelectQueryBuilder,
  AnyMySqlTable,
  customType,
  MySqlSelectBuilder,
} from "drizzle-orm/mysql-core";
import {
  MySqlSelectDynamic,
  type SelectedFields,
} from "drizzle-orm/mysql-core/query-builders/select.types";
import { InferInsertModel, Query, SQL } from "drizzle-orm";
import { DateTime } from "luxon";
import { parseDateTime } from "../utils/sqlUtils";
import { MySqlRemoteDatabase, MySqlRemotePreparedQueryHKT } from "drizzle-orm/mysql-proxy/index";
import { SqlHints } from "../utils/sqlHints";
import {
  ClusterStatementRowCamelCase,
  ExplainAnalyzeRow,
  SlowQueryNormalized,
} from "./SystemTables";

/**
 * Core interface for ForgeSQL operations.
 * Provides access to CRUD operations, schema-level SQL operations, and query analysis capabilities.
 *
 * @interface ForgeSqlOperation
 * @extends {QueryBuilderForgeSql}
 */
export interface ForgeSqlOperation extends QueryBuilderForgeSql {
  /**
   * Provides CRUD (Create, Update, Delete) operations.
   * @deprecated Use modify() instead for better type safety and consistency
   * @returns {CRUDForgeSQL} Interface for performing CRUD operations
   */
  crud(): CRUDForgeSQL;

  /**
   * Provides modify (Create, Update, Delete) operations with optimistic locking support.
   * @returns {CRUDForgeSQL} Interface for performing CRUD operations
   */
  modify(): CRUDForgeSQL;

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
}

/**
 * Interface for Query Builder operations.
 * Provides access to the underlying Drizzle ORM query builder with enhanced functionality.
 *
 * @interface QueryBuilderForgeSql
 */
export interface QueryBuilderForgeSql {
  /**
   * Creates a new query builder for the given entity.
   * @returns {MySqlRemoteDatabase<Record<string, unknown>>} The Drizzle database instance for building queries
   */
  getDrizzleQueryBuilder(): MySqlRemoteDatabase<Record<string, unknown>>;

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
}

/**
 * Interface for Modify (Create, Update, Delete) operations.
 * Provides methods for basic database operations with support for optimistic locking.
 *
 * @interface CRUDForgeSQL
 */
export interface CRUDForgeSQL {
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
   * @param {string} query - The raw SQL update query
   * @param {SqlParameters[]} [params] - Optional SQL parameters
   * @returns {Promise<UpdateQueryResponse>} The update response containing affected rows
   * @throws {Error} If the update operation fails
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
    return DateTime.fromJSDate(value).toFormat("YYYY-MM-DDTHH:mm:ss.SSS");
  },
  fromDriver(value: unknown) {
    const format = "YYYY-MM-DDTHH:mm:ss.SSS";
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
    return DateTime.fromJSDate(value).toFormat("yyyy-LL-dd'T'HH:mm:ss.SSS");
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
    return DateTime.fromJSDate(value).toFormat("yyyy-LL-dd");
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
    return DateTime.fromJSDate(value).toFormat("HH:mm:ss.SSS");
  },
  fromDriver(value: unknown) {
    return parseDateTime(value as string, "HH:mm:ss.SSS");
  },
});

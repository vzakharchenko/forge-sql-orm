import { UpdateQueryResponse } from "@forge/sql";
import { SqlParameters } from "@forge/sql/out/sql-statement";
import { MySql2Database } from "drizzle-orm/mysql2/driver";
import { AnyMySqlSelectQueryBuilder, AnyMySqlTable, customType } from "drizzle-orm/mysql-core";
import { MySqlSelectDynamic } from "drizzle-orm/mysql-core/query-builders/select.types";
import { InferInsertModel, SQL } from "drizzle-orm";
import moment from "moment/moment";
import { parseDateTime } from "../utils/sqlUtils";

// ============= Core Types =============

/**
 * Interface representing the main ForgeSQL operations.
 * Provides access to CRUD operations and schema-level SQL operations.
 */
export interface ForgeSqlOperation extends QueryBuilderForgeSql {
  /**
   * Provides CRUD (Create, Read, Update, Delete) operations.
   * @returns {CRUDForgeSQL} Interface for performing CRUD operations
   */
  crud(): CRUDForgeSQL;

  /**
   * Provides schema-level SQL fetch operations.
   * @returns {SchemaSqlForgeSql} Interface for executing schema-bound SQL queries
   */
  fetch(): SchemaSqlForgeSql;
}

/**
 * Interface for Query Builder operations.
 * Provides access to the underlying Drizzle ORM query builder.
 */
export interface QueryBuilderForgeSql {
  /**
   * Creates a new query builder for the given entity.
   * @returns {MySql2Database<Record<string, unknown>>} The Drizzle database instance for building queries
   */
  getDrizzleQueryBuilder(): MySql2Database<Record<string, unknown>>;
}

// ============= CRUD Operations =============

/**
 * Interface for CRUD (Create, Read, Update, Delete) operations.
 * Provides methods for basic database operations with support for optimistic locking.
 */
export interface CRUDForgeSQL {
  /**
   * Inserts multiple records into the database.
   * @template T - The type of the table schema
   * @param {T} schema - The entity schema
   * @param {Partial<InferInsertModel<T>>[]} models - The list of entities to insert
   * @param {boolean} [updateIfExists] - Whether to update the row if it already exists (default: false)
   * @returns {Promise<number>} The number of inserted rows
   * @throws {Error} If the insert operation fails
   */
  insert<T extends AnyMySqlTable>(
    schema: T,
    models: Partial<InferInsertModel<T>>[],
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

// ============= Schema SQL Operations =============

/**
 * Interface for schema-level SQL operations.
 * Provides methods for executing SQL queries with schema binding and type safety.
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

// ============= Configuration Types =============

/**
 * Interface for version field metadata.
 * Defines the configuration for optimistic locking version fields.
 */
export interface VersionFieldMetadata {
  /** Name of the version field */
  fieldName: string;
}

/**
 * Interface for table metadata.
 * Defines the configuration for a specific table.
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
 */
export type AdditionalMetadata = Record<string, TableMetadata>;

/**
 * Options for configuring ForgeSQL ORM behavior.
 */
export interface ForgeSqlOrmOptions {
  /**
   * Enables logging of raw SQL queries in the Atlassian Forge Developer Console.
   * Useful for debugging and monitoring SQL operations.
   * @default false
   */
  logRawSqlQuery?: boolean;
  /**
   * Enables logging of raw SQL queries in the Atlassian Forge Developer Console.
   * Useful for debugging and monitoring SQL operations.
   * @default false
   */
  logRawSqlQueryParams?: boolean;

  /**
   * Disables optimistic locking for all operations.
   * When enabled, version checks are skipped during updates.
   * @default false
   */
  disableOptimisticLocking?: boolean;

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

// ============= Custom Types =============

/**
 * Custom type for MySQL datetime fields.
 * Handles conversion between JavaScript Date objects and MySQL datetime strings.
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
    return moment(value as Date).format("YYYY-MM-DDTHH:mm:ss.SSS");
  },
  fromDriver(value: unknown) {
    const format = "YYYY-MM-DDTHH:mm:ss.SSS";
    return parseDateTime(value as string, format);
  },
});

/**
 * Custom type for MySQL timestamp fields.
 * Handles conversion between JavaScript Date objects and MySQL timestamp strings.
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
    return moment(value as Date).format("YYYY-MM-DDTHH:mm:ss.SSS");
  },
  fromDriver(value: unknown) {
    const format = "YYYY-MM-DDTHH:mm:ss.SSS";
    return parseDateTime(value as string, format);
  },
});

/**
 * Custom type for MySQL date fields.
 * Handles conversion between JavaScript Date objects and MySQL date strings.
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
    return moment(value as Date).format("YYYY-MM-DD");
  },
  fromDriver(value: unknown) {
    const format = "YYYY-MM-DD";
    return parseDateTime(value as string, format);
  },
});

/**
 * Custom type for MySQL time fields.
 * Handles conversion between JavaScript Date objects and MySQL time strings.
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
    return moment(value as Date).format("HH:mm:ss.SSS");
  },
  fromDriver(value: unknown) {
    return parseDateTime(value as string, "HH:mm:ss.SSS");
  },
});

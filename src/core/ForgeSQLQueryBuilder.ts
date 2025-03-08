import { UpdateQueryResponse } from "@forge/sql";
import type { EntityName, LoggingOptions } from "..";
import type { EntitySchema } from "@mikro-orm/core/metadata/EntitySchema";
import type { QueryBuilder } from "@mikro-orm/knex/query";
import type { Knex } from "knex";

/**
 * Interface representing the main ForgeSQL operations.
 */
export interface ForgeSqlOperation extends QueryBuilderForgeSql {
  /**
   * Provides CRUD operations.
   */
  crud(): CRUDForgeSQL;

  /**
   * Provides schema-level SQL fetch operations.
   */
  fetch(): SchemaSqlForgeSql;
}

/**
 * Options for configuring ForgeSQL ORM behavior.
 */
export interface ForgeSqlOrmOptions {
  /**
   * Enables logging of raw SQL queries in the Atlassian Forge Developer Console.
   */
  logRawSqlQuery?: boolean;
}

/**
 * Interface for schema-level SQL operations.
 */
export interface SchemaSqlForgeSql {
  /**
   * Executes a schema-bound SQL query and maps the result to the specified entity schema.
   * @param query - The SQL query to execute.
   * @param schema - The entity schema.
   * @returns A list of mapped entity objects.
   */
  executeSchemaSQL<T extends object>(query: string, schema: EntitySchema<T>): Promise<T[]>;

  /**
   * Executes a raw SQL query and returns the results.
   * @param query - The raw SQL query.
   * @returns A list of results as objects.
   */
  executeRawSQL<T extends object | unknown>(query: string): Promise<T[]>;

  /**
   * Executes a raw SQL update query.
   * @param query - The raw SQL update query.
   * @returns The update response containing affected rows.
   */
  executeRawUpdateSQL(query: string): Promise<UpdateQueryResponse>;
}

/**
 * Interface for CRUD (Create, Read, Update, Delete) operations.
 */
export interface CRUDForgeSQL {
  /**
   * Inserts multiple records into the database.
   * @param schema - The entity schema.
   * @param models - The list of entities to insert.
   * @param updateIfExists - Whether to update the row if it already exists.
   * @returns The number of inserted rows.
   */
  insert<T extends object>(
    schema: EntitySchema<T>,
    models: T[],
    updateIfExists?: boolean,
  ): Promise<number>;

  /**
   * Deletes a record by its ID.
   * @param id - The ID of the record to delete.
   * @param schema - The entity schema.
   * @returns The number of rows affected.
   */
  deleteById<T extends object>(id: unknown, schema: EntitySchema<T>): Promise<number>;

  /**
   * Updates a record by its ID.
   * @param entity - The entity with updated values.
   * @param schema - The entity schema.
   */
  updateById<T extends object>(entity: T, schema: EntitySchema<T>): Promise<void>;
}

/**
 * Interface for Query Builder operations.
 */
export interface QueryBuilderForgeSql {
  /**
   * Creates a new query builder for the given entity.
   * @param entityName - The entity name or an existing query builder.
   * @param alias - The alias for the entity.
   * @param loggerContext - Logging options.
   * @returns The query builder instance.
   */
  createQueryBuilder<Entity extends object, RootAlias extends string = never>(
    entityName: EntityName<Entity> | QueryBuilder<Entity>,
    alias?: RootAlias,
    loggerContext?: LoggingOptions,
  ): QueryBuilder<Entity, RootAlias>;

  /**
   * Provides access to the underlying Knex instance for executing raw queries and building complex query parts.
   * enabling advanced query customization and performance tuning.
   * @returns The Knex instance, which can be used for query building.
   */
  getKnex(): Knex<any, any[]>;
}

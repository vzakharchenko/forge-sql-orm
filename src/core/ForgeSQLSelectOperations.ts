import { sql, UpdateQueryResponse } from "@forge/sql";
import { extractAlias, parseDateTime } from "../utils/sqlUtils";
import { ForgeSqlOrmOptions, SchemaSqlForgeSql } from "./ForgeSQLQueryBuilder";
import { AnyMySqlSelect } from "drizzle-orm/mysql-core";
import {
  AnyMySqlSelectQueryBuilder,
  MySqlSelectDynamic,
} from "drizzle-orm/mysql-core/query-builders/select.types";
import { Column, SQL, SQLChunk, StringChunk } from "drizzle-orm";

/**
 * Class implementing SQL select operations for ForgeSQL ORM.
 * Provides methods for executing queries and mapping results to entity types.
 */
export class ForgeSQLSelectOperations implements SchemaSqlForgeSql {
  private readonly options: ForgeSqlOrmOptions;

  /**
   * Creates a new instance of ForgeSQLSelectOperations.
   * @param {ForgeSqlOrmOptions} options - Configuration options for the ORM
   */
  constructor(options: ForgeSqlOrmOptions) {
    this.options = options;
  }

  /**
   * Executes a Drizzle query and returns the results.
   * Maps the raw database results to the appropriate entity types.
   *
   * @template T - The type of the query builder
   * @param {T} query - The Drizzle query to execute
   * @returns {Promise<Awaited<T>>} The query results mapped to entity types
   */
  async executeQuery<T extends MySqlSelectDynamic<AnyMySqlSelectQueryBuilder>>(
    query: T,
  ): Promise<Awaited<T>> {
    const queryType = <AnyMySqlSelect>query;
    const querySql = queryType.toSQL();
    const datas = await this.executeRawSQL<unknown>(querySql.sql, querySql.params);

    if (!datas.length) return [] as Awaited<T>;

    return datas.map((r) => {
      const rawModel = r as Record<string, unknown>;
      const newModel: any = {};

      // @ts-ignore - Drizzle internal property
      const columns = queryType.config.fields;

      Object.entries(columns).forEach(([name, column]: [string, any]) => {
        const { realColumn, aliasName } = this.extractColumnInfo(column);
        const value = rawModel[aliasName];

        if (value === null || value === undefined) {
          newModel[name] = value;
          return;
        }

        newModel[name] = this.parseColumnValue(realColumn, value);
      });

      return newModel;
    }) as Awaited<T>;
  }

  /**
   * Extracts column information and alias name from a column definition.
   * @param {any} column - The column definition from Drizzle
   * @returns {Object} Object containing the real column and its alias name
   */
  private extractColumnInfo(column: any): { realColumn: Column; aliasName: string } {
    if (column instanceof SQL) {
      const realColumnSql = <SQL>column;
      const realColumn = realColumnSql.queryChunks.find(
        (q: SQLChunk) => q instanceof Column,
      ) as Column;

      let stringChunk = this.findAliasChunk(realColumnSql);
      let withoutAlias = false;

      if (!realColumn && (!stringChunk || !stringChunk.value || !stringChunk.value?.length)) {
        stringChunk = realColumnSql.queryChunks
          .filter((q: SQLChunk) => q instanceof StringChunk)
          .find((q: SQLChunk) => (q as StringChunk).value[0]) as StringChunk;
        withoutAlias = true;
      }

      const aliasName = this.resolveAliasName(stringChunk, realColumn, withoutAlias);

      return { realColumn, aliasName };
    }

    return { realColumn: column, aliasName: column.name };
  }

  /**
   * Finds the alias chunk in SQL query chunks.
   * @param {SQL} realColumnSql - The SQL query chunks
   * @returns {StringChunk | undefined} The string chunk containing the alias or undefined
   */
  private findAliasChunk(realColumnSql: SQL): StringChunk | undefined {
    return realColumnSql.queryChunks
      .filter((q: SQLChunk) => q instanceof StringChunk)
      .find((q: SQLChunk) =>
        (q as StringChunk).value.find((f) => f.toLowerCase().includes("as")),
      ) as StringChunk;
  }

  /**
   * Resolves the alias name from the string chunk or column.
   * @param {StringChunk | undefined} stringChunk - The string chunk containing the alias
   * @param {Column | undefined} realColumn - The real column definition
   * @param {boolean} withoutAlias - Whether the column has no alias
   * @returns {string} The resolved alias name
   */
  private resolveAliasName(
    stringChunk: StringChunk | undefined,
    realColumn: Column | undefined,
    withoutAlias: boolean,
  ): string {
    if (stringChunk) {
      if (withoutAlias) {
        return stringChunk.value[0];
      }
      const asClause = stringChunk.value.find((f) => f.toLowerCase().includes("as"));
      return asClause ? extractAlias(asClause.trim()) : realColumn?.name || "";
    }
    return realColumn?.name || "";
  }

  /**
   * Parses a column value based on its SQL type.
   * Handles datetime, date, and time types with appropriate formatting.
   *
   * @param {Column} column - The column definition
   * @param {unknown} value - The raw value to parse
   * @returns {unknown} The parsed value
   */
  private parseColumnValue(column: Column, value: unknown): unknown {
    if (!column) return value;

    switch (column.getSQLType()) {
      case "datetime":
        return parseDateTime(value as string, "YYYY-MM-DDTHH:mm:ss.SSS");
      case "date":
        return parseDateTime(value as string, "YYYY-MM-DD");
      case "time":
        return parseDateTime(value as string, "HH:mm:ss.SSS");
      default:
        return value;
    }
  }

  /**
   * Executes a Drizzle query and returns a single result.
   * Throws an error if more than one record is returned.
   *
   * @template T - The type of the query builder
   * @param {T} query - The Drizzle query to execute
   * @returns {Promise<Awaited<T> extends Array<any> ? Awaited<T>[number] | undefined : Awaited<T> | undefined>} A single result object or undefined
   * @throws {Error} If more than one record is returned
   */
  async executeQueryOnlyOne<T extends MySqlSelectDynamic<AnyMySqlSelectQueryBuilder>>(
    query: T,
  ): Promise<
    Awaited<T> extends Array<any> ? Awaited<T>[number] | undefined : Awaited<T> | undefined
  > {
    const results: Awaited<T> = await this.executeQuery<T>(query);
    const datas = results as unknown[];
    if (!datas.length) {
      return undefined;
    }
    if (datas.length > 1) {
      throw new Error(`Expected 1 record but returned ${datas.length}`);
    }

    return datas[0] as Awaited<T> extends Array<any> ? Awaited<T>[number] : Awaited<T>;
  }

  /**
   * Executes a raw SQL query and returns the results.
   * Logs the query if logging is enabled.
   *
   * @template T - The type of the result objects
   * @param {string} query - The raw SQL query to execute
   * @param {SqlParameters[]} [params] - Optional SQL parameters
   * @returns {Promise<T[]>} A list of results as objects
   */
  async executeRawSQL<T extends object | unknown>(query: string, params?: unknown[]): Promise<T[]> {
    if (this.options.logRawSqlQuery) {
      console.debug("Executing raw SQL: " + query);
    }
    const sqlStatement = sql.prepare<T>(query);
    if (params) {
      sqlStatement.bindParams(...params);
    }
    const result = await sqlStatement.execute();
    return result.rows as T[];
  }

  /**
   * Executes a raw SQL update query.
   * @param {string} query - The raw SQL update query
   * @param {SqlParameters[]} [params] - Optional SQL parameters
   * @returns {Promise<UpdateQueryResponse>} The update response containing affected rows
   */
  async executeRawUpdateSQL(query: string, params?: unknown[]): Promise<UpdateQueryResponse> {
    const sqlStatement = sql.prepare<UpdateQueryResponse>(query);
    if (params) {
      sqlStatement.bindParams(...params);
    }
    const updateQueryResponseResults = await sqlStatement.execute();
    return updateQueryResponseResults.rows;
  }
}

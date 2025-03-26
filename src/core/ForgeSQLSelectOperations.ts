import { sql, UpdateQueryResponse } from "@forge/sql";
import { ForgeSqlOrmOptions, SchemaSqlForgeSql } from "./ForgeSQLQueryBuilder";
import {
  AnyMySqlSelectQueryBuilder,
  MySqlSelectDynamic,
} from "drizzle-orm/mysql-core/query-builders/select.types";

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
    const results: Awaited<T> = await query;
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
      if (this.options.logRawSqlQuery && this.options.logRawSqlQueryParams) {
        console.debug("Executing with SQL Params: " + JSON.stringify(params));
      }
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

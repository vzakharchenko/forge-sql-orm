import { sql, UpdateQueryResponse } from "@forge/sql";
import type { EntitySchema } from "@mikro-orm/core/metadata/EntitySchema";
import { parseDateTime } from "../utils/sqlUtils";
import { ComplexQuerySchemaBuilder, ForgeSqlOrmOptions, SchemaSqlForgeSql} from "./ForgeSQLQueryBuilder";
import {SqlParameters} from "@forge/sql/out/sql-statement";
import {DynamicEntity, DynamicEntitySchemaBuilder} from "./ComplexQuerySchemaBuilder";
import {EntityKey} from "@mikro-orm/core";

export class ForgeSQLSelectOperations implements SchemaSqlForgeSql {
    private readonly options: ForgeSqlOrmOptions;

    constructor(options: ForgeSqlOrmOptions) {
        this.options = options;
    }

    /**
     * Creates a builder for constructing complex query schemas dynamically.
     * This method is useful when working with dynamic entity structures where fields
     * may not be known at compile time.
     * @returns An instance of ComplexQuerySchemaBuilder configured for dynamic entities.
     */
    createComplexQuerySchema(): ComplexQuerySchemaBuilder<DynamicEntity> {
        return new DynamicEntitySchemaBuilder();
    }

  async executeSchemaSQLOnlyOne<T extends object>(query: string, schema: EntitySchema<T>): Promise<T|undefined> {
        const results = await this.executeSchemaSQL(query, schema);
        if (!results || results.length === 0){
          return undefined;
        }
        if (results.length>1){
          throw new Error('Expected 1 record but returned '+results.length)
        }
        return results[0];
    }

  /**
   * Executes a schema-based SQL query and maps the result to the entity schema.
   * @param query - The SQL query to execute.
   * @param schema - The entity schema defining the structure.
   * @returns A list of mapped entity objects.
   */
  async executeSchemaSQL<T extends object>(query: string, schema: EntitySchema<T>): Promise<T[]> {
    const datas = await this.executeRawSQL<unknown>(query);
    if (!datas.length) return [];

    return datas.map((r) => {
      const rawModel = r as Record<string, unknown>;
        const newModel = Object.create(schema.meta.prototype) as T;

      schema.meta.props
        .filter((p) => p.kind === "scalar")
        .forEach((p) => {
          const fieldName = p.name;
          const fieldNames = p.fieldNames;
          const rawFieldName = fieldNames && Array.isArray(fieldNames) ? fieldNames[0] : p.name;
          switch (p.type) {
            case "datetime":
                newModel[fieldName] = parseDateTime(
                    rawModel[rawFieldName] as string,
                    "YYYY-MM-DDTHH:mm:ss.SSS",
                )  as unknown as T[EntityKey<T>];
              break;
            case "date":
              newModel[fieldName] = parseDateTime(rawModel[rawFieldName] as string, "YYYY-MM-DD")  as unknown as T[EntityKey<T>];
              break;
            case "time":
              newModel[fieldName] = parseDateTime(rawModel[rawFieldName] as string, "HH:mm:ss.SSS")  as unknown as T[EntityKey<T>];
              break;
            default:
              newModel[fieldName] = rawModel[rawFieldName]  as unknown as T[EntityKey<T>];
          }
        });
      return newModel as T;
    });
  }

  /**
   * Executes a raw SQL query and returns the results.
   * @param query - The raw SQL query to execute.
   * @returns A list of results as objects.
   */
  async executeRawSQL<T extends object | unknown>(query: string): Promise<T[]> {
    if (this.options.logRawSqlQuery) {
      console.debug("Executing raw SQL: " + query);
    }
    const sqlStatement = await sql.prepare<T>(query).execute();
    return sqlStatement.rows as T[];
  }

  /**
   * Executes a raw SQL update query.
   * @param query - The raw SQL update query.
   * @param params - sql parameters.
   * @returns The update response containing affected rows.
   */
  async executeRawUpdateSQL(query: string, params?: SqlParameters[]): Promise<UpdateQueryResponse> {
    const sqlStatement = sql.prepare<UpdateQueryResponse>(query);
    if (params) {
      sqlStatement.bindParams(params);
    }
    const updateQueryResponseResults = await sqlStatement.execute();
    return updateQueryResponseResults.rows;
  }
}

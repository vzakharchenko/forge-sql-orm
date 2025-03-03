import { sql, UpdateQueryResponse } from "@forge/sql";
import type { EntitySchema } from "@mikro-orm/core/metadata/EntitySchema";
import { parseDateTime } from "../utils/sqlUtils";
import { SchemaSqlForgeSql } from "./ForgeSQLQueryBuilder";

export class ForgeSQLSelectOperations implements SchemaSqlForgeSql {
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
      const newModel: Record<string, unknown> = {};

      schema.meta.props
        .filter((p) => p.kind === "scalar")
        .forEach((p) => {
          const fieldName = p.name;
          const rawFieldName = p.fieldNames[0] ?? p.name;

          switch (p.type) {
            case "datetime":
              newModel[fieldName] = parseDateTime(
                rawModel[rawFieldName] as string,
                "YYYY-MM-DDTHH:mm:ss.SSS",
              );
              break;
            case "date":
              newModel[fieldName] = parseDateTime(rawModel[rawFieldName] as string, "YYYY-MM-DD");
              break;
            case "time":
              newModel[fieldName] = parseDateTime(rawModel[rawFieldName] as string, "HH:mm:ss.SSS");
              break;
            default:
              newModel[fieldName] = rawModel[rawFieldName];
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
    console.debug("Executing raw SQL: " + query);
    const sqlStatement = await sql.prepare<T>(query).execute();
    console.debug("Query result: " + JSON.stringify(sqlStatement));
    return sqlStatement.rows as T[];
  }

  /**
   * Executes a raw SQL update query.
   * @param query - The raw SQL update query.
   * @returns The update response containing affected rows.
   */
  async executeRawUpdateSQL(query: string): Promise<UpdateQueryResponse> {
    console.debug("Executing update SQL: " + query);
    const sqlStatement = sql.prepare<UpdateQueryResponse>(query);
    const updateQueryResponseResults = await sqlStatement.execute();
    return updateQueryResponseResults.rows;
  }
}

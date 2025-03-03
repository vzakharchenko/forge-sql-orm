import { UpdateQueryResponse, sql } from "@forge/sql";
import { EntityProperty, EntitySchema } from "..";
import type { types } from "@mikro-orm/core/types";
import { transformValue } from "../utils/sqlUtils";
import { CRUDForgeSQL, ForgeSqlOperation } from "./ForgeSQLQueryBuilder";

export class ForgeSQLCrudOperations implements CRUDForgeSQL {
  private readonly forgeOperations: ForgeSqlOperation;

  constructor(forgeSqlOperations: ForgeSqlOperation) {
    this.forgeOperations = forgeSqlOperations;
  }

  /**
   * Generates an SQL insert query with values.
   * @param schema - The entity schema.
   * @param models - The list of entities to insert.
   * @param updateIfExists - Whether to update the row if it already exists.
   * @returns An object containing the SQL query, fields, and values.
   */
  private async generateInsertScript<T extends object>(
    schema: EntitySchema<T>,
    models: T[],
    updateIfExists: boolean,
  ): Promise<{
    sql: string;
    fields: string[];
    values: { type: keyof typeof types; value: unknown }[];
  }> {
    const fieldNames: Set<string> = new Set();
    const fieldValueMaps: Record<string, { type: keyof typeof types; value: unknown }>[] = [];

    models.forEach((model) => {
      const fieldValueMap: Record<string, { type: keyof typeof types; value: unknown }> = {};
      schema.meta.props.forEach((p) => {
        const modelValue = model[p.name];
        if (p.kind === "scalar" && modelValue !== undefined) {
          fieldNames.add(p.fieldNames[0] || p.name);
          fieldValueMap[p.fieldNames[0]] = {
            type: p.type as keyof typeof types,
            value: modelValue,
          };
        }
      });
      fieldValueMaps.push(fieldValueMap);
    });

    const fields = Array.from(fieldNames);
    const values = fieldValueMaps.flatMap((fieldValueMap) =>
      fields.map(
        (f) =>
          fieldValueMap[f] || {
            type: "string",
            value: null,
          },
      ),
    );

    return {
      sql: `INSERT INTO ${schema.meta.collection} (${fields.join(",")}) VALUES ${fieldValueMaps
        .map(
          (fieldValueMap) =>
            `(${fields
              .map((f) =>
                transformValue(
                  fieldValueMap[f] || {
                    type: "string",
                    value: null,
                  },
                ),
              )
              .join(",")})`,
        )
        .join(
          ", ",
        )} ${updateIfExists ? `ON DUPLICATE KEY UPDATE ${fields.map((f) => `${f} = VALUES(${f})`).join(",")}` : ""}`,
      fields,
      values,
    };
  }

  /**
   * Inserts records into the database.
   * @param schema - The entity schema.
   * @param models - The list of entities to insert.
   * @param updateIfExists - Whether to update the row if it already exists.
   * @returns The ID of the inserted row.
   */
  async insert<T extends object>(
    schema: EntitySchema<T>,
    models: T[],
    updateIfExists: boolean = false,
  ): Promise<number> {
    if (!models || models.length === 0) return 0;

    const query = await this.generateInsertScript(schema, models, updateIfExists);
    console.debug("INSERT SQL: " + query.sql);
    console.debug("INSERT VALUES: " + JSON.stringify(query.values));
    const sqlStatement = sql.prepare<UpdateQueryResponse>(query.sql);
    const updateQueryResponseResult = await sqlStatement.execute();
    return updateQueryResponseResult.rows.insertId;
  }

  /**
   * Retrieves the primary keys for the given entity schema.
   * @param schema - The entity schema.
   * @returns An array of primary key properties.
   * @throws If no primary keys are found.
   */
  private getPrimaryKeys<T extends object>(schema: EntitySchema<T>): EntityProperty<T, unknown>[] {
    const primaryKeys = schema.meta.props.filter((p) => p.primary);
    if (!primaryKeys.length) {
      throw new Error(`No primary keys found for schema: ${schema.meta.className}`);
    }
    return primaryKeys;
  }

  /**
   * Deletes a record by its ID.
   * @param id - The ID of the record to delete.
   * @param schema - The entity schema.
   * @returns The number of rows affected.
   * @throws If the entity has more than one primary key.
   */
  async deleteById<T extends object>(id: unknown, schema: EntitySchema<T>): Promise<number> {
    const primaryKeys = this.getPrimaryKeys(schema);
    if (primaryKeys.length > 1) {
      throw new Error("Only one primary key is supported");
    }

    const primaryKey = primaryKeys[0];
    const queryBuilder = this.forgeOperations.createQueryBuilder(schema.meta.class).delete();
    queryBuilder.andWhere({ [primaryKey.name]: { $eq: id } });

    const query = queryBuilder.getFormattedQuery();
    console.debug("DELETE SQL: " + query);

    const sqlStatement = sql.prepare<UpdateQueryResponse>(query);
    const updateQueryResponseResult = await sqlStatement.execute();
    return updateQueryResponseResult.rows.affectedRows;
  }

  /**
   * Updates a record by its ID.
   * @param entity - The entity with updated values.
   * @param schema - The entity schema.
   * @throws If the primary key value is missing in the entity.
   */
  async updateById<T extends object>(entity: T, schema: EntitySchema<T>): Promise<void> {
    const primaryKeys = this.getPrimaryKeys(schema);
    const queryBuilder = this.forgeOperations.createQueryBuilder(schema.meta.class).update(entity);

    primaryKeys.forEach((pk) => {
      const value = entity[pk.name];
      if (value === null || value === undefined) {
        throw new Error(`Primary Key ${pk.name} must exist in the model`);
      }
      queryBuilder.andWhere({ [pk.name]: { $eq: value } });
    });
    const query = queryBuilder.getFormattedQuery();
    console.debug("UPDATE SQL: " + query);
    await this.forgeOperations.fetch().executeRawUpdateSQL(query);
  }
}

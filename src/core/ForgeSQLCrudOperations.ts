import { sql, UpdateQueryResponse } from "@forge/sql";
import { EntityProperty, EntitySchema, ForgeSqlOrmOptions } from "..";
import type { types } from "@mikro-orm/core/types";
import { transformValue } from "../utils/sqlUtils";
import { CRUDForgeSQL, ForgeSqlOperation } from "./ForgeSQLQueryBuilder";
import { EntityKey, QBFilterQuery } from "@mikro-orm/core";
import Knex from "../knex";

export class ForgeSQLCrudOperations implements CRUDForgeSQL {
  private readonly forgeOperations: ForgeSqlOperation;
  private readonly options: ForgeSqlOrmOptions;

  constructor(forgeSqlOperations: ForgeSqlOperation, options: ForgeSqlOrmOptions) {
    this.forgeOperations = forgeSqlOperations;
    this.options = options;
  }

  /**
   * Generates an SQL INSERT statement for the provided models.
   * If a version field exists in the schema, its value is set accordingly.
   *
   * @param schema - The entity schema.
   * @param models - The list of entities to insert.
   * @param updateIfExists - Whether to update the row if it already exists.
   * @returns An object containing the SQL query, column names, and values.
   */
  private async generateInsertScript<T extends object>(
      schema: EntitySchema<T>,
      models: T[],
      updateIfExists: boolean,
  ): Promise<{
    sql: string;
    query: string;
    fields: string[];
    values: { type: keyof typeof types; value: unknown }[];
  }> {
    const columnNames = new Set<string>();
    const modelFieldValues: Record<string, { type: keyof typeof types; value: unknown }>[] = [];

    // Build field values for each model.
    models.forEach((model) => {
      const fieldValues: Record<string, { type: keyof typeof types; value: unknown }> = {};
      schema.meta.props.forEach((prop) => {
        const value = model[prop.name];
        if (prop.kind === "scalar" && value !== undefined) {
          const columnName = this.getRealFieldNameFromSchema(prop);
          columnNames.add(columnName);
          fieldValues[columnName] = { type: prop.type as keyof typeof types, value };
        }
      });
      modelFieldValues.push(fieldValues);
    });

    // If a version field exists, set or update its value.
    const versionField = this.getVersionField(schema);
    if (versionField) {
      modelFieldValues.forEach((mv) => {
        const versionRealName = this.getRealFieldNameFromSchema(versionField);
        if (mv[versionRealName]) {
          mv[versionRealName].value = transformValue(
              { value: this.createVersionField(versionField), type: versionField.name },
              true,
          );
        } else {
          mv[versionRealName] = {
            type: versionField.type as keyof typeof types,
            value: transformValue(
                { value: this.createVersionField(versionField), type: versionField.name },
                true,
            ),
          };
          columnNames.add(versionField.name);
        }
      });
    }

    const columns = Array.from(columnNames);

    // Flatten values for each row in the order of columns.
    const values = modelFieldValues.flatMap((fieldValueMap) =>
        columns.map(
            (column) =>
                fieldValueMap[column] || {
                  type: "string",
                  value: null,
                },
        ),
    );

    // Build the VALUES clause.
    const insertValues = modelFieldValues
        .map((fieldValueMap) => {
          const rowValues = columns
              .map((column) =>
                  transformValue(
                      fieldValueMap[column] || { type: "string", value: null },
                      true,
                  ),
              )
              .join(",");
          return `(${rowValues})`;
        })
        .join(", ");
    // Build the VALUES ? clause.
    const insertEmptyValues = modelFieldValues
        .map(() => {
          const rowValues = columns
              .map(() =>
                  '?',
              )
              .join(",");
          return `(${rowValues})`;
        })
        .join(", ");

    const updateClause = updateIfExists
        ? ` ON DUPLICATE KEY UPDATE ${columns.map((col) => `${col} = VALUES(${col})`).join(",")}`
        : "";

    return {
      sql: `INSERT INTO ${schema.meta.collection} (${columns.join(",")}) VALUES ${insertValues}${updateClause}`,
      query: `INSERT INTO ${schema.meta.collection} (${columns.join(",")}) VALUES ${insertEmptyValues}${updateClause}`,
      fields: columns,
      values,
    };
  }

  /**
   * Inserts records into the database.
   * If a version field exists in the schema, versioning is applied.
   *
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
    if (this.options?.logRawSqlQuery) {
      console.debug("INSERT SQL: " + query.query);
    }
    const sqlStatement = sql.prepare<UpdateQueryResponse>(query.sql);
    const result = await sqlStatement.execute();
    return result.rows.insertId;
  }

  /**
   * Retrieves the primary key properties from the entity schema.
   *
   * @param schema - The entity schema.
   * @returns An array of primary key properties.
   * @throws If no primary keys are found.
   */
  private getPrimaryKeys<T extends object>(schema: EntitySchema<T>): EntityProperty<T, unknown>[] {
    const primaryKeys = schema.meta.props.filter((prop) => prop.primary);
    if (!primaryKeys.length) {
      throw new Error(`No primary keys found for schema: ${schema.meta.className}`);
    }
    return primaryKeys;
  }

  /**
   * Deletes a record by its primary key.
   *
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
    if (this.options?.logRawSqlQuery) {
      console.debug("DELETE SQL: " + queryBuilder.getQuery());
    }
    const sqlStatement = sql.prepare<UpdateQueryResponse>(query);
    const result = await sqlStatement.execute();
    return result.rows.affectedRows;
  }

  /**
   * Retrieves the version field from the entity schema.
   * The version field must be of type datetime, integer, or decimal, not a primary key, and not nullable.
   *
   * @param schema - The entity schema.
   * @returns The version field property if it exists.
   */
  getVersionField<T>(schema: EntitySchema<T>) {
    if (this.options.disableOptimisticLocking){
      return undefined;
    }
    return schema.meta.props
        .filter((prop) => prop.version)
        .filter((prop) => {
          const validType =
              prop.type === "datetime" || prop.type === "integer" || prop.type === "decimal";
          if (!validType) {
            console.warn(
                `Version field "${prop.name}" in table ${schema.meta.tableName} must be datetime, integer, or decimal, but is "${prop.type}"`,
            );
          }
          return validType;
        })
        .filter((prop) => {
          if (prop.primary) {
            console.warn(
                `Version field "${prop.name}" in table ${schema.meta.tableName} cannot be a primary key`,
            );
            return false;
          }
          return true;
        })
        .find((prop) => {
          if (prop.nullable) {
            console.warn(
                `Version field "${prop.name}" in table ${schema.meta.tableName} should not be nullable`,
            );
            return false;
          }
          return true;
        });
  }

  /**
   * Increments the version field of an entity.
   * For datetime types, sets the current date; for numeric types, increments by 1.
   *
   * @param versionField - The version field property.
   * @param updateModel - The entity to update.
   */
  incrementVersionField<T>(versionField: EntityProperty<T, any>, updateModel: T): void {
    const key = versionField.name as keyof T;
    switch (versionField.type) {
      case "datetime": {
        updateModel[key] = new Date() as unknown as T[keyof T];
        break;
      }
      case "decimal":
      case "integer": {
        updateModel[key] = ((updateModel[key] as number) + 1) as unknown as T[keyof T];
        break;
      }
      default:
        throw new Error(`Unsupported version field type: ${versionField.type}`);
    }
  }

  /**
   * Creates the initial version field value for an entity.
   * For datetime types, returns the current date; for numeric types, returns 0.
   *
   * @param versionField - The version field property.
   */
  createVersionField<T>(versionField: EntityProperty<T>): unknown {
    switch (versionField.type) {
      case "datetime": {
        return new Date() as unknown as T[keyof T];
      }
      case "decimal":
      case "integer": {
        return 0;
      }
      default:
        throw new Error(`Unsupported version field type: ${versionField.type}`);
    }
  }

  /**
   * Updates a record by its primary key using the provided entity data.
   *
   * @param entity - The entity with updated values.
   * @param schema - The entity schema.
   */
  async updateById<T extends object>(entity: T, schema: EntitySchema<T>): Promise<void> {
    const fields = schema.meta.props
        .filter((prop) => prop.kind === "scalar")
        .map((prop) => prop.name);
    await this.updateFieldById(entity, fields, schema);
  }

  /**
   * Updates specific fields of a record identified by its primary key.
   * If a version field exists in the schema, versioning is applied.
   *
   * @param entity - The entity with updated values.
   * @param fields - The list of field names to update.
   * @param schema - The entity schema.
   * @throws If the primary key is not included in the update fields.
   */
  async updateFieldById<T extends object>(
      entity: T,
      fields: EntityKey<T>[],
      schema: EntitySchema<T>,
  ): Promise<void> {
    const primaryKeys = this.getPrimaryKeys(schema);
    primaryKeys.forEach((pk) => {
      if (!fields.includes(pk.name)) {
        throw new Error("Update fields must include primary key: " + pk.name);
      }
    });

    // Prepare updated entity and query builder.
    const updatedEntity = this.filterEntityFields(entity, fields);
    let queryBuilder = this.forgeOperations.createQueryBuilder(schema.meta.class).getKnexQuery();
    const versionField = this.getVersionField(schema);
    const useVersion = Boolean(versionField);
    let updateModel = { ...updatedEntity };

    if (useVersion && versionField) {
      // If the version field is missing from the entity, load the old record.
      let oldModel = entity;
      if (entity[versionField.name] === undefined || entity[versionField.name] === null) {
        oldModel = await this.getOldModel(primaryKeys, entity, schema, versionField);
      }
      const primaryFieldNames = primaryKeys.map((pk) => pk.name);
      const fieldsToRetain = primaryFieldNames.concat(versionField.name);
      const fromEntries = Object.fromEntries(fieldsToRetain.map((key) => [key, oldModel[key]]));
      updateModel = { ...updatedEntity, ...fromEntries };

      // Increment the version field.
      this.incrementVersionField(versionField, updateModel as T);

      updateModel = this.modifyModel(updateModel as T, schema);
      queryBuilder.update(updateModel as T);
      if (oldModel[versionField.name]!==undefined || oldModel[versionField.name]!==null && this.isValid(oldModel[versionField.name])) {
        queryBuilder.andWhere(this.optWhere(oldModel, versionField));
      }
    } else {
      updateModel = this.modifyModel(updatedEntity as T, schema);
      queryBuilder.update(updateModel as T);
    }

    this.addPrimaryWhere(queryBuilder as unknown as Knex.QueryBuilder<any, any>, primaryKeys, updateModel as T);
    const sqlQuery = queryBuilder.toQuery();

    if (this.options?.logRawSqlQuery) {
      console.debug("UPDATE SQL: " + queryBuilder.toSQL().sql);
    }
    const updateQueryResponse = await this.forgeOperations.fetch().executeRawUpdateSQL(sqlQuery);
    if (versionField && !updateQueryResponse.affectedRows) {
      throw new Error(
          "Optimistic locking failed: the record with primary key(s) " +
          primaryKeys.map((p) => updateModel[p.name]).join(", ") +
          " has been modified by another process.",
      );
    }
  }

  /**
   * Constructs an optional WHERE clause for the version field.
   *
   * @param updateModel - The model containing the current version field value.
   * @param versionField - The version field property.
   * @returns A filter query for the version field.
   */
  private optWhere<T>(
      updateModel: T,
      versionField: EntityProperty<T>,
  ): QBFilterQuery<unknown> {
    const currentVersionValue = transformValue(
        { value: updateModel[versionField.name], type: versionField.type },
        false,
    );
    return { [versionField.name]: currentVersionValue };
  }

  /**
   * Retrieves the current state of a record from the database.
   *
   * @param primaryKeys - The primary key properties.
   * @param entity - The entity with updated values.
   * @param schema - The entity schema.
   * @param versionField - The version field property.
   * @returns The existing record from the database.
   * @throws If the record does not exist or if multiple records are found.
   */
  private async getOldModel<T>(
      primaryKeys: EntityProperty<T, unknown>[],
      entity: T,
      schema: EntitySchema<T>,
      versionField: EntityProperty<T>,
  ): Promise<T> {
    const primaryFieldNames = primaryKeys.map((pk) => pk.name);
    const fieldsToSelect = primaryFieldNames.concat(versionField.name);
    const queryBuilder = this.forgeOperations
        .createQueryBuilder(schema as EntitySchema)
        .select(fieldsToSelect);
    this.addPrimaryWhere(queryBuilder, primaryKeys, entity);
    const formattedQuery = queryBuilder.getFormattedQuery();
    const models: T[] = await this.forgeOperations.fetch().executeSchemaSQL(formattedQuery, schema as EntitySchema);

    if (!models || models.length === 0) {
      throw new Error(`Cannot modify record because it does not exist in table ${schema.meta.tableName}`);
    }
    if (models.length > 1) {
      throw new Error(
          `Cannot modify record because multiple rows with the same ID were found in table ${schema.meta.tableName}. Please verify the table metadata.`,
      );
    }
    return models[0];
  }

  /**
   * Adds primary key conditions to the query builder.
   *
   * @param queryBuilder - The Knex query builder instance.
   * @param primaryKeys - The primary key properties.
   * @param entity - The entity containing primary key values.
   * @throws If any primary key value is missing.
   */
  private addPrimaryWhere<T>(
      queryBuilder: Knex.QueryBuilder<any, any>,
      primaryKeys: EntityProperty<T, unknown>[],
      entity: T,
  ) {
    primaryKeys.forEach((pk) => {
      const fieldName = this.getRealFieldNameFromSchema(pk);
      const value = entity[fieldName];
      if (value === null || value === undefined) {
        throw new Error(`Primary key ${fieldName} must exist in the model`);
      }
      queryBuilder.andWhere({ [fieldName]: value });
    });
  }

  /**
   * Filters the entity to include only the specified fields.
   *
   * @param entity - The original entity.
   * @param fields - The list of fields to retain.
   * @returns A partial entity object containing only the specified fields.
   */
  filterEntityFields = <T extends object>(entity: T, fields: (keyof T)[]): Partial<T> =>
      fields.reduce((result, field) => {
        if (field in entity) {
          result[field] = entity[field];
        }
        return result;
      }, {} as Partial<T>);

  /**
   * Transforms and modifies the updated entity model based on the schema.
   *
   * @param updatedEntity - The updated entity.
   * @param schema - The entity schema.
   * @returns The modified entity.
   */
  private modifyModel<T>(updatedEntity: T, schema: EntitySchema<T>): T {
    const modifiedModel: Record<string, any> = {};
    schema.meta.props
        .filter((p) => p.kind === "scalar")
        .forEach((p) => {
          const value = updatedEntity[p.name];
          if (value !== undefined && value !== null) {
            const fieldName = this.getRealFieldNameFromSchema(p);
            modifiedModel[fieldName] = transformValue({ value, type: p.type }, false);
          }
        });
    return modifiedModel as T;
  }

  /**
   * Returns the real field name from the entity property based on the schema.
   *
   * @param p - The entity property.
   * @returns The real field name.
   */
  private getRealFieldNameFromSchema<T>(p: EntityProperty<T>): EntityKey<T> {
    return p.fieldNames && p.fieldNames.length
        ? (p.fieldNames[0] as EntityKey<T>)
        : p.name;
  }

  /**
   * Validates the provided value.
   *
   * @param value - The value to validate.
   * @returns True if the value is valid, false otherwise.
   */
  isValid(value: any): boolean {
    if (value instanceof Date) {
      return !isNaN(value.getTime());
    }
    return true;
  }
}

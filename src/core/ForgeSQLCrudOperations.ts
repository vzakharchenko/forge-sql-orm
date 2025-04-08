import { ForgeSqlOrmOptions } from "..";
import { CRUDForgeSQL, ForgeSqlOperation } from "./ForgeSQLQueryBuilder";
import { AnyMySqlTable } from "drizzle-orm/mysql-core/index";
import { AnyColumn, InferInsertModel } from "drizzle-orm";
import { eq, and } from "drizzle-orm";
import { SQL } from "drizzle-orm";
import { getPrimaryKeys, getTableMetadata } from "../utils/sqlUtils";

/**
 * Class implementing CRUD operations for ForgeSQL ORM.
 * Provides methods for inserting, updating, and deleting records with support for optimistic locking.
 */
export class ForgeSQLCrudOperations implements CRUDForgeSQL {
  private readonly forgeOperations: ForgeSqlOperation;
  private readonly options: ForgeSqlOrmOptions;

  /**
   * Creates a new instance of ForgeSQLCrudOperations.
   * @param forgeSqlOperations - The ForgeSQL operations instance
   * @param options - Configuration options for the ORM
   */
  constructor(forgeSqlOperations: ForgeSqlOperation, options: ForgeSqlOrmOptions) {
    this.forgeOperations = forgeSqlOperations;
    this.options = options;
  }

  /**
   * Inserts records into the database with optional versioning support.
   * If a version field exists in the schema, versioning is applied.
   *
   * @template T - The type of the table schema
   * @param {T} schema - The entity schema
   * @param {Partial<InferInsertModel<T>>[]} models - Array of entities to insert
   * @param {boolean} [updateIfExists=false] - Whether to update existing records
   * @returns {Promise<number>} The number of inserted rows
   * @throws {Error} If the insert operation fails
   */
  async insert<T extends AnyMySqlTable>(
    schema: T,
    models: InferInsertModel<T>[],
    updateIfExists: boolean = false,
  ): Promise<number> {
    if (!models?.length) return 0;

    const { tableName, columns } = getTableMetadata(schema);
    const versionMetadata = this.validateVersionField(tableName, columns);

    // Prepare models with version field if needed
    const preparedModels = models.map((model) =>
      this.prepareModelWithVersion(model, versionMetadata, columns),
    );

    // Build insert query
    const queryBuilder = this.forgeOperations
      .getDrizzleQueryBuilder()
      .insert(schema)
      .values(preparedModels);

    // Add onDuplicateKeyUpdate if needed
    const finalQuery = updateIfExists
      ? queryBuilder.onDuplicateKeyUpdate({
          set: Object.fromEntries(
            Object.keys(preparedModels[0]).map((key) => [key, (schema as any)[key]]),
          ) as any,
        })
      : queryBuilder;

    // Execute query
    const result = await finalQuery;
    return result[0].insertId;
  }

  /**
   * Deletes a record by its primary key with optional version check.
   * If versioning is enabled, ensures the record hasn't been modified since last read.
   *
   * @template T - The type of the table schema
   * @param {unknown} id - The ID of the record to delete
   * @param {T} schema - The entity schema
   * @returns {Promise<number>} Number of affected rows
   * @throws {Error} If the delete operation fails
   * @throws {Error} If multiple primary keys are found
   */
  async deleteById<T extends AnyMySqlTable>(id: unknown, schema: T): Promise<number> {
    const { tableName, columns } = getTableMetadata(schema);
    const primaryKeys = this.getPrimaryKeys(schema);

    if (primaryKeys.length !== 1) {
      throw new Error("Only single primary key is supported");
    }

    const [primaryKeyName, primaryKeyColumn] = primaryKeys[0];
    const versionMetadata = this.validateVersionField(tableName, columns);

    // Build delete conditions
    const conditions: SQL<unknown>[] = [eq(primaryKeyColumn, id)];

    // Add version check if needed
    if (versionMetadata && columns) {
      const versionField = columns[versionMetadata.fieldName];
      if (versionField) {
        const oldModel = await this.getOldModel({ [primaryKeyName]: id }, schema, [
          versionMetadata.fieldName,
          versionField,
        ]);
        conditions.push(eq(versionField, (oldModel as any)[versionMetadata.fieldName]));
      }
    }

    // Execute delete query
    const queryBuilder = this.forgeOperations
      .getDrizzleQueryBuilder()
      .delete(schema)
      .where(and(...conditions));

    const result = await queryBuilder;

    return result[0].affectedRows;
  }

  /**
   * Updates a record by its primary key with optimistic locking support.
   * If versioning is enabled:
   * - Retrieves the current version
   * - Checks for concurrent modifications
   * - Increments the version on successful update
   *
   * @template T - The type of the table schema
   * @param {Partial<InferInsertModel<T>>} entity - The entity with updated values
   * @param {T} schema - The entity schema
   * @returns {Promise<number>} Number of affected rows
   * @throws {Error} If the primary key is not provided
   * @throws {Error} If optimistic locking check fails
   * @throws {Error} If multiple primary keys are found
   */
  async updateById<T extends AnyMySqlTable>(
    entity: Partial<InferInsertModel<T>>,
    schema: T,
  ): Promise<number> {
    const { tableName, columns } = getTableMetadata(schema);
    const primaryKeys = this.getPrimaryKeys(schema);

    if (primaryKeys.length !== 1) {
      throw new Error("Only single primary key is supported");
    }

    const [primaryKeyName, primaryKeyColumn] = primaryKeys[0];
    const versionMetadata = this.validateVersionField(tableName, columns);

    // Validate primary key
    if (!(primaryKeyName in entity)) {
      throw new Error(`Primary key ${primaryKeyName} must be provided in the entity`);
    }

    // Get current version if needed
    const currentVersion = await this.getCurrentVersion(
      entity,
      primaryKeyName,
      versionMetadata,
      columns,
      schema,
    );

    // Prepare update data with version
    const updateData = this.prepareUpdateData(entity, versionMetadata, columns, currentVersion);

    // Build update conditions
    const conditions: SQL<unknown>[] = [
      eq(primaryKeyColumn, entity[primaryKeyName as keyof typeof entity]),
    ];
    if (versionMetadata && columns) {
      const versionField = columns[versionMetadata.fieldName];
      if (versionField) {
        conditions.push(eq(versionField, currentVersion));
      }
    }

    // Execute update query
    const queryBuilder = this.forgeOperations
      .getDrizzleQueryBuilder()
      .update(schema)
      .set(updateData)
      .where(and(...conditions));

    const result = await queryBuilder;
    // Check optimistic locking
    if (versionMetadata && result[0].affectedRows === 0) {
      throw new Error(
        `Optimistic locking failed: record with primary key ${entity[primaryKeyName as keyof typeof entity]} has been modified`,
      );
    }

    return result[0].affectedRows;
  }

  /**
   * Updates specified fields of records based on provided conditions.
   * This method does not support versioning and should be used with caution.
   *
   * @template T - The type of the table schema
   * @param {Partial<InferInsertModel<T>>} updateData - The data to update
   * @param {T} schema - The entity schema
   * @param {SQL<unknown>} where - The WHERE conditions
   * @returns {Promise<number>} Number of affected rows
   * @throws {Error} If WHERE conditions are not provided
   * @throws {Error} If the update operation fails
   */
  async updateFields<T extends AnyMySqlTable>(
    updateData: Partial<InferInsertModel<T>>,
    schema: T,
    where?: SQL<unknown>,
  ): Promise<number> {
    if (!where) {
      throw new Error("WHERE conditions must be provided");
    }

    const queryBuilder = this.forgeOperations
      .getDrizzleQueryBuilder()
      .update(schema)
      .set(updateData)
      .where(where);

    const result = await queryBuilder;
    return result[0].affectedRows;
  }

  // Helper methods

  /**
   * Gets primary keys from the schema.
   * @template T - The type of the table schema
   * @param {T} schema - The table schema
   * @returns {[string, AnyColumn][]} Array of primary key name and column pairs
   * @throws {Error} If no primary keys are found
   */
  private getPrimaryKeys<T extends AnyMySqlTable>(schema: T): [string, AnyColumn][] {
    const primaryKeys = getPrimaryKeys(schema);
    if (!primaryKeys) {
      throw new Error(`No primary keys found for schema: ${schema}`);
    }

    return primaryKeys;
  }

  /**
   * Validates and retrieves version field metadata.
   * @param {string} tableName - The name of the table
   * @param {Record<string, AnyColumn>} columns - The table columns
   * @returns {Object | undefined} Version field metadata if valid, undefined otherwise
   */
  private validateVersionField(
    tableName: string,
    columns: Record<string, AnyColumn>,
  ): { fieldName: string; type: string } | undefined {
    if (this.options.disableOptimisticLocking) {
      return undefined;
    }
    const versionMetadata = this.options.additionalMetadata?.[tableName]?.versionField;
    if (!versionMetadata) return undefined;
    let fieldName = versionMetadata.fieldName;

    let versionField = columns[versionMetadata.fieldName];
    if (!versionField) {
      const find = Object.entries(columns).find(([, c]) => c.name === versionMetadata.fieldName);
      if (find) {
        fieldName = find[0];
        versionField = find[1];
      }
    }
    if (!versionField) {
      console.warn(
        `Version field "${versionMetadata.fieldName}" not found in table ${tableName}. Versioning will be skipped.`,
      );
      return undefined;
    }

    if (!versionField.notNull) {
      console.warn(
        `Version field "${versionMetadata.fieldName}" in table ${tableName} is nullable. Versioning may not work correctly.`,
      );
      return undefined;
    }

    const fieldType = versionField.getSQLType();
    const isSupportedType =
      fieldType === "datetime" ||
      fieldType === "timestamp" ||
      fieldType === "int" ||
      fieldType === "number" ||
      fieldType === "decimal";

    if (!isSupportedType) {
      console.warn(
        `Version field "${versionMetadata.fieldName}" in table ${tableName} has unsupported type "${fieldType}". ` +
          `Only datetime, timestamp, int, and decimal types are supported for versioning. Versioning will be skipped.`,
      );
      return undefined;
    }

    return { fieldName, type: fieldType };
  }

  /**
   * Gets the current version of an entity.
   * @template T - The type of the table schema
   * @param {Partial<InferInsertModel<T>>} entity - The entity
   * @param {string} primaryKeyName - The name of the primary key
   * @param {Object | undefined} versionMetadata - Version field metadata
   * @param {Record<string, AnyColumn>} columns - The table columns
   * @param {T} schema - The table schema
   * @returns {Promise<unknown>} The current version value
   */
  private async getCurrentVersion<T extends AnyMySqlTable>(
    entity: Partial<InferInsertModel<T>>,
    primaryKeyName: string,
    versionMetadata: { fieldName: string; type: string } | undefined,
    columns: Record<string, AnyColumn>,
    schema: T,
  ): Promise<unknown> {
    if (!versionMetadata || !columns) return undefined;

    const versionField = columns[versionMetadata.fieldName];
    if (!versionField) return undefined;

    if (versionMetadata.fieldName in entity) {
      return entity[versionMetadata.fieldName as keyof typeof entity];
    }

    const oldModel = await this.getOldModel(
      { [primaryKeyName]: entity[primaryKeyName as keyof typeof entity] },
      schema,
      [versionMetadata.fieldName, versionField],
    );

    return (oldModel as any)[versionMetadata.fieldName];
  }

  /**
   * Prepares a model for insertion with version field.
   * @template T - The type of the table schema
   * @param {Partial<InferInsertModel<T>>} model - The model to prepare
   * @param {Object | undefined} versionMetadata - Version field metadata
   * @param {Record<string, AnyColumn>} columns - The table columns
   * @returns {InferInsertModel<T>} The prepared model
   */
  private prepareModelWithVersion<T extends AnyMySqlTable>(
    model: Partial<InferInsertModel<T>>,
    versionMetadata: { fieldName: string; type: string } | undefined,
    columns: Record<string, AnyColumn>,
  ): InferInsertModel<T> {
    if (!versionMetadata || !columns) return model as InferInsertModel<T>;
    let fieldName = versionMetadata.fieldName;
    let versionField = columns[versionMetadata.fieldName];
    if (!versionField) {
      const find = Object.entries(columns).find(([, c]) => c.name === versionMetadata.fieldName);
      if (find) {
        fieldName = find[0];
        versionField = find[1];
      }
    }

    if (!versionField) return model as InferInsertModel<T>;

    const modelWithVersion = { ...model };
    const fieldType = versionField.getSQLType();
    const versionValue = fieldType === "datetime" || fieldType === "timestamp" ? new Date() : 1;
    modelWithVersion[fieldName as keyof typeof modelWithVersion] = versionValue as any;

    return modelWithVersion as InferInsertModel<T>;
  }

  /**
   * Prepares update data with version field.
   * @template T - The type of the table schema
   * @param {Partial<InferInsertModel<T>>} entity - The entity to update
   * @param {Object | undefined} versionMetadata - Version field metadata
   * @param {Record<string, AnyColumn>} columns - The table columns
   * @param {unknown} currentVersion - The current version value
   * @returns {Partial<InferInsertModel<T>>} The prepared update data
   */
  private prepareUpdateData<T extends AnyMySqlTable>(
    entity: Partial<InferInsertModel<T>>,
    versionMetadata: { fieldName: string; type: string } | undefined,
    columns: Record<string, AnyColumn>,
    currentVersion: unknown,
  ): Partial<InferInsertModel<T>> {
    const updateData = { ...entity };

    if (versionMetadata && columns) {
      const versionField = columns[versionMetadata.fieldName];
      if (versionField) {
        const fieldType = versionField.getSQLType();
        updateData[versionMetadata.fieldName as keyof typeof updateData] =
          fieldType === "datetime" || fieldType === "timestamp"
            ? new Date()
            : (((currentVersion as number) + 1) as any);
      }
    }

    return updateData;
  }

  /**
   * Retrieves an existing model by primary key.
   * @template T - The type of the table schema
   * @param {Record<string, unknown>} primaryKeyValues - The primary key values
   * @param {T} schema - The table schema
   * @param {[string, AnyColumn]} versionField - The version field name and column
   * @returns {Promise<Awaited<T> extends Array<any> ? Awaited<T>[number] | undefined : Awaited<T> | undefined>} The existing model
   * @throws {Error} If the record is not found
   */
  private async getOldModel<T extends AnyMySqlTable>(
    primaryKeyValues: Record<string, unknown>,
    schema: T,
    versionField: [string, AnyColumn],
  ): Promise<
    Awaited<T> extends Array<any> ? Awaited<T>[number] | undefined : Awaited<T> | undefined
  > {
    const [versionFieldName, versionFieldColumn] = versionField;
    const primaryKeys = this.getPrimaryKeys(schema);
    const [primaryKeyName, primaryKeyColumn] = primaryKeys[0];

    const resultQuery = this.forgeOperations
      .getDrizzleQueryBuilder()
      .select({
        [primaryKeyName]: primaryKeyColumn as any,
        [versionFieldName]: versionFieldColumn as any,
      })
      .from(schema)
      .where(eq(primaryKeyColumn, primaryKeyValues[primaryKeyName]));

    const model = await this.forgeOperations.fetch().executeQueryOnlyOne(resultQuery);

    if (!model) {
      throw new Error(`Record not found in table ${schema}`);
    }

    return model as Awaited<T> extends Array<any> ? Awaited<T>[number] : Awaited<T>;
  }
}

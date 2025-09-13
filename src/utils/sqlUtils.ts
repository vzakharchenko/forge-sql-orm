import { AnyColumn, Column, isTable, SQL, sql, StringChunk } from "drizzle-orm";
import { AnyMySqlTable, MySqlCustomColumn } from "drizzle-orm/mysql-core/index";
import { DateTime } from "luxon";
import { PrimaryKeyBuilder } from "drizzle-orm/mysql-core/primary-keys";
import { AnyIndexBuilder } from "drizzle-orm/mysql-core/indexes";
import { CheckBuilder } from "drizzle-orm/mysql-core/checks";
import { ForeignKeyBuilder } from "drizzle-orm/mysql-core/foreign-keys";
import { UniqueConstraintBuilder } from "drizzle-orm/mysql-core/unique-constraint";
import type { SelectedFields } from "drizzle-orm/mysql-core/query-builders/select.types";
import { MySqlTable } from "drizzle-orm/mysql-core";
import { isSQLWrapper } from "drizzle-orm/sql/sql";

/**
 * Interface representing table metadata information
 */
export interface MetadataInfo {
  /** The name of the table */
  tableName: string;
  /** Record of column names and their corresponding column definitions */
  columns: Record<string, AnyColumn>;
  /** Array of index builders */
  indexes: AnyIndexBuilder[];
  /** Array of check constraint builders */
  checks: CheckBuilder[];
  /** Array of foreign key builders */
  foreignKeys: ForeignKeyBuilder[];
  /** Array of primary key builders */
  primaryKeys: PrimaryKeyBuilder[];
  /** Array of unique constraint builders */
  uniqueConstraints: UniqueConstraintBuilder[];
  /** Array of all extra builders */
  extras: any[];
}

/**
 * Interface for config builder data
 */
interface ConfigBuilderData {
  value?: any;
  [key: string]: any;
}

/**
 * Parses a date string into a Date object using the specified format
 * @param value - The date string to parse or Date
 * @param format - The format to use for parsing
 * @returns Date object
 */

export const parseDateTime = (value: string | Date, format: string): Date => {
  let result: Date;
  if (value instanceof Date) {
    result = value;
  } else {
    // 1. Try to parse using the provided format (strict mode)
    const dt = DateTime.fromFormat(value, format);
    if (dt.isValid) {
      result = dt.toJSDate();
    } else {
      // 2. Try to parse as ISO string
      const isoDt = DateTime.fromISO(value);
      if (isoDt.isValid) {
        result = isoDt.toJSDate();
      } else {
        // 3. Fallback: use native Date constructor
        result = new Date(value);
      }
    }
  }
  // 4. Ensure the result is a valid Date object
  if (isNaN(result.getTime())) {
    result = new Date(value);
  }
  return result;
};

/**
 * Helper function to validate and format Date objects using DateTime
 * @param value - Date object to validate and format
 * @param format - DateTime format string
 * @returns Formatted date string
 * @throws Error if date is invalid
 */
export function formatDateTime(value: Date, format: string): string {
  const fromJSDate = DateTime.fromJSDate(value);
  if (fromJSDate.isValid) {
    return fromJSDate.toFormat(format);
  } else {
    throw new Error("Invalid Date");
  }
}

/**
 * Gets primary keys from the schema.
 * @template T - The type of the table schema
 * @param {T} table - The table schema
 * @returns {[string, AnyColumn][]} Array of primary key name and column pairs
 */
export function getPrimaryKeys<T extends AnyMySqlTable>(table: T): [string, AnyColumn][] {
  const { columns, primaryKeys } = getTableMetadata(table);

  // First try to find primary keys in columns
  const columnPrimaryKeys = Object.entries(columns).filter(([, column]) => column.primary) as [
    string,
    AnyColumn,
  ][];

  if (columnPrimaryKeys.length > 0) {
    return columnPrimaryKeys;
  }

  // If no primary keys found in columns, check primary key builders
  if (Array.isArray(primaryKeys) && primaryKeys.length > 0) {
    // Collect all primary key columns from all primary key builders
    const primaryKeyColumns = new Set<[string, AnyColumn]>();

    primaryKeys.forEach((primaryKeyBuilder) => {
      // Get primary key columns from each builder
      Object.entries(columns)
        .filter(([, column]) => {
          // @ts-ignore - PrimaryKeyBuilder has internal columns property
          return primaryKeyBuilder.columns.includes(column);
        })
        .forEach(([name, column]) => {
          primaryKeyColumns.add([name, column]);
        });
    });

    return Array.from(primaryKeyColumns);
  }

  return [];
}

/**
 * Processes foreign keys from both foreignKeysSymbol and extraSymbol
 * @param table - The table schema
 * @param foreignKeysSymbol - Symbol for foreign keys
 * @param extraSymbol - Symbol for extra configuration
 * @returns Array of foreign key builders
 */
function processForeignKeys(
  table: AnyMySqlTable,
  foreignKeysSymbol: symbol | undefined,
  extraSymbol: symbol | undefined,
): ForeignKeyBuilder[] {
  const foreignKeys: ForeignKeyBuilder[] = [];

  // Process foreign keys from foreignKeysSymbol
  if (foreignKeysSymbol) {
    // @ts-ignore
    const fkArray: any[] = table[foreignKeysSymbol];
    if (fkArray) {
      fkArray.forEach((fk) => {
        if (fk.reference) {
          const item = fk.reference(fk);
          foreignKeys.push(item);
        }
      });
    }
  }

  // Process foreign keys from extraSymbol
  if (extraSymbol) {
    // @ts-ignore
    const extraConfigBuilder = table[extraSymbol];
    if (extraConfigBuilder && typeof extraConfigBuilder === "function") {
      const configBuilderData = extraConfigBuilder(table);
      if (configBuilderData) {
        const configBuilders = Array.isArray(configBuilderData)
          ? configBuilderData
          : Object.values(configBuilderData).map(
              (item) => (item as ConfigBuilderData).value ?? item,
            );

        configBuilders.forEach((builder) => {
          if (!builder?.constructor) return;

          const builderName = builder.constructor.name.toLowerCase();
          if (builderName.includes("foreignkeybuilder")) {
            foreignKeys.push(builder);
          }
        });
      }
    }
  }

  return foreignKeys;
}

/**
 * Extracts table metadata from the schema.
 * @param {AnyMySqlTable} table - The table schema
 * @returns {MetadataInfo} Object containing table metadata
 */
export function getTableMetadata(table: AnyMySqlTable): MetadataInfo {
  const symbols = Object.getOwnPropertySymbols(table);
  const nameSymbol = symbols.find((s) => s.toString().includes("Name"));
  const columnsSymbol = symbols.find((s) => s.toString().includes("Columns"));
  const foreignKeysSymbol = symbols.find((s) => s.toString().includes("ForeignKeys)"));
  const extraSymbol = symbols.find((s) => s.toString().includes("ExtraConfigBuilder"));

  // Initialize builders arrays
  const builders = {
    indexes: [] as AnyIndexBuilder[],
    checks: [] as CheckBuilder[],
    foreignKeys: [] as ForeignKeyBuilder[],
    primaryKeys: [] as PrimaryKeyBuilder[],
    uniqueConstraints: [] as UniqueConstraintBuilder[],
    extras: [] as any[],
  };

  // Process foreign keys
  builders.foreignKeys = processForeignKeys(table, foreignKeysSymbol, extraSymbol);

  // Process extra configuration if available
  if (extraSymbol) {
    // @ts-ignore
    const extraConfigBuilder = table[extraSymbol];
    if (extraConfigBuilder && typeof extraConfigBuilder === "function") {
      const configBuilderData = extraConfigBuilder(table);
      if (configBuilderData) {
        // Convert configBuilderData to array if it's an object
        const configBuilders = Array.isArray(configBuilderData)
          ? configBuilderData
          : Object.values(configBuilderData).map(
              (item) => (item as ConfigBuilderData).value ?? item,
            );

        // Process each builder
        configBuilders.forEach((builder) => {
          if (!builder?.constructor) return;

          const builderName = builder.constructor.name.toLowerCase();

          // Map builder types to their corresponding arrays
          const builderMap = {
            indexbuilder: builders.indexes,
            checkbuilder: builders.checks,
            primarykeybuilder: builders.primaryKeys,
            uniqueconstraintbuilder: builders.uniqueConstraints,
          };

          // Add builder to appropriate array if it matches any type
          for (const [type, array] of Object.entries(builderMap)) {
            if (builderName.includes(type)) {
              array.push(builder);
              break;
            }
          }

          // Always add to extras array
          builders.extras.push(builder);
        });
      }
    }
  }

  return {
    tableName: nameSymbol ? (table as any)[nameSymbol] : "",
    columns: columnsSymbol ? ((table as any)[columnsSymbol] as Record<string, AnyColumn>) : {},
    ...builders,
  };
}

/**
 * Generates SQL statements for dropping tables and/or their sequences.
 *
 * @param tables - List of table names to generate DROP statements for.
 * @param options - Configuration object:
 *   - sequence: whether to drop associated sequences (default: true)
 *   - table: whether to drop tables themselves (default: true)
 * @returns Array of SQL statements for dropping the specified objects
 */
export function generateDropTableStatements(
  tables: string[],
  options?: { sequence: boolean; table: boolean },
): string[] {
  const dropStatements: string[] = [];
  const validOptions = options ?? { sequence: true, table: true };
  if (!validOptions.sequence && !validOptions.table) {
    console.warn('No drop operations requested: both "table" and "sequence" options are false');
    return [];
  }
  tables.forEach((tableName) => {
    if (validOptions.table) {
      dropStatements.push(`DROP TABLE IF EXISTS \`${tableName}\`;`);
    }
    if (validOptions.sequence) {
      dropStatements.push(`DROP SEQUENCE IF EXISTS \`${tableName}\`;`);
    }
  });

  return dropStatements;
}

type AliasColumnMap = Record<string, AnyColumn>;

function mapSelectTableToAlias(
  table: MySqlTable,
  uniqPrefix: string,
  aliasMap: AliasColumnMap,
): any {
  const { columns, tableName } = getTableMetadata(table);
  const selectionsTableFields: Record<string, unknown> = {};
  Object.keys(columns).forEach((name) => {
    const column = columns[name] as AnyColumn;
    const uniqName = `a_${uniqPrefix}_${tableName}_${column.name}`.toLowerCase();
    const fieldAlias = sql.raw(uniqName);
    selectionsTableFields[name] = sql`${column} as \`${fieldAlias}\``;
    aliasMap[uniqName] = column;
  });
  return selectionsTableFields;
}

function isDrizzleColumn(column: any): boolean {
  return column && typeof column === "object" && "table" in column;
}

export function mapSelectAllFieldsToAlias(
  selections: any,
  name: string,
  uniqName: string,
  fields: any,
  aliasMap: AliasColumnMap,
): any {
  if (isTable(fields)) {
    selections[name] = mapSelectTableToAlias(fields as MySqlTable, uniqName, aliasMap);
  } else if (isDrizzleColumn(fields)) {
    const column = fields as Column;
    const uniqAliasName = `a_${uniqName}_${column.name}`.toLowerCase();
    let aliasName = sql.raw(uniqAliasName);
    selections[name] = sql`${column} as \`${aliasName}\``;
    aliasMap[uniqAliasName] = column;
  } else if (isSQLWrapper(fields)) {
    selections[name] = fields;
  } else {
    const innerSelections: any = {};
    Object.entries(fields).forEach(([iname, ifields]) => {
      mapSelectAllFieldsToAlias(innerSelections, iname, `${uniqName}_${iname}`, ifields, aliasMap);
    });
    selections[name] = innerSelections;
  }
  return selections;
}
export function mapSelectFieldsWithAlias<TSelection extends SelectedFields>(
  fields: TSelection,
): { selections: TSelection; aliasMap: AliasColumnMap } {
  if (!fields) {
    throw new Error("fields is empty");
  }
  const aliasMap: AliasColumnMap = {};
  const selections: any = {};
  Object.entries(fields).forEach(([name, fields]) => {
    mapSelectAllFieldsToAlias(selections, name, name, fields, aliasMap);
  });
  return { selections, aliasMap };
}

function getAliasFromDrizzleAlias(value: unknown): string | undefined {
  const isSQL =
    value !== null && typeof value === "object" && isSQLWrapper(value) && "queryChunks" in value;
  if (isSQL) {
    const sql = value as SQL;
    const queryChunks = sql.queryChunks;
    if (queryChunks.length > 3) {
      const aliasNameChunk = queryChunks[queryChunks.length - 2];
      if (isSQLWrapper(aliasNameChunk) && "queryChunks" in aliasNameChunk) {
        const aliasNameChunkSql = aliasNameChunk as SQL;
        if (aliasNameChunkSql.queryChunks?.length === 1 && aliasNameChunkSql.queryChunks[0]) {
          const queryChunksStringChunc = aliasNameChunkSql.queryChunks[0];
          if ("value" in queryChunksStringChunc) {
            const values = (queryChunksStringChunc as StringChunk).value;
            if (values && values.length === 1) {
              return values[0];
            }
          }
        }
      }
    }
  }
  return undefined;
}

function transformValue(
  value: unknown,
  alias: string,
  aliasMap: Record<string, AnyColumn>,
): unknown {
  const column = aliasMap[alias];
  if (!column) return value;

  let customColumn = column as MySqlCustomColumn<any>;
  // @ts-ignore
  const fromDriver = customColumn?.mapFrom;
  if (fromDriver && value !== null && value !== undefined) {
    return fromDriver(value);
  }
  return value;
}

function transformObject(
  obj: Record<string, unknown>,
  selections: Record<string, unknown>,
  aliasMap: Record<string, AnyColumn>,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(obj)) {
    const selection = selections[key];
    const alias = getAliasFromDrizzleAlias(selection);
    if (alias && aliasMap[alias]) {
      result[key] = transformValue(value, alias, aliasMap);
    } else if (selection && typeof selection === "object" && !isSQLWrapper(selection)) {
      result[key] = transformObject(
        value as Record<string, unknown>,
        selection as Record<string, unknown>,
        aliasMap,
      );
    } else {
      result[key] = value;
    }
  }

  return result;
}

export function applyFromDriverTransform<T, TSelection>(
  rows: T[],
  selections: TSelection,
  aliasMap: Record<string, AnyColumn>,
): T[] {
  return rows.map((row) => {
    const transformed = transformObject(
      row as Record<string, unknown>,
      selections as Record<string, unknown>,
      aliasMap,
    ) as Record<string, unknown>;

    return processNullBranches(transformed) as unknown as T;
  });
}

function processNullBranches(obj: Record<string, unknown>): Record<string, unknown> | null {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Skip built-in objects like Date, Array, etc.
  if (obj.constructor && obj.constructor.name !== "Object") {
    return obj;
  }

  const result: Record<string, unknown> = {};
  let allNull = true;

  for (const [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined) {
      result[key] = null;
      continue;
    }

    if (typeof value === "object") {
      const processed = processNullBranches(value as Record<string, unknown>);
      result[key] = processed;
      if (processed !== null) {
        allNull = false;
      }
    } else {
      result[key] = value;
      allNull = false;
    }
  }

  return allNull ? null : result;
}

export function formatLimitOffset(limitOrOffset: number): number {
  if (typeof limitOrOffset !== "number" || isNaN(limitOrOffset)) {
    throw new Error("limitOrOffset must be a valid number");
  }
  return sql.raw(`${limitOrOffset}`) as unknown as number;
}

export function nextVal(sequenceName: string): number {
  return sql.raw(`NEXTVAL(${sequenceName})`) as unknown as number;
}

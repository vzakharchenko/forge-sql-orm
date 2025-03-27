import moment from "moment";
import { AnyColumn } from "drizzle-orm";
import { AnyMySqlTable } from "drizzle-orm/mysql-core/index";
import { PrimaryKeyBuilder } from "drizzle-orm/mysql-core/primary-keys";
import { AnyIndexBuilder } from "drizzle-orm/mysql-core/indexes";
import { CheckBuilder } from "drizzle-orm/mysql-core/checks";
import { ForeignKeyBuilder } from "drizzle-orm/mysql-core/foreign-keys";
import { UniqueConstraintBuilder } from "drizzle-orm/mysql-core/unique-constraint";

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
 * @param value - The date string to parse
 * @param format - The format to use for parsing
 * @returns Date object
 */
export const parseDateTime = (value: string, format: string): Date => {
  const m = moment(value, format, true);
  if (!m.isValid()) {
    return moment(value).toDate();
  }
  return m.toDate();
};

/**
 * Extracts the alias from a SQL query
 * @param query - The SQL query to extract the alias from
 * @returns The extracted alias or the original query if no alias found
 */
export function extractAlias(query: string): string {
  const match = query.match(/\bas\s+(['"`]?)([\w*]+)\1$/i);
  return match ? match[2] : query;
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
  extraSymbol: symbol | undefined
): ForeignKeyBuilder[] {
  const foreignKeys: ForeignKeyBuilder[] = [];

  // Process foreign keys from foreignKeysSymbol
  if (foreignKeysSymbol) {
    // @ts-ignore
    const fkArray: any[] = table[foreignKeysSymbol];
    if (fkArray) {
      fkArray.forEach(fk => {
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
              (item) => (item as ConfigBuilderData).value || item,
            );

        configBuilders.forEach((builder) => {
          if (!builder?.constructor) return;

          const builderName = builder.constructor.name.toLowerCase();
          if (builderName.includes('foreignkeybuilder')) {
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
              (item) => (item as ConfigBuilderData).value || item,
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

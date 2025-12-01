import {
  and,
  AnyColumn,
  Column,
  gte,
  ilike,
  isNotNull,
  isTable,
  ne,
  not,
  notInArray,
  SQL,
  sql,
  StringChunk,
} from "drizzle-orm";
import { AnyMySqlTable, MySqlCustomColumn } from "drizzle-orm/mysql-core/index";
import { DateTime } from "luxon";
import { PrimaryKeyBuilder } from "drizzle-orm/mysql-core/primary-keys";
import { AnyIndexBuilder } from "drizzle-orm/mysql-core/indexes";
import { CheckBuilder } from "drizzle-orm/mysql-core/checks";
import { ForeignKeyBuilder } from "drizzle-orm/mysql-core/foreign-keys";
import { UniqueConstraintBuilder } from "drizzle-orm/mysql-core/unique-constraint";
import { SelectedFields } from "drizzle-orm/mysql-core/query-builders/select.types";
import { MySqlTable } from "drizzle-orm/mysql-core";
import { isSQLWrapper } from "drizzle-orm/sql/sql";
import { clusterStatementsSummary, slowQuery } from "../core/SystemTables";
import { ForgeSqlOperation } from "../core/ForgeSQLQueryBuilder";
import { ColumnDataType } from "drizzle-orm/column-builder";
import { AnyMySqlColumn } from "drizzle-orm/mysql-core/columns/common";
import type { ColumnBaseConfig } from "drizzle-orm/column";

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
      // 2. Try to parse as SQL string
      const sqlDt = DateTime.fromSQL(value);
      if (sqlDt.isValid) {
        result = sqlDt.toJSDate();
      } else {
        // 3. Try to parse as RFC2822 string
        const isoDt = DateTime.fromRFC2822(value);
        if (isoDt.isValid) {
          result = isoDt.toJSDate();
        } else {
          // 4. Fallback: use native Date constructor
          result = new Date(value);
        }
      }
    }
  }
  // 4. Ensure the result is a valid Date object
  if (Number.isNaN(result.getTime())) {
    result = new Date(value);
  }
  return result;
};

/**
 * Parses a string value into DateTime using multiple format parsers
 */
function parseStringToDateTime(value: string): DateTime | null {
  const parsers = [DateTime.fromISO, DateTime.fromRFC2822, DateTime.fromSQL, DateTime.fromHTTP];

  for (const parser of parsers) {
    const dt = parser(value);
    if (dt.isValid) {
      return dt;
    }
  }

  // Try parsing as number string
  const parsed = Number(value);
  if (!Number.isNaN(parsed)) {
    return DateTime.fromMillis(parsed);
  }

  return null;
}

/**
 * Converts a value to DateTime
 */
function valueToDateTime(value: Date | string | number): DateTime {
  let dt: DateTime | null = null;

  if (value instanceof Date) {
    dt = DateTime.fromJSDate(value);
  } else if (typeof value === "string") {
    dt = parseStringToDateTime(value);
  } else if (typeof value === "number") {
    dt = DateTime.fromMillis(value);
  } else {
    throw new Error("Unsupported type");
  }

  if (!dt?.isValid) {
    throw new Error("Invalid Date");
  }

  return dt;
}

/**
 * Validates timestamp range for Atlassian Forge compatibility
 */
function validateTimestampRange(dt: DateTime): void {
  const minDate = DateTime.fromSeconds(1);
  const maxDate = DateTime.fromMillis(2147483647 * 1000); // 2038-01-19 03:14:07.999 UTC

  if (dt < minDate) {
    throw new Error(
      "Atlassian Forge does not support zero or negative timestamps. Allowed range: from '1970-01-01 00:00:01.000000' to '2038-01-19 03:14:07.999999'.",
    );
  }

  if (dt > maxDate) {
    throw new Error(
      "Atlassian Forge does not support timestamps beyond 2038-01-19 03:14:07.999999. Please use a smaller date within the supported range.",
    );
  }
}

/**
 * Helper function to validate and format a date-like value using Luxon DateTime.
 * @param value - Date object, ISO/RFC2822/SQL/HTTP string, or timestamp (number|string).
 * @param format - DateTime format string (Luxon format tokens).
 * @param isTimeStamp - Whether to validate timestamp range
 * @returns Formatted date string.
 * @throws Error if value cannot be parsed as a valid date.
 */
export function formatDateTime(
  value: Date | string | number,
  format: string,
  isTimeStamp: boolean,
): string {
  const dt = valueToDateTime(value);

  if (isTimeStamp) {
    validateTimestampRange(dt);
  }

  return dt.toFormat(format);
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

    for (const primaryKeyBuilder of primaryKeys) {
      // Get primary key columns from each builder
      for (const [name, column1] of Object.entries(columns).filter(([, column]) => {
        // @ts-ignore - PrimaryKeyBuilder has internal columns property
        return primaryKeyBuilder.columns.includes(column);
      })) {
        primaryKeyColumns.add([name, column1]);
      }
    }

    return Array.from(primaryKeyColumns);
  }

  return [];
}

/**
 * Processes foreign keys from foreignKeysSymbol
 */
function processForeignKeysFromSymbol(
  table: AnyMySqlTable,
  foreignKeysSymbol: symbol,
): ForeignKeyBuilder[] {
  const foreignKeys: ForeignKeyBuilder[] = [];
  // @ts-ignore
  const fkArray: any[] = table[foreignKeysSymbol];

  if (!fkArray) {
    return foreignKeys;
  }

  for (const fk of fkArray) {
    if (fk.reference) {
      const item = fk.reference(fk);
      foreignKeys.push(item);
    }
  }

  return foreignKeys;
}

/**
 * Extracts config builders from config builder data
 */
function extractConfigBuilders(configBuilderData: any): any[] {
  if (Array.isArray(configBuilderData)) {
    return configBuilderData;
  }

  return Object.values(configBuilderData).map((item) => (item as ConfigBuilderData).value ?? item);
}

/**
 * Checks if a builder is a ForeignKeyBuilder
 */
function isForeignKeyBuilder(builder: any): boolean {
  if (!builder?.constructor) {
    return false;
  }

  const builderName = builder.constructor.name.toLowerCase();
  return builderName.includes("foreignkeybuilder");
}

/**
 * Processes foreign keys from extraSymbol
 */
function processForeignKeysFromExtra(
  table: AnyMySqlTable,
  extraSymbol: symbol,
): ForeignKeyBuilder[] {
  const foreignKeys: ForeignKeyBuilder[] = [];
  // @ts-ignore
  const extraConfigBuilder = table[extraSymbol];

  if (!extraConfigBuilder || typeof extraConfigBuilder !== "function") {
    return foreignKeys;
  }

  const configBuilderData = extraConfigBuilder(table);
  if (!configBuilderData) {
    return foreignKeys;
  }

  const configBuilders = extractConfigBuilders(configBuilderData);

  for (const builder of configBuilders) {
    if (isForeignKeyBuilder(builder)) {
      foreignKeys.push(builder);
    }
  }

  return foreignKeys;
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
    foreignKeys.push(...processForeignKeysFromSymbol(table, foreignKeysSymbol));
  }

  // Process foreign keys from extraSymbol
  if (extraSymbol) {
    foreignKeys.push(...processForeignKeysFromExtra(table, extraSymbol));
  }

  return foreignKeys;
}

/**
 * Extracts symbols from table schema.
 * @param table - The table schema
 * @returns Object containing relevant symbols
 */
function extractTableSymbols(table: AnyMySqlTable) {
  const symbols = Object.getOwnPropertySymbols(table);
  return {
    nameSymbol: symbols.find((s) => s.toString().includes("Name")),
    columnsSymbol: symbols.find((s) => s.toString().includes("Columns")),
    foreignKeysSymbol: symbols.find((s) => s.toString().includes("ForeignKeys)")),
    extraSymbol: symbols.find((s) => s.toString().includes("ExtraConfigBuilder")),
  };
}

/**
 * Maps builder to appropriate array based on its type.
 * @param builder - The builder object
 * @param builders - The builders object containing all arrays
 * @returns True if builder was added to a specific array, false otherwise
 */
function addBuilderToTypedArray(
  builder: any,
  builders: {
    indexes: AnyIndexBuilder[];
    checks: CheckBuilder[];
    primaryKeys: PrimaryKeyBuilder[];
    uniqueConstraints: UniqueConstraintBuilder[];
  },
): boolean {
  if (!builder?.constructor) {
    return false;
  }

  const builderName = builder.constructor.name.toLowerCase();
  const builderMap = {
    indexbuilder: builders.indexes,
    checkbuilder: builders.checks,
    primarykeybuilder: builders.primaryKeys,
    uniqueconstraintbuilder: builders.uniqueConstraints,
  };

  for (const [type, array] of Object.entries(builderMap)) {
    if (builderName.includes(type)) {
      array.push(builder);
      return true;
    }
  }

  return false;
}

/**
 * Processes extra configuration builders and adds them to the builders object.
 * @param table - The table schema
 * @param extraSymbol - The extra symbol from table
 * @param builders - The builders object to populate
 */
function processExtraConfigBuilders(
  table: AnyMySqlTable,
  extraSymbol: symbol | undefined,
  builders: {
    indexes: AnyIndexBuilder[];
    checks: CheckBuilder[];
    foreignKeys: ForeignKeyBuilder[];
    primaryKeys: PrimaryKeyBuilder[];
    uniqueConstraints: UniqueConstraintBuilder[];
    extras: any[];
  },
): void {
  if (!extraSymbol) {
    return;
  }

  // @ts-ignore
  const extraConfigBuilder = table[extraSymbol];
  if (!extraConfigBuilder || typeof extraConfigBuilder !== "function") {
    return;
  }

  const configBuilderData = extraConfigBuilder(table);
  if (!configBuilderData) {
    return;
  }

  const configBuilders = extractConfigBuilders(configBuilderData);

  for (const builder of configBuilders) {
    addBuilderToTypedArray(builder, builders);
    builders.extras.push(builder);
  }
}

/**
 * Extracts table metadata from the schema.
 * @param {AnyMySqlTable} table - The table schema
 * @returns {MetadataInfo} Object containing table metadata
 */
export function getTableMetadata(table: AnyMySqlTable): MetadataInfo {
  const { nameSymbol, columnsSymbol, foreignKeysSymbol, extraSymbol } = extractTableSymbols(table);

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
  processExtraConfigBuilders(table, extraSymbol, builders);

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
    // eslint-disable-next-line no-console
    console.warn('No drop operations requested: both "table" and "sequence" options are false');
    return [];
  }
  for (const tableName of tables) {
    if (validOptions.table) {
      dropStatements.push(`DROP TABLE IF EXISTS \`${tableName}\`;`);
    }
    if (validOptions.sequence) {
      dropStatements.push(`DROP SEQUENCE IF EXISTS \`${tableName}\`;`);
    }
  }

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
  for (const name of Object.keys(columns)) {
    const column = columns[name] as AnyColumn;
    const uniqName = `a_${uniqPrefix}_${tableName}_${column.name}`.toLowerCase();
    const fieldAlias = sql.raw(uniqName);
    selectionsTableFields[name] = sql`${column} as \`${fieldAlias}\``;
    aliasMap[uniqName] = column;
  }
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
    for (const [iname, ifields] of Object.entries(fields)) {
      mapSelectAllFieldsToAlias(innerSelections, iname, `${uniqName}_${iname}`, ifields, aliasMap);
    }
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
  for (const [name, fields1] of Object.entries(fields)) {
    mapSelectAllFieldsToAlias(selections, name, name, fields1, aliasMap);
  }
  return { selections, aliasMap };
}

/**
 * Checks if value is a SQL object with queryChunks
 */
function isSQLValue(value: unknown): value is SQL {
  return (
    value !== null && typeof value === "object" && isSQLWrapper(value) && "queryChunks" in value
  );
}

/**
 * Extracts the alias name chunk from query chunks if it exists and is a SQL object
 */
function getAliasNameChunk(queryChunks: any[]): SQL | undefined {
  if (queryChunks.length <= 3) {
    return undefined;
  }

  const aliasNameChunk = queryChunks[queryChunks.length - 2];
  if (isSQLWrapper(aliasNameChunk) && "queryChunks" in aliasNameChunk) {
    return aliasNameChunk as SQL;
  }

  return undefined;
}

/**
 * Extracts string value from a SQL chunk if it contains a single string value
 */
function extractStringValueFromChunk(chunk: SQL): string | undefined {
  if (chunk.queryChunks?.length !== 1 || !chunk.queryChunks[0]) {
    return undefined;
  }

  const stringChunk = chunk.queryChunks[0];
  if (!("value" in stringChunk)) {
    return undefined;
  }

  const values = (stringChunk as StringChunk).value;
  if (values?.length === 1) {
    return values[0];
  }

  return undefined;
}

function getAliasFromDrizzleAlias(value: unknown): string | undefined {
  if (!isSQLValue(value)) {
    return undefined;
  }

  const aliasNameChunk = getAliasNameChunk(value.queryChunks);
  if (!aliasNameChunk) {
    return undefined;
  }

  return extractStringValueFromChunk(aliasNameChunk);
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
  if (typeof limitOrOffset !== "number" || Number.isNaN(limitOrOffset)) {
    throw new Error("limitOrOffset must be a valid number");
  }
  return sql.raw(`${limitOrOffset}`) as unknown as number;
}

export function nextVal(sequenceName: string): number {
  return sql.raw(`NEXTVAL(${sequenceName})`) as unknown as number;
}

/**
 * Analyzes and prints query performance data from CLUSTER_STATEMENTS_SUMMARY table.
 *
 * This function queries the CLUSTER_STATEMENTS_SUMMARY table to find queries that were executed
 * within the specified time window and prints detailed performance information including:
 * - SQL query text
 * - Memory usage (average and max in MB)
 * - Execution time (average in ms)
 * - Number of executions
 * - Execution plan
 *
 * @param forgeSQLORM - The ForgeSQL operation instance for database access
 * @param timeDiffMs - Time window in milliseconds to look back for queries (e.g., 1500 for last 1.5 seconds)
 * @param timeout - Optional timeout in milliseconds for the query execution (defaults to 1500ms)
 *
 * @example
 * ```typescript
 * // Analyze queries from the last 2 seconds
 * await printQueriesWithPlan(forgeSQLORM, 2000);
 *
 * // Analyze queries with custom timeout
 * await printQueriesWithPlan(forgeSQLORM, 1000, 3000);
 * ```
 *
 * @throws Does not throw - errors are logged to console.debug instead
 */
export async function printQueriesWithPlan(
  forgeSQLORM: ForgeSqlOperation,
  timeDiffMs: number,
  timeout?: number,
) {
  try {
    const statementsTable = clusterStatementsSummary;
    const timeoutMs = timeout ?? 3000;
    const results = await withTimeout(
      forgeSQLORM
        .getDrizzleQueryBuilder()
        .select({
          digestText: withTidbHint(statementsTable.digestText),
          avgLatency: statementsTable.avgLatency,
          avgMem: statementsTable.avgMem,
          execCount: statementsTable.execCount,
          plan: statementsTable.plan,
          stmtType: statementsTable.stmtType,
        })
        .from(statementsTable)
        .where(
          and(
            isNotNull(statementsTable.digest),
            not(ilike(statementsTable.digestText, "%information_schema%")),
            notInArray(statementsTable.stmtType, [
              "Use",
              "Set",
              "Show",
              "Commit",
              "Rollback",
              "Begin",
            ]),
            gte(
              statementsTable.lastSeen,
              sql`DATE_SUB
                            (NOW(), INTERVAL
                            ${timeDiffMs * 1000}
                            MICROSECOND
                            )`,
            ),
          ),
        ),
      `Timeout ${timeoutMs}ms in printQueriesWithPlan - transient timeouts are usually fine; repeated timeouts mean this diagnostic query is consistently slow and should be investigated`,
      timeoutMs + 200,
    );

    for (const result of results) {
      // Average execution time (convert from nanoseconds to milliseconds)
      const avgTimeMs = Number(result.avgLatency) / 1_000_000;
      const avgMemMB = Number(result.avgMem) / 1_000_000;

      // 1. Query info: SQL, memory, time, executions
      // eslint-disable-next-line no-console
      console.warn(
        `SQL: ${result.digestText} | Memory: ${avgMemMB.toFixed(2)} MB | Time: ${avgTimeMs.toFixed(2)} ms | stmtType: ${result.stmtType} | Executions: ${result.execCount}\n Plan:${result.plan}`,
      );
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.debug(
      `Error occurred while retrieving query execution plan: ${error instanceof Error ? error.message : "Unknown error"}. Try again after some time`,
      error,
    );
  }
}

const SESSION_ALIAS_NAME_ORM = "orm";

/**
 * Analyzes and logs slow queries from the last specified number of hours.
 *
 * This function queries the slow query system table to find queries that were executed
 * within the specified time window and logs detailed performance information including:
 * - SQL query text
 * - Maximum memory usage (in MB)
 * - Query execution time (in ms)
 * - Execution count
 * - Execution plan
 *
 * @param forgeSQLORM - The ForgeSQL operation instance for database access
 * @param hours - Number of hours to look back for slow queries (e.g., 1 for last hour, 24 for last day)
 * @param timeout - Optional timeout in milliseconds for the query execution (defaults to 1500ms)
 *
 * @example
 * ```typescript
 * // Analyze slow queries from the last hour
 * await slowQueryPerHours(forgeSQLORM, 1);
 *
 * // Analyze slow queries from the last 24 hours with custom timeout
 * await slowQueryPerHours(forgeSQLORM, 24, 3000);
 *
 * // Analyze slow queries from the last 6 hours
 * await slowQueryPerHours(forgeSQLORM, 6);
 * ```
 *
 * @throws Does not throw - errors are logged to console.debug instead
 */
export async function slowQueryPerHours(
  forgeSQLORM: ForgeSqlOperation,
  hours: number,
  timeout?: number,
) {
  try {
    const timeoutMs = timeout ?? 1500;
    const results = await withTimeout(
      forgeSQLORM
        .getDrizzleQueryBuilder()
        .select({
          query: withTidbHint(slowQuery.query),
          queryTime: slowQuery.queryTime,
          memMax: slowQuery.memMax,
          plan: slowQuery.plan,
        })
        .from(slowQuery)
        .where(
          and(
            isNotNull(slowQuery.digest),
            ne(slowQuery.sessionAlias, SESSION_ALIAS_NAME_ORM),
            gte(
              slowQuery.time,
              sql`DATE_SUB
                            (NOW(), INTERVAL
                            ${hours}
                            HOUR
                            )`,
            ),
          ),
        ),
      `Timeout ${timeoutMs}ms in slowQueryPerHours - transient timeouts are usually fine; repeated timeouts mean this diagnostic query is consistently slow and should be investigated`,
      timeoutMs,
    );
    const response: string[] = [];
    for (const result of results) {
      // Convert memory from bytes to MB and handle null values
      const memMaxMB = result.memMax ? Number(result.memMax) / 1_000_000 : 0;

      const message = `Found SlowQuery SQL: ${result.query} | Memory: ${memMaxMB.toFixed(2)} MB | Time: ${result.queryTime} ms\n Plan:${result.plan}`;
      response.push(message);
      // 1. Query info: SQL, memory, time, executions
      // eslint-disable-next-line no-console
      console.warn(message);
    }
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.debug(
      `Error occurred while retrieving query execution plan: ${error instanceof Error ? error.message : "Unknown error"}. Try again after some time`,
      error,
    );
    return [
      `Error occurred while retrieving query execution plan: ${error instanceof Error ? error.message : "Unknown error"}`,
    ];
  }
}

/**
 * Executes a promise with a timeout.
 *
 * @param promise - The promise to execute
 * @param timeoutMs - Timeout in milliseconds
 * @returns Promise that resolves with the result or rejects on timeout
 * @throws {Error} When the operation times out
 */
export async function withTimeout<T>(
  promise: Promise<T>,
  message: string,
  timeoutMs: number,
): Promise<T> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(message));
    }, timeoutMs);
  });

  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
}

export function withTidbHint<
  TDataType extends ColumnDataType,
  TPartial extends Partial<ColumnBaseConfig<TDataType, string>>,
>(column: AnyMySqlColumn<TPartial>): AnyMySqlColumn<TPartial> {
  // We lie a bit to TypeScript here: at runtime this is a new SQL fragment,
  // but returning TExpr keeps the column type info in downstream inference.
  return sql`/*+ SET_VAR(tidb_session_alias=${sql.raw(SESSION_ALIAS_NAME_ORM)}) */ ${column}` as unknown as AnyMySqlColumn<TPartial>;
}

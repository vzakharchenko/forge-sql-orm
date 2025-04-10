import { sql } from "@forge/sql";
import { getHttpResponse, TriggerResponse } from "./index";
import { forgeSystemTables, getTables } from "../core/SystemTables";
import { getTableName } from "drizzle-orm/table";

interface CreateTableRow {
  Table: string;
  "Create Table": string;
}

/**
 * ⚠️ DEVELOPMENT ONLY WEB TRIGGER ⚠️
 *
 * This web trigger retrieves the current database schema from Atlassian Forge SQL.
 * It generates SQL statements that can be used to recreate the database structure.
 *
 * @warning This trigger should ONLY be used in development environments. It:
 * - Exposes your database structure
 * - Disables foreign key checks temporarily
 * - Generates SQL that could potentially be used maliciously
 * - May expose sensitive table names and structures
 *
 * @returns {Promise<TriggerResponse<string>>} A response containing SQL statements to recreate the database schema
 * - On success: Returns 200 status with SQL statements
 * - On failure: Returns 500 status with error message
 *
 * @example
 * ```typescript
 * // The response will contain SQL statements like:
 * // SET foreign_key_checks = 0;
 * // CREATE TABLE IF NOT EXISTS users (...);
 * // CREATE TABLE IF NOT EXISTS orders (...);
 * // SET foreign_key_checks = 1;
 * ```
 */
export async function fetchSchemaWebTrigger(): Promise<TriggerResponse<string>> {
  try {
    const tables = await getTables();
    const createTableStatements = await generateCreateTableStatements(tables);
    const sqlStatements = wrapWithForeignKeyChecks(createTableStatements);

    return getHttpResponse<string>(200, sqlStatements.join(";\n"));
  } catch (error: unknown) {
    console.error(JSON.stringify(error));
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return getHttpResponse<string>(500, errorMessage);
  }
}

/**
 * Generates CREATE TABLE statements for each table
 */
async function generateCreateTableStatements(tables: string[]): Promise<string[]> {
  const statements: string[] = [];

  for (const table of tables) {
    const createTableResult = await sql.executeDDL<CreateTableRow>(`SHOW CREATE TABLE "${table}"`);

    const createTableStatements = createTableResult.rows
      .filter((row) => !isSystemTable(row.Table))
      .map((row) => formatCreateTableStatement(row["Create Table"]));

    statements.push(...createTableStatements);
  }

  return statements;
}

/**
 * Checks if the table is a system table
 */
function isSystemTable(tableName: string): boolean {
  return forgeSystemTables.some((st) => getTableName(st) === tableName);
}

/**
 * Formats the CREATE TABLE statement
 */
function formatCreateTableStatement(statement: string): string {
  return statement.replace(/"/g, "").replace("CREATE TABLE", "CREATE TABLE IF NOT EXISTS");
}

/**
 * Wraps the SQL statements with foreign key check controls
 */
function wrapWithForeignKeyChecks(statements: string[]): string[] {
  return ["SET foreign_key_checks = 0", ...statements, "SET foreign_key_checks = 1"];
}

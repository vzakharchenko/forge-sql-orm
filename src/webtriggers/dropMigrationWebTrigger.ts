import { sql } from "@forge/sql";
import { generateDropTableStatements as generateStatements } from "../utils/sqlUtils";
import { getHttpResponse, TriggerResponse } from "./index";
import { getTables } from "../core/SystemTables";

/**
 * ⚠️ DEVELOPMENT ONLY WEB TRIGGER ⚠️
 *
 * This web trigger is designed for development environments only and will permanently delete all data in the specified tables and sequences.
 * It generates and executes SQL statements to drop tables, their associated constraints, and sequences.
 *
 * @warning This trigger should NEVER be used in production environments because:
 * - It permanently deletes all data in the specified tables and sequences
 * - The operation cannot be undone
 * - It may affect application functionality
 * - It could lead to data loss and system instability
 *
 * @returns {Promise<TriggerResponse<string>>} A response containing:
 * - On success: 200 status with warning message about permanent deletion of tables and sequences
 * - On failure: 500 status with error message
 *
 * @example
 * ```typescript
 * // Example usage in development only
 * await dropSchemaMigrations();
 * // ⚠️ Warning: This will permanently delete all data in users and orders tables and their sequences
 * ```
 */
export async function dropSchemaMigrations(): Promise<TriggerResponse<string>> {
  try {
    const tables = await getTables();
    // Generate drop statements
    const dropStatements = generateStatements(tables, { sequence: true, table: true });

    // Execute each statement
    for (const statement of dropStatements) {
      // eslint-disable-next-line no-console
      console.debug(`execute DDL: ${statement}`);
      await sql.executeDDL(statement);
    }

    return getHttpResponse<string>(
      200,
      "⚠️ All data in these tables has been permanently deleted. This operation cannot be undone.",
    );
  } catch (error: any) {
    const errorMessage =
      error?.debug?.sqlMessage ??
      error?.debug?.message ??
      error.message ??
      "Unknown error occurred";
    // eslint-disable-next-line no-console
    console.error(errorMessage);
    return getHttpResponse<string>(500, errorMessage);
  }
}

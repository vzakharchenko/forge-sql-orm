import { sql } from "@forge/sql";
import { AnyMySqlTable } from "drizzle-orm/mysql-core";
import { generateDropTableStatements as generateStatements } from "../utils/sqlUtils";
import { getHttpResponse, TriggerResponse } from "./index";

/**
 * ⚠️ DEVELOPMENT ONLY WEB TRIGGER ⚠️
 *
 * This web trigger is designed for development environments only and will permanently delete all data in the specified tables.
 * It generates and executes SQL statements to drop tables and their associated constraints.
 *
 * @warning This trigger should NEVER be used in production environments because:
 * - It permanently deletes all data in the specified tables
 * - The operation cannot be undone
 * - It may affect application functionality
 * - It could lead to data loss and system instability
 *
 * @param tables - Array of table schemas to drop
 * @returns {Promise<TriggerResponse<string>>} A response containing:
 * - On success: 200 status with warning message about permanent deletion
 * - On failure: 500 status with error message
 *
 * @example
 * ```typescript
 * // Example usage in development only
 * await dropSchemaMigrations([users, orders]);
 * // ⚠️ Warning: This will permanently delete all data in users and orders tables
 * ```
 */
export async function dropSchemaMigrations(
  tables: AnyMySqlTable[],
): Promise<TriggerResponse<string>> {
  try {
    // Generate drop statements
    const dropStatements = generateStatements(tables);

    // Execute each statement
    for (const statement of dropStatements) {
      console.warn(statement);
      await sql.executeDDL(statement);
    }

    return getHttpResponse<string>(
      200,
      "⚠️ All data in these tables has been permanently deleted. This operation cannot be undone.",
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return getHttpResponse<string>(500, errorMessage);
  }
}

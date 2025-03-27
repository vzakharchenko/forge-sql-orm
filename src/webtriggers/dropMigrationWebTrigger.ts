import { sql } from "@forge/sql";
import { AnyMySqlTable } from "drizzle-orm/mysql-core";
import { generateDropTableStatements as generateStatements, getTableMetadata } from "../utils/sqlUtils";
import {getHttpResponse, TriggerResponse} from "./index";

export interface DropTablesResponse {
  message: string;
  droppedTables: string[];
  warning?: string;
}


/**
 * ⚠️ WARNING: This web trigger will permanently delete all data in the specified tables.
 * DO NOT use this in production environment as it will cause irreversible data loss.
 *
 * Generates SQL statements to drop tables and executes them
 * @param tables - Array of table schemas to drop
 * @returns Trigger response with execution status and list of dropped tables
 */
export async function dropSchemaMigrations(
  tables: AnyMySqlTable[]
): Promise<TriggerResponse<string>> {
  try {
    // Generate drop statements
    const dropStatements = generateStatements(tables);

    // Execute each statement
    for (const statement of dropStatements) {
      console.warn(statement);
      await sql.executeDDL(statement);
    }

    // Get list of dropped tables
    const droppedTables = tables
      .map(table => {
        const metadata = getTableMetadata(table);
        return metadata.tableName;
      })
      .filter(Boolean);

    return getHttpResponse<string>(200,  "⚠️ All data in these tables has been permanently deleted. This operation cannot be undone.");
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return getHttpResponse<string>(500, errorMessage);
  }
}

import { bigint, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { Table } from "drizzle-orm";
import {sql} from "@forge/sql";

export const migrations = mysqlTable("__migrations", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  migratedAt: timestamp("migratedAt").defaultNow().notNull(),
});

/**
 * Retrieves all tables from the database
 */
export async function getTables(): Promise<string[]> {
  const tables = await sql.executeDDL<string>("SHOW TABLES");
  return tables.rows.flatMap((tableInfo) => Object.values(tableInfo));
}

export const forgeSystemTables: Table[] = [migrations];

import { bigint, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { Table } from "drizzle-orm";

export const migrations = mysqlTable("__migrations", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  migratedAt: timestamp("migratedAt").defaultNow().notNull(),
});

export const forgeSystemTables: Table[] = [migrations];

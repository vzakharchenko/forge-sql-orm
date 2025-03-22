import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core/index";

export const migrations = mysqlTable("__migrations", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

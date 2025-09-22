import { mysqlTable, primaryKey, int, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable(
  "users",
  {
    id: int().autoincrement().notNull(),
    name: varchar({ length: 200 }),
  },
  (table) => [primaryKey({ columns: [table.id], name: "users_id" })],
);

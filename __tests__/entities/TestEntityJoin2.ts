import { int, mysqlTable, primaryKey, varchar } from "drizzle-orm/mysql-core";

export const testEntityJoin2 = mysqlTable(
  "test_entity_join2",
  {
    id: int("id").autoincrement(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.id], name: "users_id" })],
);

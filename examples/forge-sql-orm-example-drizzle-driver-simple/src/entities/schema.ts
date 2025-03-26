import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  primaryKey,
  int,
  varchar,
  decimal,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const users = mysqlTable(
  "users",
  {
    id: int().autoincrement().notNull(),
    name: varchar({ length: 200 }),
    email: varchar({ length: 255 }),
  },
  (table) => [primaryKey({ columns: [table.id], name: "users_id" })],
);

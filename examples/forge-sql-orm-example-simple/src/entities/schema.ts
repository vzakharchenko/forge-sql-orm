import {
  forgeDateTimeString,
  forgeTimeString,
  forgeDateString,
  forgeTimestampString,
} from "forge-sql-orm";

import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  primaryKey,
  int,
  varchar,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const users = mysqlTable(
  "users",
  {
    id: int().autoincrement().notNull(),
    name: varchar({ length: 200 }),
    email: varchar({ length: 200 }),
  },
  (table) => [primaryKey({ columns: [table.id], name: "users_id" })],
);

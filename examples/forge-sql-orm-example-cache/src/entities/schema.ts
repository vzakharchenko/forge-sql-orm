import { forgeTimestampString } from "forge-sql-orm";

import { mysqlTable, index, primaryKey, int, varchar } from "drizzle-orm/mysql-core";

export const demoOrders = mysqlTable(
  "demo_orders",
  {
    id: int().autoincrement().notNull(),
    userId: int("user_id")
      .notNull()
      .references(() => demoUsers.id),
    product: varchar({ length: 100 }).notNull(),
    createdAt: forgeTimestampString("created_at"),
  },
  (table) => [
    index("user_id").on(table.userId),
    primaryKey({ columns: [table.id], name: "demo_orders_id" }),
  ],
);

export const demoUsers = mysqlTable(
  "demo_users",
  {
    id: int().autoincrement().notNull(),
    name: varchar({ length: 100 }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.id], name: "demo_users_id" })],
);

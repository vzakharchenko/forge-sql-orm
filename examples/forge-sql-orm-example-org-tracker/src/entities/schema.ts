import { mysqlTable, primaryKey, int, varchar } from "drizzle-orm/mysql-core";

export const appUser = mysqlTable(
  "app_user",
  {
    id: int().autoincrement().notNull(),
    name: varchar({ length: 255 }).notNull(),
    organizationId: int("organization_id")
      .notNull()
      .references(() => organization.id),
  },
  (table) => [primaryKey({ columns: [table.id], name: "app_user_id" })],
);

export const organization = mysqlTable(
  "organization",
  {
    id: int().notNull(),
    name: varchar({ length: 255 }).notNull(),
  },
  (table) => [primaryKey({ columns: [table.id], name: "organization_id" })],
);

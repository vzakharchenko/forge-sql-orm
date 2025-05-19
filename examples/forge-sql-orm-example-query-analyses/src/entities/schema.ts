import { forgeTimestampString } from "forge-sql-orm";

import { mysqlTable, varchar, int } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";
import { uuidBinary } from "./CustomTypes";

export const category = mysqlTable("category", {
  id: uuidBinary("id").notNull(),
  name: varchar({ length: 255 }).notNull(),
  createdAt: forgeTimestampString("created_at")
    .default(sql`(now())`)
    .notNull(),
});

export const orderItem = mysqlTable("order_item", {
  id: uuidBinary("id").notNull(),
  productId: varchar("product_id", { length: 16 }).notNull(),
  productName: varchar("product_name", { length: 255 }).notNull(),
  quantity: int().notNull(),
  createdAt: forgeTimestampString("created_at")
    .default(sql`(now())`)
    .notNull(),
});

export const product = mysqlTable("product", {
  id: uuidBinary("id").notNull(),
  categoryId: varchar("category_id", { length: 16 }).notNull(),
  name: varchar({ length: 255 }).notNull(),
  categoryName: varchar("category_name", { length: 255 }).notNull(),
  createdAt: forgeTimestampString("created_at")
    .default(sql`(now())`)
    .notNull(),
});

import { forgeDateTimeString, forgeTimeString, forgeDateString, forgeTimestampString } from "forge-sql-orm";

import { mysqlTable, primaryKey, varbinary, varchar, int } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const category = mysqlTable("category", {
	id: varbinary({ length: 16 }).default(sql`(uuid_to_bin(uuid()))`).notNull(),
	name: varchar({ length: 255 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "category_id"}),
]);

export const orderItem = mysqlTable("order_item", {
	id: varbinary({ length: 16 }).default(sql`(uuid_to_bin(uuid()))`).notNull(),
	productId: varbinary("product_id", { length: 16 }).references(() => product.id),
	quantity: int().notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "order_item_id"}),
]);

export const product = mysqlTable("product", {
	id: varbinary({ length: 16 }).default(sql`(uuid_to_bin(uuid()))`).notNull(),
	name: varchar({ length: 255 }).notNull(),
	categoryId: varbinary("category_id", { length: 16 }).references(() => category.id),
},
(table) => [
	primaryKey({ columns: [table.id], name: "product_id"}),
]);

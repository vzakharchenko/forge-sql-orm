import { forgeDateTimeString, forgeTimestampString } from "forge-sql-orm";

import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  primaryKey,
  int,
  datetime,
  varchar,
  timestamp,
} from "drizzle-orm/mysql-core";

export const testData = mysqlTable(
  "test_data",
  {
    id: int().autoincrement().notNull(),
    testDateColumn: forgeDateTimeString("test_date_column"),
    testNameColumn: varchar("test_name_column", { length: 100 }),
  },
  (table) => [primaryKey({ columns: [table.id], name: "test_data_id" })],
);

export const testDataOptimisticDate = mysqlTable(
  "test_data_optimistic_date",
  {
    id: int().autoincrement().notNull(),
    testDateColumn: forgeDateTimeString("test_date_column"),
    version: forgeDateTimeString().notNull(),
    testNameColumn: varchar("test_name_column", { length: 255 }),
  },
  (table) => [primaryKey({ columns: [table.id], name: "test_data_optimistic_date_id" })],
);

export const testDataOptimisticNumber = mysqlTable(
  "test_data_optimistic_number",
  {
    id: int().autoincrement().notNull(),
    testDateColumn: forgeDateTimeString("test_date_column"),
    testNameColumn: varchar("test_name_column", { length: 100 }),
    version: int().notNull(),
  },
  (table) => [primaryKey({ columns: [table.id], name: "test_data_optimistic_number_id" })],
);

export const testDataOptimisticTimestamp = mysqlTable(
  "test_data_optimistic_timestamp",
  {
    id: int().autoincrement().notNull(),
    testDateColumn: forgeDateTimeString("test_date_column"),
    testNameColumn: varchar("test_name_column", { length: 100 }),
    version: forgeTimestampString().notNull(),
  },
  (table) => [primaryKey({ columns: [table.id], name: "test_data_optimistic_timestamp_id" })],
);

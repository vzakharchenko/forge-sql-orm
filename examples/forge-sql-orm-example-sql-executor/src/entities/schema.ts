import { mysqlTable, primaryKey, int, varchar } from "drizzle-orm/mysql-core";

export const testExampleTable = mysqlTable(
  "test_example_table",
  {
    id: int().autoincrement().notNull(),
    name: varchar({ length: 200 }),
    email: varchar({ length: 200 }),
  },
  (table) => [primaryKey({ columns: [table.id], name: "test_example_table_id" })],
);

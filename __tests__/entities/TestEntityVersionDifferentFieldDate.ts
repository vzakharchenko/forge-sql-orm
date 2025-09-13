import { mysqlTable, int, varchar } from "drizzle-orm/mysql-core";
import { forgeDateTimeString } from "../../src";

export const testEntityVersionDifferentDateField = mysqlTable("test_entity_diff_date_version", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  versionField: forgeDateTimeString("version_different_date_field").notNull(),
});

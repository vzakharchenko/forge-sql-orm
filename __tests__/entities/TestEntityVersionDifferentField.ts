import { mysqlTable, int, varchar } from "drizzle-orm/mysql-core";

export class TestEntityVersion {
  id!: number;
  name?: string;
  version!: number;
}
export const TestEntityVersionDifferentField = mysqlTable("test_entity_diff_version", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  version: int("version_different_field").notNull().default(0),
});

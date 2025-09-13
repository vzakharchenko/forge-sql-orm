import { mysqlTable, int, varchar } from "drizzle-orm/mysql-core";

export class TestEntityVersion {
  id!: number;
  name?: string;
  version!: number;
}
export const testEntityVersion = mysqlTable("test_entity_version", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  version: int("version").notNull().default(0),
});

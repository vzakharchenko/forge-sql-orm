import { mySqlDateTimeString } from "../../src";
import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

export class TestEntityDateVersion {
  id!: number;
  name?: string;
  version!: Date;
}

export const testEntityDateVersion = mysqlTable('test_entity_date_version', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  version: mySqlDateTimeString('version').notNull(),
});


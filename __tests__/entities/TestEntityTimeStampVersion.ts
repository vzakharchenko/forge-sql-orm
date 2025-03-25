import {mySqlTimestampString} from "../../src";
import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

export class TestEntityTimeStampVersion {
  id!: number;
  name?: string;
  version!: Date;
}

export const testEntityTimeStampVersion = mysqlTable('test_entity_timestamp_version', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  version: mySqlTimestampString('version').notNull(),
});


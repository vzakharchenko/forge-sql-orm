import {int, mysqlTable, primaryKey, varchar} from 'drizzle-orm/mysql-core';

export class TestEntity {
    id!: number;
    name?: string;
}

export const testEntity = mysqlTable('test_entity', {
        id: int('id').autoincrement(),
        name: varchar('name', {length: 255}).notNull(),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "users_id"}),
    ]);

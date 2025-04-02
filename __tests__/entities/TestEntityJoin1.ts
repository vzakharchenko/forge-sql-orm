import {int, mysqlTable, primaryKey, varchar} from 'drizzle-orm/mysql-core';
import {uuidBinary} from "./CustomTypes";

export const testEntityJoin1 = mysqlTable('test_entity_join1', {
        id: int('id').autoincrement(),
        name: varchar('name', {length: 255}).notNull(),
        email: varchar('email', {length: 255}).notNull(),
        customType: uuidBinary('custom_type').notNull(),
    },
    (table) => [
        primaryKey({columns: [table.id], name: "users_id"}),
    ]);


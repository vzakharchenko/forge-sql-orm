import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchSchemaWebTrigger, dropSchemaMigrations, applySchemaMigrations, dropTableSchemaMigrations } from '../../../src/webtriggers';
import { getTables} from '../../../src/core/SystemTables';
import { generateDropTableStatements } from '../../../src/utils/sqlUtils';
import {sql} from "@forge/sql";
import { MigrationRunner } from '@forge/sql/out/migration';

vi.useFakeTimers();
vi.setSystemTime(new Date("2023-04-12 00:00:01"));

interface MockMigrationRunner extends MigrationRunner {
    enqueue: ReturnType<typeof vi.fn>;
    run: ReturnType<typeof vi.fn>;
    list: ReturnType<typeof vi.fn>;
}

// Mock sql
vi.mock("@forge/sql", () => {
    const mockMigrationRunner = {
        enqueue: vi.fn().mockReturnThis(),
        run: vi.fn().mockResolvedValue(['migration1']),
        list: vi.fn().mockResolvedValue([
            { id: 1, name: 'test_migration', migratedAt: new Date() }
        ])
    } as MockMigrationRunner;

    return {
        sql: {
            prepare: vi.fn((query: string) => {
                let procedureMock = vi.fn().mockResolvedValue({rows: [{id: 1, data: 't', name: "Test"}]});
                if (query === "select `test_data_entity`.`id` as `ID1`, `test_entity`.`id` as ID2, `test_data_entity`.`data`, `test_entity`.`name` from `test_data_entity` inner join `test_entity` on `test_data_entity`.`id` = `test_entity`.`id`") {
                    procedureMock = vi.fn().mockResolvedValue({rows: [{ID1: 1, ID2: 2, data: 't', name: "Test"}]});
                }
                const executeMock = procedureMock;
                return {
                    query: query || "MOCK_QUERY",
                    _params: [],
                    remoteSqlApi: "",
                    params: [],
                    bindParams: vi.fn(),
                    execute: executeMock,
                };
            }),
            executeRaw: vi.fn(),
            _provision: vi.fn().mockResolvedValue(undefined),
            executeDDL: vi.fn().mockResolvedValue({ rows: [] }),
        },
        migrationRunner: mockMigrationRunner
    };
});

// Mock SystemTables
vi.mock('../../../src/core/SystemTables', () => ({
    getTables: vi.fn().mockResolvedValue([]),
    forgeSystemTables: []
}));

// Mock sqlUtils
vi.mock('../../../src/utils/sqlUtils', () => ({
    generateDropTableStatements: vi.fn().mockReturnValue([])
}));

describe('WebTriggers', () => {
    let mockMigrationRunner: MockMigrationRunner;

    beforeEach(() => {
        // Reset mocks
        vi.clearAllMocks();
        mockMigrationRunner = (vi.mocked(sql) as any).migrationRunner;
    });

    describe('fetchSchemaWebTrigger', () => {
        it('should return SQL statements for recreating database structure', async () => {
            // Mock getTables to return some table names
            (getTables as any).mockResolvedValue(['table1', 'table2']);

            // Mock executeDDL to return create table statements
            vi.mocked(sql.executeDDL).mockImplementation(() => Promise.resolve({rows: [
                { 'Create Table': 'CREATE TABLE table1 (...)', Table:'table1' },
                { 'Create Table': 'CREATE TABLE table2 (...)', Table:'table2' }
            ]}));

            const result = await fetchSchemaWebTrigger();

            expect(result.statusCode).toBe(200);
            expect(result.body).toContain('CREATE TABLE IF NOT EXISTS table1');
            expect(result.body).toContain('CREATE TABLE IF NOT EXISTS table2');
            expect(result.body).toContain('SET foreign_key_checks = 0');
            expect(result.body).toContain('SET foreign_key_checks = 1');
        });

        it('should handle errors gracefully', async () => {
            (getTables as any).mockRejectedValue(new Error('Failed to get tables'));

            const result = await fetchSchemaWebTrigger();

            expect(result.statusCode).toBe(500);
            expect(result.body).toContain('Failed to get tables');
        });
    });

    describe('dropSchemaMigrations', () => {
        it('should drop all tables successfully', async () => {
            // Mock getTables to return some table names
            (getTables as any).mockResolvedValue(['table1', 'table2']);

            // Mock generateDropTableStatements to return drop statements
            (generateDropTableStatements as any).mockReturnValue([
                'DROP TABLE IF EXISTS table1',
                'DROP TABLE IF EXISTS table2'
            ]);

            // Mock executeDDL to succeed
            (sql.executeDDL as any).mockResolvedValue({ rows: [] });

            const result = await dropSchemaMigrations();

            expect(result.statusCode).toBe(200);
            expect(result.body).toBe('⚠️ All data in these tables has been permanently deleted. This operation cannot be undone.');
            expect(sql.executeDDL).toHaveBeenCalledTimes(2);
        });

        it('should handle errors during table dropping', async () => {
            (getTables as any).mockResolvedValue(['table1']);
            (generateDropTableStatements as any).mockReturnValue(['DROP TABLE IF EXISTS table1']);
            (sql.executeDDL as any).mockRejectedValue(new Error('Failed to drop table'));

            const result = await dropSchemaMigrations();

            expect(result.statusCode).toBe(500);
            expect(result.body).toContain('Failed to drop table');
        });
    });
    describe('dropTableSchemaMigrations', () => {
        it('should drop all tables/squence successfully', async () => {
            // Mock getTables to return some table names
            (getTables as any).mockResolvedValue(['table1', 'table2']);

            // Mock generateDropTableStatements to return drop statements
            (generateDropTableStatements as any).mockReturnValue([
                'DROP TABLE IF EXISTS table1',
                'DROP TABLE IF EXISTS table2'
            ]);

            // Mock executeDDL to succeed
            (sql.executeDDL as any).mockResolvedValue({ rows: [] });

            const result = await dropTableSchemaMigrations();

            expect(result.statusCode).toBe(200);
            expect(result.body).toBe('⚠️ All data in these tables has been permanently deleted. This operation cannot be undone.');
            expect(sql.executeDDL).toHaveBeenCalledTimes(2);
        });

        it('should handle errors during table dropping', async () => {
            (getTables as any).mockResolvedValue(['table1']);
            (generateDropTableStatements as any).mockReturnValue(['DROP TABLE IF EXISTS table1']);
            (sql.executeDDL as any).mockRejectedValue(new Error('Failed to drop table'));

            const result = await dropSchemaMigrations();

            expect(result.statusCode).toBe(500);
            expect(result.body).toContain('Failed to drop table');
        });
    });

    describe('applySchemaMigrations', () => {
        it('should apply migrations successfully', async () => {
            const mockMigration = async (runner: MigrationRunner) => {
                runner.enqueue('test_migration', 'CREATE TABLE test (id INT)');
                return runner;
            };

            const result = await applySchemaMigrations(mockMigration);

            expect(result.statusCode).toBe(200);
            expect(result.body).toBe('Migrations successfully executed');
        });

        it('should handle errors during migration', async () => {
            const mockMigration = async (runner: MigrationRunner) => {
                runner.enqueue('test_migration', 'CREATE TABLE test (id INT)');
                throw new Error('Failed to apply migration');
            };

            const result = await applySchemaMigrations(mockMigration);

            expect(result.statusCode).toBe(500);
            expect(result.body).toContain('Failed to apply migration');
        });

        it('should handle invalid migration object', async () => {
            const result = await applySchemaMigrations(null as any);

            expect(result.statusCode).toBe(500);
            expect(result.body).toContain('migration is not a function');
        });
    });
});
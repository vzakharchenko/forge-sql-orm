import {datetime, int, json, mysqlTable, text, time, timestamp} from "drizzle-orm/mysql-core";
import {boolean, date} from "drizzle-orm/mysql-core/columns";
import {MySqlTable} from "drizzle-orm/mysql-core/table";
import {getTableColumns, sql} from "drizzle-orm";
import {sql as SQL} from "@forge/sql";
import {getTableName} from "drizzle-orm/table";
import {getTables} from "./SystemTables";

export type ForgeFieldType =
    | 'text'
    | 'int'
    | 'boolean'
    | 'json'
    | 'date'
    | 'datetime'
    | 'time'
    | 'timestamp';

type ForgeFieldDefinition = {
    type: ForgeFieldType;
    nullable?: boolean;
    isPrimary?: boolean;
    default?: any;
};

export type DynamicColumnMetadata = {
    [fieldName: string]: ForgeFieldDefinition;
};
export type DynamicTableMetadata = {
    tableName: string,
    columns: DynamicColumnMetadata;
}


export interface DynamicTableBuilder {
    createModel(metadata: DynamicTableMetadata): Promise<MySqlTable>

    tableExists(tableName: string): Promise<boolean>

    createDatabaseModel(tableName: string): Promise<MySqlTable>

    applyMetadata(metadata: DynamicTableMetadata): Promise<void>
}

type ShowColumnDescription = {
    Field: string,
    Type: ForgeFieldType,
    Null: 'YES' | 'NO',
    Key: 'PRI' | null,
    Default: string | null
};

class DynamicTableBuilderImpl implements DynamicTableBuilder {

    async tableExists(tableName: string): Promise<boolean> {
        return Boolean((await getTables()).find((table) => table.toLowerCase() === tableName.toLowerCase()))
    }

    async createDatabaseModel(tableName: string): Promise<MySqlTable> {
        let columnDefinitions: ShowColumnDescription[] = []
        try {
            const result = await SQL.executeDDL<ShowColumnDescription>('SHOW FULL COLUMNS FROM ' + tableName);
            columnDefinitions = result.rows;
        } catch (e) {
            console.log(JSON.stringify(e));
            throw new Error(JSON.stringify(e));
        }
        return this.createDatabaseModelInternal(tableName, columnDefinitions);
    }

    async createDatabaseModelInternal(tableName: string, columnDefinitions: ShowColumnDescription[]): Promise<MySqlTable> {
        const fields: any = {}
        columnDefinitions.forEach((columns) => {
            let field: any;
            const name = columns.Field;
            switch (columns.Type) {
                case 'int': {

                    field = int(name)
                    break;
                }
                case 'boolean': {
                    field = boolean(name)
                    break;
                }
                case 'json': {
                    field = json(name)
                    break;
                }
                case 'date': {
                    field = date(name)
                    break;
                }
                case 'datetime': {
                    field = datetime(name)
                    break;
                }
                case 'timestamp': {
                    field = timestamp(name)
                    break;
                }
                case 'time': {
                    field = time(name)
                    break;
                }
                case 'text': {
                    field = text(name)
                    break;
                }
                default: {
                    throw new Error('unsupported field type ' + columns.Type);
                }
            }
            if (columns.Null !== 'YES') {
                field = field.notNull();
            }
            if (columns.Default) {
                field.default(sql`(${columns.Default})`);
            }
            if (columns.Key === 'PRI') {
                field = field.primaryKey()
            }
            fields[name] = field;
        })
        return mysqlTable(
            tableName,
            fields,
        );
    }

    async createAlterTable(originalTable: MySqlTable, targetTable: MySqlTable): Promise<string[]> {
        const tableName = getTableName(originalTable);
        if (tableName !== getTableName(targetTable)) {
            throw new Error('Table name is not equals ' + tableName + ' !== ' + getTableName(targetTable))
        }
        const tcs = getTableColumns(targetTable);
        const alters: string[] = [];
        Object.entries(tcs).forEach(([columnName, columnDef]) => {
            let tableColumns = getTableColumns(originalTable);
            let tableColumn = tableColumns[columnName];
            if (!tableColumn) {
                const type = columnDef.getSQLType();
                let newColumn = columnDef.name ?? columnName + ' ' + type + ' ' + columnDef.notNull ? 'NOT NULL ' : '' + ' ' + columnDef.default ? ' DEFAULT ' + String(columnDef.default) : '';
                alters.push(`ALTER TABLE "${tableName}"
                    ADD ${newColumn}`);
            } else {
                if (tableColumn.getSQLType() !== columnDef.getSQLType()) {
                    throw new Error('You can not change type of column')
                }
                if (
                    tableColumn.default !== columnDef.default ||
                    tableColumn.notNull !== columnDef.notNull
                ) {
                    let newColumn = tableColumn.name ?? columnName + ' ' + tableColumn.getSQLType() + ' ' + tableColumn.notNull ? 'NOT NULL ' : '' + ' ' + tableColumn.default ? ' DEFAULT ' + String(tableColumn.default) : '';
                    alters.push(`ALTER TABLE "${tableName}"
                        MODIFY ${newColumn}`);
                }
            }
        })
        return alters;
    }

    async createInitialTable(table: MySqlTable): Promise<string> {
        let createTable = 'CREATE TABLE "' + getTableName(table) + '"(';
        const tcs = getTableColumns(table);
        const columns: string[] = [];

        for (const [columnName, columnDef] of Object.entries(tcs)) {
            const type = columnDef.getSQLType();
            columns.push(columnDef.name ?? columnName + ' ' + type + ' ' + columnDef.notNull ? 'NOT NULL ' : '' + ' ' + columnDef.default ? ' DEFAULT ' + String(columnDef.default) : '' + columnDef.primary ? 'PRIMARY KEY' : '');
        }
        createTable += columns.join(',') + ');';
        return createTable;
    }


    async createDiffModel(originTable: MySqlTable | null, targetTable: MySqlTable): Promise<string[]> {
        if (originTable === null) {
            return [await this.createInitialTable(targetTable)];
        } else {
            return this.createAlterTable(originTable, targetTable);
        }
    }

    async applyMetadata(metadata: DynamicTableMetadata): Promise<void> {
        const targetTable = await this.createModel(metadata);
        let sqls:string[];
        let isExists = await this.tableExists(metadata.tableName);
        if (isExists) {
            const originalTable = await this.createDatabaseModel(metadata.tableName);
             sqls = await this.createDiffModel(originalTable, targetTable);
        } else {
             sqls = await this.createDiffModel(null, targetTable);
        }
        for (const createTables of sqls) {
            await SQL.executeDDL(createTables);
        }
    }


    async createModel(metadata: DynamicTableMetadata): Promise<MySqlTable> {
        const fields: any = {}
        Object.entries(metadata.columns).forEach(([name, columns]) => {
            let field: any;
            switch (columns.type) {
                case 'int': {
                    field = int(name)
                    break;
                }
                case 'boolean': {
                    field = boolean(name)
                    break;
                }
                case 'json': {
                    field = json(name)
                    break;
                }
                case 'date': {
                    field = date(name)
                    break;
                }
                case 'datetime': {
                    field = datetime(name)
                    break;
                }
                case 'timestamp': {
                    field = timestamp(name)
                    break;
                }
                case 'time': {
                    field = time(name)
                    break;
                }
                case 'text': {
                    field = text(name)
                    break;
                }
                default: {
                    throw new Error('unsupported field type ' + columns.type);
                }
            }
            if (!columns.nullable) {
                field = field.notNull();
            }
            if (columns.default) {
                field.default(sql`(${columns.default})`);
            }
            if (columns.isPrimary) {
                field = field.primaryKey()
            }
            fields[name] = field;
        })
        return mysqlTable(
            metadata.tableName,
            fields,
        );
    }
}

export const dynamicTableBuilder: DynamicTableBuilder = new DynamicTableBuilderImpl();

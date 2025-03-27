import "reflect-metadata";
import fs from "fs";
import path from "path";
import mysql from "mysql2/promise";
import {MySqlTable, TableConfig} from "drizzle-orm/mysql-core";
import {RowDataPacket} from 'mysql2';
import {getTableMetadata} from "../../src/utils/sqlUtils";
import {AnyIndexBuilder} from "drizzle-orm/mysql-core/indexes";
import {ForeignKeyBuilder} from "drizzle-orm/mysql-core/foreign-keys";
import {UniqueConstraintBuilder} from "drizzle-orm/mysql-core/unique-constraint";

interface DrizzleColumn {
  type: string;
  notNull: boolean;
  autoincrement?: boolean;
  columnType?: any;
  name: string;
  getSQLType: () => string;
}

interface DrizzleSchema {
  [tableName: string]: {
    [columnName: string]: DrizzleColumn;
  };
}

interface DatabaseColumn extends RowDataPacket {
  TABLE_NAME: string;
  COLUMN_NAME: string;
  COLUMN_TYPE: string;
  IS_NULLABLE: string;
  COLUMN_KEY: string;
  EXTRA: string;
}

interface DatabaseIndex extends RowDataPacket {
  TABLE_NAME: string;
  INDEX_NAME: string;
  COLUMN_NAME: string;
  NON_UNIQUE: number;
}

interface DatabaseForeignKey extends RowDataPacket {
  TABLE_NAME: string;
  COLUMN_NAME: string;
  CONSTRAINT_NAME: string;
  REFERENCED_TABLE_NAME: string;
  REFERENCED_COLUMN_NAME: string;
}

interface TableSchema {
  columns: Record<string, DatabaseColumn>;
  indexes: Record<string, {
    columns: string[];
    unique: boolean;
  }>;
  foreignKeys: Record<string, {
    column: string;
    referencedTable: string;
    referencedColumn: string;
  }>;
}

interface DatabaseSchema {
  [tableName: string]: TableSchema;
}

/**
 * Generates a migration file using the provided SQL statements.
 * @param createStatements - Array of SQL statements.
 * @param version - Migration version number.
 * @returns TypeScript migration file content.
 */
function generateMigrationFile(createStatements: string[], version: number): string {
  const versionPrefix = `v${version}_MIGRATION`;

  // Clean each SQL statement and generate migration lines with .enqueue()
  const migrationLines = createStatements
    .map(
      (stmt, index) =>
        `        .enqueue("${versionPrefix}${index}", "${stmt}")`, // eslint-disable-line no-useless-escape
    )
    .join("\n");

  // Migration template
  return `import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
    return migrationRunner
${migrationLines};
};`;
}

/**
 * Filters out SQL statements that already exist in the previous migration file
 * @param newStatements - Array of SQL statements from new migration
 * @param prevVersion - Previous migration version
 * @param outputDir - Directory where migration files are stored
 * @returns Array of SQL statements that don't exist in previous migration
 */
function filterWithPreviousMigration(newStatements: string[], prevVersion: number, outputDir: string): string[] {
  const prevMigrationPath = path.join(outputDir, `migrationV${prevVersion}.ts`);

  if (!fs.existsSync(prevMigrationPath)) {
    return newStatements.map(s=>s.replace(/\s+/g, ' '));
  }

  // Read previous migration file
  const prevContent = fs.readFileSync(prevMigrationPath, 'utf-8');

  // Extract SQL statements from the file
  const prevStatements = prevContent
    .split('\n')
    .filter(line => line.includes('.enqueue('))
    .map(line => {
      const match = line.match(/\.enqueue\([^,]+,\s*"([^"]+)"/);
      return match ? match[1].replace(/\s+/g, ' ').trim() : '';
    });

  // Filter out statements that already exist in previous migration
  return  newStatements.filter(s=>!prevStatements.includes(s.replace(/\s+/g, ' '))).map(s=>s.replace(/\s+/g, ' '));
}

/**
 * Saves the generated migration file along with `migrationCount.ts` and `index.ts`.
 * @param migrationCode - The migration code to be written to the file.
 * @param version - Migration version number.
 * @param outputDir - Directory where the migration files will be saved.
 * @returns boolean indicating if migration was saved
 */
function saveMigrationFiles(
  migrationCode: string,
  version: number,
  outputDir: string
): boolean {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const migrationFilePath = path.join(outputDir, `migrationV${version}.ts`);
  const migrationCountPath = path.join(outputDir, `migrationCount.ts`);
  const indexFilePath = path.join(outputDir, `index.ts`);

  // Write the migration file
  fs.writeFileSync(migrationFilePath, migrationCode);

  // Write the migration count file
  fs.writeFileSync(migrationCountPath, `export const MIGRATION_VERSION = ${version};`);

  // Generate the migration index file
  const indexFileContent = `import { MigrationRunner } from "@forge/sql/out/migration";
import { MIGRATION_VERSION } from "./migrationCount";

export type MigrationType = (
  migrationRunner: MigrationRunner,
) => MigrationRunner;

export default async (
  migrationRunner: MigrationRunner,
): Promise<MigrationRunner> => {
  for (let i = 1; i <= MIGRATION_VERSION; i++) {
    const migrations = (await import(\`./migrationV\${i}\`)) as {
      default: MigrationType;
    };
    migrations.default(migrationRunner);
  }
  return migrationRunner;
};`;

  fs.writeFileSync(indexFilePath, indexFileContent);

  console.log(`✅ Migration file created: ${migrationFilePath}`);
  console.log(`✅ Migration count file updated: ${migrationCountPath}`);
  console.log(`✅ Migration index file created: ${indexFilePath}`);

  return true;
}

/**
 * Loads the current migration version from `migrationCount.ts`.
 * @param migrationPath - Path to the migration folder.
 * @returns The latest migration version.
 */
const loadMigrationVersion = async (migrationPath: string): Promise<number> => {
  try {
    const migrationCountFilePath = path.resolve(path.join(migrationPath, "migrationCount.ts"));
    if (!fs.existsSync(migrationCountFilePath)) {
      console.warn(
        `⚠️ Warning: migrationCount.ts not found in ${migrationCountFilePath}, assuming no previous migrations.`,
      );
      return 0;
    }

    const { MIGRATION_VERSION } = await import(migrationCountFilePath);
    console.log(`✅ Current migration version: ${MIGRATION_VERSION}`);
    return MIGRATION_VERSION as number;
  } catch (error) {
    console.error(`❌ Error loading migrationCount:`, error);
    process.exit(1);
  }
};

/**
 * Gets the current database schema from MySQL including indexes and foreign keys
 * @param connection - MySQL connection
 * @param dbName - Database name
 * @returns Database schema object with indexes and foreign keys
 */
async function getDatabaseSchema(connection: mysql.Connection, dbName: string): Promise<DatabaseSchema> {
  // Get columns
  const [columns] = await connection.execute<DatabaseColumn[]>(`
    SELECT TABLE_NAME, COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_KEY, EXTRA
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE TABLE_SCHEMA = ?
  `, [dbName]);

  // Get indexes
  const [indexes] = await connection.execute<DatabaseIndex[]>(`
    SELECT TABLE_NAME, INDEX_NAME, COLUMN_NAME, NON_UNIQUE
    FROM INFORMATION_SCHEMA.STATISTICS
    WHERE TABLE_SCHEMA = ?
    ORDER BY TABLE_NAME, INDEX_NAME, SEQ_IN_INDEX
  `, [dbName]);

  // Get foreign keys
  const [foreignKeys] = await connection.execute<DatabaseForeignKey[]>(`
    SELECT 
      TABLE_NAME,
      COLUMN_NAME,
      CONSTRAINT_NAME,
      REFERENCED_TABLE_NAME,
      REFERENCED_COLUMN_NAME
    FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
    WHERE TABLE_SCHEMA = ?
    AND REFERENCED_TABLE_NAME IS NOT NULL
  `, [dbName]);

  const schema: DatabaseSchema = {};

  // Process columns
  columns.forEach(row => {
    if (!schema[row.TABLE_NAME]) {
      schema[row.TABLE_NAME] = {
        columns: {},
        indexes: {},
        foreignKeys: {}
      };
    }
    schema[row.TABLE_NAME].columns[row.COLUMN_NAME] = row;
  });

  // Process indexes
  indexes.forEach(row => {
    if (!schema[row.TABLE_NAME].indexes[row.INDEX_NAME]) {
      schema[row.TABLE_NAME].indexes[row.INDEX_NAME] = {
        columns: [],
        unique: !row.NON_UNIQUE
      };
    }
    schema[row.TABLE_NAME].indexes[row.INDEX_NAME].columns.push(row.COLUMN_NAME);
  });

  // Process foreign keys
  foreignKeys.forEach(row => {
    if (!schema[row.TABLE_NAME].foreignKeys[row.CONSTRAINT_NAME]) {
      schema[row.TABLE_NAME].foreignKeys[row.CONSTRAINT_NAME] = {
        column: row.COLUMN_NAME,
        referencedTable: row.REFERENCED_TABLE_NAME,
        referencedColumn: row.REFERENCED_COLUMN_NAME
      };
    }
  });

  return schema;
}

/**
 * Converts MySQL type to normalized format for comparison
 * @param mysqlType - MySQL type from INFORMATION_SCHEMA or Drizzle type
 * @returns Normalized type string
 */
function normalizeMySQLType(mysqlType: string): string {
  // Remove length/precision information
  let normalized = mysqlType.replace(/\([^)]*\)/, '').toLowerCase();

  // Remove 'mysql' prefix from Drizzle types
  normalized = normalized.replace(/^mysql/, '');

  return normalized;
}

/**
 * Gets the name of a foreign key constraint
 * @param fk - The foreign key builder
 * @returns The name of the foreign key constraint
 */
function getForeignKeyName(fk: ForeignKeyBuilder): string {
  // @ts-ignore - Internal property access
  return fk.name;
}

/**
 * Gets the name of an index
 * @param index - The index builder
 * @returns The name of the index
 */
function getIndexName(index: AnyIndexBuilder): string {
  // @ts-ignore - Internal property access
  return index.name;
}

/**
 * Gets the name of a unique constraint
 * @param uc - The unique constraint builder
 * @returns The name of the unique constraint
 */
function getUniqueConstraintName(uc: UniqueConstraintBuilder): string {
  // @ts-ignore - Internal property access
  return uc.name;
}

/**
 * Gets the columns of an index
 * @param index - The index builder
 * @returns Array of column names
 */
function getIndexColumns(index: AnyIndexBuilder): string[] {
  // @ts-ignore - Internal property access
  return index.columns.map(col => col.name);
}

function compareForeignKey(fk: ForeignKeyBuilder, {columns}: { columns: string[]; unique: boolean }) {
  // @ts-ignore
  const fcolumns:string[] = fk.columns.map(c=>c.name);
  return fcolumns.sort().join(",") === columns.sort().join(",");
}

/**
 * Generates SQL changes by comparing Drizzle schema with database schema
 * @param drizzleSchema - Schema from Drizzle
 * @param dbSchema - Schema from database
 * @param schemaModule - Drizzle schema module
 * @returns Array of SQL statements
 */
function generateSchemaChanges(
  drizzleSchema: DrizzleSchema,
  dbSchema: DatabaseSchema,
  schemaModule: Record<string, any>
): string[] {
  const changes: string[] = [];

  // First check existing tables in database
  for (const [tableName, dbTable] of Object.entries(dbSchema)) {
    const drizzleColumns = drizzleSchema[tableName];

    if (!drizzleColumns) {
      // Table exists in database but not in schema - create it
      const columns = Object.entries(dbTable.columns)
        .map(([colName, col]) => {
          const type = col.COLUMN_TYPE;
          const nullable = col.IS_NULLABLE === 'YES' ? 'NULL' : 'NOT NULL';
          const autoIncrement = col.EXTRA.includes('auto_increment') ? 'AUTO_INCREMENT' : '';
          return `\`${colName}\` ${type} ${nullable} ${autoIncrement}`.trim();
        })
        .join(',\n  ');

      changes.push(`CREATE TABLE if not exists \`${tableName}\` (\n  ${columns}\n);`);

      // Create indexes for new table
      for (const [indexName, dbIndex] of Object.entries(dbTable.indexes)) {
        // Skip primary key and foreign key indexes
        if (indexName === 'PRIMARY') {
          continue;
        }

        // Check if any column in this index is a foreign key
        const isForeignKeyIndex = dbIndex.columns.some(colName => {
          const column = dbTable.columns[colName];
          return column && column.COLUMN_KEY === 'MUL' && column.EXTRA.includes('foreign key');
        });

        if (isForeignKeyIndex) {
          continue;
        }

        // Create index
        const columns = dbIndex.columns.map(col => `\`${col}\``).join(', ');
        const unique = dbIndex.unique ? 'UNIQUE ' : '';
        changes.push(`CREATE if not exists ${unique}INDEX   \`${indexName}\` ON \`${tableName}\` (${columns});`);
      }

      // Create foreign keys for new table
      for (const [fkName, dbFK] of Object.entries(dbTable.foreignKeys)) {
        changes.push(`ALTER TABLE \`${tableName}\` ADD CONSTRAINT \`${fkName}\` FOREIGN KEY (\`${dbFK.column}\`) REFERENCES \`${dbFK.referencedTable}\` (\`${dbFK.referencedColumn}\`);`);
      }
      continue;
    }

    // Check for column changes in existing tables
    for (const [colName, dbCol] of Object.entries(dbTable.columns)) {
      const drizzleCol = Object.values(drizzleColumns).find(c => c.name === colName);

      if (!drizzleCol) {
        // Column exists in database but not in schema - create it
        const type = dbCol.COLUMN_TYPE;
        const nullable = dbCol.IS_NULLABLE === 'YES' ? 'NULL' : 'NOT NULL';
        changes.push(`ALTER TABLE \`${tableName}\` ADD COLUMN \`${colName}\` ${type} ${nullable};`);
        continue;
      }

      // Check for type changes
      const normalizedDbType = normalizeMySQLType(dbCol.COLUMN_TYPE);
      const normalizedDrizzleType = normalizeMySQLType(drizzleCol.getSQLType());

      if (normalizedDbType !== normalizedDrizzleType) {
        const type = dbCol.COLUMN_TYPE; // Use database type as source of truth
        const nullable = dbCol.IS_NULLABLE === 'YES' ? 'NULL' : 'NOT NULL';
        changes.push(`ALTER TABLE \`${tableName}\` MODIFY COLUMN \`${colName}\` ${type} ${nullable};`);
      }
    }

    // Check for index changes
    const table = Object.values(schemaModule).find(t => {
      const metadata = getTableMetadata(t);
      return metadata.tableName === tableName;
    });

    if (table) {
      const metadata = getTableMetadata(table);
      // First check indexes that exist in database but not in schema
      for (const [indexName, dbIndex] of Object.entries(dbTable.indexes)) {
        // Skip primary key and foreign key indexes
        if (indexName === 'PRIMARY') {
          continue;
        }

        // Check if this is a foreign key index
        const isForeignKeyIndex = metadata.foreignKeys.some(fk => getForeignKeyName(fk) === indexName || compareForeignKey(fk, dbIndex));
        if (isForeignKeyIndex) {
          continue;
        }

        // Check if this is a unique constraint
        const existsUniqIndex = metadata.uniqueConstraints.find(uc => getUniqueConstraintName(uc) === indexName);
        let drizzleIndex = metadata.indexes.find(i => getIndexName(i) === indexName);

        if (!drizzleIndex && existsUniqIndex) {
          drizzleIndex = existsUniqIndex as unknown as AnyIndexBuilder;
        }

        if (!drizzleIndex) {
          // Index exists in database but not in schema - create it
          const columns = dbIndex.columns.map(col => `\`${col}\``).join(', ');
          const unique = dbIndex.unique ? 'UNIQUE ' : '';
          changes.push(`CREATE if not exists ${unique}INDEX \`${indexName}\` ON \`${tableName}\` (${columns});`);
          continue;
        }

        // Check if index columns changed
        const dbColumns = dbIndex.columns.join(', ');
        const drizzleColumns = getIndexColumns(drizzleIndex).join(', ');
        if (dbColumns !== drizzleColumns || dbIndex.unique !== drizzleIndex instanceof UniqueConstraintBuilder) {
          // Drop and recreate index using database values
          changes.push(`DROP INDEX \`${indexName}\` ON \`${tableName}\`;`);
          const columns = dbIndex.columns.map(col => `\`${col}\``).join(', ');
          const unique = dbIndex.unique ? 'UNIQUE ' : '';
          changes.push(`CREATE if not exists  ${unique}INDEX \`${indexName}\` ON \`${tableName}\` (${columns});`);
        }
      }

      // First check foreign keys that exist in database but not in schema
      for (const [fkName, dbFK] of Object.entries(dbTable.foreignKeys)) {
        // Find if this column is referenced in Drizzle schema
        const drizzleFK = metadata.foreignKeys.find(fk => getForeignKeyName(fk) === fkName || compareForeignKey(fk, {columns: [dbFK.column], unique: false}));

        if (!drizzleFK) {
          // Foreign key exists in database but not in schema - drop it
          changes.push(`ALTER TABLE \`${tableName}\` ADD CONSTRAINT \`${fkName}\` FOREIGN KEY (\`${dbFK.column}\`) REFERENCES \`${dbFK.referencedTable}\` (\`${dbFK.referencedColumn}\`);`);
          continue;
        }
      }

      // Then check for new foreign keys that exist in schema but not in database
      for (const drizzleForeignKey of metadata.foreignKeys) {
        // Find if this foreign key exists in database
        const isDbFk = Object.keys(dbTable.foreignKeys).find(fk => {
          let foreignKey = dbTable.foreignKeys[fk];
          return fk === getForeignKeyName(drizzleForeignKey) || compareForeignKey(drizzleForeignKey, {columns:[foreignKey.column],unique:false});
        });

        if (!isDbFk) {
          // Foreign key exists in schema but not in database - create it
          const fkName = getForeignKeyName(drizzleForeignKey);
          changes.push(`ALTER TABLE \`${tableName}\` DROP FOREIGN KEY \`${fkName}\`;`);
        }
      }
    }
  }

  return changes;
}

/**
 * Updates an existing database migration by generating schema modifications.
 * @param options - Database connection settings and output paths.
 */
export const updateMigration = async (options: any) => {
  try {
    let version = await loadMigrationVersion(options.output);
    version=2;
    const prevVersion = 1;

    if (version < 1) {
      console.log(
        `⚠️ Initial migration not found. Run "npx forge-sql-orm migrations:create" first.`,
      );
      process.exit(0);
    }
    version += 1;

    // Create database connection
    const connection = await mysql.createConnection({
      host: options.host,
      port: options.port,
      user: options.user,
      password: options.password,
      database: options.dbName,
    });

    try {
      // Get current database schema
      const dbSchema = await getDatabaseSchema(connection, options.dbName);

      // Import Drizzle schema using absolute path
      const schemaPath = path.resolve(options.entitiesPath, 'schema.ts');
      if (!fs.existsSync(schemaPath)) {
        throw new Error(`Schema file not found at: ${schemaPath}`);
      }

      const schemaModule = await import(schemaPath);
      if (!schemaModule) {
        throw new Error(`Invalid schema file at: ${schemaPath}. Schema must export tables.`);
      }

      // Process exported tables
      const drizzleSchema: DrizzleSchema = {};

      // Get all exports that are tables
      const tables = Object.values(schemaModule) as MySqlTable<TableConfig>[];

      tables.forEach(table => {
        const metadata = getTableMetadata(table);
        if (metadata.tableName) {
          // Convert AnyColumn to DrizzleColumn
          const columns: Record<string, DrizzleColumn> = {};
          Object.entries(metadata.columns).forEach(([name, column]) => {
            columns[name] = {
              type: column.dataType,
              notNull: column.notNull,
              autoincrement: (column as any).autoincrement,
              columnType: column.columnType,
              name: column.name,
              getSQLType: () => column.getSQLType()
            };
          });
          drizzleSchema[metadata.tableName] = columns;
        }
      });

      if (Object.keys(drizzleSchema).length === 0) {
        throw new Error(`No valid tables found in schema at: ${schemaPath}`);
      }

      console.log('Found tables:', Object.keys(drizzleSchema));

      // Generate SQL changes
      const createStatements = filterWithPreviousMigration(generateSchemaChanges(drizzleSchema, dbSchema, schemaModule), prevVersion,options.output);

      if (createStatements.length) {
        // Generate migration file content
        const migrationFile = generateMigrationFile(createStatements, version);

        // Save migration files only if there are actual changes
        if (saveMigrationFiles(migrationFile, version, options.output)) {
      console.log(`✅ Migration successfully updated!`);
        }
      process.exit(0);
    } else {
      console.log(`⚠️ No new migration changes detected.`);
      process.exit(0);
      }
    } finally {
      await connection.end();
    }
  } catch (error) {
    console.error(`❌ Error during migration update:`, error);
    process.exit(1);
  }
};

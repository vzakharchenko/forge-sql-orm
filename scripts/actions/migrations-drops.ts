import "reflect-metadata";
import fs from "fs";
import path from "path";
import { MySqlTable, TableConfig } from "drizzle-orm/mysql-core";

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
    columns: {
      [columnName: string]: DrizzleColumn;
    };
    indexes: {
      [indexName: string]: {
        columns: string[];
        unique: boolean;
      };
    };
    foreignKeys: {
      [fkName: string]: {
        column: string;
        referencedTable: string;
        referencedColumn: string;
        getName: () => string;
      };
    };
  };
}

/**
 * Generates a migration ID using current date
 * @returns Migration ID string with current date
 */
function generateMigrationUUID(version:number): string {
  const now = new Date();
  const timestamp = now.getTime();
  return `MIGRATION_V${version}_${timestamp}`;
}

/**
 * Generates a migration file using the provided SQL statements.
 * @param createStatements - Array of SQL statements.
 * @param version - Migration version number.
 * @returns TypeScript migration file content.
 */
function generateMigrationFile(createStatements: string[], version: number): string {
  const uniqId = generateMigrationUUID(version);
  // Clean each SQL statement and generate migration lines with .enqueue()
  const migrationLines = createStatements
    .map(
      (stmt, index) =>
        `        .enqueue("${uniqId}_${index}", \"${stmt}\")`, // eslint-disable-line no-useless-escape
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
 * Saves the generated migration file along with `migrationCount.ts` and `index.ts`.
 * @param migrationCode - The migration code to be written to the file.
 * @param version - Migration version number.
 * @param outputDir - Directory where the migration files will be saved.
 */
function saveMigrationFiles(migrationCode: string, version: number, outputDir: string) {
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
}

/**
 * Creates a full database migration.
 * @param options - Database connection settings and output paths.
 */
export const dropMigration = async (options: any) => {
  try {
    // Start from version 1 if no previous migrations exist
    const version = 1;

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
      const symbols = Object.getOwnPropertySymbols(table);
      const nameSymbol = symbols.find(s => s.toString().includes('Name'));
      const columnsSymbol = symbols.find(s => s.toString().includes('Columns'));
      const indexesSymbol = symbols.find(s => s.toString().includes('Indexes'));
      const foreignKeysSymbol = symbols.find(s => s.toString().includes('ForeignKeys'));

      if (table && nameSymbol && columnsSymbol) {
        // @ts-ignore
        drizzleSchema[table[nameSymbol]] = {
          // @ts-ignore
          columns: table[columnsSymbol],
          // @ts-ignore
          indexes: indexesSymbol ? table[indexesSymbol] || {} : {},
          // @ts-ignore
          foreignKeys: foreignKeysSymbol ? table[foreignKeysSymbol] || {} : {}
        };
      }
    });

    if (Object.keys(drizzleSchema).length === 0) {
      throw new Error(`No valid tables found in schema at: ${schemaPath}`);
    }

    console.log('Found tables:', Object.keys(drizzleSchema));

    // Generate drop statements
    const dropStatements: string[] = [];

    // Process each table
    for (const [tableName, tableInfo] of Object.entries(drizzleSchema)) {
      // Drop foreign keys first
      for (const fk of Object.values(tableInfo.foreignKeys)) {
        // @ts-ignore
        const fkName = fk.getName();
        dropStatements.push(`ALTER TABLE \`${tableName}\` DROP FOREIGN KEY \`${fkName}\`;`);
      }

      // Drop indexes
      for (const [indexName, index] of Object.entries(tableInfo.indexes)) {
        // Skip primary key
        if (indexName === 'PRIMARY') continue;
        dropStatements.push(`DROP INDEX \`${indexName}\` ON \`${tableName}\`;`);
      }

      // Drop table
      dropStatements.push(`DROP TABLE IF EXISTS \`${tableName}\`;`);
    }

    // Add migration to clear migrations table
    dropStatements.push(`DELETE FROM __migrations;`);

    // Generate and save migration files
    const migrationFile = generateMigrationFile(dropStatements, version);
    saveMigrationFiles(migrationFile, version, options.output);

    console.log(`✅ Migration successfully created!`);
    process.exit(0);
  } catch (error) {
    console.error(`❌ Error during migration creation:`, error);
    process.exit(1);
  }
};

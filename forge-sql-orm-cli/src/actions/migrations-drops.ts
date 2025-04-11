import "reflect-metadata";
import fs from "fs";
import path from "path";
import { MySqlTable, TableConfig } from "drizzle-orm/mysql-core";
import { getTableMetadata, generateDropTableStatements } from "forge-sql-orm";

/**
 * Generates a migration ID using current date
 * @returns Migration ID string with current date
 */
function generateMigrationUUID(version: number): string {
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
      (stmt, index) => `        .enqueue("${uniqId}_${index}", \"${stmt}\")`, // eslint-disable-line no-useless-escape
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
    const schemaPath = path.resolve(options.entitiesPath, "schema.ts");
    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Schema file not found at: ${schemaPath}`);
    }

    const schemaModule = await import(schemaPath);
    if (!schemaModule) {
      throw new Error(`Invalid schema file at: ${schemaPath}. Schema must export tables.`);
    }

    // Get all exports that are tables
    const tables = Object.values(schemaModule) as MySqlTable<TableConfig>[];

    if (tables.length === 0) {
      throw new Error(`No valid tables found in schema at: ${schemaPath}`);
    }

    // Get table names for logging
    const tableNames = tables
      .map((table) => {
        const metadata = getTableMetadata(table);
        return metadata.tableName;
      })
      .filter(Boolean);

    console.log("Found tables:", tableNames);

    // Generate drop statements
    const dropStatements = generateDropTableStatements(tableNames);

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

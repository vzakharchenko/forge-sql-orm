import "reflect-metadata";
import fs from "fs";
import path from "path";
import { MikroORM } from "@mikro-orm/mysql";
import { execSync } from "child_process";
import { rmSync } from "fs";

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
 * Cleans SQL statements by removing unnecessary database options.
 * @param sql - The raw SQL statement.
 * @returns The cleaned SQL statement.
 */
function cleanSQLStatement(sql: string): string {
  // Remove unnecessary database options
  return sql.replace(/\s+default\s+character\s+set\s+utf8mb4\s+engine\s*=\s*InnoDB;?/gi, "").trim();
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
        `        .enqueue("${uniqId}_${index}", \"${cleanSQLStatement(stmt)}\")`, // eslint-disable-line no-useless-escape
    )
    .join("\n");

  // Add migration to clear migrations table
  const clearMigrationsLine = `        .enqueue("${uniqId}", "DELETE FROM __migrations")`;

  // Migration template
  return `import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
    return migrationRunner
${migrationLines}
${clearMigrationsLine};
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
 * Extracts only the relevant SQL statements for migration.
 * @param schema - The full database schema as SQL.
 * @returns Filtered list of SQL statements.
 */
const extractDropStatements = (schema: string): string[] => {
  const statements = schema.split(";").map((s) => s.trim());
  return statements.filter((s)=>{
    return s.toLowerCase().startsWith("drop");
  });
};

/**
 * Dynamically loads `entities` from `index.ts` in the specified directory.
 * @param entitiesPath - Path to the directory containing `index.ts`.
 * @returns Array of entity classes.
 */
const loadEntities = async (entitiesPath: string) => {
  try {
    const indexFilePath = path.resolve(path.join(entitiesPath, "index.ts"));
    if (!fs.existsSync(indexFilePath)) {
      console.error(`❌ Error: index.ts not found in ${indexFilePath}`);
      process.exit(1);
    }

    const { default: entities } = await import(indexFilePath);
    console.log(`✅ Loaded ${entities.length} entities from ${entitiesPath}`);
    return entities;
  } catch (error) {
    console.error(`❌ Error loading index.ts from ${entitiesPath}:`, error);
    process.exit(1);
  }
};

/**
 * Loads the current migration version from `migrationCount.ts`.
 * @param migrationPath - Path to the migration folder.
 * @returns The latest migration version.
 */
const loadMigrationVersion = async (migrationPath: string): Promise<number> => {
  try {
    const migrationCountFilePath = path.resolve(path.join(migrationPath, "migrationCount.ts"));
    if (!fs.existsSync(migrationCountFilePath)) {
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
 * Creates a full database migration.
 * @param options - Database connection settings and output paths.
 */
export const dropMigration = async (options: any) => {
  try {

    // Start from version 1 if no previous migrations exist
    const version = 1;

    // Load entities dynamically from index.ts
    const entities = await loadEntities(options.entitiesPath);

    // Initialize MikroORM
    const orm = MikroORM.initSync({
      host: options.host,
      port: options.port,
      user: options.user,
      password: options.password,
      dbName: options.dbName,
      entities: entities,
    });

    // Generate SQL schema
    const dropSchemaSQL = await orm.schema.getDropSchemaSQL({ wrap: true });
    const statements = extractDropStatements(dropSchemaSQL);

    // Generate and save migration files
    const migrationFile = generateMigrationFile(statements, version);
    saveMigrationFiles(migrationFile, version, options.output);

    console.log(`✅ Migration successfully created!`);
    process.exit(0);
  } catch (error) {
    console.error(`❌ Error during migration creation:`, error);
    process.exit(1);
  }
};

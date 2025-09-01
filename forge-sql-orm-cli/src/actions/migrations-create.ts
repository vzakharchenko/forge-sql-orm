import "reflect-metadata";
import fs from "fs";
import path from "path";

import { execSync } from "child_process";

/**
 * Options for migration creation
 */
export interface CreateMigrationOptions {
  output: string;
  entitiesPath: string;
  force?: boolean;
}

/**
 * Loads the current migration version from `migrationCount.ts`.
 * @param migrationPath - Path to the migration folder.
 * @returns The latest migration version.
 */
export const loadMigrationVersion = async (migrationPath: string): Promise<number> => {
  try {
    const migrationCountFilePath = path.resolve(path.join(migrationPath, "migrationCount.ts"));
    if (!fs.existsSync(migrationCountFilePath)) {
      console.log(`✅ Current migration version: 0`);
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
 * Cleans SQL statements by removing unnecessary database options.
 * @param sql - The raw SQL statement.
 * @returns The cleaned SQL statement.
 */
export function cleanSQLStatement(sql: string): string {
  // Add IF NOT EXISTS to CREATE TABLE statements
  sql = sql.replace(/create\s+table\s+(\w+)/gi, "create table if not exists $1");

  // Add IF NOT EXISTS to CREATE INDEX statements
  sql = sql.replace(/create\s+index\s+(\w+)/gi, "create index if not exists $1");

  // Add IF NOT EXISTS to ADD INDEX statements
  sql = sql.replace(
    /alter\s+table\s+(\w+)\s+add\s+index\s+(\w+)/gi,
    "alter table $1 add index if not exists $2",
  );

  // Add IF NOT EXISTS to ADD CONSTRAINT statements
  sql = sql.replace(
    /alter\s+table\s+(\w+)\s+add\s+constraint\s+(\w+)/gi,
    "alter table $1 add constraint if not exists $2",
  );

  // Remove unnecessary database options
  return sql.replace(/\s+default\s+character\s+set\s+utf8mb4\s+engine\s*=\s*InnoDB;?/gi, "").trim();
}

/**
 * Generates a migration file using the provided SQL statements.
 * @param createStatements - Array of SQL statements.
 * @param version - Migration version number.
 * @returns TypeScript migration file content.
 */
export function generateMigrationFile(createStatements: string[], version: number): string {
  const versionPrefix = `v${version}_MIGRATION`;

  // Clean each SQL statement and generate migration lines with .enqueue()
  const migrationLines = createStatements
    .map(
      (stmt, index) =>
        `        .enqueue("${versionPrefix}${index}", "${cleanSQLStatement(stmt).replace(/\s+/g, " ")}")`,
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
export function saveMigrationFiles(migrationCode: string, version: number, outputDir: string) {
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

  // Generate the migration index file with static imports
  // Build import lines for each migration version
  const importLines = [];
  for (let i = 1; i <= version; i++) {
    importLines.push(`import v${i} from "./migrationV${i}";`);
  }
  // Build call lines for each migration version
  const callLines = [];
  for (let i = 1; i <= version; i++) {
    callLines.push(`  v${i}(migrationRunner);`);
  }
  const indexFileContent = `import { MigrationRunner } from "@forge/sql/out/migration";
${importLines.join("\n")}

export type MigrationType = (
  migrationRunner: MigrationRunner,
) => MigrationRunner;

export default async (
  migrationRunner: MigrationRunner,
): Promise<MigrationRunner> => {
${callLines.join("\n")}
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
export const extractCreateStatements = (schema: string): string[] => {
  // Split by statement-breakpoint and semicolon
  const statements = schema
    .split(/--> statement-breakpoint|;/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  return statements.filter(
    (stmt) =>
      stmt.toLowerCase().startsWith("create table") ||
      stmt.toLowerCase().startsWith("alter table") ||
      stmt.toLowerCase().includes("add index") ||
      stmt.toLowerCase().includes("create index") ||
      stmt.toLowerCase().includes("add unique index") ||
      stmt.toLowerCase().includes("add constraint"),
  );
};

/**
 * Creates a full database migration.
 * @param options - Database connection settings and output paths.
 */
export const createMigration = async (options: CreateMigrationOptions) => {
  try {
    let version = await loadMigrationVersion(options.output);

    if (version > 0) {
      if (options.force) {
        console.warn(
          `⚠️ Warning: Migration already exists. Creating new migration with force flag...`,
        );
      } else {
        console.error(
          `❌ Error: Migration has already been created. Use --force flag to override.`,
        );
        process.exit(1);
      }
    }

    // Generate SQL using drizzle-kit
    await execSync(
      `npx drizzle-kit generate --name=init --dialect mysql --out ${options.output} --schema ${options.entitiesPath}`,
      { encoding: "utf-8" },
    );
    const initSqlFile = path.join(options.output, "0000_init.sql");
    const sql = fs.readFileSync(initSqlFile, "utf-8");

    // Extract and clean statements
    const createStatements = extractCreateStatements(sql);

    // Generate and save migration files
    const migrationFile = generateMigrationFile(createStatements, 1);
    saveMigrationFiles(migrationFile, 1, options.output);

    fs.rmSync(initSqlFile, { force: true });
    console.log(`✅ Removed SQL file: ${initSqlFile}`);
    // Remove meta directory after processing
    let metaDir = path.join(options.output, "meta");
    fs.rmSync(metaDir, { recursive: true, force: true });
    console.log(`✅ Removed: ${metaDir}`);
    console.log(`✅ Migration successfully created!`);
    process.exit(0);
  } catch (error) {
    console.error(`❌ Error during migration creation:`, error);
    process.exit(1);
  }
};

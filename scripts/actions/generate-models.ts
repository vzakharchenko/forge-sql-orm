import "reflect-metadata";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

/**
 * Options for model generation
 */
interface GenerateModelsOptions {
  host: string;
  port: number;
  user: string;
  password: string;
  dbName: string;
  output: string;
  versionField: string,
}

/**
 * Interface for column metadata
 */
interface ColumnMetadata {
  autoincrement: boolean;
  name: string;
  type: string;
  primaryKey: boolean;
  notNull: boolean;
}

/**
 * Interface for table metadata
 */
interface TableMetadata {
  name: string;
  columns: Record<string, ColumnMetadata>;
  compositePrimaryKeys: Record<string, { name: string; columns: string[] }>;
  indexes: Record<string, any>;
  foreignKeys: Record<string, any>;
  uniqueConstraints: Record<string, any>;
  checkConstraint: Record<string, any>;
}

/**
 * Interface for version field metadata
 */
interface VersionFieldMetadata {
  fieldName: string;
}

/**
 * Interface for table version metadata
 */
interface TableVersionMetadata {
  tableName: string;
  versionField: VersionFieldMetadata;
}

/**
 * Type for additional metadata map
 */
type AdditionalMetadata = Record<string, TableVersionMetadata>;

/**
 * Interface for journal entry
 */
interface JournalEntry {
  idx: number;
  version: string;
  when: number;
  tag: string;
  breakpoints: boolean;
}

/**
 * Interface for journal data
 */
interface JournalData {
  version: string;
  dialect: string;
  entries: JournalEntry[];
}

/**
 * Replaces MySQL types with custom types in the generated schema
 * @param schemaContent - The content of the generated schema file
 * @returns Modified schema content with custom types
 */
function replaceMySQLTypes(schemaContent: string): string {
  // Add imports at the top of the file
  const imports = `import { mySqlDateTimeString, mySqlTimeString, mySqlDateString, mySqlTimestampString } from "forge-sql-orm";\n\n`;
  
  // Replace types in the content
  let modifiedContent = schemaContent
    // Handle datetime with column name and mode option
    .replace(/datetime\(['"]([^'"]+)['"],\s*{\s*mode:\s*['"]([^'"]+)['"]\s*}\)/g, 'mySqlDateTimeString(\'$1\')')
    // Handle datetime with column name only
    .replace(/datetime\(['"]([^'"]+)['"]\)/g, 'mySqlDateTimeString(\'$1\')')
    // Handle datetime with mode option only
    .replace(/datetime\(\s*{\s*mode:\s*['"]([^'"]+)['"]\s*}\s*\)/g, 'mySqlDateTimeString()')
    // Handle simple datetime call
    .replace(/datetime\(\)/g, 'mySqlDateTimeString()')
    // Handle time with column name and mode option
    .replace(/time\(['"]([^'"]+)['"],\s*{\s*mode:\s*['"]([^'"]+)['"]\s*}\)/g, 'mySqlTimeString(\'$1\')')
    // Handle time with column name only
    .replace(/time\(['"]([^'"]+)['"]\)/g, 'mySqlTimeString(\'$1\')')
    // Handle time with mode option only
    .replace(/time\(\s*{\s*mode:\s*['"]([^'"]+)['"]\s*}\s*\)/g, 'mySqlTimeString()')
    // Handle simple time call
    .replace(/time\(\)/g, 'mySqlTimeString()')
    // Handle date with column name and mode option
    .replace(/date\(['"]([^'"]+)['"],\s*{\s*mode:\s*['"]([^'"]+)['"]\s*}\)/g, 'mySqlDateString(\'$1\')')
    // Handle date with column name only
    .replace(/date\(['"]([^'"]+)['"]\)/g, 'mySqlDateString(\'$1\')')
    // Handle date with mode option only
    .replace(/date\(\s*{\s*mode:\s*['"]([^'"]+)['"]\s*}\s*\)/g, 'mySqlDateString()')
    // Handle simple date call
    .replace(/date\(\)/g, 'mySqlDateString()')
    // Handle timestamp with column name and mode option
    .replace(/timestamp\(['"]([^'"]+)['"],\s*{\s*mode:\s*['"]([^'"]+)['"]\s*}\)/g, 'mySqlTimestampString(\'$1\')')
    // Handle timestamp with column name only
    .replace(/timestamp\(['"]([^'"]+)['"]\)/g, 'mySqlTimestampString(\'$1\')')
    // Handle timestamp with mode option only
    .replace(/timestamp\(\s*{\s*mode:\s*['"]([^'"]+)['"]\s*}\s*\)/g, 'mySqlTimestampString()')
    // Handle simple timestamp call
    .replace(/timestamp\(\)/g, 'mySqlTimestampString()');

  // Add imports if they don't exist
  if (!modifiedContent.includes('import { mySqlDateTimeString')) {
    modifiedContent = imports + modifiedContent;
  }

  return modifiedContent;
}

/**
 * Generates models for all tables in the database using drizzle-kit
 * @param options - Generation options
 */
export const generateModels = async (options: GenerateModelsOptions) => {
  try {
    // Generate models using drizzle-kit pull
    const sql = await execSync(
      `npx drizzle-kit pull --dialect mysql --url mysql://${options.user}:${options.password}@${options.host}:${options.port}/${options.dbName} --out ${options.output}`,
      { encoding: 'utf-8' }
    );

    // Process metadata to create version map
    const metaDir = path.join(options.output, 'meta');
    const additionalMetadata: AdditionalMetadata = {};

    if (fs.existsSync(metaDir)) {
      const snapshotFile = path.join(metaDir, '0000_snapshot.json');
      if (fs.existsSync(snapshotFile)) {
        const snapshotData = JSON.parse(fs.readFileSync(snapshotFile, 'utf-8'));

        // Process each table from the snapshot
        for (const [tableName, tableData] of Object.entries(snapshotData.tables)) {
          const table = tableData as TableMetadata;

          // Find version field in columns
          const versionField = Object.entries(table.columns).find(([_, col]) =>
            col.name.toLowerCase() === options.versionField
          );

          if (versionField) {
            const [_, col] = versionField;
            const fieldType = col.type;
            const isSupportedType = fieldType === 'datetime' || fieldType === 'timestamp' || fieldType === 'int' || fieldType === 'number' || fieldType === 'decimal';
            if (!col.notNull){
              console.warn( `Version field "${col.name}" in table ${tableName} is nullable. Versioning may not work correctly.`)
            } else if (!isSupportedType) {
              console.warn(
                  `Version field "${col.name}" in table ${tableName} has unsupported type "${fieldType}". ` +
                  `Only datetime, timestamp, int, and decimal types are supported for versioning. Versioning will be skipped.`
              );
            } else {
              additionalMetadata[tableName] = {
                tableName,
                versionField: {
                  fieldName: col.name
                }
              };
            }
          }
        }
      }
    }

    // Create version metadata file
    const versionMetadataContent = `/**
 * This file was auto-generated by forge-sql-orm
 * Generated at: ${new Date().toISOString()}
 * 
 * DO NOT EDIT THIS FILE MANUALLY
 * Any changes will be overwritten on next generation
 */
 
 
export * from "./relations";
export * from "./schema";

export interface VersionFieldMetadata {
  fieldName: string;
}

export interface TableMetadata {
  tableName: string;
  versionField: VersionFieldMetadata;
}

export type AdditionalMetadata = Record<string, TableMetadata>;

export const additionalMetadata: AdditionalMetadata = ${JSON.stringify(additionalMetadata, null, 2)};
`;

    fs.writeFileSync(path.join(options.output, 'index.ts'), versionMetadataContent);

    // Replace MySQL types in the generated schema file
    const schemaPath = path.join(options.output, 'schema.ts');
    if (fs.existsSync(schemaPath)) {
      const schemaContent = fs.readFileSync(schemaPath, 'utf-8');
      const modifiedContent = replaceMySQLTypes(schemaContent);
      fs.writeFileSync(schemaPath, modifiedContent);
      console.log(`✅ Updated schema types in: ${schemaPath}`);
    }

    // Remove migration files and meta directory if they exist
    const migrationDir = path.join(options.output, 'migrations');

    if (fs.existsSync(migrationDir)) {
      fs.rmSync(migrationDir, { recursive: true, force: true });
      console.log(`✅ Removed: ${migrationDir}`);
    }

    // Read journal and remove corresponding SQL file
    if (fs.existsSync(metaDir)) {
      const journalFile = path.join(metaDir, '_journal.json');
      if (fs.existsSync(journalFile)) {
        const journalData = JSON.parse(fs.readFileSync(journalFile, 'utf-8')) as JournalData;

        // Remove SQL files for each entry
        for (const entry of journalData.entries) {
          const sqlFile = path.join(options.output, `${entry.tag}.sql`);
          if (fs.existsSync(sqlFile)) {
            fs.rmSync(sqlFile, { force: true });
            console.log(`✅ Removed SQL file: ${entry.tag}.sql`);
          }
        }
      }

      // Remove meta directory after processing
      fs.rmSync(metaDir, { recursive: true, force: true });
      console.log(`✅ Removed: ${metaDir}`);
    }

    console.log(`✅ Successfully generated models and version metadata`);
    process.exit(0);
  } catch (error) {
    console.error(`❌ Error during model generation:`, error);
    process.exit(1);
  }
};

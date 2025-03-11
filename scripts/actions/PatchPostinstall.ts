import fs from "fs";
import path from "path";

/**
 * Automates patches for MikroORM and Knex to fix Webpack issues.
 * - Removes problematic `require()` calls.
 * - Deletes unnecessary files and folders.
 * - Fixes dynamic imports (`import(id)`) in MikroORM.
 */

interface Patch {
  file?: string; // File to modify (optional)
  search?: RegExp; // Regex pattern to find problematic code
  replace?: string; // Replacement string for problematic code
  deleteLines?: RegExp[]; // List of regex patterns to remove specific lines
  description: string; // Description of the patch
  deleteFile?: string; // Path of the file to delete (optional)
  deleteFolder?: string; // Path of the folder to delete (optional)
}

const PATCHES: Patch[] = [
  // 🗑️ Remove unused dialects (mssql, postgres, sqlite) in MikroORM
  {
    file: "node_modules/@mikro-orm/knex/MonkeyPatchable.d.ts",
    deleteLines: [
      /^.*mssql.*$/gim,
      /^.*MsSql.*$/gim,
      /^\s*Postgres.*$/gm,
      /^.*Sqlite3.*$/gm,
      /^.*BetterSqlite3.*$/gim,
    ],
    description: "Removing unused dialects from MonkeyPatchable.d.ts",
  },
  {
    file: "node_modules/@mikro-orm/knex/MonkeyPatchable.js",
    deleteLines: [
      /^.*mssql.*$/gim,
      /^.*MsSql.*$/gim,
      /^.*postgres.*$/gim,
      /^.*sqlite.*$/gim,
      /^.*Sqlite.*$/gim,
    ],
    description: "Removing unused dialects from MonkeyPatchable.js",
  },
  {
    file: "node_modules/@mikro-orm/knex/dialects/index.js",
    deleteLines: [/^.*mssql.*$/gim, /^.*MsSql.*$/gim, /^.*postgresql.*$/gim, /^.*sqlite.*$/gim],
    description: "Removing unused dialects from @mikro-orm/knex/dialects/index.js",
  },
  {
    deleteFolder: "node_modules/@mikro-orm/knex/dialects/mssql",
    description: "Removing mssql dialect from MikroORM",
  },
  {
    deleteFolder: "node_modules/@mikro-orm/knex/dialects/postgresql",
    description: "Removing postgresql dialect from MikroORM",
  },
  {
    deleteFolder: "node_modules/@mikro-orm/knex/dialects/sqlite",
    description: "Removing sqlite dialect from MikroORM",
  },
  {
    deleteFolder: "node_modules/@mikro-orm/mysql/node_modules",
    description: "Removing node_modules from @mikro-orm/mysql",
  },
  {
    deleteFolder: "node_modules/@mikro-orm/knex/node_modules",
    description: "Removing node_modules from @mikro-orm/knex",
  },
  {
    deleteFolder: "node_modules/@mikro-orm/core/node_modules",
    description: "Removing sqlite dialect from MikroORM",
  },

  // 🔄 Fix Webpack `Critical dependency: the request of a dependency is an expression`
  {
    file: "node_modules/@mikro-orm/core/utils/Configuration.js",
    search: /dynamicImportProvider:\s*\/\* istanbul ignore next \*\/\s*\(id\) => import\(id\),/g,
    replace: "dynamicImportProvider: /* istanbul ignore next */ () => Promise.resolve({}),",
    description: "Fixing dynamic imports in MikroORM Configuration",
  },
  {
    file: "node_modules/@mikro-orm/core/utils/Utils.js",
    search: /static dynamicImportProvider = \(id\) => import\(id\);/g,
    replace: "static dynamicImportProvider = () => Promise.resolve({});",
    description: "Fixing dynamic imports in MikroORM Utils.js",
  },

  // 🛑 Remove deprecated `require.extensions` usage
  {
    file: "node_modules/@mikro-orm/core/utils/Utils.js",
    search: /\s\|\|\s*\(require\.extensions\s*&&\s*!!require\.extensions\['\.ts'\]\);\s*/g,
    replace: ";",
    description: "Removing deprecated `require.extensions` check in MikroORM",
  },

  // 🛠️ Patch Knex to remove `Migrator` and `Seeder`
  {
    file: "node_modules/knex/lib/knex-builder/make-knex.js",
    deleteLines: [
      /^const \{ Migrator \} = require\('\.\.\/migrations\/migrate\/Migrator'\);$/gm,
      /^const Seeder = require\('\.\.\/migrations\/seed\/Seeder'\);$/gm,
    ],
    description: "Removing `Migrator` and `Seeder` requires from make-knex.js",
  },
  {
    file: "node_modules/knex/lib/knex-builder/make-knex.js",
    search: /\sreturn new Migrator\(this\);/g,
    replace: "return null;",
    description: "Replacing `return new Migrator(this);` with `return null;`",
  },
  {
    file: "node_modules/knex/lib/knex-builder/make-knex.js",
    search: /\sreturn new Seeder\(this\);/g,
    replace: "return null;",
    description: "Replacing `return new Seeder(this);` with `return null;`",
  },
  {
    file: "node_modules/knex/lib/dialects/index.js",
    deleteLines: [
      /^.*mssql.*$/gim,
      /^.*MsSql.*$/gim,
      /^.*postgresql.*$/gim,
      /^.*sqlite.*$/gim,
      /^.*oracle.*$/gim,
      /^.*oracledb.*$/gim,
      /^.*pgnative.*$/gim,
      /^.*postgres.*$/gim,
      /^.*redshift.*$/gim,
      /^.*sqlite3.*$/gim,
      /^.*cockroachdb.*$/gim,
    ],
    description: "Removing unused dialects from @mikro-orm/knex/dialects/index.js",
  },
  {
    file: "node_modules/@mikro-orm/core/utils/Utils.js",
    search: /\s\|\|\s*\(require\.extensions\s*&&\s*!!require\.extensions\['\.ts'\]\);\s*/g,
    replace: ";", // Replaces with semicolon to keep syntax valid
    description: "Removing deprecated `require.extensions` check from MikroORM",
  },
  {
    file: "node_modules/@mikro-orm/core/utils/Utils.js",
    search: /^.*extensions.*$/gim,
    replace: "{", // Replaces with semicolon to keep syntax valid
    description: "Removing deprecated `require.extensions` check from MikroORM",
  },
  {
    file: "node_modules/@mikro-orm/core/utils/Utils.js",
    search: /^.*package.json.*$/gim,
    replace: "return 0;", // Replaces with semicolon to keep syntax valid
    description: "Removing deprecated `require.extensions` check from MikroORM",
  },
  {
    file: "node_modules/@mikro-orm/knex/dialects/mysql/index.js",
    deleteLines: [/^.*MariaDbKnexDialect.*$/gim],
    description: "Removing MariaDbKnexDialect",
  },
];

/**
 * Runs the MikroORM & Knex patching logic.
 */
export function runPostInstallPatch() {
  console.log("🔧 Applying MikroORM & Knex patches...");
  PATCHES.forEach(
    ({ file, search, replace, deleteLines, deleteFile, deleteFolder, description }) => {
      if (file) {
        const filePath = path.resolve(file);
        if (fs.existsSync(filePath)) {
          let content = fs.readFileSync(filePath, "utf8");
          let originalContent = content;

          // 🔄 Replace text
          if (search && replace) {
            if (typeof search === "string" ? content.includes(search) : search.test(content)) {
              content = content.replace(search, replace);
              console.log(`[PATCHED] ${description}`);
            }
          }

          // 🗑️ Remove matching lines
          if (deleteLines) {
            deleteLines.forEach((pattern) => {
              content = content
                .split("\n")
                .filter((line) => !pattern.test(line))
                .join("\n");
            });
            if (content !== originalContent) {
              console.log(`[CLEANED] Removed matching lines in ${file}`);
            }
          }

          // 💾 Save changes only if file was modified
          if (content !== originalContent) {
            fs.writeFileSync(filePath, content, "utf8");
          }

          // 🚮 Remove empty files
          if (content.trim() === "") {
            fs.unlinkSync(filePath);
            console.log(`[REMOVED] ${filePath} (file is now empty)`);
          }
        } else {
          console.warn(`[WARNING] File not found: ${file}`);
        }
      }

      // 🚮 Delete specific files
      if (deleteFile) {
        const deleteFilePath = path.resolve(deleteFile);
        if (fs.existsSync(deleteFilePath)) {
          fs.unlinkSync(deleteFilePath);
          console.log(`[DELETED] ${deleteFilePath} ${description}`);
        } else {
          console.log(`[SKIPPED] ${deleteFilePath} ${description}`);
        }
      }

      // 🚮 Delete entire folders
      if (deleteFolder) {
        const deleteFolderPath = path.resolve(deleteFolder);
        if (fs.existsSync(deleteFolderPath)) {
          fs.rmSync(deleteFolderPath, { recursive: true, force: true });
          console.log(`[DELETED] ${deleteFolderPath}  ${description}`);
        } else {
          console.log(`[SKIPPED] ${deleteFolderPath} ${description}`);
        }
      }
    },
  );

  console.log("🎉 MikroORM & Knex patching completed!");
}

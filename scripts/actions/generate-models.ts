import "reflect-metadata";
import { defineConfig, MikroORM, MongoNamingStrategy } from "../../src";
import { EntityGenerator } from "../../src";
import path from "path";
import fs from "fs";

const regenerateIndexFile = (outputPath: string) => {
  const entitiesDir = path.resolve(outputPath);
  const indexPath = path.join(entitiesDir, "index.ts");

  const entityFiles = fs
    .readdirSync(entitiesDir)
    .filter((file) => file.endsWith(".ts") && file !== "index.ts");

  const imports = entityFiles.map((file) => {
    const entityName = path.basename(file, ".ts");
    return `import { ${entityName} } from "./${entityName}";`;
  });

  const indexContent = `${imports.join("\n")}\n\nexport default [${entityFiles.map((file) => path.basename(file, ".ts")).join(", ")}];\n`;

  fs.writeFileSync(indexPath, indexContent, "utf8");
  console.log(`✅ Updated index.ts with ${entityFiles.length} entities.`);
};

export const generateModels = async (options: any) => {
  try {
    const ormConfig = defineConfig({
      host: options.host,
      port: options.port,
      user: options.user,
      password: options.password,
      dbName: options.dbName,
      namingStrategy: MongoNamingStrategy,
      discovery: { warnWhenNoEntities: false },
      extensions: [EntityGenerator],
      debug: true,
    }) as Parameters<typeof MikroORM.initSync>[0];

    const orm = MikroORM.initSync(ormConfig);
    console.log(`✅ Connected to ${options.dbName} at ${options.host}:${options.port}`);

    await orm.entityGenerator.generate({
      entitySchema: true,
      bidirectionalRelations: false,
      identifiedReferences: false,
      forceUndefined: true,
      undefinedDefaults: true,
      useCoreBaseEntity: false,
      onlyPurePivotTables: false,
      outputPurePivotTables: false,
      scalarPropertiesForRelations: "always",
      save: true,
      path: options.output,
    });

    regenerateIndexFile(options.output);

    console.log(`✅ Entities generated at: ${options.output}`);
    process.exit(0);
  } catch (error) {
    console.error(`❌ Error generating entities:`, error);
    process.exit(1);
  }
};

import "reflect-metadata";
import path from "path";
import fs from "fs";
import {defineConfig, MikroORM, MongoNamingStrategy} from "@mikro-orm/mysql";
import {EntityGenerator} from "@mikro-orm/entity-generator";
import {EntityMetadata} from "@mikro-orm/core/typings";

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

    const onCreatingVersionField = async (metadatas: EntityMetadata[]) => {
      metadatas.forEach((m) => {
        if (options.versionField) {
          const versionFieldName = Object.keys(m.properties).find((p) => {
            return (
                p === options.versionField ||
                m.properties[p]?.name === options.versionField ||
                m.properties[p]?.fieldNames?.find((f) => f === options.versionField)
            );
          });
          if (versionFieldName) {
            const property = m.properties[versionFieldName];
            if (property.type !== "datetime" && property.type !== "integer" && property.type !== "decimal") {
              console.warn(
                  `Version field "${property.name}" can be only datetime or integer Table ${m.tableName} but now is "${property.type}"`
              );
              return;
            }
            if (property.primary) {
              console.warn(`Version field "${property.name}" can not be primary key Table ${m.tableName}`);
              return;
            }
            if (property.nullable) {
              console.warn(`Version field "${property.name}" should not be nullable  Table ${m.tableName}`);
              return;
            }
            property.version = true;
          }
        }
      });
    };
    await orm.entityGenerator.generate({
      entitySchema: true,
      bidirectionalRelations: true,
      identifiedReferences: false,
      forceUndefined: true,
      undefinedDefaults: true,
      useCoreBaseEntity: false,
      onlyPurePivotTables: false,
      outputPurePivotTables: false,
      scalarPropertiesForRelations: "always",
      save: true,
      path: options.output,
      onInitialMetadata: onCreatingVersionField
    });

    regenerateIndexFile(options.output);

    console.log(`✅ Entities generated at: ${options.output}`);
    process.exit(0);
  } catch (error) {
    console.error(`❌ Error generating entities:`, error);
    process.exit(1);
  }
};

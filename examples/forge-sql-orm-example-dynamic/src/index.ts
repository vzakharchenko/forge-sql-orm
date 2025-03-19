import Resolver from "@forge/resolver";
import ForgeSQL from "forge-sql-orm";
import { migrationRunner, sql } from "@forge/sql";
import migration from "./migration";
import ENTITIES from "./entities";
import { Users, UsersSchema } from "./entities/Users";
import { EntityProperty, EntitySchema, QueryOrder } from "@mikro-orm/core";
import { DuplicateResponse, DynamicResponse, Metadata, SortType } from "./utils/Constants";
import { getMetadata } from "./utils/MetadataUtils";
import { createDuplicateSchema } from "./utils/EntityUtils";
import { Knex } from "@mikro-orm/mysql";

const resolver = new Resolver();
const forgeSQL = new ForgeSQL(ENTITIES);

const DuplicateSchema: EntitySchema = createDuplicateSchema(forgeSQL);

resolver.define("create", async (req): Promise<number> => {
  const payload = req.payload.data as Users;
  return await forgeSQL.crud().insert(UsersSchema, [payload]);
});

resolver.define("delete", async (req): Promise<number> => {
  const id = req.payload.id as number;
  return await forgeSQL.crud().deleteById(id, UsersSchema);
});

resolver.define("fetchMetadata", async (): Promise<Metadata> => {
  const userPrimaryKey = UsersSchema.meta.props.find((m) => m.primary) as EntityProperty;
  return {
    user: {
      id: { name: userPrimaryKey.name, type: userPrimaryKey.type },
      properties: getMetadata(UsersSchema.meta.props),
    },
    duplicate: {
      properties: getMetadata(DuplicateSchema.meta.props),
    },
  };
});

resolver.define("duplicate", async (): Promise<DuplicateResponse[]> => {
  const metadata = getMetadata(UsersSchema.meta.props);
  const fields: string[] = Object.keys(metadata);

  const selectFields: Array<string | Knex.Raw> = [
    ...fields,
    forgeSQL.getKnex().raw("COUNT(*) as count"),
  ];

  const query = await forgeSQL
    .createQueryBuilder(UsersSchema)
    .select(selectFields as unknown as string[])
    .groupBy(fields)
    .having("COUNT(*) > 1")
    .getFormattedQuery();

  // select `u0`.`name`, COUNT(*) as count from `users` as `u0` group by `u0`.`name` having (COUNT(*) > 1)
  const duplicateResult = await forgeSQL
    .fetch()
    .executeSchemaSQL(query, DuplicateSchema);

  return duplicateResult.map(
    (d): DuplicateResponse => ({
      fields: Object.keys(d).reduce<Record<string, string>>((acc, f) => {
        acc[f] = String(d[f] ?? "");
        return acc;
      }, {}),
    }),
  );
});

resolver.define("fetch", async (req): Promise<DynamicResponse[]> => {
  const sortType = req.payload.sortType as SortType | undefined;

  let select = forgeSQL.createQueryBuilder(UsersSchema).select("*");

  if (sortType?.name) {
    const orderBy: Record<string, QueryOrder> = {
      [sortType.name]:
        sortType.sortType === "ASC" ? QueryOrder.ASC_NULLS_FIRST : QueryOrder.DESC_NULLS_LAST,
    };
    select = select.orderBy(orderBy);
  }

  const query = select.getFormattedQuery();
  const result = await forgeSQL.fetch().executeSchemaSQL<Users>(query, UsersSchema);

  return result.map(
    (r): DynamicResponse => ({
      id: r.id,
      fields: UsersSchema.meta.props
        .filter((p) => p.kind === "scalar" && !p.primary)
        .reduce<Record<string, string>>((acc, p) => {
          acc[p.name] = String(r[p.name as keyof typeof r] ?? "");
          return acc;
        }, {}),
    }),
  );
});

export const handler = resolver.getDefinitions();

export const handlerMigration = async () => {
  try {
    console.log("Provisioning the database");
    await sql._provision();


    console.info("Running schema migrations");
    const migrations = await migration(migrationRunner);
    const successfulMigrations = await migrations.run();
    console.info("Migrations applied:", successfulMigrations);

    const migrationHistory = (await migrationRunner.list())
      .map((y) => `${y.id}, ${y.name}, ${y.migratedAt.toUTCString()}`)
      .join("\n");

    console.info("Migrations history:\nid, name, migrated_at\n", migrationHistory);

    return {
      headers: { "Content-Type": ["application/json"] },
      statusCode: 200,
      statusText: "OK",
      body: "Migrations successfully executed",
    };
  } catch (e) {
    console.error(JSON.stringify(e))
  }

};

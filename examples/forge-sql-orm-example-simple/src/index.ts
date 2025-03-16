import Resolver from "@forge/resolver";
import ForgeSQL from "forge-sql-orm";
import { migrationRunner, sql } from "@forge/sql";
import migration from "./migration";
import ENTITIES from "./entities";
import { Users, UsersSchema } from "./entities/Users";
import { QueryOrder } from "@mikro-orm/core";
import { DuplicateResponse, UserResponse, SortType } from "./utils/Constants";
import { Knex } from "@mikro-orm/mysql";
import {getValueByAlias, getValueBySchemaType} from "../../../src/utils/sqlUtils";

const resolver = new Resolver();
const forgeSQL = new ForgeSQL(ENTITIES, {logRawSqlQuery:true});

resolver.define("create", async (req): Promise<number> => {
  const payload = req.payload.data as Users;
  console.log('payload='+JSON.stringify(payload))
  return await forgeSQL.crud().insert(UsersSchema, [payload]);
});

resolver.define("delete", async (req): Promise<number> => {
  const id = req.payload.id as number;
  return await forgeSQL.crud().deleteById(id, UsersSchema);
});

resolver.define("duplicate", async (req): Promise<DuplicateResponse[]> => {
  const fields: string[] = ["name", "email"];

  const sortType = req.payload.sortType as SortType | undefined;

  const selectFields: Array<string | Knex.Raw> = [
    ...fields,
    forgeSQL.getKnex().raw("COUNT(*) as count"),
  ];
  let query;
  let selectQueryBuilder = forgeSQL
    .createQueryBuilder(UsersSchema)
    .select(selectFields as unknown as string[])
    .groupBy(fields)
    .having("COUNT(*) > 1");

  if (sortType?.name) {
    const currentSort =
      sortType.sortType === "ASC" ? QueryOrder.ASC_NULLS_FIRST : QueryOrder.DESC_NULLS_LAST;
    if (sortType?.name === "count") {
      const orderDirection = sortType.sortType === "ASC" ? "ASC" : "DESC";
      query = selectQueryBuilder.getKnexQuery().orderByRaw(`count ${orderDirection}`).toSQL().sql;
    } else {
      const orderBy: Record<string, QueryOrder> = {
        [sortType.name]: currentSort,
      };
      query = selectQueryBuilder.orderBy(orderBy).getFormattedQuery();
    }
  } else {
    query = selectQueryBuilder.getFormattedQuery();
  }

  const complexQuerySchema = forgeSQL.fetch().createComplexQuerySchema();
  complexQuerySchema.addField(UsersSchema.meta.properties.name)
  complexQuerySchema.addField(UsersSchema.meta.properties.email)
  complexQuerySchema.addField({name: 'count', type: "integer" })
  // select `u0`.`name`, COUNT(*) as count from `users` as `u0` group by `u0`.`name` having (COUNT(*) > 1)
  const duplicateResult = await forgeSQL
    .fetch()
    .executeSchemaSQL(query, complexQuerySchema.createSchema());

  return duplicateResult.map(
    (d): DuplicateResponse => ({
      count: getValueByAlias(d, 'count') as number,
      name: getValueBySchemaType(d, UsersSchema.meta.properties.name) as string,
      email: getValueBySchemaType(d, UsersSchema.meta.properties.email) as string,
    }),
  );
});

resolver.define("fetch", async (req): Promise<UserResponse[]> => {
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
    (r): UserResponse => ({
      id: r.id,
      name: r.name,
      email: r.email,
    }),
  );
});

export const handler = resolver.getDefinitions();

export const handlerMigration = async () => {
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
};

import Resolver from "@forge/resolver";
import ForgeSQL from "forge-sql-orm";
import { migrationRunner, sql } from "@forge/sql";
import migration from "./migration";
import { DuplicateResponse, UserResponse, SortType } from "./utils/Constants";
import { asc, desc, InferInsertModel, sql as rawSql } from "drizzle-orm";
import { users } from "./entities";
import { MySqlColumn } from "drizzle-orm/mysql-core/columns";

const resolver = new Resolver();
const forgeSQL = new ForgeSQL({ logRawSqlQuery: true });

resolver.define("create", async (req): Promise<number> => {
  const payload = req.payload.data as Partial<InferInsertModel<typeof users>>;
  return await forgeSQL.crud().insert(users, [payload]);
});

resolver.define("delete", async (req): Promise<number> => {
  const id = req.payload.id as number;
  return await forgeSQL.crud().deleteById(id, users);
});

resolver.define("duplicate", async (req): Promise<DuplicateResponse[]> => {
  const duplicateResult = await forgeSQL.fetch().executeQuery(
    forgeSQL
      .getDrizzleQueryBuilder()
      .select({
        name: users.name,
        email: users.email,
        count: rawSql`COUNT(*) as \`count\``,
      })
      .from(users)
      .groupBy(users.name, users.email)
      .having(rawSql`COUNT(*) > 1`),
  );

  return duplicateResult.map(
    (d): DuplicateResponse => ({
      count: d.count as number,
      name: d.name as string,
      email: d.email as string,
    }),
  );
});

resolver.define("fetch", async (req): Promise<UserResponse[]> => {
  const sortType = req.payload.sortType as SortType | undefined;
  const baseQuery = forgeSQL.getDrizzleQueryBuilder().select().from(users);

  // Apply sorting if specified
  const query = sortType?.name
    ? baseQuery.orderBy(
        sortType.sortType === "ASC"
          ? asc(users[sortType.name as keyof typeof users] as MySqlColumn)
          : desc(users[sortType.name as keyof typeof users] as MySqlColumn),
      )
    : baseQuery;

  const result = await forgeSQL.fetch().executeQuery(query);
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

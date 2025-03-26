import Resolver from "@forge/resolver";
import {forgeDriver} from "forge-sql-orm";
import {migrationRunner, sql} from "@forge/sql";
import migration from "./migration";
import {DuplicateResponse, SortType, UserResponse} from "./utils/Constants";
import {asc, desc, eq, InferInsertModel, sql as rawSql} from "drizzle-orm";
import {users} from "./entities";
import {MySqlColumn} from "drizzle-orm/mysql-core/columns";
import {drizzle} from "drizzle-orm/mysql2";

const resolver = new Resolver();

const db = drizzle(forgeDriver, {logger: true});

resolver.define("create", async (req): Promise<number> => {
  const payload = req.payload.data as Partial<InferInsertModel<typeof users>>;
    let result = await db.insert(users).values(payload);
    return result[0].insertId;
});

resolver.define("delete", async (req): Promise<number> => {
  const id = req.payload.id as number;
    const result = await db.delete(users).where(eq(users.id,id));
    return result[0].affectedRows;
});

resolver.define("duplicate", async (req): Promise<DuplicateResponse[]> => {
  const duplicateResult = await db
      .select({
        name: users.name,
        email: users.email,
        count: rawSql`COUNT(*) as \`count\``,
      })
      .from(users)
      .groupBy(users.name, users.email)
      .having(rawSql`COUNT(*) > 1`)

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
  const baseQuery = db.select().from(users);

  // Apply sorting if specified
  const query = sortType?.name
    ? baseQuery.orderBy(
        sortType.sortType === "ASC"
          ? asc(users[sortType.name as keyof typeof users] as MySqlColumn)
          : desc(users[sortType.name as keyof typeof users] as MySqlColumn),
      )
    : baseQuery;

  const result = await query;
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

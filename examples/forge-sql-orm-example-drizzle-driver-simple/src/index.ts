import Resolver from "@forge/resolver";
import {
  dropSchemaMigrations,
  applySchemaMigrations,
  fetchSchemaWebTrigger,
  forgeDriver,
} from "forge-sql-orm";
import migration from "./migration";
import { DuplicateResponse, SortType, UserResponse } from "./utils/Constants";
import { asc, desc, eq, InferInsertModel, sql as rawSql } from "drizzle-orm";
import { users } from "./entities";
import * as schema from "./entities/schema";
import { MySqlColumn } from "drizzle-orm/mysql-core/columns";
import { drizzle } from "drizzle-orm/mysql-proxy";

const resolver = new Resolver();

const db = drizzle(forgeDriver, { logger: true });

resolver.define("create", async (req): Promise<number> => {
  const payload = req.payload.data as Partial<InferInsertModel<typeof users>>;
  let result = await db.insert(users).values(payload);
  return result[0].insertId;
});

resolver.define("delete", async (req): Promise<number> => {
  const id = req.payload.id as number;
  const result = await db.delete(users).where(eq(users.id, id));
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
    .having(rawSql`COUNT(*) > 1`);

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
  return applySchemaMigrations(migration);
};

export const dropMigrations = () => {
  return dropSchemaMigrations(Object.values(schema));
};

export const fetchMigrations = () => {
  return fetchSchemaWebTrigger();
};

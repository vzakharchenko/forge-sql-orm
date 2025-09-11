import Resolver, { Request } from "@forge/resolver";
import ForgeSQL from "forge-sql-orm";
import {
  dropSchemaMigrations,
  applySchemaMigrations,
  fetchSchemaWebTrigger,
  clearCacheSchedulerTrigger,
} from "forge-sql-orm";
import migration from "./migration";
import { DuplicateResponse, SortType, UserResponse } from "./utils/Constants";
import { asc, desc, eq, getTableColumns, InferInsertModel, sql as rawSql } from "drizzle-orm";
import { users } from "./entities";
import { MySqlColumn } from "drizzle-orm/mysql-core/columns";
import { MySqlRawQueryResult } from "drizzle-orm/mysql-proxy";

const resolver = new Resolver();
const forgeSQL = new ForgeSQL({ logRawSqlQuery: true, cacheEntityName: "cache", cacheTTL: 120 });

resolver.define(
  "create",
  async (req: Request<{ data: Partial<InferInsertModel<typeof users>> }>): Promise<number> => {
    const payload = req.payload.data;
      const values = forgeSQL.insert(users).values([payload]);
      const newVar: MySqlRawQueryResult = await values;
      return newVar[0].insertId;
  },
);

resolver.define("delete", async (req: Request<{ id: number }>): Promise<number> => {
  const id = req.payload.id;
  const where = forgeSQL.getDrizzleQueryBuilder().delete(users).where(eq(users.id, id));
  return await forgeSQL.modifyWithVersioning().deleteById(id, users);
});

resolver.define("duplicate", async (req): Promise<DuplicateResponse[]> => {
  const duplicateResultQuery = forgeSQL
    .selectCacheable({
      name: users.name,
      email: users.email,
      count: rawSql`COUNT(*) as \`count\``,
    })
    .from(users)
    .groupBy(users.name, users.email)
    .having(rawSql`COUNT(*) > 1`);
  const duplicateResult = await duplicateResultQuery;
  return duplicateResult.map(
    (d): DuplicateResponse => ({
      count: d.count as number,
      name: d.name as string,
      email: d.email as string,
    }),
  );
});

resolver.define("fetch", async (req: Request<{ sortType?: SortType }>): Promise<UserResponse[]> => {
  const sortType = req.payload.sortType;
  const baseQuery = forgeSQL.selectCacheable(getTableColumns(users),30).from(users);
    // Apply sorting if specified
  const query = sortType?.name
    ? baseQuery.orderBy(
        sortType.sortType === "ASC"
          ? asc(users[sortType.name as keyof typeof users] as MySqlColumn)
          : desc(users[sortType.name as keyof typeof users] as MySqlColumn),
      )
    : baseQuery;
  // Run 300 cache reads, but make sure we await real promises (not functions).
  // Also throttle to avoid Forge proxy/token expiry and 25s timeout.
  // const BATCH_SIZE = 25;
  // for (let start = 0; start < 200; start += BATCH_SIZE) {
  //   const batch = [];
  //   for (let i = start; i < Math.min(start + BATCH_SIZE, 200); i++) {
  //     // Creating the promise starts the request immediately; we await per-batch.
  //     batch.push(
  //       forgeSQL
  //         .cache()
  //         .executeQuery(forgeSQL.select({ d: rawSql<number>`${i*10000000000}` }).from(users), 1)
  //     );
  //   }
  //   await Promise.all(batch);
  //}

  const result = await query;
  console.log("error: "+JSON.stringify(result))
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
  return dropSchemaMigrations();
};

export const fetchMigrations = () => {
  return fetchSchemaWebTrigger();
};

export const clearCache = () => {
  return clearCacheSchedulerTrigger({ cacheEntityName: "cache", logRawSqlQuery: true });
};

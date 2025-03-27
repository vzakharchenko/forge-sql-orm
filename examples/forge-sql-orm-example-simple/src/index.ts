import Resolver from "@forge/resolver";
import ForgeSQL from "forge-sql-orm";
import {dropSchemaMigrations, applySchemaMigrations} from "forge-sql-orm";
import migration from "./migration";
import {DuplicateResponse, SortType, UserResponse} from "./utils/Constants";
import {asc, desc, InferInsertModel, sql as rawSql} from "drizzle-orm";
import {users} from "./entities";
import {MySqlColumn} from "drizzle-orm/mysql-core/columns";
import * as schema from "./entities/schema";

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
  const duplicateResult = await forgeSQL
      .getDrizzleQueryBuilder()
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
  const baseQuery = forgeSQL.getDrizzleQueryBuilder().select().from(users);

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
    applySchemaMigrations(migration)
};

export const dropMigrations = () =>{
    return dropSchemaMigrations(Object.values(schema));
}

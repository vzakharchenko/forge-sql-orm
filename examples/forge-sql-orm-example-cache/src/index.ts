import Resolver, { Request } from "@forge/resolver";
import {
  dropSchemaMigrations,
  applySchemaMigrations,
  fetchSchemaWebTrigger,
  clearCacheSchedulerTrigger,
  topSlowestStatementLastHourTrigger,
} from "forge-sql-orm";
import migration from "./migration";
import { FORGE_SQL_ORM } from "./utils/forgeSqlOrmUtils";
import { demoOrders, demoUsers } from "./entities";
import { eq, or, and, sql } from "drizzle-orm";
import { NewUserOrder, UserOrderRow } from "./utils/Constants";

const SQL_CACHE_QUERY = FORGE_SQL_ORM.selectCacheable({
  userId: demoUsers.id,
  userName: demoUsers.name,
  product: demoOrders.product,
  productId: demoOrders.id,
  sleep: sql<number>`SLEEP(1)`,
})
  .from(demoUsers)
  .leftJoin(demoOrders, eq(demoOrders.userId, demoUsers.id));

const SQL_QUERY = FORGE_SQL_ORM.select({
  userId: demoUsers.id,
  userName: demoUsers.name,
  product: demoOrders.product,
  productId: demoOrders.id,
  sleep: sql<number>`SLEEP(1)`,
})
  .from(demoUsers)
  .innerJoin(demoOrders, eq(demoOrders.userId, demoUsers.id));

const resolver = new Resolver();

export const handler = resolver.getDefinitions();

resolver.define(
  "fetch",
  async (
    req: Request<{ cacheable: boolean }>,
  ): Promise<{ rows: UserOrderRow[]; times: number }> => {
    const label = "fetch " + req.payload.cacheable ? "cacheable" : "non-cacheable";
    console.time(label);
    const beginTime = new Date().getTime();
    try {
      const result = await (req.payload.cacheable ? SQL_CACHE_QUERY : SQL_QUERY);
      const diff = new Date().getTime() - beginTime;
      console.log(`${diff} msecs`);
      return { rows: result, times: diff };
    } catch (e) {
      const error = e?.cause?.debug?.sqlMessage ?? e?.cause;
      console.error(error, e);
      throw error;
    } finally {
      console.timeEnd(label);
    }
  },
);

resolver.define("clearCache", async (): Promise<void> => {
  FORGE_SQL_ORM.modifyWithVersioningAndEvictCache().evictCacheEntities([demoUsers, demoOrders]);
});
resolver.define("runPerformanceAnalyze", async () => {
  const response = await topSlowestStatementLastHourTrigger(FORGE_SQL_ORM, 500, 4 * 1024 * 1024);
  return JSON.parse(response.body);
});

resolver.define("insertUserOrOrder", async (req: Request<NewUserOrder>): Promise<void> => {
  await FORGE_SQL_ORM.executeWithCacheContext(async () => {
    let userId = req.payload.userId;

    // Search for existing user by ID (if provided) or by name
    let demoUserList;
    if (req.payload.userId) {
      demoUserList = await FORGE_SQL_ORM.selectCacheableFrom(demoUsers).where(
        or(eq(demoUsers.id, req.payload.userId), eq(demoUsers.name, req.payload.userName)),
      );
    } else {
      demoUserList = await FORGE_SQL_ORM.selectCacheableFrom(demoUsers).where(
        eq(demoUsers.name, req.payload.userName),
      );
    }

    if (!demoUserList.length) {
      // Create new user - let database auto-generate ID if not provided
      const userData: any = { name: req.payload.userName };
      if (req.payload.userId) {
        userData.id = req.payload.userId;
      }

      const result = await FORGE_SQL_ORM.insertAndEvictCache(demoUsers).values(userData);
      userId = result[0].insertId;
    } else if (userId && demoUserList.length && demoUserList[0].name !== req.payload.userName) {
      // Update existing user name if provided ID matches but name is different
      await FORGE_SQL_ORM.update(demoUsers)
        .set({ name: req.payload.userName })
        .where(eq(demoUsers.id, userId));
    } else if (!userId) {
      // Use existing user ID if no ID was provided
      userId = demoUserList[0].id;
    }

    if (!userId) {
      throw new Error("User Id is null");
    }

    // Search for existing order by ID (if provided) or by product name and user
    let demoOrderList;
    if (req.payload.productId) {
      demoOrderList = await FORGE_SQL_ORM.selectCacheableFrom(demoOrders).where(
        eq(demoOrders.id, req.payload.productId),
      );
    } else {
      demoOrderList = await FORGE_SQL_ORM.selectCacheableFrom(demoOrders).where(
        and(eq(demoOrders.userId, userId), eq(demoOrders.product, req.payload.product)),
      );
    }

    if (!demoOrderList.length) {
      // Create new order - let database auto-generate ID if not provided
      const orderData: any = {
        userId: userId,
        product: req.payload.product,
        createdAt: new Date(),
      };
      if (req.payload.productId) {
        orderData.id = req.payload.productId;
      }

      await FORGE_SQL_ORM.insert(demoOrders).values(orderData);
    } else {
      // Update existing order
      await FORGE_SQL_ORM.updateAndEvictCache(demoOrders)
        .set({ product: req.payload.product, userId })
        .where(eq(demoOrders.id, demoOrderList[0].id));
    }
  });
});

export const handlerMigration = async () => {
  const migrations = await applySchemaMigrations(migration);
  await SQL_QUERY;
  return migrations;
};

export const dropMigrations = () => {
  return dropSchemaMigrations();
};

export const fetchMigrations = () => {
  return fetchSchemaWebTrigger();
};
export const runPerformanceAnalyze = () => {
  return topSlowestStatementLastHourTrigger(FORGE_SQL_ORM, 300, 4 * 1024 * 1024);
};

export const clearCache = () => {
  return clearCacheSchedulerTrigger({ cacheEntityName: "cache", logRawSqlQuery: true });
};

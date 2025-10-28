import Resolver, { Request } from "@forge/resolver";
import {
  applySchemaMigrations,
  clearCacheSchedulerTrigger,
  dropSchemaMigrations,
  fetchSchemaWebTrigger,
  topSlowestStatementLastHourTrigger,
} from "forge-sql-orm";
import migration from "./migration";
import { FORGE_SQL_ORM } from "./utils/forgeSqlOrmUtils";
import { demoOrders, demoUsers } from "./entities";
import { and, eq, or, sql } from "drizzle-orm";
import { NewUserOrder, UserOrderRow } from "./utils/Constants";
import kvs from "@forge/kvs";

const SQL_CACHE_QUERY = FORGE_SQL_ORM.selectCacheable({
  userId: demoUsers.id,
  userName: demoUsers.name,
  product: demoOrders.product,
  productId: demoOrders.id,
  sleep: sql<number>`SLEEP(0.5)`,
})
  .from(demoUsers)
  .leftJoin(demoOrders, eq(demoOrders.userId, demoUsers.id));

const SQL_QUERY = FORGE_SQL_ORM.select({
  userId: demoUsers.id,
  userName: demoUsers.name,
  product: demoOrders.product,
  productId: demoOrders.id,
  sleep: sql<number>`SLEEP(0.5)`,
})
  .from(demoUsers)
  .innerJoin(demoOrders, eq(demoOrders.userId, demoUsers.id));

const SQL_QUERY_TIMEOUT = FORGE_SQL_ORM.select({
  userId: demoUsers.id,
  userName: demoUsers.name,
  product: demoOrders.product,
  productId: demoOrders.id,
  sleep: sql<number>`SLEEP(10)`,
})
  .from(demoUsers)
  .innerJoin(demoOrders, eq(demoOrders.userId, demoUsers.id));

const resolver = new Resolver();

export const handler = resolver.getDefinitions();

resolver.define(
  "fetch",
  async (
    req: Request<{ action: "cacheable" | "slow" | "outOfMemory" | "timeout" }>,
  ): Promise<{ rows: UserOrderRow[]; times: number }> => {
    console.log("fetch action = " + req.payload.action);
    const beginTime = new Date().getTime();
    try {
      let diff = 0;
      const result = await FORGE_SQL_ORM.executeWithMetadata(
        async () => {
          await FORGE_SQL_ORM.selectFrom(demoUsers);
          await FORGE_SQL_ORM.selectFrom(demoOrders);
          switch (req.payload.action) {
            case "slow": {
              return await SQL_QUERY;
            }
            case "cacheable": {
              return await SQL_CACHE_QUERY;
            }
            case "outOfMemory": {
              await FORGE_SQL_ORM.execute(
                "WITH big AS (\n" +
                  "  SELECT\n" +
                  "    UNCOMPRESS(\n" +
                  "      COMPRESS(\n" +
                  "        REPEAT('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 500000)\n" +
                  "      )\n" +
                  "    ) AS data\n" +
                  ")\n" +
                  "SELECT\n" +
                  "  LENGTH(data) AS len,\n" +
                  "  LENGTH(COMPRESS(data)) AS compressed_len,\n" +
                  "  LENGTH(UNCOMPRESS(COMPRESS(data))) AS uncompressed_len,\n" +
                  "  SHA2(data, 256) AS hash_value\n" +
                  "FROM big\n" +
                  "GROUP BY data;",
              );
              return [] as any;
            }
            case "timeout": {
              return await SQL_QUERY_TIMEOUT;
            }
            default: {
              throw new Error("unsupported " + req.payload.action);
            }
          }
        },
        async (totalDbExecutionTime, totalResponseSize, printQueries) => {
          diff = totalDbExecutionTime;
          if (totalDbExecutionTime > 800) {
            console.warn(
              `[Performance Warning testResolver] dbExecutionTime exceeded 150% of baseline: ${totalDbExecutionTime} ms`,
            );
            await printQueries();
          } else if (totalDbExecutionTime > 300) {
            console.debug(
              `[Performance Debug testResolver] High dbExecutionTime: ${totalDbExecutionTime} ms`,
            );
          }
        },
      );
      diff = diff || new Date().getTime() - beginTime;
      console.warn("REAL TIME:" + (new Date().getTime() - beginTime));
      return { rows: result, times: diff };
    } catch (e) {
      throw e?.cause ?? e;
    }
  },
);

resolver.define("clearCache", async (): Promise<void> => {
  await FORGE_SQL_ORM.modifyWithVersioningAndEvictCache().evictCacheEntities([
    demoUsers,
    demoOrders,
  ]);
});

resolver.define("runPerformanceAnalyze", async () => {
  const response = await runPerformanceAnalyze();
  return JSON.parse(response.body);
});

resolver.define("insertUserOrOrder", async (req: Request<NewUserOrder>): Promise<void> => {
  await FORGE_SQL_ORM.executeWithMetadata(
    async () =>
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
      }),
    async (totalDbExecutionTime, totalResponseTime, printQueries: () => Promise<void>) => {
      if (totalDbExecutionTime > 800) {
        console.warn(
          `Resolver "insertUserOrOrder" has high database execution time: ${totalDbExecutionTime}ms`,
        );
        await printQueries();
      } else if (totalDbExecutionTime > 200) {
        console.debug(
          `Resolver "insertUserOrOrder" has high database execution time: ${totalDbExecutionTime}ms`,
        );
      }
    },
  );
});

export const handlerMigration = async () => {
  return await applySchemaMigrations(migration);
};

export const dropMigrations = () => {
  return dropSchemaMigrations();
};

export const fetchMigrations = () => {
  return fetchSchemaWebTrigger();
};

export const runPerformanceAnalyze = async () => {
  return FORGE_SQL_ORM.executeWithMetadata(
    async () => {
      const topSlowestStatementLastHourTriggerDML = await topSlowestStatementLastHourTrigger(
        FORGE_SQL_ORM,
        {
          warnThresholdMs: 300,
          memoryThresholdBytes: 4 * 1024 * 1024,
          showPlan: true,
          operationType: "DML",
        },
      );
      return {
        headers: { "Content-Type": ["application/json"] },
        statusCode: topSlowestStatementLastHourTriggerDML.statusCode,
        statusText: "OK",
        body: JSON.stringify({
          DML: JSON.parse(topSlowestStatementLastHourTriggerDML.body),
          DDL: undefined,
        }),
      };
    },
    (totalDbExecutionTime: number) => {
      if (totalDbExecutionTime > 400) {
        console.warn(
          `RunPerformanceAnalyze has high database execution time: ${totalDbExecutionTime}ms`,
        );
      }
    },
  );
};

export const clearCache = () => {
  return clearCacheSchedulerTrigger({ cacheEntityName: "cache", logRawSqlQuery: true });
};

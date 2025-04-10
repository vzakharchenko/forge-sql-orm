import Resolver from "@forge/resolver";
import ForgeSQL from "forge-sql-orm";
import { dropSchemaMigrations, applySchemaMigrations, fetchSchemaWebTrigger } from "forge-sql-orm";
import migration from "./migration";
import { category, orderItem, product } from "./entities";
import { eq, InferSelectModel, sql } from "drizzle-orm";
import { ExplainAnalyzeRow } from "forge-sql-orm";
import { ClusterStatementRowCamelCase, SlowQueryNormalized } from "forge-sql-orm";

// Initialize ForgeSQL with query logging enabled
const resolver = new Resolver();
const forgeSQL = new ForgeSQL({ logRawSqlQuery: true });

// Define base query for category-product-order relationships
const drizzleQuery = forgeSQL
  .select({
    category: category,
    orderItem: orderItem,
    product: product,
  })
  .from(category)
  .leftJoin(product, eq(category.id, product.categoryId))
  .innerJoin(orderItem, eq(orderItem.productId, product.id));

// Define slow query with sleep function for demonstration
const drizzleSlowQuery = forgeSQL
  .select({
    slow: {
      sleep: sql<string>`sleep(1) as slowsql`,
    },
    category: category,
    orderItem: orderItem,
    product: product,
  })
  .from(category)
  .leftJoin(product, eq(category.id, product.categoryId))
  .innerJoin(orderItem, eq(orderItem.productId, product.id));

// Query Execution Handlers
resolver.define(
  "drizzleQuery",
  async (): Promise<
    {
      category: InferSelectModel<typeof category>;
      orderItem: InferSelectModel<typeof orderItem>;
      product: InferSelectModel<typeof product> | null;
    }[]
  > => {
    return await drizzleQuery;
  },
);

// Query Analysis Handlers
resolver.define("explain", async (): Promise<ExplainAnalyzeRow[]> => {
  return await forgeSQL.analyze().explain(drizzleQuery);
});

resolver.define("explainRaw", async (request): Promise<ExplainAnalyzeRow[]> => {
  const sql: string = request.payload?.sql;
  return await forgeSQL.analyze().explainRaw(sql, []);
});

resolver.define("explainAnalyze", async (): Promise<ExplainAnalyzeRow[]> => {
  return await forgeSQL.analyze().explainAnalyze(drizzleQuery);
});

resolver.define("explainAnalyseRaw", async (request): Promise<ExplainAnalyzeRow[]> => {
  const sql: string = request.payload?.sql;
  return await forgeSQL.analyze().explainAnalyzeRaw(sql, []);
});

// Slow Query Analysis Handlers
resolver.define("createSlowQuery", async (): Promise<void> => {
  await drizzleSlowQuery;
});

resolver.define("analyzeSlowQueries", async (): Promise<SlowQueryNormalized[]> => {
  return await forgeSQL.analyze().analyzeSlowQueries();
});

resolver.define("analyzeQueriesHistory", async (): Promise<ClusterStatementRowCamelCase[]> => {
  return await forgeSQL.analyze().analyzeQueriesHistory([category, orderItem, product]);
});

// Export resolver definitions
export const handler = resolver.getDefinitions();

// Migration Handlers
export const handlerMigration = async () => {
  try {
    return applySchemaMigrations(migration);
  } catch (e) {
    console.error(JSON.stringify(e));
    throw e;
  }
};

export const dropMigrations = () => {
  return dropSchemaMigrations();
};

export const fetchMigrations = () => {
  return fetchSchemaWebTrigger();
};

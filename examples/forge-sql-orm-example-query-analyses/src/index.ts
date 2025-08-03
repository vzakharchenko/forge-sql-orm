import Resolver from "@forge/resolver";
import { Queue } from "@forge/events";
import { v4 } from "uuid";
import ForgeSQL, { formatLimitOffset } from "forge-sql-orm";
import {
  dropSchemaMigrations,
  applySchemaMigrations,
  fetchSchemaWebTrigger,
  ExplainAnalyzeRow,
  ClusterStatementRowCamelCase,
  SlowQueryNormalized,
} from "forge-sql-orm";
import { sql as forgeSQLClient } from "@forge/sql";
import { asc, eq, InferInsertModel } from "drizzle-orm";
import migration from "./migration";
import { category, orderItem, product } from "./entities";

const queue = new Queue({ key: "insertQueue" });
const resolver = new Resolver();
const forgeSQL = new ForgeSQL({ logRawSqlQuery: false });

const db = forgeSQL.getDrizzleQueryBuilder();
const withQuery = db
  .$with("withQuery")
  .as(
    db
      .select()
      .from(orderItem)
      .orderBy(asc(orderItem.createdAt))
      .limit(formatLimitOffset(10))
      .offset(formatLimitOffset(350000)),
  );
const optimizedQueryWith = db
  .with(withQuery)
  .select({
    categoryName: category.name,
    orderItemQuantity: withQuery.quantity,
    productName: product.name,
  })
  .from(withQuery)
  .leftJoin(product, eq(withQuery.productId, product.id))
  .leftJoin(category, eq(category.id, product.categoryId));

const notOptimizedQuery = forgeSQL
  .select({
    categoryName: category.name,
    productName: product.name,
    orderItemQuantity: orderItem.quantity,
  })
  .from(orderItem)
  .leftJoin(product, eq(orderItem.productId, product.id))
  .leftJoin(category, eq(product.categoryId, category.id))
  .orderBy(asc(orderItem.createdAt))
  .limit(formatLimitOffset(10))
  .offset(formatLimitOffset(100000));

const optimizedQuery = forgeSQL
  .select({
    categoryName: category.name,
    productName: product.name,
    orderItemQuantity: orderItem.quantity,
  })
  .from(orderItem, {
    forceIndex: ["idx_order_id", "idx_order_item_product_id", "idx_order_item_created_name_qty"],
  })
  .leftJoin(product, eq(orderItem.productId, product.id))
  .leftJoin(category, eq(product.categoryId, category.id), {
    forceIndex: "idx_catalog_id",
  })
  .orderBy(asc(orderItem.createdAt))
  .limit(formatLimitOffset(10))
  .offset(formatLimitOffset(100000));

const drizzleSlowQuery = forgeSQL
  .select({
    category: category,
    orderItem: orderItem,
    product: product,
  })
  .from(category)
  .leftJoin(product, eq(category.name, product.categoryName))
  .innerJoin(orderItem, eq(orderItem.productName, product.name));

resolver.define("explain", async (): Promise<ExplainAnalyzeRow[]> => {
  try {
    console.log(notOptimizedQuery.toSQL().sql);
    return await forgeSQL.analyze().explain(notOptimizedQuery);
  } catch (e: any) {
    console.error(e);
    if (e?.context?.debug) {
      throw new Error(e.context.debug.message);
    }
    throw e;
  }
});

resolver.define("executeQuery", async (): Promise<void> => {
  try {
    console.log(notOptimizedQuery.toSQL().sql);
    const before = new Date().getTime();
    await notOptimizedQuery;
    const after = new Date().getTime();
    console.warn(`TIMEOUT: ${after - before}`);
  } catch (e: any) {
    console.error(e);
    if (e?.context?.debug) {
      throw new Error(e.context.debug.message);
    }
    throw e;
  }
});

resolver.define("explainAnalyze", async (): Promise<ExplainAnalyzeRow[]> => {
  const before = new Date().getTime();
  console.log(notOptimizedQuery.toSQL().sql);
  const result = await forgeSQL.analyze().explainAnalyze(notOptimizedQuery);
  const after = new Date().getTime();
  console.warn(`TIMEOUT: ${after - before}`);
  console.log(notOptimizedQuery.toSQL().sql);
  return result;
});

resolver.define("explainWith", async (): Promise<ExplainAnalyzeRow[]> => {
  try {
    console.log(optimizedQueryWith.toSQL().sql);
    return await forgeSQL.analyze().explain(optimizedQueryWith);
  } catch (e: any) {
    console.error(e);
    if (e?.context?.debug) {
      throw new Error(e.context.debug.message);
    }
    throw e;
  }
});

resolver.define("executeQueryWith", async (): Promise<void> => {
  try {
    const before = new Date().getTime();
    console.log(optimizedQueryWith.toSQL().sql);
    await optimizedQueryWith;
    const after = new Date().getTime();
    console.warn(`TIMEOUT: ${after - before}`);
  } catch (e: any) {
    console.error(e);
    if (e?.context?.debug) {
      throw new Error(e.context.debug.message);
    }
    throw e;
  }
});

resolver.define("explainAnalyzeWith", async (): Promise<ExplainAnalyzeRow[]> => {
  console.log(optimizedQueryWith.toSQL().sql);
  const before = new Date().getTime();
  const result = await forgeSQL.analyze().explainAnalyze(optimizedQueryWith);
  const after = new Date().getTime();
  console.warn(`TIMEOUT: ${after - before}`);
  console.log(optimizedQueryWith.toSQL().sql);
  return result;
});

resolver.define("executeOptimizedQuery", async (): Promise<void> => {
  try {
    console.log(optimizedQuery.toSQL().sql);
    const before = new Date().getTime();
    await optimizedQuery;
    const after = new Date().getTime();
    console.warn(`TIMEOUT: ${after - before}`);
  } catch (e: any) {
    console.error(e);
    if (e?.context?.debug) {
      throw new Error(e.context.debug.message);
    } else {
      throw e;
    }
  }
});
resolver.define("explainOptimizedAnalyze", async (): Promise<ExplainAnalyzeRow[]> => {
  try {
    console.log(optimizedQuery.toSQL().sql);
    const before = new Date().getTime();
    const result = await forgeSQL.analyze().explainAnalyze(optimizedQuery);
    const after = new Date().getTime();
    console.warn(`TIMEOUT: ${after - before}`);
    return result;
  } catch (e: any) {
    console.error(e);
    if (e?.context?.debug) {
      throw new Error(e.context.debug.message);
    } else {
      throw e;
    }
  }
});

resolver.define("explainOptimized", async (): Promise<ExplainAnalyzeRow[]> => {
  try {
    console.log(optimizedQuery.toSQL().sql);
    const before = new Date().getTime();
    const result = await forgeSQL.analyze().explain(optimizedQuery);
    const after = new Date().getTime();
    console.warn(`TIMEOUT: ${after - before}`);
    return result;
  } catch (e: any) {
    console.error(e);
    if (e?.context?.debug) {
      throw new Error(e.context.debug.message);
    } else {
      throw e;
    }
  }
});

resolver.define("dropStats", async (): Promise<void> => {
  await forgeSQL.fetch().executeRawSQL("DROP STATS category");
  await forgeSQL.fetch().executeRawSQL("DROP STATS product");
  await forgeSQL.fetch().executeRawSQL("DROP STATS order_item");
  await forgeSQL.fetch().executeRawSQL("DROP STATS order_item, product");
  await forgeSQL.fetch().executeRawSQL("DROP STATS product, category");
  console.log("DONE");
});

resolver.define("optimizeQuery", async (): Promise<void> => {
  await forgeSQLClient.executeDDL("CREATE INDEX IF NOT EXISTS idx_catalog_id ON category(id)");
  await forgeSQLClient.executeDDL("CREATE INDEX IF NOT EXISTS idx_order_id ON order_item(id)");
  await forgeSQLClient.executeDDL(
    "CREATE INDEX IF NOT EXISTS idx_order_item_product_id ON order_item(product_id)",
  );
  await forgeSQLClient.executeDDL(
    "CREATE INDEX IF NOT EXISTS idx_order_item_created_name_qty ON order_item (created_at ASC, product_id, quantity)",
  );
  console.log("DONE");
});

resolver.define("optimizeQueryCTE", async (): Promise<void> => {
  await forgeSQLClient.executeDDL(
    "CREATE INDEX IF NOT EXISTS idx_product_category_id ON product(category_id)",
  );
  await forgeSQLClient.executeDDL("CREATE INDEX IF NOT EXISTS idx_product_id ON product(id)");
  console.log("DONE");
});

resolver.define("deOptimizeQuery", async (): Promise<void> => {
  await forgeSQLClient.executeDDL("DROP INDEX IF EXISTS idx_product_category_id ON product");
  await forgeSQLClient.executeDDL("DROP INDEX IF EXISTS idx_catalog_id ON category");
  await forgeSQLClient.executeDDL("DROP INDEX IF EXISTS idx_product_id ON product");
  await forgeSQLClient.executeDDL("DROP INDEX IF EXISTS idx_order_id ON order_item");
  await forgeSQLClient.executeDDL("DROP INDEX IF EXISTS idx_order_item_product_id ON order_item");
  await forgeSQLClient.executeDDL(
    "DROP INDEX IF EXISTS idx_order_item_created_name_qty ON order_item",
  );

  await forgeSQLClient.executeDDL('DROP INDEX IF EXISTS "" ON category');
  await forgeSQLClient.executeDDL('DROP INDEX IF EXISTS "" ON product');
  await forgeSQLClient.executeDDL('DROP INDEX IF EXISTS "" ON order_item');
  console.log("DONE");
});

resolver.define("createSlowQuery", async (): Promise<void> => {
  await drizzleSlowQuery;
});

resolver.define("analyzeSlowQueries", async (): Promise<SlowQueryNormalized[]> => {
  return await forgeSQL.analyze().analyzeSlowQueries();
});

resolver.define("analyzeQueriesHistory", async (): Promise<ClusterStatementRowCamelCase[]> => {
  return await forgeSQL.analyze().analyzeQueriesHistory([category, orderItem, product]);
});

export const handlerMigration = async () => {
  try {
    const applySchemaMigrations1 = await applySchemaMigrations(migration);
    await queue.push({body:{ insert: true },delayInSeconds: 10});
    return applySchemaMigrations1;
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

export const insertFunction = async () => {
  const categories: InferInsertModel<typeof category>[] = [];
  const orderItems: InferInsertModel<typeof orderItem>[] = [];
  const products: InferInsertModel<typeof product>[] = [];
  const categoryCount = 1100;
  const productCount = 200000;
  const orderCount = 400000;

  // Generate categories
  for (let i = 0; i < categoryCount; i++) {
    categories.push({
      id: v4(),
      name: `category${i}`,
      createdAt: getRandomDate(
        new Date("1999-02-12T01:57:45.271Z"),
        new Date("2025-04-12T01:57:45.271Z"),
      ),
    });
  }

  // Generate products with random category references
  for (let i = 0; i < productCount; i++) {
    const { name, id } = categories[Math.floor(Math.random() * categories.length)];
    products.push({
      id: v4(),
      categoryName: name,
      categoryId: id,
      name: `product${i}`,
      createdAt: getRandomDate(
        new Date("1999-02-12T01:57:45.271Z"),
        new Date("2025-04-12T01:57:45.271Z"),
      ),
    });
  }

  // Generate order items with random product references
  for (let i = 0; i < orderCount; i++) {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    orderItems.push({
      id: v4(),
      productName: randomProduct.name,
      productId: randomProduct.id,
      quantity: i,
      createdAt: getRandomDate(
        new Date("1999-02-12T01:57:45.271Z"),
        new Date("2025-04-12T01:57:45.271Z"),
      ),
    });
  }

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const BATCH_COUNT = 30;
  // Insert categories in chunks

  const categoriesInChunks = chunkIntoN(categories, BATCH_COUNT);
  let i = 0;
  for (const chunk of categoriesInChunks) {
    i = i + 1;
    await forgeSQL.crud().insert(category, chunk);
    console.log("category batch " + i + " from " + categoriesInChunks.length + ": DONE");
  }
  await delay(5000);
  i = 0;
  // Insert products in chunks
  const productsInChunks = chunkIntoN(products, BATCH_COUNT + 20);
  for (const chunk of productsInChunks) {
    i = i + 1;
    await forgeSQL.crud().insert(product, chunk);
    console.log("product batch " + i + " from " + productsInChunks.length + ": DONE");
  }
  await delay(5000);
  i = 0;
  // Insert order items in chunks
  const orderItemsInChunks = chunkIntoN(orderItems, BATCH_COUNT + BATCH_COUNT);
  for (const chunk of orderItemsInChunks) {
    i = i + 1;
    await forgeSQL.crud().insert(orderItem, chunk);
    console.log("order batch " + i + " from " + orderItemsInChunks.length + ": DONE");
  }
  console.log(
    `DATABASE INITIALIZED with orderItems=${orderItems.length}, products=${products.length}, catalogs=${categories.length}`,
  );
};

export const handler = resolver.getDefinitions();

function getRandomDate(from: Date, to: Date): Date {
  const fromTime = from.getTime();
  const toTime = to.getTime();
  return new Date(fromTime + Math.random() * (toTime - fromTime));
}

const chunkIntoN = <T>(arr: T[], n: number): T[][] => {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (_, i) => arr.slice(i * size, i * size + size));
};

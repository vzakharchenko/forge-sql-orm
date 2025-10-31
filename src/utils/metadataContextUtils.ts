import { AsyncLocalStorage } from "node:async_hooks";
import { ForgeSQLMetadata } from "./forgeDriver";
import { ForgeSqlOperation } from "../core/ForgeSQLQueryBuilder";
import { printQueriesWithPlan } from "./sqlUtils";

export type MetadataQueryContext = {
  totalDbExecutionTime: number;
  totalResponseSize: number;
  beginTime: Date;
  printQueriesWithPlan: () => Promise<void>;
  forgeSQLORM: ForgeSqlOperation;
};
export const metadataQueryContext = new AsyncLocalStorage<MetadataQueryContext>();

export async function saveMetaDataToContext(metadata?: ForgeSQLMetadata): Promise<void> {
  const context = metadataQueryContext.getStore();
  if (context) {
    context.printQueriesWithPlan = async () => {
      if (process.env.NODE_ENV !== "test") {
        await new Promise((r) => setTimeout(r, 200));
      }
      await printQueriesWithPlan(context.forgeSQLORM, Date.now() - context.beginTime.getTime());
    };
    if (metadata) {
      context.totalResponseSize += metadata.responseSize;
      context.totalDbExecutionTime += metadata.dbExecutionTime;
    }
    // Log the results to console
  }
}

export async function getLastestMetadata(): Promise<MetadataQueryContext | undefined> {
  return metadataQueryContext.getStore();
}

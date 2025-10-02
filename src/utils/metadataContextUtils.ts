import { AsyncLocalStorage } from "node:async_hooks";
import {ForgeSQLMetadata} from "./forgeDriver";

export type MetadataQueryContext = {
    totalDbExecutionTime: number,
    totalResponseSize: number,
    lastMetadata?: ForgeSQLMetadata;
}
export const metadataQueryContext = new AsyncLocalStorage<MetadataQueryContext>();

export async function saveMetaDataToContext(
  metadata: ForgeSQLMetadata,
): Promise<void> {
  const context = metadataQueryContext.getStore();
  if (context && metadata) {
      context.totalResponseSize += metadata.responseSize
      context.totalDbExecutionTime += metadata.dbExecutionTime
      context.lastMetadata = metadata;
  }
}

export async function getLastestMetadata():Promise<MetadataQueryContext|undefined> {
    return metadataQueryContext.getStore();
}

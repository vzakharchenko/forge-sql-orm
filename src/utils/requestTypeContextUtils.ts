import { AsyncLocalStorage } from "node:async_hooks";
import { ForgeSQLMetadata } from "./forgeDriver";
type OperationType = "DML" | "DDL";

export type OperationTypeQueryContext = {
  operationType: OperationType;
};
export const operationTypeQueryContext = new AsyncLocalStorage<OperationTypeQueryContext>();

export async function saveOperationTypeInContextContext(
  operationType: OperationType,
): Promise<void> {
  const context = operationTypeQueryContext.getStore();
  if (context) {
    context.operationType = operationType;
  }
}

export async function getOperationType(): Promise<OperationType> {
  return operationTypeQueryContext.getStore()?.operationType ?? "DML";
}

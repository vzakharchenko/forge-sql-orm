import { sql, UpdateQueryResponse } from "@forge/sql";
import { saveMetaDataToContext } from "./metadataContextUtils";
import { getOperationType } from "./requestTypeContextUtils";

/**
 * Metadata structure for Forge SQL query results.
 * Contains execution timing, response size, and field information.
 */
export type ForgeSQLMetadata = {
  dbExecutionTime: number;
  responseSize: number;
  fields: {
    catalog: string;
    name: string;
    schema: string;
    characterSet: number;
    decimals: number;
    table: string;
    orgTable: string;
    orgName: string;
    flags: number;
    columnType: number;
    columnLength: number;
  }[];
};

/**
 * Result structure for Forge SQL queries.
 * Contains rows data and execution metadata.
 */
export interface ForgeSQLResult {
  rows: Record<string, unknown>[] | Record<string, unknown>;
  metadata: ForgeSQLMetadata;
}

/**
 * Driver result structure for Drizzle ORM compatibility.
 */
export interface ForgeDriverResult {
  rows: unknown[];
  insertId?: number;
  affectedRows?: number;
}

/**
 * Query execution method types.
 */
export type QueryMethod = "all" | "execute";

/**
 * Type guard to check if an object is an UpdateQueryResponse.
 *
 * @param obj - The object to check
 * @returns True if the object is an UpdateQueryResponse
 */
export function isUpdateQueryResponse(obj: unknown): obj is UpdateQueryResponse {
  return (
    obj !== null &&
    typeof obj === "object" &&
    typeof (obj as any).affectedRows === "number" &&
    typeof (obj as any).insertId === "number"
  );
}

/**
 * Executes a promise with a timeout.
 *
 * @param promise - The promise to execute
 * @param timeoutMs - Timeout in milliseconds (default: 10000ms)
 * @returns Promise that resolves with the result or rejects on timeout
 * @throws {Error} When the operation times out
 */
async function withTimeout<T>(promise: Promise<T>, timeoutMs: number = 10000): Promise<T> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(
        new Error(
          `Atlassian @forge/sql did not return a response within ${timeoutMs}ms (${timeoutMs / 1000} seconds), so the request is blocked. Possible causes: slow query, network issues, or exceeding Forge SQL limits.`,
        ),
      );
    }, timeoutMs);
  });

  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
}

function inlineParams(sql: string, params: unknown[]): string {
  let i = 0;
  return sql.replace(/\?/g, () => {
    const val = params[i++];
    if (val === null) return "NULL";
    if (typeof val === "number") return val.toString();
    return `'${String(val).replace(/'/g, "''")}'`;
  });
}

/**
 * Processes DDL query results and saves metadata.
 *
 * @param result - The DDL query result
 * @returns Processed result for Drizzle ORM
 */
async function processDDLResult(method: QueryMethod, result: any): Promise<ForgeDriverResult> {
  if (result.metadata) {
    await saveMetaDataToContext(result.metadata as ForgeSQLMetadata);
  }

  if (!result?.rows) {
    return { rows: [] };
  }

  if (isUpdateQueryResponse(result.rows)) {
    const oneRow = result.rows as any;
    return { ...oneRow, rows: [oneRow] };
  }

  if (Array.isArray(result.rows)) {
    if (method === "execute") {
      return { rows: [result.rows] };
    } else {
      const rows = (result.rows as any[]).map((r) => Object.values(r as Record<string, unknown>));
      return { rows };
    }
  }

  return { rows: [] };
}

/**
 * Processes execute method results (UPDATE, INSERT, DELETE).
 *
 * @param query - The SQL query
 * @param params - Query parameters
 * @returns Processed result for Drizzle ORM
 */
async function processExecuteMethod(query: string, params: unknown[]): Promise<ForgeDriverResult> {
  const sqlStatement = sql.prepare<UpdateQueryResponse>(query);

  if (params) {
    sqlStatement.bindParams(...params);
  }

  const result = await withTimeout(sqlStatement.execute());
  await saveMetaDataToContext(result.metadata as ForgeSQLMetadata);
  if (!result.rows) {
    return { rows: [[]] };
  }

  return { rows: [result.rows] };
}

/**
 * Processes all method results (SELECT queries).
 *
 * @param query - The SQL query
 * @param params - Query parameters
 * @returns Processed result for Drizzle ORM
 */
async function processAllMethod(query: string, params: unknown[]): Promise<ForgeDriverResult> {
  const sqlStatement = await sql.prepare<unknown>(query);

  if (params) {
    await sqlStatement.bindParams(...params);
  }

  const result = (await withTimeout(sqlStatement.execute())) as ForgeSQLResult;
  await saveMetaDataToContext(result.metadata);

  if (!result.rows) {
    return { rows: [] };
  }

  const rows = (result.rows as any[]).map((r) => Object.values(r as Record<string, unknown>));

  return { rows };
}

/**
 * Main Forge SQL driver function for Drizzle ORM integration.
 * Handles DDL operations, execute operations (UPDATE/INSERT/DELETE), and select operations.
 *
 * @param query - The SQL query to execute
 * @param params - Query parameters
 * @param method - Execution method ("all" for SELECT, "execute" for UPDATE/INSERT/DELETE)
 * @returns Promise with query results compatible with Drizzle ORM
 *
 * @throws {Error} When DDL operations are called with parameters
 *
 * @example
 * ```typescript
 * // DDL operation
 * await forgeDriver("CREATE TABLE users (id INT)", [], "all");
 *
 * // SELECT operation
 * await forgeDriver("SELECT * FROM users WHERE id = ?", [1], "all");
 *
 * // UPDATE operation
 * await forgeDriver("UPDATE users SET name = ? WHERE id = ?", ["John", 1], "execute");
 * ```
 */
export const forgeDriver = async (
  query: string,
  params: unknown[],
  method: QueryMethod,
): Promise<ForgeDriverResult> => {
  const operationType = await getOperationType();
  // Handle DDL operations
  if (operationType === "DDL") {
    const result = await withTimeout(sql.executeDDL(inlineParams(query, params)));
    return await processDDLResult(method, result);
  }

  // Handle execute method (UPDATE, INSERT, DELETE)
  if (method === "execute") {
    return await processExecuteMethod(query, params ?? []);
  }

  // Handle all method (SELECT)
  return await processAllMethod(query, params ?? []);
};

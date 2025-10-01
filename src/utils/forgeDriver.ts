import { sql, UpdateQueryResponse } from "@forge/sql";
import { saveMetaDataInContextContext } from "./metadataContextUtils";
import { getOperationType } from "./requestTypeContextUtils";

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

export interface ForgeSQLResult {
  rows: Record<string, unknown>[] | Record<string, unknown>;
  metadata: ForgeSQLMetadata;
}

export function isUpdateQueryResponse(obj: any): obj is UpdateQueryResponse {
  return (
    obj !== null &&
    typeof obj === "object" &&
    typeof obj.affectedRows === "number" &&
    typeof obj.fieldCount === "number" &&
    typeof obj.info === "string" &&
    typeof obj.insertId === "number" &&
    typeof obj.serverStatus === "number" &&
    typeof obj.warningStatus === "number"
  );
}

export const forgeDriver = async (
  query: string,
  params: any[],
  method: "all" | "execute",
): Promise<{
  rows: any[];
  insertId?: number;
  affectedRows?: number;
}> => {
  const operationType = await getOperationType();
  if (operationType === "DDL") {
    if (params && params.length > 0) {
      throw new Error(
        "Query parameters are not supported for DDL operations. Execute DDL statements without parameters (don’t use DML helpers for DDL)",
      );
    }
    const result = await sql.executeDDL(query);
    if (result.metadata) {
      await saveMetaDataInContextContext(result.metadata as ForgeSQLMetadata);
    }
    if (!result.rows) {
      return { rows: [] };
    }
    if (isUpdateQueryResponse(result.rows)) {
      return { rows: [result.rows as any] };
    } else if (Array.isArray(result.rows)) {
      const rows = (result.rows as any[]).map((r) => Object.values(r as Record<string, unknown>));
      return { rows };
    }
  }

  if (method == "execute") {
    const sqlStatement = sql.prepare<UpdateQueryResponse>(query);
    if (params) {
      sqlStatement.bindParams(...params);
    }
    const updateQueryResponseResults = await sqlStatement.execute();
    await saveMetaDataInContextContext(updateQueryResponseResults.metadata as ForgeSQLMetadata);
    let result = updateQueryResponseResults.rows as any;
    return { ...result, rows: [result] };
  } else {
    const sqlStatement = await sql.prepare<unknown>(query);
    if (params) {
      await sqlStatement.bindParams(...params);
    }
    const result = (await sqlStatement.execute()) as ForgeSQLResult;
    await saveMetaDataInContextContext(result.metadata);
    if (!result.rows) {
      return { rows: [] };
    }
    let rows;
    rows = (result.rows as any[]).map((r) => Object.values(r as Record<string, unknown>));
    return { rows: rows };
  }
};

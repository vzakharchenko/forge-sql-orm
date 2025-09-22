import { sql, UpdateQueryResponse } from "@forge/sql";
import { saveMetaDataInContextContext } from "./metadataContextUtils";

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

export const forgeDriver = async (
  query: string,
  params: any[],
  method: "all" | "execute",
): Promise<{
  rows: any[];
  insertId?: number;
  affectedRows?: number;
}> => {
  if (method == "execute") {
    const sqlStatement = sql.prepare<UpdateQueryResponse>(query);
    if (params) {
      sqlStatement.bindParams(...params);
    }
    const updateQueryResponseResults = await sqlStatement.execute();
    let result = updateQueryResponseResults.rows as any;
    return { ...result, rows: [result] };
  } else {
    const sqlStatement = await sql.prepare<unknown>(query);
    if (params) {
      await sqlStatement.bindParams(...params);
    }
    const result = (await sqlStatement.execute()) as ForgeSQLResult;
    await saveMetaDataInContextContext(result.metadata);
    let rows;
    rows = (result.rows as any[]).map((r) => Object.values(r as Record<string, unknown>));
    return { rows: rows };
  }
};

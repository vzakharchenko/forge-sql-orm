import { sql, UpdateQueryResponse } from "@forge/sql";

interface ForgeSQLResult {
  rows: Record<string, unknown>[] | Record<string, unknown>;
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
  try {
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
      let rows;
      rows = (result.rows as any[]).map((r) => Object.values(r as Record<string, unknown>));
      return { rows: rows };
    }
  } catch (error) {
    console.error("SQL Error:", JSON.stringify(error));
    throw error;
  }
};

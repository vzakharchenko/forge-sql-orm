import { sql } from "@forge/sql";
import {AnyMySql2Connection} from "drizzle-orm/mysql2/driver";

interface ForgeSQLResult {
    rows: Record<string, unknown>[] | Record<string, unknown>;
}

export const forgeDriver = {
    query: async (query: { sql: string }, params?: unknown[]) => {
        try {
            const sqlStatement = await sql.prepare<unknown>(query.sql);
            if (params) {
                await sqlStatement.bindParams(...params);
            }
            const result = await sqlStatement.execute() as ForgeSQLResult;

            let rows;
            if (Array.isArray(result.rows)) {
                rows = [
                    result.rows.map(r => Object.values(r as Record<string, unknown>))
                ];
            } else {
                rows = [
                    result.rows as Record<string, unknown>
                ];
            }

            return rows;
        } catch (error) {
            console.error("SQL Error:", JSON.stringify(error));
            throw error;
        }
    },
    transaction: async (transactionFn: (tx: any) => Promise<void>) => {
        // Implementation will be added later
    },
} as unknown as AnyMySql2Connection;
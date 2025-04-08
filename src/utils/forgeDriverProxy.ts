import { forgeDriver } from "./forgeDriver";
import { injectSqlHints, SqlHints } from "./sqlHints";

/**
 * Creates a proxy for the forgeDriver that injects SQL hints
 * @returns A proxied version of the forgeDriver
 */
export function createForgeDriverProxy(options?: SqlHints, logRawSqlQuery?: boolean) {
  return async (
    query: string,
    params: any[],
    method: "all" | "execute",
  ): Promise<{
    rows: any[];
    insertId?: number;
    affectedRows?: number;
  }> => {
    // Inject SQL hints into the query
    const modifiedQuery = injectSqlHints(query, options);

    if (options && logRawSqlQuery) {
      console.warn("modified query: " + modifiedQuery);
    }
    // Call the original forgeDriver with the modified query
    return forgeDriver(modifiedQuery, params, method);
  };
}

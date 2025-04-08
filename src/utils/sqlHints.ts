/**
 * Interface for SQL hints configuration
 */
export interface SqlHints {
  /** SQL hints for SELECT queries */
  select?: string[];
  /** SQL hints for INSERT queries */
  insert?: string[];
  /** SQL hints for UPDATE queries */
  update?: string[];
  /** SQL hints for DELETE queries */
  delete?: string[];
}

/**
 * Detects the type of SQL query and injects appropriate hints
 * @param query - The SQL query to analyze
 * @param hints - The hints configuration
 * @returns The modified query with injected hints
 */
export function injectSqlHints(query: string, hints?: SqlHints): string {
  if (!hints) {
    return query;
  }

  // Normalize the query for easier matching
  const normalizedQuery = query.trim().toUpperCase();

  // Get the appropriate hints based on query type
  let queryHints: string[] | undefined;

  if (normalizedQuery.startsWith("SELECT")) {
    queryHints = hints.select;
  } else if (normalizedQuery.startsWith("INSERT")) {
    queryHints = hints.insert;
  } else if (normalizedQuery.startsWith("UPDATE")) {
    queryHints = hints.update;
  } else if (normalizedQuery.startsWith("DELETE")) {
    queryHints = hints.delete;
  }

  // If no hints for this query type, return original query
  if (!queryHints || queryHints.length === 0) {
    return query;
  }

  // Join all hints with spaces
  const hintsString = queryHints.join(" ");

  // Inject hints into the query
  if (normalizedQuery.startsWith("SELECT")) {
    return `SELECT /*+ ${hintsString} */ ${query.substring(6)}`;
  } else if (normalizedQuery.startsWith("INSERT")) {
    return `INSERT /*+ ${hintsString} */ ${query.substring(6)}`;
  } else if (normalizedQuery.startsWith("UPDATE")) {
    return `UPDATE /*+ ${hintsString} */ ${query.substring(6)}`;
  } else if (normalizedQuery.startsWith("DELETE")) {
    return `DELETE /*+ ${hintsString} */ ${query.substring(6)}`;
  }

  // If no match found, return original query
  return query;
}

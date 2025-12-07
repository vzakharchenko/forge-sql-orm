import { Parser } from "node-sql-parser";
import { ForgeSqlOrmOptions } from "../core/ForgeSQLQueryBuilder";

/**
 * Extracts table name from table node.
 *
 * @param node - AST node with table information
 * @returns Table name in lowercase or null if not applicable
 */
function extractTableName(node: any): string | null {
  if (!node) {
    return null;
  }

  // Skip column_ref nodes without table - these are column references/aliases, not table names
  if (node.type === "column_ref" && !node.table) {
    return null;
  }

  // Skip nodes that are explicitly aliases (have 'as' property but are not table nodes)
  if (node.as && node.type !== "table" && node.type !== "dual") {
    // This might be an alias, but if it has a table property, extract from table
    if (!node.table) {
      return null;
    }
  }

  // Helper function to safely convert to string and lowercase
  const normalizeTableName = (value: any, context?: string): string | null => {
    if (!value) {
      return null;
    }
    // If it's already a string, use it
    if (typeof value === "string") {
      return value !== "dual" ? value.toLowerCase() : null;
    }
    // If it's an object, try to extract name from various properties
    if (typeof value === "object") {
      // Handle backticks_quote_string type only for node.table context
      // (e.g., { type: "backticks_quote_string", value: "table_name" })
      if (
        context &&
        context.includes("node.table") &&
        value.type === "backticks_quote_string" &&
        value.value &&
        typeof value.value === "string"
      ) {
        return value.value !== "dual" ? value.value.toLowerCase() : null;
      }
      // Try value.name first (most common)
      if (value.name && typeof value.name === "string") {
        return value.name !== "dual" ? value.name.toLowerCase() : null;
      }
      // Try value.table if it's a nested structure
      if (value.table) {
        const nestedName = normalizeTableName(value.table, context);
        if (nestedName) {
          return nestedName;
        }
      }
      // If it's an array, skip it (not a table name)
      if (Array.isArray(value)) {
        return null;
      }
      // Log when we encounter an object that we can't extract table name from
      // eslint-disable-next-line no-console
      console.warn(
        `[cacheTableUtils] Unable to extract table name from object:`,
        JSON.stringify(value, null, 2),
        context ? `(context: ${context})` : "",
      );
      return null;
    }
    // For other types (number, boolean, etc.), log and don't treat as table name
    // eslint-disable-next-line no-console
    console.warn(
      `[cacheTableUtils] Unexpected table name type:`,
      typeof value,
      value,
      context ? `(context: ${context})` : "",
    );
    return null;
  };

  // Handle table node directly
  if (node.type === "table" || node.type === "dual") {
    if (node.table) {
      const tableName = normalizeTableName(node.table, `node.type=${node.type}, node.table`);
      if (tableName) {
        return tableName;
      }
    }
    // Sometimes table name is directly in the node
    if (node.name) {
      const tableName = normalizeTableName(node.name, `node.type=${node.type}, node.name`);
      if (tableName) {
        return tableName;
      }
    }
  }

  // Handle table reference in different formats
  // Skip column_ref nodes without table - these are column aliases, not table names
  if (node.type === "column_ref" && !node.table) {
    return null;
  }

  if (node.table) {
    const tableName = normalizeTableName(node.table, `node.table (type: ${node.type})`);
    if (tableName) {
      return tableName;
    }
  }

  // Skip nodes that are likely aliases - have only name without table structure
  // and the name is very short (typical alias pattern: u, us, o, oi)
  if (node.name && !node.table && node.type !== "table" && node.type !== "dual") {
    const nameStr = typeof node.name === "string" ? node.name : node.name?.name || node.name?.value;
    if (nameStr && typeof nameStr === "string" && nameStr.length <= 2) {
      return null;
    }
  }

  return null;
}

/**
 * Recursively extracts table names from SQL AST node.
 * Handles regular tables, CTEs, subqueries, and complex query structures.
 *
 * @param node - AST node to extract tables from
 * @param tables - Accumulator set for table names
 */
function extractTablesFromNode(node: any, tables: Set<string>): void {
  if (!node || typeof node !== "object") {
    return;
  }

  // Extract table name if node is a table type
  // Filter out a_ prefixed names (these are field aliases, not table names)
  const tableName = extractTableName(node);
  if (tableName) {
    if (typeof tableName === "string" && tableName.length > 0) {
      // Filter out a_ prefixed names (field aliases)
      if (tableName.startsWith("a_")) {
        return;
      }

      // Filter out short names that are likely table aliases (u, us, o, oi, etc.)
      // Only filter if it's not a real table node (type === "table" or "dual")
      const isRealTableNode = node.type === "table" || node.type === "dual";
      if (!isRealTableNode && tableName.length <= 2) {
        return;
      }

      tables.add(tableName);
    } else {
      // Log when extractTableName returns something unexpected
      // eslint-disable-next-line no-console
      console.warn(
        `[cacheTableUtils] extractTableName returned non-string value:`,
        typeof tableName,
        tableName,
        `(node type: ${node.type})`,
      );
    }
  }

  // Handle CTE (Common Table Expressions) - WITH clause
  if (node.with || node.with_list) {
    const withClauses = node.with_list || (Array.isArray(node.with) ? node.with : [node.with]);
    withClauses.forEach((cte: any) => {
      if (cte && cte.stmt) {
        // CTE definition contains a statement (subquery)
        extractTablesFromNode(cte.stmt, tables);
      }
      if (cte && cte.as && cte.as.stmt) {
        // Alternative CTE structure
        extractTablesFromNode(cte.as.stmt, tables);
      }
    });
  }

  // Extract tables from FROM clause (including subqueries)
  if (node.from) {
    if (Array.isArray(node.from)) {
      node.from.forEach((item: any) => extractTablesFromNode(item, tables));
    } else {
      extractTablesFromNode(node.from, tables);
    }
  }

  // Extract tables from JOIN clause
  if (node.join) {
    if (Array.isArray(node.join)) {
      node.join.forEach((item: any) => extractTablesFromNode(item, tables));
    } else {
      extractTablesFromNode(node.join, tables);
    }
  }

  // Handle subqueries explicitly
  if (node.type === "subquery" || node.type === "select") {
    // Process the subquery's AST
    if (node.ast) {
      extractTablesFromNode(node.ast, tables);
    }
    // Also process the subquery itself
    if (node.from) {
      extractTablesFromNode(node.from, tables);
    }
  }

  // Extract tables from WHERE clause (may contain subqueries)
  if (node.where) {
    extractTablesFromNode(node.where, tables);
  }

  // Extract tables from SELECT columns (may contain subqueries)
  // Subqueries in SELECT can appear as: col.expr, col.ast, or col itself being a subquery
  if (node.columns || node.select) {
    const columns = node.columns || node.select;
    if (Array.isArray(columns)) {
      columns.forEach((col: any) => {
        if (!col) return;

        // If the column itself is a subquery
        if (col.type === "subquery" || col.type === "select") {
          extractTablesFromNode(col, tables);
        }

        // Process expression (may contain subqueries)
        if (col.expr) {
          extractTablesFromNode(col.expr, tables);
        }

        // Process AST (alternative structure for subqueries)
        if (col.ast) {
          extractTablesFromNode(col.ast, tables);
        }

        // Also process any nested expressions or function calls that might contain subqueries
        // The recursive processing at the end will handle any remaining nested structures
      });
    } else if (columns && typeof columns === "object") {
      // Handle single column case
      extractTablesFromNode(columns, tables);
    }
  }

  // Extract tables from HAVING clause (may contain subqueries)
  if (node.having) {
    extractTablesFromNode(node.having, tables);
  }

  // Extract tables from ORDER BY clause (may contain subqueries)
  if (node.orderby || node.order_by) {
    const orderBy = node.orderby || node.order_by;
    if (Array.isArray(orderBy)) {
      orderBy.forEach((item: any) => {
        if (item && item.expr) {
          extractTablesFromNode(item.expr, tables);
        }
        extractTablesFromNode(item, tables);
      });
    } else {
      extractTablesFromNode(orderBy, tables);
    }
  }

  // Extract tables from GROUP BY clause (may contain subqueries)
  if (node.groupby || node.group_by) {
    const groupBy = node.groupby || node.group_by;
    if (Array.isArray(groupBy)) {
      groupBy.forEach((item: any) => {
        if (item && item.expr) {
          extractTablesFromNode(item.expr, tables);
        }
        extractTablesFromNode(item, tables);
      });
    } else {
      extractTablesFromNode(groupBy, tables);
    }
  }

  // Extract tables from UPDATE statement
  if (node.type === "update" && node.table) {
    extractTablesFromNode(node.table, tables);
  }

  // Extract tables from INSERT statement
  if (node.type === "insert" && node.table) {
    extractTablesFromNode(node.table, tables);
  }

  // Extract tables from DELETE statement
  if (node.type === "delete" && node.from) {
    extractTablesFromNode(node.from, tables);
  }

  // Extract tables from UNION/UNION ALL/UNION DISTINCT/INTERSECT/EXCEPT/MINUS clauses
  // UNION structure in node-sql-parser:
  // - First SELECT is the main node (processed via FROM, JOIN, etc. above)
  // - Subsequent SELECTs are in union array (processed here)
  // - Operations can be: union, union_all, union_distinct, intersect, except, minus
  if (node.union) {
    // Handle array of union nodes
    if (Array.isArray(node.union)) {
      node.union.forEach((unionNode: any) => {
        // Each union node can be a SELECT statement or have a select property
        if (unionNode) {
          // Process different union operation types
          if (
            unionNode.type === "select" ||
            unionNode.type === "union" ||
            unionNode.type === "union_all" ||
            unionNode.type === "union_distinct" ||
            unionNode.type === "intersect" ||
            unionNode.type === "except" ||
            unionNode.type === "minus"
          ) {
            extractTablesFromNode(unionNode, tables);
          } else if (unionNode.select) {
            extractTablesFromNode(unionNode.select, tables);
          } else if (unionNode.ast) {
            extractTablesFromNode(unionNode.ast, tables);
          } else {
            // Process the entire union node recursively
            extractTablesFromNode(unionNode, tables);
          }
        }
      });
    } else if (node.union && typeof node.union === "object") {
      // Single union node
      if (
        node.union.type === "select" ||
        node.union.type === "union" ||
        node.union.type === "union_all" ||
        node.union.type === "union_distinct" ||
        node.union.type === "intersect" ||
        node.union.type === "except" ||
        node.union.type === "minus"
      ) {
        extractTablesFromNode(node.union, tables);
      } else if (node.union.select) {
        extractTablesFromNode(node.union.select, tables);
      } else if (node.union.ast) {
        extractTablesFromNode(node.union.ast, tables);
      } else {
        extractTablesFromNode(node.union, tables);
      }
    }
  }

  // Handle node types for UNION/INTERSECT/EXCEPT operations
  // Sometimes the node itself can be a union/intersect/except operation
  if (
    node.type === "union" ||
    node.type === "union_all" ||
    node.type === "union_distinct" ||
    node.type === "intersect" ||
    node.type === "except" ||
    node.type === "minus"
  ) {
    // Process left and right sides of the operation
    if (node.left) {
      extractTablesFromNode(node.left, tables);
    }
    if (node.right) {
      extractTablesFromNode(node.right, tables);
    }
    // Also process the entire node recursively
    extractTablesFromNode(node, tables);
  }

  // Handle _next property (alternative UNION structure)
  if (node._next) {
    if (Array.isArray(node._next)) {
      node._next.forEach((nextNode: any) => {
        extractTablesFromNode(nextNode, tables);
      });
    } else {
      extractTablesFromNode(node._next, tables);
    }
  }

  // Recursively process all object properties (for any remaining subqueries and complex structures)
  // This ensures we catch any nested structures we might have missed
  // Note: AST structures typically don't have circular references, so this is safe
  // Skip processing if this node is likely an alias (column_ref without table, or very short name without table structure)
  const isLikelyAlias =
    (node.type === "column_ref" && !node.table) ||
    (node.name &&
      !node.table &&
      node.type !== "table" &&
      node.type !== "dual" &&
      node.name.length <= 2);

  if (!isLikelyAlias && typeof node === "object" && !Array.isArray(node)) {
    Object.values(node).forEach((value) => {
      if (value && typeof value === "object") {
        if (Array.isArray(value)) {
          value.forEach((item: any) => {
            if (item && typeof item === "object") {
              extractTablesFromNode(item, tables);
            }
          });
        } else {
          extractTablesFromNode(value, tables);
        }
      }
    });
  }
}

/**
 * Extracts all table names from SQL query using node-sql-parser, with regex fallback.
 * Returns them as comma-separated string in format `table1`,`table2`.
 *
 * @param sql - SQL query string
 * @param options - ForgeSQL ORM options for logging
 * @returns Comma-separated string of unique table names in backticks
 */
export function extractBacktickedValues(sql: string, options: ForgeSqlOrmOptions): string {
  // Try to use node-sql-parser first
  try {
    const parser = new Parser();
    const ast = parser.astify(sql.trim());

    const tables = new Set<string>();

    // Handle both single statement and multiple statements
    const statements = Array.isArray(ast) ? ast : [ast];
    statements.forEach((statement) => {
      extractTablesFromNode(statement, tables);
    });

    if (tables.size > 0) {
      // Sort to ensure consistent order for the same input
      const backtickedValues = Array.from(tables)
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base", numeric: true }))
        .map((table) => `\`${table}\``)
        .join(",");
      if (options.logCache) {
        // eslint-disable-next-line no-console
        console.warn(`Extracted backticked values: ${backtickedValues}`);
      }
      return backtickedValues;
    }
  } catch (error) {
    if (options.logCache) {
      // eslint-disable-next-line no-console
      console.error(
        `Error extracting backticked values: ${error}. Using regex-based extraction instead.`,
      );
    }
    // If parsing fails, fall back to regex-based extraction
    // This handles cases where node-sql-parser doesn't support the SQL syntax
  }

  // Fallback to regex-based extraction (original logic)
  const regex = /`([^`]+)`/g;
  const matches = new Set<string>();
  let match;

  while ((match = regex.exec(sql.toLowerCase())) !== null) {
    if (!match[1].startsWith("a_")) {
      matches.add(`\`${match[1]}\``);
    }
  }

  // Sort to ensure consistent order for the same input
  return Array.from(matches)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base", numeric: true }))
    .join(",");
}

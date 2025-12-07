import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { extractBacktickedValues } from "../../../src/utils/cacheTableUtils";
import { ForgeSqlOrmOptions } from "../../../src/core/ForgeSQLQueryBuilder";

describe("cacheTableUtils", () => {
  const defaultOptions: ForgeSqlOrmOptions = {
    logCache: false,
  };

  const optionsWithLogging: ForgeSqlOrmOptions = {
    logCache: true,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("extractBacktickedValues", () => {
    describe("Simple SELECT queries", () => {
      it("should extract table name from simple SELECT", () => {
        const sql = "SELECT * FROM users";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`users`");
      });

      it("should extract table name with backticks", () => {
        const sql = "SELECT * FROM `users`";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`users`");
      });

      it("should extract multiple tables from JOIN", () => {
        const sql = "SELECT * FROM users JOIN orders ON users.id = orders.user_id";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`orders`");
        expect(result).toContain("`users`");
        // Should be sorted
        expect(result).toBe("`orders`,`users`");
      });

      it("should extract tables from INNER JOIN", () => {
        const sql = "SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`orders`,`users`");
      });

      it("should extract tables from LEFT JOIN", () => {
        const sql = "SELECT * FROM users LEFT JOIN orders ON users.id = orders.user_id";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`orders`,`users`");
      });

      it("should extract tables from RIGHT JOIN", () => {
        const sql = "SELECT * FROM users RIGHT JOIN orders ON users.id = orders.user_id";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`orders`,`users`");
      });

      it("should extract tables from multiple JOINs", () => {
        const sql =
          "SELECT * FROM users JOIN orders ON users.id = orders.user_id JOIN products ON orders.product_id = products.id";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`orders`");
        expect(result).toContain("`products`");
        expect(result).toContain("`users`");
        expect(result).toBe("`orders`,`products`,`users`");
      });
    });

    describe("Subqueries", () => {
      it("should extract tables from subquery in WHERE", () => {
        const sql = "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders)";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`orders`");
        expect(result).toContain("`users`");
        expect(result).toBe("`orders`,`users`");
      });

      it("should extract tables from subquery in SELECT", () => {
        const sql =
          "SELECT id, (SELECT COUNT(*) FROM orders WHERE user_id = users.id) as order_count FROM users";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`orders`");
        expect(result).toContain("`users`");
        expect(result).toBe("`orders`,`users`");
      });

      it("should extract tables from subquery in FROM", () => {
        const sql = "SELECT * FROM (SELECT * FROM users) AS u";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`users`");
      });

      it("should extract tables from nested subqueries", () => {
        const sql =
          "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE product_id IN (SELECT id FROM products))";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`orders`");
        expect(result).toContain("`products`");
        expect(result).toContain("`users`");
        expect(result).toBe("`orders`,`products`,`users`");
      });

      it("should extract tables from subquery in HAVING", () => {
        const sql =
          "SELECT user_id, COUNT(*) FROM orders GROUP BY user_id HAVING COUNT(*) > (SELECT AVG(cnt) FROM (SELECT COUNT(*) as cnt FROM orders GROUP BY user_id) t)";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`orders`");
        expect(result).toBe("`orders`");
      });
    });

    describe("CTE (WITH clauses)", () => {
      it("should extract tables from CTE", () => {
        const sql =
          "WITH user_stats AS (SELECT user_id, COUNT(*) as cnt FROM orders GROUP BY user_id) SELECT * FROM user_stats";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`orders`");
        // Note: CTE name (user_stats) may also be extracted as it's used in FROM clause
        expect(result).toContain("`user_stats`");
        expect(result).toBe("`orders`,`user_stats`");
      });

      it("should extract tables from multiple CTEs", () => {
        const sql =
          "WITH user_stats AS (SELECT user_id, COUNT(*) FROM orders GROUP BY user_id), product_stats AS (SELECT product_id, COUNT(*) FROM order_items GROUP BY product_id) SELECT * FROM user_stats";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`order_items`");
        expect(result).toContain("`orders`");
        expect(result).toContain("`user_stats`");
        // Note: CTE names may also be extracted
        expect(result).toBe("`order_items`,`orders`,`user_stats`");
      });

      it("should extract tables from CTE with JOIN", () => {
        const sql =
          "WITH user_stats AS (SELECT user_id FROM orders) SELECT u.*, us.* FROM users u JOIN user_stats us ON u.id = us.user_id";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`orders`");
        expect(result).toContain("`users`");
        expect(result).toContain("`user_stats`");
        // Note: Table aliases (u, us) are filtered out, only real tables and CTE names are extracted
        expect(result).toBe("`orders`,`user_stats`,`users`");
      });
    });

    describe("UNION operations", () => {
      it("should extract tables from UNION", () => {
        const sql = "SELECT * FROM users UNION SELECT * FROM orders";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`orders`");
        expect(result).toContain("`users`");
        expect(result).toBe("`orders`,`users`");
      });

      it("should extract tables from UNION ALL", () => {
        const sql = "SELECT * FROM users UNION ALL SELECT * FROM orders";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`orders`");
        expect(result).toContain("`users`");
        expect(result).toBe("`orders`,`users`");
      });

      it("should extract tables from multiple UNIONs", () => {
        const sql = "SELECT * FROM users UNION SELECT * FROM orders UNION SELECT * FROM products";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`orders`");
        expect(result).toContain("`products`");
        expect(result).toContain("`users`");
        expect(result).toBe("`orders`,`products`,`users`");
      });

      it("should extract tables from UNION with WHERE", () => {
        const sql =
          "SELECT * FROM users WHERE status = 'active' UNION SELECT * FROM orders WHERE status = 'pending'";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`orders`");
        expect(result).toContain("`users`");
        expect(result).toBe("`orders`,`users`");
      });
    });

    describe("UPDATE, INSERT, DELETE", () => {
      it("should extract table from UPDATE", () => {
        const sql = "UPDATE users SET name = 'John' WHERE id = 1";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`users`");
      });

      it("should extract table from INSERT", () => {
        const sql = "INSERT INTO users (name, email) VALUES ('John', 'john@example.com')";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`users`");
      });

      it("should extract table from DELETE", () => {
        const sql = "DELETE FROM users WHERE id = 1";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`users`");
      });

      it("should extract table from UPDATE with JOIN", () => {
        const sql = "UPDATE users u JOIN orders o ON u.id = o.user_id SET u.status = 'active'";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`orders`");
        expect(result).toContain("`users`");
        // Note: Table aliases (u, o) are filtered out, only real tables are extracted
        expect(result).toBe("`orders`,`users`");
      });
    });

    describe("Complex queries", () => {
      it("should extract tables from query with GROUP BY and HAVING", () => {
        const sql = "SELECT user_id, COUNT(*) FROM orders GROUP BY user_id HAVING COUNT(*) > 10";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`orders`");
      });

      it("should extract tables from query with ORDER BY", () => {
        const sql = "SELECT * FROM users ORDER BY name";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`users`");
      });

      it("should handle case-insensitive table names", () => {
        const sql = "SELECT * FROM Users";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`users`");
      });

      it("should extract unique tables only", () => {
        const sql =
          "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE user_id IN (SELECT id FROM users))";
        const result = extractBacktickedValues(sql, defaultOptions);
        // Should not have duplicates
        const tables = result.split(",");
        const uniqueTables = new Set(tables);
        expect(uniqueTables.size).toBe(tables.length);
        expect(result).toBe("`orders`,`users`");
      });
    });

    describe("Fallback to regex", () => {
      it("should fallback to regex when parser fails", () => {
        // Invalid SQL that parser can't handle
        const sql = "INVALID SQL SYNTAX `table1` `table2`";
        const result = extractBacktickedValues(sql, defaultOptions);
        // Should still extract from backticks
        expect(result).toContain("`table1`");
        expect(result).toContain("`table2`");
        expect(result).toBe("`table1`,`table2`");
      });

      it("should filter a_ prefixes in fallback mode", () => {
        const sql = "INVALID SQL `a_table1` `table2` `a_field`";
        const result = extractBacktickedValues(sql, defaultOptions);
        // Should not include a_ prefixed values
        expect(result).not.toContain("`a_table1`");
        expect(result).not.toContain("`a_field`");
        expect(result).toContain("`table2`");
        expect(result).toBe("`table2`");
      });

      it("should handle empty SQL in fallback", () => {
        const sql = "";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("");
      });
    });

    describe("Edge cases", () => {
      it("should handle empty result when no tables found", () => {
        const sql = "SELECT 1";
        const result = extractBacktickedValues(sql, defaultOptions);
        // Should return empty string when no tables found
        expect(result).toBe("");
      });

      it("should handle SQL with only backticks but no valid table names", () => {
        const sql = "SELECT `a_field1`, `a_field2` FROM `users`";
        const result = extractBacktickedValues(sql, defaultOptions);
        // Should extract users table, but not a_ prefixed fields
        expect(result).toBe("`users`");
      });

      it("should sort tables alphabetically", () => {
        const sql = "SELECT * FROM zebra JOIN alpha JOIN beta";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`alpha`,`beta`,`zebra`");
      });

      it("should handle numeric table names", () => {
        const sql = "SELECT * FROM `table123`";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`table123`");
      });

      it("should handle table names with underscores", () => {
        const sql = "SELECT * FROM `user_orders`";
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toBe("`user_orders`");
      });
    });

    describe("Logging", () => {
      it("should log when logCache is enabled", () => {
        const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
        const sql = "SELECT * FROM users";
        extractBacktickedValues(sql, optionsWithLogging);
        expect(consoleSpy).toHaveBeenCalledWith(
          expect.stringContaining("Extracted backticked values"),
        );
        consoleSpy.mockRestore();
      });

      it("should not log when logCache is disabled", () => {
        const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
        const sql = "SELECT * FROM users";
        extractBacktickedValues(sql, defaultOptions);
        expect(consoleSpy).not.toHaveBeenCalled();
        consoleSpy.mockRestore();
      });

      it("should log errors when parser fails and logCache is enabled", () => {
        const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
        const sql = "INVALID SQL SYNTAX";
        extractBacktickedValues(sql, optionsWithLogging);
        expect(consoleErrorSpy).toHaveBeenCalledWith(
          expect.stringContaining("Error extracting backticked values"),
        );
        consoleErrorSpy.mockRestore();
      });
    });

    describe("Real-world scenarios", () => {
      it("should handle complex e-commerce query", () => {
        const sql = `
          WITH user_stats AS (
            SELECT user_id, COUNT(*) as order_count
            FROM orders
            GROUP BY user_id
          )
          SELECT 
            u.id,
            u.name,
            us.order_count,
            (SELECT COUNT(*) FROM order_items oi WHERE oi.order_id IN (SELECT id FROM orders WHERE user_id = u.id)) as item_count
          FROM users u
          JOIN user_stats us ON u.id = us.user_id
          WHERE u.status = 'active'
        `;
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`orders`");
        expect(result).toContain("`order_items`");
        expect(result).toContain("`users`");
        expect(result).toContain("`user_stats`");
        // Note: Table aliases (u, us, oi) are filtered out, only real tables and CTE names are extracted
        expect(result).toBe("`order_items`,`orders`,`user_stats`,`users`");
      });

      it("should handle query with multiple CTEs and UNION", () => {
        const sql = `
          WITH active_users AS (SELECT * FROM users WHERE status = 'active'),
               inactive_users AS (SELECT * FROM users WHERE status = 'inactive')
          SELECT * FROM active_users
          UNION
          SELECT * FROM inactive_users
        `;
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`users`");
        expect(result).toContain("`active_users`");
        expect(result).toContain("`inactive_users`");
        // Note: CTE names (active_users, inactive_users) may also be extracted
        expect(result).toBe("`active_users`,`inactive_users`,`users`");
      });

      it("should handle query with subquery in multiple places", () => {
        const sql = `
          SELECT 
            id,
            (SELECT name FROM products WHERE id = order_items.product_id) as product_name,
            quantity
          FROM order_items
          WHERE order_id IN (SELECT id FROM orders WHERE user_id = 1)
        `;
        const result = extractBacktickedValues(sql, defaultOptions);
        expect(result).toContain("`order_items`");
        expect(result).toContain("`orders`");
        expect(result).toContain("`products`");
        expect(result).toBe("`order_items`,`orders`,`products`");
      });
    });
  });
});

import { describe, it, expect } from "vitest";
import { injectSqlHints, SqlHints } from "../../../src/utils/sqlHints";

describe("SQL Hints", () => {
  describe("injectSqlHints", () => {
    it("should return original query when no hints provided", () => {
      const query = "SELECT * FROM users";
      const result = injectSqlHints(query);
      expect(result).toBe(query);
    });

    it("should inject SELECT hints correctly", () => {
      const query = "SELECT * FROM users";
      const hints: SqlHints = {
        select: ["MEMORY_QUOTA(1 GB)", "MAX_EXECUTION_TIME(1000)"],
      };
      const expected = "SELECT /*+ MEMORY_QUOTA(1 GB) MAX_EXECUTION_TIME(1000) */  * FROM users";
      expect(injectSqlHints(query, hints)).toBe(expected);
    });

    it("should inject INSERT hints correctly", () => {
      const query = 'INSERT INTO users (name) VALUES ("John")';
      const hints: SqlHints = {
        insert: ["IGNORE_DUP_KEY"],
      };
      const expected = 'INSERT /*+ IGNORE_DUP_KEY */  INTO users (name) VALUES ("John")';
      expect(injectSqlHints(query, hints)).toBe(expected);
    });

    it("should inject UPDATE hints correctly", () => {
      const query = 'UPDATE users SET name = "John"';
      const hints: SqlHints = {
        update: ["MAX_EXECUTION_TIME(500)"],
      };
      const expected = 'UPDATE /*+ MAX_EXECUTION_TIME(500) */  users SET name = "John"';
      expect(injectSqlHints(query, hints)).toBe(expected);
    });

    it("should inject DELETE hints correctly", () => {
      const query = "DELETE FROM users";
      const hints: SqlHints = {
        delete: ["MAX_EXECUTION_TIME(200)"],
      };
      const expected = "DELETE /*+ MAX_EXECUTION_TIME(200) */  FROM users";
      expect(injectSqlHints(query, hints)).toBe(expected);
    });

    it("should handle case-insensitive query detection", () => {
      const query = "select * from users";
      const hints: SqlHints = {
        select: ["MEMORY_QUOTA(1 GB)"],
      };
      const expected = "SELECT /*+ MEMORY_QUOTA(1 GB) */  * from users";
      expect(injectSqlHints(query, hints)).toBe(expected);
    });

    it("should handle multiple hints for different query types", () => {
      const hints: SqlHints = {
        select: ["MEMORY_QUOTA(1 GB)"],
        insert: ["IGNORE_DUP_KEY"],
        update: ["MAX_EXECUTION_TIME(500)"],
        delete: ["MAX_EXECUTION_TIME(200)"],
      };

      const selectQuery = "SELECT * FROM users";
      const insertQuery = 'INSERT INTO users (name) VALUES ("John")';
      const updateQuery = 'UPDATE users SET name = "John"';
      const deleteQuery = "DELETE FROM users";

      expect(injectSqlHints(selectQuery, hints)).toBe(
        "SELECT /*+ MEMORY_QUOTA(1 GB) */  * FROM users",
      );
      expect(injectSqlHints(insertQuery, hints)).toBe(
        'INSERT /*+ IGNORE_DUP_KEY */  INTO users (name) VALUES ("John")',
      );
      expect(injectSqlHints(updateQuery, hints)).toBe(
        'UPDATE /*+ MAX_EXECUTION_TIME(500) */  users SET name = "John"',
      );
      expect(injectSqlHints(deleteQuery, hints)).toBe(
        "DELETE /*+ MAX_EXECUTION_TIME(200) */  FROM users",
      );
    });

    it("should handle empty hints array", () => {
      const query = "SELECT * FROM users";
      const hints: SqlHints = {
        select: [],
      };
      expect(injectSqlHints(query, hints)).toBe(query);
    });

    it("should return original query for unsupported query type", () => {
      const query = "CREATE TABLE users (id INT)";
      const hints: SqlHints = {
        select: ["MEMORY_QUOTA(1 GB)"],
      };
      expect(injectSqlHints(query, hints)).toBe(query);
    });
  });
});

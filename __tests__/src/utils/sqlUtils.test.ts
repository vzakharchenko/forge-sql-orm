import { describe, expect, it, vi } from "vitest";
import {
  formatLimitOffset,
  generateDropTableStatements,
  nextVal,
  parseDateTime,
  formatDateTime,
  withTimeout,
  withTidbHint,
} from "../../../src/utils/sqlUtils";
import { DateTime } from "luxon";
import { int, mysqlTable } from "drizzle-orm/mysql-core";

// Test suite for transformValue function
describe("transformValue", () => {
  // Test suite for parseDateTime function
  describe("parseDateTime", () => {
    it("should correctly parse a datetime string", () => {
      const dateString = "2024-03-03T12:34:56.789";
      const format = "yyyy-LL-dd'T'HH:mm:ss.SSS";
      const parsedDate = parseDateTime(dateString, format);
      expect(DateTime.fromJSDate(parsedDate).toFormat(format)).toBe(dateString);
    });

    it("should correctly parse a date string", () => {
      const dateString = "2024-03-03";
      const format = "yyyy-LL-dd";
      const parsedDate = parseDateTime(dateString, format);
      expect(DateTime.fromJSDate(parsedDate).toFormat(format)).toBe(dateString);
    });

    it("should handle Date object input", () => {
      const date = new Date("2024-03-03T12:34:56.789");
      const format = "yyyy-LL-dd'T'HH:mm:ss.SSS";
      const parsedDate = parseDateTime(date, format);
      expect(parsedDate).toBeInstanceOf(Date);
      expect(parsedDate.getTime()).toBe(date.getTime());
    });

    it("should fallback to SQL format parsing", () => {
      const dateString = "2024-03-03 12:34:56";
      const format = "yyyy-LL-dd HH:mm:ss";
      const parsedDate = parseDateTime(dateString, format);
      expect(parsedDate).toBeInstanceOf(Date);
      expect(DateTime.fromJSDate(parsedDate).isValid).toBe(true);
    });

    it("should fallback to RFC2822 format parsing", () => {
      const dateString = "Mon, 03 Mar 2024 12:34:56 GMT";
      const format = "yyyy-LL-dd";
      const parsedDate = parseDateTime(dateString, format);
      expect(parsedDate).toBeInstanceOf(Date);
      expect(DateTime.fromJSDate(parsedDate).isValid).toBe(true);
    });

    it("should handle invalid date with fallback", () => {
      const dateString = "invalid-date";
      const format = "yyyy-LL-dd";
      const parsedDate = parseDateTime(dateString, format);
      expect(parsedDate).toBeInstanceOf(Date);
    });
  });

  describe("formatLimitOffset", () => {
    it("should return a valid SQL raw number for valid input", () => {
      const result = formatLimitOffset(10);
      expect(result).toBeDefined();
      expect(JSON.stringify(result)).toBe(
        JSON.stringify({
          decoder: {},
          shouldInlineParams: false,
          usedTables: [],
          queryChunks: [{ value: ["10"] }],
        }),
      );
    });

    it("should throw error for NaN input", () => {
      expect(() => formatLimitOffset(NaN)).toThrow("limitOrOffset must be a valid number");
    });

    it("should throw error for non-number input", () => {
      // @ts-expect-error Testing invalid input type
      expect(() => formatLimitOffset("10")).toThrow("limitOrOffset must be a valid number");
    });

    it("should handle zero value", () => {
      const result = formatLimitOffset(0);
      expect(result).toBeDefined();
      expect(JSON.stringify(result)).toBe(
        JSON.stringify({
          decoder: {},
          shouldInlineParams: false,
          usedTables: [],
          queryChunks: [{ value: ["0"] }],
        }),
      );
    });

    it("should handle negative values", () => {
      const result = formatLimitOffset(-5);
      expect(result).toBeDefined();
      expect(JSON.stringify(result)).toBe(
        JSON.stringify({
          decoder: {},
          shouldInlineParams: false,
          usedTables: [],
          queryChunks: [{ value: ["-5"] }],
        }),
      );
    });
  });

  describe("nextVal", () => {
    it("should return a valid SQL template literal for sequence", () => {
      const result = nextVal("test_sequence");
      expect(result).toBeDefined();
      expect(JSON.stringify(result)).toBe(
        JSON.stringify({
          decoder: {},
          shouldInlineParams: false,
          usedTables: [],
          queryChunks: [{ value: ["NEXTVAL(test_sequence)"] }],
        }),
      );
    });

    it("should handle sequence names with special characters", () => {
      const result = nextVal("test-sequence_123");
      expect(result).toBeDefined();
      expect(JSON.stringify(result)).toBe(
        JSON.stringify({
          decoder: {},
          shouldInlineParams: false,
          usedTables: [],
          queryChunks: [{ value: ["NEXTVAL(test-sequence_123)"] }],
        }),
      );
    });

    it("should handle empty sequence name", () => {
      const result = nextVal("");
      expect(result).toBeDefined();
      expect(JSON.stringify(result)).toBe(
        JSON.stringify({
          decoder: {},
          shouldInlineParams: false,
          usedTables: [],
          queryChunks: [{ value: ["NEXTVAL()"] }],
        }),
      );
    });
  });

  describe("generateDropTableStatements", () => {
    it("should generate correct DROP TABLE statements for single table", () => {
      const tables = ["users"];
      const expected = ["DROP TABLE IF EXISTS `users`;", "DROP SEQUENCE IF EXISTS `users`;"];
      expect(generateDropTableStatements(tables)).toEqual(expected);
    });

    it("should generate correct DROP TABLE statements for multiple tables", () => {
      const tables = ["users", "orders", "products"];
      const expected = [
        "DROP TABLE IF EXISTS `users`;",
        "DROP SEQUENCE IF EXISTS `users`;",
        "DROP TABLE IF EXISTS `orders`;",
        "DROP SEQUENCE IF EXISTS `orders`;",
        "DROP TABLE IF EXISTS `products`;",
        "DROP SEQUENCE IF EXISTS `products`;",
      ];
      expect(generateDropTableStatements(tables)).toEqual(expected);
    });

    it("should handle table names with special characters", () => {
      const tables = ["user-profiles", "order_items"];
      const expected = [
        "DROP TABLE IF EXISTS `user-profiles`;",
        "DROP SEQUENCE IF EXISTS `user-profiles`;",
        "DROP TABLE IF EXISTS `order_items`;",
        "DROP SEQUENCE IF EXISTS `order_items`;",
      ];
      expect(generateDropTableStatements(tables)).toEqual(expected);
    });

    it("should return empty array for empty input", () => {
      expect(generateDropTableStatements([])).toEqual([]);
    });

    it("should generate only table drop statements when sequence option is false", () => {
      const tables = ["users"];
      const expected = ["DROP TABLE IF EXISTS `users`;"];
      expect(generateDropTableStatements(tables, { sequence: false, table: true })).toEqual(
        expected,
      );
    });

    it("should generate only sequence drop statements when table option is false", () => {
      const tables = ["users"];
      const expected = ["DROP SEQUENCE IF EXISTS `users`;"];
      expect(generateDropTableStatements(tables, { sequence: true, table: false })).toEqual(
        expected,
      );
    });

    it("should return empty array when both options are false", () => {
      const tables = ["users"];
      expect(generateDropTableStatements(tables, { sequence: false, table: false })).toEqual([]);
    });
  });

  describe("formatDateTime", () => {
    it("should format Date object correctly", () => {
      const date = new Date("2024-03-03T12:34:56.789");
      const result = formatDateTime(date, "yyyy-LL-dd'T'HH:mm:ss.SSS", false);
      expect(result).toBe("2024-03-03T12:34:56.789");
    });

    it("should format ISO string correctly", () => {
      const dateString = "2024-03-03T12:34:56.789Z";
      const result = formatDateTime(dateString, "yyyy-LL-dd'T'HH:mm:ss.SSS", false);
      // Result may differ based on timezone, so just check it's a valid formatted date
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}$/);
      expect(result).toContain("2024-03-03");
    });

    it("should format SQL string correctly", () => {
      const dateString = "2024-03-03 12:34:56";
      const result = formatDateTime(dateString, "yyyy-LL-dd HH:mm:ss", false);
      expect(result).toBe("2024-03-03 12:34:56");
    });

    it("should format number timestamp correctly", () => {
      const timestamp = new Date("2024-03-03T12:34:56.789").getTime();
      const result = formatDateTime(timestamp, "yyyy-LL-dd", false);
      expect(result).toBe("2024-03-03");
    });

    it("should validate timestamp range for timestamps", () => {
      const minDate = new Date("1970-01-01T00:00:01.000Z");
      const result = formatDateTime(minDate, "yyyy-LL-dd", true);
      expect(result).toBe("1970-01-01");
    });

    it("should throw error for timestamp before 1970-01-01 00:00:01", () => {
      const date = new Date("1970-01-01T00:00:00.000Z");
      expect(() => formatDateTime(date, "yyyy-LL-dd", true)).toThrow(
        "Atlassian Forge does not support zero or negative timestamps",
      );
    });

    it("should throw error for timestamp after 2038-01-19 03:14:07.999", () => {
      const date = new Date("2038-01-19T03:14:08.000Z");
      expect(() => formatDateTime(date, "yyyy-LL-dd", true)).toThrow(
        "Atlassian Forge does not support timestamps beyond 2038-01-19",
      );
    });

    it("should throw error for invalid date string", () => {
      expect(() => formatDateTime("invalid-date", "yyyy-LL-dd", false)).toThrow("Invalid Date");
    });

    it("should throw error for unsupported type", () => {
      // @ts-expect-error Testing invalid input type
      expect(() => formatDateTime(null, "yyyy-LL-dd", false)).toThrow("Unsupported type");
    });
  });

  describe("withTimeout", () => {
    it("should resolve promise before timeout", async () => {
      const promise = Promise.resolve("success");
      const result = await withTimeout(promise, "Test timeout", 1000);
      expect(result).toBe("success");
    });

    it("should reject promise on timeout", async () => {
      const promise = new Promise<string>(() => {
        // Never resolves - will timeout
      });

      const resultPromise = withTimeout(promise, "Test timeout", 50);

      await expect(resultPromise).rejects.toThrow("Test timeout");
    }, 200);

    it("should handle promise rejection", async () => {
      const promise = Promise.reject(new Error("Test error"));
      const resultPromise = withTimeout(promise, "Test timeout", 1000);

      await expect(resultPromise).rejects.toThrow("Test error");
    });

    it("should clear timeout when promise resolves", async () => {
      const clearTimeoutSpy = vi.spyOn(global, "clearTimeout");
      const promise = Promise.resolve("success");
      const resultPromise = withTimeout(promise, "Test timeout", 1000);

      await resultPromise;

      // Give a small delay to ensure clearTimeout is called
      await new Promise((resolve) => setTimeout(resolve, 10));

      expect(clearTimeoutSpy).toHaveBeenCalled();
      clearTimeoutSpy.mockRestore();
    });
  });

  describe("withTidbHint", () => {
    it("should wrap column with TiDB session alias hint", () => {
      const testTable = mysqlTable("test", {
        id: int("id").primaryKey(),
      });

      const result = withTidbHint(testTable.id);

      expect(result).toBeDefined();
      // Check that result is a SQL object with queryChunks
      expect(result).toHaveProperty("queryChunks");
      // Check that the result has the expected SQL structure
      // The function wraps the column with a TiDB hint, so we verify the structure exists
      expect(result).toHaveProperty("decoder");
      expect(result).toHaveProperty("queryChunks");
    });

    it("should return SQL wrapper object", () => {
      const testTable = mysqlTable("test", {
        id: int("id").primaryKey(),
      });

      const result = withTidbHint(testTable.id);

      expect(result).toBeDefined();
      // The result should be a SQL wrapper object
      expect(result).toHaveProperty("queryChunks");
      expect(result).toHaveProperty("decoder");
    });
  });
});

import { describe, it, expect } from "vitest";
import { mysqlTable, int } from "drizzle-orm/mysql-core";
import {
  forgeDateTimeString,
  forgeTimestampString,
  forgeDateString,
  forgeTimeString,
} from "../../../src/core/ForgeSQLQueryBuilder";
import { formatDateTime, parseDateTime } from "../../../src/utils/sqlUtils";

describe("ForgeSQLQueryBuilder - Custom Types", () => {
  describe("forgeDateTimeString", () => {
    it("should create a column with datetime type", () => {
      const testTable = mysqlTable("test_table", {
        id: int("id").primaryKey(),
        dateTimeField: forgeDateTimeString("date_time_field"),
      });

      expect(testTable).toBeDefined();
      expect(testTable.dateTimeField).toBeDefined();
    });

    it("should convert Date to MySQL datetime string format", () => {
      const date = new Date("2024-01-15T14:30:45.123Z");
      // Test the formatDateTime function directly (used by toDriver)
      const result = formatDateTime(date, "yyyy-MM-dd' 'HH:mm:ss.SSS", false);
      // Format: yyyy-MM-dd' 'HH:mm:ss.SSS
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3}$/);
      expect(result).toContain("2024-01-15");
    });

    it("should parse MySQL datetime string to Date", () => {
      const dateString = "2024-01-15 14:30:45.123";
      // Test the parseDateTime function directly (used by fromDriver)
      const result = parseDateTime(dateString, "yyyy-MM-dd' 'HH:mm:ss.SSS");
      expect(result).toBeInstanceOf(Date);
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(0); // January (0-indexed)
      expect(result.getDate()).toBe(15);
    });

    it("should handle different datetime formats", () => {
      const date = new Date("2023-12-25T10:15:30.456Z");
      const result = formatDateTime(date, "yyyy-MM-dd' 'HH:mm:ss.SSS", false);
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3}$/);
    });
  });

  describe("forgeTimestampString", () => {
    it("should create a column with timestamp type", () => {
      const testTable = mysqlTable("test_table", {
        id: int("id").primaryKey(),
        timestampField: forgeTimestampString("timestamp_field"),
      });

      expect(testTable).toBeDefined();
      expect(testTable.timestampField).toBeDefined();
    });

    it("should convert Date to MySQL timestamp string format", () => {
      const date = new Date("2024-01-15T14:30:45.123Z");
      // Test the formatDateTime function with UTC conversion (used by toDriver)
      const result = formatDateTime(date, "yyyy-MM-dd' 'HH:mm:ss.SSS", true);
      // Format: yyyy-MM-dd' 'HH:mm:ss.SSS (with UTC conversion)
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3}$/);
    });

    it("should parse MySQL timestamp string to Date", () => {
      const timestampString = "2024-01-15 14:30:45.123";
      // Test the parseDateTime function directly (used by fromDriver)
      const result = parseDateTime(timestampString, "yyyy-MM-dd' 'HH:mm:ss.SSS");
      expect(result).toBeInstanceOf(Date);
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(0);
      expect(result.getDate()).toBe(15);
    });

    it("should handle UTC conversion for timestamps", () => {
      const date = new Date("2023-06-15T12:00:00.000Z");
      const result = formatDateTime(date, "yyyy-MM-dd' 'HH:mm:ss.SSS", true);
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3}$/);
    });
  });

  describe("forgeDateString", () => {
    it("should create a column with date type", () => {
      const testTable = mysqlTable("test_table", {
        id: int("id").primaryKey(),
        dateField: forgeDateString("date_field"),
      });

      expect(testTable).toBeDefined();
      expect(testTable.dateField).toBeDefined();
    });

    it("should convert Date to MySQL date string format", () => {
      const date = new Date("2024-01-15T14:30:45.123Z");
      // Test the formatDateTime function directly (used by toDriver)
      const result = formatDateTime(date, "yyyy-MM-dd", false);
      // Format: yyyy-MM-dd
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(result).toBe("2024-01-15");
    });

    it("should parse MySQL date string to Date", () => {
      const dateString = "2024-01-15";
      // Test the parseDateTime function directly (used by fromDriver)
      const result = parseDateTime(dateString, "yyyy-MM-dd");
      expect(result).toBeInstanceOf(Date);
      expect(result.getFullYear()).toBe(2024);
      expect(result.getMonth()).toBe(0);
      expect(result.getDate()).toBe(15);
    });

    it("should handle different dates", () => {
      const date = new Date("2023-12-25T10:15:30.456Z");
      const result = formatDateTime(date, "yyyy-MM-dd", false);
      expect(result).toBe("2023-12-25");
    });

    it("should handle leap year dates", () => {
      const date = new Date("2024-02-29T00:00:00.000Z");
      const result = formatDateTime(date, "yyyy-MM-dd", false);
      expect(result).toBe("2024-02-29");
    });
  });

  describe("forgeTimeString", () => {
    it("should create a column with time type", () => {
      const testTable = mysqlTable("test_table", {
        id: int("id").primaryKey(),
        timeField: forgeTimeString("time_field"),
      });

      expect(testTable).toBeDefined();
      expect(testTable.timeField).toBeDefined();
    });

    it("should convert Date to MySQL time string format", () => {
      const date = new Date("2024-01-15T14:30:45.123Z");
      // Test the formatDateTime function directly (used by toDriver)
      const result = formatDateTime(date, "HH:mm:ss.SSS", false);
      // Format: HH:mm:ss.SSS
      expect(result).toMatch(/^\d{2}:\d{2}:\d{2}\.\d{3}$/);
    });

    it("should parse MySQL time string to Date", () => {
      const timeString = "14:30:45.123";
      // Test the parseDateTime function directly (used by fromDriver)
      const result = parseDateTime(timeString, "HH:mm:ss.SSS");
      expect(result).toBeInstanceOf(Date);
    });

    it("should handle different times", () => {
      const date = new Date("2024-01-15T23:59:59.999Z");
      const result = formatDateTime(date, "HH:mm:ss.SSS", false);
      expect(result).toMatch(/^\d{2}:\d{2}:\d{2}\.\d{3}$/);
    });

    it("should handle midnight time", () => {
      const date = new Date("2024-01-15T00:00:00.000Z");
      const result = formatDateTime(date, "HH:mm:ss.SSS", false);
      expect(result).toMatch(/^\d{2}:\d{2}:\d{2}\.\d{3}$/);
    });
  });

  describe("Edge cases", () => {
    it("should handle invalid date strings gracefully in parseDateTime", () => {
      expect(() => {
        parseDateTime("invalid-date", "yyyy-MM-dd' 'HH:mm:ss.SSS");
      }).not.toThrow();
    });

    it("should handle null/undefined values in formatDateTime", () => {
      // formatDateTime throws error for null/undefined, which is expected behavior
      expect(() => {
        formatDateTime(null as any, "yyyy-MM-dd' 'HH:mm:ss.SSS", false);
      }).toThrow();
    });

    it("should handle empty strings in parseDateTime", () => {
      expect(() => {
        parseDateTime("", "yyyy-MM-dd");
      }).not.toThrow();
    });

    it("should handle very old dates", () => {
      const oldDate = new Date("1900-01-01T00:00:00.000Z");
      const result = formatDateTime(oldDate, "yyyy-MM-dd", false);
      expect(result).toBe("1900-01-01");
    });

    it("should handle future dates", () => {
      // Use a date that won't be affected by timezone conversion
      const futureDate = new Date("2100-12-31T12:00:00.000Z");
      const result = formatDateTime(futureDate, "yyyy-MM-dd", false);
      // The result might vary by timezone, so just check the format
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      // Check that it's either 2100-12-31 or 2101-01-01 depending on timezone
      expect(result === "2100-12-31" || result === "2101-01-01").toBe(true);
    });
  });
});

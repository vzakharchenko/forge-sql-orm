import { describe, it, expect } from "vitest";
import moment from "moment";
import {formatLimitOffset, nextVal, parseDateTime, generateDropTableStatements} from "../../../src/utils/sqlUtils";

// Test suite for transformValue function
describe("transformValue", () => {

// Test suite for parseDateTime function
describe("parseDateTime", () => {
  it("should correctly parse a datetime string", () => {
    const dateString = "2024-03-03T12:34:56.789";
    const format = "YYYY-MM-DDTHH:mm:ss.SSS";
    const parsedDate = parseDateTime(dateString, format);
    expect(moment(parsedDate).format(format)).toBe(dateString);
  });

  it("should correctly parse a date string", () => {
    const dateString = "2024-03-03";
    const format = "YYYY-MM-DD";
    const parsedDate = parseDateTime(dateString, format);
    expect(moment(parsedDate).format(format)).toBe(dateString);
  });
});

describe('formatLimitOffset', () => {
  it('should return a valid SQL raw number for valid input', () => {
    const result = formatLimitOffset(10);
    expect(result).toBeDefined();
    expect(JSON.stringify(result)).toBe(JSON.stringify({"decoder":{},"shouldInlineParams":false,"queryChunks":[{"value":["10"]}]}));
  });

  it('should throw error for NaN input', () => {
    expect(() => formatLimitOffset(NaN)).toThrow('limitOrOffset must be a valid number');
  });

  it('should throw error for non-number input', () => {
    // @ts-expect-error Testing invalid input type
    expect(() => formatLimitOffset('10')).toThrow('limitOrOffset must be a valid number');
  });

  it('should handle zero value', () => {
    const result = formatLimitOffset(0);
    expect(result).toBeDefined();
    expect(JSON.stringify(result)).toBe(JSON.stringify({"decoder":{},"shouldInlineParams":false,"queryChunks":[{"value":["0"]}]}));
  });

  it('should handle negative values', () => {
    const result = formatLimitOffset(-5);
    expect(result).toBeDefined();
    expect(JSON.stringify(result)).toBe(JSON.stringify({"decoder":{},"shouldInlineParams":false,"queryChunks":[{"value":["-5"]}]}));
  });
});

describe('nextVal', () => {
  it('should return a valid SQL template literal for sequence', () => {
    const result = nextVal('test_sequence');
    expect(result).toBeDefined();
    expect(JSON.stringify(result)).toBe(JSON.stringify({"decoder":{},"shouldInlineParams":false,"queryChunks":[{"value":["SELECT NEXT VALUE FOR "]},"test_sequence",{"value":[" AS id"]}]}));
  });

  it('should handle sequence names with special characters', () => {
    const result = nextVal('test-sequence_123');
    expect(result).toBeDefined();
    expect(JSON.stringify(result)).toBe(JSON.stringify({"decoder":{},"shouldInlineParams":false,"queryChunks":[{"value":["SELECT NEXT VALUE FOR "]},"test-sequence_123",{"value":[" AS id"]}]}));
  });

  it('should handle empty sequence name', () => {
    const result = nextVal('');
    expect(result).toBeDefined();
    expect(JSON.stringify(result)).toBe(JSON.stringify({"decoder":{},"shouldInlineParams":false,"queryChunks":[{"value":["SELECT NEXT VALUE FOR "]},"",{"value":[" AS id"]}]}));
  });
});

describe('generateDropTableStatements', () => {
  it('should generate correct DROP TABLE statements for single table', () => {
    const tables = ['users'];
    const expected = ['DROP TABLE IF EXISTS `users`;'];
    expect(generateDropTableStatements(tables)).toEqual(expected);
  });

  it('should generate correct DROP TABLE statements for multiple tables', () => {
    const tables = ['users', 'orders', 'products'];
    const expected = [
      'DROP TABLE IF EXISTS `users`;',
      'DROP TABLE IF EXISTS `orders`;',
      'DROP TABLE IF EXISTS `products`;'
    ];
    expect(generateDropTableStatements(tables)).toEqual(expected);
  });

  it('should handle table names with special characters', () => {
    const tables = ['user-profiles', 'order_items'];
    const expected = [
      'DROP TABLE IF EXISTS `user-profiles`;',
      'DROP TABLE IF EXISTS `order_items`;'
    ];
    expect(generateDropTableStatements(tables)).toEqual(expected);
  });

  it('should return empty array for empty input', () => {
    expect(generateDropTableStatements([])).toEqual([]);
  });
});
});

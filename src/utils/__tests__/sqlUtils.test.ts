import { describe, it, expect } from 'vitest';
import { formatLimitOffset, nextVal } from '../sqlUtils';
import { sql } from 'drizzle-orm';

describe('SQL Utils', () => {
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
});
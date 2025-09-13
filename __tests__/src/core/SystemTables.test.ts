import { describe, it, expect, vi, beforeEach } from "vitest";
import { sql } from "@forge/sql";
import { getTables, forgeSystemTables, migrations } from "../../../src/core/SystemTables";
import { Table } from "drizzle-orm";

vi.mock("@forge/sql", () => ({
  sql: {
    executeDDL: vi.fn(),
  },
}));

describe("SystemTables", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("forgeSystemTables", () => {
    it("should contain the migrations table", () => {
      expect(forgeSystemTables).toHaveLength(1);
      expect(forgeSystemTables[0]).toBe(migrations);
    });

    it("should have correct migrations table structure", () => {
      const table = forgeSystemTables[0] as Table;
      expect(table).toBeDefined();
      expect(table).toBe(migrations);
    });
  });

  describe("getTables", () => {
    it("should return array of table names", async () => {
      const mockTables = {
        rows: [
          { Tables_in_database: "table1" },
          { Tables_in_database: "table2" },
          { Tables_in_database: "table3" },
        ],
      };

      vi.mocked(sql.executeDDL).mockResolvedValueOnce(mockTables);

      const result = await getTables();
      expect(result).toEqual(["table1", "table2", "table3"]);
      expect(sql.executeDDL).toHaveBeenCalledWith("SHOW TABLES");
    });

    it("should handle empty result set", async () => {
      const mockTables = {
        rows: [],
      };

      vi.mocked(sql.executeDDL).mockResolvedValueOnce(mockTables);

      const result = await getTables();
      expect(result).toEqual([]);
      expect(sql.executeDDL).toHaveBeenCalledWith("SHOW TABLES");
    });

    it("should handle error from executeDDL", async () => {
      const error = new Error("Database error");
      vi.mocked(sql.executeDDL).mockRejectedValueOnce(error);

      await expect(getTables()).rejects.toThrow("Database error");
      expect(sql.executeDDL).toHaveBeenCalledWith("SHOW TABLES");
    });

    it("should handle unexpected response format", async () => {
      const mockTables = {
        rows: [
          { unexpected_key: "table1" },
          { Tables_in_database: "table2" },
          { another_key: "table3" },
        ],
      };

      vi.mocked(sql.executeDDL).mockResolvedValueOnce(mockTables);

      const result = await getTables();
      expect(result).toEqual(["table1", "table2", "table3"]);
      expect(sql.executeDDL).toHaveBeenCalledWith("SHOW TABLES");
    });
  });
});

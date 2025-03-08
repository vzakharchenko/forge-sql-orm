import { sql } from "@forge/sql";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ForgeSQLORM from "../../../src/core/ForgeSQLORM";
import { ForgeSqlOperation } from "../../../src";
import { TestEntity, TestEntitySchema } from "../../entities/TestEntity";
vi.mock("@forge/sql", () => ({
  sql: {
    prepare: vi.fn((query: string) => {
      const executeMock = vi.fn().mockResolvedValue({ rows: [{ id: 1, name: "Test" }] });
      return {
        query: query || "MOCK_QUERY",
        _params: [],
        remoteSqlApi: "",
        params: [],
        bindParams: vi.fn(),
        execute: executeMock, // ✅ Ensure execute is always mocked
      };
    }),
  },
}));

describe("ForgeSQLSelectOperations", () => {
  let forgeSqlOperation: ForgeSqlOperation;

  beforeEach(() => {
    forgeSqlOperation = new ForgeSQLORM([TestEntity], { logRawSqlQuery: true });
  });

  it("should call SQL prepare and execute on executeRawSQL", async () => {
    const result = await forgeSqlOperation.fetch().executeRawSQL("SELECT * FROM test_entity");
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;

    expect(sql.prepare).toHaveBeenCalledWith("SELECT * FROM test_entity");
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: "Test" }]);
  });

  it("should call SQL prepare and execute on executeSchemaSQL", async () => {
    const result = await forgeSqlOperation
      .fetch()
      .executeSchemaSQL("SELECT * FROM test_entity", TestEntitySchema);
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(sql.prepare).toHaveBeenCalledWith("SELECT * FROM test_entity");
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: "Test" }]);
  });

  it("should call SQL prepare and execute on executeRawUpdateSQL", async () => {
    await forgeSqlOperation
      .fetch()
      .executeRawUpdateSQL("UPDATE test_entity SET name = 'Updated' WHERE id = 1");
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(sql.prepare).toHaveBeenCalledWith(
      "UPDATE test_entity SET name = 'Updated' WHERE id = 1",
    );
    expect(preparedStatement.execute).toHaveBeenCalled();
  });
});

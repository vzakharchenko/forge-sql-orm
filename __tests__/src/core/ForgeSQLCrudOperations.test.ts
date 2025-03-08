import { describe, it, expect, beforeEach, vi } from "vitest";

vi.mock("@forge/sql", () => ({
  sql: {
    prepare: vi.fn((query: string) => ({
      query: query || "MOCK_QUERY",
      _params: [],
      remoteSqlApi: "",
      params: [],
      bindParams: vi.fn(),
      execute: vi.fn().mockResolvedValue({ rows: [] }),
    })),
  },
}));

import { sql } from "@forge/sql";
import ForgeSQLORM, { ForgeSqlOperation } from "../../../src";
import { TestEntity, TestEntitySchema } from "../../entities/TestEntity";

describe("ForgeSQLCrudOperations", () => {
  let forgeSqlOperation: ForgeSqlOperation;

  beforeEach(() => {
    forgeSqlOperation = new ForgeSQLORM([TestEntity], { logRawSqlQuery: true });
  });

  it("should call SQL prepare and execute on insert", async () => {
    await forgeSqlOperation.crud().insert(TestEntitySchema, [{ id: 1, name: "Test" }]);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(expect.any(String));

    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.execute).toHaveBeenCalled();
  });

  it("should call SQL prepare and execute on deleteById", async () => {
    await forgeSqlOperation.crud().deleteById(1, TestEntitySchema);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(expect.any(String));

    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.execute).toHaveBeenCalled();
  });

  it("should call SQL prepare and execute on updateById", async () => {
    await forgeSqlOperation.crud().updateById({ id: 1, name: "Updated" }, TestEntitySchema);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(expect.any(String));

    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.execute).toHaveBeenCalled();
  });
});

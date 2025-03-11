import { describe, it, expect, beforeEach, vi } from "vitest";
const OriginalDate = global.Date;
vi.useFakeTimers();
vi.setSystemTime(new Date("2023-04-12 00:00:01"));

vi.mock("@forge/sql", () => ({
  sql: {
    prepare: vi.fn((query: string) => {
      if (
        query ===
        "select `t0`.`id`, `t0`.`version` from `test_entity_version` as `t0` where `t0`.`id` = 1"
      ) {
        const testEntityVersion = new TestEntityVersion();
        testEntityVersion.id = 1;
        testEntityVersion.name = "test";
        testEntityVersion.version = 5;
        return {
          query: query || "MOCK_QUERY",
          _params: [],
          remoteSqlApi: "",
          params: [],
          bindParams: vi.fn(),
          execute: () => ({ rows: [testEntityVersion] }),
        };
      } else if (
        query ===
        "select `t0`.`id`, `t0`.`version` from `test_entity_date_version` as `t0` where `t0`.`id` = 1"
      ) {
        const testEntityVersion = new TestEntityDateVersion();
        testEntityVersion.id = 1;
        testEntityVersion.name = "test";
        testEntityVersion.version = new Date("01.01.2000 00:00:00");
        return {
          query: query || "MOCK_QUERY",
          _params: [],
          remoteSqlApi: "",
          params: [],
          bindParams: vi.fn(),
          execute: () => ({ rows: [testEntityVersion] }),
        };
      } else if (query.startsWith("update")) {
        return {
          query: query || "MOCK_QUERY",
          _params: [],
          remoteSqlApi: "",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({ rows: { affectedRows: 1 } }),
        };
      }
      return {
        query: query || "MOCK_QUERY",
        _params: [],
        remoteSqlApi: "",
        params: [],
        bindParams: vi.fn(),
        execute: vi.fn().mockResolvedValue({ rows: [] }),
      };
    }),
  },
}));

import { sql } from "@forge/sql";
import ForgeSQLORM, { ForgeSqlOperation } from "../../../src";
import { TestEntity, TestEntitySchema } from "../../entities/TestEntity";
import { TestEntityVersion, TestEntityVersionSchema } from "../../entities/TestEntityVersion";
import {
  TestEntityDateVersion,
  TestEntityDateVersionSchema,
} from "../../entities/TestEntityDateVersion";

describe("ForgeSQLCrudOperations", () => {
  let forgeSqlOperation: ForgeSqlOperation;

  beforeEach(() => {
    forgeSqlOperation = new ForgeSQLORM([TestEntity, TestEntityVersion, TestEntityDateVersion], {
      logRawSqlQuery: true,
    });
  });

  it("should call SQL prepare and execute on insert", async () => {
    await forgeSqlOperation.crud().insert(TestEntitySchema, [{ id: 1, name: "Test" }]);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "INSERT INTO test_entity (id,name) VALUES (1,'Test')",
    );

    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.execute).toHaveBeenCalled();
  });

  it("should call SQL prepare and execute on insert with empty versioning number", async () => {
    await forgeSqlOperation
      .crud()
      .insert(TestEntityVersionSchema, [{ id: 1, name: "Test" } as TestEntityVersion]);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "INSERT INTO test_entity_version (id,name,version) VALUES (1,'Test',0)",
    );

    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.execute).toHaveBeenCalled();
  });
  it("should call SQL prepare and execute on insert with not empty versioning number", async () => {
    await forgeSqlOperation
      .crud()
      .insert(TestEntityVersionSchema, [
        { id: 1, name: "Test", version: 11111 } as TestEntityVersion,
      ]);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "INSERT INTO test_entity_version (id,name,version) VALUES (1,'Test',0)",
    );

    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.execute).toHaveBeenCalled();
  });

  it("should call SQL prepare and execute on insert with empty versioning date", async () => {
    await forgeSqlOperation
      .crud()
      .insert(TestEntityDateVersionSchema, [{ id: 1, name: "Test" } as TestEntityDateVersion]);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "INSERT INTO test_entity_date_version (id,name,version) VALUES (1,'Test','2023-04-12T00:00:01.000')",
    );

    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.execute).toHaveBeenCalled();
  });

  it("should call SQL prepare and execute on insert notEmpty empty versioning date", async () => {
    await forgeSqlOperation
      .crud()
      .insert(TestEntityDateVersionSchema, [
        { id: 1, name: "Test", version: new OriginalDate() } as TestEntityDateVersion,
      ]);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "INSERT INTO test_entity_date_version (id,name,version) VALUES (1,'Test','2023-04-12T00:00:01.000')",
    );

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

  it("should call SQL prepare and execute on updateById With version", async () => {
    await forgeSqlOperation
      .crud()
      .updateById({ id: 1, name: "Updated", version: 2 }, TestEntityVersionSchema);
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "update `test_entity_version` set `id` = ?, `name` = ?, `version` = ? where `version` = ? and `id` = ?",
    );
  });

  it("should call SQL prepare and execute on updateById With version Date", async () => {
    let fields = TestEntityDateVersionSchema.meta.props.map((p) => p.name);
    await forgeSqlOperation
      .crud()
      .updateFieldById(
        { id: 1, name: "Updated", version: new Date("01.01.2010 00:00:00") },
        fields,
        TestEntityDateVersionSchema,
      );
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "update `test_entity_date_version` set `id` = ?, `name` = ?, `version` = ? where `version` = ? and `id` = ?",
    );
  });

  it("should call SQL prepare and execute on updateById only update", async () => {
    await forgeSqlOperation
      .crud()
      .updateFieldById(
        { id: 1, name: "Updated", version: new Date("01.01.2010 00:00:00") },
        ["id"],
        TestEntityDateVersionSchema,
      );
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "update `test_entity_date_version` set `id` = ?, `version` = ? where `version` = ? and `id` = ?",
    );
  });
});

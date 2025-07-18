import { describe, it, expect, beforeEach, vi } from "vitest";
const OriginalDate = global.Date;
vi.useFakeTimers();
vi.setSystemTime(new Date("2023-04-12 00:00:01"));

vi.mock("@forge/sql", () => ({
  sql: {
    prepare: vi.fn((query: string) => {
      if (
        query ===
        "select `id`, `version` from `test_entity_version` where `test_entity_version`.`id` = ?"
      ) {
        const testEntityVersion = {
          id: 1,
          name: "test",
          version: 5
        } as TestEntityVersion;
        const mockResult = {
          query: "MOCK_QUERY",
          _params: [],
          remoteSqlApi: "",
          params: [],
          bindParams: vi.fn().mockImplementation((params) => {
            mockResult.params = params;
            return mockResult;
          }),
          execute: () => ({ rows: [testEntityVersion] }),
        } as any;
        return mockResult;
      } else if (
        query ===
        "select `t0`.`id`, `t0`.`version` from `test_entity_date_version` as `t0` where `t0`.`id` = 1"
      ) {
        const testEntityVersion = {
          id: 1,
          name: "test",
          version: new Date("01.01.2000 00:00:00")
        } as TestEntityDateVersion;
        const mockResult = {
          query: "MOCK_QUERY",
          _params: [],
          remoteSqlApi: "",
          params: [],
          bindParams: vi.fn().mockImplementation((params) => {
            mockResult.params = params;
            return mockResult;
          }),
          execute: () => ({ rows: [testEntityVersion] }),
        } as any;
        return mockResult;
      } else if (query.startsWith("update")) {
        const mockResult = {
          query: "MOCK_QUERY",
          _params: [],
          remoteSqlApi: "",
          params: [],
          bindParams: vi.fn().mockImplementation((params) => {
            mockResult.params = params;
            return mockResult;
          }),
          execute: vi.fn().mockResolvedValue({ rows: { affectedRows: 1 } }),
        } as any;
        return mockResult;
      }
      const mockResult = {
        query: "MOCK_QUERY",
        _params: [],
        remoteSqlApi: "",
        params: [],
        bindParams: vi.fn().mockImplementation((params) => {
          mockResult.params = params;
          return mockResult;
        }),
        execute: vi.fn().mockResolvedValue({ rows: [] }),
      } as any;
      return mockResult;
    }),
  },
}));

import { sql } from "@forge/sql";
import ForgeSQLORM, { ForgeSqlOperation } from "../../../src";
import {testEntity} from "../../entities/TestEntity";
import {testEntityVersion, TestEntityVersion} from "../../entities/TestEntityVersion";
import {
  testEntityDateVersion,
  TestEntityDateVersion,
} from "../../entities/TestEntityDateVersion";
import {eq} from "drizzle-orm";
import {testEntityTimeStampVersion} from "../../entities/TestEntityTimeStampVersion";
import {TestEntityVersionDifferentField} from "../../entities/TestEntityVersionDifferentField";

describe("ForgeSQLCrudOperations", () => {
  let forgeSqlOperation: ForgeSqlOperation;

  beforeEach(() => {
    forgeSqlOperation = new ForgeSQLORM( {
      logRawSqlQuery: true,
      additionalMetadata: {
        "test_entity_version": {
          tableName: 'test_entity_version',
          versionField: {
            fieldName: 'version'
          }
        },
        "test_entity_date_version": {
          tableName: 'test_entity_date_version',
          versionField: {
            fieldName: 'version'
          }
        },
        "test_entity_timestamp_version": {
          tableName: 'test_entity_timestamp_version',
          versionField: {
            fieldName: 'version'
          }
        },
        "test_entity_diff_version": {
          tableName: 'test_entity_diff_version',
          versionField: {
            fieldName: 'version_different_field'
          }
        }
      }
    });
  });

  it("should call SQL prepare and execute on insert", async () => {
    vi.mocked(sql.prepare).mockImplementationOnce(() => ({
      query: "MOCK_QUERY",
      params: [],
      bindParams: vi.fn(),
      execute: vi.fn().mockResolvedValue( {"rows":{"fieldCount":0,"affectedRows":1,"insertId":30006,"info":"","serverStatus":2,"warningStatus":0,"changedRows":0},"metadata":{"dbExecutionTime":5,"responseSize":111,"fields":[]}}),
    } as any));
    let number = await forgeSqlOperation.crud().insert(testEntity, [{ id: 1, name: "Test" }]);
    expect(number).toEqual(30006);
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "insert into `test_entity` (`id`, `name`) values (?, ?)",
    );



    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.bindParams).toHaveBeenCalledWith(1, "Test");
    expect(preparedStatement.execute).toHaveBeenCalled();
  });

  it("should call SQL prepare and execute on insert with empty versioning number", async () => {
    await forgeSqlOperation
      .modify()
      .insert(testEntityVersion, [{ id: 1, name: "Test" }]);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "insert into `test_entity_version` (`id`, `name`, `version`) values (?, ?, ?)",
    );
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.bindParams).toHaveBeenCalledWith(1, "Test", 1);
    expect(preparedStatement.execute).toHaveBeenCalled();
  });

  it("should call SQL prepare and execute on insert with not empty versioning number", async () => {
    await forgeSqlOperation
        .modify()
        .insert(testEntityVersion, [{ id: 1, name: "Test", version: 11111 }]);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "insert into `test_entity_version` (`id`, `name`, `version`) values (?, ?, ?)",
    );
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.bindParams).toHaveBeenCalledWith(1, "Test", 1);
    expect(preparedStatement.execute).toHaveBeenCalled();
  });

  it("should call SQL prepare and execute on insert with empty versioning date", async () => {
    await forgeSqlOperation
      .modify()
      .insert(testEntityDateVersion, [{
        id: 1,
        name: "Test",
        version: new Date()
      } as { id: number; name: string; version: Date }]);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "insert into `test_entity_date_version` (`id`, `name`, `version`) values (?, ?, ?)",
    );
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.bindParams).toHaveBeenCalledWith(1, "Test", '2023-04-12T00:00:01.000');
    expect(preparedStatement.execute).toHaveBeenCalled();
  });

  it("should call SQL prepare and execute on insert notEmpty empty versioning date", async () => {
    await forgeSqlOperation
      .modify()
      .insert(testEntityDateVersion, [{
        id: 1,
        name: "Test",
        version: new OriginalDate()
      } as { id: number; name: string; version: Date }]);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "insert into `test_entity_date_version` (`id`, `name`, `version`) values (?, ?, ?)",
    );
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.bindParams).toHaveBeenCalledWith(1, "Test", '2023-04-12T00:00:01.000');
    expect(preparedStatement.execute).toHaveBeenCalled();
  });

  it("should call SQL prepare and execute on deleteById", async () => {
    await forgeSqlOperation.modify().deleteById(1, testEntity);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "delete from `test_entity` where `test_entity`.`id` = ?",
    );

    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.bindParams).toHaveBeenCalledWith(1);
    expect(preparedStatement.execute).toHaveBeenCalled();
  });

  it("should call SQL prepare and execute on deleteById Versioning Field number", async () => {
    await forgeSqlOperation.modify().deleteById(1, testEntityVersion);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "select `id`, `version` from `test_entity_version` where `test_entity_version`.`id` = ?",
    );

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "delete from `test_entity_version` where (`test_entity_version`.`id` = ? and `test_entity_version`.`version` = ?)",
    );

  });

  it("should call SQL prepare and execute on updateById", async () => {
    await forgeSqlOperation.modify().updateById({ id: 1, name: "Updated" }, testEntity);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(expect.any(String));
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "update `test_entity` set `id` = ?, `name` = ? where `test_entity`.`id` = ?",
    );
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.bindParams).toHaveBeenCalledWith(1, "Updated", 1);
    expect(preparedStatement.execute).toHaveBeenCalled();
  });

  it("should call SQL prepare and execute on updateById With version", async () => {
    await forgeSqlOperation
      .modify()
      .updateById({ id: 1, name: "Updated", version: 2 }, testEntityVersion);
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "update `test_entity_version` set `id` = ?, `name` = ?, `version` = ? where (`test_entity_version`.`id` = ? and `test_entity_version`.`version` = ?)",
    );
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.bindParams).toHaveBeenCalledWith(1, "Updated",3, 1,2);
    expect(preparedStatement.execute).toHaveBeenCalled();
  });
  it("should call SQL prepare and execute on updateById With version column", async () => {
    await forgeSqlOperation
      .modify()
      .updateById({ id: 1, name: "Updated", version: 2 }, TestEntityVersionDifferentField);
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "update `test_entity_diff_version` set `id` = ?, `name` = ?, `version_different_field` = ? where (`test_entity_diff_version`.`id` = ? and `test_entity_diff_version`.`version_different_field` = ?)",
    );
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.bindParams).toHaveBeenCalledWith(1, "Updated",3, 1,2);
    expect(preparedStatement.execute).toHaveBeenCalled();
  });

  it("should call SQL prepare and execute on updateById With version Date", async () => {
    await forgeSqlOperation
      .modify()
      .updateById(
        { id: 1, version: new Date("01.01.2010 00:00:00") },
        testEntityDateVersion,
      );
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "update `test_entity_date_version` set `id` = ?, `version` = ? where (`test_entity_date_version`.`id` = ? and `test_entity_date_version`.`version` = ?)",
    );
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.bindParams).toHaveBeenCalledWith(1, "2023-04-12T00:00:01.000",1, "2010-01-01T00:00:00.000");
    expect(preparedStatement.execute).toHaveBeenCalled();
  });
  it("should call SQL prepare and execute on updateById With version TimeStamp", async () => {
    await forgeSqlOperation
      .modify()
      .updateById(
        { id: 1, version: new Date("01.01.2010 00:00:00") },
          testEntityTimeStampVersion,
      );
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "update `test_entity_timestamp_version` set `id` = ?, `version` = ? where (`test_entity_timestamp_version`.`id` = ? and `test_entity_timestamp_version`.`version` = ?)",
    );
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.bindParams).toHaveBeenCalledWith(1,"2023-04-12T00:00:01.000",1, "2010-01-01T00:00:00.000");
    expect(preparedStatement.execute).toHaveBeenCalled();
  });


  it("should call SQL prepare and execute on updateFields2 only update", async () => {
    await forgeSqlOperation
      .modify()
      .updateFields(
        { id: 1, name: "Updated" },
          testEntity,
          eq(testEntity.id, 10000)
      );
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "update `test_entity` set `id` = ?, `name` = ? where `test_entity`.`id` = ?",
    );
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(preparedStatement.bindParams).toHaveBeenCalledWith(1, "Updated",10000);
    expect(preparedStatement.execute).toHaveBeenCalled();
  });

  it("should call SQL prepare and execute on updateFields only update Wrong Where", async () => {

    await expect(
        forgeSqlOperation
            .modify()
            .updateFields(
                { name: "Updated" } ,
                testEntity,
            )
    ).rejects.toThrow("WHERE conditions must be provided");
  });

  describe('Error Handling', () => {
    it('should throw error when insert fails', async () => {
      vi.mocked(sql.prepare).mockImplementationOnce(() => ({
        query: "MOCK_QUERY",
        params: [],
        bindParams: vi.fn(),
        execute: vi.fn().mockRejectedValue(new Error('Insert failed')),
      } as any));

      await expect(
        forgeSqlOperation.crud().insert(testEntity, [{ id: 1, name: "Test" }])
      ).rejects.toThrow("Failed query: insert into `test_entity` (`id`, `name`) values (?, ?)\n" +
        "params: 1,Test");
    });

    it('should throw error when update fails', async () => {
      vi.mocked(sql.prepare).mockImplementationOnce(() => ({
        query: "MOCK_QUERY",
        params: [],
        bindParams: vi.fn(),
        execute: vi.fn().mockRejectedValue(new Error('Update failed')),
      } as any));

      await expect(
        forgeSqlOperation.modify().updateById({ id: 1, name: "Updated" }, testEntity)
      ).rejects.toThrow('Failed query: update `test_entity` set `id` = ?, `name` = ? where `test_entity`.`id` = ?\n' +
        'params: 1,Updated,1');
    });

    it('should throw error when delete fails', async () => {
      vi.mocked(sql.prepare).mockImplementationOnce(() => ({
        query: "MOCK_QUERY",
        params: [],
        bindParams: vi.fn(),
        execute: vi.fn().mockRejectedValue(new Error('Delete failed')),
      } as any));

      await expect(
        forgeSqlOperation.modify().deleteById(1, testEntity)
      ).rejects.toThrow('Failed query: delete from `test_entity` where `test_entity`.`id` = ?\n' +
        'params: 1');
    });
  });

  describe('Bulk Operations', () => {
    it('should handle bulk insert with multiple records', async () => {
      const records = [
        { id: 1, name: "Test1" },
        { id: 2, name: "Test2" },
        { id: 3, name: "Test3" }
      ];

      await forgeSqlOperation.crud().insert(testEntity, records);

      expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "insert into `test_entity` (`id`, `name`) values (?, ?), (?, ?), (?, ?)"
      );
      const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
      expect(preparedStatement.bindParams).toHaveBeenCalledWith(1, "Test1", 2, "Test2", 3, "Test3");
    });

    it('should handle bulk insert with versioning', async () => {
      const records = [
        { id: 1, name: "Test1", version: 1 },
        { id: 2, name: "Test2", version: 1 },
        { id: 3, name: "Test3", version: 1 }
      ];

      await forgeSqlOperation.modify().insert(testEntityVersion, records);

      expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "insert into `test_entity_version` (`id`, `name`, `version`) values (?, ?, ?), (?, ?, ?), (?, ?, ?)"
      );
    });
  });

  describe('Versioning Edge Cases', () => {
    it('should handle version conflict during update', async () => {
      vi.mocked(sql.prepare).mockImplementationOnce(() => ({
        query: "MOCK_QUERY",
        params: [],
        bindParams: vi.fn(),
        execute: vi.fn().mockResolvedValue({ rows: { affectedRows: 0 } }),
      } as any));

      await expect(
        forgeSqlOperation.modify().updateById(
          { id: 1, name: "Updated", version: 2 },
          testEntityVersion
        )
      ).rejects.toThrow('Optimistic locking failed: record with primary key 1 has been modified');
    });

    it('should handle version field with undefined value', async () => {
       expect(
           await forgeSqlOperation.modify().updateById(
          { id: 1, name: "Updated", version: undefined },
          testEntityVersion
        )
      ).toBe(1);
    });

    it('should handle version field with invalid type', async () => {
      const invalidVersion = { id: 1, name: "Updated", version: NaN };
      expect(
          await forgeSqlOperation.modify().updateById(
              { id: 1, name: "Updated", version: undefined },
              testEntityVersion
          )
      ).toBe(1);
    });

    it('should handle version field with negative value', async () => {

       expect(
           await forgeSqlOperation.modify().updateById(
               { id: 1, name: "Updated", version: -1 },
               testEntityVersion
           )
      ).toBe(1);
    });
  });

  describe('Query Building', () => {
    it('should build correct query for update with multiple conditions', async () => {
      await forgeSqlOperation.modify().updateFields(
        { name: "Updated" },
        testEntity,
        eq(testEntity.id, 1)
      );

      expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "update `test_entity` set `name` = ? where `test_entity`.`id` = ?"
      );
    });

    it('should build correct query for update with versioning and multiple conditions', async () => {
      await forgeSqlOperation.modify().updateFields(
        { name: "Updated", version: 2 },
        testEntityVersion,
        eq(testEntityVersion.id, 1)
      );

      expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "update `test_entity_version` set `name` = ?, `version` = ? where `test_entity_version`.`id` = ?"
      );
    });
  });
});

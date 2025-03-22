import { sql } from "@forge/sql";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ForgeSQLORM from "../../../src/core/ForgeSQLORM";
import { ForgeSqlOperation } from "../../../src";
import {testEntity} from "../../entities/TestEntity";
import {testDataEntity} from "../../entities/TestDataEntity";
import { eq } from "drizzle-orm";
import {sql as rawSql} from "drizzle-orm";

vi.mock("@forge/sql", () => ({
  sql: {
    prepare: vi.fn((query: string) => {
      let procedureMock = vi.fn().mockResolvedValue({ rows: [{ id: 1, name: "Test", data: 't' }] });
      if (query === "select `test_data_entity`.`id` as `ID1`, `test_entity`.`id` as ID2, `test_data_entity`.`data`, `test_entity`.`name` from `test_data_entity` inner join `test_entity` on `test_data_entity`.`id` = `test_entity`.`id`") {
         procedureMock = vi.fn().mockResolvedValue({ rows: [{ ID1: 1, ID2: 2, name: "Test", data: 't' }] });
      }
      const executeMock = procedureMock;
      return {
        query: query || "MOCK_QUERY",
        _params: [],
        remoteSqlApi: "",
        params: [],
        bindParams: vi.fn(),
        execute: executeMock,
      };
    }),
  },
}));

describe("ForgeSQLSelectOperations", () => {
  let forgeSqlOperation: ForgeSqlOperation;

  beforeEach(() => {
    forgeSqlOperation = new ForgeSQLORM({ logRawSqlQuery: true });
  });

  it("should call SQL prepare and execute on executeRawSQL", async () => {
    const result = await forgeSqlOperation.fetch().executeRawSQL("SELECT * FROM test_entity");
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;

    expect(sql.prepare).toHaveBeenCalledWith("SELECT * FROM test_entity");
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: "Test",  data: 't'}]);
  });


  it("should call SQL for complex query SQL using Drizzle Query Builder", async () => {
    const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

    const query = drizzle
      .select({
        ID1: rawSql`${testDataEntity.id} as \`ID1\``,
        ID2: rawSql`${testEntity.id} as ID2`,
        dataField: testDataEntity.data,
        name: testEntity.name
      })
      .from(testDataEntity)
      .innerJoin(testEntity, eq(testDataEntity.id, testEntity.id));
    const result = await forgeSqlOperation
      .fetch()
      .executeQuery(query);
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(sql.prepare).toHaveBeenCalledWith(
      "select `test_data_entity`.`id` as `ID1`, `test_entity`.`id` as ID2, `test_data_entity`.`data`, `test_entity`.`name` from `test_data_entity` inner join `test_entity` on `test_data_entity`.`id` = `test_entity`.`id`"
    );
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([{
      "ID1": 1,
      "ID2": 2,
      "dataField": "t",
      "name": "Test",
    }]);
  });

  it("should execute query and return single result", async () => {
    const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

    const query = drizzle
      .select({
        ID1: rawSql`${testDataEntity.id} as \`ID1\``,
        ID2: rawSql`${testEntity.id} as ID2`,
        dataField: testDataEntity.data,
        name: testEntity.name
      })
      .from(testDataEntity)
      .innerJoin(testEntity, eq(testDataEntity.id, testEntity.id));

    const result = await forgeSqlOperation
      .fetch()
      .executeQueryOnlyOne(query);

    expect(result).toEqual({
      "ID1": 1,
      "ID2": 2,
      "dataField": "t",
      "name": "Test",
    });
  });

  it("should return undefined when no results found", async () => {
    const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

    // Mock empty result
    vi.mocked(sql.prepare).mockImplementationOnce(() => ({
      query: "MOCK_QUERY",
      params: [],
      bindParams: vi.fn(),
      execute: vi.fn().mockResolvedValue({ rows: [] }),
    } as any));

    const query = drizzle
      .select({
        ID1: rawSql`${testDataEntity.id} as \`ID1\``,
        ID2: rawSql`${testEntity.id} as ID2`,
        dataField: testDataEntity.data,
        name: testEntity.name
      })
      .from(testDataEntity)
      .innerJoin(testEntity, eq(testDataEntity.id, testEntity.id));

    const result = await forgeSqlOperation
      .fetch()
      .executeQueryOnlyOne(query);

    expect(result).toBeUndefined();
  });

  it("should throw error when multiple results found", async () => {
    const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

    // Mock multiple results
    vi.mocked(sql.prepare).mockImplementationOnce(() => ({
      query: "MOCK_QUERY",
      params: [],
      bindParams: vi.fn(),
      execute: vi.fn().mockResolvedValue({
        rows: [
          { ID1: 1, ID2: 2, data: "t", name: "Test1" },
          { ID1: 3, ID2: 4, data: "t", name: "Test2" }
        ]
      }),
    } as any));

    const query = drizzle
      .select({
        ID1: rawSql`${testDataEntity.id} as \`ID1\``,
        ID2: rawSql`${testEntity.id} as ID2`,
        dataField: testDataEntity.data,
        name: testEntity.name
      })
      .from(testDataEntity)
      .innerJoin(testEntity, eq(testDataEntity.id, testEntity.id));

    await expect(forgeSqlOperation
      .fetch()
      .executeQueryOnlyOne(query)
    ).rejects.toThrow("Expected 1 record but returned 2");
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

  it("should find duplicates in testEntity", async () => {
    const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

    // Mock multiple results with duplicates
    vi.mocked(sql.prepare).mockImplementationOnce(() => ({
      query: "MOCK_QUERY",
      params: [],
      bindParams: vi.fn(),
      execute: vi.fn().mockResolvedValue({
        rows: [
          { name: "Test1", count: 2 },
          { name: "Test2", count: 1 },
          { name: "Test3", count: 3 }
        ]
      }),
    } as any));

    const query = drizzle
      .select({
        name: testEntity.name,
        count: rawSql`COUNT(*) as count`
      })
      .from(testEntity)
      .groupBy(testEntity.name)
      .having(rawSql`COUNT(*) > 1`);

    const result = await forgeSqlOperation
      .fetch()
      .executeQuery(query);

    expect(result).toEqual([{
      name: "Test1",
      count: 2
    },
      {
        count: 1,
        name: "Test2",
      },
      { name: "Test3", count: 3 }
      ]);
  });

  it("should find duplicates in testEntity without aliases", async () => {
    const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

    // Mock multiple results with duplicates
    vi.mocked(sql.prepare).mockImplementationOnce(() => ({
      query: "MOCK_QUERY",
      params: [],
      bindParams: vi.fn(),
      execute: vi.fn().mockResolvedValue({
        rows: [
          { name: "Test1", 'COUNT(*)': 2 },
          { name: "Test2", 'COUNT(*)': 1 },
          { name: "Test3", 'COUNT(*)': 3 }
        ]
      }),
    } as any));

    const query = drizzle
        .select({
          name: testEntity.name,
          count: rawSql`COUNT(*)`
        })
        .from(testEntity)
        .groupBy(testEntity.name)
        .having(rawSql`COUNT(*) > 1`);

    const result = await forgeSqlOperation
        .fetch()
        .executeQuery(query);

    expect(result).toEqual([
      { name: "Test1", 'count': 2 },
      { name: "Test2", 'count': 1 },
      { name: "Test3", 'count': 3 }
    ]);
  });

  it("should execute query without aliases", async () => {
    const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

    // Mock result without aliases
    vi.mocked(sql.prepare).mockImplementationOnce(() => ({
      query: "MOCK_QUERY",
      params: [],
      bindParams: vi.fn(),
      execute: vi.fn().mockResolvedValue({
        rows: [
          { id: 1, name: "Test1", data: "t" },
          { id: 2, name: "Test2", data: "t" }
        ]
      }),
    } as any));

    const query = drizzle
      .select({
        id: testEntity.id,
        name: testEntity.name,
        data: testDataEntity.data
      })
      .from(testEntity)
      .innerJoin(testDataEntity, eq(testEntity.id, testDataEntity.id));

    const result = await forgeSqlOperation
      .fetch()
      .executeQuery(query);

    expect(result).toEqual([
      { id: 1, name: "Test1", data: "t" },
      { id: 2, name: "Test2", data: "t" }
    ]);
  });
});

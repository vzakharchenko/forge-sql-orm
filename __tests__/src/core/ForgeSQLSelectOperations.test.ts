import { sql } from "@forge/sql";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { eq, sql as rawSql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql-proxy";
import {
  forgeDriver,
  ForgeSQLMetadata,
  ForgeSqlOperation,
  patchDbWithSelectAliased,
} from "../../../src";
import ForgeSQLORM from "../../../src/core/ForgeSQLORM";
import { testEntity } from "../../entities/TestEntity";
import { testDataEntity } from "../../entities/TestDataEntity";
import { testEntityDateVersion } from "../../entities/TestEntityDateVersion";
import { testEntityJoin1 } from "../../entities/TestEntityJoin1";
import { testEntityJoin2 } from "../../entities/TestEntityJoin2";
import { testEntityVersionDifferentDateField } from "../../entities/TestEntityVersionDifferentFieldDate";
import { DateTime } from "luxon";

vi.mock("../../../src/utils/cacheUtils", () => ({
  getFromCache: async () => {
    return undefined;
  },
  setCacheResult: async () => {},
  hashKey: () => "key",
}));

vi.useFakeTimers();
vi.setSystemTime(new Date("2023-04-12 00:00:01"));
vi.mock("@forge/sql", () => ({
  sql: {
    prepare: vi.fn((query: string) => {
      let procedureMock = vi.fn().mockResolvedValue({
        rows: [{ id: 1, data: "t", name: "Test" }],
        metadata: {
          dbExecutionTime: 1234,
          responseSize: 525,
        },
      });
      if (
        query ===
        "select `test_data_entity`.`id` as `ID1`, `test_entity`.`id` as ID2, `test_data_entity`.`data`, `test_entity`.`name` from `test_data_entity` inner join `test_entity` on `test_data_entity`.`id` = `test_entity`.`id`"
      ) {
        procedureMock = vi.fn().mockResolvedValue({
          rows: [{ ID1: 1, ID2: 2, data: "t", name: "Test" }],
          metadata: {
            dbExecutionTime: 1234,
            responseSize: 525,
          },
        });
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
    executeDDL: vi.fn(),
  },
}));

describe("ForgeSQLSelectOperations", () => {
  let forgeSqlOperation: ForgeSqlOperation;

  beforeEach(() => {
    forgeSqlOperation = new ForgeSQLORM({ logRawSqlQuery: true, cacheEntityName: "cache" });
  });

  it("test analyses", async () => {
    let schemaAnalyzeForgeSql = forgeSqlOperation.analyze();
    expect(schemaAnalyzeForgeSql).toBeDefined();
  });
  it("should call SQL prepare and execute on executeRawSQL", async () => {
    const result = await forgeSqlOperation.fetch().executeRawSQL("SELECT * FROM test_entity");
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;

    expect(sql.prepare).toHaveBeenCalledWith("SELECT * FROM test_entity");
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: "Test", data: "t" }]);
  });

  it("test drizzle executeQuery", async () => {
    const result = await forgeSqlOperation.execute<{ id: number; name: string; data: "t" }>(
      rawSql`select * from 1`,
    );
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(sql.prepare).toHaveBeenCalledWith("select * from 1");

    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([[{ id: 1, name: "Test", data: "t" }]]);
  });

  it("test drizzle executeQuery Cacheable", async () => {
    const result = await forgeSqlOperation.executeCacheable(rawSql`select * from 1`);
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;

    expect(sql.prepare).toHaveBeenCalledWith("select * from 1");
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([[{ id: 1, name: "Test", data: "t" }]]);
  });

  it("test drizzle executeQuery Cacheable simple text", async () => {
    const result = await forgeSqlOperation.executeCacheable(`select * from 1`);
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;

    expect(sql.prepare).toHaveBeenCalledWith("select * from 1");
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([[{ id: 1, name: "Test", data: "t" }]]);
  });
  it("test drizzle executeDDL", async () => {
    vi.mocked(sql.executeDDL).mockResolvedValue({
      rows: {
        affectedRows: 0,
        fieldCount: 0,
        info: "",
        insertId: 0,
        serverStatus: 1,
        warningStatus: 1,
      },
      metadata: {
        dbExecutionTime: 1234,
        responseSize: 525,
      },
    });
    const result = await forgeSqlOperation.executeDDL<{ affectedRows: number }>(
      rawSql`CREATE TABLE users ( id INT PRIMARY KEY,  name VARCHAR(255));`,
    );
    expect(sql.executeDDL).toHaveBeenCalledWith(
      `CREATE TABLE users ( id INT PRIMARY KEY,  name VARCHAR(255));`,
    );
    expect(result).toEqual([
      {
        affectedRows: 0,
        fieldCount: 0,
        info: "",
        insertId: 0,
        serverStatus: 1,
        warningStatus: 1,
      },
    ]);
  });

  it("test drizzle executeDDL string", async () => {
    vi.mocked(sql.executeDDL).mockResolvedValue({
      rows: {
        affectedRows: 0,
        fieldCount: 0,
        info: "",
        insertId: 0,
        serverStatus: 1,
        warningStatus: 1,
      },
      metadata: {
        dbExecutionTime: 1234,
        responseSize: 525,
      },
    });
    const result = await forgeSqlOperation.executeDDL<{ affectedRows: number }>(
      `CREATE TABLE users ( id INT PRIMARY KEY,  name VARCHAR(255));`,
    );
    expect(sql.executeDDL).toHaveBeenCalledWith(
      `CREATE TABLE users ( id INT PRIMARY KEY,  name VARCHAR(255));`,
    );
    expect(result).toEqual([
      {
        affectedRows: 0,
        fieldCount: 0,
        info: "",
        insertId: 0,
        serverStatus: 1,
        warningStatus: 1,
      },
    ]);
  });

  it("test drizzle selectFrom", async () => {
    const result = await forgeSqlOperation.selectFrom(testEntity);
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;

    expect(sql.prepare).toHaveBeenCalledWith(
      "select `id` as `a_id_id`, `name` as `a_name_name` from `test_entity`",
    );
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: "t" }]);
  });
  it("test drizzle selectAndTakeMetadata", async () => {
    const result = await forgeSqlOperation.executeWithMetadata(
      async () => await forgeSqlOperation.select({ id: testEntity.id }).from(testEntity),
      (
        totalDbExecutionTime: number,
        totalResponseSize: number,
        forgeMetadata: ForgeSQLMetadata,
      ) => {
        expect(totalDbExecutionTime).toEqual(1234);
        expect(totalResponseSize).toEqual(525);
        expect(forgeMetadata).toEqual({
          dbExecutionTime: 1234,
          responseSize: 525,
        });
      },
    );
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;

    expect(sql.prepare).toHaveBeenCalledWith("select `id` as `a_id_id` from `test_entity`");
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1 }]);
  });

  it("test drizzle selectFromCacheable", async () => {
    const result = await forgeSqlOperation.selectCacheableFrom(testEntity);
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;

    expect(sql.prepare).toHaveBeenCalledWith(
      "select `id` as `a_id_id`, `name` as `a_name_name` from `test_entity`",
    );
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: "t" }]);
  });

  it("test drizzle selectDistinctFrom", async () => {
    const result = await forgeSqlOperation.selectDistinctFrom(testEntity);
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;

    expect(sql.prepare).toHaveBeenCalledWith(
      "select distinct `id` as `a_id_id`, `name` as `a_name_name` from `test_entity`",
    );
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: "t" }]);
  });

  it("test drizzle selectDistinctFromCacheable", async () => {
    const result = await forgeSqlOperation.selectDistinctCacheableFrom(testEntity);
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;

    expect(sql.prepare).toHaveBeenCalledWith(
      "select distinct `id` as `a_id_id`, `name` as `a_name_name` from `test_entity`",
    );
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: "t" }]);
  });

  it("test drizzle $with Query", async () => {
    const withQuery = forgeSqlOperation.$with("withQuery").as(
      forgeSqlOperation
        .select({
          id: rawSql<number>`${testEntity.id}`.as("id"),
        })
        .from(testEntity),
    );
    const with1 = forgeSqlOperation.with(withQuery);
    const result = await with1.select({ id: withQuery.id }).from(withQuery);

    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;

    expect(sql.prepare).toHaveBeenCalledWith(
      "with `withQuery` as (select `id` as `id` from `test_entity`) select `id` from `withQuery`",
    );
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1 }]);
  });

  it("should call SQL for complex query SQL using Drizzle Query Builder", async () => {
    const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

    const query = drizzle
      .select({
        ID1: rawSql`${testDataEntity.id} as \`ID1\``,
        ID2: rawSql`${testEntity.id} as ID2`,
        dataField: testDataEntity.data,
        name: testEntity.name,
      })
      .from(testDataEntity)
      .innerJoin(testEntity, eq(testDataEntity.id, testEntity.id));
    const result = await query;
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(sql.prepare).toHaveBeenCalledWith(
      "select `test_data_entity`.`id` as `ID1`, `test_entity`.`id` as ID2, `test_data_entity`.`data`, `test_entity`.`name` from `test_data_entity` inner join `test_entity` on `test_data_entity`.`id` = `test_entity`.`id`",
    );
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([
      {
        ID1: 1,
        ID2: 2,
        dataField: "t",
        name: "Test",
      },
    ]);
  });

  it("should execute query and return single result", async () => {
    const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

    const query = drizzle
      .select({
        ID1: rawSql`${testDataEntity.id} as \`ID1\``,
        ID2: rawSql`${testEntity.id} as ID2`,
        dataField: testDataEntity.data,
        name: testEntity.name,
      })
      .from(testDataEntity)
      .innerJoin(testEntity, eq(testDataEntity.id, testEntity.id));

    const result = await forgeSqlOperation.fetch().executeQueryOnlyOne(query);

    expect(result).toEqual({
      ID1: 1,
      ID2: 2,
      dataField: "t",
      name: "Test",
    });
  });

  it("should return undefined when no results found", async () => {
    const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

    // Mock empty result
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({ rows: [] }),
        }) as any,
    );

    const query = drizzle
      .select({
        ID1: rawSql`${testDataEntity.id} as \`ID1\``,
        ID2: rawSql`${testEntity.id} as ID2`,
        dataField: testDataEntity.data,
        name: testEntity.name,
      })
      .from(testDataEntity)
      .innerJoin(testEntity, eq(testDataEntity.id, testEntity.id));

    const result = await forgeSqlOperation.fetch().executeQueryOnlyOne(query);

    expect(result).toBeUndefined();
  });

  it("should throw error when multiple results found", async () => {
    const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

    // Mock multiple results
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              { ID1: 1, ID2: 2, data: "t", name: "Test1" },
              { ID1: 3, ID2: 4, data: "t", name: "Test2" },
            ],
          }),
        }) as any,
    );

    const query = drizzle
      .select({
        ID1: rawSql`${testDataEntity.id} as \`ID1\``,
        ID2: rawSql`${testEntity.id} as ID2`,
        dataField: testDataEntity.data,
        name: testEntity.name,
      })
      .from(testDataEntity)
      .innerJoin(testEntity, eq(testDataEntity.id, testEntity.id));

    await expect(forgeSqlOperation.fetch().executeQueryOnlyOne(query)).rejects.toThrow(
      "Expected 1 record but returned 2",
    );
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
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              { name: "Test1", count: 2 },
              { name: "Test2", count: 1 },
              { name: "Test3", count: 3 },
            ],
          }),
        }) as any,
    );

    const query = drizzle
      .select({
        name: testEntity.name,
        count: rawSql`COUNT(*) as count`,
      })
      .from(testEntity)
      .groupBy(testEntity.name)
      .having(rawSql`COUNT(*) > 1`);

    const result = await query;

    expect(result).toEqual([
      {
        name: "Test1",
        count: 2,
      },
      {
        count: 1,
        name: "Test2",
      },
      { name: "Test3", count: 3 },
    ]);
  });

  it("should find duplicates in testEntity2", async () => {
    const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

    // Mock multiple results with duplicates
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              {
                name: "Test1",
                version: DateTime.fromJSDate(
                  DateTime.fromISO("2024-09-19T06:40:34.999999", { zone: "utc" }).toJSDate(),
                ).toFormat("yyyy-LL-dd'T'HH:mm:ss.SSS"),
                count: "0",
              },
              {
                name: "Test2",
                version: DateTime.fromJSDate(
                  DateTime.fromISO("2023-09-19T06:40:34.999999", { zone: "utc" }).toJSDate(),
                ).toFormat("yyyy-LL-dd'T'HH:mm:ss.SSS"),
                count: "1",
              },
              {
                name: "Test3",
                version: DateTime.fromISO("2022-09-19T06:40:34.999999", { zone: "utc" }).toJSDate(),
                count: "2",
              },
            ],
          }),
        }) as any,
    );

    const result = await drizzle
      .select({
        name: testEntityDateVersion.name,
        version: testEntityDateVersion.version,
        count: rawSql`COUNT(*) as count`,
      })
      .from(testEntityDateVersion)
      .groupBy(testEntityDateVersion.name, testEntityDateVersion.version);
    expect(result).toEqual([
      {
        count: "0",
        name: "Test1",
        version: DateTime.fromISO("2024-09-19T06:40:34.999Z", { zone: "utc" }).toJSDate(),
      },
      {
        count: "1",
        name: "Test2",
        version: DateTime.fromISO("2023-09-19T06:40:34.999Z", { zone: "utc" }).toJSDate(),
      },
      {
        count: "2",
        name: "Test3",
        version: DateTime.fromISO("2022-09-19T06:40:34.999Z", { zone: "utc" }).toJSDate(),
      },
    ]);
  });

  it("should find duplicates in testEntity without aliases", async () => {
    const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

    // Mock multiple results with duplicates
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              { name: "Test1", "COUNT(*)": 2 },
              { name: "Test2", "COUNT(*)": 1 },
              { name: "Test3", "COUNT(*)": 3 },
            ],
          }),
        }) as any,
    );

    const query = drizzle
      .select({
        name: testEntity.name,
        count: rawSql`COUNT(*)`,
      })
      .from(testEntity)
      .groupBy(testEntity.name)
      .having(rawSql`COUNT(*) > 1`);

    const result = await query;

    expect(result).toEqual([
      { name: "Test1", count: 2 },
      { name: "Test2", count: 1 },
      { name: "Test3", count: 3 },
    ]);
  });

  it("should execute query without aliases", async () => {
    const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

    // Mock result without aliases
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              { id: 1, name: "Test1", data: "t" },
              { id: 2, name: "Test2", data: "t" },
            ],
          }),
        }) as any,
    );

    const query = drizzle
      .select({
        id: testEntity.id,
        name: testEntity.name,
        data: testDataEntity.data,
      })
      .from(testEntity)
      .innerJoin(testDataEntity, eq(testEntity.id, testDataEntity.id));

    const result = await query;

    expect(result).toEqual([
      { id: 1, name: "Test1", data: "t" },
      { id: 2, name: "Test2", data: "t" },
    ]);
  });

  it("should execute inner join with the same fields", async () => {
    // Mock result without aliases
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              {
                test_entity_join1_id: 1,
                name: "Test1",
                data: "t1",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test21",
                data2: "t21",
                count: 1,
              },
              {
                test_entity_join1_id: 2,
                name: "Test2",
                data: "t2",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test22",
                data2: "t22",
                count: 2,
              },
            ],
          }),
        }) as any,
    );

    const query = forgeSqlOperation
      .select({
        table1: testEntityJoin1,
        table2: { name: testEntityJoin2.name, email: testEntityJoin2.email },
        count: rawSql<number>`COUNT(*)`,
      })
      .from(testEntityJoin1)
      .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id));

    const result = await query;
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "select `test_entity_join1`.`id` as `a_table1_test_entity_join1_id`, `test_entity_join1`.`name` as `a_table1_test_entity_join1_name`, `test_entity_join1`.`email` as `a_table1_test_entity_join1_email`, `test_entity_join1`.`custom_type` as `a_table1_test_entity_join1_custom_type`, `test_entity_join2`.`name` as `a_table2_name_name`, `test_entity_join2`.`email` as `a_table2_email_email`, COUNT(*) from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_join2`.`id`",
    );
    expect(result).toEqual([
      {
        table1: {
          id: 1,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test1",
          email: "t1",
        },
        table2: { name: "Test21", email: "t21" },
        count: 1,
      },
      {
        table1: {
          id: 2,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test2",
          email: "t2",
        },
        table2: { name: "Test22", email: "t22" },
        count: 2,
      },
    ]);
  });

  it("should execute inner join with the same fields Cacheable", async () => {
    // Mock result without aliases
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              {
                test_entity_join1_id: 1,
                name: "Test1",
                data: "t1",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test21",
                data2: "t21",
                count: 1,
              },
              {
                test_entity_join1_id: 2,
                name: "Test2",
                data: "t2",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test22",
                data2: "t22",
                count: 2,
              },
            ],
          }),
        }) as any,
    );

    const query = forgeSqlOperation
      .selectCacheable({
        table1: testEntityJoin1,
        table2: { name: testEntityJoin2.name, email: testEntityJoin2.email },
        count: rawSql<number>`COUNT(*)`,
      })
      .from(testEntityJoin1)
      .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id));

    const result = await query;

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "select `test_entity_join1`.`id` as `a_table1_test_entity_join1_id`, `test_entity_join1`.`name` as `a_table1_test_entity_join1_name`, `test_entity_join1`.`email` as `a_table1_test_entity_join1_email`, `test_entity_join1`.`custom_type` as `a_table1_test_entity_join1_custom_type`, `test_entity_join2`.`name` as `a_table2_name_name`, `test_entity_join2`.`email` as `a_table2_email_email`, COUNT(*) from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_join2`.`id`",
    );
    expect(result).toEqual([
      {
        table1: {
          id: 1,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test1",
          email: "t1",
        },
        table2: { name: "Test21", email: "t21" },
        count: 1,
      },
      {
        table1: {
          id: 2,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test2",
          email: "t2",
        },
        table2: { name: "Test22", email: "t22" },
        count: 2,
      },
    ]);
  });

  it("run inside local cache context and Return Value", async () => {
    // Mock result without aliases
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              {
                test_entity_join1_id: 1,
                name: "Test1",
                data: "t1",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test21",
                data2: "t21",
                count: 1,
              },
              {
                test_entity_join1_id: 2,
                name: "Test2",
                data: "t2",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test22",
                data2: "t22",
                count: 2,
              },
            ],
          }),
        }) as any,
    );
    const query = forgeSqlOperation
      .select({
        table1: testEntityJoin1,
        table2: { name: testEntityJoin2.name, email: testEntityJoin2.email },
        count: rawSql<number>`COUNT(*)`,
      })
      .from(testEntityJoin1)
      .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id));
    const result = await forgeSqlOperation.executeWithLocalCacheContextAndReturnValue(async () => {
      await query;
      await query;
      return await query;
    });

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledTimes(1);

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "select `test_entity_join1`.`id` as `a_table1_test_entity_join1_id`, `test_entity_join1`.`name` as `a_table1_test_entity_join1_name`, `test_entity_join1`.`email` as `a_table1_test_entity_join1_email`, `test_entity_join1`.`custom_type` as `a_table1_test_entity_join1_custom_type`, `test_entity_join2`.`name` as `a_table2_name_name`, `test_entity_join2`.`email` as `a_table2_email_email`, COUNT(*) from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_join2`.`id`",
    );
    expect(result).toEqual([
      {
        table1: {
          id: 1,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test1",
          email: "t1",
        },
        table2: { name: "Test21", email: "t21" },
        count: 1,
      },
      {
        table1: {
          id: 2,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test2",
          email: "t2",
        },
        table2: { name: "Test22", email: "t22" },
        count: 2,
      },
    ]);
  });

  it("run inside local cache context", async () => {
    // Mock result without aliases
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              {
                test_entity_join1_id: 1,
                name: "Test1",
                data: "t1",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test21",
                data2: "t21",
                count: 1,
              },
              {
                test_entity_join1_id: 2,
                name: "Test2",
                data: "t2",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test22",
                data2: "t22",
                count: 2,
              },
            ],
          }),
        }) as any,
    );
    const query = forgeSqlOperation
      .select({
        table1: testEntityJoin1,
        table2: { name: testEntityJoin2.name, email: testEntityJoin2.email },
        count: rawSql<number>`COUNT(*)`,
      })
      .from(testEntityJoin1)
      .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id));
    await forgeSqlOperation.executeWithLocalContext(async () => {
      await query;
      const result = await query;
      expect(vi.mocked(sql.prepare)).toHaveBeenCalledTimes(1);
      expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
        "select `test_entity_join1`.`id` as `a_table1_test_entity_join1_id`, `test_entity_join1`.`name` as `a_table1_test_entity_join1_name`, `test_entity_join1`.`email` as `a_table1_test_entity_join1_email`, `test_entity_join1`.`custom_type` as `a_table1_test_entity_join1_custom_type`, `test_entity_join2`.`name` as `a_table2_name_name`, `test_entity_join2`.`email` as `a_table2_email_email`, COUNT(*) from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_join2`.`id`",
      );
      expect(result).toEqual([
        {
          table1: {
            id: 1,
            customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
            name: "Test1",
            email: "t1",
          },
          table2: { name: "Test21", email: "t21" },
          count: 1,
        },
        {
          table1: {
            id: 2,
            customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
            name: "Test2",
            email: "t2",
          },
          table2: { name: "Test22", email: "t22" },
          count: 2,
        },
      ]);
    });

    expect(vi.mocked(sql.prepare)).toHaveBeenCalledTimes(1);
  });

  it("should execute inner join with the same diff fields", async () => {
    // Mock result without aliases
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              {
                id: 1,
                name: "Test1",
                date: DateTime.fromSQL("2025-04-07 18:06:21").toFormat("yyyy-LL-dd HH:mm:ss"),
                date2: DateTime.fromSQL("2025-04-07 18:06:21").toFormat("yyyy-LL-dd HH:mm:ss"),
              },
              {
                id: 1,
                name: "Test2",
                date: DateTime.fromSQL("2025-04-07 18:06:21").toFormat("yyyy-LL-dd HH:mm:ss"),
                date2: DateTime.fromSQL("2025-04-07 18:06:21").toFormat("yyyy-LL-dd HH:mm:ss"),
              },
            ],
          }),
        }) as any,
    );

    const query = forgeSqlOperation
      .select({
        table1: testEntityVersionDifferentDateField,
        table2: {
          column: testEntityVersionDifferentDateField.versionField,
        },
      })
      .from(testEntityJoin1)
      .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityVersionDifferentDateField.id));

    const result = await query;
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "select `test_entity_diff_date_version`.`id` as `a_table1_test_entity_diff_date_version_id`, `test_entity_diff_date_version`.`name` as `a_table1_test_entity_diff_date_version_name`, `test_entity_diff_date_version`.`version_different_date_field` as `a_table1_test_entity_diff_date_version_version_different_date_field`, `test_entity_diff_date_version`.`version_different_date_field` as `a_table2_column_version_different_date_field` from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_diff_date_version`.`id`",
    );
    expect(result).toEqual([
      {
        table1: {
          id: 1,
          name: "Test1",
          versionField: DateTime.fromSQL("2025-04-07 18:06:21").toJSDate(),
        },
        table2: {
          column: DateTime.fromSQL("2025-04-07 18:06:21").toJSDate(),
        },
      },
      {
        table1: {
          id: 1,
          name: "Test2",
          versionField: DateTime.fromSQL("2025-04-07 18:06:21").toJSDate(),
        },
        table2: {
          column: DateTime.fromSQL("2025-04-07 18:06:21").toJSDate(),
        },
      },
    ]);
  });

  it("should execute inner join with the same fields distinct", async () => {
    // Mock result without aliases
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              {
                test_entity_join1_id: 1,
                name: "Test1",
                data: "t1",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test21",
                data2: "t21",
                count: 1,
              },
              {
                test_entity_join1_id: 2,
                name: "Test2",
                data: "t2",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test22",
                data2: "t22",
                count: 2,
              },
            ],
          }),
        }) as any,
    );

    const query = forgeSqlOperation
      .selectDistinct({
        table1: testEntityJoin1,
        table2: { name: testEntityJoin2.name, email: testEntityJoin2.email },
        count: rawSql<number>`COUNT(*)`,
      })
      .from(testEntityJoin1)
      .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id));

    const result = await query;
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "select distinct `test_entity_join1`.`id` as `a_table1_test_entity_join1_id`, `test_entity_join1`.`name` as `a_table1_test_entity_join1_name`, `test_entity_join1`.`email` as `a_table1_test_entity_join1_email`, `test_entity_join1`.`custom_type` as `a_table1_test_entity_join1_custom_type`, `test_entity_join2`.`name` as `a_table2_name_name`, `test_entity_join2`.`email` as `a_table2_email_email`, COUNT(*) from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_join2`.`id`",
    );
    expect(result).toEqual([
      {
        table1: {
          id: 1,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test1",
          email: "t1",
        },
        table2: { name: "Test21", email: "t21" },
        count: 1,
      },
      {
        table1: {
          id: 2,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test2",
          email: "t2",
        },
        table2: { name: "Test22", email: "t22" },
        count: 2,
      },
    ]);
  });

  it("should execute inner join with the same fields distinct cacheable", async () => {
    // Mock result without aliases
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              {
                test_entity_join1_id: 1,
                name: "Test1",
                data: "t1",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test21",
                data2: "t21",
                count: 1,
              },
              {
                test_entity_join1_id: 2,
                name: "Test2",
                data: "t2",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test22",
                data2: "t22",
                count: 2,
              },
            ],
          }),
        }) as any,
    );

    const query = forgeSqlOperation
      .selectDistinctCacheable({
        table1: testEntityJoin1,
        table2: { name: testEntityJoin2.name, email: testEntityJoin2.email },
        count: rawSql<number>`COUNT(*)`,
      })
      .from(testEntityJoin1)
      .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id));

    const result = await query;
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "select distinct `test_entity_join1`.`id` as `a_table1_test_entity_join1_id`, `test_entity_join1`.`name` as `a_table1_test_entity_join1_name`, `test_entity_join1`.`email` as `a_table1_test_entity_join1_email`, `test_entity_join1`.`custom_type` as `a_table1_test_entity_join1_custom_type`, `test_entity_join2`.`name` as `a_table2_name_name`, `test_entity_join2`.`email` as `a_table2_email_email`, COUNT(*) from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_join2`.`id`",
    );
    expect(result).toEqual([
      {
        table1: {
          id: 1,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test1",
          email: "t1",
        },
        table2: { name: "Test21", email: "t21" },
        count: 1,
      },
      {
        table1: {
          id: 2,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test2",
          email: "t2",
        },
        table2: { name: "Test22", email: "t22" },
        count: 2,
      },
    ]);
  });

  it("should execute inner join with the same fields dirrect drizzle", async () => {
    // Mock result without aliases
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              {
                test_entity_join1_id: 1,
                name: "Test1",
                data: "t1",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test21",
                data2: "t21",
                count: 1,
              },
              {
                test_entity_join1_id: 2,
                name: "Test2",
                data: "t2",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test22",
                data2: "t22",
                count: 2,
              },
            ],
          }),
        }) as any,
    );

    const db = patchDbWithSelectAliased(drizzle(forgeDriver, { logger: true }));
    const query = db
      .selectAliased({
        table1: testEntityJoin1,
        table2: { name: testEntityJoin2.name, email: testEntityJoin2.email },
        count: rawSql<number>`COUNT(*)`,
      })
      .from(testEntityJoin1)
      .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id));

    const result = await query;
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "select `test_entity_join1`.`id` as `a_table1_test_entity_join1_id`, `test_entity_join1`.`name` as `a_table1_test_entity_join1_name`, `test_entity_join1`.`email` as `a_table1_test_entity_join1_email`, `test_entity_join1`.`custom_type` as `a_table1_test_entity_join1_custom_type`, `test_entity_join2`.`name` as `a_table2_name_name`, `test_entity_join2`.`email` as `a_table2_email_email`, COUNT(*) from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_join2`.`id`",
    );
    expect(result).toEqual([
      {
        table1: {
          id: 1,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test1",
          email: "t1",
        },
        table2: { name: "Test21", email: "t21" },
        count: 1,
      },
      {
        table1: {
          id: 2,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test2",
          email: "t2",
        },
        table2: { name: "Test22", email: "t22" },
        count: 2,
      },
    ]);
  });

  it("should execute inner join with the same fields dirrect drizzle distinct", async () => {
    // Mock result without aliases
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              {
                test_entity_join1_id: 1,
                name: "Test1",
                data: "t1",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test21",
                data2: "t21",
                count: 1,
              },
              {
                test_entity_join1_id: 2,
                name: "Test2",
                data: "t2",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test22",
                data2: "t22",
                count: 2,
              },
            ],
          }),
        }) as any,
    );

    const db = patchDbWithSelectAliased(drizzle(forgeDriver, { logger: true }));
    const query = db
      .selectAliasedDistinct({
        table1: testEntityJoin1,
        table2: { name: testEntityJoin2.name, email: testEntityJoin2.email },
        count: rawSql<number>`COUNT(*)`,
      })
      .from(testEntityJoin1)
      .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id));

    const result = await query;
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "select distinct `test_entity_join1`.`id` as `a_table1_test_entity_join1_id`, `test_entity_join1`.`name` as `a_table1_test_entity_join1_name`, `test_entity_join1`.`email` as `a_table1_test_entity_join1_email`, `test_entity_join1`.`custom_type` as `a_table1_test_entity_join1_custom_type`, `test_entity_join2`.`name` as `a_table2_name_name`, `test_entity_join2`.`email` as `a_table2_email_email`, COUNT(*) from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_join2`.`id`",
    );
    expect(result).toEqual([
      {
        table1: {
          id: 1,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test1",
          email: "t1",
        },
        table2: { name: "Test21", email: "t21" },
        count: 1,
      },
      {
        table1: {
          id: 2,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test2",
          email: "t2",
        },
        table2: { name: "Test22", email: "t22" },
        count: 2,
      },
    ]);
  });

  it("should execute inner join Null Check", async () => {
    // Mock result without aliases
    vi.mocked(sql.prepare).mockImplementationOnce(
      () =>
        ({
          query: "MOCK_QUERY",
          params: [],
          bindParams: vi.fn(),
          execute: vi.fn().mockResolvedValue({
            rows: [
              {
                test_entity_join1_id: 1,
                name: "Test1",
                data: "t1",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test21",
                data2: "t21",
                count: 1,
              },
              {
                test_entity_join1_id: 2,
                name: "Test2",
                data: "t2",
                uuid: {
                  type: "Buffer",
                  data: [30, 99, 207, 161, 17, 125, 64, 225, 184, 232, 63, 77, 155, 199, 209, 184],
                },
                name2: "Test22",
                data2: "t22",
                count: 2,
                table3_table12: "name",
                table3_table22: null,
              },
            ],
          }),
        }) as any,
    );

    const query = forgeSqlOperation
      .select({
        table1: testEntityJoin1,
        table2: { name: testEntityJoin2.name, email: testEntityJoin2.email },
        count: rawSql<number>`COUNT(*)`,
        table3: {
          table12: testEntityJoin1.name,
          table22: testEntityJoin2.email,
          table32: testEntity.id,
        },
      })
      .from(testEntityJoin1)
      .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id));

    const result = await query;
    expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
      "select `test_entity_join1`.`id` as `a_table1_test_entity_join1_id`, `test_entity_join1`.`name` as `a_table1_test_entity_join1_name`, `test_entity_join1`.`email` as `a_table1_test_entity_join1_email`, `test_entity_join1`.`custom_type` as `a_table1_test_entity_join1_custom_type`, `test_entity_join2`.`name` as `a_table2_name_name`, `test_entity_join2`.`email` as `a_table2_email_email`, COUNT(*), `test_entity_join1`.`name` as `a_table3_table12_name`, `test_entity_join2`.`email` as `a_table3_table22_email`, `test_entity`.`id` as `a_table3_table32_id` from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_join2`.`id`",
    );
    expect(result).toEqual([
      {
        table1: {
          id: 1,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test1",
          email: "t1",
        },
        table2: { name: "Test21", email: "t21" },
        count: 1,
        table3: null,
      },
      {
        table1: {
          id: 2,
          customType: "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8",
          name: "Test2",
          email: "t2",
        },
        table2: { name: "Test22", email: "t22" },
        count: 2,
        table3: { table12: "name", table22: null, table32: null },
      },
    ]);
  });
});

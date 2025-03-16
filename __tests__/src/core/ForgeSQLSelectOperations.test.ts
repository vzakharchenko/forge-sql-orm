import { sql } from "@forge/sql";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ForgeSQLORM from "../../../src/core/ForgeSQLORM";
import { ForgeSqlOperation } from "../../../src";
import { TestEntity, TestEntitySchema } from "../../entities/TestEntity";
import {TestDataEntity, TestDataEntitySchema} from "../../entities/TestDataEntity";
import {getValueBySchemaType, getValueByAlias} from "../../../src/utils/sqlUtils";
vi.mock("@forge/sql", () => ({
  sql: {
    prepare: vi.fn((query: string) => {
      const executeMock = vi.fn().mockResolvedValue({ rows: [{ id: 1, name: "Test", data: 't' }] });
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
    forgeSqlOperation = new ForgeSQLORM([TestEntity, TestDataEntity], { logRawSqlQuery: true });
  });

  it("should call SQL prepare and execute on executeRawSQL", async () => {
    const result = await forgeSqlOperation.fetch().executeRawSQL("SELECT * FROM test_entity");
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;

    expect(sql.prepare).toHaveBeenCalledWith("SELECT * FROM test_entity");
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, name: "Test",  data: 't'}]);
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

  it("should call SQL for complex query SQL", async () => {
    const dynamicSchemaBuilder = forgeSqlOperation.fetch().createComplexQuerySchema();
    const dynamicEntityEntitySchema = dynamicSchemaBuilder
        .addField(TestEntitySchema.meta.properties.name)
        .addField(TestEntitySchema.meta.properties.id, "ID1")
        .addField(TestDataEntitySchema.meta.properties.data, 'dataField')
        .addField(TestDataEntitySchema.meta.properties.id, 'ID2')
        .createSchema();
    const query = forgeSqlOperation
        .createQueryBuilder(TestDataEntitySchema, "ed")
        .innerJoin('ed.testEntity', 'e').select(['ID1', 'ID2', "dataField", "e.name"])
        .getQuery();
    const result = await forgeSqlOperation
      .fetch()
      .executeSchemaSQL(query, dynamicEntityEntitySchema);
    const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;
    expect(sql.prepare).toHaveBeenCalledWith("select `ed`.`ID1`, `ed`.`ID2`, `ed`.`dataField`, `e`.`name` from `test_data_entity` as `ed` inner join `test_entity` as `e` on `ed`.`test_entity_id` = `e`.`id`");
    expect(preparedStatement.execute).toHaveBeenCalled();
    expect(result).toEqual([{
      "ID1": 1,
      "ID2": 1,
      "dataField": "t",
      "name": "Test",
    }]);
    const dynamicEntity = result[0];
    expect(dynamicEntity.getSchemaByAliasField('ID1')).toEqual(1);
    expect(dynamicEntity.getSchemaByAliasField('ID2')).toEqual(1);
    expect(dynamicEntity.getSchemaByAliasField('dataField')).toEqual('t');
    expect(dynamicEntity.getSchemaBySchemaField(TestEntitySchema.meta.properties.name)).toEqual(
        'Test'
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
});

import moment from "moment";
import {sql} from "@forge/sql";
import {beforeEach, describe, expect, it, vi} from "vitest";
import {eq, sql as rawSql} from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql-proxy";
import {forgeDriver, ForgeSqlOperation, patchDbWithSelectAliased} from "../../../src";
import ForgeSQLORM from "../../../src/core/ForgeSQLORM";
import {testEntity} from "../../entities/TestEntity";
import {testDataEntity} from "../../entities/TestDataEntity";
import {testEntityDateVersion} from "../../entities/TestEntityDateVersion";
import {testEntityJoin1} from "../../entities/TestEntityJoin1";
import {testEntityJoin2} from "../../entities/TestEntityJoin2";

vi.mock("@forge/sql", () => ({
    sql: {
        prepare: vi.fn((query: string) => {
            let procedureMock = vi.fn().mockResolvedValue({rows: [{id: 1, data: 't', name: "Test"}]});
            if (query === "select `test_data_entity`.`id` as `ID1`, `test_entity`.`id` as ID2, `test_data_entity`.`data`, `test_entity`.`name` from `test_data_entity` inner join `test_entity` on `test_data_entity`.`id` = `test_entity`.`id`") {
                procedureMock = vi.fn().mockResolvedValue({rows: [{ID1: 1, ID2: 2, data: 't', name: "Test"}]});
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
        forgeSqlOperation = new ForgeSQLORM({logRawSqlQuery: true});
    });

    it("should call SQL prepare and execute on executeRawSQL", async () => {
        const result = await forgeSqlOperation.fetch().executeRawSQL("SELECT * FROM test_entity");
        const preparedStatement = vi.mocked(sql.prepare).mock.results[0].value;

        expect(sql.prepare).toHaveBeenCalledWith("SELECT * FROM test_entity");
        expect(preparedStatement.execute).toHaveBeenCalled();
        expect(result).toEqual([{id: 1, name: "Test", data: 't'}]);
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
        const result = await query;
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
            execute: vi.fn().mockResolvedValue({rows: []}),
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
                    {ID1: 1, ID2: 2, data: "t", name: "Test1"},
                    {ID1: 3, ID2: 4, data: "t", name: "Test2"}
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
                    {name: "Test1", count: 2},
                    {name: "Test2", count: 1},
                    {name: "Test3", count: 3}
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

        const result = await query

        expect(result).toEqual([{
            name: "Test1",
            count: 2
        },
            {
                count: 1,
                name: "Test2",
            },
            {name: "Test3", count: 3}
        ]);
    });

    it("should find duplicates in testEntity2", async () => {
        const drizzle = forgeSqlOperation.getDrizzleQueryBuilder();

        // Mock multiple results with duplicates
        vi.mocked(sql.prepare).mockImplementationOnce(() => ({
            query: "MOCK_QUERY",
            params: [],
            bindParams: vi.fn(),
            execute: vi.fn().mockResolvedValue({
                rows: [
                    {name: "Test1", version: moment.utc('2024-09-19 06:40:34.999999').toDate(), count: '0'},
                    {name: "Test2", version: moment.utc('2023-09-19 06:40:34.999999').toDate(), count: '1'},
                    {name: "Test3", version: moment.utc('2022-09-19 06:40:34.999999').toDate(), count: '2'}
                ]
            }),
        } as any));

        const result = await drizzle
            .select({
                name: testEntityDateVersion.name,
                version: testEntityDateVersion.version,
                count: rawSql`COUNT(*) as count`
            })
            .from(testEntityDateVersion)
            .groupBy(testEntityDateVersion.name, testEntityDateVersion.version)
        expect(result).toEqual([
            {
                "count": "0",
                "name": "Test1",
                "version": moment.utc('2024-09-19T06:40:34.999Z').toDate(),
            },
            {
                "count": "1",
                "name": "Test2",
                "version": moment.utc('2023-09-19T06:40:34.999Z').toDate(),
            },
            {
                "count": "2",
                "name": "Test3",
                "version": moment.utc('2022-09-19T06:40:34.999Z').toDate(),
            },
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
                    {name: "Test1", 'COUNT(*)': 2},
                    {name: "Test2", 'COUNT(*)': 1},
                    {name: "Test3", 'COUNT(*)': 3}
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

        const result = await query;

        expect(result).toEqual([
            {name: "Test1", 'count': 2},
            {name: "Test2", 'count': 1},
            {name: "Test3", 'count': 3}
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
                    {id: 1, name: "Test1", data: "t"},
                    {id: 2, name: "Test2", data: "t"}
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

        const result = await query

        expect(result).toEqual([
            {id: 1, name: "Test1", data: "t"},
            {id: 2, name: "Test2", data: "t"}
        ]);
    });

    it("should execute inner join with the same fields", async () => {
        // Mock result without aliases
        vi.mocked(sql.prepare).mockImplementationOnce(() => ({
            query: "MOCK_QUERY",
            params: [],
            bindParams: vi.fn(),
            execute: vi.fn().mockResolvedValue({
                rows: [
                    {test_entity_join1_id: 1, name: "Test1", data: "t1", uuid: {
                            "type": "Buffer",
                            "data": [30,99,207,161,17,125,64,225,184,232,63,77,155,199,209,184]
                        }, name2: "Test21", data2: "t21", count:1},
                    {test_entity_join1_id: 2, name: "Test2", data: "t2", uuid: {
                            "type": "Buffer",
                            "data": [30,99,207,161,17,125,64,225,184,232,63,77,155,199,209,184]
                        }, name2: "Test22", data2: "t22", count:2}
                ]
            }),
        } as any));

        const query = forgeSqlOperation.select(
            {
                table1: testEntityJoin1,
              table2: {name: testEntityJoin2.name, email: testEntityJoin2.email},
                count: rawSql<number>`COUNT(*)`
            })
            .from(testEntityJoin1)
            .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id));

        const result = await query
        expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
            "select `test_entity_join1`.`id` as `a_table1_test_entity_join1_id`, `test_entity_join1`.`name` as `a_table1_test_entity_join1_name`, `test_entity_join1`.`email` as `a_table1_test_entity_join1_email`, `test_entity_join1`.`custom_type` as `a_table1_test_entity_join1_custom_type`, `test_entity_join2`.`name` as `a_table2_name_name`, `test_entity_join2`.`email` as `a_table2_email_email`, COUNT(*) from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_join2`.`id`",
        );
        expect(result).toEqual([
            {table1: {id: 1,
                    "customType": "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8", name: "Test1", email: "t1"}, table2: {name: "Test21", email: "t21"}, count: 1},
            {table1: {id: 2,
                    "customType": "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8", name: "Test2", email: "t2"}, table2: {name: "Test22", email: "t22"}, count: 2}
        ]);
    });

    it("should execute inner join with the same fields distinct", async () => {
        // Mock result without aliases
        vi.mocked(sql.prepare).mockImplementationOnce(() => ({
            query: "MOCK_QUERY",
            params: [],
            bindParams: vi.fn(),
            execute: vi.fn().mockResolvedValue({
                rows: [
                    {test_entity_join1_id: 1, name: "Test1", data: "t1", uuid: {
                            "type": "Buffer",
                            "data": [30,99,207,161,17,125,64,225,184,232,63,77,155,199,209,184]
                        }, name2: "Test21", data2: "t21", count:1},
                    {test_entity_join1_id: 2, name: "Test2", data: "t2", uuid: {
                            "type": "Buffer",
                            "data": [30,99,207,161,17,125,64,225,184,232,63,77,155,199,209,184]
                        }, name2: "Test22", data2: "t22", count:2}
                ]
            }),
        } as any));

        const query = forgeSqlOperation.selectDistinct(
            {
                table1: testEntityJoin1,
              table2: {name: testEntityJoin2.name, email: testEntityJoin2.email},
                count: rawSql<number>`COUNT(*)`
            })
            .from(testEntityJoin1)
            .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id));

        const result = await query
        expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
            "select distinct `test_entity_join1`.`id` as `a_table1_test_entity_join1_id`, `test_entity_join1`.`name` as `a_table1_test_entity_join1_name`, `test_entity_join1`.`email` as `a_table1_test_entity_join1_email`, `test_entity_join1`.`custom_type` as `a_table1_test_entity_join1_custom_type`, `test_entity_join2`.`name` as `a_table2_name_name`, `test_entity_join2`.`email` as `a_table2_email_email`, COUNT(*) from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_join2`.`id`",
        );
        expect(result).toEqual([
            {table1: {id: 1,
                    "customType": "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8", name: "Test1", email: "t1"}, table2: {name: "Test21", email: "t21"}, count: 1},
            {table1: {id: 2,
                    "customType": "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8", name: "Test2", email: "t2"}, table2: {name: "Test22", email: "t22"}, count: 2}
        ]);
    });


    it("should execute inner join with the same fields dirrect drizzle", async () => {
        // Mock result without aliases
        vi.mocked(sql.prepare).mockImplementationOnce(() => ({
            query: "MOCK_QUERY",
            params: [],
            bindParams: vi.fn(),
            execute: vi.fn().mockResolvedValue({
                rows: [
                    {test_entity_join1_id: 1, name: "Test1", data: "t1", uuid: {
                            "type": "Buffer",
                            "data": [30,99,207,161,17,125,64,225,184,232,63,77,155,199,209,184]
                        }, name2: "Test21", data2: "t21", count:1},
                    {test_entity_join1_id: 2, name: "Test2", data: "t2", uuid: {
                            "type": "Buffer",
                            "data": [30,99,207,161,17,125,64,225,184,232,63,77,155,199,209,184]
                        }, name2: "Test22", data2: "t22", count:2}
                ]
            }),
        } as any));

        const db = patchDbWithSelectAliased(drizzle(forgeDriver, { logger: true }));
        const query = db.selectAliased(
            {
                table1: testEntityJoin1,
                table2: {name: testEntityJoin2.name, email: testEntityJoin2.email},
                count: rawSql<number>`COUNT(*)`
            })
            .from(testEntityJoin1)
            .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id));

        const result = await query
        expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
            "select `test_entity_join1`.`id` as `a_table1_test_entity_join1_id`, `test_entity_join1`.`name` as `a_table1_test_entity_join1_name`, `test_entity_join1`.`email` as `a_table1_test_entity_join1_email`, `test_entity_join1`.`custom_type` as `a_table1_test_entity_join1_custom_type`, `test_entity_join2`.`name` as `a_table2_name_name`, `test_entity_join2`.`email` as `a_table2_email_email`, COUNT(*) from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_join2`.`id`",
        );
        expect(result).toEqual([
            {table1: {id: 1,
                    "customType": "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8", name: "Test1", email: "t1"}, table2: {name: "Test21", email: "t21"}, count: 1},
            {table1: {id: 2,
                    "customType": "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8", name: "Test2", email: "t2"}, table2: {name: "Test22", email: "t22"}, count: 2}
        ]);
    });

    it("should execute inner join with the same fields dirrect drizzle distinct", async () => {
        // Mock result without aliases
        vi.mocked(sql.prepare).mockImplementationOnce(() => ({
            query: "MOCK_QUERY",
            params: [],
            bindParams: vi.fn(),
            execute: vi.fn().mockResolvedValue({
                rows: [
                    {test_entity_join1_id: 1, name: "Test1", data: "t1", uuid: {
                            "type": "Buffer",
                            "data": [30,99,207,161,17,125,64,225,184,232,63,77,155,199,209,184]
                        }, name2: "Test21", data2: "t21", count:1},
                    {test_entity_join1_id: 2, name: "Test2", data: "t2", uuid: {
                            "type": "Buffer",
                            "data": [30,99,207,161,17,125,64,225,184,232,63,77,155,199,209,184]
                        }, name2: "Test22", data2: "t22", count:2}
                ]
            }),
        } as any));

        const db = patchDbWithSelectAliased(drizzle(forgeDriver, { logger: true }));
        const query = db.selectAliasedDistinct(
            {
                table1: testEntityJoin1,
                table2: {name: testEntityJoin2.name, email: testEntityJoin2.email},
                count: rawSql<number>`COUNT(*)`
            })
            .from(testEntityJoin1)
            .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id));

        const result = await query
        expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
            "select distinct `test_entity_join1`.`id` as `a_table1_test_entity_join1_id`, `test_entity_join1`.`name` as `a_table1_test_entity_join1_name`, `test_entity_join1`.`email` as `a_table1_test_entity_join1_email`, `test_entity_join1`.`custom_type` as `a_table1_test_entity_join1_custom_type`, `test_entity_join2`.`name` as `a_table2_name_name`, `test_entity_join2`.`email` as `a_table2_email_email`, COUNT(*) from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_join2`.`id`",
        );
        expect(result).toEqual([
            {table1: {id: 1,
                    "customType": "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8", name: "Test1", email: "t1"}, table2: {name: "Test21", email: "t21"}, count: 1},
            {table1: {id: 2,
                    "customType": "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8", name: "Test2", email: "t2"}, table2: {name: "Test22", email: "t22"}, count: 2}
        ]);
    });



    it("should execute inner join Null Check", async () => {
        // Mock result without aliases
        vi.mocked(sql.prepare).mockImplementationOnce(() => ({
            query: "MOCK_QUERY",
            params: [],
            bindParams: vi.fn(),
            execute: vi.fn().mockResolvedValue({
                rows: [
                    {test_entity_join1_id: 1, name: "Test1", data: "t1", uuid: {
                            "type": "Buffer",
                            "data": [30,99,207,161,17,125,64,225,184,232,63,77,155,199,209,184]
                        }, name2: "Test21", data2: "t21", count:1},
                    {test_entity_join1_id: 2, name: "Test2", data: "t2", uuid: {
                            "type": "Buffer",
                            "data": [30,99,207,161,17,125,64,225,184,232,63,77,155,199,209,184]
                        }, name2: "Test22", data2: "t22", count:2, "table3_table12": 'name', "table3_table22": null }
                ]
            }),
        } as any));

        const query = forgeSqlOperation.select(
            {
                table1: testEntityJoin1,
                table2: {name: testEntityJoin2.name, email: testEntityJoin2.email},
                count: rawSql<number>`COUNT(*)`,
                table3: {
                    table12: testEntityJoin1.name,
                    table22: testEntityJoin2.email,
                    table32: testEntity.id
                },

            })
            .from(testEntityJoin1)
            .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id));

        const result = await query
        expect(vi.mocked(sql.prepare)).toHaveBeenCalledWith(
            "select `test_entity_join1`.`id` as `a_table1_test_entity_join1_id`, `test_entity_join1`.`name` as `a_table1_test_entity_join1_name`, `test_entity_join1`.`email` as `a_table1_test_entity_join1_email`, `test_entity_join1`.`custom_type` as `a_table1_test_entity_join1_custom_type`, `test_entity_join2`.`name` as `a_table2_name_name`, `test_entity_join2`.`email` as `a_table2_email_email`, COUNT(*), `test_entity_join1`.`name` as `a_table3_table12_name`, `test_entity_join2`.`email` as `a_table3_table22_email`, `test_entity`.`id` as `a_table3_table32_id` from `test_entity_join1` inner join `test_entity_join2` on `test_entity_join1`.`id` = `test_entity_join2`.`id`",
        );
        expect(result).toEqual([
            {table1: {id: 1,
                    "customType": "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8", name: "Test1", email: "t1"}, table2: {name: "Test21", email: "t21"}, count: 1, "table3": null,},
            {table1: {id: 2,
                    "customType": "1e63cfa1-117d-40e1-b8e8-3f4d9bc7d1b8", name: "Test2", email: "t2"}, table2: {name: "Test22", email: "t22"}, count: 2, table3: {table12: 'name', table22: null,table32: null} }
        ]);
    });
});

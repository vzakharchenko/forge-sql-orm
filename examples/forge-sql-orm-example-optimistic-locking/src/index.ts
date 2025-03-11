import Resolver from "@forge/resolver";
import ForgeSQL from "forge-sql-orm";
import {migrationRunner, sql} from "@forge/sql";
import migration from "./migration";
import ENTITIES from "./entities";
import {EntitySchema} from "@mikro-orm/core";
import {TestData, TestDataSchema} from "./entities/TestData";
import {TestDataOptimisticNumber, TestDataOptimisticNumberSchema} from "./entities/TestDataOptimisticNumber";
import {TestDataOptimisticDate, TestDataOptimisticDateSchema} from "./entities/TestDataOptimisticDate";
import {TestDataOptimisticTimestamp, TestDataOptimisticTimestampSchema} from "./entities/TestDataOptimisticTimestamp";

const resolver = new Resolver();
const forgeSQL = new ForgeSQL(ENTITIES, {logRawSqlQuery: true});

type CreatedResponseDataType = { id: number, testDateColumn: Date, testNameColumn: string, version: number|Date };

type CreatedResponse = {
    testDataId: CreatedResponseDataType,
    testDataOptimisticNumberId: CreatedResponseDataType,
    testDataOptimisticDateId: CreatedResponseDataType,
    testDataOptimisticTimeStampId: CreatedResponseDataType
};

const createIfNotExists = async <T extends object>(schema: EntitySchema<T>): Promise<CreatedResponseDataType> => {
    const data = await forgeSQL.fetch().executeSchemaSQLOnlyOne<T>(forgeSQL.createQueryBuilder(schema).select("*").getFormattedQuery(), schema);
    if (data) {
        return (data as CreatedResponseDataType);
    } else {
        let testDateColumn = new Date();
        let testNameColumn = 'test ' + schema.meta.tableName;
        await forgeSQL.crud().insert<T>(schema, [{
            id: 1,
            testDateColumn: testDateColumn,
            testNameColumn: testNameColumn
        } as T]);
        const newData = (await forgeSQL.fetch().executeSchemaSQLOnlyOne<T>(forgeSQL.createQueryBuilder(schema).select("*").getFormattedQuery(), schema)) as CreatedResponseDataType
        return {id: newData.id, testDateColumn:newData.testDateColumn, testNameColumn: newData.testNameColumn, version: newData.version};
    }
}

resolver.define("fetchOrCreateIfNotExists", async (): Promise<CreatedResponse> => {
    return {
        testDataId: await createIfNotExists(TestDataSchema),
        testDataOptimisticNumberId: await createIfNotExists(TestDataOptimisticNumberSchema),
        testDataOptimisticDateId: await createIfNotExists(TestDataOptimisticDateSchema),
        testDataOptimisticTimeStampId: await createIfNotExists(TestDataOptimisticTimestampSchema),
    };
});

resolver.define("clearAll", async (req): Promise<void> => {
   const {
       testDataId,
       testDataOptimisticNumberId,
       testDataOptimisticDateId,
       testDataOptimisticTimeStampId,
   } = req.payload as {
       testDataId:number,
       testDataOptimisticNumberId:number,
       testDataOptimisticDateId:number,
       testDataOptimisticTimeStampId:number,
   };
   if (testDataId) {
       await forgeSQL.crud().deleteById(testDataId, TestDataSchema);
   }
   if (testDataOptimisticNumberId) {
       await forgeSQL.crud().deleteById(testDataOptimisticNumberId, TestDataOptimisticNumberSchema);
   }
   if (testDataOptimisticTimeStampId) {
       await forgeSQL.crud().deleteById(testDataOptimisticTimeStampId, TestDataOptimisticTimestampSchema);
   }
   if (testDataOptimisticDateId) {
       await forgeSQL.crud().deleteById(testDataOptimisticDateId, TestDataOptimisticDateSchema);
   }
});

resolver.define("update", async (req): Promise<string> => {
    try {
        const {objectName, data} = req.payload;
        console.log('data='+JSON.stringify(data))
        switch (objectName) {
            case 'WITHOUT_VERSIONING': {
                await forgeSQL.crud().updateById(data as TestData, TestDataSchema)
                return 'SUCCESS';
            }
            case "OPTIMISTIC_NUMBER": {
                await forgeSQL.crud().updateById(data as TestDataOptimisticNumber, TestDataOptimisticNumberSchema)
                return 'SUCCESS';
            }
            case "OPTIMISTIC_DATE": {
                await forgeSQL.crud().updateById(data as TestDataOptimisticDate, TestDataOptimisticDateSchema)
                return 'SUCCESS';
            }
            case "OPTIMISTIC_TIMESTAMP": {
                await forgeSQL.crud().updateById(data as TestDataOptimisticTimestamp, TestDataOptimisticTimestampSchema)
                return 'SUCCESS';
            }
            default: {
                throw new Error('unsupported ' + objectName);
            }
        }
    } catch (e) {
        console.error(e.message, e);
        return e.message
    }

});

export const handler = resolver.getDefinitions();

export const handlerMigration = async () => {
    try {
        console.log("Provisioning the database");
        await sql._provision();

        console.info("Running schema migrations");
        const migrations = await migration(migrationRunner);
        const successfulMigrations = await migrations.run();
        console.info("Migrations applied:", successfulMigrations);

        const migrationHistory = (await migrationRunner.list())
            .map((y) => `${y.id}, ${y.name}, ${y.migratedAt.toUTCString()}`)
            .join("\n");

        console.info("Migrations history:\nid, name, migrated_at\n", migrationHistory);

        return {
            headers: {"Content-Type": ["application/json"]},
            statusCode: 200,
            statusText: "OK",
            body: "Migrations successfully executed",
        };
    } catch (e) {
        console.error(JSON.stringify(e))
    }

};

import Resolver from "@forge/resolver";
import ForgeSQL from "forge-sql-orm";
import migration from "./migration";
import { AnyMySqlTable } from "drizzle-orm/mysql-core";
import { InferInsertModel } from "drizzle-orm";
import { getTableMetadata, dropSchemaMigrations, applySchemaMigrations } from "forge-sql-orm";
import * as schema from './entities/schema'
import {
  additionalMetadata,
  testData,
  testDataOptimisticDate,
  testDataOptimisticNumber,
  testDataOptimisticTimestamp,
} from "./entities";

const resolver = new Resolver();
const forgeSQL = new ForgeSQL({ logRawSqlQuery: true, additionalMetadata: additionalMetadata });

type CreatedResponseDataType = {
  id: number;
  testDateColumn: Date;
  testNameColumn: string;
  version: number | Date;
};

type CreatedResponse = {
  testDataId: CreatedResponseDataType;
  testDataOptimisticNumberId: CreatedResponseDataType;
  testDataOptimisticDateId: CreatedResponseDataType;
  testDataOptimisticTimeStampId: CreatedResponseDataType;
};

const createIfNotExists = async <T extends AnyMySqlTable>(
  schema: T,
): Promise<CreatedResponseDataType> => {
  const { tableName } = getTableMetadata(schema);

  let selectQuery = forgeSQL.getDrizzleQueryBuilder().select().from(schema);
  const data = await forgeSQL.fetch().executeQueryOnlyOne(selectQuery);
  if (data) {
    return data as CreatedResponseDataType;
  } else {
    let testDateColumn = new Date();
    let testNameColumn = "test " + tableName;
    await forgeSQL.crud().insert<T>(schema, [
      {
        id: 1,
        testDateColumn: testDateColumn,
        testNameColumn: testNameColumn,
      } as InferInsertModel<typeof schema>,
    ]);
    const newData = (await forgeSQL
      .fetch()
      .executeQueryOnlyOne(selectQuery)) as CreatedResponseDataType;
    return {
      id: newData.id,
      testDateColumn: newData.testDateColumn,
      testNameColumn: newData.testNameColumn,
      version: newData.version,
    };
  }
};

resolver.define("fetchOrCreateIfNotExists", async (): Promise<CreatedResponse> => {
  let newVar = {
    testDataId: await createIfNotExists(testData),
    testDataOptimisticNumberId: await createIfNotExists(testDataOptimisticNumber),
    testDataOptimisticDateId: await createIfNotExists(testDataOptimisticDate),
    testDataOptimisticTimeStampId: await createIfNotExists(testDataOptimisticTimestamp),
  };
  return newVar;
});

resolver.define("clearAll", async (req): Promise<void> => {
  const {
    testDataId,
    testDataOptimisticNumberId,
    testDataOptimisticDateId,
    testDataOptimisticTimeStampId,
  } = req.payload as {
    testDataId: number;
    testDataOptimisticNumberId: number;
    testDataOptimisticDateId: number;
    testDataOptimisticTimeStampId: number;
  };
  if (testDataId) {
    await forgeSQL.crud().deleteById(testDataId, testData);
  }
  if (testDataOptimisticNumberId) {
    await forgeSQL.crud().deleteById(testDataOptimisticNumberId, testDataOptimisticNumber);
  }
  if (testDataOptimisticTimeStampId) {
    await forgeSQL.crud().deleteById(testDataOptimisticTimeStampId, testDataOptimisticTimestamp);
  }
  if (testDataOptimisticDateId) {
    await forgeSQL.crud().deleteById(testDataOptimisticDateId, testDataOptimisticDate);
  }
});

resolver.define("update", async (req): Promise<string> => {
  try {
    const { objectName, data } = req.payload;
    switch (objectName) {
      case "WITHOUT_VERSIONING": {
        await forgeSQL.crud().updateById(data as InferInsertModel<typeof testData>, testData);
        return "SUCCESS";
      }
      case "OPTIMISTIC_NUMBER": {
        await forgeSQL
          .crud()
          .updateById(
            data as InferInsertModel<typeof testDataOptimisticNumber>,
            testDataOptimisticNumber,
          );
        return "SUCCESS";
      }
      case "OPTIMISTIC_DATE": {
        await forgeSQL
          .crud()
          .updateById(
            data as InferInsertModel<typeof testDataOptimisticDate>,
            testDataOptimisticDate,
          );
        return "SUCCESS";
      }
      case "OPTIMISTIC_TIMESTAMP": {
        await forgeSQL
          .crud()
          .updateById(
            data as InferInsertModel<typeof testDataOptimisticTimestamp>,
            testDataOptimisticTimestamp,
          );
        return "SUCCESS";
      }
      default: {
        throw new Error("unsupported " + objectName);
      }
    }
  } catch (e) {
    console.error(e.message, e);
    return e.message;
  }
});

export const handler = resolver.getDefinitions();

export const handlerMigration = async () => {
  return applySchemaMigrations(migration)
};

export const dropMigrations = () =>{
  return dropSchemaMigrations(Object.values(schema));
}


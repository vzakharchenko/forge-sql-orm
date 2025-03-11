import { EntitySchema } from '@mikro-orm/core';

export class TestDataOptimisticTimestamp {
  id!: number;
  testDateColumn?: Date;
  testNameColumn?: string;
  version?: Date;
}

export const TestDataOptimisticTimestampSchema = new EntitySchema({
  class: TestDataOptimisticTimestamp,
  tableName: 'test_data_optimistic_timestamp',
  properties: {
    id: { primary: true, type: 'integer', unsigned: false },
    testDateColumn: {
      type: 'datetime',
      fieldName: 'test_date_column',
      nullable: true,
    },
    testNameColumn: {
      type: 'string',
      fieldName: 'test_name_column',
      length: 100,
      nullable: true,
    },
    version: { type: 'datetime', columnType: 'timestamp', nullable: false, version:true },
  },
});

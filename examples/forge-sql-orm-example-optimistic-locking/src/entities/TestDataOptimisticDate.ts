import { EntitySchema } from '@mikro-orm/core';

export class TestDataOptimisticDate {
  id!: number;
  testDateColumn?: Date;
  version!: Date;
  testNameColumn_?: string;
}

export const TestDataOptimisticDateSchema = new EntitySchema({
  class: TestDataOptimisticDate,
  tableName: 'test_data_optimistic_date',
  properties: {
    id: { primary: true, type: 'integer', unsigned: false },
    testDateColumn: {
      type: 'datetime',
      fieldName: 'test_date_column',
      nullable: true,
    },
    version: { type: 'datetime', version: true },
    testNameColumn_: {
      type: 'string',
      fieldName: 'test_name_column',
      nullable: true,
    },
  },
});

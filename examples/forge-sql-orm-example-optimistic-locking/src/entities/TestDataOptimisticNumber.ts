import { EntitySchema } from '@mikro-orm/core';

export class TestDataOptimisticNumber {
  id!: number;
  testDateColumn?: Date;
  testNameColumn?: string;
  version!: number;
}

export const TestDataOptimisticNumberSchema = new EntitySchema({
  class: TestDataOptimisticNumber,
  tableName: 'test_data_optimistic_number',
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
    version: { type: 'integer', version: true },
  },
});

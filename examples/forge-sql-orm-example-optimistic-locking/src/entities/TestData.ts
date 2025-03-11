import { EntitySchema } from '@mikro-orm/core';

export class TestData {
  id!: number;
  testDateColumn?: Date;
  testNameColumn?: string;
}

export const TestDataSchema = new EntitySchema({
  class: TestData,
  tableName: 'test_data',
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
  },
});

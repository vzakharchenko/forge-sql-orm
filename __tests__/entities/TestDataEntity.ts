import { EntitySchema } from "../../src";
import {TestEntity} from "./TestEntity";

export class TestDataEntity {
  id!: number;
  data?: string;
  testEntity!: TestEntity;
}

export const TestDataEntitySchema = new EntitySchema({
  class: TestDataEntity,
  properties: {
    id: { primary: true, type: "integer", unsigned: false, autoincrement: false, index: 'fkid' },
    data: { type: "string", nullable: true },
    testEntity: {
      kind: 'm:1',
      entity: () => TestEntity,
      // fieldName: 'id',
      index: 'fk_entry_id',
    },
  },
});

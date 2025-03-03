import { EntitySchema } from "../../src";

export class TestEntity {
  id!: number;
  name?: string;
}

export const TestEntitySchema = new EntitySchema({
  class: TestEntity,
  properties: {
    id: { primary: true, type: "integer", unsigned: false, autoincrement: false },
    name: { type: "string", nullable: true },
  },
});

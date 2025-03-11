import { EntitySchema } from "../../src";

export class TestEntityVersion {
  id!: number;
  name?: string;
  version!: number;
}

export const TestEntityVersionSchema = new EntitySchema({
  class: TestEntityVersion,
  properties: {
    id: { primary: true, type: "integer", unsigned: false, autoincrement: false },
    name: { type: "string", nullable: true },
    version: { type: "integer", nullable: false, version: true },
  },
});

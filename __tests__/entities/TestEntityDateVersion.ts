import { EntitySchema } from "../../src";

export class TestEntityDateVersion {
  id!: number;
  name?: string;
  version!: Date;
}

export const TestEntityDateVersionSchema = new EntitySchema({
  class: TestEntityDateVersion,
  properties: {
    id: { primary: true, type: "integer", unsigned: false, autoincrement: false },
    name: { type: "string", nullable: true },
    version: { type: "datetime", nullable: false, version: true },
  },
});

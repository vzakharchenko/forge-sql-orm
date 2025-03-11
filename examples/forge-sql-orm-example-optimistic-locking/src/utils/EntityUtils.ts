import { EntitySchema } from "@mikro-orm/core";

export class DuplicateResult {
  count!: number;
  name!: string;
  email!: string;
}

export const createDuplicateSchema = (): EntitySchema<DuplicateResult> => {
  const entitySchema = new EntitySchema<DuplicateResult>({
    class: DuplicateResult,
    properties: {
      name: { type: "string", length: 200, nullable: true },
      email: { type: "string", nullable: true },
      count: { type: "integer" },
    },
  });

  entitySchema.init();
  return entitySchema;
};

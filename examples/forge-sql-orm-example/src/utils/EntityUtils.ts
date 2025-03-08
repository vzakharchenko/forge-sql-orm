import { UsersSchema } from "../entities/Users";
import { EntitySchema, EntityProperty } from "@mikro-orm/core";

export class DuplicateResult {
  [key: string]: any;
}

export const createDuplicateSchema = (): EntitySchema<DuplicateResult> => {
  const duplicateProperties: Record<string, EntityProperty<DuplicateResult>> = {
    count: { type: "integer" } as EntityProperty<DuplicateResult>,
  };

  UsersSchema.meta.props
    .filter(
      (p) =>
        p.kind === "scalar" &&
        (!p.index || (typeof p.index === "string" && p.index.startsWith("fk"))) &&
        !p.primary,
    )
    .forEach((p) => {
      duplicateProperties[p.name] = { ...p } as EntityProperty<DuplicateResult>;
    });

  const entitySchema = new EntitySchema<DuplicateResult>({
    class: DuplicateResult,
    properties: duplicateProperties,
  });

  entitySchema.init();
  return entitySchema;
};

import { UsersSchema } from "../entities/Users";
import { EntitySchema, EntityProperty } from "@mikro-orm/core";
import {ForgeSqlOperation} from "../../../../src";
import {DynamicEntity} from "../../../../src/core/ComplexQuerySchemaBuilder";

export const createDuplicateSchema = (forgeSQL: ForgeSqlOperation): EntitySchema<DynamicEntity> => {

  const schemaBuilder = forgeSQL.fetch().createComplexQuerySchema();
  schemaBuilder.addField({name: 'count',  type: "integer" });

  UsersSchema.meta.props
    .filter(
      (p) =>
        p.kind === "scalar" &&
        (!p.index || (typeof p.index === "string" && p.index.startsWith("fk"))) &&
        !p.primary,
    )
    .forEach((p) => {
      schemaBuilder.addField(p);
    });
  return schemaBuilder.createSchema();
};

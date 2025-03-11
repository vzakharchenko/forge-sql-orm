import { EntityProperty } from "@mikro-orm/core";
import { MetadataProperties } from "./Constants";

export const getMetadata = (
  props: EntityProperty<any, unknown>[],
  filter?: (prop: EntityProperty<any, unknown>) => boolean,
): MetadataProperties => {
  return props
    .filter((p) => p.kind === "scalar" && !p.primary && (!filter || filter(p)))
    .reduce<MetadataProperties>((acc, p) => {
      acc[p.name] = { name: p.name, type: p.type };
      return acc;
    }, {});
};

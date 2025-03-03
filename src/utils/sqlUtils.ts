import { types } from "@mikro-orm/core/types";
import moment from "moment";
import { AnyString } from "@mikro-orm/core/typings";

export const transformValue = (value: {
  type: keyof typeof types | AnyString;
  value: unknown;
}): unknown => {
  switch (value.type) {
    case "text":
    case "string":
      return `'${value.value}'`;
    case "datetime":
      return `'${moment(value.value as Date).format("YYYY-MM-DDTHH:mm:ss.SSS")}'`;
    case "date":
      return `'${moment(value.value as Date).format("YYYY-MM-DD")}'`;
    case "time":
      return `'${moment(value.value as Date).format("HH:mm:ss.SSS")}'`;
    default:
      return value.value;
  }
};
export const parseDateTime = (value: string, format: string): Date => {
  return moment(value, format).toDate();
};

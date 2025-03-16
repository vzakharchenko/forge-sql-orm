import moment from "moment";
import { AnyString } from "@mikro-orm/core/typings";
import {types} from "..";

const wrapIfNeeded=(data:string, wrap:boolean):string => {
  return wrap?`'${data}'`:data;
}

export const transformValue = <U>(value: {
  type: keyof typeof types | AnyString;
  value: U;
}, wrapValue: boolean = false): U => {
  switch (value.type) {
    case "text":
    case "string":
      return <U>wrapIfNeeded(`${value.value}`,wrapValue);
    case "datetime":
      return <U>wrapIfNeeded(`${moment(value.value as Date).format("YYYY-MM-DDTHH:mm:ss.SSS")}`,wrapValue);
    case "date":
      return <U>wrapIfNeeded(`${moment(value.value as Date).format("YYYY-MM-DD")}`, wrapValue);
    case "time":
      return <U>wrapIfNeeded(`${moment(value.value as Date).format("HH:mm:ss.SSS")}`,wrapValue);
    default:
      return value.value;
  }
};

export const parseDateTime = (value: string, format: string): Date => {
  const m = moment(value, format, true);
  if (!m.isValid()) {
    return moment(value).toDate();
  }
  return m.toDate();
};

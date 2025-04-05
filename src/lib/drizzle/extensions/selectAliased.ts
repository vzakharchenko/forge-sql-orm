import { MySqlRemoteDatabase } from "drizzle-orm/mysql-proxy";
import type { SelectedFields } from "drizzle-orm/mysql-core/query-builders/select.types";
import { applyFromDriverTransform, mapSelectFieldsWithAlias } from "../../..";
import { MySqlSelectBuilder } from "drizzle-orm/mysql-core";
import { MySqlRemotePreparedQueryHKT } from "drizzle-orm/mysql-proxy";

function createAliasedSelectBuilder<TSelection extends SelectedFields>(
  db: MySqlRemoteDatabase<any>,
  fields: TSelection,
  selectFn: (selections: any) => MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>,
): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT> {
  const { selections, aliasMap } = mapSelectFieldsWithAlias(fields);
  const builder = selectFn(selections);

  const wrapBuilder = (rawBuilder: any): any => {
    return new Proxy(rawBuilder, {
      get(target, prop, receiver) {
        if (prop === "execute") {
          return async (...args: any[]) => {
            const rows = await target.execute(...args);
            return applyFromDriverTransform(rows, selections, aliasMap);
          };
        }

        if (prop === "then") {
          return (onfulfilled: any, onrejected: any) =>
            target.execute().then((rows: unknown[]) => {
              const transformed = applyFromDriverTransform(rows, selections, aliasMap);
              return onfulfilled?.(transformed);
            }, onrejected);
        }

        const value = Reflect.get(target, prop, receiver);

        if (typeof value === "function") {
          return (...args: any[]) => {
            const result = value.apply(target, args);

            if (typeof result === "object" && result !== null && "execute" in result) {
              return wrapBuilder(result);
            }

            return result;
          };
        }

        return value;
      },
    });
  };

  return wrapBuilder(builder);
}

export function patchDbWithSelectAliased(db: MySqlRemoteDatabase<any>): MySqlRemoteDatabase<any> & {
  selectAliased: <TSelection extends SelectedFields>(
    fields: TSelection,
  ) => MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;
  selectAliasedDistinct: <TSelection extends SelectedFields>(
    fields: TSelection,
  ) => MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;
} {
  db.selectAliased = function <TSelection extends SelectedFields>(fields: TSelection) {
    return createAliasedSelectBuilder(db, fields, (selections) => db.select(selections));
  };

  db.selectAliasedDistinct = function <TSelection extends SelectedFields>(fields: TSelection) {
    return createAliasedSelectBuilder(db, fields, (selections) => db.selectDistinct(selections));
  };

  return db;
}

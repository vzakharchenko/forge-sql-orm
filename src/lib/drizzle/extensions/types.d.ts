import { SelectedFields } from 'drizzle-orm';
import {MySqlSelectBuilder} from "drizzle-orm/mysql-core";
import {MySqlRemotePreparedQueryHKT} from "drizzle-orm/mysql-proxy";

declare module 'drizzle-orm/mysql-proxy' {
    interface MySqlRemoteDatabase<> {
        selectAliased<TSelection extends SelectedFields>(
            fields: TSelection,
        ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;
        selectAliasedDistinct<TSelection extends SelectedFields>(
            fields: TSelection,
        ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;
    }
}
import { forgeDateTimeString } from "forge-sql-orm";

import { mysqlTable, primaryKey, varchar, json } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const issueCheckList = mysqlTable("issue_check_list", {
	issueId: varchar("issue_id", { length: 255 }).notNull(),
	checkList: json("check_list").notNull(),
	updatedAt: forgeDateTimeString('updated_at').default(sql`(now())`).notNull(),
	updateId: varchar("update_id", { length: 255 }).notNull(),
	updateDisplayName: varchar("update_display_name", { length: 255 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.issueId], name: "issue_check_list_issue_id"}),
]);

import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  return migrationRunner.enqueue(
    "v1_MIGRATION0",
    "CREATE TABLE `issue_check_list` ( `issue_id` varchar(255) NOT NULL, `check_list` json NOT NULL, `updated_at` datetime NOT NULL DEFAULT (now()), `update_id` varchar(255) NOT NULL, `update_display_name` varchar(255) NOT NULL, CONSTRAINT `issue_check_list_issue_id` PRIMARY KEY(`issue_id`) )",
  );
};

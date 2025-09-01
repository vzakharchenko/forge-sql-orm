import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  return migrationRunner
    .enqueue(
      "v1_MIGRATION0",
      "CREATE TABLE `test_data` ( `id` int AUTO_INCREMENT NOT NULL, `test_date_column` datetime, `test_name_column` varchar(100), CONSTRAINT `test_data_id` PRIMARY KEY(`id`) )",
    )
    .enqueue(
      "v1_MIGRATION1",
      "CREATE TABLE `test_data_optimistic_date` ( `id` int AUTO_INCREMENT NOT NULL, `test_date_column` datetime, `version` datetime NOT NULL, `test_name_column` varchar(255), CONSTRAINT `test_data_optimistic_date_id` PRIMARY KEY(`id`) )",
    )
    .enqueue(
      "v1_MIGRATION2",
      "CREATE TABLE `test_data_optimistic_number` ( `id` int AUTO_INCREMENT NOT NULL, `test_date_column` datetime, `test_name_column` varchar(100), `version` int NOT NULL, CONSTRAINT `test_data_optimistic_number_id` PRIMARY KEY(`id`) )",
    )
    .enqueue(
      "v1_MIGRATION3",
      "CREATE TABLE `test_data_optimistic_timestamp` ( `id` int AUTO_INCREMENT NOT NULL, `test_date_column` datetime, `test_name_column` varchar(100), `version` timestamp NOT NULL, CONSTRAINT `test_data_optimistic_timestamp_id` PRIMARY KEY(`id`) )",
    );
};

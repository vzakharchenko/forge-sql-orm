import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  return migrationRunner.enqueue(
    "v1_MIGRATION0",
    "CREATE TABLE `test_example_table` ( `id` int AUTO_INCREMENT NOT NULL, `name` varchar(200), `email` varchar(200), CONSTRAINT `test_example_table_id` PRIMARY KEY(`id`) )",
  );
};

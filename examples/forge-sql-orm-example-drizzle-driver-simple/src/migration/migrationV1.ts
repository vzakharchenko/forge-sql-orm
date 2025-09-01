import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  return migrationRunner.enqueue(
    "v1_MIGRATION0",
    "CREATE TABLE `users` ( `id` int AUTO_INCREMENT NOT NULL, `name` varchar(200), `email` varchar(255), CONSTRAINT `users_id` PRIMARY KEY(`id`) )",
  );
};

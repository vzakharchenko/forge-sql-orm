import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  return migrationRunner.enqueue(
    "v1_MIGRATION0",
    "create table `users` (`id` int not null auto_increment primary key, `name` varchar(200) null, `email` varchar(200) null)",
  );
};

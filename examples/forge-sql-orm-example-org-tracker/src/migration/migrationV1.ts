import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  return migrationRunner
    .enqueue("v1_MIGRATION0", "DROP SEQUENCE IF EXISTS user_id_seq")
    .enqueue("v1_MIGRATION1", "CREATE SEQUENCE IF NOT EXISTS user_id_seq NOCACHE")
    .enqueue(
      "v1_MIGRATION2",
      "CREATE TABLE `app_user` ( `id` int NOT NULL DEFAULT (NEXTVAL(`user_id_seq`)), `name` varchar(255) NOT NULL, `organization_id` int NOT NULL, CONSTRAINT `app_user_id` PRIMARY KEY(`id`) )",
    )
    .enqueue(
      "v1_MIGRATION3",
      "CREATE TABLE `organization` ( `id` int NOT NULL, `name` varchar(255) NOT NULL, CONSTRAINT `organization_id` PRIMARY KEY(`id`) )",
    )
    .enqueue(
      "v1_MIGRATION4",
      "ALTER TABLE `app_user` ADD CONSTRAINT `app_user_organization_id_organization_id_fk` FOREIGN KEY (`organization_id`) REFERENCES `organization`(`id`) ON DELETE no action ON UPDATE no action",
    )
    .enqueue(
      "v1_MIGRATION5",
      "INSERT INTO organization (id, name) VALUES\n" +
        "  (1,'Acme Corp'),\n" +
        "  (2,'Globex Inc'),\n" +
        "  (3,'Initech'),\n" +
        "  (4,'Umbrella LLC');",
    );
};

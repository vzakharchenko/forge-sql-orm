import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  return migrationRunner
    .enqueue(
      "v1_MIGRATION0",
      "CREATE TABLE `demo_orders` ( `id` int AUTO_INCREMENT NOT NULL, `user_id` int NOT NULL, `product` varchar(100) NOT NULL, `created_at` timestamp, CONSTRAINT `demo_orders_id` PRIMARY KEY(`id`) )",
    )
    .enqueue(
      "v1_MIGRATION1",
      "CREATE TABLE `demo_users` ( `id` int AUTO_INCREMENT NOT NULL, `name` varchar(100) NOT NULL, CONSTRAINT `demo_users_id` PRIMARY KEY(`id`) )",
    )
    .enqueue(
      "v1_MIGRATION2",
      "ALTER TABLE `demo_orders` ADD CONSTRAINT `demo_orders_user_id_demo_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `demo_users`(`id`) ON DELETE no action ON UPDATE no action",
    )
    .enqueue("v1_MIGRATION3", "CREATE INDEX `user_id` ON `demo_orders` (`user_id`)");
};

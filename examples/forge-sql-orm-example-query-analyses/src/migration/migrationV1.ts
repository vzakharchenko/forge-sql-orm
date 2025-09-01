import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  return migrationRunner
    .enqueue(
      "v1_MIGRATION0",
      "CREATE TABLE `category` ( `id` varbinary(16) NOT NULL, `name` varchar(255) NOT NULL, `created_at` timestamp NOT NULL DEFAULT (now()) )",
    )
    .enqueue(
      "v1_MIGRATION1",
      "CREATE TABLE `order_item` ( `id` varbinary(16) NOT NULL, `product_id` varbinary(16) NOT NULL, `product_name` varchar(255) NOT NULL, `quantity` int NOT NULL, `created_at` timestamp NOT NULL DEFAULT (now()) )",
    )
    .enqueue(
      "v1_MIGRATION2",
      "CREATE TABLE `product` ( `id` varbinary(16) NOT NULL, `name` varchar(255) NOT NULL, `category_id` varbinary(16) NOT NULL, `category_name` varchar(255) NOT NULL, `created_at` timestamp NOT NULL DEFAULT (now()) )",
    );
};

import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
  return migrationRunner
    .enqueue("sample users", "INSERT INTO demo_users (id, name) VALUES (1, 'Alice'), (2, 'Bob');")
    .enqueue(
      "sample orders",
      "INSERT INTO demo_orders (user_id, product) \n" +
        "VALUES \n" +
        "    (1, 'Laptop'),\n" +
        "    (1, 'Mouse'),\n" +
        "    (2, 'Keyboard');",
    );
};

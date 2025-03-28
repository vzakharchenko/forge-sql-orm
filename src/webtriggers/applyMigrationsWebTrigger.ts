import { migrationRunner, sql } from "@forge/sql";
import { MigrationRunner } from "@forge/sql/out/migration";

export const applySchemaMigrations = async (
  migration: (migrationRunner: MigrationRunner) => Promise<MigrationRunner>,
) => {
  console.log("Provisioning the database");
  await sql._provision();
  console.info("Running schema migrations");
  const migrations = await migration(migrationRunner);
  const successfulMigrations = await migrations.run();
  console.info("Migrations applied:", successfulMigrations);

  const migrationHistory = (await migrationRunner.list())
    .map((y) => `${y.id}, ${y.name}, ${y.migratedAt.toUTCString()}`)
    .join("\n");

  console.info("Migrations history:\nid, name, migrated_at\n", migrationHistory);

  return {
    headers: { "Content-Type": ["application/json"] },
    statusCode: 200,
    statusText: "OK",
    body: "Migrations successfully executed",
  };
};

import { migrationRunner, sql } from "@forge/sql";
import { MigrationRunner } from "@forge/sql/out/migration";

/**
 * Web trigger for applying database schema migrations in Atlassian Forge SQL.
 * This function handles the complete migration process including:
 * - Database provisioning
 * - Migration execution
 * - Migration history tracking
 *
 * @param migration - A function that takes a MigrationRunner instance and returns a Promise of MigrationRunner
 *                     This function should define the sequence of migrations to be applied
 * @returns {Promise<{
 *   headers: { "Content-Type": ["application/json"] },
 *   statusCode: number,
 *   statusText: string,
 *   body: string
 * }>} A response object containing:
 * - headers: Content-Type header set to application/json
 * - statusCode: 200 on success
 * - statusText: "OK" on success
 * - body: Success message or error details
 *
 * @throws {Error} If database provisioning fails
 * @throws {Error} If migration execution fails
 */
export const applySchemaMigrations = async (
  migration: (migrationRunner: MigrationRunner) => Promise<MigrationRunner>,
) => {
  try {
    if (typeof migration !== "function") {
      throw new Error("migration is not a function");
    }
    // eslint-disable-next-line no-console
    console.debug("Provisioning the database");
    await sql._provision();
    // eslint-disable-next-line no-console
    console.debug("Running schema migrations");
    const migrations = await migration(migrationRunner);
    const successfulMigrations = await migrations.run();
    // eslint-disable-next-line no-console
    console.debug("Migrations applied:", successfulMigrations);

    const migrationList = await migrationRunner.list();
    let migrationHistory = "No migrations found";

    if (Array.isArray(migrationList) && migrationList.length > 0) {
      const sortedMigrations = migrationList.toSorted(
        (a, b) => a.migratedAt.getTime() - b.migratedAt.getTime(),
      );

      migrationHistory = sortedMigrations
        .map((y) => `${y.id}, ${y.name}, ${y.migratedAt.toISOString()}`)
        .join("\n");
    }
    // eslint-disable-next-line no-console
    console.debug("Migrations history:\nid, name, migrated_at\n", migrationHistory);

    return {
      headers: { "Content-Type": ["application/json"] },
      statusCode: 200,
      statusText: "OK",
      body: "Migrations successfully executed",
    };
  } catch (error: any) {
    const errorMessage =
      error?.cause?.context?.debug?.sqlMessage ??
      error?.cause?.context?.debug?.message ??
      error?.debug?.context?.sqlMessage ??
      error?.debug?.context?.message ??
      error.message ??
      "Unknown error occurred";
    // eslint-disable-next-line no-console
    console.error("Error during migration:", errorMessage);
    return {
      headers: { "Content-Type": ["application/json"] },
      statusCode: 500,
      statusText: "Internal Server Error",
      body: error instanceof Error ? errorMessage : "Unknown error during migration",
    };
  }
};

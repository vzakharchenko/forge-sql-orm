import { MigrationRunner } from "@forge/sql/out/migration";
import v1 from "./migrationV1";

export type MigrationType = (migrationRunner: MigrationRunner) => MigrationRunner;

export default async (migrationRunner: MigrationRunner): Promise<MigrationRunner> => {
  v1(migrationRunner);
  return migrationRunner;
};

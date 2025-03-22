import { MigrationRunner } from "@forge/sql/out/migration";
import { MIGRATION_VERSION } from "./migrationCount";

export type MigrationType = (migrationRunner: MigrationRunner) => MigrationRunner;

export default async (migrationRunner: MigrationRunner): Promise<MigrationRunner> => {
  for (let i = 1; i <= MIGRATION_VERSION; i++) {
    const migrations = (await import(`./migrationV${i}`)) as {
      default: MigrationType;
    };
    migrations.default(migrationRunner);
  }
  return migrationRunner;
};

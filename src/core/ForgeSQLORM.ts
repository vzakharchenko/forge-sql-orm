import { ForgeSQLCrudOperations } from "./ForgeSQLCrudOperations";
import {
  CRUDForgeSQL,
  ForgeSqlOperation,
  ForgeSqlOrmOptions,
  SchemaAnalyzeForgeSql,
  SchemaSqlForgeSql,
} from "./ForgeSQLQueryBuilder";
import { ForgeSQLSelectOperations } from "./ForgeSQLSelectOperations";
import { drizzle, MySqlRemoteDatabase, MySqlRemotePreparedQueryHKT } from "drizzle-orm/mysql-proxy";
import { createForgeDriverProxy } from "../utils/forgeDriverProxy";
import type { SelectedFields } from "drizzle-orm/mysql-core/query-builders/select.types";
import { MySqlSelectBuilder } from "drizzle-orm/mysql-core";
import { patchDbWithSelectAliased } from "../lib/drizzle/extensions/selectAliased";
import { ForgeSQLAnalizeOperation } from "./ForgeSQLAnalizeOperations";

/**
 * Implementation of ForgeSQLORM that uses Drizzle ORM for query building.
 * This class provides a bridge between Forge SQL and Drizzle ORM, allowing
 * to use Drizzle's query builder while executing queries through Forge SQL.
 */
class ForgeSQLORMImpl implements ForgeSqlOperation {
  private static instance: ForgeSQLORMImpl | null = null;
  private readonly drizzle: MySqlRemoteDatabase<any> & {
    selectAliased: <TSelection extends SelectedFields>(
      fields: TSelection,
    ) => MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;
    selectAliasedDistinct: <TSelection extends SelectedFields>(
      fields: TSelection,
    ) => MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>;
  };
  private readonly crudOperations: CRUDForgeSQL;
  private readonly fetchOperations: SchemaSqlForgeSql;
  private readonly analyzeOperations: SchemaAnalyzeForgeSql;

  /**
   * Private constructor to enforce singleton behavior.
   * @param options - Options for configuring ForgeSQL ORM behavior.
   */
  private constructor(options?: ForgeSqlOrmOptions) {
    try {
      const newOptions: ForgeSqlOrmOptions = options ?? {
        logRawSqlQuery: false,
        disableOptimisticLocking: false,
      };
      if (newOptions.logRawSqlQuery) {
        console.debug("Initializing ForgeSQLORM...");
      }
      // Initialize Drizzle instance with our custom driver
      const proxiedDriver = createForgeDriverProxy(newOptions.hints, newOptions.logRawSqlQuery);
      this.drizzle = patchDbWithSelectAliased(
        drizzle(proxiedDriver, { logger: newOptions.logRawSqlQuery }),
      );
      this.crudOperations = new ForgeSQLCrudOperations(this, newOptions);
      this.fetchOperations = new ForgeSQLSelectOperations(newOptions);
      this.analyzeOperations = new ForgeSQLAnalizeOperation(this);
    } catch (error) {
      console.error("ForgeSQLORM initialization failed:", error);
      throw error;
    }
  }

  /**
   * Create the modify operations instance.
   * @returns modify operations.
   */
  modify(): CRUDForgeSQL {
    return this.crudOperations;
  }

  /**
   * Returns the singleton instance of ForgeSQLORMImpl.
   * @param options - Options for configuring ForgeSQL ORM behavior.
   * @returns The singleton instance of ForgeSQLORMImpl.
   */
  static getInstance(options?: ForgeSqlOrmOptions): ForgeSqlOperation {
    ForgeSQLORMImpl.instance ??= new ForgeSQLORMImpl(options);
    return ForgeSQLORMImpl.instance;
  }

  /**
   * Retrieves the CRUD operations instance.
   * @returns CRUD operations.
   */
  crud(): CRUDForgeSQL {
    return this.modify();
  }

  /**
   * Retrieves the fetch operations instance.
   * @returns Fetch operations.
   */
  fetch(): SchemaSqlForgeSql {
    return this.fetchOperations;
  }
  analyze(): SchemaAnalyzeForgeSql {
    return this.analyzeOperations;
  }

  /**
   * Returns a Drizzle query builder instance.
   *
   * ⚠️ IMPORTANT: This method should be used ONLY for query building purposes.
   * The returned instance should NOT be used for direct database connections or query execution.
   * All database operations should be performed through Forge SQL's executeRawSQL or executeRawUpdateSQL methods.
   *
   * @returns A Drizzle query builder instance for query construction only.
   */
  getDrizzleQueryBuilder(): MySqlRemoteDatabase<Record<string, unknown>> {
    return this.drizzle;
  }

  /**
   * Creates a select query with unique field aliases to prevent field name collisions in joins.
   * This is particularly useful when working with Atlassian Forge SQL, which collapses fields with the same name in joined tables.
   *
   * @template TSelection - The type of the selected fields
   * @param {TSelection} fields - Object containing the fields to select, with table schemas as values
   * @returns {MySqlSelectBuilder<TSelection, MySql2PreparedQueryHKT>} A select query builder with unique field aliases
   * @throws {Error} If fields parameter is empty
   * @example
   * ```typescript
   * await forgeSQL
   *   .select({user: users, order: orders})
   *   .from(orders)
   *   .innerJoin(users, eq(orders.userId, users.id));
   * ```
   */
  select<TSelection extends SelectedFields>(
    fields: TSelection,
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT> {
    if (!fields) {
      throw new Error("fields is empty");
    }
    return this.drizzle.selectAliased(fields);
  }

  /**
   * Creates a distinct select query with unique field aliases to prevent field name collisions in joins.
   * This is particularly useful when working with Atlassian Forge SQL, which collapses fields with the same name in joined tables.
   *
   * @template TSelection - The type of the selected fields
   * @param {TSelection} fields - Object containing the fields to select, with table schemas as values
   * @returns {MySqlSelectBuilder<TSelection, MySql2PreparedQueryHKT>} A distinct select query builder with unique field aliases
   * @throws {Error} If fields parameter is empty
   * @example
   * ```typescript
   * await forgeSQL
   *   .selectDistinct({user: users, order: orders})
   *   .from(orders)
   *   .innerJoin(users, eq(orders.userId, users.id));
   * ```
   */
  selectDistinct<TSelection extends SelectedFields>(
    fields: TSelection,
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT> {
    if (!fields) {
      throw new Error("fields is empty");
    }
    return this.drizzle.selectAliasedDistinct(fields);
  }
}

/**
 * Public class that acts as a wrapper around the private ForgeSQLORMImpl.
 * Provides a clean interface for working with Forge SQL and Drizzle ORM.
 */
class ForgeSQLORM implements ForgeSqlOperation {
  private readonly ormInstance: ForgeSqlOperation;

  constructor(options?: ForgeSqlOrmOptions) {
    this.ormInstance = ForgeSQLORMImpl.getInstance(options);
  }

  /**
   * Creates a select query with unique field aliases to prevent field name collisions in joins.
   * This is particularly useful when working with Atlassian Forge SQL, which collapses fields with the same name in joined tables.
   *
   * @template TSelection - The type of the selected fields
   * @param {TSelection} fields - Object containing the fields to select, with table schemas as values
   * @returns {MySqlSelectBuilder<TSelection, MySql2PreparedQueryHKT>} A select query builder with unique field aliases
   * @throws {Error} If fields parameter is empty
   * @example
   * ```typescript
   * await forgeSQL
   *   .select({user: users, order: orders})
   *   .from(orders)
   *   .innerJoin(users, eq(orders.userId, users.id));
   * ```
   */
  select<TSelection extends SelectedFields>(
    fields: TSelection,
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT> {
    return this.ormInstance.select(fields);
  }

  /**
   * Creates a distinct select query with unique field aliases to prevent field name collisions in joins.
   * This is particularly useful when working with Atlassian Forge SQL, which collapses fields with the same name in joined tables.
   *
   * @template TSelection - The type of the selected fields
   * @param {TSelection} fields - Object containing the fields to select, with table schemas as values
   * @returns {MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT>} A distinct select query builder with unique field aliases
   * @throws {Error} If fields parameter is empty
   * @example
   * ```typescript
   * await forgeSQL
   *   .selectDistinct({user: users, order: orders})
   *   .from(orders)
   *   .innerJoin(users, eq(orders.userId, users.id));
   * ```
   */
  selectDistinct<TSelection extends SelectedFields>(
    fields: TSelection,
  ): MySqlSelectBuilder<TSelection, MySqlRemotePreparedQueryHKT> {
    return this.ormInstance.selectDistinct(fields);
  }

  /**
   * Proxies the `crud` method from `ForgeSQLORMImpl`.
   * @returns CRUD operations.
   */
  crud(): CRUDForgeSQL {
    return this.ormInstance.modify();
  }

  /**
   * Proxies the `modify` method from `ForgeSQLORMImpl`.
   * @returns Modify operations.
   */
  modify(): CRUDForgeSQL {
    return this.ormInstance.modify();
  }

  /**
   * Proxies the `fetch` method from `ForgeSQLORMImpl`.
   * @returns Fetch operations.
   */
  fetch(): SchemaSqlForgeSql {
    return this.ormInstance.fetch();
  }

  /**
   * Provides query analysis capabilities including EXPLAIN ANALYZE and slow query analysis.
   * @returns {SchemaAnalyzeForgeSql} Interface for analyzing query performance
   */
  analyze(): SchemaAnalyzeForgeSql {
    return this.ormInstance.analyze();
  }

  /**
   * Returns a Drizzle query builder instance.
   *
   * ⚠️ IMPORTANT: This method should be used ONLY for query building purposes.
   * The returned instance should NOT be used for direct database connections or query execution.
   * All database operations should be performed through Forge SQL's executeRawSQL or executeRawUpdateSQL methods.
   *
   * @returns A Drizzle query builder instance for query construction only.
   */
  getDrizzleQueryBuilder() {
    return this.ormInstance.getDrizzleQueryBuilder();
  }
}

export default ForgeSQLORM;

import type { EntityName, LoggingOptions } from "@mikro-orm/core";
import type { EntitySchema } from "@mikro-orm/core/metadata/EntitySchema";
import type { AnyEntity, EntityClass, EntityClassGroup } from "@mikro-orm/core/typings";
import type { QueryBuilder } from "@mikro-orm/knex/query";
import { MemoryCacheAdapter, MikroORM, NullCacheAdapter } from "@mikro-orm/mysql";
import { ForgeSQLCrudOperations } from "./ForgeSQLCrudOperations";
import {
  CRUDForgeSQL,
  ForgeSqlOperation,
  ForgeSqlOrmOptions,
  SchemaSqlForgeSql,
} from "./ForgeSQLQueryBuilder";
import { ForgeSQLSelectOperations } from "./ForgeSQLSelectOperations";
import type { Knex } from "knex";

/**
 * Implementation of ForgeSQLORM that interacts with MikroORM.
 */
class ForgeSQLORMImpl implements ForgeSqlOperation {
  private static instance: ForgeSQLORMImpl | null = null;
  private readonly mikroORM: MikroORM;
  private readonly crudOperations: CRUDForgeSQL;
  private readonly fetchOperations: SchemaSqlForgeSql;

  /**
   * Private constructor to enforce singleton behavior.
   * @param entities - The list of entities for ORM initialization.
   * @param options - Options for configuring ForgeSQL ORM behavior.
   */
  private constructor(
    entities: (EntityClass<AnyEntity> | EntityClassGroup<AnyEntity> | EntitySchema)[],
    options?: ForgeSqlOrmOptions,
  ) {
    console.debug("Initializing ForgeSQLORM...");

    try {
      this.mikroORM = MikroORM.initSync({
        dbName: "inmemory",
        schemaGenerator: {
          disableForeignKeys: false,
        },
        discovery: {
          warnWhenNoEntities: true,
        },
        resultCache: {
          adapter: NullCacheAdapter,
        },
        metadataCache: {
          enabled: false,
          adapter: MemoryCacheAdapter,
        },
        entities: entities,
        preferTs: false,
        debug: false,
      });
      const newOptions: ForgeSqlOrmOptions = options ?? { logRawSqlQuery: false };
      this.crudOperations = new ForgeSQLCrudOperations(this, newOptions);
      this.fetchOperations = new ForgeSQLSelectOperations(newOptions);
    } catch (error) {
      console.error("ForgeSQLORM initialization failed:", error);
      throw error; // Prevents inconsistent state
    }
  }

  /**
   * Returns the singleton instance of ForgeSQLORMImpl.
   * @param entities - List of entities (required only on first initialization).
   * @returns The singleton instance of ForgeSQLORMImpl.
   */
  static getInstance(
    entities: (EntityClass<AnyEntity> | EntityClassGroup<AnyEntity> | EntitySchema)[],
  ): ForgeSqlOperation {
    if (!ForgeSQLORMImpl.instance) {
      ForgeSQLORMImpl.instance = new ForgeSQLORMImpl(entities);
    }
    return ForgeSQLORMImpl.instance;
  }

  /**
   * Retrieves the CRUD operations instance.
   * @returns CRUD operations.
   */
  crud(): CRUDForgeSQL {
    return this.crudOperations;
  }

  /**
   * Retrieves the fetch operations instance.
   * @returns Fetch operations.
   */
  fetch(): SchemaSqlForgeSql {
    return this.fetchOperations;
  }

  /**
   * Creates a new query builder for the given entity.
   * @param entityName - The entity name or an existing query builder.
   * @param alias - The alias for the entity.
   * @param loggerContext - Logging options.
   * @returns The query builder instance.
   */
  createQueryBuilder<Entity extends object, RootAlias extends string = never>(
    entityName: EntityName<Entity> | QueryBuilder<Entity>,
    alias?: RootAlias,
    loggerContext?: LoggingOptions,
  ): QueryBuilder<Entity, RootAlias> {
    return this.mikroORM.em.createQueryBuilder(entityName, alias, undefined, loggerContext);
  }

  /**
   * Provides access to the underlying Knex instance for executing raw queries and building complex query parts.
   * enabling advanced query customization and performance tuning.
   * @returns The Knex instance, which can be used for query building.
   */
  getKnex(): Knex<any, any[]> {
    return this.mikroORM.em.getKnex();
  }
}

/**
 * Public class that acts as a wrapper around the private ForgeSQLORMImpl.
 */
class ForgeSQLORM {
  private readonly ormInstance: ForgeSqlOperation;

  constructor(entities: (EntityClass<AnyEntity> | EntityClassGroup<AnyEntity> | EntitySchema)[]) {
    this.ormInstance = ForgeSQLORMImpl.getInstance(entities);
  }

  /**
   * Proxies the `crud` method from `ForgeSQLORMImpl`.
   * @returns CRUD operations.
   */
  crud(): CRUDForgeSQL {
    return this.ormInstance.crud();
  }

  /**
   * Proxies the `fetch` method from `ForgeSQLORMImpl`.
   * @returns Fetch operations.
   */
  fetch(): SchemaSqlForgeSql {
    return this.ormInstance.fetch();
  }

  getKnex(): Knex<any, any[]> {
    return this.ormInstance.getKnex();
  }

  /**
   * Proxies the `createQueryBuilder` method from `ForgeSQLORMImpl`.
   * @returns A new query builder instance.
   */
  createQueryBuilder<Entity extends object, RootAlias extends string = never>(
    entityName: EntityName<Entity> | QueryBuilder<Entity>,
    alias?: RootAlias,
    loggerContext?: LoggingOptions,
  ): QueryBuilder<Entity, RootAlias> {
    return this.ormInstance.createQueryBuilder(entityName, alias, loggerContext);
  }
}

export default ForgeSQLORM;

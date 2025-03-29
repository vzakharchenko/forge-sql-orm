import Resolver from "@forge/resolver";
import ForgeSQL from "forge-sql-orm";
import migration from "./migration";
import {
  DuplicateResponse,
  DynamicResponse,
  Metadata,
  MetadataProperties,
  SortType,
} from "./utils/Constants";
import { additionalMetadata, users } from "./entities";
import { InferInsertModel, sql as rawSql, desc, asc } from "drizzle-orm";
import { SelectedFields } from "drizzle-orm/mysql-core/query-builders/select.types";
import { AnyMySqlTable } from "drizzle-orm/mysql-core";
import { MySqlColumn } from "drizzle-orm/mysql-core/columns";
import {
  getPrimaryKeys,
  getTableMetadata,
  dropSchemaMigrations,
  fetchSchemaWebTrigger,
  applySchemaMigrations,
} from "forge-sql-orm";
import * as schema from "./entities/schema";

// Initialize resolver and ForgeSQL
const resolver = new Resolver();
const forgeSQL = new ForgeSQL({
  additionalMetadata,
  logRawSqlQuery: true,
  disableOptimisticLocking: false,
});

// ============= CRUD Operations =============

/**
 * Creates a new user record
 * @param req - Request containing user data
 * @returns Promise with the ID of the created user
 */
resolver.define("create", async (req): Promise<number> => {
  const payload = req.payload.data as Partial<InferInsertModel<typeof users>>;
  return await forgeSQL.crud().insert(users, [payload]);
});

/**
 * Deletes a user record by ID
 * @param req - Request containing user ID
 * @returns Promise with the number of affected rows
 */
resolver.define("delete", async (req): Promise<number> => {
  const id = req.payload.id as number;
  return await forgeSQL.crud().deleteById(id, users);
});

// ============= Metadata Operations =============

/**
 * Fetches table metadata for the users table
 * @returns Promise with table metadata
 * @throws Error if primary key is not found
 */
resolver.define("fetchMetadata", async (): Promise<Metadata> => {
  const tableMetadata = getTableMetadata(users);
  const userPrimaryKeys = getPrimaryKeys(users);

  if (!userPrimaryKeys || userPrimaryKeys.length === 0) {
    throw new Error("Primary key does not exist");
  }

  const [primaryKeyName, primaryKeyColumn] = userPrimaryKeys[0];
  const metadataProperties: MetadataProperties = {};

  // Build metadata properties excluding primary key
  Object.entries(tableMetadata.columns)
    .filter(([name]) => name !== primaryKeyName)
    .forEach(([name, column]) => {
      metadataProperties[name] = { name, type: column.dataType };
    });

  // Create duplicate properties with count field
  const duplicateProperties = {
    ...metadataProperties,
    count: { name: "count", type: "number" },
  };

  return {
    user: {
      id: { name: primaryKeyName, type: primaryKeyColumn.dataType },
      properties: metadataProperties,
    },
    duplicate: {
      properties: duplicateProperties,
    },
  };
});

// ============= Duplicate Detection =============

/**
 * Searches for duplicate records in the specified table based on non-primary fields.
 * @template T - The type of the table schema
 * @param {T} table - The table schema to search in
 * @returns {Promise<DuplicateResponse[]>} Array of duplicate records with their field values and count
 */
async function findDuplicates<T extends AnyMySqlTable>(table: T): Promise<DuplicateResponse[]> {
  const tableMetadata = getTableMetadata(table);
  const primaryKeys = getPrimaryKeys(table);
  if (!primaryKeys) {
    throw new Error("Primary key does not found");
  }
  // Create select fields excluding primary keys
  const selectFields: SelectedFields = {};
  const groupByFields: MySqlColumn[] = [];

  Object.entries(tableMetadata.columns).forEach(([name, column]) => {
    if (!primaryKeys.map(([name, pc]) => pc).includes(column)) {
      selectFields[name] = column as MySqlColumn;
      groupByFields.push(column as MySqlColumn);
    }
  });

  // Add count field
  selectFields["count"] = rawSql`COUNT(*) as \`count\``;

  // Build and execute query
  const duplicateResult = await forgeSQL
    .select(selectFields)
    .from(table)
    .groupBy(...groupByFields)
    .having(rawSql`COUNT(*) > 1`);

  // Transform results
  return duplicateResult.map(
    (record): DuplicateResponse => ({
      fields: Object.entries(record).reduce<Record<string, string>>((acc, [key, value]) => {
        acc[key] = String(value ?? "");
        return acc;
      }, {}),
    }),
  );
}

resolver.define("duplicate", async (): Promise<DuplicateResponse[]> => {
  return await findDuplicates(users);
});

// ============= Data Fetching =============

/**
 * Fetches user records with optional sorting
 * @param req - Request containing sort configuration
 * @returns Promise with array of user records
 */
resolver.define("fetch", async (req): Promise<DynamicResponse[]> => {
  const sortType = req.payload.sortType as SortType | undefined;
  const { columns } = getTableMetadata(users);
  const primaryKeys = getPrimaryKeys(users);
  if (!primaryKeys) {
    throw new Error("Primary key does not found");
  }
  const baseQuery = forgeSQL.getDrizzleQueryBuilder().select().from(users);

  // Apply sorting if specified
  const query =
    sortType?.name && columns[sortType.name]
      ? baseQuery.orderBy(
          sortType.sortType === "ASC" ? asc(columns[sortType.name]) : desc(columns[sortType.name]),
        )
      : baseQuery;

  const result = await query;

  // Transform results
  return result.map((record): DynamicResponse => {
    const id = record.id;
    const fields = Object.entries(columns)
      .filter(([_, column]) => !primaryKeys.map(([name, pc]) => pc).includes(column))
      .reduce<Record<string, string>>((acc, [name]) => {
        acc[name] = String(record[name as keyof typeof record] ?? "");
        return acc;
      }, {});

    return { id, fields };
  });
});

// ============= Migration Handler =============

export const handlerMigration = async () => {
  return applySchemaMigrations(migration);
};

export const dropMigrations = () => {
  return dropSchemaMigrations(Object.values(schema));
};

export const fetchMigrations = () => {
  return fetchSchemaWebTrigger();
};

export const handler = resolver.getDefinitions();

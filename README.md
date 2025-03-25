# Forge SQL ORM

[![forge-sql-orm CI](https://github.com/vzakharchenko/forge-sql-orm/actions/workflows/node.js.yml/badge.svg)](https://github.com/vzakharchenko/forge-sql-orm/actions/workflows/node.js.yml)

**Forge-SQL-ORM** is an ORM designed for working with [@forge/sql](https://developer.atlassian.com/platform/forge/storage-reference/sql-tutorial/) in **Atlassian Forge**. It is built on top of [Drizzle ORM](https://orm.drizzle.team) and provides advanced capabilities for working with relational databases inside Forge.

## Key Features
- ✅ **Supports complex SQL queries** with joins and filtering using Drizzle ORM
- ✅ **Batch insert support** with duplicate key handling
- ✅ **Schema migration support**, allowing automatic schema evolution
- ✅ **Automatic entity generation** from MySQL/tidb databases
- ✅ **Automatic migration generation** from MySQL/tidb databases
- ✅ **Drop Migrations** Generate a migration to drop all tables and clear migrations history for subsequent schema recreation
- ✅ **Optimistic Locking** Ensures data consistency by preventing conflicts when multiple users update the same record
- ✅ **Type Safety** Full TypeScript support with proper type inference

## Installation

Forge-SQL-ORM is designed to work with @forge/sql and requires some additional setup to ensure compatibility within Atlassian Forge.

✅ Step 1: Install Dependencies

```sh
npm install forge-sql-orm -S
npm install @forge/sql -S
npm install drizzle-orm mysql2
npm install mysql2 @types/mysql2 -D
```

This will:
- Install Forge-SQL-ORM (the ORM for @forge/sql)
- Install @forge/sql, the Forge database layer
- Install Drizzle ORM and its MySQL driver
- Install TypeScript types for MySQL

## Step-by-Step Migration Workflow

1. **Generate initial schema from an existing database**

   ```sh
   npx forge-sql-orm generate:model --dbName testDb --output ./database/schema
   ```

   _(This is done only once when setting up the project)_

2. **Create the first migration**

   ```sh
   npx forge-sql-orm migrations:create --dbName testDb --entitiesPath ./database/schema --output ./database/migration
   ```

   _(This initializes the database migration structure, also done once)_

3. **Deploy to Forge and verify that migrations work**

   - Deploy your **Forge app** with migrations.
   - Run migrations using a **Forge web trigger** or **Forge scheduler**.

4. **Modify the database (e.g., add a new column, index, etc.)**

   - Use **DbSchema** or manually alter the database schema.

5. **Update the migration**

   ```sh
   npx forge-sql-orm migrations:update --dbName testDb --entitiesPath ./database/schema --output ./database/migration
   ```

   - ⚠️ **Do NOT update schema before this step!**
   - If schema is updated first, the migration will be empty!

6. **Deploy to Forge and verify that the migration runs without issues**

   - Run the updated migration on Forge.

7. **Update the schema**

   ```sh
   npx forge-sql-orm generate:model --dbName testDb --output ./database/schema
   ```

8. **Repeat steps 4-7 as needed**

**⚠️ WARNING:**

- **Do NOT swap steps 7 and 5!** If you update schema before generating a migration, the migration will be empty!
- Always generate the **migration first**, then update the **schema**.

## Drop Migrations

The Drop Migrations feature allows you to completely reset your database schema in Atlassian Forge SQL. This is useful when you need to:
- Start fresh with a new schema
- Reset all tables and their data
- Clear migration history
- Ensure your local schema matches the deployed database

### Important Requirements

Before using Drop Migrations, ensure that:
1. Your local schema exactly matches the current database schema deployed in Atlassian Forge SQL
2. You have a backup of your data if needed
3. You understand that this operation will delete all tables and data

### Usage

1. First, ensure your local schema matches the deployed database:
   ```bash
   npx forge-sql-orm generate:model --output ./database/schema
   ```

2. Generate the drop migration:
   ```bash
   npx forge-sql-orm migrations:drop --entitiesPath ./database/schema --output ./database/migration
   ```

3. Deploy and run the migration in your Forge app:
   ```js
   import migrationRunner from "./database/migration";
   import { MigrationRunner } from "@forge/sql/out/migration";

   const runner = new MigrationRunner();
   await migrationRunner(runner);
   await runner.run();
   ```

4. After dropping all tables, you can create a new migration to recreate the schema:
   ```bash
   npx forge-sql-orm migrations:create --entitiesPath ./database/schema --output ./database/migration --force
   ```
   The `--force` parameter is required here because we're creating a new migration after dropping all tables.

### Example Migration Output

The generated drop migration will look like this:
```js
import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
    return migrationRunner
        .enqueue("v1_MIGRATION0", "ALTER TABLE `orders` DROP FOREIGN KEY `fk_orders_users`")
        .enqueue("v1_MIGRATION1", "DROP INDEX `idx_orders_user_id` ON `orders`")
        .enqueue("v1_MIGRATION2", "DROP TABLE IF EXISTS `orders`")
        .enqueue("v1_MIGRATION3", "DROP TABLE IF EXISTS `users`")
        .enqueue("MIGRATION_V1_1234567890", "DELETE FROM __migrations");
};
```

### ⚠️ Important Notes

- This operation is **irreversible** - all data will be lost
- Make sure your local schema is up-to-date with the deployed database
- Consider backing up your data before running drop migrations
- The migration will clear the `__migrations` table to allow for fresh migration history
- Drop operations are performed in the correct order: first foreign keys, then indexes, then tables

---

# Connection to ORM

```js
import ForgeSQL from "forge-sql-orm";

const forgeSQL = new ForgeSQL();
```

## Fetch Data

### Basic Fetch Operations

```js
// Using executeQuery for single result
const user = await forgeSQL
  .fetch()
  .executeQuery(
    forgeSQL.getDrizzleQueryBuilder()
      .select("*").from(Users)
      .where(eq(Users.id, 1))
  );
// Returns: { id: 1, name: "John Doe" }

// Using executeQueryOnlyOne for single result with error handling
const user = await forgeSQL
  .fetch()
  .executeQueryOnlyOne(
    forgeSQL
      .getDrizzleQueryBuilder()
      .select("*").from(Users)
      .where(eq(Users.id, 1))
  );
// Returns: { id: 1, name: "John Doe" }
// Throws error if multiple records found
// Returns undefined if no records found

// Using executeQuery with aliases
const usersAlias = alias(Users, "u");
const result = await forgeSQL
  .fetch()
  .executeQuery(
    forgeSQL
      .getDrizzleQueryBuilder()
      .select({
        userId: rawSql`${usersAlias.id} as \`userId\``,
        userName: rawSql`${usersAlias.name} as \`userName\``
      }).from(usersAlias)
  );
// Returns: { userId: 1, userName: "John Doe" }

// Using executeQuery with joins
const orderWithUser = await forgeSQL
  .fetch()
  .executeQuery(
    forgeSQL
      .getDrizzleQueryBuilder()
      .select({
        orderId: rawSql`${Orders.id} as \`orderId\``,
        product: Orders.product,
        userName: rawSql`${Users.name} as \`userName\``
      }).from(Orders)
      .innerJoin(Users, eq(Orders.userId, Users.id))
      .where(eq(Orders.id, 1))
  );
// Returns: { orderId: 1, product: "Product 1", userName: "John Doe" }
```

### Complex Queries with Aggregations

```js
// Finding duplicates
const duplicates = await forgeSQL
  .fetch()
  .executeQuery(
    forgeSQL
      .getDrizzleQueryBuilder()
      .select({
        name: Users.name,
        count: rawSql`COUNT(*) as \`count\``
      }).from(Users)
      .groupBy(Users.name)
      .having(rawSql`COUNT(*) > 1`)
  );
// Returns: { name: "John Doe", count: 2 }

// Using executeQueryOnlyOne for unique results
const userStats = await forgeSQL
  .fetch()
  .executeQueryOnlyOne(
    forgeSQL
      .getDrizzleQueryBuilder()
      .select({
        totalUsers: rawSql`COUNT(*) as \`totalUsers\``,
        uniqueNames: rawSql`COUNT(DISTINCT name) as \`uniqueNames\``
      }).from(Users)
  );
// Returns: { totalUsers: 100, uniqueNames: 80 }
// Throws error if multiple records found
```

### Raw SQL Queries

```js
// Using executeRawSQL for direct SQL queries
const users = await forgeSQL
  .fetch()
  .executeRawSQL<Users>("SELECT * FROM users");
```

## CRUD Operations

### Insert Operations

  ```js
// Single insert
const userId = await forgeSQL.crud().insert(Users, [{ id: 1, name: "Smith" }]);

// Bulk insert
await forgeSQL.crud().insert(Users, [
    { id: 2, name: "Smith" },
    { id: 3, name: "Vasyl" },
  ]);

// Insert with duplicate handling
  await forgeSQL.crud().insert(
  Users,
    [
      { id: 4, name: "Smith" },
      { id: 4, name: "Vasyl" },
    ],
  true
  );
  ```

### Update Operations

  ```js
// Update by ID with optimistic locking
await forgeSQL.crud().updateById({ id: 1, name: "Smith Updated" }, Users);

// Update specific fields
await forgeSQL.crud().updateById(
  { id: 1,  age: 35 },
  Users
);

// Update with custom WHERE condition
await forgeSQL.crud().updateFields(
    { name: "New Name", age: 35 },
  Users,
  eq(Users.email, "smith@example.com")
);
```

### Delete Operations

```js
// Delete by ID
await forgeSQL.crud().deleteById(1, Users);
```

## Optimistic Locking

Optimistic locking is a concurrency control mechanism that prevents data conflicts when multiple transactions attempt to update the same record concurrently. Instead of using locks, this technique relies on a version field in your entity models.

### Supported Version Field Types

- `datetime` - Timestamp-based versioning
- `timestamp` - Timestamp-based versioning
- `integer` - Numeric version increment
- `decimal` - Numeric version increment

### Configuration

```typescript
const options = {
  additionalMetadata: {
    users: {
      tableName: "users",
      versionField: {
        fieldName: "updatedAt",
      }
    }
  }
};

const forgeSQL = new ForgeSQL(options);
```

### Example Usage

```typescript
// The version field will be automatically handled
await forgeSQL.crud().updateById(
  { 
    id: 1, 
    name: "Updated Name",
    updatedAt: new Date() // Will be automatically set if not provided
  }, 
  Users
);
```

## ForgeSqlOrmOptions

The `ForgeSqlOrmOptions` object allows customization of ORM behavior:

| Option                     | Type      | Description                                                                                                                                                                                                                     |
| -------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `logRawSqlQuery`           | `boolean` | Enables logging of raw SQL queries in the Atlassian Forge Developer Console. Useful for debugging and monitoring. Defaults to `false`.                                                                                         |
| `disableOptimisticLocking` | `boolean` | Disables optimistic locking. When set to `true`, no additional condition (e.g., a version check) is added during record updates, which can improve performance. However, this may lead to conflicts when multiple transactions attempt to update the same record concurrently. |
| `additionalMetadata`       | `object`  | Allows adding custom metadata to all entities. This is useful for tracking common fields across all tables (e.g., `createdAt`, `updatedAt`, `createdBy`, etc.). The metadata will be automatically added to all generated entities. |

## CLI Commands

```sh
$ npx forge-sql-orm --help

Usage: forge-sql-orm [options] [command]

Options:
  -V, --version                Output the version number
  -h, --help                   Display help for command

Commands:
  generate:model [options]     Generate Drizzle models from the database
  migrations:create [options]  Generate an initial migration for the entire database
  migrations:update [options]  Generate a migration to update the database schema
  migrations:drop [options]    Generate a migration to drop all tables
  help [command]               Display help for a specific command
```

## License
This project is licensed under the **MIT License**.  
Feel free to use it for commercial and personal projects.

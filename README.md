# Forge SQL ORM

[![npm version](https://img.shields.io/npm/v/forge-sql-orm)](https://www.npmjs.com/package/forge-sql-orm)
[![npm downloads](https://img.shields.io/npm/dm/forge-sql-orm)](https://www.npmjs.com/package/forge-sql-orm)
[![npm version (CLI)](https://img.shields.io/npm/v/forge-sql-orm-cli?label=cli)](https://www.npmjs.com/package/forge-sql-orm-cli)
[![npm downloads (CLI)](https://img.shields.io/npm/dm/forge-sql-orm-cli?label=cli%20downloads)](https://www.npmjs.com/package/forge-sql-orm-cli)

[![License](https://img.shields.io/github/license/vzakharchenko/forge-sql-orm)](https://github.com/vzakharchenko/forge-sql-orm/blob/master/LICENSE)

[![forge-sql-orm CI](https://github.com/vzakharchenko/forge-sql-orm/actions/workflows/node.js.yml/badge.svg)](https://github.com/vzakharchenko/forge-sql-orm/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/vzakharchenko/forge-sql-orm/badge.svg?branch=master)](https://coveralls.io/github/vzakharchenko/forge-sql-orm?branch=master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=vzakharchenko_forge-sql-orm&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=vzakharchenko_forge-sql-orm)
[![DeepScan grade](https://deepscan.io/api/teams/26652/projects/29272/branches/940614/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=26652&pid=29272&bid=940614)


**Forge-SQL-ORM** is an ORM designed for working with [@forge/sql](https://developer.atlassian.com/platform/forge/storage-reference/sql-tutorial/) in **Atlassian Forge**. It is built on top of [Drizzle ORM](https://orm.drizzle.team) and provides advanced capabilities for working with relational databases inside Forge.

## Key Features
- ✅ **Custom Drizzle Driver** for direct integration with @forge/sql
- ✅ **Advanced Caching System** with automatic cache invalidation and context-aware operations (using [@forge/kvs](https://developer.atlassian.com/platform/forge/storage-reference/storage-api-custom-entities/) )
- ✅ **Type-Safe Query Building**: Write SQL queries with full TypeScript support
- ✅ **Supports complex SQL queries** with joins and filtering using Drizzle ORM
- ✅ **Schema migration support**, allowing automatic schema evolution
- ✅ **Automatic entity generation** from MySQL/tidb databases
- ✅ **Automatic migration generation** from MySQL/tidb databases
- ✅ **Drop Migrations** Generate a migration to drop all tables and clear migrations history for subsequent schema recreation
- ✅ **Schema Fetching** Development-only web trigger to retrieve current database schema and generate SQL statements for schema recreation
- ✅ **Ready-to-use Migration Triggers** Built-in web triggers for applying migrations, dropping tables (development-only), and fetching schema (development-only) with proper error handling and security controls
- ✅ **Optimistic Locking** Ensures data consistency by preventing conflicts when multiple users update the same record
- ✅ **Query Plan Analysis**: Detailed execution plan analysis and optimization insights (Performance analysis and Troubleshooting only)

## Usage Approaches

### 1. Direct Drizzle Usage
```typescript
import { drizzle } from "drizzle-orm/mysql-proxy";
import { forgeDriver } from "forge-sql-orm";
const db = drizzle(forgeDriver);
```
Best for: Simple Modify operations without optimistic locking. Note that you need to manually patch drizzle `patchDbWithSelectAliased` for select fields to prevent field name collisions in Atlassian Forge SQL.

### 2. Full Forge-SQL-ORM Usage
```typescript
import ForgeSQL from "forge-sql-orm";
const forgeSQL = new ForgeSQL();
```
Best for: Advanced features like optimistic locking, automatic versioning, and automatic field name collision prevention in complex queries.

## Field Name Collision Prevention in Complex Queries

When working with complex queries involving multiple tables (joins, inner joins, etc.), Atlassian Forge SQL has a specific behavior where fields with the same name from different tables get collapsed into a single field with a null value. This is not a Drizzle ORM issue but rather a characteristic of Atlassian Forge SQL's behavior.

Forge-SQL-ORM provides two ways to handle this:

### Using Forge-SQL-ORM
```typescript
import ForgeSQL from "forge-sql-orm";

const forgeSQL = new ForgeSQL();

// Automatic field name collision prevention
await forgeSQL
  .select({user: users, order: orders})
  .from(orders)
  .innerJoin(users, eq(orders.userId, users.id));
```

### Using Direct Drizzle
```typescript
import { drizzle } from "drizzle-orm/mysql-proxy";
import { forgeDriver, patchDbWithSelectAliased } from "forge-sql-orm";

const db = patchDbWithSelectAliased(drizzle(forgeDriver));

// Manual field name collision prevention
await db
  .selectAliased({user: users, order: orders})
  .from(orders)
  .innerJoin(users, eq(orders.userId, users.id));
```

### Important Notes
- This is a specific behavior of Atlassian Forge SQL, not Drizzle ORM
- For complex queries involving multiple tables, it's recommended to always specify select fields and avoid using `select()` without field selection
- The solution automatically creates unique aliases for each field by prefixing them with the table name
- This ensures that fields with the same name from different tables remain distinct in the query results


## Installation

Forge-SQL-ORM is designed to work with @forge/sql and requires some additional setup to ensure compatibility within Atlassian Forge.

✅ Step 1: Install Dependencies

**Basic installation (without caching):**
```sh
npm install forge-sql-orm @forge/sql drizzle-orm momment -S
npm install forge-sql-orm-cli  -D
```

**With caching support:**
```sh
npm install forge-sql-orm @forge/sql @forge/kvs drizzle-orm momment -S
npm install forge-sql-orm-cli  -D
```

This will:
- Install Forge-SQL-ORM (the ORM for @forge/sql)
- Install @forge/sql, the Forge database layer
- Install @forge/kvs, the Forge Key-Value Store for caching (optional, only needed for caching features)
- Install Drizzle ORM and its MySQL driver
- Install TypeScript types for MySQL
- Install forge-sql-orm-cli A command-line interface tool for managing Atlassian Forge SQL migrations and model generation with Drizzle ORM integration.

##  Drizzle Usage with forge-sql-orm

If you prefer to use Drizzle ORM with the additional features of Forge-SQL-ORM (like optimistic locking and caching), you can use the enhanced API:

```typescript
import ForgeSQL from "forge-sql-orm";
const forgeSQL = new ForgeSQL();

// Versioned operations with cache management (recommended)
await forgeSQL.modifyWithVersioningAndEvictCache().insert(Users, [userData]);
await forgeSQL.modifyWithVersioningAndEvictCache().updateById(updateData, Users);

// Versioned operations without cache management
await forgeSQL.modifyWithVersioning().insert(Users, [userData]);
await forgeSQL.modifyWithVersioning().updateById(updateData, Users);

// Non-versioned operations with cache management
await forgeSQL.insertAndEvictCache(Users).values(userData);
await forgeSQL.updateAndEvictCache(Users).set(updateData).where(eq(Users.id, 1));

// Basic Drizzle operations (cache context aware)
await forgeSQL.insert(Users).values(userData);
await forgeSQL.update(Users).set(updateData).where(eq(Users.id, 1));

// Direct Drizzle access
const db = forgeSQL.getDrizzleQueryBuilder();
const users = await db.select().from(users);
```

This approach gives you direct access to all Drizzle ORM features while still using the @forge/sql backend with enhanced caching and versioning capabilities.

## Direct Drizzle Usage with Custom Driver

If you prefer to use Drizzle ORM directly without the additional features of Forge-SQL-ORM (like optimistic locking), you can use the custom driver:

```typescript
import { drizzle } from "drizzle-orm/mysql-proxy";
import { forgeDriver, patchDbWithSelectAliased } from "forge-sql-orm";

// Initialize drizzle with the custom driver and patch it for aliased selects
const db = patchDbWithSelectAliased(drizzle(forgeDriver));

// Use drizzle directly
const users = await db.select().from(users);
const users = await db.selectAliased(getTableColumns(users)).from(users);
const users = await db.selectAliasedDistinct(getTableColumns(users)).from(users);
await db.insert(users)...;
await db.update(users)...;
await db.delete(users)...;
// Use drizzle with kvs cache
const users = await db.selectAliasedCacheable(getTableColumns(users)).from(users);
const users = await db.selectAliasedDistinctCacheable(getTableColumns(users)).from(users);
await db.insertAndEvictCache(users)...;
await db.updateAndEvictCache(users)...;
await db.deleteAndEvictCache(users)...;

// Use drizzle with kvs cache context
await forgeSQL.executeWithCacheContext(async () => {
  await db.insertWithCacheContext(users)...;
  await db.updateWithCacheContext(users)...;
  await db.deleteWithCacheContext(users)...;
  // invoke without cache
   const users = await db.selectAliasedCacheable(getTableColumns(users)).from(users);  
  // Cache is cleared only once at the end for all affected tables
});
```

## Setting Up Caching with @forge/kvs (Optional)

The caching system is optional and only needed if you want to use cache-related features. To enable the caching system, you need to install the required dependency and configure your manifest.

### How Caching Works

To use caching, you need to use Forge-SQL-ORM methods that support cache management:

**Methods that perform cache eviction after execution and in cache context (batch eviction):**
- `forgeSQL.insertAndEvictCache()`
- `forgeSQL.updateAndEvictCache()`
- `forgeSQL.deleteAndEvictCache()`
- `forgeSQL.modifyWithVersioningAndEvictCache()`
- `forgeSQL.getDrizzleQueryBuilder().insertAndEvictCache()`
- `forgeSQL.getDrizzleQueryBuilder().updateAndEvictCache()`
- `forgeSQL.getDrizzleQueryBuilder().deleteAndEvictCache()`

**Methods that participate in cache context only (batch eviction):**
- All methods except the default Drizzle methods:
  - `forgeSQL.insert()`
  - `forgeSQL.update()`
  - `forgeSQL.delete()`
  - `forgeSQL.modifyWithVersioning()`
  - `forgeSQL.getDrizzleQueryBuilder().insertWithCacheContext()`
  - `forgeSQL.getDrizzleQueryBuilder().updateWithCacheContext()`
  - `forgeSQL.getDrizzleQueryBuilder().deleteWithCacheContext()`

**Methods do not do evict cache, better do not use with cache feature:**
  - `forgeSQL.getDrizzleQueryBuilder().insert()`
  - `forgeSQL.getDrizzleQueryBuilder().update()`
  - `forgeSQL.getDrizzleQueryBuilder().delete()`

**Cacheable methods:**
  - `forgeSQL.selectCacheable()`
  - `forgeSQL.selectDistinctCacheable()`
  - `forgeSQL.getDrizzleQueryBuilder().selectAliasedCacheable()`
  - `forgeSQL.getDrizzleQueryBuilder().selectAliasedDistinctCacheable()`

**Cache context example:**
```typescript
await forgeSQL.executeWithCacheContext(async () => {
  // These methods participate in batch cache clearing
  await forgeSQL.insert(Users).values(userData);
  await forgeSQL.update(Users).set(updateData).where(eq(Users.id, 1));
  await forgeSQL.delete(Users).where(eq(Users.id, 1));
  // Cache is cleared only once at the end for all affected tables
});
```

### Important Considerations

**@forge/kvs Limits:**
Please review the [official @forge/kvs quotas and limits](https://developer.atlassian.com/platform/forge/platform-quotas-and-limits/#kvs-and-custom-entity-store-quotas) before implementing caching.

**Caching Guidelines:**
- Don't cache everything - be selective about what to cache
- Don't cache simple and fast queries - sometimes direct query is faster than cache
- Consider data size and frequency of changes
- Monitor cache usage to stay within quotas
- Use appropriate TTL values

### Step 1: Install Dependencies

```bash
npm install @forge/kvs -S
```

### Step 2: Configure Manifest

Add the storage entity configuration and scheduler trigger to your `manifest.yml`:

```yaml
modules:
  scheduledTrigger:
    - key: clear-cache-trigger
      function: clearCache
      interval: fiveMinute
  storage:
    entities:
      - name: cache
        attributes:
          sql:
            type: string
          expiration:
            type: integer
          data:
            type: string
        indexes:
          - sql
          - expiration
  sql:
    - key: main
      engine: mysql
  function:
    - key: clearCache
      handler: index.clearCache
```
```typescript
// Example usage in your Forge app
import { clearCacheSchedulerTrigger } from "forge-sql-orm";

export const clearCache = () => {
  return clearCacheSchedulerTrigger({ 
    cacheEntityName: "cache",
  });
};
```


### Step 3: Configure ORM Options

Set the cache entity name in your ForgeSQL configuration:

```typescript
const options = {
  cacheEntityName: "cache", // Must match the entity name in manifest.yml
  cacheTTL: 300, // Default cache TTL in seconds (5 minutes)
  cacheWrapTable: true, // Wrap table names with backticks in cache keys
  // ... other options
};

const forgeSQL = new ForgeSQL(options);
```

**Important Notes:**
- The `cacheEntityName` must exactly match the `name` in your manifest storage entities
- The entity attributes (`sql`, `expiration`, `data`) are required for proper cache functionality
- Indexes on `sql` and `expiration` improve cache lookup performance
- Cache data is automatically cleaned up based on TTL settings
- No additional permissions are required beyond standard Forge app permissions

### Complete Setup Examples

**Basic setup (without caching):**

**package.json:**
```json
{
  "dependencies": {
    "forge-sql-orm": "latest",
    "@forge/sql": "latest",
    "drizzle-orm": "latest"
  }
}
```

**manifest.yml:**
```yaml
modules:
  sql:
    - key: main
      engine: mysql
```

**app.js:**
```typescript
import ForgeSQL from "forge-sql-orm";

const forgeSQL = new ForgeSQL();

// Use versioned operations without caching
const users = await forgeSQL.modifyWithVersioning().insert(Users, [userData]);
```

**With caching support:**

**package.json:**
```json
{
  "dependencies": {
    "forge-sql-orm": "latest",
    "@forge/sql": "latest",
    "@forge/kvs": "latest",
    "drizzle-orm": "latest"
  }
}
```

**manifest.yml:**
```yaml
modules:
  storage:
    entities:
      - name: cache
        attributes:
          sql:
            type: string
          expiration:
            type: integer
          data:
            type: string
        indexes:
          - sql
          - expiration
  sql:
    - key: main
      engine: mysql
```

**app.js:**
```typescript
import ForgeSQL from "forge-sql-orm";

const forgeSQL = new ForgeSQL({
  cacheEntityName: "cache"
});

// Now you can use caching features
const users = await forgeSQL.selectCacheable(getTableColumns(users)).from(Users).where(eq(Users.active, true))
```

## Choosing the Right Method ForgeSqlOrm

### When to Use Each Approach

| Method | Use Case | Versioning | Cache Management |
|--------|----------|------------|------------------|
| `modifyWithVersioningAndEvictCache()` | High-concurrency scenarios with Cache support| ✅ Yes | ✅ Yes |
| `modifyWithVersioning()` | High-concurrency scenarios | ✅ Yes | Cache Context |
| `insertAndEvictCache()` | Simple inserts | ❌ No | ✅ Yes |
| `updateAndEvictCache()` | Simple updates | ❌ No | ✅ Yes |
| `deleteAndEvictCache()` | Simple deletes | ❌ No | ✅ Yes |
| `insert/update/delete` | Basic Drizzle operations | ❌ No | Cache Context |


## Choosing the Right Method direct drizzle

### When to Use Each Approach

| Method | Use Case | Versioning | Cache Management |
|--------|----------|------------|------------------|
| `insertWithCacheContext/insertWithCacheContext/updateWithCacheContext` | Basic Drizzle operations | ❌ No | Cache Context |
| `insertAndEvictCache()` | Simple inserts without conflicts | ❌ No | ✅ Yes |
| `updateAndEvictCache()` | Simple updates without conflicts | ❌ No | ✅ Yes |
| `deleteAndEvictCache()` | Simple deletes without conflicts | ❌ No | ✅ Yes |
| `insert/update/delete` | Basic Drizzle operations | ❌ No | ❌ No |
where Cache context - allows you to batch cache invalidation events and bypass cache reads for affected tables.


## Step-by-Step Migration Workflow

1. **Generate initial schema from an existing database**

   ```sh
   npx forge-sql-orm-cli generate:model --dbName testDb --output ./database/schema
   ```

   _(This is done only once when setting up the project)_

2. **Create the first migration**

   ```sh
   npx forge-sql-orm-cli migrations:create --dbName testDb --entitiesPath ./database/schema --output ./database/migration
   ```

   _(This initializes the database migration structure, also done once)_

3. **Deploy to Forge and verify that migrations work**

   - Deploy your **Forge app** with migrations.
   - Run migrations using a **Forge web trigger** or **Forge scheduler**.

4. **Modify the database (e.g., add a new column, index, etc.)**

   - Use **DbSchema** or manually alter the database schema.

5. **Update the migration**

   ```sh
   npx forge-sql-orm-cli migrations:update --dbName testDb --entitiesPath ./database/schema --output ./database/migration
   ```

   - ⚠️ **Do NOT update schema before this step!**
   - If schema is updated first, the migration will be empty!

6. **Deploy to Forge and verify that the migration runs without issues**

   - Run the updated migration on Forge.

7. **Update the schema**

   ```sh
   npx forge-sql-orm-cli generate:model --dbName testDb --output ./database/schema
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
   npx forge-sql-orm-cli generate:model --output ./database/schema
   ```

2. Generate the drop migration:
   ```bash
   npx forge-sql-orm-cli migrations:drop --entitiesPath ./database/schema --output ./database/migration
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
   npx forge-sql-orm-cli migrations:create --entitiesPath ./database/schema --output ./database/migration --force
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

## Date and Time Types

When working with date and time fields in your models, you should use the custom types provided by Forge-SQL-ORM to ensure proper handling of date/time values. This is necessary because Forge SQL has specific format requirements for date/time values:

| Date type | Required Format | Example |
|-----------|----------------|---------|
| DATE | YYYY-MM-DD | 2024-09-19 |
| TIME | HH:MM:SS[.fraction] | 06:40:34 |
| TIMESTAMP | YYYY-MM-DD HH:MM:SS[.fraction] | 2024-09-19 06:40:34.999999 |

```typescript
// ❌ Don't use standard Drizzle date/time types
export const testEntityTimeStampVersion = mysqlTable('test_entity', {
  id: int('id').primaryKey().autoincrement(),
  time_stamp: timestamp('times_tamp').notNull(),
  date_time: datetime('date_time').notNull(),
  time: time('time').notNull(),
  date: date('date').notNull(),
});

// ✅ Use Forge-SQL-ORM custom types instead
import { forgeDateTimeString, forgeDateString, forgeTimestampString, forgeTimeString } from 'forge-sql-orm'

export const testEntityTimeStampVersion = mysqlTable('test_entity', {
  id: int('id').primaryKey().autoincrement(),
  time_stamp: forgeTimestampString('times_tamp').notNull(),
  date_time: forgeDateTimeString('date_time').notNull(),
  time: forgeTimeString('time').notNull(),
  date: forgeDateString('date').notNull(),
});
```

### Why Custom Types?

The custom types in Forge-SQL-ORM handle the conversion between JavaScript Date objects and Forge SQL's required string formats automatically. Without these custom types, you would need to manually format dates like this:

```typescript
// Without custom types, you'd need to do this manually:
const date = moment().format("YYYY-MM-DD");
const time = moment().format("HH:mm:ss.SSS");
const timestamp = moment().format("YYYY-MM-DDTHH:mm:ss.SSS");
```

Our custom types provide:
- Automatic conversion between JavaScript Date objects and Forge SQL's required string formats
- Consistent date/time handling across your application
- Type safety for date/time fields
- Proper handling of timezone conversions
- Support for all Forge SQL date/time types (datetime, timestamp, date, time)

### Available Custom Types

- `forgeDateTimeString` - For datetime fields (YYYY-MM-DD HH:MM:SS[.fraction])
- `forgeTimestampString` - For timestamp fields (YYYY-MM-DD HH:MM:SS[.fraction])
- `forgeDateString` - For date fields (YYYY-MM-DD)
- `forgeTimeString` - For time fields (HH:MM:SS[.fraction])

Each type ensures that the data is properly formatted according to Forge SQL's requirements while providing a clean, type-safe interface for your application code.




# Connection to ORM

```js
import ForgeSQL from "forge-sql-orm";

const forgeSQL = new ForgeSQL();
```
or 

```typescript
import { drizzle } from "drizzle-orm/mysql-proxy";
import { forgeDriver } from "forge-sql-orm";

// Initialize drizzle with the custom driver
const db = drizzle(forgeDriver);

// Use drizzle directly
const users = await db.select().from(users);
```

## Fetch Data

### Basic Fetch Operations

```js
// Using forgeSQL.getDrizzleQueryBuilder()
const user = await forgeSQL
  .getDrizzleQueryBuilder()
  .select().from(Users)
  .where(eq(Users.id, 1));

// OR using direct drizzle with custom driver
const db = drizzle(forgeDriver);
const user = await db
  .select().from(Users)
  .where(eq(Users.id, 1));
// Returns: { id: 1, name: "John Doe" }

// Using executeQueryOnlyOne for single result with error handling
const user = await forgeSQL
  .fetch()
  .executeQueryOnlyOne(
    forgeSQL
      .getDrizzleQueryBuilder()
      .select().from(Users)
      .where(eq(Users.id, 1))
  );
// Returns: { id: 1, name: "John Doe" }
// Throws error if multiple records found
// Returns undefined if no records found

// Using with aliases
// With forgeSQL
const usersAlias = alias(Users, "u");
const result = await forgeSQL
  .getDrizzleQueryBuilder()
  .select({
    userId: sql<string>`${usersAlias.id} as \`userId\``,
    userName: sql<string>`${usersAlias.name} as \`userName\``
  }).from(usersAlias);

// OR with direct drizzle
const db = drizzle(forgeDriver);
const result = await db
  .select({
    userId: sql<string>`${usersAlias.id} as \`userId\``,
    userName: sql<string>`${usersAlias.name} as \`userName\``
  }).from(usersAlias);
// Returns: { userId: 1, userName: "John Doe" }
```

### Complex Queries
```js
// Using joins with automatic field name collision prevention
// With forgeSQL
const orderWithUser = await forgeSQL
  .select({user: users, order: orders})
  .from(orders)
  .innerJoin(users, eq(orders.userId, users.id));

// OR with direct drizzle
const db = patchDbWithSelectAliased(drizzle(forgeDriver));
const orderWithUser = await db
  .selectAliased({user: users, order: orders})
  .from(orders)
  .innerJoin(users, eq(orders.userId, users.id));
// Returns: { 
//   user_id: 1, 
//   user_name: "John Doe",
//   order_id: 1,
//   order_product: "Product 1"
// }

// Using distinct with aliases
const uniqueUsers = await db
  .selectAliasedDistinct({user: users})
  .from(users);
// Returns unique users with aliased fields

// Using executeQueryOnlyOne for unique results
const userStats = await forgeSQL
  .fetch()
  .executeQueryOnlyOne(
    forgeSQL
      .getDrizzleQueryBuilder()
      .select({
        totalUsers: sql`COUNT(*) as \`totalUsers\``,
        uniqueNames: sql`COUNT(DISTINCT name) as \`uniqueNames\``
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

## Modify Operations

Forge-SQL-ORM provides multiple approaches for Modify operations, each with different characteristics:

### 1. Versioned Operations with Cache Management (Recommended)

These operations use optimistic locking and automatic cache invalidation:

```js
// Insert with versioning and cache management
const userId = await forgeSQL.modifyWithVersioningAndEvictCache().insert(Users, [{ id: 1, name: "Smith" }]);

// Bulk insert with versioning
await forgeSQL.modifyWithVersioningAndEvictCache().insert(Users, [
    { id: 2, name: "Smith" },
    { id: 3, name: "Vasyl" },
  ]);

// Update by ID with optimistic locking and cache invalidation
await forgeSQL.modifyWithVersioningAndEvictCache().updateById({ id: 1, name: "Smith Updated" }, Users);

// Delete by ID with versioning and cache invalidation
await forgeSQL.modifyWithVersioningAndEvictCache().deleteById(1, Users);
```

### 2. Versioned Operations without Cache Management

These operations use optimistic locking but don't manage cache:

```js
// Insert with versioning only (no cache management)
const userId = await forgeSQL.modifyWithVersioning().insert(Users, [{ id: 1, name: "Smith" }]);

// Update with versioning only
await forgeSQL.modifyWithVersioning().updateById({ id: 1, name: "Smith Updated" }, Users);

// Delete with versioning only
await forgeSQL.modifyWithVersioning().deleteById(1, Users);
```

### 3. Non-Versioned Operations with Cache Management

These operations don't use optimistic locking but provide cache invalidation:

```js
// Insert without versioning but with cache invalidation
await forgeSQL.insertAndEvictCache(Users).values({ id: 1, name: "Smith" });

// Update without versioning but with cache invalidation
await forgeSQL.updateAndEvictCache(Users)
  .set({ name: "Smith Updated" })
  .where(eq(Users.id, 1));

// Delete without versioning but with cache invalidation
await forgeSQL.deleteAndEvictCache(Users)
  .where(eq(Users.id, 1));
```

### 4. Basic Drizzle Operations (Cache Context Aware)

These operations work like standard Drizzle methods but participate in cache context when used within `executeWithCacheContext()`:

```js
// Basic insert (participates in cache context when used within executeWithCacheContext)
await forgeSQL.insert(Users).values({ id: 1, name: "Smith" });

// Basic update (participates in cache context when used within executeWithCacheContext)
await forgeSQL.update(Users)
  .set({ name: "Smith Updated" })
  .where(eq(Users.id, 1));

// Basic delete (participates in cache context when used within executeWithCacheContext)
await forgeSQL.delete(Users)
  .where(eq(Users.id, 1));
```

### 5. Legacy Modify Operations (Removed in 2.1.x)

⚠️ **BREAKING CHANGE**: The `crud()` and `modify()` methods have been completely removed in version 2.1.x.

```js
// ❌ These methods no longer exist in 2.1.x
// const userId = await forgeSQL.crud().insert(Users, [{ id: 1, name: "Smith" }]);
// await forgeSQL.crud().updateById({ id: 1, name: "Smith Updated" }, Users);
// await forgeSQL.crud().deleteById(1, Users);

// ✅ Use the new methods instead
const userId = await forgeSQL.modifyWithVersioning().insert(Users, [{ id: 1, name: "Smith" }]);
await forgeSQL.modifyWithVersioning().updateById({ id: 1, name: "Smith Updated" }, Users);
await forgeSQL.modifyWithVersioning().deleteById(1, Users);
```

### Advanced Operations

```js
// Insert with sequence (nextVal)
import { nextVal } from "forge-sql-orm";

const user = {
  id: nextVal('user_id_seq'),
  name: "user test",
  organization_id: 1
};
const id = await forgeSQL.modifyWithVersioning().insert(appUser, [user]);

// Update with custom WHERE condition
await forgeSQL.modifyWithVersioning().updateFields(
    { name: "New Name", age: 35 },
  Users,
  eq(Users.email, "smith@example.com")
);

// Insert with duplicate handling
await forgeSQL.modifyWithVersioning().insert(
  Users,
  [
    { id: 4, name: "Smith" },
    { id: 4, name: "Vasyl" },
  ],
  true
);
```

## SQL Utilities

### formatLimitOffset

The `formatLimitOffset` utility function is used to safely insert numeric values directly into SQL queries for LIMIT and OFFSET clauses. This is necessary because Atlassian Forge SQL doesn't support parameterized queries for these clauses.

```typescript
import { formatLimitOffset } from "forge-sql-orm";

// Example usage in a query
const result = await forgeSQL
  .select()
  .from(orderItem)
  .orderBy(asc(orderItem.createdAt))
  .limit(formatLimitOffset(10))
  .offset(formatLimitOffset(350000));

// The generated SQL will be:
// SELECT * FROM order_item 
// ORDER BY created_at ASC 
// LIMIT 10 
// OFFSET 350000
```

**Important Notes:**
- The function performs type checking to prevent SQL injection
- It throws an error if the input is not a valid number
- Use this function instead of direct parameter binding for LIMIT and OFFSET clauses
- The function is specifically designed to work with Atlassian Forge SQL's limitations

**Security Considerations:**
- The function includes validation to ensure the input is a valid number
- This prevents SQL injection by ensuring only numeric values are inserted
- Always use this function instead of string concatenation for LIMIT and OFFSET values

## Advanced Caching System

Forge-SQL-ORM includes a sophisticated caching system that provides automatic cache invalidation and context-aware operations. The caching system is built on top of [@forge/kvs Custom entity store](https://developer.atlassian.com/platform/forge/storage-reference/storage-api-custom-entities/) and provides multiple levels of cache management with automatic serialization/deserialization of complex data structures.

### Cache Configuration

The caching system uses Atlassian Forge's Custom entity store to persist cache data. Each cache entry is stored as a custom entity with automatic TTL management and efficient key-based retrieval.

```typescript
const options = {
  cacheEntityName: "cache", // KVS Custom entity name for cache storage
  cacheTTL: 300, // Default cache TTL in seconds (5 minutes)
  cacheWrapTable: true, // Wrap table names with backticks in cache keys
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

### How Caching Works with @forge/kvs

The caching system leverages Forge's Custom entity store to provide:

- **Persistent Storage**: Cache data survives app restarts and deployments
- **Automatic TTL**: Built-in expiration handling through Forge's entity lifecycle
- **Efficient Retrieval**: Fast key-based lookups using Forge's optimized storage
- **Data Serialization**: Automatic handling of complex objects and query results
- **Batch Operations**: Efficient bulk cache operations for better performance

```typescript
// Cache entries are stored as custom entities in Forge's KVS
// Example cache key structure:
// Key: "query:users:active:true:limit:10"
// Value: { data: [...], timestamp: 1234567890, ttl: 300 }
```


### Cache Context Operations

The cache context allows you to batch cache invalidation events and bypass cache reads for affected tables:

```typescript
// Execute operations within a cache context
await forgeSQL.executeWithCacheContext(async () => {
  // All cache invalidation events are collected and executed in batch
  await forgeSQL.modifyWithVersioningAndEvictCache().insert(Users, [userData]);
  await forgeSQL.modifyWithVersioningAndEvictCache().updateById(updateData, Users);
  // Cache is cleared only once at the end for all affected tables
});

// Execute with return value
const result = await forgeSQL.executeWithCacheContextAndReturnValue(async () => {
  const user = await forgeSQL.modifyWithVersioningAndEvictCache().insert(Users, [userData]);
  return user;
});

// Basic operations also participate in cache context
await forgeSQL.executeWithCacheContext(async () => {
  // These operations will participate in batch cache clearing
  await forgeSQL.insert(Users).values(userData);
  await forgeSQL.update(Users).set(updateData).where(eq(Users.id, 1));
  await forgeSQL.delete(Users).where(eq(Users.id, 1));
  // Cache is cleared only once at the end for all affected tables
});
```

### Cache-Aware Query Operations

```typescript
// Execute queries with caching
const users = await forgeSQL.modifyWithVersioningAndEvictCache().executeQuery(
  forgeSQL.select().from(Users).where(eq(Users.active, true)),
  600 // Custom TTL in seconds
);

// Execute single result queries with caching
const user = await forgeSQL.modifyWithVersioningAndEvictCache().executeQueryOnlyOne(
  forgeSQL.select().from(Users).where(eq(Users.id, 1))
);

// Execute raw SQL with caching
const results = await forgeSQL.modifyWithVersioningAndEvictCache().executeRawSQL(
  "SELECT * FROM users WHERE active = ?",
  [true],
  300 // TTL in seconds
);
```

### Manual Cache Management

```typescript
// Clear cache for specific tables
await forgeSQL.modifyWithVersioningAndEvictCache().evictCache(["users", "orders"]);

// Clear cache for specific entities
await forgeSQL.modifyWithVersioningAndEvictCache().evictCacheEntities([Users, Orders]);
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
await forgeSQL.modifyWithVersioning().updateById(
  { 
    id: 1, 
    name: "Updated Name",
    updatedAt: new Date() // Will be automatically set if not provided
  }, 
  Users
);
```
or with cache support
```typescript
// The version field will be automatically handled
await forgeSQL.modifyWithVersioningAndEvictCache().updateById(
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
| `cacheEntityName`          | `string`  | KVS Custom entity name for cache storage. Must match the `name` in your `manifest.yml` storage entities configuration. Required for caching functionality. Defaults to `"cache"`.                                                                                                                         |
| `cacheTTL`                 | `number`  | Default cache TTL in seconds. Defaults to `120` (2 minutes).                                                                                                                                                                   |
| `cacheWrapTable`           | `boolean` | Whether to wrap table names with backticks in cache keys. Defaults to `true`.                                                                                                                                                  |
| `hints`                    | `object`  | SQL hints for query optimization. Optional configuration for advanced query tuning.                                                                                                                                             |

## CLI Commands

Documentation [here](forge-sql-orm-cli/README.md)

## Web Triggers for Migrations

Forge-SQL-ORM provides web triggers for managing database migrations in Atlassian Forge:

### 1. Apply Migrations Trigger

This trigger allows you to apply database migrations through a web endpoint. It's useful for:
- Manually triggering migrations 
- Running migrations as part of your deployment process
- Testing migrations in different environments

```typescript
// Example usage in your Forge app
import { applySchemaMigrations } from "forge-sql-orm";
import migration from "./migration";

export const handlerMigration = async () => {
  return applySchemaMigrations(migration);
};
```

Configure in `manifest.yml`:
```yaml
  webtrigger:
     - key: invoke-schema-migration
       function: runSchemaMigration
       security:
          egress:
             allowDataEgress: false
             allowedResponses:
                - statusCode: 200
                  body: '{"body": "Migrations successfully executed"}'
  sql:
     - key: main
       engine: mysql
  function:
     - key: runSchemaMigration
       handler: index.handlerMigration
```

### 2. Drop Migrations Trigger

⚠️ **WARNING**: This trigger will permanently delete all data in the specified tables and clear the migrations history. This operation cannot be undone!

This trigger allows you to completely reset your database schema. It's useful for:
- Development environments where you need to start fresh
- Testing scenarios requiring a clean database
- Resetting the database before applying new migrations

**Important**: The trigger will  drop all tables including migration.

```typescript
// Example usage in your Forge app
import { dropSchemaMigrations } from "forge-sql-orm";

export const dropMigrations = () => {
  return dropSchemaMigrations();
};
```

Configure in `manifest.yml`:
```yaml
  webtrigger:
     - key: drop-schema-migration
       function: dropMigrations
  sql:
     - key: main
       engine: mysql
  function:
     - key: dropMigrations
       handler: index.dropMigrations
```

### 3. Fetch Schema Trigger

⚠️ **DEVELOPMENT ONLY**: This trigger is designed for development environments only and should not be used in production.

This trigger retrieves the current database schema from Atlassian Forge SQL and generates SQL statements that can be used to recreate the database structure. It's useful for:
- Development environment setup
- Schema documentation
- Database structure verification
- Creating backup scripts

**Security Considerations**:
- This trigger exposes your database structure
- It temporarily disables foreign key checks
- It may expose sensitive table names and structures
- Should only be used in development environments

```typescript
// Example usage in your Forge app
import { fetchSchemaWebTrigger } from "forge-sql-orm";

export const fetchSchema = async () => {
  return fetchSchemaWebTrigger();
};
```

Configure in `manifest.yml`:
```yaml
  webtrigger:
     - key: fetch-schema
       function: fetchSchema
  sql:
     - key: main
       engine: mysql
  function:
     - key: fetchSchema
       handler: index.fetchSchema
```

The response will contain SQL statements like:
```sql
SET foreign_key_checks = 0;
CREATE TABLE IF NOT EXISTS users (...);
CREATE TABLE IF NOT EXISTS orders (...);
SET foreign_key_checks = 1;
```

### 4. Clear Cache Scheduler Trigger

This trigger automatically cleans up expired cache entries based on their TTL (Time To Live). It's useful for:
- Automatic cache maintenance
- Preventing cache storage from growing indefinitely
- Ensuring optimal cache performance
- Reducing storage costs

```typescript
// Example usage in your Forge app
import { clearCacheSchedulerTrigger } from "forge-sql-orm";

export const clearCache = () => {
  return clearCacheSchedulerTrigger({ 
    cacheEntityName: "cache",
  });
};
```

Configure in `manifest.yml`:
```yaml
  scheduledTrigger:
    - key: clear-cache-trigger
      function: clearCache
      interval: fiveMinute
  function:
    - key: clearCache
      handler: index.clearCache
```

**Available Intervals**:
- `fiveMinute` - Every 5 minutes
- `hour` - Every hour
- `day` - Every day

### Important Notes

**Security Considerations**:
   - The drop migrations trigger should be restricted to development environments
   - The fetch schema trigger should only be used in development
   - Consider implementing additional authentication for these endpoints

**Best Practices**:
   - Always backup your data before using the drop migrations trigger
   - Test migrations in a development environment first
   - Use these triggers as part of your deployment pipeline
   - Monitor the execution logs in the Forge Developer Console

## Query Analysis and Performance Optimization

⚠️ **IMPORTANT NOTE**: The query analysis features described below are experimental and should be used only for troubleshooting purposes. These features rely on TiDB's `information_schema` and `performance_schema` which may change in future updates. As of April 2025, these features are available but their future availability is not guaranteed.

### About Atlassian's Built-in Analysis Tools

Atlassian already provides comprehensive query analysis tools in the development console, including:
- Basic query performance metrics
- Slow query tracking (queries over 500ms)
- Basic execution statistics
- Query history and patterns

Our analysis tools are designed to complement these built-in features by providing additional insights directly from TiDB's system schemas. However, they should be used with caution and only for troubleshooting purposes.

### Usage Guidelines

1. **Development and Troubleshooting Only**
   - These tools should not be used in production code
   - Intended only for development and debugging
   - Use for identifying and fixing performance issues

2. **Schema Stability**
   - Features rely on TiDB's `information_schema` and `performance_schema`
   - Schema structure may change in future TiDB updates
   - No guarantee of long-term availability

3. **Current Availability (April 2025)**
   - `information_schema` based analysis is currently functional
   - Query plan analysis is available
   - Performance metrics collection is working

### Available Analysis Tools

```typescript
import ForgeSQL from "forge-sql-orm";

const forgeSQL = new ForgeSQL();
const analyzeForgeSql = forgeSQL.analyze();
```

#### Query Plan Analysis

⚠️ **For Troubleshooting Only**: This feature should only be used during development and debugging sessions.

```typescript
// Example usage for troubleshooting a specific query
const forgeSQL = new ForgeSQL();
const analyzeForgeSql = forgeSQL.analyze();

// Analyze a Drizzle query
const plan = await analyzeForgeSql.explain(
  forgeSQL.select({
    table1: testEntityJoin1,
    table2: { name: testEntityJoin2.name, email: testEntityJoin2.email },
    count: rawSql<number>`COUNT(*)`,
    table3: {
      table12: testEntityJoin1.name,
      table22: testEntityJoin2.email,
      table32: testEntity.id
    },
  })
  .from(testEntityJoin1)
  .innerJoin(testEntityJoin2, eq(testEntityJoin1.id, testEntityJoin2.id))
);

// Analyze a raw SQL query
const rawPlan = await analyzeForgeSql.explainRaw(
  "SELECT * FROM users WHERE id = ?",
  [1]
);
```

This analysis helps you understand:
- How the database executes your query
- Which indexes are being used
- Estimated vs actual row counts
- Resource usage at each step
- Potential performance bottlenecks


## Migration Guide

### Migrating from 2.0.x to 2.1.x

This section covers the breaking changes introduced in version 2.1.x and how to migrate your existing code.

#### 1. Method Renaming (BREAKING CHANGES)

**Removed Methods:**
- `forgeSQL.modify()` → **REMOVED** (use `forgeSQL.modifyWithVersioning()`)
- `forgeSQL.crud()` → **REMOVED** (use `forgeSQL.modifyWithVersioning()`)

**Migration Steps:**

1. **Replace `modify()` calls:**
   ```typescript
   // ❌ Old (2.0.x) - NO LONGER WORKS
   await forgeSQL.modify().insert(Users, [userData]);
   await forgeSQL.modify().updateById(updateData, Users);
   await forgeSQL.modify().deleteById(1, Users);
   
   // ✅ New (2.1.x) - REQUIRED
   await forgeSQL.modifyWithVersioning().insert(Users, [userData]);
   await forgeSQL.modifyWithVersioning().updateById(updateData, Users);
   await forgeSQL.modifyWithVersioning().deleteById(1, Users);
   ```

2. **Replace `crud()` calls:**
   ```typescript
   // ❌ Old (2.0.x) - NO LONGER WORKS
   await forgeSQL.crud().insert(Users, [userData]);
   await forgeSQL.crud().updateById(updateData, Users);
   await forgeSQL.crud().deleteById(1, Users);
   
   // ✅ New (2.1.x) - REQUIRED
   await forgeSQL.modifyWithVersioning().insert(Users, [userData]);
   await forgeSQL.modifyWithVersioning().updateById(updateData, Users);
   await forgeSQL.modifyWithVersioning().deleteById(1, Users);
   ```

#### 2. New API Methods

**New Methods Available:**
- `forgeSQL.insert()` - Basic Drizzle operations
- `forgeSQL.update()` - Basic Drizzle operations  
- `forgeSQL.delete()` - Basic Drizzle operations
- `forgeSQL.insertAndEvictCache()` - Basic Drizzle operations with evict cache after execution
- `forgeSQL.updateAndEvictCache()` - Basic Drizzle operations with evict cache after execution
- `forgeSQL.deleteAndEvictCache()` -Basic Drizzle operations with evict cache after execution

**Optional Migration:**
You can optionally migrate to the new API methods for better performance and cache management:

```typescript
// ❌ Old approach (still works)
await forgeSQL.modifyWithVersioning().insert(Users, [userData]);

// ✅ New approach (recommended for new code)
await forgeSQL.insert(Users).values(userData);
// or for versioned operations with cache management
await forgeSQL.modifyWithVersioningAndEvictCache().insert(Users, [userData]);
```

#### 3. Automatic Migration Script

You can use a simple find-and-replace to migrate your code:

```bash
# Replace modify() calls
find . -name "*.ts" -o -name "*.js" | xargs sed -i 's/forgeSQL\.modify()/forgeSQL.modifyWithVersioning()/g'

# Replace crud() calls  
find . -name "*.ts" -o -name "*.js" | xargs sed -i 's/forgeSQL\.crud()/forgeSQL.modifyWithVersioning()/g'
```

#### 4. Breaking Changes

**Important:** The old methods (`modify()` and `crud()`) have been completely removed in version 2.1.x.

- ❌ **2.1.x**: Old methods are no longer available
- ✅ **Migration Required**: You must update your code to use the new methods

## License
This project is licensed under the **MIT License**.  
Feel free to use it for commercial and personal projects.

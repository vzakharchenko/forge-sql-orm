# Forge SQL ORM

[![forge-sql-orm CI](https://github.com/vzakharchenko/forge-sql-orm/actions/workflows/node.js.yml/badge.svg)](https://github.com/vzakharchenko/forge-sql-orm/actions/workflows/node.js.yml)

**Forge-SQL-ORM** is an ORM designed for working with [@forge/sql](https://developer.atlassian.com/platform/forge/storage-reference/sql-tutorial/) in **Atlassian Forge**. It is built on top of [MikroORM](https://mikro-orm.io/docs/query-builder) and provides advanced capabilities for working with relational databases inside Forge.

## Key Features

- ✅ **Supports foreign keys** at the entity level.
- ✅ **Supports complex SQL queries** with joins and filtering.
- ✅ **Batch insert support** with duplicate key handling.
- ✅ **Schema migration support**, allowing automatic schema evolution.
- ✅ **Automatic entity generation** from MySQL/tidb databases.
- ✅ **Automatic migration generation** from MySQL/tidb databases.
- ✅ **Optimistic Locking** Ensures data consistency by preventing conflicts when multiple users update the same record.

🚀 **Development in Progress** 🚀
I am currently working on implementing the following features:
- 🗑️ **Soft Deletion Support** – Allows marking records as deleted without actually removing them from the database, enabling easy recovery.
- 🏗️ **Complex Query Handling** _(JOIN, GROUP BY, etc.) without requiring an EntitySchema_ – Simplifies the execution of advanced SQL queries without the need to define additional schemas.
---

## Installation

Forge-SQL-ORM is designed to work with @forge/sql and requires some additional setup to ensure compatibility within Atlassian Forge.

✅ Step 1: Install Dependencies

```sh
npm install forge-sql-orm -S
npm install @forge/sql -S
npm i @mikro-orm/entity-generator -D
npm i mysql -D
```

This will:

Install Forge-SQL-ORM (the ORM for @forge/sql).
Install @forge/sql, the Forge database layer.

✅ Step 2: Configure Post-Installation Patch
By default, MikroORM and Knex include some features that are not compatible with Forge's restricted runtime.
To fix this, we need to patch these libraries after installation.

Run:

```sh
npm pkg set scripts.postinstall="forge-sql-orm patch:mikroorm"
```

✅ Step 3: Apply the Patch
After setting up the postinstall script, run:

```sh
npm i
```

This will:

Trigger the postinstall hook, which applies the necessary patches to MikroORM and Knex.
Ensure everything is correctly configured for running inside Forge.

🔧 Why is the Patch Required?
Atlassian Forge has a restricted execution environment, which does not allow:

- Dynamic import(id) calls, commonly used in MikroORM.
- Direct file system access, which MikroORM sometimes relies on.
- Unsupported database dialects, such as PostgreSQL or SQLite.
- The patch removes these unsupported features to ensure full compatibility.

## Step-by-Step Migration Workflow

1. **Generate initial entity models from an existing database**

   ```sh
   npx forge-sql-orm generate:model --dbName testDb --output ./database/entities
   ```

   _(This is done only once when setting up the project)_

2. **Create the first migration**

   ```sh
   npx forge-sql-orm migrations:create --dbName testDb --entitiesPath ./database/entities --output ./database/migration
   ```

   _(This initializes the database migration structure, also done once)_

3. **Deploy to Forge and verify that migrations work**

   - Deploy your **Forge app** with migrations.
   - Run migrations using a **Forge web trigger** or **Forge scheduler**.

4. **Modify the database (e.g., add a new column, index, etc.)**

   - Use **DbSchema** or manually alter the database schema.

5. **Update the migration**

   ```sh
   npx forge-sql-orm migrations:update --dbName testDb --entitiesPath ./database/entities --output ./database/migration
   ```

   - ⚠️ **Do NOT update entities before this step!**
   - If entities are updated first, the migration will be empty!

6. **Deploy to Forge and verify that the migration runs without issues**

   - Run the updated migration on Forge.

7. **Update the entity models**

   ```sh
   npx forge-sql-orm generate:model --dbName testDb --output ./database/entities
   ```

8. **Repeat steps 4-7 as needed**

**⚠️ WARNING:**

- **Do NOT swap steps 7 and 5!** If you update models before generating a migration, the migration will be empty!
- Always generate the **migration first**, then update the **entities**.

---

# Connection to ORM

```js
import ForgeSQL from "forge-sql-orm";
import { Orders } from "./entities/Orders";
import { Users } from "./entities/Users";
import ENTITIES from "./entities";

const forgeSQL = new ForgeSQL(ENTITIES);
```

- Fetch Data:

```js
const formattedQuery = forgeSQL
  .createQueryBuilder(Users)
  .select("*")
  .limit(limit)
  .offset(offset)
  .getFormattedQuery();
//select `u0`.* from `users` as `u0` limit 10 offset 1
return await forgeSQL.fetch().executeSchemaSQL(formattedQuery, UsersSchema);
```

- Raw Fetch Data

```js
const users = (await forgeSQL.fetch().executeRawSQL) < Users > "SELECT * FROM users";
```

- Complex Query

```js
// Define schema for join result
class InnerJoinResult {
    name!: string;
    product!: string;
}

export const innerJoinSchema = new EntitySchema<InnerJoinResult>({
    class: InnerJoinResult,
    properties: {
        name: { type: "string", fieldName: "name" },
        product: { type: "string", fieldName: "product" }
    },
});
innerJoinSchema.init();

// Execute query
const query = forgeSQL.createQueryBuilder(Orders, "order")
    .limit(10).offset(10)
    .innerJoin("user", "user")
    .select(["user.name", "order.product"])
    .getFormattedQuery();
// select `user`.`name`, `order`.`product` from `orders` as `order` inner join `users` as `user` on `order`.`user_id` = `user`.`id` limit 10 offset 10
const results = await forgeSQL.fetch().executeSchemaSQL(query, innerJoinSchema);
console.log(results);
```

🛠 CRUD Operations

- Insert Data

```js
// INSERT INTO users (id, name) VALUES (1,'Smith')
const userId = await forgeSQL.crud().insert(UsersSchema, [{ id: 1, name: "Smith" }]);
```

- Insert Bulk Data

```js
// INSERT INTO users (id,name) VALUES (2,'Smith'), (3,'Vasyl')
await forgeSQL.crud().insert(UsersSchema, [
  { id: 2, name: "Smith" },
  { id: 3, name: "Vasyl" },
]);
```

- Insert Data with duplicates

```js
// INSERT INTO users (id,name) VALUES (4,'Smith'), (4, 'Vasyl') ON DUPLICATE KEY UPDATE name = VALUES(name)
await forgeSQL.crud().insert(
  UsersSchema,
  [
    { id: 4, name: "Smith" },
    { id: 4, name: "Vasyl" },
  ],
  true,
);
```

- Update Data

```js
await forgeSQL.crud().updateById({ id: 1, name: "Smith Updated" }, UsersSchema);
```

- Delete Data

```js
await forgeSQL.crud().deleteById(1, UsersSchema);
```

## Quick Start

### 1. Designing the Database

You can start by designing a **MySQL/tidb database** using tools like [DbSchema](https://dbschema.com/) or by using an existing MySQL/tidb database.

**Schema visualization:**
![](https://github.com/vzakharchenko/forge-sql-orm/blob/master/img/joinSchema.png?raw=true)

#### DDL Scripts

```sql
CREATE DATABASE testDb;
CREATE  TABLE testDb.users (
                              id                   INT    NOT NULL AUTO_INCREMENT   PRIMARY KEY,
                              name                 VARCHAR(200)
) engine=InnoDB;

CREATE  TABLE testDb.orders (
                               id                   INT    NOT NULL   PRIMARY KEY,
                               user_id              INT    NOT NULL   ,
                               product              VARCHAR(200)
) engine=InnoDB;

ALTER TABLE testDb.orders ADD CONSTRAINT fk_orders_users FOREIGN KEY ( user_id ) REFERENCES testDb.users( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;
```

### 2. Generate Models

Run the following command to generate entity models based on your database:

```sh
npx forge-sql-orm generate:model --host localhost --port 3306 --user root --password secret --dbName testDb --output ./database/entities
```

This will generate **entity schemas** in the `./database/entities` directory.
Users Model and Schema:

```js
import { EntitySchema } from 'forge-sql-orm';

export class Users {
  id!: number;
  name?: string;
}

export const UsersSchema = new EntitySchema({
  class: Users,
  properties: {
    id: { primary: true, type: 'integer', unsigned: false },
    name: { type: 'string', length: 200, nullable: true },
  },
});

```

Orders Model and Schema:

```js
import { EntitySchema } from 'forge-sql-orm';
import { Users } from './Users';

export class Orders {
  id!: number;
  user!: Users;
  userId!: number;
  product?: string;
}

export const OrdersSchema = new EntitySchema({
  class: Orders,
  properties: {
    id: { primary: true, type: 'integer', unsigned: false, autoincrement: false },
    user: {
      kind: 'm:1',
      entity: () => Users,
      fieldName: 'user_id',
      index: 'fk_orders_users',
    },
    userId: {
      type: 'integer',
      fieldName: 'user_id',
      persist: false,
      index: 'fk_orders_users',
    },
    product: { type: 'string', length: 200, nullable: true },
  },
});
```

index.ts

```js
import { Orders } from "./Orders";
import { Users } from "./Users";

export default [Orders, Users];
```

### 3. Create the First Migration

After generating the models, create the first migration file that represents the current database state:

```sh
npx forge-sql-orm migrations:create --dbName testDb --entitiesPath ./database/entities --output ./database/migration
```

Generated migration:

```js
import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
    return migrationRunner
        .enqueue("v1_MIGRATION0", "create table `users` (`id` int not null auto_increment primary key, `name` varchar(200) null)")
        .enqueue("v1_MIGRATION1", "create table `orders` (`id` int not null, `user_id` int not null, `product` varchar(200) null, primary key (`id`))")
        .enqueue("v1_MIGRATION2", "alter table `orders` add index `fk_orders_users`(`user_id`)");
};
```

### 4. Deploy and Run Migrations

```js
import migration from "./database/migration";
import sql, { migrationRunner } from "@forge/sql";

export const trigger = async () => {
  console.log("Provisioning the database");
  await sql._provision();

  console.log("Running schema migrations");
  const migrations = await migration(migrationRunner);
  const successfulMigrations = await migrations.run();
  console.log("Migrations applied:", successfulMigrations);

  const migrationHistory = (await migrationRunner.list())
    .map((y) => `${y.id}, ${y.name}, ${y.migratedAt.toUTCString()}`)
    .join("\n");

  console.log("Migrations history:\nid, name, migrated_at\n", migrationHistory);

  return {
    headers: { "Content-Type": ["application/json"] },
    statusCode: 200,
    statusText: "OK",
    body: "Migrations successfully executed",
  };
};
```

### 5. Running Queries

Once the migrations are applied, you can start working with the ORM:

```js
import Entities from "./entities";
import ForgeSQL from "forge-sql-orm";
import { UsersSchema, Users } from "./entities/Users";

const forgeSQL = new ForgeSQL(ENTITIES);

// Insert Data
const user = new Users();
user.name = "John Doe";
const userId = await forgeSQL.crud().insert(UsersSchema, [user]);
console.log("Inserted User ID:", userId);

// Fetch Users
const users = await forgeSQL.fetch().executeSchemaSQL("SELECT * FROM users", UsersSchema);
console.log(users);
```

### 6. Updating Database Schema

If you modify the database schema, you can generate an update migration:

Modify the schema in DbSchema
![](https://github.com/vzakharchenko/forge-sql-orm/blob/master/img/joinSchema2.png?raw=true)
or manually run:

```sh
ALTER TABLE `users` ADD email VARCHAR(255);
```

Then, generate a new migration:

```sh
npx forge-sql-orm migrations:update --dbName testDb --entitiesPath ./database/entities --output ./database/migration
```

Generated migration:

```js
import { MigrationRunner } from "@forge/sql/out/migration";

export default (migrationRunner: MigrationRunner): MigrationRunner => {
    return migrationRunner.enqueue("v2_MIGRATION0", "alter table `users` add `email` varchar(255) null");
};
```

### 7. Updating Entities

After applying the migration, update your entity models:

```sh
npx forge-sql-orm generate:model --dbName testDb --output ./database/entities
```

Updated Users Model and Schema:

```js
import { EntitySchema } from 'forge-sql-orm';

export class Users {
  id!: number;
  name?: string;
  email?: string;
}

export const UsersSchema = new EntitySchema({
  class: Users,
  properties: {
    id: { primary: true, type: 'integer', unsigned: false },
    name: { type: 'string', length: 200, nullable: true },
    email: { type: 'string', nullable: true },
  },
});

```

---

## Complex Queries

### INNER JOIN Example

Using **ForgeSQLORM**, you can perform complex queries with joins.  
For example, fetching **users and their purchased products**:

```ts
import ForgeSQL, { EntitySchema } from "forge-sql-orm";
import { Orders } from "./entities/Orders";
import { Users } from "./entities/Users";
import ENTITIES from "./entities";

const forgeSQL = new ForgeSQL(ENTITIES);

// Define schema for join result
class InnerJoinResult {
  name!: string;
  product!: string;
}

export const innerJoinSchema = new EntitySchema<InnerJoinResult>({
  class: InnerJoinResult,
  properties: {
    name: { type: "string", fieldName: "name" },
    product: { type: "string", fieldName: "product" },
  },
});
innerJoinSchema.init();

// Execute query
const query = forgeSQL
  .createQueryBuilder(Orders, "order")
  .limit(10)
  .offset(0)
  .innerJoin("user", "user")
  .select(["user.name", "order.product"])
  .getFormattedQuery();

const results = await forgeSQL.fetch().executeSchemaSQL(query, innerJoinSchema);
console.log(results);
```

---

## ForgeSqlOrmOptions

Below is an updated documentation snippet in English, including details for the `disableOptimisticLocking` option:

---

## ForgeSqlOrmOptions

The `ForgeSqlOrmOptions` object allows customization of ORM behavior. Currently, it supports the following options:

| Option                     | Type      | Description                                                                                                                                                                                                                     |
| -------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `logRawSqlQuery`           | `boolean` | Enables logging of raw SQL queries in the Atlassian Forge Developer Console. Useful for debugging and monitoring. Defaults to `false`.                                                                                         |
| `disableOptimisticLocking` | `boolean` | Disables optimistic locking. When set to `true`, no additional condition (e.g., a version check) is added during record updates, which can improve performance. However, this may lead to conflicts when multiple transactions attempt to update the same record concurrently. |

---

### Example: Initializing `ForgeSQL` with Options

```typescript
import ForgeSQL from "forge-sql-orm";
import { Orders } from "./entities/Orders";
import { Users } from "./entities/Users";
import ENTITIES from "./entities";

const options = {
  logRawSqlQuery: true, // Enable query logging for debugging purposes
};

const forgeSQL = new ForgeSQL(ENTITIES, options);
```

## Using `getKnex()` for Advanced SQL Queries

The `getKnex()` method allows direct interaction with Knex.js, enabling execution of raw SQL queries and complex query building.

### Example: Finding Duplicate Records in `UsersSchema`

```typescript
const fields: string[] = ["name", "email"];

// Define selected fields, including a count of duplicate occurrences
const selectFields: Array<string | Knex.Raw> = [
  ...fields,
  forgeSQL.getKnex().raw("COUNT(*) as count"),
];

// Create a QueryBuilder with grouping and filtering for duplicates
let selectQueryBuilder = forgeSQL
  .createQueryBuilder(UsersSchema)
  .select(selectFields as unknown as string[])
  .groupBy(fields)
  .having("COUNT(*) > 1");

// Generate the final SQL query with ordering by count
const query = selectQueryBuilder.getKnexQuery().orderByRaw("count ASC").toSQL().sql;

/* 
  SQL Query:
  SELECT `u0`.`name`, `u0`.`email`, COUNT(*) as count 
  FROM `users` AS `u0` 
  GROUP BY `u0`.`name`, `u0`.`email` 
  HAVING COUNT(*) > 1 
  ORDER BY count ASC;
*/

// Execute the SQL query and retrieve results
const duplicateResult = await forgeSQL
  .fetch()
  .executeSchemaSQL<DuplicateResult>(query, DuplicateSchema);
```

🔹 **What does this example do?**

1. Selects `name` and `email`, along with the count of duplicate occurrences (`COUNT(*) as count`).
2. Groups the data by `name` and `email` to identify duplicates.
3. Filters the results to include only groups with more than one record (`HAVING COUNT(*) > 1`).
4. Sorts the final results in ascending order by count (`ORDER BY count ASC`).
5. Executes the SQL query and returns the duplicate records.

---

## Usage with MikroORM Generator

If you prefer to use MikroORM's default entity generator, then manually import your entities:

```ts
import { UserEntity, TaskEntity } from "./entities";
```

---

## Forge SQL ORM CLI Documentation

The CLI provides commands to generate models and manage migrations for MikroORM in Forge.

---

### 📌 Available Commands

```sh
$ npx forge-sql-orm --help

Usage: forge-sql-orm [options] [command]

Options:
  -V, --version                Output the version number
  -h, --help                   Display help for command

Commands:
  generate:model [options]     Generate MikroORM models from the database.
  migrations:create [options]  Generate an initial migration for the entire database.
  migrations:update [options]  Generate a migration to update the database schema.
  patch:mikroorm               Patch MikroORM and Knex dependencies to work properly with Forge.
  help [command]               Display help for a specific command.
```

---

### 📌 Entity Generation

```sh
npx forge-sql-orm generate:model --host localhost --port 3306 --user root --password secret --dbName mydb --output ./src/database/entities --versionField updatedAt --saveEnv
```

This command will:

- Connect to `mydb` on `localhost:3306`.
- Generate MikroORM entity classes.
- Save them in `./src/database/entities`.
- Create an `index.ts` file with all entities.
- **`--versionField updatedAt`**: Specifies the field used for entity versioning.
- **`--saveEnv`**: Saves configuration settings to `.env` for future use.

#### 🔹 VersionField Explanation

The `--versionField` option is crucial for handling entity versioning. It should be a field of type `datetime`, `integer`, or `decimal`. This field is used to track changes to entities, ensuring that updates follow proper versioning strategies.

**Example:**

- `updatedAt` (datetime) - Commonly used for timestamp-based versioning.
- `versionNumber` (integer) - Can be used for numeric version increments.

If the specified field does not meet the required criteria, warnings will be logged.

---

### 📌 Database Migrations

```sh
npx forge-sql-orm migrations:create --host localhost --port 3306 --user root --password secret --dbName mydb --output ./src/database/migration --entitiesPath ./src/database/entities --saveEnv
```

This command will:

- Create the initial migration based on all detected entities.
- Save migration files in `./src/database/migration`.
- Create `index.ts` for automatic migration execution.
- **`--saveEnv`**: Saves configuration settings to `.env` for future use.

---

### 📌 Update Schema Migration

```sh
npx forge-sql-orm migrations:update --host localhost --port 3306 --user root --password secret --dbName mydb --output ./src/database/migration --entitiesPath ./src/database/entities --saveEnv
```

This command will:

- Detect schema changes (new tables, columns, indexes).
- Generate only the required migrations.
- Update `index.ts` to include new migrations.
- **`--saveEnv`**: Saves configuration settings to `.env` for future use.

---

### 📌 Using the patch:mikroorm Command

If needed, you can manually apply the patch at any time using:

```sh
npx forge-sql-orm patch:mikroorm
```

This command:

- Removes unsupported database dialects (e.g., PostgreSQL, SQLite).
- Fixes dynamic imports to work in Forge.
- Ensures Knex and MikroORM work properly inside Forge.

---

### 📌 Configuration Methods

You can define database credentials using:

1️⃣ **Command-line arguments**:

```sh
--host, --port, --user, --password, --dbName, --output, --versionField, --saveEnv
```

2️⃣ **Environment variables**:

```bash
export FORGE_SQL_ORM_HOST=localhost
export FORGE_SQL_ORM_PORT=3306
export FORGE_SQL_ORM_USER=root
export FORGE_SQL_ORM_PASSWORD=secret
export FORGE_SQL_ORM_DBNAME=mydb
```

3️⃣ **Using a `.env` file**:

```sh
FORGE_SQL_ORM_HOST=localhost
FORGE_SQL_ORM_PORT=3306
FORGE_SQL_ORM_USER=root
FORGE_SQL_ORM_PASSWORD=secret
FORGE_SQL_ORM_DBNAME=mydb
```

4️⃣ **Interactive prompts** (if missing parameters, the CLI will ask for input).

---

### 📌 Manual Migration Execution

To manually execute migrations in your application:

```js
import migrationRunner from "./src/database/migration";
import { MigrationRunner } from "@forge/sql/out/migration";

const runner = new MigrationRunner();
await migrationRunner(runner);
await runner.run(); // ✅ Apply migrations
```

This approach allows you to apply migrations programmatically in a Forge application.

---

📜 **License**
This project is licensed under the **MIT License**.  
Feel free to use it for commercial and personal projects.

# forge-sql-orm-cli

[![npm version (CLI)](https://img.shields.io/npm/v/forge-sql-orm-cli?label=cli)](https://www.npmjs.com/package/forge-sql-orm-cli)
[![npm downloads (CLI)](https://img.shields.io/npm/dm/forge-sql-orm-cli?label=cli%20downloads)](https://www.npmjs.com/package/forge-sql-orm-cli)

[![License](https://img.shields.io/github/license/vzakharchenko/forge-sql-orm)](https://github.com/vzakharchenko/forge-sql-orm/blob/master/LICENSE)

[![forge-sql-orm CI](https://github.com/vzakharchenko/forge-sql-orm/actions/workflows/node.js.yml/badge.svg)](https://github.com/vzakharchenko/forge-sql-orm/actions/workflows/node.js.yml)
[[![DeepScan grade](https://deepscan.io/api/teams/26652/projects/29272/branches/940614/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=26652&pid=29272&bid=940614)



A command-line interface tool for managing Atlassian Forge SQL migrations and model generation with Drizzle ORM integration.

## About

`forge-sql-orm-cli` is a new package that provides a command-line interface for managing database migrations and models in Atlassian Forge SQL applications. It integrates with Drizzle ORM to provide type-safe database operations and schema management.

## Features

- Generate Drizzle ORM models from your Atlassian Forge SQL database schema
- Create and manage Atlassian Forge SQL migrations
- Automatic version tracking for schema changes
- Support for MySQL databases in Atlassian Forge environment
- Environment-based configuration

## Installation

```bash
npm install -g forge-sql-orm-cli
```

## Available Commands

### Generate Models

Generate Drizzle ORM models and version metadata from your Atlassian Forge SQL database schema. This command will create TypeScript files with Drizzle table definitions and schema types compatible with Atlassian Forge SQL.

```bash
forge-sql-orm-cli generate:model [options]
```

Options:
- `--saveEnv` - Save the configuration to a `.env` file
- `--host` - Database host (default: localhost)
- `--port` - Database port (default: 3306)
- `--user` - Database user
- `--password` - Database password
- `--dbName` - Database name
- `--output` - Output directory for generated models (default: ./database/entities)
- `--versionField` - Name of the version field (default: version)

The generated models will include:
- Drizzle table definitions compatible with Atlassian Forge SQL
- TypeScript types for your database schema
- Version metadata for tracking schema changes

### Create Migration

Create a new Atlassian Forge SQL migration file based on your current database schema. This will generate SQL statements that can be used to update your Atlassian Forge SQL database schema.

```bash
forge-sql-orm-cli migrations:create [options]
```

Options:
- `--saveEnv` - Save the configuration to a `.env` file
- `--host` - Database host (default: localhost)
- `--port` - Database port (default: 3306)
- `--user` - Database user
- `--password` - Database password
- `--dbName` - Database name
- `--output` - Output directory for migrations (default: ./database/migration)
- `--entitiesPath` - Path to entity files (default: ./database/entities)
- `--force` - Force overwrite existing migrations. Without this parameter, the command will fail if migrations already exist.

### Update Migration

Update an existing Atlassian Forge SQL migration with the latest schema changes. This command will compare your current database schema with the Drizzle models and generate the necessary SQL statements for Atlassian Forge SQL.

```bash
forge-sql-orm-cli migrations:update [options]
```

Options:
- `--saveEnv` - Save the configuration to a `.env` file
- `--host` - Database host (default: localhost)
- `--port` - Database port (default: 3306)
- `--user` - Database user
- `--password` - Database password
- `--dbName` - Database name
- `--output` - Output directory for migrations (default: ./database/migration)
- `--entitiesPath` - Path to entity files (default: ./database/entities)

### Drop Migration

Create an Atlassian Forge SQL migration to drop tables from the database. This is useful when you need to remove tables or reset your database schema in Atlassian Forge environment.

```bash
forge-sql-orm-cli migrations:drop [options]
```

Options:
- `--saveEnv` - Save the configuration to a `.env` file
- `--host` - Database host (default: localhost)
- `--port` - Database port (default: 3306)
- `--user` - Database user
- `--password` - Database password
- `--dbName` - Database name
- `--output` - Output directory for migrations (default: ./database/migration)
- `--entitiesPath` - Path to entity files (default: ./database/entities)

## Atlassian Forge SQL Integration

This CLI tool is designed to work seamlessly with Atlassian Forge SQL and Drizzle ORM. It provides the following features:

1. **Model Generation**
   - Creates Drizzle table definitions compatible with Atlassian Forge SQL
   - Generates TypeScript types for your schema
   - Supports all Drizzle column types
   - Maintains relationships between tables
   - Ensures compatibility with Atlassian Forge SQL constraints

2. **Migration Management**
   - Generates Atlassian Forge SQL-compatible migrations
   - Tracks schema versions
   - Supports incremental updates
   - Handles table creation, modification, and deletion
   - Ensures migrations follow Atlassian Forge SQL best practices

3. **Type Safety**
   - Full TypeScript support
   - Type-safe database operations
   - Automatic type generation from schema
   - Validation against Atlassian Forge SQL requirements

## Environment Variables

The CLI supports loading configuration from environment variables. You can either:
1. Use the `--saveEnv` flag to save your configuration to a `.env` file
2. Create a `.env` file manually with the following variables:

```env
FORGE_SQL_ORM_HOST=localhost
FORGE_SQL_ORM_PORT=3306
FORGE_SQL_ORM_USER=your_user
FORGE_SQL_ORM_PASSWORD=your_password
FORGE_SQL_ORM_DB_NAME=your_database
FORGE_SQL_ORM_OUTPUT=./database/entities
FORGE_SQL_ORM_ENTITIES_PATH=./database/entities
FORGE_SQL_ORM_VERSION_FIELD=version
```

## Examples

### Generate Drizzle Models for Atlassian Forge SQL

```bash
forge-sql-orm-cli generate:model --host localhost --port 3306 --user root --password secret --dbName myapp --output ./database/entities --saveEnv
```

This will generate Drizzle table definitions and TypeScript types compatible with Atlassian Forge SQL in the specified output directory.

### Create Atlassian Forge SQL Migration

```bash
forge-sql-orm-cli migrations:create --host localhost --port 3306 --user root --password secret --dbName myapp --output ./database/migration --entitiesPath ./database/entities --saveEnv
```

This will create a new Atlassian Forge SQL migration file with SQL statements to update your database schema.

### Update Atlassian Forge SQL Migration

```bash
forge-sql-orm-cli migrations:update --host localhost --port 3306 --user root --password secret --dbName myapp --output ./database/migration --entitiesPath ./database/entities --saveEnv
```

This will update an existing migration with the latest schema changes for Atlassian Forge SQL.

### Drop Tables with Atlassian Forge SQL Migration

```bash
forge-sql-orm-cli migrations:drop --host localhost --port 3306 --user root --password secret --dbName myapp --output ./database/migration --entitiesPath ./database/entities --saveEnv
```

This will create a migration to drop specified tables from your Atlassian Forge SQL database.

## Development

### Running Tests

```bash
npm test
```

### Running Tests with Coverage

```bash
npm run test:coverage
```

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

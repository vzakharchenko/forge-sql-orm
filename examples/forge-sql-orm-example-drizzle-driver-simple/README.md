# Forge SQL ORM Drizzle Driver Example

This example demonstrates how to use Drizzle ORM directly with Atlassian Forge SQL using the custom driver from forge-sql-orm. Unlike other examples ([forge-sql-orm-example-simple](../forge-sql-orm-example-simple) and [dynamic example](../forge-sql-orm-example)) that use the full Forge-SQL-ORM functionality, this example shows a minimal setup using only the Drizzle driver.

## Key Differences

- Uses Drizzle ORM directly without additional Forge-SQL-ORM features
- Provides basic CRUD operations with type safety
- Demonstrates minimal setup required for using Drizzle with Forge SQL

If you need advanced features like optimistic locking or automatic versioning, check out the [full ORM example](../forge-sql-orm-example-simple) instead.
See the [Forge documentation](https://developer.atlassian.com/platform/forge/) for more details.

## Requirements

Before starting, ensure that your Forge environment is set up. Follow the [Forge setup guide](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions.

## Quick Start

### Install dependencies

```sh
npm install
```

### Install frontend dependencies (inside `static/forge-orm-basic[forge-orm-basic](static/forge-orm-basic)` directory)

```sh
npm install
```

### Build the frontend (inside `static/forge-orm-basic[forge-orm-basic](static/forge-orm-basic)` directory)

```sh
npm run build
```

### Register your application on the Atlassian platform (only once)

```sh
forge register
```

### Deploy your app

```sh
forge deploy
```

### Install the app on an Atlassian site (only once)

```sh
forge install -s <environment>.atlassian.net
```

### Using the Application

This example allows you to:

- Create user entities with `name` and `email` fields.
- Retrieve all users from the database.
- Update user details.
- Delete users.
- Find duplicate users based on the `name` or `email` fields.

1. You can add users with `name` and `email` fields.
2. You can retrieve all users from the database.
3. You can update user details.
4. You can delete a user.

### Notes

- Use `forge deploy` to persist code changes.
- Use `forge install` only when installing the app on a new site.
- Once the app is installed, any new deployments will be automatically reflected without needing to reinstall.

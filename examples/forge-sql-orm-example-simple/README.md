# Forge SQL ORM Basic Example

This application demonstrates basic CRUD operations using Forge SQL ORM. Unlike the [dynamic example](../forge-sql-orm-example), this version works with a predefined database schema and does not automatically reflect changes in the UI when the database schema is modified.

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

### Modifying the Database Schema

If you need to update the schema (e.g., add a new field `age`), manually modify the database:

```sh
export MYSQL_ROOT_PASSWORD=admin
docker exec forge-sql-orm-basic-db mysql -uroot -p${MYSQL_ROOT_PASSWORD} -e "use forgesqlorm; ALTER TABLE users ADD age INT;"
```

Deploy the updated app:

```sh
forge deploy
```

### Notes

- Use `forge deploy` to persist code changes.
- Use `forge install` only when installing the app on a new site.
- Once the app is installed, any new deployments will be automatically reflected without needing to reinstall.

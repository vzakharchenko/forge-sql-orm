# Forge SQL ORM Example

This application works with dynamic tables: when you add a new field to the database, it will automatically appear in the UI. The application is displayed on a Jira global page.

See the [Forge documentation](https://developer.atlassian.com/platform/forge/) for more details.

## Requirements

Before starting, ensure that your Forge environment is set up. Follow the [Forge setup guide](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions.

## Quick Start

### Install dependencies

```sh
npm install
```

### Start MySQL in Docker and create a database

```shell
./create-and-run-db.sh
```

or

```sh
export MYSQL_ROOT_PASSWORD=admin
docker run -d --name forge-sql-orm-example-db -p 3366:3306 -e MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} --security-opt seccomp=unconfined --restart=always mysql
# wait 30 sec
docker exec forge-sql-orm-example-db mysql -uroot -padmin -e "create database dynamicforgesqlorm"
docker exec forge-sql-orm-example-db mysql -uroot -p${MYSQL_ROOT_PASSWORD} -e "grant all privileges on dynamicforgesqlorm.* TO 'root'@'%';"
docker exec forge-sql-orm-example-db mysql -uroot -p${MYSQL_ROOT_PASSWORD} -e "use dynamicforgesqlorm; create table users (id int not null auto_increment primary key, name varchar(200) null)"
```

### Generate models

```sh
npm run models:create
```

### Generate migrations

```sh
npm run migration:create
```

### Install frontend dependencies (inside `static/forge-orm-example[forge-orm-example](static/forge-orm-example)` directory)

```sh
npm install
```

### Build the frontend (inside `static/forge-orm-example[forge-orm-example](static/forge-orm-example)` directory)

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

### Get the Web Trigger URL

```sh
forge webtrigger

? Select a web trigger: invoke-schema-migration

Copy your web trigger URL below to start using it:

https://c0f17555-2e0a-4c3d-ac3c-e1eb6c4b86a9.hello.atlassian-dev.net/x1/CrBtzGoiNboUxjhROYWVJa3aSm4
```

### Run migrations

Open the copied URL in your browser. You should see the message: `'Migrations successfully executed'`.

### Open the application in Jira

Go to `<environment>.atlassian.net` and open the `Forge SQL ORM Data Sync` app.

### Using the Application

1. You can add users with only the `name` field initially since your table has only one column.
2. If you add more than one record, you can sort the table by the `name` field.
3. If you add two records with the same name, you can click the "Find Duplicates" button. It will display two columns: `count` and `name`.

### Modifying the Database Schema

1. If you need to add a new field (e.g., `email`), update the table structure:

```sh
export MYSQL_ROOT_PASSWORD=admin
docker exec forge-sql-orm-example-db mysql -uroot -p${MYSQL_ROOT_PASSWORD} -e "use dynamicforgesqlorm; ALTER TABLE users ADD email VARCHAR(255);"
```

2. Update migrations:

```sh
npm run migration:update
```

3. Update models:

```sh
npm run models:create
```

4. Deploy the updated app:

```sh
forge deploy
```

5. Get the new Web Trigger URL:

```sh
forge webtrigger
```

6. Open the Web Trigger URL in a browser. You should see `'Migrations successfully executed'`.
7. Refresh the Jira app page (`<environment>.atlassian.net`) to see the new columns (`name` and `email`).
8. The duplicate search feature will now work for both `name` and `email` fields.
9. You can add as many fields as needed.

### Notes

- Use `forge deploy` to persist code changes.
- Use `forge install` only when installing the app on a new site.
- Once the app is installed, any new deployments will be automatically reflected without needing to reinstall.

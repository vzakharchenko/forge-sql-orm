# Forge SQL ORM Query Analysis Example

This application demonstrates the query analysis capabilities of Forge SQL ORM, providing tools for analyzing and optimizing database queries. These features are designed for development and troubleshooting purposes only.

⚠️ **Important Note**: The query analysis features shown in this example are experimental and should be used only for troubleshooting. They rely on TiDB's `information_schema` and `performance_schema` which may change in future updates. As of April 2025, these features are available but their future availability is not guaranteed.

## Features

### 1. Query Plan Analysis

- Analyze query execution plans for both Drizzle and raw SQL queries
- View detailed execution statistics
- Understand how the database executes your queries
- Identify potential performance bottlenecks

### 2. Query History Analysis

- Track and analyze query execution history
- View execution patterns and performance trends
- Identify frequently executed queries
- Analyze query performance over time

### 3. Slow Query Analysis

- Generate and analyze slow queries
- Identify performance bottlenecks
- View detailed execution statistics
- Get optimization recommendations

## Requirements

Before starting, ensure that your Forge environment is set up. Follow the [Forge setup guide](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions.

## Quick Start

### Install dependencies

```sh
npm install
```

### Install frontend dependencies (inside `static/forge-orm-example` directory)

```sh
npm install
```

### Build the frontend (inside `static/forge-orm-example` directory)

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

## Using the Application

### Query Plan Analysis

1. Select a query to analyze
2. Click "Explain Query" to view the execution plan
3. Analyze the plan to understand:
   - How the database executes your query
   - Which indexes are being used
   - Estimated vs actual row counts
   - Resource usage at each step

### Query History Analysis

1. Execute a query to add it to the history
2. Click "Show Query History" to view past executions
3. Analyze execution patterns and performance

### Slow Query Analysis

1. Generate a slow query using the "Generate Slow Query" button
2. Click "Analyze Slow Queries" to view detailed analysis
3. Review performance metrics and optimization suggestions

## Best Practices

1. **Use Sparingly**

   - Only use these tools when actively troubleshooting performance issues
   - Avoid incorporating them into regular application logic

2. **Monitor Changes**

   - Keep track of TiDB's schema changes
   - Be prepared to update or remove analysis code if schemas change

3. **Alternative Approaches**
   - Prefer TiDB's built-in monitoring tools for production
   - Use logging and metrics for regular performance monitoring
   - Implement proper indexing and query optimization

## Notes

- Use `forge deploy` to persist code changes
- Use `forge install` only when installing the app on a new site
- Once the app is installed, any new deployments will be automatically reflected without needing to reinstall
- These analysis tools are for development and troubleshooting only
- Do not use these features in production code

# Forge SQL ORM Cache Example

This application demonstrates advanced caching capabilities using Forge SQL ORM. It showcases both local and global caching, performance analysis, and automatic cache management.

See the [Forge documentation](https://developer.atlassian.com/platform/forge/) for more details.

## Features

- **Query Performance Testing**: Compare cached vs non-cached queries
- **User & Order Management**: CRUD operations with automatic cache clearing
- **Performance Analysis**: Detailed monitoring of slow queries and memory usage
- **Cache Management**: Manual cache control and automatic invalidation

## Requirements

Before starting, ensure that your Forge environment is set up. Follow the [Forge setup guide](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions.

## Quick Start

### Backend Setup

```sh
# Install dependencies
npm install

# Register your application on the Atlassian platform (only once)
forge register

# Deploy your app
forge deploy

# Install the app on an Atlassian site (only once)
forge install
# Follow the prompts to select your environment (Jira/Confluence)
```

### Frontend Build

```sh
# Navigate to frontend directory
cd static/forge-orm-example/

# Install frontend dependencies
npm install

# Build for production
npm run build
```

### Using the Application

This example allows you to:

1. **Test Cache Performance**:
   - Execute non-cached queries (~1000ms each time)
   - Execute cached queries (instant after first run)
   - Compare performance metrics

2. **Manage Users & Orders**:
   - Add users and orders with optional ID fields
   - Automatic user matching by name
   - Automatic cache clearing after modifications

3. **Monitor Performance**:
   - Run detailed performance analysis
   - View slow queries with execution plans
   - Monitor memory usage and latency

4. **Control Cache**:
   - Clear cache manually
   - View cache statistics

### Notes

- Use `forge deploy` to persist code changes
- Use `forge install` only when installing the app on a new site
- Once the app is installed, any new deployments will be automatically reflected without needing to reinstall
- The frontend must be built before deployment for the UI to work properly

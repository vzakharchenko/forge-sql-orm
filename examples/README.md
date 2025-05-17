# Forge SQL ORM Examples

This directory contains different examples demonstrating various ways to use Forge SQL ORM.

## Available Examples

### [forge-sql-orm-example-drizzle-driver-simple](forge-sql-orm-example-drizzle-driver-simple)

Minimal example showing how to use Drizzle ORM directly with Forge SQL using our custom driver. Perfect for projects that need only basic database operations without additional ORM features.

- Direct Drizzle ORM usage
- Custom Forge SQL driver
- Basic CRUD operations
- Type-safe queries

### [forge-sql-orm-example-simple](forge-sql-orm-example-simple)

Basic example demonstrating core Forge SQL ORM features. Good starting point for new projects.

- Full ORM functionality
- Basic CRUD operations
- Query builder usage
- Simple database operations

### [forge-sql-orm-example-optimistic-locking](forge-sql-orm-example-optimistic-locking)

Demonstrates how to use optimistic locking to prevent data conflicts in concurrent operations.

- Optimistic locking implementation
- Version field handling
- Conflict prevention
- Safe data updates

### [forge-sql-orm-example-dynamic](forge-sql-orm-example-dynamic)

Shows how to work with dynamic queries and complex database operations.

- Dynamic query building
- Complex joins
- Advanced filtering
- Runtime query construction

### [forge-sql-orm-example-query-analyses](forge-sql-orm-example-query-analyses)

Demonstrates query analysis capabilities for performance optimization and debugging. This example shows how to analyze and optimize database queries using TiDB's system schemas.

- Query plan analysis
- Slow query analysis
- Query history tracking
- Performance optimization tools
- Experimental features for development and troubleshooting

⚠️ **Important Note**: The query analysis features shown in this example are experimental and should be used only for troubleshooting. They rely on TiDB's `information_schema` and `performance_schema` which may change in future updates. As of April 2025, these features are available but their future availability is not guaranteed.

### [forge-sql-orm-example-org-tracker](forge-sql-orm-example-org-tracker)

A practical example demonstrating how to work with complex database relationships and sequences. This example shows how to build an organization tracking system with user management.

- Joining tables with overlapping columns
- Using sequences for ID generation
- Complex queries with filtering
- User and organization management
- Search and filtering capabilities

### [forge-sql-orm-example-checklist](forge-sql-orm-example-checklist)

A practical example demonstrating optimistic locking implementation in a real-world scenario. This example shows how to handle concurrent modifications in a checklist feature for Jira issues.

- Optimistic locking in a real application
- Concurrent modification handling
- Automatic conflict resolution
- User-friendly conflict notifications
- Default checklist initialization
- Two update modes comparison (with/without locking)

Each example includes its own README with detailed setup instructions and usage examples.

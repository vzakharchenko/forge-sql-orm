# Forge SQL Optimistic Locking Example

This application demonstrates the implementation of optimistic locking in Forge SQL ORM. It provides a practical example of how to handle concurrent modifications in a checklist feature for Jira issues.

## Features

### 1. Checklist Management

- Create and manage checklists for Jira issues
- Track completion status of checklist items
- Automatic checklist initialization with default items
- Real-time updates with optimistic locking

### 2. Optimistic Locking Implementation

- Concurrent modification detection
- Automatic conflict resolution
- User-friendly conflict notifications
- Two update modes:
  - With optimistic locking
  - Without locking (for comparison)

### 3. Default Checklist Items

The application initializes new issues with the following default checklist:

```json
[
  { "label": "Feature flags verified", "done": false },
  { "label": "Support team notified", "done": false },
  { "label": "Release notes added", "done": false },
  { "label": "Linked issues closed", "done": false },
  { "label": "Changelog updated", "done": false }
]
```

## Requirements

Before starting, ensure that your Forge environment is set up. Follow the [Forge setup guide](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions.

## Quick Start

### Install dependencies

```sh
npm install
```

### Install frontend dependencies (inside `static/forge-orm-example` directory)

```sh
cd static/forge-orm-example
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

### Managing Checklists

1. Open any Jira issue
2. The checklist will be automatically initialized if it doesn't exist
3. Use checkboxes to mark items as complete/incomplete
4. Choose your update method:
   - "Update with Locking" - Uses optimistic locking to prevent conflicts
   - "Update without Locking" - Updates without conflict detection

### Understanding Optimistic Locking

The application demonstrates two approaches to handling concurrent modifications:

1. **With Optimistic Locking**

   - Detects concurrent modifications
   - Prevents lost updates
   - Shows who made the conflicting change
   - Automatically refreshes the checklist on conflict

2. **Without Locking**
   - Simple update without conflict detection
   - May result in lost updates if multiple users modify simultaneously
   - Useful for understanding the importance of optimistic locking

## Best Practices

1. **Use Optimistic Locking When**

   - Multiple users might edit the same data
   - Data consistency is important
   - You want to prevent lost updates
   - You need to know who made conflicting changes

2. **Consider Without Locking When**
   - Single-user scenarios
   - Data consistency is less critical
   - Performance is the primary concern

## Notes

- Use `forge deploy` to persist code changes
- Use `forge install` only when installing the app on a new site
- Once the app is installed, any new deployments will be automatically reflected without needing to reinstall
- The optimistic locking implementation uses Forge SQL ORM's built-in features
- The example demonstrates both the benefits and trade-offs of different locking strategies

# Forge SQL ORM Optimistic Update Example

This application demonstrates how to perform updates with **optimistic locking** using Forge SQL ORM. It uses a predefined database schema and does not automatically reflect changes in the UI if the database schema is modified externally.

## What Is Optimistic Locking?

Optimistic locking is a strategy used to handle concurrent data updates in multi-user environments. Instead of locking a record when a user starts editing, the system allows multiple users to read and modify the same data. Each record has a **version** field (e.g., an integer or a timestamp) that is updated whenever the record is changed.

1. **Read** – A user retrieves a record and notes the current version.
2. **Modify** – The user makes changes.
3. **Write** – When saving, the system checks if the record’s version in the database still matches the version the user originally read.
   - If it matches, the update succeeds and the version is incremented/updated.
   - If it does not match, the update fails, indicating that another user has already changed the record. The user must then refresh or re-read the data to get the latest version before trying again.

In this example, the Forge SQL ORM supports optimistic locking using either **DateTime** or **numeric** fields as versioning fields.

See the [Forge documentation](https://developer.atlassian.com/platform/forge/) for more details.

---

## Requirements

Before starting, ensure that your Forge environment is set up. Follow the [Forge setup guide](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions.

---

## Quick Start

### 1. Install dependencies

```sh
npm install
```

### 2. Install frontend dependencies (inside `static/forge-orm-basic[forge-orm-basic](static/forge-orm-basic)` directory)

```sh
npm install
```

### 3. Build the frontend (inside `static/forge-orm-basic[forge-orm-basic](static/forge-orm-basic)` directory)

```sh
npm run build
```

### 4. Register your application on the Atlassian platform (only once)

```sh
forge register
```

### 5. Deploy your app

```sh
forge deploy
```

### 6. Install the app on an Atlassian site (only once)

```sh
forge install -s <environment>.atlassian.net
```

## Using the Application

The application is available as a global Jira page titled **Forge SQL ORM Optimistic Update Example**.

### Navigating the UI

- **Tabs:**  
  Use the tabs to select the desired entity:

  - **Entity Without Version Column (No Locking)**
  - **Entity with Numeric Version Column**
  - **Entity with Date-Based Version Column**
  - **Entity with Timestamp-Based Version Column**

- **Update Records:**  
  Each entity displays records with an **Update** button next to them. Click the button to open a form that lets you modify the record.  
  If you open the same record in two different browser tabs, you'll see how optimistic locking prevents outdated updates:

  1. In one tab, modify the record and click **Update**.
  2. In the other tab, attempt to update the same record.
  3. The second update will fail if the record was modified already, indicating that the version is out of date.

- **Reset All:**  
  A **Reset All** button is provided to revert all data to its initial state, allowing you to start fresh with each test.

### Notes

- Use `forge deploy` to persist code changes.
- Use `forge install` only when installing the app on a new site.
- Once the app is installed, any new deployments will be automatically reflected without needing to reinstall.

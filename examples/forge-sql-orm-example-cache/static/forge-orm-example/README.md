# Forge SQL ORM Cache Demo

This demonstration application shows how caching works in Forge SQL ORM.

## 🚀 Features

### 1. **Query Performance Testing**

- **Non-Cached Query** (🚫): Executes a fresh query every time with 1-second delay
- **Cached Query** (✅): Uses global cache - first execution takes time, subsequent calls are instant

### 2. **User & Order Management**

- Adding new users and orders
- **User ID and Product ID are optional** - automatically generated if not provided
- Automatic matching of existing users by name
- Automatic cache clearing after operations via `executeWithCacheContext`

### 3. **Cache Management**

- Manual cache clearing
- Performance analysis with detailed results display

## 🎯 How to Use

### Testing Cache:

1. Click **"🚫 Non-Cached Query"** - query will execute ~1000ms every time
2. Click **"✅ Cached Query"** - first time ~1000ms, subsequent calls are instant
3. Compare execution times in the results

### Adding Data:

1. Fill in the user and order form
   - **User Name** and **Product** - required fields
   - **User ID** and **Product ID** - optional (auto-generated)
2. Click **"➕ Add User & Order"**
3. System will automatically find existing user by name or create a new one
4. Cache will be automatically cleared after the operation

### Cache Management:

- **"🗑️ Clear Cache"** - clears all cache
- **"📊 Run Performance Analysis"** - runs performance analysis and displays:
  - Slow queries with detailed statistics
  - Execution time, memory usage
  - SQL queries and execution plans
  - Plan caching information

## 🔧 Technical Details

### Resolvers:

- `fetch` - executes cached/non-cached queries
- `insertUserOrOrder` - adds user and order with automatic cache clearing
  - Supports optional `userId` and `productId`
  - Automatically generates IDs if not provided
  - Searches for existing users by name
- `clearCache` - clears cache
- `runPerformanceAnalyze` - performance analysis

### Caching:

- **Local Cache**: Cache within a single function call
- **Global Cache**: Persistent cache between calls (uses `@forge/kvs`)
- **Cache Context**: Automatic cache clearing after data modification operations

### SQL Queries:

```sql
-- Cached query (with LEFT JOIN)
SELECT
  demo_users.id as userId,
  demo_users.name as userName,
  demo_orders.product,
  demo_orders.id as productId,
  SLEEP(1) as sleep
FROM demo_users
LEFT JOIN demo_orders ON demo_orders.user_id = demo_users.id

-- Regular query (with INNER JOIN)
SELECT
  demo_users.id as userId,
  demo_users.name as userName,
  demo_orders.product,
  demo_orders.id as productId,
  SLEEP(1) as sleep
FROM demo_users
INNER JOIN demo_orders ON demo_orders.user_id = demo_users.id
```

## 🎨 UI Components

The application uses:

- React 18 with hooks
- TypeScript for typing
- Atlassian Design System colors
- Responsive design
- Error handling and loading states

## 🚀 Setup & Installation

### Backend Setup:

```bash
# Navigate to the main project directory
cd forge-sql-orm-example-cache/

# Install dependencies
npm install

# Register the app with Atlassian
forge register

# Deploy the app
forge deploy

# Install the app to your Atlassian environment
forge install
# Follow the prompts to select your environment (Jira/Confluence)
```

### Frontend Build:

```bash
# Navigate to the frontend directory
cd static/forge-orm-example/

# Install dependencies
npm install

# Build for production
npm run build
```

## 📊 Expected Results

- **Non-Cached Query**: ~1000ms every time
- **Cached Query**: ~1000ms first time, <50ms subsequent calls
- **Adding Data**: Automatic cache clearing
- **Cache Management**: Instant clearing/analysis
- **Performance Analysis**: Detailed report on slow queries with:
  - Execution time (latency)
  - Memory usage
  - SQL queries and execution plans
  - Execution and caching statistics

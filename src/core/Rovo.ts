import {
  ForgeSqlOperation,
  ForgeSqlOrmOptions,
  RlsSettings,
  RovoIntegration,
  RovoIntegrationSetting,
  RovoIntegrationSettingCreator,
} from "./ForgeSQLQueryBuilder";
import { Result, sql } from "@forge/sql";
import { Parser, Select } from "node-sql-parser";
import { AnyMySqlTable, MySqlColumn } from "drizzle-orm/mysql-core";
import { getTableName } from "drizzle-orm/table";

/**
 * Implementation of RovoIntegrationSetting interface.
 * Stores configuration for Rovo query execution including user context, table name, and RLS settings.
 *
 * @class RovoIntegrationSettingImpl
 * @implements {RovoIntegrationSetting}
 */
class RovoIntegrationSettingImpl implements RovoIntegrationSetting {
  private readonly accountId: string;
  private readonly tableName: string;
  private readonly contextParam: Record<string, string>;
  private readonly rls: boolean;
  private readonly rlsFields: string[];
  private readonly rlsWherePart: (alias: string) => string;

  /**
   * Creates a new RovoIntegrationSettingImpl instance.
   *
   * @param {string} accountId - The account ID of the active user
   * @param {string} tableName - The name of the table to query
   * @param {Record<string, string>} contextParam - Context parameters for query substitution
   * @param {boolean} rls - Whether Row-Level Security is enabled
   * @param {string[]} rlsFields - Array of field names required for RLS validation
   * @param {(alias: string) => string} rlsWherePart - Function that generates WHERE clause for RLS
   */
  constructor(
    accountId: string,
    tableName: string,
    contextParam: Record<string, string>,
    rls: boolean,
    rlsFields: string[],
    rlsWherePart: (alias: string) => string,
  ) {
    this.accountId = accountId;
    this.tableName = tableName;
    this.contextParam = contextParam;
    this.rls = rls;
    this.rlsFields = rlsFields;
    this.rlsWherePart = rlsWherePart;
  }

  /**
   * Gets the account ID of the active user.
   *
   * @returns {string} The account ID of the active user
   */
  getActiveUser(): string {
    return this.accountId;
  }

  /**
   * Gets the context parameters for query substitution.
   *
   * @returns {Record<string, string>} Map of parameter names to their values
   */
  getParameters(): Record<string, string> {
    return this.contextParam;
  }

  /**
   * Gets the name of the table to query.
   *
   * @returns {string} The table name
   */
  getTableName(): string {
    return this.tableName;
  }

  /**
   * Checks if Row-Level Security is enabled.
   *
   * @returns {boolean} True if RLS is enabled, false otherwise
   */
  isUseRLS(): boolean {
    return this.rls;
  }

  /**
   * Gets the list of field names required for RLS validation.
   *
   * @returns {string[]} Array of field names that must be present in SELECT clause for RLS
   */
  userScopeFields(): string[] {
    return this.rlsFields;
  }

  /**
   * Generates the WHERE clause for Row-Level Security filtering.
   *
   * @param {string} alias - The table alias to use in the WHERE clause
   * @returns {string} SQL WHERE clause condition for RLS filtering
   */
  userScopeWhere(alias: string): string {
    return this.rlsWherePart(alias);
  }
}

/**
 * Builder class for creating RovoIntegrationSetting instances.
 * Provides a fluent API for configuring Rovo query settings including context parameters and RLS.
 *
 * @class RovoIntegrationSettingCreatorImpl
 * @implements {RovoIntegrationSettingCreator}
 */
class RovoIntegrationSettingCreatorImpl implements RovoIntegrationSettingCreator {
  private readonly tableName: string;
  private readonly accountId: string;
  private readonly contextParam: Record<string, string> = {};
  private readonly rlsFields: string[] = [];
  private isUseRls: boolean = false;
  private isUseRlsConditional: () => Promise<boolean> = async () => true;
  private wherePart: (alias: string) => string = () => "";

  /**
   * Creates a new RovoIntegrationSettingCreatorImpl instance.
   *
   * @param {string} tableName - The name of the table to query
   * @param {string} accountId - The account ID of the active user
   */
  constructor(tableName: string, accountId: string) {
    this.tableName = tableName;
    this.accountId = accountId;
  }

  /**
   * Adds a context parameter for query substitution.
   * Context parameters are replaced in the SQL query before execution.
   *
   * @param {string} parameterName - The parameter name to replace in the query
   * @param {string} value - The value to substitute for the parameter
   * @returns {RovoIntegrationSettingCreator} This builder instance for method chaining
   *
   * @example
   * ```typescript
   * builder.addContextParameter('{{projectKey}}', 'PROJ-123');
   * ```
   */
  addContextParameter(parameterName: string, value: string): RovoIntegrationSettingCreator {
    this.contextParam[parameterName] = value;
    return this;
  }

  /**
   * Enables Row-Level Security (RLS) for the query.
   * Returns a RlsSettings builder for configuring RLS options.
   *
   * @returns {RlsSettings} RLS settings builder for configuring security options
   *
   * @example
   * ```typescript
   * builder.useRLS()
   *   .addRlsColumn(usersTable.id)
   *   .addRlsWherePart((alias) => `${alias}.id = '${accountId}'`)
   *   .finish();
   * ```
   */
  useRLS(): RlsSettings {
    const _this = this;
    /**
     * Internal implementation of RlsSettings interface.
     * Provides fluent API for configuring Row-Level Security settings.
     *
     * @class RlsSettingsImpl
     * @implements {RlsSettings}
     */
    return new (class RlsSettingsImpl implements RlsSettings {
      private isUseRlsConditionalSettings: () => Promise<boolean> = async () => true;
      private rlsFieldsSettings: string[] = [];
      private wherePartSettings: (alias: string) => string = () => "";

      /**
       * Sets a conditional function to determine if RLS should be applied.
       *
       * @param {() => Promise<boolean>} condition - Async function that returns true if RLS should be enabled
       * @returns {RlsSettings} This builder instance for method chaining
       *
       * @example
       * ```typescript
       * .addRlsCondition(async () => {
       *   const user = await getUser();
       *   return !user.isAdmin;
       * })
       * ```
       */
      addRlsCondition(condition: () => Promise<boolean>): RlsSettings {
        this.isUseRlsConditionalSettings = condition;
        return this;
      }

      /**
       * Adds a column name that must be present in the SELECT clause for RLS validation.
       *
       * @param {string} columnName - The name of the column to require
       * @returns {RlsSettings} This builder instance for method chaining
       *
       * @example
       * ```typescript
       * .addRlsColumnName('userId')
       * ```
       */
      addRlsColumnName(columnName: string): RlsSettings {
        this.rlsFieldsSettings.push(columnName);
        return this;
      }

      /**
       * Adds a Drizzle column that must be present in the SELECT clause for RLS validation.
       *
       * @param {MySqlColumn} column - The Drizzle column object
       * @returns {RlsSettings} This builder instance for method chaining
       *
       * @example
       * ```typescript
       * .addRlsColumn(usersTable.userId)
       * ```
       */
      addRlsColumn(column: MySqlColumn): RlsSettings {
        this.rlsFieldsSettings.push(column.name);
        return this;
      }

      /**
       * Sets the WHERE clause function for RLS filtering.
       * The function receives a table alias and should return a SQL WHERE condition.
       *
       * @param {(alias: string) => string} wherePart - Function that generates WHERE clause
       * @returns {RlsSettings} This builder instance for method chaining
       *
       * @example
       * ```typescript
       * .addRlsWherePart((alias) => `${alias}.userId = '${accountId}'`)
       * ```
       */
      addRlsWherePart(wherePart: (alias: string) => string): RlsSettings {
        this.wherePartSettings = wherePart;
        return this;
      }

      /**
       * Finishes RLS configuration and returns to the settings builder.
       *
       * @returns {RovoIntegrationSettingCreator} The parent settings builder
       */
      finish(): RovoIntegrationSettingCreator {
        _this.isUseRls = true;
        this.rlsFieldsSettings.forEach((columnName) => _this.rlsFields.push(columnName));
        _this.wherePart = this.wherePartSettings;
        _this.isUseRlsConditional = this.isUseRlsConditionalSettings;
        return _this;
      }
    })();
  }

  /**
   * Builds and returns the RovoIntegrationSetting instance.
   * Evaluates the RLS condition if RLS is enabled.
   *
   * @returns {Promise<RovoIntegrationSetting>} The configured RovoIntegrationSetting instance
   *
   * @example
   * ```typescript
   * const settings = await builder
   *   .addContextParameter('{{projectKey}}', 'PROJ-123')
   *   .useRLS()
   *   .addRlsColumn(usersTable.id)
   *   .addRlsWherePart((alias) => `${alias}.id = '${accountId}'`)
   *   .finish()
   *   .build();
   * ```
   */
  async build(): Promise<RovoIntegrationSetting> {
    const useRls = this.isUseRls ? await this.isUseRlsConditional() : false;
    return new RovoIntegrationSettingImpl(
      this.accountId,
      this.tableName,
      this.contextParam,
      useRls,
      this.rlsFields,
      this.wherePart,
    );
  }
}

/**
 * Main class for Rovo integration - a secure pattern for natural-language analytics in Forge apps.
 *
 * Rovo provides a secure way to execute dynamic SQL queries with comprehensive security validations:
 * - Only SELECT queries are allowed
 * - Queries are restricted to a single table
 * - JOINs, subqueries, and window functions are blocked
 * - Row-Level Security (RLS) support for data isolation
 * - Post-execution validation of query results
 *
 * @class Rovo
 * @implements {RovoIntegration}
 *
 * @example
 * ```typescript
 * const rovo = forgeSQL.rovo();
 * const settings = await rovo.rovoSettingBuilder(usersTable, accountId)
 *   .useRLS()
 *   .addRlsColumn(usersTable.id)
 *   .addRlsWherePart((alias) => `${alias}.id = '${accountId}'`)
 *   .finish()
 *   .build();
 *
 * const result = await rovo.dynamicIsolatedQuery(
 *   "SELECT id, name FROM users WHERE status = 'active'",
 *   settings
 * );
 * ```
 */
export class Rovo implements RovoIntegration {
  private readonly forgeOperations: ForgeSqlOperation;
  private readonly options: ForgeSqlOrmOptions;
  /**
   * Creates a new Rovo instance.
   *
   * @param {ForgeSqlOperation} forgeSqlOperations - The ForgeSQL operations instance for query analysis
   * @param options - Configuration options for the ORM
   */
  constructor(forgeSqlOperations: ForgeSqlOperation, options: ForgeSqlOrmOptions) {
    this.forgeOperations = forgeSqlOperations;
    this.options = options;
  }

  /**
   * Parses SQL query into AST and validates it's a single SELECT statement
   * @param sqlQuery - Normalized SQL query string
   * @returns Parsed AST of the SELECT statement
   * @throws Error if parsing fails or query is not a single SELECT statement
   */
  private parseSqlQuery(sqlQuery: string): Select {
    const parser = new Parser();
    let ast;
    try {
      ast = parser.astify(sqlQuery);
    } catch (parseError: any) {
      throw new Error(
        `SQL parsing error: ${parseError.message || "Invalid SQL syntax"}. Please check your query syntax.`,
      );
    }

    // Validate that query is a SELECT statement
    // Parser can return either an object (single statement) or an array (multiple statements)
    if (Array.isArray(ast)) {
      if (ast.length !== 1 || ast[0].type !== "select") {
        throw new Error(
          "Only a single SELECT query is allowed. Multiple statements or non-SELECT statements are not permitted.",
        );
      }
      return ast[0];
    } else if (ast && ast.type === "select") {
      return ast;
    } else {
      throw new Error("Only SELECT queries are allowed.");
    }
  }

  /**
   * Recursively extracts all table names from SQL AST node
   * @param node - AST node to extract tables from
   * @returns Array of table names (uppercase)
   */
  private extractTables(node: any): string[] {
    const tables: string[] = [];

    if (node.type === "table" || node.type === "dual") {
      if (node.table) {
        const tableName = node.table === "dual" ? "dual" : node.table.name || node.table;
        if (tableName && tableName !== "dual") {
          tables.push(tableName.toUpperCase());
        }
      }
    }

    if (node.from) {
      if (Array.isArray(node.from)) {
        node.from.forEach((fromItem: any) => {
          tables.push(...this.extractTables(fromItem));
        });
      } else {
        tables.push(...this.extractTables(node.from));
      }
    }

    if (node.join) {
      if (Array.isArray(node.join)) {
        node.join.forEach((joinItem: any) => {
          tables.push(...this.extractTables(joinItem));
        });
      } else {
        tables.push(...this.extractTables(node.join));
      }
    }

    return tables;
  }

  /**
   * Recursively checks if AST node contains scalar subqueries
   * @param node - AST node to check
   * @returns true if node contains scalar subquery, false otherwise
   */
  private hasScalarSubquery(node: any): boolean {
    if (!node) return false;

    if (node.type === "subquery" || (node.ast && node.ast.type === "select")) {
      return true;
    }

    if (Array.isArray(node)) {
      return node.some((item) => this.hasScalarSubquery(item));
    }

    if (typeof node === "object") {
      return Object.values(node).some((value) => this.hasScalarSubquery(value));
    }

    return false;
  }

  /**
   * Creates a settings builder for Rovo queries using a raw table name.
   *
   * @param {string} tableName - The name of the table to query
   * @param {string} accountId - The account ID of the active user
   * @returns {RovoIntegrationSettingCreator} Builder for configuring Rovo query settings
   *
   * @example
   * ```typescript
   * const builder = rovo.rovoRawSettingBuilder('users', accountId);
   * ```
   */
  rovoRawSettingBuilder(tableName: string, accountId: string): RovoIntegrationSettingCreator {
    return new RovoIntegrationSettingCreatorImpl(tableName, accountId);
  }

  /**
   * Creates a settings builder for Rovo queries using a Drizzle table object.
   *
   * @param {AnyMySqlTable} table - The Drizzle table object
   * @param {string} accountId - The account ID of the active user
   * @returns {RovoIntegrationSettingCreator} Builder for configuring Rovo query settings
   *
   * @example
   * ```typescript
   * const builder = rovo.rovoSettingBuilder(usersTable, accountId);
   * ```
   */
  rovoSettingBuilder(table: AnyMySqlTable, accountId: string): RovoIntegrationSettingCreator {
    return this.rovoRawSettingBuilder(getTableName(table), accountId);
  }

  /**
   * Executes a dynamic SQL query with comprehensive security validations.
   *
   * This method performs multiple security checks:
   * 1. Validates that the query is a SELECT statement
   * 2. Ensures the query targets only the specified table
   * 3. Blocks JOINs, subqueries, and window functions
   * 4. Applies Row-Level Security filtering if enabled
   * 5. Validates query results to ensure security fields are present
   *
   * @param {string} dynamicSql - The SQL query to execute (must be a SELECT statement)
   * @param {RovoIntegrationSetting} settings - Configuration settings for the query
   * @returns {Promise<Result<unknown>>} Query execution result with metadata
   * @throws {Error} If the query violates security restrictions
   *
   * @example
   * ```typescript
   * const result = await rovo.dynamicIsolatedQuery(
   *   "SELECT id, name, email FROM users WHERE status = 'active' ORDER BY name",
   *   settings
   * );
   *
   * console.log(result.rows); // Query results
   * console.log(result.metadata); // Query metadata
   * ```
   */
  async dynamicIsolatedQuery(
    dynamicSql: string,
    settings: RovoIntegrationSetting,
  ): Promise<Result<unknown>> {
    const query: string = dynamicSql;
    const tableName = settings.getTableName();
    const accountId = settings.getActiveUser();
    const parameters = settings.getParameters();
    if (!query || !query.trim()) {
      throw new Error("SQL query is required. Please provide a valid SELECT query.");
    }
    if (!tableName) {
      throw new Error("Table Name is required. Please provide a valid Table Name.");
    }

    // Quick validation: check if query starts with SELECT (case-insensitive)
    // This allows us to fail fast for non-SELECT queries before normalization
    const trimmedQuery = query.trim();
    const quickUpper = trimmedQuery.toUpperCase();
    if (!quickUpper.startsWith("SELECT")) {
      throw new Error(
        "Only SELECT queries are allowed. Data modification operations (INSERT, UPDATE, DELETE, etc.) are not permitted.",
      );
    }

    /**
     * Normalizes SQL query using AST parsing and stringification.
     * This approach is safer than regex-based normalization as it:
     * - Avoids regex backtracking vulnerabilities
     * - Preserves SQL semantics correctly
     * - Handles complex SQL structures properly
     *
     * @param sql - SQL query string to normalize (must be a valid SELECT query)
     * @returns Normalized SQL string
     * @throws Error if parsing fails or query is invalid
     */
    const normalizeSqlString = (sql: string): string => {
      try {
        const parser = new Parser();
        // Parse SQL to AST
        const ast = parser.astify(sql.trim());
        // Validate it's a SELECT query before normalizing
        if (Array.isArray(ast)) {
          if (ast.length !== 1 || ast[0].type !== "select") {
            throw new Error(
              "Only a single SELECT query is allowed. Multiple statements or non-SELECT statements are not permitted.",
            );
          }
        } else if (ast && ast.type !== "select") {
          throw new Error("Only SELECT queries are allowed.");
        }
        // Convert AST back to SQL (this normalizes formatting)
        const normalized = parser.sqlify(Array.isArray(ast) ? ast[0] : ast);
        // trim
        return normalized.trim();
      } catch (error: any) {
        // If it's a validation error we threw, re-throw it
        if (
          error.message &&
          (error.message.includes("Only") || error.message.includes("single SELECT"))
        ) {
          throw error;
        }
        // For parsing errors, wrap them in a more user-friendly message
        // Check if error is already wrapped to avoid double wrapping
        if (error.message && error.message.includes("SQL parsing error")) {
          throw error;
        }
        throw new Error(
          `SQL parsing error: ${error.message || "Invalid SQL syntax"}. Please check your query syntax.`,
        );
      }
    };
    let normalized: string;
    try {
      normalized = normalizeSqlString(trimmedQuery);
    } catch (error: any) {
      // Re-throw validation errors as-is
      if (
        error.message &&
        (error.message.includes("Only") || error.message.includes("single SELECT"))
      ) {
        throw error;
      }
      // Check if error is already wrapped to avoid double wrapping
      if (error.message && error.message.includes("SQL parsing error")) {
        throw error;
      }
      // For other errors, wrap them
      throw new Error(
        `SQL parsing error: ${error.message || "Invalid SQL syntax"}. Please check your query syntax.`,
      );
    }

    const upperTableName = tableName.toUpperCase();
    // Validate table name
    // sqlify may add backticks, so we check for both formats: FROM table_name and FROM `table_name`
    const tableNamePattern = new RegExp(`FROM\\s+[\`]?${upperTableName}[\`]?`, "i");
    if (!tableNamePattern.test(normalized)) {
      throw new Error(
        "Queries must target the '" +
          upperTableName +
          "' table only. Other tables are not accessible.",
      );
    }

    if (!accountId) {
      throw new Error(
        "Authentication error: User account ID is missing. Please ensure you are logged in.",
      );
    }
    normalized = normalized.replaceAll("ari:cloud:identity::user/", "");
    Object.entries(parameters).forEach(([key, value]) => {
      normalized = normalized.replaceAll(key, value);
    });

    // Parse SQL query to validate structure before execution
    const selectAst = this.parseSqlQuery(normalized);

    // Extract all tables from the query
    const tablesInQuery = this.extractTables(selectAst);
    const uniqueTables = [...new Set(tablesInQuery)];

    // Check that only table is used
    const invalidTables = uniqueTables.filter((table) => table !== upperTableName);

    if (invalidTables.length > 0) {
      throw new Error(
        `Security violation: Query references table(s) other than '${tableName}': ${invalidTables.join(", ")}. ` +
          `Only queries against the ${tableName} table are allowed. ` +
          "JOINs, subqueries, or references to other tables are not permitted for security reasons.",
      );
    }

    // Check for scalar subqueries in SELECT columns
    if (selectAst.columns && Array.isArray(selectAst.columns)) {
      const hasSubqueryInColumns = selectAst.columns.some((col: any) => {
        if (col.expr) {
          return this.hasScalarSubquery(col.expr);
        }
        return this.hasScalarSubquery(col);
      });

      if (hasSubqueryInColumns) {
        throw new Error(
          "Security violation: Scalar subqueries in SELECT columns are not allowed. " +
            "Subqueries can be used to access data from other tables or bypass security restrictions. " +
            "Please rewrite your query without using subqueries in the SELECT clause.",
        );
      }
    }

    // Check for JOIN operations using EXPLAIN
    const explainRows = await this.forgeOperations.analyze().explainRaw(normalized, []);

    const hasJoin = explainRows.some((row) => {
      const info = (row.operatorInfo ?? "").toUpperCase();
      return (
        info.includes("JOIN") ||
        info.includes("CARTESIAN") ||
        info.includes("NESTED LOOP") ||
        info.includes("HASH JOIN")
      );
    });

    if (hasJoin) {
      throw new Error(
        "Security violation: JOIN operations are not allowed. " +
          `For security reasons, Rovo analytics only supports queries over the ${tableName} table without joins, subqueries, or references to other tables. ` +
          `Please rewrite your query to use only the ${tableName} table.`,
      );
    }

    // Detect window functions (e.g., COUNT(*) OVER(...), ROW_NUMBER() OVER(...))
    // Window functions are not allowed for security
    // Users should use regular aggregate functions with GROUP BY instead
    const hasWindow = explainRows.some((row) => {
      const id = row.id.toUpperCase();
      const info = (row.operatorInfo ?? "").toUpperCase();
      return id.includes("WINDOW") || info.includes(" OVER(") || info.includes(" OVER()");
    });

    if (hasWindow) {
      throw new Error(
        "Window functions (for example COUNT(*) OVER(...)) are not allowed in Rovo SQL for this app. " +
          "Please rephrase your question so that it uses regular aggregates instead of window functions.",
      );
    }

    // Check for references to other tables in the query execution plan
    // This detects JOINs, subqueries, or any other references to tables other than expected
    const tablesInPlan = explainRows.filter(
      (row) =>
        row.accessObject?.startsWith("table:") &&
        row.accessObject?.toLowerCase() !== "table:" + tableName.toLowerCase(),
    );
    if (tablesInPlan.length > 0) {
      throw new Error(
        `Security violation: Query execution plan detected references to tables other than '${tableName.toLowerCase()}'. ` +
          `Only queries against the ${tableName.toLowerCase()} table are allowed. ` +
          "JOINs, subqueries, or references to other tables are not permitted for security reasons.",
      );
    }

    // row-level security protection
    const isUseRLSFiltering = settings.isUseRLS();
    if (isUseRLSFiltering) {
      if (normalized.endsWith(";")) {
        normalized = normalized.slice(0, -1);
      }

      normalized = `
            SELECT *
            FROM (
                     ${normalized}
                     ) AS t
            WHERE (${settings.userScopeWhere("t")})
        `;
    }
    if (this.options.logRawSqlQuery) {
      // eslint-disable-next-line no-console
      console.debug("Rovo query: " + normalized);
    }
    const result = await sql.executeRaw(normalized);

    // Post-execution validation for non-admin users
    // Verify that required security fields exist and come from table
    // Also ensure all fields with orgTable come from (no JOINs or subqueries)
    if (isUseRLSFiltering && result?.metadata?.fields) {
      const fields = result.metadata.fields as Array<{
        name: string;
        schema?: string;
        table?: string;
        orgTable?: string;
      }>;

      settings.userScopeFields().forEach((field) => {
        const actualFields = fields.filter((f) => f.name.toLowerCase() === field?.toLowerCase());
        if (actualFields.length === 0) {
          throw new Error(
            `Security validation failed: The query must include ${field} as a raw column in the SELECT statement. This field is required for row-level security enforcement.`,
          );
        }
        const actualField = actualFields.find(
          (f) => !f.orgTable || f.orgTable.toUpperCase() !== upperTableName,
        );
        if (actualField) {
          throw new Error(
            `Security validation failed: '${field}' must come directly from the ${upperTableName} table. Joins, subqueries, or table aliases that change the origin of this column are not allowed.`,
          );
        }
      });

      // Check that all fields with orgTable come from table
      // (This prevents JOINs or subqueries that reference other tables)
      // Note: Fields without orgTable (empty/undefined) are allowed - these are computed/calculated fields
      // We only check fields that have orgTable set - if orgTable exists, it must be table
      const fieldsFromOtherTables = fields.filter(
        (f) => f.orgTable && f.orgTable.toUpperCase() !== upperTableName,
      );
      if (fieldsFromOtherTables.length > 0) {
        throw new Error(
          `Security validation failed: All fields must come from the ${upperTableName} table. ` +
            "Fields from other tables detected, which indicates the use of JOINs, subqueries, or references to other tables. " +
            "This is not allowed for security reasons.",
        );
      }
    }

    return result;
  }
}

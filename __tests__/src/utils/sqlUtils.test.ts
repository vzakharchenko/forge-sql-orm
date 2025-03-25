import { describe, it, expect } from "vitest";
import moment from "moment";
import { parseDateTime, extractAlias, getPrimaryKeys, getTableMetadata } from "../../../src/utils/sqlUtils";
import { mysqlTable, int, varchar, primaryKey, unique } from "drizzle-orm/mysql-core";

// Test suite for transformValue function
describe("transformValue", () => {

// Test suite for parseDateTime function
describe("parseDateTime", () => {
  it("should correctly parse a datetime string", () => {
    const dateString = "2024-03-03T12:34:56.789";
    const format = "YYYY-MM-DDTHH:mm:ss.SSS";
    const parsedDate = parseDateTime(dateString, format);
    expect(moment(parsedDate).format(format)).toBe(dateString);
  });

  it("should correctly parse a date string", () => {
    const dateString = "2024-03-03";
    const format = "YYYY-MM-DD";
    const parsedDate = parseDateTime(dateString, format);
    expect(moment(parsedDate).format(format)).toBe(dateString);
  });

  it("should handle invalid format by falling back to default parsing", () => {
    const dateString = "2024-03-03T12:34:56";
    const format = "invalid-format";
    const parsedDate = parseDateTime(dateString, format);
    expect(moment(parsedDate).format("YYYY-MM-DDTHH:mm:ss")).toBe(dateString);
  });

  it("should handle different timezone formats", () => {
    const dateString = "2024-03-03T12:34:56Z";
    const format = "YYYY-MM-DDTHH:mm:ss[Z]";
    const parsedDate = parseDateTime(dateString, format);
    expect(moment(parsedDate).format("YYYY-MM-DDTHH:mm:ss")).toBe("2024-03-03T12:34:56");
  });
});

// Test suite for extractAlias function
describe("extractAlias", () => {
  it("should extract alias after 'as' keyword", () => {
    expect(extractAlias("column_name as alias")).toBe("alias");
  });

  it("should handle quoted aliases", () => {
    expect(extractAlias("column_name as 'quoted_alias'")).toBe("quoted_alias");
    expect(extractAlias('column_name as "quoted_alias"')).toBe("quoted_alias");
    expect(extractAlias("column_name as `quoted_alias`")).toBe("quoted_alias");
  });

  it("should return original query if no alias found", () => {
    expect(extractAlias("column_name")).toBe("column_name");
  });

  it("should handle case-insensitive 'as' keyword", () => {
    expect(extractAlias("column_name AS alias")).toBe("alias");
    expect(extractAlias("column_name As alias")).toBe("alias");
  });
});

// Test suite for getPrimaryKeys function
describe("getPrimaryKeys", () => {
  it("should find primary key from column definition", () => {
    const table = mysqlTable("test_table", {
      id: int("id").primaryKey(),
      name: varchar("name", { length: 255 }),
    });

    const primaryKeys = getPrimaryKeys(table);
    expect(primaryKeys).toBeDefined();
    expect(primaryKeys?.length).toBe(1);
    expect(primaryKeys?.[0][0]).toBe("id");
  });

  it("should find primary key from primary key builder when no column primary keys", () => {
    const table = mysqlTable("test_table", {
      id: int("id"),
      name: varchar("name", { length: 255 }),
    }, (table) => ({
      pk: primaryKey({ columns: [table.id] }),
    }));

    const primaryKeys = getPrimaryKeys(table);
    expect(primaryKeys).toBeDefined();
    expect(primaryKeys?.length).toBe(1);
    expect(primaryKeys?.[0][0]).toBe("id");
  });

  it("should return undefined when no primary keys found", () => {
    const table = mysqlTable("test_table", {
      id: int("id"),
      name: varchar("name", { length: 255 }),
    });

    const primaryKeys = getPrimaryKeys(table);
    expect(primaryKeys).toBeUndefined();
  });

  it("should handle composite primary keys", () => {
    const table = mysqlTable("test_table", {
      id1: int("id1"),
      id2: int("id2"),
      name: varchar("name", { length: 255 }),
    }, (table) => ({
      pk: primaryKey({ columns: [table.id1, table.id2] }),
    }));

    const primaryKeys = getPrimaryKeys(table);
    expect(primaryKeys).toBeDefined();
    expect(primaryKeys?.length).toBe(2);
    expect(primaryKeys?.map(([name]) => name)).toEqual(["id1", "id2"]);
  });

  it("should prioritize column primary keys over primary key builders", () => {
    const table = mysqlTable("test_table", {
      id1: int("id1").primaryKey(),
      id2: int("id2"),
      name: varchar("name", { length: 255 }),
    }, (table) => ({
      pk: primaryKey({ columns: [table.id2] }),
    }));

    const primaryKeys = getPrimaryKeys(table);
    expect(primaryKeys).toBeDefined();
    expect(primaryKeys?.length).toBe(1);
    expect(primaryKeys?.[0][0]).toBe("id1");
  });
});

// Test suite for getTableMetadata function
describe("getTableMetadata", () => {
  it("should extract table metadata with all configurations", () => {
    const table = mysqlTable("test_table", {
      id: int("id").primaryKey(),
      name: varchar("name", { length: 255 }),
      email: varchar("email", { length: 255 }),
    }, (table) => ({
      pk: primaryKey({ columns: [table.id] }),
      uniqueEmail: unique("unique_email").on(table.email),
    }));

    const metadata = getTableMetadata(table);

    expect(metadata.tableName).toBe("test_table");
    expect(Object.keys(metadata.columns)).toHaveLength(3);
    expect(metadata.primaryKeys).toHaveLength(1);
    expect(metadata.uniqueConstraints).toHaveLength(1);
  });

  it("should handle table with no extra configurations", () => {
    const table = mysqlTable("test_table", {
      id: int("id"),
      name: varchar("name", { length: 255 }),
    });

    const metadata = getTableMetadata(table);

    expect(metadata.tableName).toBe("test_table");
    expect(Object.keys(metadata.columns)).toHaveLength(2);
    expect(metadata.primaryKeys).toHaveLength(0);
    expect(metadata.uniqueConstraints).toHaveLength(0);
  });

  it("should handle table with foreign keys", () => {
    const users = mysqlTable("users", {
      id: int("id").primaryKey(),
      name: varchar("name", { length: 255 }),
    });

    const posts = mysqlTable("posts", {
      id: int("id").primaryKey(),
      userId: int("user_id").references(() => users.id),
      title: varchar("title", { length: 255 }),
    });

    const metadata = getTableMetadata(posts);

    expect(metadata.foreignKeys).toHaveLength(1);
    expect(metadata.foreignKeys[0]).toBeDefined();
  });
});
});

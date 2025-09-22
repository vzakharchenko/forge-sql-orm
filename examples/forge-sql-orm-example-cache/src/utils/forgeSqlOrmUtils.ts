import ForgeSQL from "forge-sql-orm";

export const FORGE_SQL_ORM = new ForgeSQL({
  logRawSqlQuery: true,
  cacheEntityName: "cache",
  cacheTTL: 180,
  hints: {
    select: ["MEMORY_QUOTA(0.1MB)"],
  },
});

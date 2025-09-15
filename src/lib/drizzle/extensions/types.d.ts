import {
    DeleteAndEvictCacheType, ExecuteQuery, ExecuteQueryCacheable,
    InsertAndEvictCacheType,
    SelectAliasedCacheableType,
    SelectAliasedDistinctCacheableType,
    SelectAliasedDistinctType,
    SelectAliasedType, SelectAllDistinctFromAliasedType,
    SelectAllDistinctFromCacheableAliasedType, SelectAllFromAliasedType, SelectAllFromCacheableAliasedType,
    UpdateAndEvictCacheType,
} from "./additionalActions";

declare module "drizzle-orm/mysql-proxy" {
  interface MySqlRemoteDatabase {
    /**
     * Select with field aliasing support
     */
    selectAliased: SelectAliasedType;

    /**
     * Select distinct with field aliasing support
     */
    selectAliasedDistinct: SelectAliasedDistinctType;

    /**
     * Select with field aliasing support for all table columns
     */
    selectFrom: SelectAllFromAliasedType;
    
    /**
     * Select distinct with field aliasing support for all table columns
     */
    selectDistinctFrom: SelectAllDistinctFromAliasedType;

    /**
     * Execute raw SQL query with local cache support
     */
    executeQuery: ExecuteQuery;

    /**
     * Select with field aliasing and caching support
     */
    selectAliasedCacheable: SelectAliasedCacheableType;

    /**
     * Select distinct with field aliasing and caching support
     */
    selectAliasedDistinctCacheable: SelectAliasedDistinctCacheableType;

    /**
     * Select with field aliasing and caching support for all table columns
     */
    selectFromCacheable: SelectAllFromCacheableAliasedType;
    
    /**
     * Select distinct with field aliasing and caching support for all table columns
     */
    selectDistinctFromCacheable: SelectAllDistinctFromCacheableAliasedType;
    
    /**
     * Execute raw SQL query with both local and global cache support
     */
    executeQueryCacheable: ExecuteQueryCacheable;

    /**
     * Insert operation with cache context support.
     * Participates in cache clearing when used within executeWithCacheContext().
     * Does not immediately clear cache, but marks table for batch cache clearing.
     */
    insertWithCacheContext: InsertAndEvictCacheType;

    /**
     * Insert operation that automatically evicts cache immediately after execution.
     * Always clears cache for the affected table, regardless of cache context.
     */
    insertAndEvictCache: InsertAndEvictCacheType;

    /**
     * Update operation with cache context support.
     * Participates in cache clearing when used within executeWithCacheContext().
     * Does not immediately clear cache, but marks table for batch cache clearing.
     */
    updateWithCacheContext: UpdateAndEvictCacheType;

    /**
     * Update operation that automatically evicts cache immediately after execution.
     * Always clears cache for the affected table, regardless of cache context.
     */
    updateAndEvictCache: UpdateAndEvictCacheType;

    /**
     * Delete operation with cache context support.
     * Participates in cache clearing when used within executeWithCacheContext().
     * Does not immediately clear cache, but marks table for batch cache clearing.
     */
    deleteWithCacheContext: DeleteAndEvictCacheType;

    /**
     * Delete operation that automatically evicts cache immediately after execution.
     * Always clears cache for the affected table, regardless of cache context.
     */
    deleteAndEvictCache: DeleteAndEvictCacheType;
  }
}

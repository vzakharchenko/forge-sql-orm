import {
  DeleteAndEvictCacheType,
  InsertAndEvictCacheType,
  SelectAliasedCacheableType,
  SelectAliasedDistinctCacheableType,
  SelectAliasedDistinctType,
  SelectAliasedType,
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
     * Select with field aliasing and caching support
     */
    selectAliasedCacheable: SelectAliasedCacheableType;
    
    /**
     * Select distinct with field aliasing and caching support
     */
    selectAliasedDistinctCacheable: SelectAliasedDistinctCacheableType;

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

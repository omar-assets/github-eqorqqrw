export interface CacheOptions {
  ttl: number;
  encrypt: boolean;
}

export interface CacheEntry<T> {
  value: T;
  timestamp: number;
  ttl: number;
}
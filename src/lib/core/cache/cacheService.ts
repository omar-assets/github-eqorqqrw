import { CacheOptions, CacheEntry } from './types';
import { storage } from '../storage';
import { logger } from '@/utils/logger';

class CacheService {
  private prefix: string;
  private defaultTTL: number;

  constructor(prefix: string = 'cache_', defaultTTL: number = 3600) {
    this.prefix = prefix;
    this.defaultTTL = defaultTTL;
  }

  async set<T>(key: string, value: T, options: Partial<CacheOptions> = {}): Promise<void> {
    const entry: CacheEntry<T> = {
      value,
      timestamp: Date.now(),
      ttl: options.ttl || this.defaultTTL
    };

    try {
      await storage.setItem(this.prefix + key, entry, options.encrypt);
      logger.info('Cache entry set:', { key });
    } catch (error) {
      logger.error('Cache set error:', { key, error });
      throw error;
    }
  }

  async get<T>(key: string, options: Partial<CacheOptions> = {}): Promise<T | null> {
    try {
      const entry = await storage.getItem<CacheEntry<T>>(
        this.prefix + key, 
        options.encrypt
      );

      if (!entry) return null;

      const isExpired = Date.now() - entry.timestamp > entry.ttl * 1000;
      if (isExpired) {
        await this.delete(key);
        return null;
      }

      return entry.value;
    } catch (error) {
      logger.error('Cache get error:', { key, error });
      return null;
    }
  }

  async delete(key: string): Promise<void> {
    try {
      await storage.removeItem(this.prefix + key);
      logger.info('Cache entry deleted:', { key });
    } catch (error) {
      logger.error('Cache delete error:', { key, error });
      throw error;
    }
  }

  async clear(): Promise<void> {
    try {
      await storage.clear();
      logger.info('Cache cleared');
    } catch (error) {
      logger.error('Cache clear error:', error);
      throw error;
    }
  }
}

export const cache = new CacheService();
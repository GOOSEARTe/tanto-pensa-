class MemoryCache {
  constructor(options = {}) {
    this.cache = new Map();
    this.maxSize = options.maxSize || 100;
    this.defaultTTL = options.defaultTTL || 5 * 60 * 1000; // 5 minutes
  }

  set(key, value, ttl = this.defaultTTL) {
    if (this.cache.size >= this.maxSize) {
      this.evictOldest();
    }

    this.cache.set(key, {
      value,
      timestamp: Date.now(),
      ttl
    });
  }

  get(key) {
    const item = this.cache.get(key);
    
    if (!item) return null;
    
    if (this.isExpired(item)) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }

  isExpired(item) {
    return Date.now() - item.timestamp > item.ttl;
  }

  evictOldest() {
    const oldestKey = Array.from(this.cache.keys())[0];
    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }

  clear() {
    this.cache.clear();
  }
}

export const memoryCache = new MemoryCache();
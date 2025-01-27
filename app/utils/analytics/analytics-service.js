import { logger } from '../logger/logger';
import { StorageService } from '../storage/storage-service';

const ANALYTICS_STORAGE_KEY = 'analytics_events';

export const AnalyticsService = {
  trackEvent(eventName, properties = {}) {
    try {
      const event = {
        name: eventName,
        properties,
        timestamp: new Date().toISOString()
      };

      // Store event
      const events = StorageService.get(ANALYTICS_STORAGE_KEY, []);
      events.push(event);
      StorageService.set(ANALYTICS_STORAGE_KEY, events);

      logger.info('Analytics event tracked:', { eventName, properties });
    } catch (error) {
      logger.error('Failed to track analytics event:', error);
    }
  },

  getEvents() {
    return StorageService.get(ANALYTICS_STORAGE_KEY, []);
  },

  clearEvents() {
    StorageService.remove(ANALYTICS_STORAGE_KEY);
  }
};
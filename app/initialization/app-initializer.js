import { logger } from '../utils/logger/logger';
import { initializeErrorHandling } from './services/error-initializer';
import { initializeNetworking } from './services/network-initializer';
import { initializeStorage } from './services/storage-initializer';

export async function initializeApp() {
  try {
    // Initialize core services in parallel
    await Promise.all([
      initializeErrorHandling(),
      initializeNetworking(),
      initializeStorage()
    ]);

    logger.info('App initialization completed successfully');
  } catch (error) {
    logger.error('App initialization failed:', error);
    throw error;
  }
}
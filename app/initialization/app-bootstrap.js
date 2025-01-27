import { logger } from '../utils/logger/logger';
import { initializeServices } from './services/app-services';
import { performanceMonitor } from '../utils/performance/performance-monitor';

export async function bootstrapApplication() {
  try {
    performanceMonitor.mark('bootstrapStart');

    // Initialize core services
    await initializeServices();

    performanceMonitor.mark('bootstrapEnd');
    const duration = performanceMonitor.measure('bootstrap', 'bootstrapStart', 'bootstrapEnd');

    logger.info('Application bootstrap completed', { duration: `${duration}ms` });
  } catch (error) {
    logger.error('Application bootstrap failed:', error);
    throw error;
  }
}
import { errorHandler } from '../../utils/error/error-handler';
import { logger } from '../../utils/logger/logger';

export async function initializeErrorHandling() {
  try {
    errorHandler.setupGlobalErrorHandler();
    logger.info('Error handling initialized');
  } catch (error) {
    logger.error('Failed to initialize error handling:', error);
    throw error;
  }
}
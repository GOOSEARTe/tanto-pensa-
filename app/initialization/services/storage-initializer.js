import { StorageService } from '../../utils/storage/storage-service';
import { StorageKeys } from '../../utils/storage/storage-keys';
import { logger } from '../../utils/logger/logger';

export async function initializeStorage() {
  try {
    // Verify storage is working
    StorageService.set(StorageKeys.APP_STATE, { initialized: true });
    logger.info('Storage initialized');
  } catch (error) {
    logger.error('Failed to initialize storage:', error);
    throw error;
  }
}
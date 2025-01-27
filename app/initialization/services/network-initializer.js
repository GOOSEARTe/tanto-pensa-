import { networkMonitor } from '../../utils/network/network-monitor';
import { logger } from '../../utils/logger/logger';

export async function initializeNetworking() {
  try {
    networkMonitor.start();
    logger.info('Network monitoring initialized');
  } catch (error) {
    logger.error('Failed to initialize networking:', error);
    throw error;
  }
}
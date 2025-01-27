import { logger } from '../../utils/logger/logger';
import { networkMonitor } from '../../utils/network/network-monitor';
import { deviceInfo } from '../../utils/device/device-info';
import { performanceMonitor } from '../../utils/performance/performance-monitor';

export async function initializeServices() {
  try {
    performanceMonitor.mark('servicesStart');
    
    // Initialize core services
    await Promise.all([
      initializeNetworkMonitoring(),
      initializeDeviceInfo(),
      initializePerformanceMonitoring()
    ]);

    performanceMonitor.mark('servicesEnd');
    const duration = performanceMonitor.measure('servicesInitialization', 'servicesStart', 'servicesEnd');
    
    logger.info('Services initialized successfully', { duration: `${duration}ms` });
  } catch (error) {
    logger.error('Failed to initialize services:', error);
    throw error;
  }
}

async function initializeNetworkMonitoring() {
  networkMonitor.start();
  logger.info('Network monitoring initialized');
}

async function initializeDeviceInfo() {
  deviceInfo.refresh();
  logger.info('Device info initialized', deviceInfo.get());
}

async function initializePerformanceMonitoring() {
  performanceMonitor.clearMetrics();
  logger.info('Performance monitoring initialized');
}
import { NetworkService } from './network-service';
import { logger } from '../logger/logger';
import { EventEmitter } from '../events/event-emitter';

class NetworkMonitor extends EventEmitter {
  constructor() {
    super();
    this.isMonitoring = false;
  }

  start() {
    if (this.isMonitoring) return;

    NetworkService.startMonitoring((isConnected, connectionType) => {
      this.emit('connectionChange', { isConnected, connectionType });
      logger.info('Network status changed:', { isConnected, connectionType });
    });

    this.isMonitoring = true;
    logger.info('Network monitoring started');
  }

  stop() {
    if (!this.isMonitoring) return;

    NetworkService.stopMonitoring();
    this.isMonitoring = false;
    logger.info('Network monitoring stopped');
  }

  isConnected() {
    return NetworkService.isConnected();
  }
}

export const networkMonitor = new NetworkMonitor();
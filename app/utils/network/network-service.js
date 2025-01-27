import { Connectivity } from '@nativescript/core';
import { logger } from '../logger/logger';

export const NetworkService = {
  getConnectionType() {
    return Connectivity.getConnectionType();
  },

  isConnected() {
    const connectionType = this.getConnectionType();
    return connectionType !== Connectivity.connectionType.none;
  },

  startMonitoring(callback) {
    try {
      Connectivity.startMonitoring((newConnectionType) => {
        const isConnected = newConnectionType !== Connectivity.connectionType.none;
        callback(isConnected, newConnectionType);
      });
      logger.info('Network monitoring started');
    } catch (error) {
      logger.error('Failed to start network monitoring:', error);
      throw error;
    }
  },

  stopMonitoring() {
    try {
      Connectivity.stopMonitoring();
      logger.info('Network monitoring stopped');
    } catch (error) {
      logger.error('Failed to stop network monitoring:', error);
      throw error;
    }
  }
};
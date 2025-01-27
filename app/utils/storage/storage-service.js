import { ApplicationSettings } from '@nativescript/core';
import { logger } from '../logger/logger';

export const StorageService = {
  set(key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      ApplicationSettings.setString(key, serializedValue);
    } catch (error) {
      logger.error('Storage set error:', error);
      throw error;
    }
  },

  get(key, defaultValue = null) {
    try {
      const value = ApplicationSettings.getString(key);
      return value ? JSON.parse(value) : defaultValue;
    } catch (error) {
      logger.error('Storage get error:', error);
      return defaultValue;
    }
  },

  remove(key) {
    try {
      ApplicationSettings.remove(key);
    } catch (error) {
      logger.error('Storage remove error:', error);
      throw error;
    }
  },

  clear() {
    try {
      ApplicationSettings.clear();
    } catch (error) {
      logger.error('Storage clear error:', error);
      throw error;
    }
  }
};
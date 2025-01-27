import { Device, Screen } from '@nativescript/core';
import { logger } from '../logger/logger';

class DeviceInfo {
  constructor() {
    this.info = this.gatherDeviceInfo();
  }

  gatherDeviceInfo() {
    try {
      return {
        platform: Device.os,
        osVersion: Device.osVersion,
        deviceType: Device.deviceType,
        model: Device.model,
        manufacturer: Device.manufacturer,
        language: Device.language,
        region: Device.region,
        screen: {
          width: Screen.mainScreen.widthDIPs,
          height: Screen.mainScreen.heightDIPs,
          scale: Screen.mainScreen.scale
        }
      };
    } catch (error) {
      logger.error('Failed to gather device info:', error);
      return {};
    }
  }

  get() {
    return this.info;
  }

  refresh() {
    this.info = this.gatherDeviceInfo();
    return this.info;
  }
}

export const deviceInfo = new DeviceInfo();
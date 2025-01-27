import { isAndroid, isIOS, Device } from '@nativescript/core';

export const PlatformUtils = {
  isAndroid() {
    return isAndroid;
  },

  isIOS() {
    return isIOS;
  },

  getDeviceInfo() {
    return {
      os: Device.os,
      osVersion: Device.osVersion,
      deviceType: Device.deviceType,
      language: Device.language,
      manufacturer: Device.manufacturer,
      model: Device.model
    };
  },

  getScreenInfo() {
    return {
      width: Device.screen.mainScreen.widthDIPs,
      height: Device.screen.mainScreen.heightDIPs,
      scale: Device.screen.mainScreen.scale
    };
  }
};
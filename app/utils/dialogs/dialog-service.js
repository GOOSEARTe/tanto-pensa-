import { Dialogs } from '@nativescript/core';
import { AppConfig } from '../../config/app.config';

export const DialogService = {
  async showConfirmation(options) {
    return await Dialogs.confirm({
      title: options.title || AppConfig.dialogs.defaultTitle,
      message: options.message,
      okButtonText: options.okButtonText || AppConfig.dialogs.defaultOkButtonText,
      cancelButtonText: options.cancelButtonText || AppConfig.dialogs.defaultCancelButtonText
    });
  },

  async showAlert(options) {
    return await Dialogs.alert({
      title: options.title || AppConfig.dialogs.defaultTitle,
      message: options.message,
      okButtonText: options.okButtonText || AppConfig.dialogs.defaultOkButtonText
    });
  }
};
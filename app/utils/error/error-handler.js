import { ErrorTypes } from './error-types';
import { DialogService } from '../dialogs/dialog-service';
import { logger } from '../logger/logger';

class ErrorHandler {
  constructor() {
    this.setupGlobalErrorHandler();
  }

  setupGlobalErrorHandler() {
    global.onerror = (error) => {
      this.handleError(error);
      return true;
    };
  }

  async handleError(error, type = ErrorTypes.UNKNOWN) {
    // Log the error
    logger.error(`${type} Error:`, error);

    // Show error dialog to user
    await this.showErrorDialog(error, type);
  }

  async showErrorDialog(error, type) {
    try {
      const message = this.getErrorMessage(error, type);
      await DialogService.showAlert({
        title: 'Error',
        message
      });
    } catch (dialogError) {
      logger.error('Failed to show error dialog:', dialogError);
    }
  }

  getErrorMessage(error, type) {
    switch (type) {
      case ErrorTypes.VALIDATION:
        return error.message || 'Please check your input and try again.';
      case ErrorTypes.NETWORK:
        return 'A network error occurred. Please check your connection.';
      case ErrorTypes.UI:
        return 'An interface error occurred. Please try again.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }
}

export const errorHandler = new ErrorHandler();
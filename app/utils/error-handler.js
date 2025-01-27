import { Dialogs } from '@nativescript/core';

export function setupGlobalErrorHandling() {
  global.errorHandler = {
    handleError: handleError,
    showError: showErrorDialog
  };

  // Set up global error handler
  global.onerror = (error) => {
    handleError(error);
    return true;
  };
}

function handleError(error) {
  // Log the error
  global.logger.error('Application error:', error);

  // Show error dialog to user
  showErrorDialog(error);
}

async function showErrorDialog(error) {
  try {
    await Dialogs.alert({
      title: 'Error',
      message: 'An unexpected error occurred. Please try again.',
      okButtonText: 'OK'
    });
  } catch (dialogError) {
    console.error('Failed to show error dialog:', dialogError);
  }
}
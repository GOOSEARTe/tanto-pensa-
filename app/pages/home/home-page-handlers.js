import { DialogService } from '../../utils/dialogs/dialog-service';
import { logger } from '../../utils/logger/logger';
import { errorHandler } from '../../utils/error/error-handler';
import { ErrorTypes } from '../../utils/error/error-types';

export async function handleButtonTap(viewModel) {
  try {
    const result = await DialogService.showConfirmation({
      title: 'Confirmation',
      message: 'Would you like to see a message?',
      okButtonText: 'Yes',
      cancelButtonText: 'No'
    });

    if (result) {
      viewModel.updateMessage('Button was tapped!');
      logger.info('Button tapped - user confirmed');
    }
  } catch (error) {
    errorHandler.handleError(error, ErrorTypes.UI);
  }
}
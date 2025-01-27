import { Application } from '@nativescript/core';
import { bootstrapApplication } from './initialization/app-bootstrap';
import { logger } from './utils/logger/logger';
import { errorHandler } from './utils/error/error-handler';

// Bootstrap the application
bootstrapApplication()
  .then(() => {
    logger.info('Starting application...');
    Application.run({ moduleName: 'app-root' });
  })
  .catch(error => {
    errorHandler.handleError(error);
  });
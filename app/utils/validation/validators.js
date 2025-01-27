import { ValidationUtils } from './validation-utils';
import { ErrorMessages } from '../error/error-messages';

export const Validators = {
  required(value, fieldName) {
    if (ValidationUtils.isNullOrEmpty(value)) {
      throw new Error(`${fieldName}: ${ErrorMessages.VALIDATION.REQUIRED}`);
    }
    return true;
  },

  email(value, fieldName) {
    if (!ValidationUtils.isValidEmail(value)) {
      throw new Error(`${fieldName}: ${ErrorMessages.VALIDATION.INVALID_EMAIL}`);
    }
    return true;
  },

  length(value, fieldName, { min, max }) {
    if (!ValidationUtils.isValidLength(value, min, max)) {
      const message = ErrorMessages.VALIDATION.INVALID_LENGTH
        .replace('{min}', min)
        .replace('{max}', max);
      throw new Error(`${fieldName}: ${message}`);
    }
    return true;
  }
};
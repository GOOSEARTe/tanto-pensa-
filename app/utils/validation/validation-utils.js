export const ValidationUtils = {
  isNullOrEmpty(value) {
    return value === null || value === undefined || value.trim() === '';
  },

  isValidLength(value, minLength, maxLength) {
    const length = value?.trim().length || 0;
    return length >= minLength && length <= maxLength;
  },

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isValidNumber(value) {
    return !isNaN(value) && isFinite(value);
  }
};
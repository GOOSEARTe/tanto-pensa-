export const ErrorMessages = {
  VALIDATION: {
    DEFAULT: 'Please check your input and try again.',
    REQUIRED: 'This field is required.',
    INVALID_EMAIL: 'Please enter a valid email address.',
    INVALID_LENGTH: 'Length must be between {min} and {max} characters.'
  },
  NETWORK: {
    DEFAULT: 'A network error occurred. Please check your connection.',
    TIMEOUT: 'The request timed out. Please try again.',
    OFFLINE: 'You appear to be offline. Please check your connection.'
  },
  UI: {
    DEFAULT: 'An interface error occurred. Please try again.',
    INVALID_INPUT: 'Invalid input provided.',
    ACTION_FAILED: 'Action could not be completed.'
  },
  STORAGE: {
    READ_ERROR: 'Failed to read from storage.',
    WRITE_ERROR: 'Failed to write to storage.',
    QUOTA_EXCEEDED: 'Storage quota exceeded.'
  }
};
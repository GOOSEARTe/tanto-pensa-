export const ERROR_CODES = {
  VALIDATION: 'VALIDATION_ERROR',
  NETWORK: 'NETWORK_ERROR',
  AUTH: 'AUTH_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  SERVER: 'SERVER_ERROR'
} as const

export const ERROR_MESSAGES = {
  [ERROR_CODES.VALIDATION]: 'Please check your input and try again',
  [ERROR_CODES.NETWORK]: 'Network error occurred. Please check your connection',
  [ERROR_CODES.AUTH]: 'Authentication failed. Please log in again',
  [ERROR_CODES.NOT_FOUND]: 'The requested resource was not found',
  [ERROR_CODES.SERVER]: 'An unexpected error occurred. Please try again later'
} as const
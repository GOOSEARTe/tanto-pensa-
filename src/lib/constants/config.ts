export const CONFIG = {
  APP_NAME: 'Your App',
  API_URL: import.meta.env.VITE_API_URL,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  SUPPORTED_FILE_TYPES: ['image/jpeg', 'image/png', 'image/gif'],
  DATE_FORMAT: 'PPP',
  TIME_FORMAT: 'p',
} as const
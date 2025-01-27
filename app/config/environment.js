export const Environment = {
  production: false,
  version: '1.0.0',
  apiUrl: 'https://api.example.com',
  logging: {
    level: 'DEBUG',
    enabled: true
  },
  cache: {
    enabled: true,
    maxSize: 100,
    defaultTTL: 5 * 60 * 1000 // 5 minutes
  },
  analytics: {
    enabled: true,
    trackErrors: true,
    trackPerformance: true
  }
};
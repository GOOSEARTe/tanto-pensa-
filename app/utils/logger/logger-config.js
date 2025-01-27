export const LoggerConfig = {
  levels: {
    DEBUG: 'DEBUG',
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR'
  },
  
  formatters: {
    timestamp: () => new Date().toISOString(),
    level: (level) => `[${level}]`,
    message: (msg) => String(msg)
  }
};
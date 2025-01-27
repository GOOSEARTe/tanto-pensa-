const LOG_LEVELS = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR'
};

export function initializeLogger() {
  global.logger = {
    debug: (message, ...args) => logMessage(LOG_LEVELS.DEBUG, message, args),
    info: (message, ...args) => logMessage(LOG_LEVELS.INFO, message, args),
    warn: (message, ...args) => logMessage(LOG_LEVELS.WARN, message, args),
    error: (message, ...args) => logMessage(LOG_LEVELS.ERROR, message, args)
  };
}

function logMessage(level, message, args) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;
  
  switch (level) {
    case LOG_LEVELS.ERROR:
      console.error(logMessage, ...args);
      break;
    case LOG_LEVELS.WARN:
      console.warn(logMessage, ...args);
      break;
    default:
      console.log(logMessage, ...args);
  }
}
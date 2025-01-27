import { LoggerConfig } from './logger-config';
import { AppConfig } from '../../config/app.config';

class Logger {
  constructor() {
    this.config = LoggerConfig;
    this.enabled = AppConfig.logging.enabled;
  }

  formatMessage(level, message) {
    const timestamp = this.config.formatters.timestamp();
    const formattedLevel = this.config.formatters.level(level);
    const formattedMessage = this.config.formatters.message(message);
    return `${timestamp} ${formattedLevel} ${formattedMessage}`;
  }

  log(level, message, ...args) {
    if (!this.enabled) return;

    const formattedMessage = this.formatMessage(level, message);
    
    switch (level) {
      case this.config.levels.ERROR:
        console.error(formattedMessage, ...args);
        break;
      case this.config.levels.WARN:
        console.warn(formattedMessage, ...args);
        break;
      default:
        console.log(formattedMessage, ...args);
    }
  }

  debug(message, ...args) {
    this.log(this.config.levels.DEBUG, message, ...args);
  }

  info(message, ...args) {
    this.log(this.config.levels.INFO, message, ...args);
  }

  warn(message, ...args) {
    this.log(this.config.levels.WARN, message, ...args);
  }

  error(message, ...args) {
    this.log(this.config.levels.ERROR, message, ...args);
  }
}

export const logger = new Logger();
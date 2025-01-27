import { LoggerConfig } from './logger-config';

export class LoggerTransport {
  static console(level, message, args) {
    const formattedMessage = LoggerConfig.formatters.message(message);
    
    switch (level) {
      case LoggerConfig.levels.ERROR:
        console.error(formattedMessage, ...args);
        break;
      case LoggerConfig.levels.WARN:
        console.warn(formattedMessage, ...args);
        break;
      default:
        console.log(formattedMessage, ...args);
    }
  }
}
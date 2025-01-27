import { logger } from '../logger/logger';

class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.marks = new Map();
  }

  mark(name) {
    this.marks.set(name, Date.now());
  }

  measure(name, startMark, endMark) {
    const start = this.marks.get(startMark);
    const end = this.marks.get(endMark);

    if (!start || !end) {
      logger.warn('Performance marks not found:', { startMark, endMark });
      return;
    }

    const duration = end - start;
    this.metrics.set(name, duration);
    logger.debug(`Performance measure ${name}:`, duration + 'ms');
    
    return duration;
  }

  getMetrics() {
    return Object.fromEntries(this.metrics);
  }

  clearMetrics() {
    this.metrics.clear();
    this.marks.clear();
  }
}

export const performanceMonitor = new PerformanceMonitor();
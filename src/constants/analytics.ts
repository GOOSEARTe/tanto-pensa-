export const ANALYTICS_PERIODS = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
  YEAR: 'year'
} as const;

export const MOOD_TRENDS = {
  IMPROVING: 'improving',
  DECLINING: 'declining',
  STABLE: 'stable',
  FLUCTUATING: 'fluctuating'
} as const;

export type AnalyticsPeriod = typeof ANALYTICS_PERIODS[keyof typeof ANALYTICS_PERIODS];
export type MoodTrend = typeof MOOD_TRENDS[keyof typeof MOOD_TRENDS];
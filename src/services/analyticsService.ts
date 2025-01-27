import { MoodEntry } from '../types/mood';
import { JournalEntry } from '../types/journal';
import { AnalyticsPeriod, MOOD_TRENDS } from '../constants/analytics';
import { startOfDay, subDays, subWeeks, subMonths } from 'date-fns';

export const analyticsService = {
  getDateRangeForPeriod(period: AnalyticsPeriod): { start: Date; end: Date } {
    const end = startOfDay(new Date());
    let start: Date;

    switch (period) {
      case 'day':
        start = subDays(end, 1);
        break;
      case 'week':
        start = subWeeks(end, 1);
        break;
      case 'month':
        start = subMonths(end, 1);
        break;
      case 'year':
        start = subMonths(end, 12);
        break;
      default:
        start = subWeeks(end, 1);
    }

    return { start, end };
  },

  calculateMoodTrend(entries: MoodEntry[]): typeof MOOD_TRENDS[keyof typeof MOOD_TRENDS] {
    if (entries.length < 2) return 'stable';

    const moodValues = entries.map(entry => entry.mood);
    const differences = moodValues.slice(1).map((value, index) => value - moodValues[index]);
    const averageDifference = differences.reduce((sum, diff) => sum + diff, 0) / differences.length;

    if (Math.abs(averageDifference) < 0.5) return 'stable';
    if (averageDifference > 0) return 'improving';
    return 'declining';
  },

  calculateJournalStats(entries: JournalEntry[]) {
    return {
      totalEntries: entries.length,
      averageLength: entries.length > 0
        ? entries.reduce((sum, entry) => sum + entry.content.length, 0) / entries.length
        : 0,
      totalWords: entries.reduce((sum, entry) => sum + entry.content.split(/\s+/).length, 0)
    };
  }
};
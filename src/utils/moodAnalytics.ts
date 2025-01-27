import { MoodEntry, MoodLevel } from '../types/mood';
import { startOfDay, endOfDay, eachDayOfInterval } from 'date-fns';

export const moodAnalytics = {
  calculateDailyAverages(entries: MoodEntry[], startDate: Date, endDate: Date) {
    const days = eachDayOfInterval({ start: startDate, end: endDate });
    
    return days.map(day => {
      const dayStart = startOfDay(day);
      const dayEnd = endOfDay(day);
      
      const dayEntries = entries.filter(entry => 
        entry.timestamp >= dayStart && entry.timestamp <= dayEnd
      );
      
      const average = dayEntries.length > 0
        ? dayEntries.reduce((sum, entry) => sum + entry.mood, 0) / dayEntries.length
        : null;
      
      return {
        date: day,
        average,
        count: dayEntries.length
      };
    });
  },

  getMoodDistribution(entries: MoodEntry[]): Record<MoodLevel, number> {
    return entries.reduce((acc, entry) => ({
      ...acc,
      [entry.mood]: (acc[entry.mood] || 0) + 1
    }), {} as Record<MoodLevel, number>);
  },

  getCommonPatterns(entries: MoodEntry[]) {
    const timePatterns = entries.reduce((acc, entry) => {
      const hour = entry.timestamp.getHours();
      return {
        ...acc,
        [hour]: {
          count: (acc[hour]?.count || 0) + 1,
          totalMood: (acc[hour]?.totalMood || 0) + entry.mood
        }
      };
    }, {} as Record<number, { count: number; totalMood: number }>);

    return Object.entries(timePatterns).map(([hour, data]) => ({
      hour: parseInt(hour),
      averageMood: data.totalMood / data.count,
      frequency: data.count
    }));
  }
};
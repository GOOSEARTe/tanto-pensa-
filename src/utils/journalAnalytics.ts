import { JournalEntry } from '../types/journal';
import { startOfDay, endOfDay, eachDayOfInterval } from 'date-fns';

export const journalAnalytics = {
  calculateDailyWordCounts(entries: JournalEntry[], startDate: Date, endDate: Date) {
    const days = eachDayOfInterval({ start: startDate, end: endDate });
    
    return days.map(day => {
      const dayStart = startOfDay(day);
      const dayEnd = endOfDay(day);
      
      const dayEntries = entries.filter(entry => 
        entry.timestamp >= dayStart && entry.timestamp <= dayEnd
      );
      
      const wordCount = dayEntries.reduce((sum, entry) => 
        sum + entry.content.split(/\s+/).length, 0
      );
      
      return {
        date: day,
        wordCount,
        entryCount: dayEntries.length
      };
    });
  },

  analyzeCommonThemes(entries: JournalEntry[]) {
    const words = entries.flatMap(entry => 
      entry.content.toLowerCase()
        .split(/\s+/)
        .filter(word => word.length > 3)
    );

    const wordFrequency = words.reduce((acc, word) => ({
      ...acc,
      [word]: (acc[word] || 0) + 1
    }), {} as Record<string, number>);

    return Object.entries(wordFrequency)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);
  },

  getWritingTimePatterns(entries: JournalEntry[]) {
    return entries.reduce((acc, entry) => {
      const hour = entry.timestamp.getHours();
      return {
        ...acc,
        [hour]: (acc[hour] || 0) + 1
      };
    }, {} as Record<number, number>);
  }
};
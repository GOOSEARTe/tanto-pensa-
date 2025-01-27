import { MoodEntry } from '../types/mood';
import { JournalEntry } from '../types/journal';

export const calculateMoodStats = (entries: MoodEntry[]) => {
  if (entries.length === 0) {
    return {
      average: 0,
      highest: 0,
      lowest: 0,
      total: 0
    };
  }

  const moodValues = entries.map(entry => entry.mood);
  
  return {
    average: moodValues.reduce((a, b) => a + b, 0) / entries.length,
    highest: Math.max(...moodValues),
    lowest: Math.min(...moodValues),
    total: entries.length
  };
};

export const getJournalStats = (entries: JournalEntry[]) => {
  return {
    totalEntries: entries.length,
    averageLength: entries.length > 0
      ? entries.reduce((sum, entry) => sum + entry.content.length, 0) / entries.length
      : 0,
    lastEntry: entries.length > 0
      ? entries[entries.length - 1].timestamp
      : null
  };
};
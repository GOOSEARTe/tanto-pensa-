import { MoodLevel, MoodEntry } from '../types/mood';
import { startOfDay, endOfDay } from 'date-fns';

export const moodUtils = {
    getAverageMood(entries: MoodEntry[]): number {
        if (entries.length === 0) return 0;
        return entries.reduce((sum, entry) => sum + entry.mood, 0) / entries.length;
    },

    getDailyMoods(entries: MoodEntry[], date: Date): MoodEntry[] {
        const start = startOfDay(date);
        const end = endOfDay(date);
        return entries.filter(entry => 
            entry.timestamp >= start && entry.timestamp <= end
        );
    },

    getMoodTrend(entries: MoodEntry[]): 'improving' | 'declining' | 'stable' {
        if (entries.length < 2) return 'stable';
        
        const moodValues = entries.map(entry => entry.mood);
        const differences = moodValues.slice(1).map((value, index) => value - moodValues[index]);
        const averageDifference = differences.reduce((sum, diff) => sum + diff, 0) / differences.length;
        
        if (Math.abs(averageDifference) < 0.5) return 'stable';
        return averageDifference > 0 ? 'improving' : 'declining';
    }
};
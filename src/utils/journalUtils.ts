import { JournalEntry } from '../types/journal';
import { startOfDay, endOfDay } from 'date-fns';

export const journalUtils = {
    getDailyEntries(entries: JournalEntry[], date: Date): JournalEntry[] {
        const start = startOfDay(date);
        const end = endOfDay(date);
        return entries.filter(entry => 
            entry.timestamp >= start && entry.timestamp <= end
        );
    },

    getWordCount(content: string): number {
        return content.trim().split(/\s+/).length;
    },

    summarizeEntry(content: string, maxLength: number = 100): string {
        if (content.length <= maxLength) return content;
        return `${content.substring(0, maxLength)}...`;
    },

    extractTags(content: string): string[] {
        const matches = content.match(/#[\w-]+/g);
        return matches ? [...new Set(matches)] : [];
    }
};
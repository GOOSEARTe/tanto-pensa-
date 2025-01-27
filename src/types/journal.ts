export interface JournalEntryType {
    id: string;
    content: string;
    timestamp: Date;
}

export interface JournalStats {
    totalEntries: number;
    averageLength: number;
    lastEntry: Date | null;
}
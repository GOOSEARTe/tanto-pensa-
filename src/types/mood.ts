export interface MoodEntry {
  id: string;
  mood: number;
  note: string;
  timestamp: Date;
  activities: string[];
}

export type MoodLevel = 1 | 2 | 3 | 4 | 5;

export interface Activity {
  id: string;
  name: string;
  icon: string;
}
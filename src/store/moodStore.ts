import { create } from 'zustand';
import { MoodEntry } from '../types/mood';
import { saveMoodEntries, loadMoodEntries } from '../services/moodService';

interface MoodState {
  entries: MoodEntry[];
  addEntry: (entry: Omit<MoodEntry, 'id'>) => void;
  deleteEntry: (id: string) => void;
  loadEntries: () => Promise<void>;
}

export const useMoodStore = create<MoodState>((set) => ({
  entries: [],
  addEntry: (entry) => {
    set((state) => {
      const newEntries = [
        ...state.entries,
        {
          ...entry,
          id: Date.now().toString(),
        },
      ];
      saveMoodEntries(newEntries);
      return { entries: newEntries };
    });
  },
  deleteEntry: (id) => {
    set((state) => {
      const newEntries = state.entries.filter((entry) => entry.id !== id);
      saveMoodEntries(newEntries);
      return { entries: newEntries };
    });
  },
  loadEntries: async () => {
    const entries = await loadMoodEntries();
    set({ entries });
  },
}));
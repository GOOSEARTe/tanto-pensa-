import { create } from 'zustand';
import { JournalEntry } from '../types/journal';
import { saveJournalEntries, loadJournalEntries } from '../services/journalService';

interface JournalState {
  entries: JournalEntry[];
  addEntry: (entry: Omit<JournalEntry, 'id'>) => void;
  deleteEntry: (id: string) => void;
  loadEntries: () => Promise<void>;
}

export const useJournalStore = create<JournalState>((set) => ({
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
      saveJournalEntries(newEntries);
      return { entries: newEntries };
    });
  },
  deleteEntry: (id) => {
    set((state) => {
      const newEntries = state.entries.filter((entry) => entry.id !== id);
      saveJournalEntries(newEntries);
      return { entries: newEntries };
    });
  },
  loadEntries: async () => {
    const entries = await loadJournalEntries();
    set({ entries });
  },
}));
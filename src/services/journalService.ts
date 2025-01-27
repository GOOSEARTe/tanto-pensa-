import { JournalEntry } from '../types/journal';
import { saveData, loadData } from '../utils/storage';
import { STORAGE_KEYS } from '../constants/storage';

export const saveJournalEntries = (entries: JournalEntry[]): void => {
  saveData(STORAGE_KEYS.JOURNAL_ENTRIES, entries);
};

export const loadJournalEntries = async (): Promise<JournalEntry[]> => {
  return loadData<JournalEntry>(STORAGE_KEYS.JOURNAL_ENTRIES);
};
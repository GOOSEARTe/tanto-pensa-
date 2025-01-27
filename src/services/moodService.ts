import { MoodEntry } from '../types/mood';
import { saveData, loadData } from '../utils/storage';
import { STORAGE_KEYS } from '../constants/storage';

export const saveMoodEntries = (entries: MoodEntry[]): void => {
  saveData(STORAGE_KEYS.MOOD_ENTRIES, entries);
};

export const loadMoodEntries = async (): Promise<MoodEntry[]> => {
  return loadData<MoodEntry>(STORAGE_KEYS.MOOD_ENTRIES);
};
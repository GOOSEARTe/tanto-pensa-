import { ApplicationSettings } from '@nativescript/core';

export const storage = {
    set: <T>(key: string, value: T): void => {
        try {
            ApplicationSettings.setString(key, JSON.stringify(value));
        } catch (error) {
            console.error('Storage set error:', error);
        }
    },

    get: <T>(key: string): T | null => {
        try {
            const value = ApplicationSettings.getString(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error('Storage get error:', error);
            return null;
        }
    },

    remove: (key: string): void => {
        try {
            ApplicationSettings.remove(key);
        } catch (error) {
            console.error('Storage remove error:', error);
        }
    },

    clear: (): void => {
        try {
            ApplicationSettings.clear();
        } catch (error) {
            console.error('Storage clear error:', error);
        }
    }
};
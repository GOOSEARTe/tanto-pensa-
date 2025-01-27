export const CONFIG = {
    APP_NAME: 'SereneMind',
    VERSION: '1.0.0',
    BUILD: '1',
    STORAGE_KEYS: {
        USER_SETTINGS: 'user_settings',
        MOOD_ENTRIES: 'mood_entries',
        JOURNAL_ENTRIES: 'journal_entries'
    },
    API: {
        TIMEOUT: 10000,
        RETRY_ATTEMPTS: 3
    },
    ANALYTICS: {
        ENABLED: true,
        TRACKING_ID: 'UA-XXXXXXXX-X'
    }
} as const;
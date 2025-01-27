import { LocalNotifications } from "@nativescript/core";
import { logger } from "./logger";

export const notifications = {
    schedule: async (title: string, body: string, at: Date) => {
        try {
            await LocalNotifications.schedule([{
                id: Date.now(),
                title,
                body,
                at,
                forceShowWhenInForeground: true
            }]);
            logger.info("Notification scheduled", { title, at });
        } catch (error) {
            logger.error("Failed to schedule notification", error);
        }
    },

    cancel: async (id: number) => {
        try {
            await LocalNotifications.cancel(id);
            logger.info("Notification cancelled", { id });
        } catch (error) {
            logger.error("Failed to cancel notification", error);
        }
    },

    cancelAll: async () => {
        try {
            await LocalNotifications.cancelAll();
            logger.info("All notifications cancelled");
        } catch (error) {
            logger.error("Failed to cancel all notifications", error);
        }
    }
};
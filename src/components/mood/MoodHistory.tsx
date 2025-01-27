import * as React from "react";
import { useMoodHistory } from "../../hooks/useMoodHistory";
import { formatDate } from "../../utils/dateUtils";
import { MoodEmoji } from "./MoodEmoji";

export function MoodHistory() {
    const { moodsByDay } = useMoodHistory();

    return (
        <scrollView className="bg-white rounded-lg p-4">
            <label className="text-xl font-semibold mb-4">Mood History</label>
            {Object.entries(moodsByDay).map(([day, entries]) => (
                <stackLayout key={day} className="mb-4">
                    <label className="font-medium text-gray-600">{formatDate(new Date(day))}</label>
                    <stackLayout className="flex-row flex-wrap">
                        {entries.map((entry) => (
                            <stackLayout key={entry.id} className="mr-2 mb-2">
                                <MoodEmoji mood={entry.mood} />
                                <label className="text-xs text-gray-500">
                                    {formatDate(entry.timestamp)}
                                </label>
                            </stackLayout>
                        ))}
                    </stackLayout>
                </stackLayout>
            ))}
        </scrollView>
    );
}
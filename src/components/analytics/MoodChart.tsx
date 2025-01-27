import * as React from "react";
import { useMoodAnalytics } from "../../hooks/useMoodAnalytics";
import { Card } from "../common/Card";
import { MoodEmoji } from "../mood/MoodEmoji";

export function MoodChart() {
    const analytics = useMoodAnalytics();
    const moodLevels = [1, 2, 3, 4, 5] as const;

    return (
        <Card>
            <label className="text-lg font-semibold mb-4">Mood Distribution</label>
            <stackLayout>
                {moodLevels.map(level => (
                    <stackLayout key={level} orientation="horizontal" className="mb-2 items-center">
                        <MoodEmoji mood={level} className="mr-2" />
                        <stackLayout className="flex-grow">
                            <stackLayout 
                                className="h-4 bg-blue-200 rounded"
                                width={`${(analytics.moodCounts[level] || 0) / analytics.totalEntries * 100}%`}
                            />
                        </stackLayout>
                        <label className="ml-2 text-gray-600">
                            {analytics.moodCounts[level] || 0}
                        </label>
                    </stackLayout>
                ))}
            </stackLayout>
        </Card>
    );
}
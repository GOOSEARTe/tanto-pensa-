import * as React from "react";
import { useMoodHistory } from "../../hooks/useMoodHistory";
import { Card } from "../common/Card";
import { MoodEmoji } from "./MoodEmoji";

export function MoodSummary() {
    const { averageMood } = useMoodHistory();
    const roundedMood = Math.round(averageMood) as 1 | 2 | 3 | 4 | 5;

    return (
        <Card className="mb-4">
            <label className="text-lg font-semibold mb-2">Your Average Mood</label>
            <stackLayout className="items-center">
                <MoodEmoji mood={roundedMood} className="mb-2" />
                <label className="text-gray-600">
                    Average: {averageMood.toFixed(1)}
                </label>
            </stackLayout>
        </Card>
    );
}
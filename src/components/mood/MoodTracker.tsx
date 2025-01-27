import * as React from "react";
import { useMoodStore } from "../../store/moodStore";
import { MoodEmoji } from "./MoodEmoji";
import { MoodSlider } from "./MoodSlider";
import { Button } from "../common/Button";
import { MoodLevel } from "../../types/mood";

export function MoodTracker() {
    const [currentMood, setCurrentMood] = React.useState<MoodLevel>(3);
    const addEntry = useMoodStore((state) => state.addEntry);

    const saveMoodEntry = () => {
        addEntry({
            mood: currentMood,
            note: "",
            timestamp: new Date(),
            activities: [],
        });
    };

    return (
        <stackLayout className="bg-white p-4 rounded-lg shadow-sm">
            <label className="text-xl font-semibold mb-4">How are you feeling?</label>
            <MoodEmoji mood={currentMood} className="mb-4" />
            <MoodSlider
                value={currentMood}
                onChange={setCurrentMood}
                className="mb-4"
            />
            <Button
                onTap={saveMoodEntry}
                variant="primary"
                className="mt-4"
            >
                Save Mood
            </Button>
        </stackLayout>
    );
}
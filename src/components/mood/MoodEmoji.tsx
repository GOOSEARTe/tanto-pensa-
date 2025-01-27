import * as React from "react";
import { MoodLevel } from "../../types/mood";
import { MOOD_EMOJIS } from "../../constants/mood";

interface MoodEmojiProps {
    mood: MoodLevel;
    className?: string;
}

export function MoodEmoji({ mood, className = "" }: MoodEmojiProps) {
    return (
        <label className={`text-4xl text-center ${className}`}>
            {MOOD_EMOJIS[mood]}
        </label>
    );
}
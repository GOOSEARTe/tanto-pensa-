import * as React from "react";
import { MoodLevel } from "../../types/mood";
import { MoodEmoji } from "./MoodEmoji";
import { MoodSlider } from "./MoodSlider";
import { Card } from "../common/Card";
import { getMoodDescription } from "../../utils/moodUtils";

interface MoodInputProps {
    value: MoodLevel;
    onChange: (value: MoodLevel) => void;
    className?: string;
}

export function MoodInput({ value, onChange, className = "" }: MoodInputProps) {
    return (
        <Card className={className}>
            <stackLayout>
                <label className="text-lg font-semibold mb-2">
                    {getMoodDescription(value)}
                </label>
                <MoodEmoji mood={value} className="mb-4" />
                <MoodSlider
                    value={value}
                    onChange={onChange}
                />
            </stackLayout>
        </Card>
    );
}
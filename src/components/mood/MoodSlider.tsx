import * as React from "react";
import { MoodLevel } from "../../types/mood";

interface MoodSliderProps {
    value: MoodLevel;
    onChange: (value: MoodLevel) => void;
    className?: string;
}

export function MoodSlider({ value, onChange, className = "" }: MoodSliderProps) {
    return (
        <slider
            value={value}
            minValue={1}
            maxValue={5}
            onValueChange={(evt) => onChange(evt.value as MoodLevel)}
            className={className}
        />
    );
}
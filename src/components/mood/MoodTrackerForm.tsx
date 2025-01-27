import * as React from "react";
import { MoodLevel } from "../../types/mood";
import { MoodInput } from "./MoodInput";
import { Button } from "../common/Button";
import { FormField } from "../common/FormField";
import { useForm } from "../../hooks/useForm";

interface MoodTrackerFormValues {
    mood: MoodLevel;
    note: string;
}

interface MoodTrackerFormProps {
    onSubmit: (values: MoodTrackerFormValues) => void;
}

export function MoodTrackerForm({ onSubmit }: MoodTrackerFormProps) {
    const { values, handleChange, handleSubmit } = useForm<MoodTrackerFormValues>({
        initialValues: {
            mood: 3,
            note: ""
        },
        onSubmit
    });

    return (
        <stackLayout className="space-y-4">
            <FormField label="How are you feeling?">
                <MoodInput
                    value={values.mood}
                    onChange={(mood) => handleChange("mood", mood)}
                />
            </FormField>

            <FormField label="Add a note (optional)">
                <textView
                    className="border-2 border-gray-200 rounded-lg p-2 h-32"
                    hint="What's making you feel this way?"
                    text={values.note}
                    onTextChange={(evt) => handleChange("note", evt.value)}
                />
            </FormField>

            <Button
                onTap={handleSubmit}
                variant="primary"
                className="mt-4"
            >
                Save Mood
            </Button>
        </stackLayout>
    );
}
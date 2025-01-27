import * as React from "react";
import { Button } from "../../common/Button/Button";
import { TextArea } from "../../common/TextArea/TextArea";

interface JournalEntryFormProps {
    content: string;
    onContentChange: (content: string) => void;
    onSave: () => void;
    onCancel: () => void;
    error?: string | null;
}

export function JournalEntryForm({
    content,
    onContentChange,
    onSave,
    onCancel,
    error
}: JournalEntryFormProps) {
    return (
        <stackLayout className="bg-white p-4 rounded-lg">
            <label className="text-xl font-semibold mb-4">Write Your Thoughts</label>
            <TextArea
                value={content}
                onChange={onContentChange}
                placeholder="What's on your mind?"
                size="large"
                className="mb-4"
            />
            {error && (
                <label className="text-red-500 mb-4">{error}</label>
            )}
            <stackLayout orientation="horizontal" className="justify-between">
                <Button
                    onTap={onCancel}
                    variant="secondary"
                    label="Cancel"
                />
                <Button
                    onTap={onSave}
                    variant="primary"
                    label="Save"
                    disabled={!content.trim()}
                />
            </stackLayout>
        </stackLayout>
    );
}
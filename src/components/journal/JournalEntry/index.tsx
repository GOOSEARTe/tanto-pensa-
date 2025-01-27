import * as React from "react";
import { useJournalEntry } from "../../../hooks/useJournalEntry";
import { JournalEntryForm } from "./JournalEntryForm";

interface JournalEntryProps {
    onSave: () => void;
    onCancel: () => void;
}

export function JournalEntry({ onSave, onCancel }: JournalEntryProps) {
    const { content, setContent, handleSave } = useJournalEntry(onSave);

    return (
        <JournalEntryForm
            content={content}
            onContentChange={setContent}
            onSave={handleSave}
            onCancel={onCancel}
        />
    );
}
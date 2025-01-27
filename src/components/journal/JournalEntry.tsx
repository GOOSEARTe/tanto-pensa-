import * as React from "react";
import { useJournalStore } from "../../store/journalStore";

interface JournalEntryProps {
    onSave: () => void;
    onCancel: () => void;
}

export function JournalEntry({ onSave, onCancel }: JournalEntryProps) {
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const addEntry = useJournalStore((state) => state.addEntry);

    const handleSave = () => {
        if (content.trim()) {
            addEntry({
                title,
                content,
                timestamp: new Date(),
                tags: []
            });
            onSave();
        }
    };

    return (
        <stackLayout className="bg-white p-4 rounded-lg">
            <label className="text-xl font-semibold mb-4">New Journal Entry</label>
            <textField
                className="border-2 border-gray-200 rounded-lg p-2 mb-4"
                hint="Title"
                text={title}
                onTextChange={(evt) => setTitle(evt.value)}
            />
            <textView
                className="border-2 border-gray-200 rounded-lg p-2 h-64 mb-4"
                hint="What's on your mind?"
                text={content}
                onTextChange={(evt) => setContent(evt.value)}
            />
            <stackLayout orientation="horizontal" className="justify-between">
                <button
                    className="bg-gray-500 text-white p-3 rounded-lg w-24"
                    onTap={onCancel}
                >
                    Cancel
                </button>
                <button
                    className="bg-green-500 text-white p-3 rounded-lg w-24"
                    onTap={handleSave}
                >
                    Save
                </button>
            </stackLayout>
        </stackLayout>
    );
}
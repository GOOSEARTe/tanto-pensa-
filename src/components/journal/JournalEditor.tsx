import * as React from "react";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { validateLength } from "../../utils/validation";

interface JournalEditorProps {
    onSave: (title: string, content: string) => void;
    onCancel: () => void;
    initialTitle?: string;
    initialContent?: string;
}

export function JournalEditor({
    onSave,
    onCancel,
    initialTitle = "",
    initialContent = ""
}: JournalEditorProps) {
    const [title, setTitle] = React.useState(initialTitle);
    const [content, setContent] = React.useState(initialContent);
    const [error, setError] = React.useState("");

    const handleSave = () => {
        if (!validateLength(content, 1, 2000)) {
            setError("Journal entry must be between 1 and 2000 characters");
            return;
        }
        onSave(title, content);
    };

    return (
        <Card>
            <stackLayout>
                <textField
                    className="border-2 border-gray-200 rounded-lg p-2 mb-4"
                    hint="Title (optional)"
                    text={title}
                    onTextChange={(evt) => setTitle(evt.value)}
                />
                <textView
                    className="border-2 border-gray-200 rounded-lg p-2 h-64 mb-4"
                    hint="Write your thoughts..."
                    text={content}
                    onTextChange={(evt) => {
                        setContent(evt.value);
                        setError("");
                    }}
                />
                {error && (
                    <label className="text-red-500 mb-4">{error}</label>
                )}
                <stackLayout orientation="horizontal" className="justify-between">
                    <Button
                        onTap={onCancel}
                        variant="secondary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onTap={handleSave}
                        variant="primary"
                    >
                        Save
                    </Button>
                </stackLayout>
            </stackLayout>
        </Card>
    );
}
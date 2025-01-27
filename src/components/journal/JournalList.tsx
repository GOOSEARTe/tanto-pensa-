import * as React from "react";
import { JournalEntry } from "../../types/journal";
import { formatDate } from "../../utils/dateUtils";

interface JournalListProps {
    entries: JournalEntry[];
}

export function JournalList({ entries }: JournalListProps) {
    return (
        <stackLayout>
            {entries.length === 0 ? (
                <label className="text-gray-500 text-center p-4">
                    No journal entries yet. Start writing!
                </label>
            ) : (
                entries.map((entry) => (
                    <stackLayout
                        key={entry.id}
                        className="bg-white p-4 rounded-lg mb-4"
                    >
                        <label className="font-bold mb-1">{entry.title}</label>
                        <label className="text-gray-500 mb-2">
                            {formatDate(entry.timestamp)}
                        </label>
                        <label className="text-base">
                            {entry.content}
                        </label>
                    </stackLayout>
                ))
            )}
        </stackLayout>
    );
}
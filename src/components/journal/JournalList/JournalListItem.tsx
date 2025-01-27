import * as React from "react";
import { JournalEntryType } from "../../../types/journal";
import { formatDate } from "../../../utils/dateUtils";

interface JournalListItemProps {
    entry: JournalEntryType;
}

export function JournalListItem({ entry }: JournalListItemProps) {
    return (
        <stackLayout className="bg-white p-4 rounded-lg mb-4">
            <label className="text-gray-500 mb-2">
                {formatDate(entry.timestamp)}
            </label>
            <label className="text-base">
                {entry.content}
            </label>
        </stackLayout>
    );
}
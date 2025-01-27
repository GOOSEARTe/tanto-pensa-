import * as React from "react";
import { JournalEntryType } from "../../../types/journal";
import { JournalListItem } from "./JournalListItem";
import { EmptyState } from "../../common/EmptyState";

interface JournalListProps {
    entries: JournalEntryType[];
}

export function JournalList({ entries }: JournalListProps) {
    if (entries.length === 0) {
        return (
            <EmptyState
                title="No Entries Yet"
                message="Start writing your first journal entry!"
            />
        );
    }

    return (
        <stackLayout>
            {entries.map((entry) => (
                <JournalListItem key={entry.id} entry={entry} />
            ))}
        </stackLayout>
    );
}
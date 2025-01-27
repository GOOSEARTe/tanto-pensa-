import * as React from "react";
import { useJournalAnalytics } from "../../hooks/useJournalAnalytics";
import { Card } from "../common/Card";

export function JournalStats() {
    const analytics = useJournalAnalytics();

    return (
        <Card>
            <label className="text-lg font-semibold mb-4">Journal Statistics</label>
            <stackLayout className="space-y-2">
                <stackLayout orientation="horizontal" className="justify-between">
                    <label className="text-gray-600">Total Entries</label>
                    <label className="font-medium">{analytics.totalEntries}</label>
                </stackLayout>
                <stackLayout orientation="horizontal" className="justify-between">
                    <label className="text-gray-600">Total Words</label>
                    <label className="font-medium">{analytics.totalWords}</label>
                </stackLayout>
                <stackLayout orientation="horizontal" className="justify-between">
                    <label className="text-gray-600">Average Words/Entry</label>
                    <label className="font-medium">{analytics.averageWordsPerEntry}</label>
                </stackLayout>
            </stackLayout>
        </Card>
    );
}
import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../navigation/NavigationParamList";
import { Card } from "../common/Card";
import { useStats } from "../../hooks/useStats";
import { formatDate } from "../../utils/dateUtils";

type SettingsScreenProps = {
    route: RouteProp<MainStackParamList, "Settings">,
    navigation: FrameNavigationProp<MainStackParamList, "Settings">,
};

export function SettingsScreen({ navigation }: SettingsScreenProps) {
    const stats = useStats();

    return (
        <scrollView className="bg-gray-100">
            <stackLayout className="p-4">
                <label className="text-2xl font-bold mb-4">Settings</label>
                
                <Card className="mb-4">
                    <label className="text-lg font-semibold mb-2">App Statistics</label>
                    <stackLayout className="space-y-2">
                        <label className="text-gray-600">
                            Total Mood Entries: {stats.mood.total}
                        </label>
                        <label className="text-gray-600">
                            Average Mood: {stats.mood.average.toFixed(1)}
                        </label>
                        <label className="text-gray-600">
                            Journal Entries: {stats.journal.totalEntries}
                        </label>
                        {stats.journal.lastEntry && (
                            <label className="text-gray-600">
                                Last Journal: {formatDate(stats.journal.lastEntry)}
                            </label>
                        )}
                    </stackLayout>
                </Card>

                <Card className="mb-4">
                    <label className="text-lg font-semibold mb-2">Notifications</label>
                    <stackLayout orientation="horizontal" className="justify-between items-center">
                        <label className="text-gray-600">Daily Reminders</label>
                        <switch checked={true} />
                    </stackLayout>
                </Card>

                <Card>
                    <label className="text-lg font-semibold mb-2">About</label>
                    <label className="text-gray-600">Version 1.0.0</label>
                </Card>
            </stackLayout>
        </scrollView>
    );
}
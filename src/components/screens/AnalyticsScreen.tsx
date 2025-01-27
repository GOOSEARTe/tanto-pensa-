import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../navigation/NavigationParamList";
import { MoodChart } from "../analytics/MoodChart";
import { JournalStats } from "../analytics/JournalStats";

type AnalyticsScreenProps = {
    route: RouteProp<MainStackParamList, "Analytics">,
    navigation: FrameNavigationProp<MainStackParamList, "Analytics">,
};

export function AnalyticsScreen({ navigation }: AnalyticsScreenProps) {
    return (
        <scrollView className="bg-gray-100">
            <stackLayout className="p-4">
                <label className="text-2xl font-bold mb-4">Analytics</label>
                <MoodChart />
                <JournalStats />
            </stackLayout>
        </scrollView>
    );
}
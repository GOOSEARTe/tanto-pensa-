import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../navigation/NavigationParamList";
import { MoodTracker } from "../mood/MoodTracker";
import { MoodSummary } from "../mood/MoodSummary";
import { MoodHistory } from "../mood/MoodHistory";
import { Button } from "../common/Button";
import { Header } from "../common/Header";
import { BottomNavigation } from "../navigation/BottomNavigation";
import { useMoodStore } from "../../store/moodStore";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    React.useEffect(() => {
        useMoodStore.getState().loadEntries();
    }, []);

    return (
        <gridLayout rows="*, auto">
            <scrollView row={0} className="bg-gray-100">
                <stackLayout className="p-4">
                    <Header title="Welcome to SereneMind" />
                    <MoodTracker />
                    <MoodSummary />
                    <MoodHistory />
                    <Button
                        onTap={() => navigation.navigate("Journal")}
                        variant="primary"
                        className="mt-4"
                    >
                        Open Journal
                    </Button>
                </stackLayout>
            </scrollView>
            <BottomNavigation row={1} navigation={navigation} />
        </gridLayout>
    );
}
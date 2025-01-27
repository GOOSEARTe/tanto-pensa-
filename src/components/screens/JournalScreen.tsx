import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../navigation/NavigationParamList";
import { useJournalStore } from "../../store/journalStore";
import { JournalEntry } from "../journal/JournalEntry";
import { JournalList } from "../journal/JournalList";

type JournalScreenProps = {
    route: RouteProp<MainStackParamList, "Journal">,
    navigation: FrameNavigationProp<MainStackParamList, "Journal">,
};

export function JournalScreen({ navigation }: JournalScreenProps) {
    const [isWriting, setIsWriting] = React.useState(false);
    const entries = useJournalStore((state) => state.entries);

    React.useEffect(() => {
        useJournalStore.getState().loadEntries();
    }, []);

    return (
        <scrollView className="bg-gray-100">
            <stackLayout className="p-4">
                <stackLayout className="flex-row justify-between items-center mb-4">
                    <label className="text-2xl font-bold">Journal</label>
                    {!isWriting && (
                        <button
                            className="bg-blue-500 text-white p-3 rounded-lg"
                            onTap={() => setIsWriting(true)}
                        >
                            New Entry
                        </button>
                    )}
                </stackLayout>
                
                {isWriting ? (
                    <JournalEntry
                        onSave={() => setIsWriting(false)}
                        onCancel={() => setIsWriting(false)}
                    />
                ) : (
                    <JournalList entries={entries} />
                )}
            </stackLayout>
        </scrollView>
    );
}
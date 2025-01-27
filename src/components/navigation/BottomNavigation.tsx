import * as React from "react";
import { isAndroid, isIOS } from "@nativescript/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../navigation/NavigationParamList";

interface BottomNavigationProps {
    navigation: FrameNavigationProp<MainStackParamList, keyof MainStackParamList>;
}

export function BottomNavigation({ navigation }: BottomNavigationProps) {
    const isNative = isAndroid || isIOS;
    const [activeTab, setActiveTab] = React.useState("Home");

    const navigateToScreen = (screenName: keyof MainStackParamList) => {
        setActiveTab(screenName);
        navigation.navigate(screenName);
    };

    const navigationItems = [
        { name: "Home", label: "Home" },
        { name: "Journal", label: "Journal" },
        { name: "Analytics", label: "Analytics" },
        { name: "Settings", label: "Settings" }
    ] as const;

    if (isNative) {
        return (
            <tabStrip className="bg-white border-t border-gray-200">
                {navigationItems.map(item => (
                    <tabStripItem
                        key={item.name}
                        className={`p-2 ${activeTab === item.name ? "text-blue-500" : "text-gray-500"}`}
                        onTap={() => navigateToScreen(item.name)}
                    >
                        <label>{item.label}</label>
                    </tabStripItem>
                ))}
            </tabStrip>
        );
    }

    return (
        <flexboxLayout className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex-row justify-around items-center h-16">
            {navigationItems.map(item => (
                <button
                    key={item.name}
                    className={`p-4 ${activeTab === item.name ? "text-blue-500" : "text-gray-500"}`}
                    onTap={() => navigateToScreen(item.name)}
                >
                    {item.label}
                </button>
            ))}
        </flexboxLayout>
    );
}
import * as React from "react";
import { isAndroid, isIOS } from "@nativescript/core";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "../components/screens/HomeScreen";
import { JournalScreen } from "../components/screens/JournalScreen";
import { AnalyticsScreen } from "../components/screens/AnalyticsScreen";
import { SettingsScreen } from "../components/screens/SettingsScreen";

const StackNavigator = stackNavigatorFactory();
const isNative = isAndroid || isIOS;

export function Navigator() {
    return (
        <BaseNavigationContainer>
            <StackNavigator.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#4A90E2",
                    },
                    headerTintColor: "#ffffff",
                    headerShown: true,
                    ...(isNative ? {
                        gestureEnabled: true,
                        stackAnimation: "slide",
                    } : {
                        animationEnabled: true,
                    }),
                }}
            >
                <StackNavigator.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "SereneMind" }}
                />
                <StackNavigator.Screen
                    name="Journal"
                    component={JournalScreen}
                    options={{ title: "Journal" }}
                />
                <StackNavigator.Screen
                    name="Analytics"
                    component={AnalyticsScreen}
                    options={{ title: "Analytics" }}
                />
                <StackNavigator.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{ title: "Settings" }}
                />
            </StackNavigator.Navigator>
        </BaseNavigationContainer>
    );
}
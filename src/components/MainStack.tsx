import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { JournalScreen } from "./screens/JournalScreen";
import { AnalyticsScreen } from "./screens/AnalyticsScreen";
import { SettingsScreen } from "./screens/SettingsScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4A90E2",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "SereneMind"
                }}
            />
            <StackNavigator.Screen
                name="Journal"
                component={JournalScreen}
                options={{
                    title: "Journal"
                }}
            />
            <StackNavigator.Screen
                name="Analytics"
                component={AnalyticsScreen}
                options={{
                    title: "Analytics"
                }}
            />
            <StackNavigator.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: "Settings"
                }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
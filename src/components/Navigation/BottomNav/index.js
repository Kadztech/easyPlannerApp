import React from 'react';
import { SafeAreaView, Text } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <SafeAreaView>
            <Text>BottomNav</Text>
        </SafeAreaView>
    )
}

export default BottomNav;
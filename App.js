import React from 'react';
import { SafeAreaView, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/Screens/Auth/Login/';
import RegisterScreen from './src/Screens/Auth/Register/';
import HomeScreen from './src/Screens/Home/';
import ProfileScreen from './src/Screens/Profile/';
import EventsScreen from './src/Screens/Events/';
import HostsScreen from './src/Screens/Hosts/';
import SettingsScreen from './src/Screens/Settings/';

// stacks
import { UserInfo, EditUserInfo } from './src/Screens/Settings/stack';
import { QuickTour, ShareApp } from './src/Screens/Home/Stacks';
// imprt { quickTour }
const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: "Home Screen" }} />
      <HomeStack.Screen name="QuickTour" component={QuickTour} options={{ title: "take a quick tour" }} />
      <HomeStack.Screen name="ShareApp" component={ShareApp} options={{ title: "Share event planner app" }} />
    </HomeStack.Navigator>
)


const SettingsStackScreen = () => (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{ title: "Settings" }} />
      <SettingsStack.Screen name="UserInfo" component={UserInfo} options={{ title: "User profile" }}  />
      <SettingsStack.Screen name="EditUserInfo" component={EditUserInfo} options={{ title:"Edit user" }} />
    </SettingsStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Hosts" component={HostsScreen} />
        <Tabs.Screen name="Profile" component={ProfileScreen} />
        <Tabs.Screen name="Settings" component={SettingsStackScreen} />
      </Tabs.Navigator>
      </NavigationContainer>
  )
}

export default App;
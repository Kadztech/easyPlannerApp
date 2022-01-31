import React from 'react';
import { SafeAreaView, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Screens/Auth/Login/';
import RegisterScreen from './src/Screens/Auth/Register/';

const AuthStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text>Easy planner v1.0</Text>
    // </SafeAreaView>
  )
}

export default App;
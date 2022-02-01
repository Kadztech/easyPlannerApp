import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';


const SettingsScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>Settings Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('UserInfo')}>
                <Text>UserInfo</Text>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={() => navigation.navigate('EditUserInfo')}>
                <Text>EditUserInfo</Text>
            </TouchableOpacity>
          
        </SafeAreaView>
    )
}

export default SettingsScreen;
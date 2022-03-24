
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from 'react-native-screens';
import DrawerNavigator from './navigation/DrawerNavigator';
import BottomTabNavigator from './navigation/BottomTabNavigator';

enableScreens();

export default function App() {
  return (
    <NavigationContainer>

      <BottomTabNavigator />

    </NavigationContainer>
  );

}
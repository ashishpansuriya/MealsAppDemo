import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MainStackNavigator, FavouriteContainer, FilterContainer } from "./MainStackNavigator ";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator activeColor='#f5428d'
            inactiveColor="#95a5a6"

            barStyle={{ backgroundColor: '#ffff' }}>
            <Tab.Screen name="Home" component={MainStackNavigator} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="food" color={color} size={26} />
                ),
            }} />

            <Tab.Screen name="Favourites" component={FavouriteContainer} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="heart" color={color} size={26} />
                ),
            }} />

            <Tab.Screen name="Filter" component={FilterContainer} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="filter" color={color} size={26} />
                ),
            }} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
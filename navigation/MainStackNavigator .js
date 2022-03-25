import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoiresScreen from "../screens/CategoriesScreen";
import CategoiresMealsScreen from "../screens/CategoriesMealsScreen";
import MealsDetailsScreen from "../screens/MealsDetailsScreen";
import Colors from "../cosntants/Colors";
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import FavouriteScreen from "../screens/FavouriteScreen";
import FilterScreen from "../screens/FilterScreen";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoiresScreen}
        options={({ route }) => ({
          title: "Categories",
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.White,

          },
          headerTintColor: Platform.OS === 'android' ? Colors.White : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20
          },

          headerLeft: () => (
            <Ionicons name="menu" size={32} color={Platform.OS === 'android' ? 'gray' : Colors.Pink} onPress={() => {
            
            }} />
          ),

        })} />

      <Stack.Screen
        name="CategoryMeals"
        component={CategoiresMealsScreen}
        options={({ route }) => ({
          title: route.params.catTitle,
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.White,

          },
          headerTintColor: Platform.OS === 'android' ? Colors.White : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20
          },

        })} />

      <Stack.Screen
        name="MealsDetail"
        component={MealsDetailsScreen}

        options={({ route }) => ({
          title: route.params.mealTitle,
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.White,

          },
          headerTintColor: Platform.OS === 'android' ? Colors.White : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20
          },

          headerRight: () => (
            <Ionicons name="heart-circle" size={32} color={Platform.OS === 'android' ? 'white' : Colors.Pink} onPress={() => {
              route.params.toggleFav
              console.log(route.params.toggleFav);
            }} />
          ),
        })} />
    </Stack.Navigator>
  );
}

const FavouriteContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.White,
          },
          headerTintColor: Platform.OS === 'android' ? Colors.White : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20
          },

          headerLeft: () => (
            <Ionicons name="menu" size={32} color={Platform.OS === 'android' ? 'gray' : Colors.Pink} onPress={() => {
              console.log('Mark as Favourite');
            }} />
          ),
        })}
      />

      <Stack.Screen
        name="MealsDetails"
        component={MealsDetailsScreen}

        options={({ route }) => ({
          title: route.params.mealTitle,
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.White,

          },
          headerTintColor: Platform.OS === 'android' ? Colors.White : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20
          },

          headerRight: () => (
            <Ionicons name="heart-circle" size={32} color={Platform.OS === 'android' ? 'gray' : Colors.Pink} onPress={() => {
              
            }} />
          ),
        })} />

    </Stack.Navigator>
  );
}
const FilterContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Filter"
        component={FilterScreen}
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.White,
          },
          headerTintColor: Platform.OS === 'android' ? Colors.White : Colors.primaryColor,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20
          },

          headerRight: () => (
            <Ionicons name="newspaper-outline" size={24} color={Platform.OS === 'android' ? 'gray' : Colors.Pink} onPress={() => {
              route.params.save()
            }} />
          ),
        
        })}
      />


    </Stack.Navigator>
  );
}

export { MainStackNavigator, FavouriteContainer,FilterContainer };

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "../navigation/BottomTabNavigator";
import { FavouriteContainer } from "./MainStackNavigator ";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Cateory" component={BottomTabNavigator} options={{
        headerShown: false
      }} />
      <Drawer.Screen name="Favourite" component={FavouriteContainer} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from 'react-native-screens';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import { combineReducers, createStore } from 'redux';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
         <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );

}
import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";


const FavouriteScreen = props => {

    const mealData = useSelector(state => state.meals.favouriteMeals);


    if (mealData.length === 0 || !mealData) {
        return (
            <View style={{flex: 1,justifyContent: 'center',
            alignItems:'center',alignSelf: 'center'}}>
                <Text style={{textAlign:'center' ,fontSize: 22}}>
                    There Is No Item Found
                </Text>
            </View>
        );
    }

    return (
        <MealList  listData = {mealData} navigation ={props.navigation} />
    );
};

export default FavouriteScreen;
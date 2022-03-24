import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavouriteScreen = props => {

    const mealData = MEALS.filter(meal => meal.id === 'm1' ||meal.id === 'm2' )
    return (
        <MealList  listData = {mealData} navigation ={props.navigation} />
    );
};

export default FavouriteScreen;
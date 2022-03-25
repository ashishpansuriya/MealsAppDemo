import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";


const FavouriteScreen = props => {

    const mealData = useSelector(state => state.meals.favouriteMeals);
    return (
        <MealList  listData = {mealData} navigation ={props.navigation} />
    );
};

export default FavouriteScreen;
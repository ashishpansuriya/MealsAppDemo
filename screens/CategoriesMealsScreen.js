import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data.js";


const CategoiresMealsScreen = props => {

    const params = props.route.params;
    const catId = params.catId;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <MealList  listData ={displayedMeals} navigation ={props.navigation} />
    );
};

export default CategoiresMealsScreen;
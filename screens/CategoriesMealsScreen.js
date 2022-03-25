import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";


const CategoiresMealsScreen = props => {

    const params = props.route.params;
    const catId = params.catId;
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (

        <MealList  listData ={displayedMeals} navigation ={props.navigation} />
    );
};

export default CategoiresMealsScreen;
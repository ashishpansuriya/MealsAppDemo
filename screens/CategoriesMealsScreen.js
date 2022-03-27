import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";


const CategoiresMealsScreen = props => {

    const params = props.route.params;
    const catId = params.catId;
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);


    if (displayedMeals.length === 0) {
        return (<View style={{
            flex: 1, justifyContent: 'center',
            alignItems: 'center', alignSelf: 'center'
        }}>
            <Text style={{ textAlign: 'center', fontSize: 22 }}>
                There Is No Meals Found
            </Text>
        </View>)
    }   

    return (

        <MealList  listData ={displayedMeals} navigation ={props.navigation} />
    );
};

export default CategoiresMealsScreen;
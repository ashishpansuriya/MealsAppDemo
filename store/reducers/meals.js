import {MEALS} from "../../data/dummy-data";
import { TOGGLE_FAVOURITE } from "../actions/meals";

const initialState ={

    meals: MEALS ,
    filteredMeals : MEALS,
    favouriteMeals : []

};

const mealsReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FAVOURITE:
            const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId);

            if (existingIndex >= 0) {
                const updatedMeal = [...state.favouriteMeals];
                updatedMeal.splice(existingIndex ,1);
                return { ...state, favouriteMeals :updatedMeal }
            }else{
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return {...state, favouriteMeals : state.favouriteMeals.concat(meal)}
            }
        default:
            return state;
    }

    return state;
}

export default mealsReducer;
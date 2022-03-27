import {MEALS} from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVOURITE } from "../actions/meals";

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
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return {...state, favouriteMeals : state.favouriteMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updateFilterMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.loctoseFree && !meal.isLoctoseFree) {
                    return false;
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredMeals: updateFilterMeals }
        default:
            return state;
    }
}

export default mealsReducer;
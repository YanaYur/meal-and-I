import { UPDATE_SELECTED_INGREDIENTS } from '../types';

const defaultMeals = {
    selectedIngredients: [],
    // favorites:[]
};


export default function mealsReducer(state = defaultMeals, action) {
    switch (action.type) {
        case UPDATE_SELECTED_INGREDIENTS:
            return { ...state, selectedIngredients: [...action.payload] }
        // case "FAVORITES":
        //         return {...state, setFavorite: action.payload}
        default:
            return defaultMeals;
    }
}
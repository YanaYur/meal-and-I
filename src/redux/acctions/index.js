import { UPDATE_SELECTED_INGREDIENTS } from '../types';

// export function setUser(name) {
//     return { type: "SET_USER", payload: name };
// }

export function updateSelectedIngredients(ingredients) {
    return { type: UPDATE_SELECTED_INGREDIENTS, payload: ingredients };
}


// export function setFavorite(meal){
//     return {type:"SET_FAVORITE", payload:meal}
// }
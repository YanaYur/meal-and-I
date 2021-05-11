import { UPDATE_SELECTED_INGREDIENTS, SET_FAVOURITE } from '../types';


export function updateSelectedIngredients(ingredients) {
    return { type: UPDATE_SELECTED_INGREDIENTS, payload: ingredients };
}


export function setFavourite(favorites){
    return {type:SET_FAVOURITE, payload:favorites}
}

export function setUser(name) {
    return { type: "SET_USER", payload: name };
}

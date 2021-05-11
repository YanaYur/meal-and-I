import { UPDATE_SELECTED_INGREDIENTS, SET_FAVOURITE, SET_USER } from '../types';

const defaultInfo = {
    selectedIngredients: [],
    favorites:['52772','52773'],
    user:undefined
};


export default function mealsReducer(state = defaultInfo, action) {
    switch (action.type) {
        case UPDATE_SELECTED_INGREDIENTS:
            return { ...state, selectedIngredients: [...action.payload] }
        case SET_FAVOURITE:
                return {...state, favorites: action.payload}
        case SET_USER:
            return {...state, user: action.payload}
        default:
            return defaultInfo;
    }
}
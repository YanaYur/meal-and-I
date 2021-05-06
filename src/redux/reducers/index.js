const defaultMeals = {
    mealsToPrint: [],
    selectedIngredients: [],
    detail: [],
    favorites: []
};


export default function mealsReducer(state = defaultMeals, action) {
    switch (action.type) {
        case "MEALS_TO_PRINT":
            return {...state, setMeals: action.payload }
        case "SELECTED_INGREDIENTS":
            return {...state, setIngredients: action.payload}
        case "DETAIL":
            return {...state, setDetail: action.payload}
        case "FAVORITES":
                return {...state, setFavorite: action.payload}
        default:
            return meal;
    }
}
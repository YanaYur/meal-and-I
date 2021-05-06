// export function setUser(name) {
//     return { type: "SET_USER", payload: name };
// }

export function setMeals(meals) {
    return { type: "SET_MEALS", payload: meals };
}

export function setIngredients(ingredients) {
    return { type: "SET_INGREDIENTS", payload: ingredients };
}
export function setDetail(detail){
    return {type:"SET_DETAIL", payload: detail};
}

export function setFavorite(meal){
    return {type:"SET_FAVORITE", payload:meal}
}
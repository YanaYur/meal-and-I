import React from 'react';
import IngredientCard from './IngredientCard';
import './styles.scss';

function loading() {
    return (
        <div>Loading...</div>
    )
}

function ingredientList(ingredients) {
    return [<IngredientCard/>,<IngredientCard/>,<IngredientCard/>,<IngredientCard/>,<IngredientCard/>,<IngredientCard/>,<IngredientCard/>,<IngredientCard/>,<IngredientCard/> ]

    // return ingredients.map(ing => <div className="ingredient-item">
    //     <div className="ingredient">{ing.strIngredient}</div>
    //     <img src={`${process.env.REACT_APP_IMG_URL_BASE}${ing.strIngredient}-Small.png`} alt="icon"></img>
    // </div>);
}

const MainIngredients = ({ data }) => {
    return (
        <div className="main-ingredients">
            
            {data ? ingredientList(data) : loading()}
            
        </div>
    );
}

export default MainIngredients;
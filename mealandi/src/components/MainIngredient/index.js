import React from 'react';
import IngredientCard from './IngredientCard';
import './styles.scss';

function loading() {
    return (
        <div>Loading...</div>
    )
}

function ingredientList(ingredients) {
    
    return ingredients.map(ing => <IngredientCard data={ing}/>);
}

const MainIngredients = ({ data }) => {
    return (
        <div className="main-ingredients">
            
            {data ? ingredientList(data) : loading()}
            
        </div>
    );
}

export default MainIngredients;
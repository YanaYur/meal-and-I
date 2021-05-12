import React from 'react';
import IngredientCard from './IngredientCard';
import Loader from '../Loader';

import './styles.scss';

function ingredientList(ingredients) {
    return ingredients.map(ing => <IngredientCard key={ing.idIngredient} data={ing} />);
}

const MainIngredients = ({ data }) => {
    return (
        <div className="main-ingredients">

            {data ? ingredientList(data) : <Loader/>}

        </div>
    );
}

export default MainIngredients;
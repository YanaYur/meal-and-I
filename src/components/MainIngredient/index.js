import React from 'react';
import IngredientCard from './IngredientCard';
import Loader from '../Loader';
import Title from '../../components/Title';

import './styles.scss';

function ingredientList(ingredients) {
    return ingredients.map(ing => <IngredientCard key={ing.idIngredient} data={ing} />);
}

const MainIngredients = ({ data }) => {
    return (
        <>
            <Title name="CHOOSE MAIN INGREDIENT" />
            <div className="main-ingredients">

                {data ? ingredientList(data) : <Loader />}

            </div>
        </>
    );
}

export default MainIngredients;
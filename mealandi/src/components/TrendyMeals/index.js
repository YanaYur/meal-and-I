import React from 'react';
import Title from '../Title/index';
import TrendyCard from './TrendyCard/index';

import './styles.scss';

// function trendyMeals(data) {
//     const { meals } = data;
//     return meals.map(meal => <div className="trendy-meal">
//         <div className="meal">{meal.strMeal}</div>
//         <img src={`${meal.strMealThumb}`} alt="meal"></img>
//     </div>);
// }

function loading() {
    return (
        <div>Loading...</div>
    )
}

function trendyMealsList(data) {
    return [<TrendyCard />,<TrendyCard />,<TrendyCard />];

    // return ingredients.map(ing => <div className="ingredient-item">
    //     <div className="ingredient">{ing.strIngredient}</div>
    //     <img src={`${process.env.REACT_APP_IMG_URL_BASE}${ing.strIngredient}-Small.png`} alt="icon"></img>
    // </div>);
}

const TrendyMeals = ({ data }) => {
    return (
        <>
            <Title name="Trendy Meals"/>
            <div className="trendy-meals">

                {data ? trendyMealsList(data) : loading()}

            </div>
        </>
    );
}

export default TrendyMeals;
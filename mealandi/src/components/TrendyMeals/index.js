import React from 'react';

import'./styles.scss';

function trendyMeals(data) {
    const { meals } = data ;
    return meals.map(meal => <div className="trendy-meal">
        <div className="meal">{meal.strMeal}</div>
        <img src={`${meal.strMealThumb}`} alt="meal"></img>
    </div>);
}

const TrendyMeals = ({ data}) => {
    return (
        <div key="ingredients" className="main-ingredients">
        {trendyMeals({data})}
        </div>
    );
}

export default TrendyMeals;
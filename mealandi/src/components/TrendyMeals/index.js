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
    return data.map(trendy => <TrendyCard data={trendy}/>);
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
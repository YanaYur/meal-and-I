import React from 'react';
import Title from '../Title/index';
import TrendyCard from './TrendyCard/index';

import './styles.scss';

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
            <div key="123" className="trendy-meals">

                {data ? trendyMealsList(data) : loading()}

            </div>
        </>
    );
}

export default TrendyMeals;
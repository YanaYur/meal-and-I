import React from 'react';
import Title from '../Title/index';
import TrendyCard from './TrendyCard/index';
import Loader from '../Loader';

import './styles.scss';

function trendyMealsList(data) {

    return data.map(trendy => <TrendyCard key={trendy.idMeal}  data={trendy} />);
}

const TrendyMeals = ({ data }) => {
    return (
        <>
            <Title name="CHECK OUT THIS TRENDY SELECTION" />
            <div className="trendy-meals">

                {data ? trendyMealsList(data) : <Loader/>}

            </div>
        </>
    );
}

export default TrendyMeals;
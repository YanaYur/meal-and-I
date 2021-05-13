import React from 'react';
import FoundCard from './FoundCard/index';
import Loader from '../Loader';

import './styles.scss';

function foundForPrint(data) {
    return data.map(meal => <FoundCard key={meal.idMeal} data={meal} />);
}

const FoundList = ({ data }) => {

    return (
        <>
            <div className="found-meals">

                {data ? foundForPrint(data) : <Loader />}

            </div>
        </>
    );
}

export default FoundList;
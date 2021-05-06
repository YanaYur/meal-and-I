import React from 'react';

import FoundCard from './FoundCard/index';

import './styles.scss';

function loading() {
    return (
        <div>Loading...</div>
    )
}

function foundForPrint(data) {

    return data.map(meal => <FoundCard data={meal} />);
}

const FoundList = ({ data }) => {
  
    return (
        <>
            <div className="found-meals">

                {data && data.length > 0 ? foundForPrint(data) : loading()}

            </div>
        </>
    );
}

export default FoundList;
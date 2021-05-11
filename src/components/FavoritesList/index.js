import React from 'react';

import FavouriteCard from './FavouriteCard/index';

import './styles.scss';

function loading() {
    return (
        <div>Loading...</div>
    )
}

function favoritesToPrint(data) {

    return data.map(meal => <FavouriteCard data={meal} />);
}

const FoundList = ({ data }) => {
  
    return (
        <>
            <div className="favorites-meals">

                {data && data.length > 0 ? favoritesToPrint(data) : loading()}

            </div>
        </>
    );
}

export default FoundList;
import React from 'react';

import FavouriteCard from './FavouriteCard/index';
import Loader from '../Loader';

import './styles.scss';


function favoritesToPrint(data) {

    return data.map(meal => <FavouriteCard data={meal} />);
}

const FoundList = ({ data }) => {
  
    return (
        <>
            <div className="favorites-meals">
           
                {data && data.length > 0 ? favoritesToPrint(data) : <Loader/>}

            </div>
        </>
    );
}

export default FoundList;
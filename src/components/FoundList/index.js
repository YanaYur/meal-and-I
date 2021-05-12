import React from 'react';
import FoundCard from './FoundCard/index';
import Loader from '../Loader';

import './styles.scss';

function foundForPrint(data) {

    return data.map(meal => <FoundCard  data={meal} />);
}

const FoundList = ({ data }) => {
  
    return (
        <>
            <div className="found-meals">

                {data && data.length > 0 ? foundForPrint(data) : <Loader/>}

            </div>
        </>
    );
}

export default FoundList;
import React from 'react';


import Title from '../Title/index'
import {ImMagicWand} from 'react-icons/im'
import './styles.scss';

// const coverRandom = () => {
//     return <div key="1" className="random-cover">
//         <img src={random} alt='cover'></img>
//     </div>
// }

const Random = () => {
    return (
        <>
            <Title name="Generate Random Meal" />
            <div className="random-meal-card">
                <div className="random-meal-card__cover">
                  
                </div>
                <div className="random-meal-card__button">
                    <button type="button" value="click"><ImMagicWand/></button>
                </div>
            </div>
        </>
    );


}

export default Random;
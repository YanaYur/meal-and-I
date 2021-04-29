import React from 'react';

import'./styles.scss';


function mainIngredient(main) {
    const { meals } = main ;
    return meals.map(ing => <div className="ingredient-item">
        <div className="ingredient">{ing.strIngredient}</div>
        <img src={`${process.env.REACT_APP_IMG_URL_BASE}${ing.strIngredient}-Small.png`} alt="icon"></img>
    </div>);
}

const mainIngredients = ({ newData }) => {
    return (
        <div key="ingredients" className="main-ingredients">
        {mainIngredient({newData})}   
       
        </div>
    );
}

export default mainIngredients;
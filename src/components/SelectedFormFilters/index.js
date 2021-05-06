import React from 'react';


import './styles.scss';

const SelectedIngredient = (ingredients, handleRemove) => {
    return ingredients.map((ing, index)=>(<button type="button" key={ing} onClick={()=>handleRemove(index)} className="choosen-ingredients__value">{ing}</button>));

}

const SelectedFormFilters = ({ ingredients, handleRemove }) => {
   
    return (
        <>
            <div key="id" className="choosen-ingredients">
                {SelectedIngredient(ingredients,handleRemove)}
            </div>
        </>
    );

}
export default SelectedFormFilters;
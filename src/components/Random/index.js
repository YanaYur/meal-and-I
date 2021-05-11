import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Title/index'
import { ImMagicWand } from 'react-icons/im'

import './styles.scss';

function loading() {
    return (
        <div>Loading...</div>
    )
}

const Random = ({ data, handleUpdateRandom }) => {
   
    const handleRandom = (e) => {
        e.preventDefault();
        handleUpdateRandom();
    }

    return (
        <>
            <Title name="Generated Random Meal" />
            <div className="random-meal-card">
                {data ?
                    <div className="random-meal-card__cover">
                        <Link to={{
                            pathname: "/detail",
                            search: `?mealId=${data.meals[0].idMeal}`,
                        }}>
                            <img src={data.meals[0].strMealThumb} alt={data.meals[0].strMeal}></img>
                            <p>{data.meals[0].strMeal}</p>
                        </Link>
                    </div>
                    : loading()}
                <div className="random-meal-card__button">
                    <button type="button" value="click" onClick={handleRandom}><ImMagicWand /></button>
                </div>
            </div>
        </>
    );


}

export default Random;
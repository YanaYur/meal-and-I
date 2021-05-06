import axios from 'axios';
require('dotenv').config()

async function getMainIngredients() {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL_BASE}list.php?i=list`);
  const newData=data.meals.slice(0, 10);
    return newData;
}

async function getTrendyMeals() {
    const { data } = await axios(`${process.env.REACT_APP_API_URL_BASE}search.php?f=b`);
    const newData=data.meals.slice(0, 5);
    return newData;
}

async function getRandomMeal() {
    const { data } = await axios(`${process.env.REACT_APP_API_URL_BASE}random.php`);

    return data;
}

async function getMealByIngredient(selectedIngredient){
    debugger
    const { data } = await axios(`${process.env.REACT_APP_API_URL_BASE}filter.php?i=${selectedIngredient}`);
    const newData=data.meals.slice(0, 5);
    return newData;
}

async function getMealById(id){
    const { data } = await axios(`${process.env.REACT_APP_API_URL_BASE}lookup.php?i${id}`);
    return data;
}


export default {getMainIngredients, getRandomMeal, getTrendyMeals, getMealByIngredient, getMealById};

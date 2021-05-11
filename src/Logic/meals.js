import axios from 'axios';
require('dotenv').config()

async function getMainIngredients() {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL_BASE}list.php?i=list`);
    const newData = data.meals.slice(0, 10);
    return newData;
}

async function getTrendyMeals() {
    const { data } = await axios(`${process.env.REACT_APP_API_URL_BASE}search.php?f=b`);
    const newData = data.meals.slice(0, 5);
    return newData;
}

async function getRandomMeal() {
    const { data } = await axios(`${process.env.REACT_APP_API_URL_BASE}random.php`);
    return data;
}

async function getByIngredients(selectedIngredients) {
    const requests = selectedIngredients.map(getMealByIngredient);
    return Promise.all(requests).then((results) => results);
}

async function getMealByIngredient(selectedIngredients) {
    const { data } = await axios(`${process.env.REACT_APP_API_URL_BASE}filter.php?i=${selectedIngredients}`);
    const safeData = data.meals || [];
    const newData = safeData.slice(0, 5);
    return newData;
}

async function getMealById(id) {
    const { data } = await axios(`${process.env.REACT_APP_API_URL_BASE}lookup.php?i=${id}`);
    return data;
}

async function getMealsByIds(ids) {
    const requests = ids.map(getMealById);
    const res = await Promise.all(requests).then((results) => results);

    return res.reduce((acc, curr) => {
        return [...acc.meals, ...curr.meals];
    });
}


export default { getByIngredients, getMealsByIds, getMainIngredients, getRandomMeal, getTrendyMeals, getMealByIngredient, getMealById };

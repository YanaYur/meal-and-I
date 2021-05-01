import { React, useState, useEffect } from 'react';
import Header from '../../components/Header'
import Title from '../../components/Title'
import Menu from '../../components/Menu'
import Random from '../../components/Random'
import MainIngredients from '../../components/MainIngredient';
import Logic from '../../Logic/meals';
import TrendyMeals from '../../components/TrendyMeals';

const Home = () => {

  const [ingredients, setIngredients] = useState(null);
  // const [trendy, setTrendy] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      setIngredients(null);
     

      // const mainIngredients = await Logic.getMainIngredients();
      // dispatch(setNewWeather(weatherCity));
      setIngredients([]);

      // const trendy = await Logic.getTrendyMeals();

      // // dispatch(setNewForecast(weatherWeek));
      // setTrendy(trendy);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="home">
        <Header />
        <Title name="Main ingredients" />
        <MainIngredients data={ingredients}/>
        <TrendyMeals data={ingredients}/>
        <Random/>
        
      </div>
      <div className="menu">
        <Menu />
      </div>
    </>
  );
}

export default Home;
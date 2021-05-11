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
  const [trendy, setTrendy] = useState(null);
  const [random, setRandom] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      setIngredients(null);

      const mainIngredients = await Logic.getMainIngredients();

      setIngredients(mainIngredients);

      const trendy = await Logic.getTrendyMeals();

      setTrendy(trendy);

      const randomGenerated = await Logic.getRandomMeal();
      setRandom(randomGenerated);

    };
    fetchData();
  }, []);

  async function handleUpdateRandom() {
    setRandom(null);
    const randomGenerated = await Logic.getRandomMeal();
    setRandom(randomGenerated);
  }

  return (
    <>
      <div className="home">
        <Header />
        <Title name="Main ingredients" />
        <MainIngredients data={ingredients} />
        <TrendyMeals data={trendy} />
        <Random data={random} handleUpdateRandom={handleUpdateRandom} />
      </div>
        <Menu />
    </>
  );
}

export default Home;
import { React, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import DetailCard from '../../components/DetailCard'
import Logic from '../../Logic/meals';
import { useSelector, useDispatch } from 'react-redux';
import { favoritesSelector } from '../../redux/selectors/selectors';
import { setFavourite } from '../../redux/acctions';

import './styles.scss'


const Detail = () => {

  const dispatch = useDispatch();
  const [detail, setDetail] = useState([]);
  const favoritesSelected = useSelector(favoritesSelector);
  let history = useHistory();

  const params = new URLSearchParams(window.location.search);
  const mealId = params.get('mealId');

  useEffect(() => {
    async function handleDetail() {
      const detailedMeal = await Logic.getMealById(mealId);
      const meal = detailedMeal.meals[0];
      const favourite = favoritesSelected.includes(meal.idMeal);

      setDetail({ ...meal, favourite });
    }
    handleDetail();

  }, [favoritesSelected]);

  function handleClick() {
    history.push("/home");
  };

  function toggleFavorites(mealId) {
    const copy = [...favoritesSelected];
    const index = copy.findIndex(id => id === mealId);

    if (index > -1) {
      copy.splice(index, 1)
      dispatch(setFavourite(copy));
    } else {
      dispatch(setFavourite([...favoritesSelected, mealId]))
    }
  }


  return (
    <>
      <Header />
      <div className="detail">
        <DetailCard data={detail} handleClick={handleClick} toggleFavorites={toggleFavorites} />
      </div>
      <div className="menu">
        <Menu />
      </div>
    </>

  );
}

export default Detail;
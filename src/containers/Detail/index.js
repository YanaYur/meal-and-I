import {React, useState} from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import DetailCard from '../../components/DetailCard'
import Logic from '../../Logic/meals';

import './styles.scss'

const Detail = () => {

  const [detail, setDetail]=useState([]);

  const params = new URLSearchParams(window.location.search);
  console.log(params.get('mealId'));

  // async function handleDetail(id) {
  
  //   const detailMeal = await Logic.getMealById(id);

  //   setDetail(detailMeal);

  // }

  return (
    <>
      <Header />
      <div className="detail">
        <DetailCard data={detail}/>
          </div>
      <div className="menu">
        <Menu />
      </div>
    </>
  );
}
export default Detail;
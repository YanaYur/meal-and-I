import React from 'react';
import Header from '../../components/Header'
import Title from '../../components/Title'
import Card from '../../components/Card'
import Menu from '../../components/Menu'

const Home = () => {
  
  return (
      <>
      <div className="home">
        <Header />
      </div>
      <div className='title'>
        <Title name="Main ingredients" />
      </div>
      <div className="card">
        <Card/>
      </div>
      <div className='title'>
        <Title name="Popular dishes"/>
      </div>
      <div className="card">
        <Card/>
      </div>
      <div className='title'>
        <Title name="Random Meal"/>
      </div>
      <div className="card">
        <Card/>
      </div>
      <div className="menu">
        <Menu/>
      </div>
      </>
    );
}

export default Home;
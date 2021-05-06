import { React, useState, useEffect } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu'
import SearchForm from '../../components/SearchForm';
// import SelectedFormFilters from '../../components/SelectedFormFilters';
import Title from '../../components/Title';
import FoundList from '../../components/FoundList';
import Logic from '../../Logic/meals';

const Search = () => {

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [meals, setMeals] = useState([]);


  // useEffect(() => {

  //   const params = new URLSearchParams(window.location.search);

  //   if (params) {
  //     handleAdd(params.get('ingredient'));

    
  //   }


  // }, []);



  async function handleSearch() {

    const search = await Logic.getMealByIngredient(selectedIngredients);

    setMeals(search);

  }

  function handleAdd(ing) {

    if (ing) {

      setSelectedIngredients([...selectedIngredients, ing]);

    } else {
      console.log('Please enter ingredient')
    }
  }

  function handleRemove(index) {

    const copy = [...selectedIngredients]
    copy.splice(index, 1)

    setSelectedIngredients(copy);
  }


  return (
    <>
      <Header />
      <div className="search">
        <SearchForm data={selectedIngredients}
          handleSearch={handleSearch}
          handleRemove={handleRemove}
          handleAdd={handleAdd} />
        <Title name="Now you can cook this delicious dishes" />
        <FoundList data={meals} />
      </div>
      <div className="menu">
        <Menu />
      </div>
    </>
  );
}
export default Search;
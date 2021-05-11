import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Menu from '../../components/Menu'
import SearchForm from '../../components/SearchForm';
import Title from '../../components/Title';
import FoundList from '../../components/FoundList';
import Logic from '../../Logic/meals';

import { updateSelectedIngredients } from '../../redux/acctions';
import { ingredientsSelector } from '../../redux/selectors/selectors';
import { useDispatch } from 'react-redux';

const Search = () => {

  const dispatch = useDispatch();
  const selectedIngredients = useSelector(ingredientsSelector);
  const [meals, setMeals] = useState([]);


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params) {
      handleAdd(params.get('ingredient'));
    }

  }, []);


  async function handleSearch() {

    const search = await Logic.getMealByIngredient(selectedIngredients);
    const flatResults = search.reduce((acc, curr) => {
      return [...acc, curr];
    }, []);

    setMeals(flatResults);

  }

  function handleAdd(ing) {

    if (ing) {

      dispatch(updateSelectedIngredients([...selectedIngredients, ing]));

    } else {
      console.log('Please enter ingredient')
    }
  }

  function handleRemove(index) {

    const copy = [...selectedIngredients]
    copy.splice(index, 1)

    dispatch(updateSelectedIngredients(copy));
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
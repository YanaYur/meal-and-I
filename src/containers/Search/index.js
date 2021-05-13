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
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ingredient = params ? params.get('ingredient') : undefined

    if (ingredient && !selectedIngredients.includes(ingredient)) {
      handleAdd(ingredient);
      handleSearch([ingredient])
    }

  }, []);


  async function handleSearch() {
    setMeals(null);

    const search = await Logic.getByIngredients(selectedIngredients);
    const flatResults = search.reduce((acc, curr) => {
      return [...acc, ...curr];
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


  function handlUpdateOptions(ingredientName) {
    debugger
    setOptions(Logic.getIngredientsOptions(ingredientName))
  }


  return (
    <>
      <Header />
      <div className="search">
        <SearchForm data={selectedIngredients}
          handleSearch={handleSearch}
          handleRemove={handleRemove}
          handlUpdateOptions={handlUpdateOptions}
          handleAdd={handleAdd}
          options={options} />
        <Title name="CHOOSE YOUR MEAL" />
        <FoundList data={meals} />
      </div>
      <div className="menu">
        <Menu />
      </div>
    </>
  );
}
export default Search;
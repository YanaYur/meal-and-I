import { React, useRef, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import SelectedFormFilters from '../SelectedFormFilters'
import './styles.scss';



const SearchForm = ({ data, handleSearch, handleRemove, handleAdd, handlUpdateOptions, options }) => {
    const input = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(input.current.value);
    }

    const handleToggleIngredient = (ingredientName) => {
        handleAdd(ingredientName)
        input.current.value = "";
    }

    return (
        <>
            <div className="search-form">
                <button type="button" className="search-form__button_2" onClick={() => handleToggleIngredient(input.current.value)} value="Add">
                    <IoIosAdd /> </button>
                <input className="search-form__input" list="ingredients" onChange={() => handlUpdateOptions(input.current.value)} ref={input} type="text" id="search" placeholder="Search by name o ingredients..."
                />
                <datalist className="search-form__datalist" id="ingredients">
                    {options.map(option => <option value={option} />)}
                </datalist>


                <button type="button" onClick={handleSubmit} className="search-form__button_1">
                    <AiOutlineSearch />
                </button>
            </div>
            <SelectedFormFilters ingredients={data} handleRemove={handleRemove} />

        </>
    );

}
export default SearchForm;
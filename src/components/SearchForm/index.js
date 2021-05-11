import { React, useRef } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import SelectedFormFilters from '../SelectedFormFilters'
import './styles.scss';

const SearchForm = ({ data, handleSearch, handleRemove, handleAdd }) => {
    const input = useRef(null);

    const handle = (e) => {
        e.preventDefault();
        handleSearch(input.current.value);
    }


    return (
        <>
            <div className="search-form">
                <button type="button" className="search-form__button_2" onClick={() => handleAdd(input.current.value)} value="Add">
                    <IoIosAdd /> </button>
                <input className="search-form__input" ref={input} type="text" id="search" placeholder="Search by name o ingredients..." />
                <button type="button" onClick={handle} className="search-form__button_1">
                    <AiOutlineSearch />
                </button>
            </div>
            <SelectedFormFilters ingredients={data} handleRemove={handleRemove} />

        </>
    );

}
export default SearchForm;
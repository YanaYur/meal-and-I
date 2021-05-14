import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import FoundList from '../../components/FoundList/index';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders content with found meals list', () => {
    // Arange
    let data = [{
        "strMeal": "Chick-Fil-A Sandwich",
        "idMeal": "53016"
    },
    {
        "strMeal": "Chicken Couscous",
        "idMeal": "52850"
    },
    {
        "strMeal": "Chicken Fajita Mac and Cheese",
        "idMeal": "52818"
    }];


    // Act
    const screen = render(<Router><FoundList data={data} /></Router>)

    // Assert 
    const links = screen.getAllByRole('link');

    expect(links.length).toEqual(3);

});
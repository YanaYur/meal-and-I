import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Random from '../../components/Random/index';
import { BrowserRouter as Router } from 'react-router-dom';

test.skip('renders content with random meal', () => {
    // Arange
    let data = {
        "meals": [
            {
                "idMeal": "53038",
                "strMeal": "Mustard champ",
                "strDrinkAlternate": null,
                "strCategory": "Side",
                "strArea": "Irish",
                "strInstructions": "STEP 1\r\nBoil the potatoes for 15 mins or until tender. Drain, then mash.\r\n\r\nSTEP 2\r\nHeat the milk and half the butter in the corner of the pan, then beat into the mash, along with the wholegrain mustard.\r\n\r\nSTEP 3\r\nGently fry the spring onions in the remaining butter for 2 mins until just soft but still a perky green. Fold into the mash and serve. Great with gammon or to top a fish pie.",

                "strTags": null,
            }
        ]
    };
    // Act
    const screen = render(<Router><Random data={data} /></Router>)
    // Assert 
    const link = screen.getAllByRole('link');
    const button=screen.getByRole('button');

    expect(link.length).toEqual(1);
    expect(button).toHaveValue("click");
   
});
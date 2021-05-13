import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {  render } from '@testing-library/react';
import Menu from '../../components/Menu';
import { BrowserRouter as Router } from 'react-router-dom';


describe("Menu Component", () => {


    beforeAll(() => {
        
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useLocation: () => ({ pathname: '/home' }),
        }));
    })

    test('renders menu component', () => {
       
        // Act
        const screen = render(<Router> <Menu/></Router>)
        // Assert 
        const buttons =screen.getAllByRole('button');
        
        expect(buttons).toHaveLength(4);

        buttons.forEach(button=>{   
            expect(button).toHaveValue('click');
        })
        
    });

})



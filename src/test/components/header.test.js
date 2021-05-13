import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Header from '../../components/Header';

test.skip('renders header', () => {
    // ...

    // Act
    const component=render(<Header />)
    
    // Assert 
    component.getByAltText('logo');
});
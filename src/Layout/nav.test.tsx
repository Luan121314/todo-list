import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';

describe('<Nav/>', () => {
    it('should render nav', () => {
        const { debug } = render(<Home />);
        debug();
        const header = screen.getByText(/seja bem vindo/i);
        expect(header).toBeInTheDocument();
    });
});

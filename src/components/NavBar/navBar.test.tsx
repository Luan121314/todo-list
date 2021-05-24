import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '.';

describe('<NavBar/>', () => {
    it('should render NavBar', () => {
        const { debug } = render(<NavBar />);
        debug();
        const header = screen.getByText(/seja bem vindo/i);
        expect(header).toBeInTheDocument();
    });
});

import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Home from '.';
import { responseData } from './mockRequest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const handlers = [
    rest.post('*tasks', async (req, res, ctx) => {
        return res(ctx.json({}));
    }),
    rest.get('*tasks', async (req, res, ctx) => {
        return res(ctx.json(responseData));
    }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('<Home/>', () => {
    it('should render tasks in the home page', async () => {
        render(<Home />);
        const loading = screen.getByTitle('loading');
        expect(loading).toBeInTheDocument();
        await waitForElementToBeRemoved(loading);
        expect(screen.getAllByText(/taskItem/i)).toHaveLength(3);
    });
});

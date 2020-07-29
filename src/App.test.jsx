import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken || '',
    }));
  });
  it('renders App', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
  });
});

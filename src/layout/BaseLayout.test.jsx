import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import BaseLayout from './BaseLayout';

describe('BaseLayout', () => {
  it('renders BasicLayout', () => {
    const { container } = render(<MemoryRouter><BaseLayout /></MemoryRouter>);

    expect(container).toHaveTextContent('시작하기');
  });
});

import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders not found message', () => {
    const { container } = render(<MemoryRouter><NotFoundPage /></MemoryRouter>);

    expect(container).toHaveTextContent('페이지가 존재하지 않습니다');
  });
});

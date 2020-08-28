import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import InterviewsLayout from './InterviewsLayout';

describe('BaseLayout', () => {
  it('renders BasicLayout', () => {
    const { container } = render(<MemoryRouter><InterviewsLayout /></MemoryRouter>);

    expect(container).toHaveTextContent('나가기');
  });
});

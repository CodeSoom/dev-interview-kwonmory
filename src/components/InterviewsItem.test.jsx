import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import InterviewsItem from './InterviewsItem';

import mockInterviews from '../../fixtures/interviews';

describe('InterviewsItem', () => {
  it('renders InterviewsItem', () => {
    const interviews = mockInterviews[0];
    const { container } = render(
      <MemoryRouter>
        <InterviewsItem interviews={interviews} />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent(interviews.title);
    expect(container).toHaveTextContent(interviews.description);
    expect(container).toHaveTextContent(interviews.tags[0].title);
  });
});

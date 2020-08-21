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

  context('without title', () => {
    const interviews = {
      id: 1,
    };

    const { container } = render(
      <MemoryRouter>
        <InterviewsItem interviews={interviews} />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('제목이 없습니다!');
    expect(container).toHaveTextContent('설명이 없습니다!');
  });

  context('without description', () => {

  });
});

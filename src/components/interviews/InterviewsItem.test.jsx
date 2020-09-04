import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import InterviewsItem from './InterviewsItem';

import mockInterviews from '../../../fixtures/interviews';

function renderInterviewsItem(interviews, button = null) {
  return render(
    <MemoryRouter>
      <InterviewsItem interviews={interviews} onStartButton={button} />
    </MemoryRouter>,
  );
}

describe('InterviewsItem', () => {
  it('renders InterviewsItem', () => {
    const interviews = mockInterviews[0];
    const { container } = renderInterviewsItem(interviews);

    expect(container).toHaveTextContent(interviews.title);
    expect(container).toHaveTextContent(interviews.description);
    expect(container).toHaveTextContent(interviews.tags[0].title);
  });

  context('when click "도전하기" button', () => {
    it('calls button event', () => {
      const interviews = mockInterviews[0];
      const button = jest.fn();

      const { getByText } = renderInterviewsItem(interviews, button);

      expect(getByText('도전하기')).not.toBeNull();

      fireEvent.click(getByText('도전하기'));

      expect(button).toBeCalled();
    });
  });

  context('without title', () => {
    const interviews = {
      id: 1,
    };

    const { container } = renderInterviewsItem(interviews);

    expect(container).toHaveTextContent('제목이 없습니다!');
    expect(container).toHaveTextContent('설명이 없습니다!');
  });
});

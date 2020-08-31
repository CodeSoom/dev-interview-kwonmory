import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InterviewsFeedBack from './InterviewsFeedBack';

describe('InterviewsFeedBack', () => {
  it('renders InterviewsFeedBack', () => {
    const handleMoveNextProblem = jest.fn();

    const { getByText } = render(
      <InterviewsFeedBack onMoveNextProblem={handleMoveNextProblem} />,
    );

    fireEvent.click(getByText('다음문제'));

    expect(handleMoveNextProblem).toBeCalled();
  });
});

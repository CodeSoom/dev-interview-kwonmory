import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import InterviewPracticePage from './InterviewPracticePage';

jest.mock('react-redux');

function renderInterviewListPage() {
  return render(
    <MemoryRouter>
      <InterviewPracticePage />
    </MemoryRouter>,
  );
}

describe('InterviewQuestionPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      interview: {
        questions: given.questions || [],
        categories: given.categories || [],
      },
    }));
  });

  it('renders InterviewPracticePage ', () => {
    renderInterviewListPage();
  });
});

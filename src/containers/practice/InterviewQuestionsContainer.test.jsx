import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { interviewQuestionsTerms } from '../../../fixtures/term';
import interviewQuestions from '../../../fixtures/interview-questions';

import InterviewQuestionsContainer from './InterviewQuestionsContainer';

jest.mock('react-redux');

function renderInterviewQuestionsContainer() {
  return render(
    <MemoryRouter>
      <InterviewQuestionsContainer />
    </MemoryRouter>,
  );
}

describe('InterviewQuestionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      interview: {
        questions: given.questions,
      },
    }));
  });

  it('dispatchs questions', () => {
    renderInterviewQuestionsContainer();

    expect(dispatch).toBeCalled();
  });

  context('with questions', () => {
    it('renders questions', () => {
      given('questions', () => interviewQuestions);

      const { container } = renderInterviewQuestionsContainer();

      expect(container).toHaveTextContent('인덱스(Index)란 무엇인가');
      expect(container).toHaveTextContent('database');
    });
  });

  context('without questions', () => {
    it('not renders questions and render empty message', () => {
      given('questions', () => []);

      const { container } = renderInterviewQuestionsContainer();

      expect(container).not.toHaveTextContent('인덱스(Index)란 무엇인가');
      expect(container).not.toHaveTextContent('database');
      expect(container).toHaveTextContent(interviewQuestionsTerms.emptyMessage);
    });
  });
});

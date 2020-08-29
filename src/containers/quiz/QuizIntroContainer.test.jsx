import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import mockQuiz from '../../../fixtures/quiz';

import QuizIntroContainer from './QuizIntroContainer';

function renderQuizIntroContainer() {
  return render(<MemoryRouter><QuizIntroContainer /></MemoryRouter>);
}

const mockHistory = jest.fn();

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistory,
    block: jest.fn((message) => () => message),
  }),
}));

describe('QuizIntroContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      selectedQuizId: given.selectedQuizId || null,
      quiz: given.quiz || {},
    }));
  });

  it('renders QuizIntroContainer', () => {
    given('selectedQuizId', () => 1);
    given('quiz', () => mockQuiz);

    const { container } = renderQuizIntroContainer();

    expect(container).toHaveTextContent(mockQuiz.title);
    expect(container).toHaveTextContent(mockQuiz.description);
    expect(container).toHaveTextContent(mockQuiz.limit_second);
  });

  context('when click "시작하기" button', () => {
    given('selectedQuizId', () => 1);
    given('quiz', () => mockQuiz);

    it('calls history push', () => {
      const { getByText } = renderQuizIntroContainer();

      fireEvent.click(getByText('알겠습니다'));
      fireEvent.click(getByText('시작하기'));

      expect(mockHistory).toBeCalledWith('/interviews/quiz/problem');
    });
  });
});

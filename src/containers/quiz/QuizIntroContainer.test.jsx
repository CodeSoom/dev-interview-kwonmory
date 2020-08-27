import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import mockQuiz from '../../../fixtures/quiz';

import QuizIntroContainer from './QuizIntroContainer';

jest.mock('react-redux');

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

    const { container } = render(<MemoryRouter><QuizIntroContainer /></MemoryRouter>);

    expect(container).toHaveTextContent(mockQuiz.title);
    expect(container).toHaveTextContent(mockQuiz.description);
    expect(container).toHaveTextContent(mockQuiz.limit_second);
  });
});

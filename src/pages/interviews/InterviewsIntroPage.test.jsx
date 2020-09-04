import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import InterviewsIntroPage from './InterviewsIntroPage';

import mockQuiz from '../../../fixtures/quiz';

function renderInterviewsIntroPage() {
  return render(<MemoryRouter><InterviewsIntroPage /></MemoryRouter>);
}

jest.mock('react-redux');

describe('InterviewsIntroPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      selectedQuizId: given.selectedQuizId || null,
      quiz: given.quiz || {},
      currentStep: given.currentStep || null,
      loading: given.loading || false,
    }));
  });

  it('calls quiz data', () => {
    given('quiz', () => mockQuiz);

    renderInterviewsIntroPage();

    expect(dispatch).toBeCalled();
  });

  it('renders exit buttons', () => {
    given('quiz', () => mockQuiz);

    const { container } = renderInterviewsIntroPage();

    expect(container).toHaveTextContent('나가기');
  });

  context('with interview quiz', () => {
    given('quiz', () => mockQuiz);

    given('selectedQuizId', () => 1);

    it('not renders error message', () => {
      const { container } = renderInterviewsIntroPage();

      expect(container).not.toHaveTextContent('문제가 발생했습니다');
    });

    it('renders start buttons', () => {
      const { container } = renderInterviewsIntroPage();

      const QUIZ_SIZE = mockQuiz.problems.length;
      expect(container).toHaveTextContent(QUIZ_SIZE);
      expect(container).toHaveTextContent('시작');
    });
  });

  context('without interview quiz', () => {
    given('quiz', () => {});

    it('renders error message', () => {
      const { container } = renderInterviewsIntroPage();

      expect(container).toHaveTextContent('문제가 발생했습니다');
    });
  });

  context('without selected_quiz_id', () => {
    given('selectedQuizId', () => null);

    it('renders error message', () => {
      const { container } = renderInterviewsIntroPage();

      expect(container).toHaveTextContent('문제가 발생했습니다');
    });
  });

  context('when empty quiz and loading', () => {
    given('loading', () => true);
    given('quiz', () => {});

    it('renders just header area', () => {
      const { container } = renderInterviewsIntroPage();

      expect(container).toHaveTextContent('인터뷰즈');
    });
  });
});

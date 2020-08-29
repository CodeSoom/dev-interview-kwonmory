import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import mockQuiz from '../../fixtures/quiz';

import InterviewsProblemPage from './InterviewsProblemPage';

function renderInterviewsProblemPage() {
  return render(<MemoryRouter><InterviewsProblemPage /></MemoryRouter>);
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

describe('InterviewsProblemPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    mockHistory.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      quiz: given.quiz || {},
      currentStep: given.currentStep || 1,
      selectedQuizId: given.selectedQuizId || null,
      quizFeedBack: given.quizFeedBack || [],
    }));
  });

  context('without quiz', () => {
    given('quiz', () => {});

    it('renders error page', () => {
      const { container } = renderInterviewsProblemPage();

      expect(container).toHaveTextContent('문제가 발생했습니다');
    });
  });

  context('when currentStep is 1', () => {
    const FIRST_STEP = 1;
    const FIRST_INTERVIEWS = 1;
    given('quiz', () => mockQuiz);
    given('currentStep', () => FIRST_STEP);
    given('selectedQuizId', () => FIRST_INTERVIEWS);
    given('quizFeedBack', () => []);

    it('renders problems number 1', () => {
      const { container } = renderInterviewsProblemPage();

      expect(container).toHaveTextContent(mockQuiz.quiz[0].title);
    });
  });

  context('when rendered', () => {
    it('runs timer', () => {
      // TODO
    });
  });

  context('when click "다음 버튼"', () => {
    const FIRST_STEP = 1;
    const FIRST_INTERVIEWS = 1;
    given('quiz', () => mockQuiz);
    given('currentStep', () => FIRST_STEP);
    given('selectedQuizId', () => FIRST_INTERVIEWS);
    given('quizFeedBack', () => []);

    it('calls history push', () => {
      const { getByText } = renderInterviewsProblemPage();

      fireEvent.click(getByText('다음으로'));

      expect(mockHistory).toBeCalledWith('/interviews/problem/feedback');
    });

    it('dispatches setting currentStep', () => {
      const { getByText } = renderInterviewsProblemPage();

      fireEvent.click(getByText('다음으로'));

      expect(dispatch).toBeCalled();
    });
  });

  context('when click "다음 버튼" with last problem', () => {
    const LAST_STEP = 2;
    given('quiz', () => mockQuiz);
    given('currentStep', () => LAST_STEP);

    it('not calls history push and dispatch', () => {
      const { getByText } = renderInterviewsProblemPage();

      fireEvent.click(getByText('다음으로'));

      expect(mockHistory).not.toBeCalledWith('/interviews/problem/feedback');
    });
  });
});

import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import mockQuiz from '../../fixtures/quiz';

import InterviewsProblemPage from './InterviewsProblemPage';

function renderInterviewsProblemPage() {
  return render(<MemoryRouter><InterviewsProblemPage /></MemoryRouter>);
}

jest.useFakeTimers();

const mockHistory = jest.fn();
const mockSetState = jest.fn();

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
    mockSetState.mockClear();

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

      expect(container).toHaveTextContent(mockQuiz.problems[FIRST_STEP - 1].title);
    });
  });

  context('when time is 0', () => {
    beforeEach(() => {
      const FIRST_STEP = 1;
      const FIRST_INTERVIEWS = 1;
      given('quiz', () => mockQuiz);
      given('currentStep', () => FIRST_STEP);
      given('selectedQuizId', () => FIRST_INTERVIEWS);
    });

    it('calls history push', () => {
      act(() => {
        renderInterviewsProblemPage();
        jest.advanceTimersByTime(310000);
      });

      expect(mockHistory).toBeCalledWith('/interviews/quiz/problem/feedback');
    });
  });

  context('when rendered', () => {
    given('quiz', () => mockQuiz);

    it('runs timer', async () => {
      act(() => {
        renderInterviewsProblemPage();
        jest.runTimersToTime(10000);
      });

      expect(setTimeout).toHaveBeenCalled();
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

      fireEvent.click(getByText('다음문제'));

      expect(mockHistory).toBeCalledWith('/interviews/quiz/problem/feedback');
    });
  });
});

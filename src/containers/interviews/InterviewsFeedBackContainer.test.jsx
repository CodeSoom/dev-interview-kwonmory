import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import InterviewsFeedBackContainer from './InterviewsFeedBackContainer';

import mockQuiz from '../../../fixtures/quiz';

function renderInterviewsFeedBackPage() {
  return render(<MemoryRouter><InterviewsFeedBackContainer /></MemoryRouter>);
}

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
jest.mock('../../services/storage');

describe('InterviewsFeedBackContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    mockHistory.mockClear();
    mockSetState.mockClear();
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      quiz: given.quiz || {},
      currentStep: given.currentStep || 1,
      quizFeedBack: given.quizFeedBack || [],
    }));
  });

  context('without quiz', () => {
    given('quiz', () => {});

    it('renders error page', () => {
      const { container } = renderInterviewsFeedBackPage();

      expect(container).toHaveTextContent('문제가 발생했습니다');
    });
  });

  context('when click "다음문제", if not last problems', () => {
    given('quiz', () => mockQuiz);
    given('currentStep', () => mockQuiz.problems.length - 1);

    it('calls history-push method', () => {
      const { getByText } = renderInterviewsFeedBackPage();

      fireEvent.click(getByText('다음문제'));

      expect(dispatch).toBeCalled();
      expect(mockHistory).toBeCalledWith('/interviews/quiz/problem');
    });

    it('dispatches saveFeedback', () => {
      const { getByText } = renderInterviewsFeedBackPage();

      fireEvent.click(getByText('다음문제'));

      expect(dispatch).toBeCalled();
      expect(mockHistory).toBeCalledWith('/interviews/quiz/problem');
    });
  });

  context('when click "다음문제", if last problems', () => {
    given('quiz', () => mockQuiz);
    given('currentStep', () => mockQuiz.problems.length);

    it('calls history-push method and dispatches saveFeedback', () => {
      const { getByText } = renderInterviewsFeedBackPage();

      fireEvent.click(getByText('다음문제'));

      expect(dispatch).toBeCalledTimes(1);
      expect(mockHistory).toBeCalledWith('/interviews/quiz/problem/finish');
    });
  });
});

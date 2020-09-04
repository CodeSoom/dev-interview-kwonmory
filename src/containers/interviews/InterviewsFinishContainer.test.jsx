import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import InterviewsFinishContainer from './InterviewsFinishContainer';

import mockQuiz from '../../../fixtures/quiz';

const mockHistory = jest.fn();

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistory,
    block: jest.fn((message) => () => message),
  }),
}));

describe('InterviewsFinishPage', () => {
  beforeEach(() => {
    mockHistory.mockClear();
    useSelector.mockImplementation((selector) => selector({
      quiz: given.quiz || {},
    }));
  });

  context('with quiz', () => {
    it('renders InterviewsFinishPage', () => {
      given('quiz', () => mockQuiz);
      const { container } = render(<MemoryRouter><InterviewsFinishContainer /></MemoryRouter>);

      expect(container).toHaveTextContent('수고하셨습니다');
      expect(container).toHaveTextContent('피드백 보기');
    });
  });

  context('with quiz and click 모든 피드백 보기 button', () => {
    it('renders InterviewsFinishPage', () => {
      given('quiz', () => mockQuiz);
      const { getByText } = render(<MemoryRouter><InterviewsFinishContainer /></MemoryRouter>);
      fireEvent.click(getByText('모든 피드백 보기'));

      expect(mockHistory).toBeCalledWith('/interviews/quiz/problem/check');
    });
  });

  context('without quiz', () => {
    it('renders error message', () => {
      given('quiz', () => {});
      const { container } = render(<MemoryRouter><InterviewsFinishContainer /></MemoryRouter>);

      expect(container).toHaveTextContent('문제가 발생했습니다');
    });
  });
});

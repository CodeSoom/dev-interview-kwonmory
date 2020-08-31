import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import mockQuiz from '../../../fixtures/quiz';

import InterviewsCheckContainer from './InterviewsCheckContainer';

function renderInterviewsCheckPage() {
  return render(<MemoryRouter><InterviewsCheckContainer /></MemoryRouter>);
}

function customMockQuiz() {
  const copyQuizString = JSON.stringify(mockQuiz);

  const copyQuiz = JSON.parse(copyQuizString);
  copyQuiz.problems.forEach((problem, index) => {
    copyQuiz.problems[index].feedback = `피드백${index}`;
  });

  return copyQuiz;
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

describe('InterviewsCheckPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      quiz: given.quiz || {},
    }));
  });

  context('with feedback', () => {
    let copyQuiz;

    beforeEach(() => {
      copyQuiz = customMockQuiz();

      given('quiz', () => copyQuiz);
    });

    it('renders quiz and feedback', () => {
      const { container } = renderInterviewsCheckPage();

      copyQuiz.problems.forEach((problem) => {
        expect(container).toHaveTextContent(problem.title);
        expect(container).toHaveTextContent(problem.feedback);
      });
    });
  });

  context('when click "처음으로" button', () => {
    let copyQuiz;

    beforeEach(() => {
      copyQuiz = customMockQuiz();

      given('quiz', () => copyQuiz);
    });

    it('calls history push method', () => {
      const { getByText } = renderInterviewsCheckPage();

      fireEvent.click(getByText('처음으로'));

      expect(mockHistory).toBeCalledWith('/interviews');
    });
  });

  context('without feedback', () => {
    it('renders error message', () => {
      given('quiz', () => {});
      const { container } = renderInterviewsCheckPage();

      expect(container).toHaveTextContent('문제가 발생했습니다');
    });
  });
});

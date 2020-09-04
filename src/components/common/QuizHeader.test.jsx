import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import QuizHeader from './QuizHeader';

import mockInterviews from '../../../fixtures/interviews';

function renderQuizHeader({ PATH, button = null, quiz = null }) {
  return render(
    <MemoryRouter>
      <QuizHeader path={PATH} onExit={button} quiz={quiz} />
    </MemoryRouter>,
  );
}

describe('QuizHeader', () => {
  context('when click "exit button"', () => {
    const button = jest.fn();

    beforeEach(() => {
      button.mockClear();
    });

    it('calls exit event in path base', () => {
      const PATH = 'interviews/quiz';
      const { getByText } = renderQuizHeader({ PATH, button });

      fireEvent.click(getByText('나가기'));

      expect(button).toBeCalled();
    });

    it('calls exit event in path problems', () => {
      const PATH = 'interviews/quiz/problems';
      const { getByText } = renderQuizHeader({ PATH, button });

      fireEvent.click(getByText('나가기'));

      expect(button).toBeCalled();
    });
  });

  context('when path "/interviews/quiz"', () => {
    it('renders base information', () => {
      const PATH = '/interviews/quiz';
      const { container } = renderQuizHeader({ PATH });

      expect(container).toHaveTextContent(/인터뷰즈/);
      expect(container).toHaveTextContent('나가기');
      expect(container).not.toHaveTextContent(/step/);
    });
  });

  context('when not path "/interviews/quiz"', () => {
    it('renders base information plus problems information', () => {
      const PROBLEMS_SIZE = mockInterviews[0].problems.length;
      const PATH = 'interviews/quiz/problems';
      const { container } = renderQuizHeader({ PATH, quiz: mockInterviews[0] });

      expect(container).toHaveTextContent('나가기');
      expect(container).toHaveTextContent(/step/);
      expect(container).toHaveTextContent(PROBLEMS_SIZE);
      expect(container).toHaveTextContent(mockInterviews[0].title);
    });
  });
});

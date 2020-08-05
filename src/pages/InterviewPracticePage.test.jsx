import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import InterviewPracticePage from './InterviewPracticePage';
import interviewQuestions from '../../fixtures/interview-questions';

import { interviewQuestionsTerms } from '../../fixtures/term';

jest.mock('react-redux');

function renderInterviewListPage() {
  return render(
    <MemoryRouter>
      <InterviewPracticePage />
    </MemoryRouter>,
  );
}

describe('InterviewQuestionPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      interview: {
        questions: given.questions,
      },
    }));
  });

  context('with interview questions', () => {
    given('questions', () => interviewQuestions);
    it('renders interview questions', () => {
      const { container } = renderInterviewListPage();

      expect(container).not.toHaveTextContent(interviewQuestionsTerms.emptyMessage);
    });
  });

  context('without interview questions', () => {
    given('questions', () => []);
    it('renders questions empty messages', () => {
      const { container } = renderInterviewListPage();

      expect(container).toHaveTextContent(interviewQuestionsTerms.emptyMessage);
    });
  });
});

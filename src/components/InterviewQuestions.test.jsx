import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import InterviewQuestions from './InterviewQuestions';

import interviewQuestions from '../../fixtures/interview-questions';

import { interviewQuestionsTerms } from '../../fixtures/term';

function renderInterviewQuestions(questions) {
  return render(<MemoryRouter><InterviewQuestions questions={questions} /></MemoryRouter>);
}

describe('InterviewQuestions', () => {
  context('with questions', () => {
    it('renders questions', () => {
      const { container } = renderInterviewQuestions(interviewQuestions);

      expect(container).toHaveTextContent('인덱스(Index)란 무엇인가');
      expect(container).toHaveTextContent('database');
    });
  });

  context('without questions', () => {
    it('renders not questions and redners empty message', () => {
      const { container } = renderInterviewQuestions([]);

      expect(container).not.toHaveTextContent('인덱스(Index)란 무엇인가');
      expect(container).not.toHaveTextContent('database');
      expect(container).toHaveTextContent(interviewQuestionsTerms.emptyMessage);
    });
  });
});

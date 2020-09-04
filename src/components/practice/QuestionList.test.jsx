import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import QuestionList from './QuestionList';

import interviewQuestions from '../../../fixtures/interview-questions';

import { interviewQuestionsTerms } from '../../../fixtures/term';

function renderQuestionList(questions) {
  return render(<MemoryRouter><QuestionList questions={questions} /></MemoryRouter>);
}

describe('QuestionList', () => {
  context('with questions', () => {
    it('renders questions', () => {
      const { container } = renderQuestionList(interviewQuestions);

      expect(container).toHaveTextContent('인덱스(Index)란 무엇인가');
      expect(container).toHaveTextContent('database');

      expect(container.querySelector('.questions')).not.toBeNull();
    });
  });

  context('without questions', () => {
    it('renders not questions and redners empty message', () => {
      const { container } = renderQuestionList([]);

      expect(container).not.toHaveTextContent('인덱스(Index)란 무엇인가');
      expect(container).not.toHaveTextContent('database');
      expect(container).toHaveTextContent(interviewQuestionsTerms.emptyMessage);
    });
  });
});

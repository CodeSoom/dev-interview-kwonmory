import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import QuestionItem from './QuestionItem';

function renderQuestionItem(question) {
  return render(<MemoryRouter><QuestionItem question={question} /></MemoryRouter>);
}

describe('QuestionItem', () => {
  context('with question', () => {
    it('renders question title', () => {
      const { container } = renderQuestionItem({
        id: 1,
        title: '인덱스(Index)란 무엇인가요?',
      });

      expect(container).toHaveTextContent('인덱스(Index)란 무엇인가');
    });

    it('renders question categories', () => {
      const { container } = renderQuestionItem({
        categories: [
          {
            id: 1,
            name: 'database',
          },
        ],
      });

      expect(container).toHaveTextContent('database');
    });

    it('renders question reputation like', () => {
      const { container } = renderQuestionItem({
        reputation: {
          like: 10,
          unlike: 20,
        },
      });

      expect(container).toHaveTextContent(10);
    });

    it('renders question reputation unlike', () => {
      const { container } = renderQuestionItem({
        reputation: {
          like: 10,
          unlike: 20,
        },
      });

      expect(container).toHaveTextContent(20);
    });
  });
});

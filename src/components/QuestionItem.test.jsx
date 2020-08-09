import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import QuestionItem from './QuestionItem';

function renderQuestionItem(question) {
  return render(<MemoryRouter><QuestionItem question={question} /></MemoryRouter>);
}

describe('QuestionItem', () => {
  context('with question', () => {
    it('renders question', () => {
      const { container } = renderQuestionItem({
        id: 1,
        title: '인덱스(Index)란 무엇인가요?',
        contributor: [
          {
            id: 1,
            name: '귀여운강아지',
          },
          {
            id: 2,
            name: '화난강아지',
          },
        ],
        categories: [
          {
            id: 1,
            name: 'database',
          },
        ],
        created_at: '2019-01-30 17:37:07',
        updated_at: '2019-01-30 17:37:07',
      });

      expect(container).toHaveTextContent('인덱스(Index)란 무엇인가');
      expect(container).toHaveTextContent('database');
    });
  });
});

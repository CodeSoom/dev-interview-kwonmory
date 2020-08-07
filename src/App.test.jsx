import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import interviewQuestions from '../fixtures/interview-questions';
import { interviewQuestionsTerms } from '../fixtures/term';

import App from './App';

jest.mock('react-redux');

function renderApp(path = ['/']) {
  return render(
    <MemoryRouter initialEntries={path}>
      <App />
    </MemoryRouter>,
  );
}

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      interview: {
        questions: given.questions,
      },
      accessToken: given.accessToken || '',
    }));
  });

  it('renders App', () => {
    renderApp();
  });

  describe('with path "/interviews/practice"', () => {
    context('with interviews', () => {
      given('questions', () => interviewQuestions);

      it('renders intervers', () => {
        const { container } = renderApp(['/interviews/practice']);

        expect(container).not.toHaveTextContent(interviewQuestionsTerms.emptyMessage);
      });
    });

    context('without interviews', () => {
      given('questions', () => []);

      it('renders interview empty message', () => {
        const { container } = renderApp(['/interviews/practice']);

        expect(container).toHaveTextContent(interviewQuestionsTerms.emptyMessage);
      });
    });
  });
});

import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import interviewQuestions from '../fixtures/interview-questions';
import { interviewQuestionsTerms } from '../fixtures/term';

import App from './App';

import mockInterviews from '../fixtures/interviews';

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
        questions: given.questions || [],
        categories: given.categories || [],
      },
      interviews: given.interviews || [],
      accessToken: given.accessToken || '',
    }));
  });

  it('renders App', () => {
    renderApp();
  });

  describe('with path "/interviews/practice"', () => {
    context('with interviews questions', () => {
      given('questions', () => interviewQuestions);

      it('renders interview questions', () => {
        const { container } = renderApp(['/interviews/practice']);

        expect(container).not.toHaveTextContent(interviewQuestionsTerms.emptyMessage);
      });
    });

    context('without interviews questions', () => {
      given('questions', () => []);

      it('renders interview empty message', () => {
        const { container } = renderApp(['/interviews/practice']);

        expect(container).toHaveTextContent(interviewQuestionsTerms.emptyMessage);
      });
    });
  });

  describe('with path "/interviews"', () => {
    context('with interviews', () => {
      it('renders interviews', () => {
        given('interviews', () => mockInterviews);
        const { container } = renderApp(['/interviews']);

        expect(container).not.toHaveTextContent('인터뷰 리스트가 없습니다');
      });
    });

    context('without interviews', () => {
      it('renders empty message in the interview page', () => {
        given('interviews', () => []);
        const { container } = renderApp(['/interviews']);

        expect(container).toHaveTextContent('인터뷰 리스트가 없습니다');
      });
    });
  });

  describe('with path not found page', () => {
    it('renders 404 page', () => {
      const { container } = renderApp(['/no-page-path']);

      expect(container).toHaveTextContent(404);
    });
  });
});

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import QuizHeaderContainer from './QuizHeaderContainer';

import mockQuiz from '../../../fixtures/quiz';

global.window.confirm = jest.fn();
const mockHistory = jest.fn();

function renderQuizHeaderContainer() {
  return render(
    <MemoryRouter
      getUserConfirmation={(message, callback) => {
        const allowTransition = window.confirm(message);
        callback(allowTransition);
      }}
    >
      <QuizHeaderContainer />
    </MemoryRouter>,
  );
}

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistory,
    block: jest.fn((message) => () => message),
  }),
}));

describe('QuizHeaderContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      quiz: given.quiz || {},
      currentStep: given.currentStep || null,
    }));
  });

  it('renders exit button', () => {
    const SECOND_STEP = 2;
    given('quiz', () => mockQuiz);
    given('currentStep', () => SECOND_STEP);

    const { container } = renderQuizHeaderContainer();

    expect(container).toHaveTextContent('나가기');
  });

  context('when click "exit button"', () => {
    it('calls exit event in path base', () => {
      const { getByText } = renderQuizHeaderContainer();

      fireEvent.click(getByText('나가기'));
      fireEvent.click(getByText('예'));

      expect(mockHistory).toBeCalledWith('/interviews');
    });
  });
});

import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import InterviewsLayout from './InterviewsLayout';

import mockQuiz from '../../fixtures/quiz';

jest.mock('react-redux');

describe('BaseLayout', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      quiz: given.quiz || {},
      currentStep: given.currentStep || null,
    }));
  });

  it('renders BasicLayout', () => {
    const SECOND_STEP = 2;
    given('quiz', () => mockQuiz);
    given('currentStep', () => SECOND_STEP);

    const { container } = render(<MemoryRouter><InterviewsLayout /></MemoryRouter>);

    expect(container).toHaveTextContent('나가기');
  });
});

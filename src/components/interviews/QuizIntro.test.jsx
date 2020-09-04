import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import mockQuiz from '../../../fixtures/quiz';

import QuizIntro from './QuizIntro';

describe('QuizIntro', () => {
  it('renders QuizIntro', () => {
    const { container } = render(<MemoryRouter><QuizIntro quiz={mockQuiz} /></MemoryRouter>);

    expect(container).toHaveTextContent(mockQuiz.title);
    expect(container).toHaveTextContent(mockQuiz.description);
  });
});

import React from 'react';

import { render } from '@testing-library/react';

import QuizErrorMessage from './QuizErrorMessage';

describe('QuizErrorMessage', () => {
  it('renders error message', () => {
    const { container } = render(<QuizErrorMessage />);

    expect(container).toHaveTextContent('문제가 발생했습니다');
  });
});

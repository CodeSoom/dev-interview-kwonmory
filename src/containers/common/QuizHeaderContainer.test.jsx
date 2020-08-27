import React from 'react';

import { render } from '@testing-library/react';

import QuizHeaderContainer from './QuizHeaderContainer';

describe('QuizHeaderContainer', () => {
  it('renders exit button', () => {
    const { container } = render(<QuizHeaderContainer />);

    expect(container).toHaveTextContent('나가기');
  });
});

import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import interviewCategories from '../../fixtures/interview-categories';

import InterviewCategories from './InterviewCategories';

function renderInterviewCategories(categories, handleCheckbox) {
  return render(<InterviewCategories categories={categories} onCheckBox={handleCheckbox} />);
}

describe('InterviewCategories', () => {
  context('with questions', () => {
    it('renders questions', () => {
      const handleCheckbox = jest.fn();

      const { container } = renderInterviewCategories(interviewCategories, handleCheckbox);

      expect(container).toHaveTextContent('파트별');

      const checkbox = container.querySelector('input[name="Database"]');

      expect(container).toHaveTextContent('Database');
      expect(container).toHaveTextContent('Javascript');
      expect(container).toHaveTextContent('FrontEnd');

      fireEvent.click(checkbox);

      expect(handleCheckbox).toBeCalledTimes(1);
    });
  });
});

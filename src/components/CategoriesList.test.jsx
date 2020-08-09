import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import CategoriesList from './CategoriesList';

import interviewCategories from '../../fixtures/interview-categories';

function renderCategoriesList(categories, handleCheckBox) {
  return render(<CategoriesList categories={categories} onCheckBox={handleCheckBox} />);
}

describe('CategoriesList', () => {
  context('with questions', () => {
    it('renders questions', () => {
      const handleCheckBox = jest.fn();

      const { container } = renderCategoriesList(interviewCategories, handleCheckBox);

      const checkbox = container.querySelector('input[name="Database"]');

      expect(container).toHaveTextContent('Database');
      expect(container).toHaveTextContent('Javascript');
      expect(container).toHaveTextContent('FrontEnd');

      expect(checkbox.checked).toEqual(false);

      fireEvent.click(checkbox);

      expect(checkbox.checked).toEqual(true);
    });
  });

  context('without questions', () => {
    it('renders not questions', () => {
      const { container } = renderCategoriesList([]);

      expect(container).not.toHaveTextContent('Database');
      expect(container).not.toHaveTextContent('Javascript');
      expect(container).not.toHaveTextContent('FrontEnd');
    });
  });
});

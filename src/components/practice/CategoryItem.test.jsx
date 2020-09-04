import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import CategoryItem from './CategoryItem';

function renderCategoryItem(category, handleCheckBox) {
  return render(<CategoryItem category={category} onCheckBox={handleCheckBox} />);
}

describe('CategoryItem', () => {
  context('with question', () => {
    it('renders question', () => {
      const { container } = renderCategoryItem({
        id: 1,
        name: 'Database',
      });

      const checkbox = container.querySelector('input[type="checkbox"]');

      expect(container).toHaveTextContent('Database');
      expect(checkbox).not.toBeNull();

      expect(checkbox.checked).toEqual(false);

      fireEvent.click(checkbox);

      expect(checkbox.checked).toEqual(true);
    });
  });
});

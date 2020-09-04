import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

function renderHeader({ dropdownMenuActive, handleDropdownMenuActive, blue }) {
  return render(
    <MemoryRouter>
      <Header
        dropdownMenuActive={dropdownMenuActive}
        onDropdownMenuActive={handleDropdownMenuActive}
        blue={blue}
      />
    </MemoryRouter>,
  );
}

describe('Header', () => {
  const handleDropdownMenuActive = jest.fn();

  it('renders Header', () => {
    const { container } = renderHeader({
      dropdownMenuActive: false,
      handleDropdownMenuActive,
    });

    fireEvent.click(container.querySelector('button'));

    expect(handleDropdownMenuActive).toBeCalled();
  });
});

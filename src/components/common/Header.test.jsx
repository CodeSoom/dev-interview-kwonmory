import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

function renderHeader({
  dropdownMenuActive, handleDropdownMenuActive, blue, location,
}) {
  return render(
    <MemoryRouter>
      <Header
        dropdownMenuActive={dropdownMenuActive}
        onDropdownMenuActive={handleDropdownMenuActive}
        blue={blue}
        location={location}
      />
    </MemoryRouter>,
  );
}

describe('Header', () => {
  const handleDropdownMenuActive = jest.fn();

  context('with path="/interviews"', () => {
    it('renders Header', () => {
      const { container } = renderHeader({
        dropdownMenuActive: false,
        handleDropdownMenuActive,
        location: {
          pathname: '/interviews',
        },
      });

      fireEvent.click(container.querySelector('button'));

      expect(handleDropdownMenuActive).toBeCalled();
    });
  });

  context('with path="/interviews"', () => {
    it('renders Header', () => {
      const { container } = renderHeader({
        dropdownMenuActive: false,
        handleDropdownMenuActive,
      });

      fireEvent.click(container.querySelector('button'));

      expect(handleDropdownMenuActive).toBeCalled();
    });
  });
});

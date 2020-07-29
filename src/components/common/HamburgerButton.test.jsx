import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import HamburgerButton from './HamburgerButton';

describe('HamburgerButton ', () => {
  it('renders HamburgerButton', () => {
    const handleDropdownMenuActive = jest.fn();

    const { container } = render(
      <MemoryRouter>
        <HamburgerButton
          onClick={handleDropdownMenuActive}
        />
      </MemoryRouter>,
    );

    expect(container.querySelector('.drop-menu-button')).not.toBeNull();

    fireEvent.click(container.querySelector('button'));

    expect(handleDropdownMenuActive).toBeCalled();
  });
});

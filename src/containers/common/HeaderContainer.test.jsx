import React, { useState as useStateMock } from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import HeaderContainer from './HeaderContainer';

jest.mock('react-redux');

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

function renderHeaderContainer() {
  return render(
    <MemoryRouter>
      <HeaderContainer />
    </MemoryRouter>,
  );
}

describe('HeaderContainer', () => {
  const dropDownMenuActive = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, dropDownMenuActive]);
  });

  it('renders HeaderContainer', () => {
    const { container } = renderHeaderContainer();

    expect(container.querySelector('.drop-menu-button')).not.toBeNull();

    fireEvent.click(container.querySelector('.drop-menu-button'));

    expect(dropDownMenuActive).toBeCalled();
  });
});

import React, { useState as useStateMock } from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

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
  const dispatch = jest.fn();
  const dropDownMenuActive = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useStateMock.mockImplementation((init) => [init, dropDownMenuActive]);

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken || '',
    }));
  });

  it('renders HeaderContainer', () => {
    const { container } = renderHeaderContainer();

    expect(container.querySelector('.drop-menu-button')).not.toBeNull();

    fireEvent.click(container.querySelector('.drop-menu-button'));

    expect(dropDownMenuActive).toBeCalled();
  });

  describe('accessToken', () => {
    context('with login', () => {
      given('accessToken', () => 'ACCESSTOKEN');

      it('not renders "로그인" button', () => {
        const { queryByText } = renderHeaderContainer();

        expect(queryByText(/로그인/)).toBeNull();
        expect(queryByText(/회원가입/)).toBeNull();
      });
    });

    context('without login', () => {
      it('renders "로그인/회원가입" button', () => {
        given('accessToken', () => '');

        const { queryByText } = renderHeaderContainer();

        expect(queryByText(/로그인/)).not.toBeNull();
        expect(queryByText(/회원가입/)).not.toBeNull();
      });
    });
  });
});

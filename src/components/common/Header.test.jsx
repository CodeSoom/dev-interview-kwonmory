import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

function renderHeader({ token, dropdownMenuActive, handleDropdownMenuActive }) {
  return render(
    <MemoryRouter>
      <Header
        login={token}
        dropdownMenuActive={dropdownMenuActive}
        onDropdownMenuActive={handleDropdownMenuActive}
      />
    </MemoryRouter>,
  );
}

describe('Header', () => {
  const handleDropdownMenuActive = jest.fn();
  context('with login', () => {
    it('renders "로그아웃" 메뉴', () => {
      const { container } = renderHeader({
        token: 'ACCESS_TOKEN',
        dropdownMenuActive: true,
        handleDropdownMenuActive,
      });

      expect(container).not.toHaveTextContent('로그인');
    });
  });

  context('without login', () => {
    it('renders Header', () => {
      const { container } = renderHeader({
        token: '',
        dropdownMenuActive: false,
        handleDropdownMenuActive,
      });

      expect(container).toHaveTextContent('서비스 소개');
      expect(container).toHaveTextContent('인터뷰');
      expect(container).toHaveTextContent('챌린지');

      expect(container.querySelector('.logo')).not.toBeNull();
      expect(container.querySelector('button')).not.toBeNull();

      fireEvent.click(container.querySelector('button'));

      expect(handleDropdownMenuActive).toBeCalled();
    });
  });
});

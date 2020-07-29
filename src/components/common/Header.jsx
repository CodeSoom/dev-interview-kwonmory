import React from 'react';

import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather, faSignOutAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import HamburgerButton from './HamburgerButton';

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: 3.8rem;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1.5rem;
  width: 100%;
  
  & .active {
    border-bottom: '2px solid #fff';
    color: '#fff';
  }

  & .header__left {
    width: 8.125rem;

    .logo {
      margin-right: 1.5rem;
    }
  }

  & .header__right {
    flex:1;
    display: flex;
    justify-content: space-between;

    ul:last-child li a {
      font-size: .8rem;
      color: #fff;
    }
  }

  @media (max-width: 48rem) {
    & .header__left {
      position: absolute;
      top: 14px;
      left: 22px;
    }

    & .header__right {
      display: none;
    }

    &.dropDownMenuActive {
      display: block;
      width: 100%;

      & .header__right {
      display: block;
      margin-top: 4rem;

      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;

        &:first-of-type {
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.6);
        }

        li {
          display: block;
          margin-bottom: 0.6rem;

          &.divider {
            display: none;
          }

          a {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.875rem;

            &:hover {
             color: #fff; 
            }

            &.selected {
              color: #fff;
            }
          }
        }
      }
    }
  }
}
`;

const LogoLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  color: #fff;
  border: 2px solid #fff;
  border-radius: .6rem;
  border-bottom-right-radius: 0rem;
  padding: 0.3rem;
  text-decoration: none;

  .logo-text {
    font-size: .8rem;
    margin-left: .3rem;
    font-family: 'Orbitron', sans-serif;
  }
`;

const MenuListStyled = styled.ul`
  display: flex;
  align-items: center;
  color: rgba(255,255,255,0.6);

  li {
    font-size: 1rem;
    font-weight: 500;
  }

  .active {
    color: #fff;
  }

  .divider {
    width: 0.0825rem;
    height: .8rem;
    background-color: rgba(255, 255, 255, 0.6);
    margin: 0.2rem 0.5rem 0 0.5rem;
  }
`;

const MenuLinkStyled = styled(NavLink)`
  padding: 0.25rem .5rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: #fff;
  }

  &.selected {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
`;

const MenuLinkIconStyled = styled(NavLink)`
  padding: 0 0.7rem;

  svg {
    font-size: 1.2rem;
    color: rgba(255,255,255,0.7);
    &:hover {
      color: #fff;
    }
  }
`;

const Header = ({ login, dropDownMenuActive, onDropdownMenuActive }) => (
  <>
    <HeaderStyled>
      <Wrapper className={classNames({ dropDownMenuActive })}>
        <div className="header__left">
          <LogoLinkStyled to="/" className="logo">
            <FontAwesomeIcon icon={faFeather} />
            <span className="logo-text">Inttaview</span>
          </LogoLinkStyled>
        </div>
        <div className="header__right">
          <MenuListStyled className="header__menus">
            <li>
              <MenuLinkStyled to="/" exact activeClassName="selected">서비스 소개</MenuLinkStyled>
            </li>
            <li className="divider" />
            <li>
              <MenuLinkStyled to="/challenge" exact activeClassName="selected">인터뷰 챌린지</MenuLinkStyled>
            </li>
          </MenuListStyled>
          <MenuListStyled className="header__menus">
            {login ? (
              <>
                <li><MenuLinkIconStyled to="/profile"><FontAwesomeIcon icon={faAddressCard} /></MenuLinkIconStyled></li>
                <li><MenuLinkIconStyled to="/logout"><FontAwesomeIcon icon={faSignOutAlt} /></MenuLinkIconStyled></li>
              </>
            ) : (
              <>
                <li><MenuLinkStyled to="/login">로그인</MenuLinkStyled></li>
                <li><MenuLinkStyled to="/register">회원가입</MenuLinkStyled></li>
              </>
            )}
          </MenuListStyled>
        </div>
        <HamburgerButton
          active={dropDownMenuActive}
          onClick={onDropdownMenuActive}
        />
      </Wrapper>
    </HeaderStyled>
  </>
);

export default Header;

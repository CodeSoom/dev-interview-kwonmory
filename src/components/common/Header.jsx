import React from 'react';

import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';

import HamburgerButton from './HamburgerButton';

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minHeight: '3.3rem',
  padding: '0 2rem',
  borderBottom: '1px solid #dfe6e9',
  backgroundImage: 'linear-gradient(128deg, #6a80f8 6%, #4a65f6 91%)',

  '@media (max-width: 48rem)': {
    minHeight: '3.7rem',
  },
});

const HeaderLeftStyled = styled.div({
  width: '8.5rem',

  '@media (max-width: 48rem)': {
    position: 'absolute',
    top: '14px',
    left: '22px',
  },
});

const HeaderRightStyled = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '.5rem',
  marginBottom: '.5rem',

  '@media (max-width: 48rem)': {
    display: 'none',
  },
});

const HeaderStyled = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '0.4rem 1.5rem',

  '& .active': {
    borderBottom: '2px solid #fff',
    color: '#fff',
  },

  '@media (max-width: 48rem)': {
    '&.dropDownMenuActive': {
      display: 'block',
      width: '100%',

      [HeaderRightStyled]: {
        display: 'block',
        marginTop: '4rem',

        ul: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',

          '&:first-of-type': {
            paddingBottom: '1rem',
            marginBottom: '1rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
          },

          li: {
            display: 'block',
            marginBottom: '0.6rem',

            a: {
              fontSize: '0.875rem',

              '&:hover': {
                backgroundColor: 'transparent',
                color: '#fff',
                border: '2px solid rgba(255, 255, 255, 0.6)',
              },
            },
          },
        },
      },
    },
  },
});

const LogoLinkStyled = styled(NavLink)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2rem',
  padding: '0.3rem',
  color: '#fff',
  textDecoration: 'none',
});

const LogoTextStyled = styled.span({
  marginLeft: '.3rem',
  fontSize: '1rem',
  fontWeight: '700',
  fontFamily: "'Orbitron', sans-serif",
  letterSpacing: '0.125rem',
});

const MenuListStyled = styled.ul({
  display: 'flex',
  alignItems: 'center',
  color: 'rgb(255,255,255,0.6)',

  '.active': {
    color: '#fff',
  },
});

const MenuListItemStyeld = styled.li({
  fontSize: '1rem',
  fontWeight: 500,
});

const MenuLinkStyled = styled(NavLink)({
  padding: '0.2rem 1rem',
  color: '#657CF7',
  fontWeight: 600,
  fontSize: '1rem',
  textDecoration: 'none',
  backgroundColor: '#fff',
  borderRadius: '.2rem',

  '&:hover': {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid rgba(255, 255, 255, 0.6)',
  },
});

const Header = ({ dropDownMenuActive, onDropdownMenuActive }) => (
  <>
    <Wrapper>
      <HeaderStyled
        dropDownMenuActive={dropDownMenuActive}
        className={classNames({ dropDownMenuActive })}
      >
        <HeaderLeftStyled>
          <LogoLinkStyled to="/" className="logo">
            <FontAwesomeIcon icon={faHippo} />
            <LogoTextStyled>체크유얼셀프</LogoTextStyled>
          </LogoLinkStyled>
        </HeaderLeftStyled>
        <HeaderRightStyled>
          <MenuListStyled>
            <MenuListItemStyeld>
              <MenuLinkStyled to="/interviews" exact activeClassName="selected">시작하기</MenuLinkStyled>
            </MenuListItemStyeld>
          </MenuListStyled>
        </HeaderRightStyled>
        <HamburgerButton
          active={dropDownMenuActive}
          onClick={onDropdownMenuActive}
        />
      </HeaderStyled>
    </Wrapper>
  </>
);

export default Header;

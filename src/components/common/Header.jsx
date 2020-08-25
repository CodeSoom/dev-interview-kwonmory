import React from 'react';

import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';

import HamburgerButton from './HamburgerButton';

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minHeight: '5.3rem',
  borderBottom: '1px solid #dfe6e9',
  backgroundImage: 'linear-gradient(128deg, #6a80f8 6%, #4a65f6 91%)',

  '@media (max-width: 48rem)': {
    minHeight: '3.7rem',
  },
});

const HeaderTopStyled = styled.div({
  width: '8.125rem',

  '@media (max-width: 48rem)': {
    position: 'absolute',
    top: '14px',
    left: '22px',
  },
});

const HeaderBottomStyled = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flex: 1,
  marginTop: '.5rem',
  marginBottom: '.5rem',

  '@media (max-width: 48rem)': {
    display: 'none',
  },
});

const HeaderStyled = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
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

      [HeaderBottomStyled]: {
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
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.875rem',

              '&:hover': {
                color: '#fff',
              },

              '&.selected': {
                color: '#fff',
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
  border: '2px solid #fff',
  borderRadius: '.6rem',
  borderBottomRightRadius: '0rem',
  textDecoration: 'none',
});

const LogoTextStyled = styled.span({
  fontSize: '.8rem',
  marginLeft: '.3rem',
  fontFamily: "'Orbitron', sans-serif",
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

const DividerStyeld = styled.li({
  width: '0.0825rem',
  height: '.8rem',
  margin: '0.2rem 0.5rem 0 0.5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',

  '@media (max-width: 48rem)': {
    display: 'none !important',
  },
});

const Header = ({ dropDownMenuActive, onDropdownMenuActive }) => (
  <>
    <Wrapper>
      <HeaderStyled
        dropDownMenuActive={dropDownMenuActive}
        className={classNames({ dropDownMenuActive })}
      >
        <HeaderTopStyled>
          <LogoLinkStyled to="/" className="logo">
            <FontAwesomeIcon icon={faFeather} />
            <LogoTextStyled>Inttaview</LogoTextStyled>
          </LogoLinkStyled>
        </HeaderTopStyled>
        <HeaderBottomStyled>
          <MenuListStyled>
            <MenuListItemStyeld>
              <MenuLinkStyled to="/interviews" exact activeClassName="selected">인터뷰즈</MenuLinkStyled>
            </MenuListItemStyeld>
            <DividerStyeld />
            <MenuListItemStyeld>
              <MenuLinkStyled to="/interviews/practice" exact activeClassName="selected">인터뷰연습</MenuLinkStyled>
            </MenuListItemStyeld>
          </MenuListStyled>
        </HeaderBottomStyled>
        <HamburgerButton
          active={dropDownMenuActive}
          onClick={onDropdownMenuActive}
        />
      </HeaderStyled>
    </Wrapper>
  </>
);

export default Header;

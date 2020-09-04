import React from 'react';

import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';

import HamburgerButton from './HamburgerButton';

const Wrapper = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minHeight: '3.3rem',
  padding: '0 2rem',
  borderBottom: props.blue ? '1px solid #dfe6e9' : 'none',
  backgroundImage: props.blue ? 'linear-gradient(128deg, #6a80f8 6%, #4a65f6 91%)' : 'linear-gradient(128deg, #363B3E 6%, #363B3E 91%)',

  '@media (max-width: 48rem)': {
    minHeight: '3.7rem',
  },
}));

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

const MenuLinkStyled = styled(NavLink)((props) => ({
  padding: '0.2rem 1rem',
  color: props.blue ? '#657CF7' : '#363b3e',
  fontWeight: 600,
  fontSize: '1rem',
  textDecoration: 'none',
  backgroundColor: '#fff',
  border: '2px solid rgba(255, 255, 255, 0.6)',
  borderRadius: '.2rem',

  '&:hover': {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid rgba(255, 255, 255, 0.6)',
  },
}));

const Header = ({ dropDownMenuActive, onDropdownMenuActive, blue = false }) => (
  <>
    <Wrapper blue={blue}>
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
              <MenuLinkStyled to="/interviews" exact activeClassName="selected" blue={blue}>시작하기</MenuLinkStyled>
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

import React from 'react';

import styled from '@emotion/styled';

import classNames from 'classnames';

const HamburgerButtonStyled = styled.div`
  display: none;
  position: absolute;
  top: 14px;
  right: 22px;

  .menu-trigger {
    position: relative;
    width: 2.2rem;
    height: 2rem;
    transition: all .4s;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: .6rem;
    border-bottom-left-radius: 0;
    outline: none;
    cursor: pointer;
    
    span {
      display: inline-block;
      position: absolute;
      transition: all .4s;
      width: 80%;
      height: 0.18rem;
      background-color: #fff;
      border-radius: 3px;
      left: 3px;
    }

    span:nth-of-type(1) {
      top: 5px;
    }

    span:nth-of-type(2) {
      top: 13px;
    }
    
    span:nth-of-type(3) {
      top: 21px;
    }

    &.active {
      span {
        width: 60%;
        left: 6px;
      }

      span:nth-of-type(1) {
      -webkit-transform: translateY(10px) rotate(-45deg);
        transform: translateY(8px) rotate(-45deg);
      }

      span:nth-of-type(2) {
        opacity : 0;
      }

      span:nth-of-type(3) {
      -webkit-transform: translateY(-8px) rotate(45deg);
        transform: translateY(-8px) rotate(45deg);
      }
    }
  }

  @media (max-width: 48rem) {
   display: block;
  }
`;

const HamburgerButton = ({ active, onClick }) => (
  <HamburgerButtonStyled>
    <button
      type="button"
      className={
        classNames('drop-menu-button', 'menu-trigger', { active })
      }
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </button>
  </HamburgerButtonStyled>
);

export default HamburgerButton;

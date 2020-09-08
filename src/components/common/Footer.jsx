import React from 'react';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterStyled = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '4rem',
  color: 'rgba(255, 255, 255, .9)',
  fontSize: '1rem',
  backgroundImage: 'linear-gradient(128deg,#363B3E 6%,#363B3E 91%)',

  span: {
    marginRight: '0.2rem',
    a: {
      color: 'rgba(255, 255, 255, .9)',
      textDecoration: 'none',
      svg: {
        fontSize: '1.3rem',
      },
    },
  },
});

const Footer = () => (
  <>
    <FooterStyled>
      <span>
        2020 ⓒ
        {' '}
        {' '}
        <a href="https://github.com/CodeSoom/check-your-self-kwonmory" target="_blank" rel="noreferrer">
          체크유얼셀프 |
          {' '}
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </span>

    </FooterStyled>
  </>
);

export default Footer;

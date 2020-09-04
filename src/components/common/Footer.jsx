import React from 'react';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';

const FooterStyled = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '3rem',
  color: 'rgba(255, 255, 255, .9)',
  fontSize: '.8rem',
  backgroundImage: 'linear-gradient(128deg,#363B3E 6%,#363B3E 91%)',

  span: {
    marginRight: '0.2rem',
  },
});

const Footer = () => (
  <>
    <FooterStyled>
      <span>
        2020 ⓒ 체크유얼셀프
      </span>
      <FontAwesomeIcon icon={faHippo} />
    </FooterStyled>
  </>
);

export default Footer;

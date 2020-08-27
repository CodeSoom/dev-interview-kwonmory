import React from 'react';

import styled from '@emotion/styled';

import HeaderContainer from '../containers/common/HeaderContainer';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  margin-top: -2rem;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const NotFoundDispaly = () => (

  <>
    <HeaderContainer />
    <Wrapper>
      <h2>404</h2>
      <p>페이지가 존재하지 않습니다.</p>
    </Wrapper>
  </>
);

export default NotFoundDispaly;

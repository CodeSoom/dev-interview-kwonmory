import React from 'react';

import styled from '@emotion/styled';

import HeaderContainer from './containers/common/HeaderContainer';

const Wrapper = styled.div`
  height: 100vh;
  background-image: linear-gradient(128deg, #6a80f8 6%, #4a65f6 91%);
`;

const App = () => (
  <>
    <Wrapper>
      <HeaderContainer />
      <main>메인 페이지</main>
    </Wrapper>
  </>
);

export default App;

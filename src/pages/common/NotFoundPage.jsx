import React from 'react';

import styled from '@emotion/styled';

import BaseLayout from '../../layout/BaseLayout';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
  flexDirection: 'column',
  h2: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
});

const NotFoundPage = () => (
  <BaseLayout>
    <Wrapper>
      <h2>404</h2>
      <p>페이지가 존재하지 않습니다.</p>
    </Wrapper>
  </BaseLayout>
);

export default NotFoundPage;

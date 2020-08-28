import React from 'react';
import styled from '@emotion/styled';
import HeaderContainer from '../containers/common/HeaderContainer';

const Wrapper = styled.div({

});

const BaseLayout = ({
  children,
}) => (
  <Wrapper>
    <HeaderContainer />
    {children}
  </Wrapper>
);

export default BaseLayout;

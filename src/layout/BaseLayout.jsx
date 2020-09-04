import React from 'react';

import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import HeaderContainer from '../containers/common/HeaderContainer';
import Footer from '../components/common/Footer';

import Loadding from '../components/common/Loading';

import { get } from '../utils';

const Wrapper = styled.div({
  // empty
});

const BaseLayout = ({
  children, blue = 0,
}) => {
  const loading = useSelector(get('loading'));

  return (
    <>
      <Loadding flag={loading} />

      <Wrapper>
        <HeaderContainer blue={blue} />
        {children}
        <Footer />
      </Wrapper>
    </>
  );
};

export default BaseLayout;

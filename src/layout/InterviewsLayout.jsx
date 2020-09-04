import React from 'react';

import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

import QuizHeaderContainer from '../containers/common/QuizHeaderContainer';

import { get } from '../utils';

import Loadding from '../components/common/Loading';

const Wrapper = styled.div({
  minHeight: '100vh',
  backgroundColor: '#202B3D',
});

const InterviewsLayout = ({
  children,
}) => {
  const loading = useSelector(get('loading'));

  return (
    <>
      <Loadding flag={loading} />
      <Wrapper>
        <QuizHeaderContainer />
        {children}
      </Wrapper>
    </>
  );
};

export default InterviewsLayout;

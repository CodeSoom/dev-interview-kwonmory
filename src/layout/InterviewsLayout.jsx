import React from 'react';
import styled from '@emotion/styled';
import QuizHeaderContainer from '../containers/common/QuizHeaderContainer';

const Wrapper = styled.div({
  minHeight: '100vh',
  backgroundColor: '#202B3D',
});

const InterviewsLayout = ({
  children,
}) => (
  <Wrapper>
    <QuizHeaderContainer />
    {children}
  </Wrapper>
);

export default InterviewsLayout;

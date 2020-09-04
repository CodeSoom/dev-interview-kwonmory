import React from 'react';

import styled from '@emotion/styled';

import InterviewsLayout from '../../layout/InterviewsLayout';

import InterviewsCheckContainer from '../../containers/quiz/InterviewsCheckContainer';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '1rem',
});

const InterviewsCheckPage = () => (
  <InterviewsLayout>
    <Wrapper>
      <InterviewsCheckContainer />
    </Wrapper>
  </InterviewsLayout>
);

export default InterviewsCheckPage;

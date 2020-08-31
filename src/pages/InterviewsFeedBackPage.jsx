import React from 'react';

import styled from '@emotion/styled';

import InterviewsLayout from '../layout/InterviewsLayout';

import InterviewsFeedBackContainer from '../containers/quiz/InterviewsFeedBackContainer';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
  height: 'calc(100vh - 3.1rem)',
  padding: '1rem',
});

const InterviewsFeedBackPage = () => (
  <InterviewsLayout>
    <Wrapper>
      <InterviewsFeedBackContainer />
    </Wrapper>
  </InterviewsLayout>
);

export default InterviewsFeedBackPage;

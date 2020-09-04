import React from 'react';

import styled from '@emotion/styled';

import InterviewsLayout from '../../layout/InterviewsLayout';

import InterviewsFinishContainer from '../../containers/interviews/InterviewsFinishContainer';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 3.1rem)',
  color: '#fff',

  h2: {
    fontSize: '2.4rem',
    marginBottom: '1rem',
  },

  p: {
    marginBottom: '2rem',
  },
});

const InterviewsFinishPage = () => (
  <InterviewsLayout>
    <Wrapper>
      <InterviewsFinishContainer />
    </Wrapper>
  </InterviewsLayout>
);

export default InterviewsFinishPage;

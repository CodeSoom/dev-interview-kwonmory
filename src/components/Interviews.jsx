import React from 'react';

import styled from '@emotion/styled';

import _ from 'lodash';

import InterviewsItem from './InterviewsItem';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '64rem',
  width: '100%',
  padding: '15px',
});

const InterviewsListWrapperStyled = styled.ul({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
});

const Interviews = ({ interviews, onStartButton }) => {
  if (_.isEmpty(interviews)) {
    return (
      <Wrapper>
        인터뷰 리스트가 없습니다.
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <InterviewsListWrapperStyled>
        {interviews.map((interview) => (
          <InterviewsItem
            interviews={interview}
            key={interview.id}
            onStartButton={onStartButton}
          />
        ))}
      </InterviewsListWrapperStyled>
    </Wrapper>
  );
};

export default Interviews;

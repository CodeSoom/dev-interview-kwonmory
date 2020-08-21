import React from 'react';

import styled from '@emotion/styled';

import _ from 'lodash';

import InterviewsItem from './InterviewsItem';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '900px',
  padding: '15px',
  width: '100%',
});

const InterviewsListWrapperStyled = styled.ul({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const Interviews = ({ interviews }) => {
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
          />
        ))}
      </InterviewsListWrapperStyled>
    </Wrapper>
  );
};

export default Interviews;

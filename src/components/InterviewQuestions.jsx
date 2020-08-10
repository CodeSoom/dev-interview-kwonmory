import React from 'react';

import styled from '@emotion/styled';

import QuestionList from './QuestionList';

const Wrapper = styled.div`
  flex: 1;
  min-width: 20rem;
`;

const InterviewQuestions = ({ questions }) => (
  <Wrapper>
    <QuestionList questions={questions} />
  </Wrapper>
);

export default InterviewQuestions;

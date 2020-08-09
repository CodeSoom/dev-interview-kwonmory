import React from 'react';

import styled from '@emotion/styled';

import InterviewCategoriesContainer from '../containers/InterviewCategoriesContainer';
import InterviewQuestionsContainer from '../containers/InterviewQuestionsContainer';

const Wrapper = styled.div`
  margin: 0 1.5rem;
`;

const InterviewPracticePage = () => (
  <Wrapper>
    <InterviewCategoriesContainer />
    <InterviewQuestionsContainer />
  </Wrapper>
);

export default InterviewPracticePage;

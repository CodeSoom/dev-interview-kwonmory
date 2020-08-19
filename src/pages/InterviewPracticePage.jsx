import React from 'react';

import styled from '@emotion/styled';

import InterviewCategoriesContainer from '../containers/InterviewCategoriesContainer';
import InterviewQuestionsContainer from '../containers/InterviewQuestionsContainer';

const Wrapper = styled.div`
  margin: 0 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentArea = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

const DivisionBarStyled = styled.div`
    width: 50px;
    height: 2px;
    border-radius: 5px;
    background-color: rgba(91,115,247,0.2);
`;

const Banner = styled.div`
  width: 100%;
  height: 5rem;
  margin: 2rem 0;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #494e66;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem;
    }
    p {
      padding: 1rem;
      text-align: center;
      font-weight: 500;
      position: relative;
    }
  }
`;

const InterviewPracticePage = () => (
  <Wrapper>
    <Banner>
      <div>
        <h2>스스로 문제에 대한 답을 찾아보세요</h2>
        <DivisionBarStyled />
        <p>그것이 여러분을 성장 시킵니다</p>
      </div>
    </Banner>
    <ContentArea>
      <InterviewCategoriesContainer />
      <InterviewQuestionsContainer />
    </ContentArea>
  </Wrapper>
);

export default InterviewPracticePage;

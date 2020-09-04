import React from 'react';

import styled from '@emotion/styled';

import QuestionItem from './QuestionItem';

const UlStyled = styled.ul`
`;

const EmptyMessageStyled = styled.div`
`;

const QuestionList = ({ questions }) => {
  if (!questions || questions.length === 0) {
    return (<EmptyMessageStyled>인터뷰 질문이 없습니다.</EmptyMessageStyled>);
  }

  return (
    <UlStyled className="questions">
      {questions.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </UlStyled>
  );
};

export default QuestionList;

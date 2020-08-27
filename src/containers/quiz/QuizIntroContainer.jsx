import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';
import { get } from '../../modules/utils';

import QuizIntro from '../../components/quiz/QuizIntro';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem',
});

const QuizIntroContainer = () => {
  const quiz = useSelector(get('quiz'));

  return (
    <Wrapper>
      <QuizIntro quiz={quiz} />
    </Wrapper>
  );
};

export default QuizIntroContainer;

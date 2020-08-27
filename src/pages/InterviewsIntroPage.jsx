import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import _ from 'lodash';

import styled from '@emotion/styled';

import { get } from '../modules/utils';

import { loadQuiz, setSelectedQuizId } from '../modules/reducer'; // TODO setSelectedQuied 나중에 삭제해야함

import QuizErrorMessage from '../components/quiz/QuizErrorMessage';
import QuizHeaderContainer from '../containers/common/QuizHeaderContainer';
import QuizIntroContainer from '../containers/quiz/QuizIntroContainer';

const Wrapper = styled.div({
  backgroundColor: '#121212',
});

const InterviewsIntroPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedQuizId(1)); // TODO 나중에 삭제해야함
    dispatch(loadQuiz());
  }, []);

  const quiz = useSelector(get('quiz'));

  if (_.isEmpty(quiz)) {
    return (
      <Wrapper>
        <QuizHeaderContainer />
        <QuizErrorMessage />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <QuizHeaderContainer />
      <QuizIntroContainer />
    </Wrapper>
  );
};

export default InterviewsIntroPage;

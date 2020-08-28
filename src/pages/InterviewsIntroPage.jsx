import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import _ from 'lodash';

import styled from '@emotion/styled';

import { get } from '../modules/utils';

import { loadQuiz } from '../modules/reducer'; // TODO setSelectedQuied 나중에 삭제해야함

import QuizErrorMessage from '../components/quiz/QuizErrorMessage';
import QuizHeaderContainer from '../containers/common/QuizHeaderContainer';
import QuizIntroContainer from '../containers/quiz/QuizIntroContainer';
import InterviewsLayout from '../layout/InterviewsLayout';

const Wrapper = styled.div({
  backgroundColor: '#121212',
});

const InterviewsIntroPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadQuiz());
  }, []);

  const quiz = useSelector(get('quiz'));

  if (_.isEmpty(quiz)) {
    return (
      <InterviewsLayout>
        <Wrapper>
          <QuizErrorMessage />
        </Wrapper>
      </InterviewsLayout>
    );
  }

  return (
    <InterviewsLayout>
      <Wrapper>
        <QuizIntroContainer />
      </Wrapper>
    </InterviewsLayout>
  );
};

export default InterviewsIntroPage;

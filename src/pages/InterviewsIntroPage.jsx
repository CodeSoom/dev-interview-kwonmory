import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import _ from 'lodash';

import styled from '@emotion/styled';

import { get } from '../modules/utils';

import { loadQuiz } from '../modules/reducer'; // TODO setSelectedQuied 나중에 삭제해야함

import QuizErrorMessage from '../components/quiz/QuizErrorMessage';
import QuizIntroContainer from '../containers/quiz/QuizIntroContainer';
import InterviewsLayout from '../layout/InterviewsLayout';

const Wrapper = styled.div({
  // height: 'calc(100vh - 3.1rem)',
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

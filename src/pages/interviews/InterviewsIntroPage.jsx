import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import _ from 'lodash';

import styled from '@emotion/styled';

import { get } from '../../utils';

import { loadQuiz } from '../../modules/reducer'; // TODO setSelectedQuied 나중에 삭제해야함

import QuizErrorMessage from '../../components/interviews/QuizErrorMessage';
import QuizIntroContainer from '../../containers/interviews/QuizIntroContainer';
import InterviewsLayout from '../../layout/InterviewsLayout';

const Wrapper = styled.div({
  // empty
});

const InterviewsIntroPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadQuiz());
  }, []);

  const quiz = useSelector(get('quiz'));
  const loading = useSelector(get('loading'));

  if (loading && _.isEmpty(quiz)) {
    return (
      <>
        <InterviewsLayout />
      </>
    );
  }

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

import React, {
  useCallback, useState,
} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import _ from 'lodash';

import styled from '@emotion/styled';

import ReactQuill from 'react-quill';

import { get } from '../modules/utils';

import { saveFeedback, setCurrentStep } from '../modules/reducer';

import InterviewsLayout from '../layout/InterviewsLayout';

import QuizErrorMessage from '../components/quiz/QuizErrorMessage';

import ButtonStyled from '../components/common/ButtonStyled';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
  height: 'calc(100% - 3.1rem)',
});

const FeedBackNotice = styled.div({
  fontSize: '1.2rem',
  color: '#fff',
  opacity: '.9',
});

const InterviewsFeedBackPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [feedback, setFeedback] = useState('');

  const quiz = useSelector(get('quiz'));
  const currentStep = useSelector(get('currentStep'));

  const handleGoNextProblem = useCallback(() => {
    const problemsIndex = currentStep - 1;

    dispatch(saveFeedback({ problemsIndex, feedback }));

    if (quiz.problems.length === currentStep) {
      dispatch(setCurrentStep(Number(currentStep) + 1));

      history.push('/interviews/quiz/problem/finish');

      return;
    }

    dispatch(setCurrentStep(Number(currentStep) + 1));
    history.push('/interviews/quiz/problem');
  }, [feedback, currentStep]);

  if (_.isEmpty(quiz)) {
    return (
      <InterviewsLayout>
        <QuizErrorMessage />
      </InterviewsLayout>
    );
  }

  return (
    <InterviewsLayout>
      <Wrapper>
        <FeedBackNotice>
          방금 질문에 대해 어떻게 대답을 했나요? 셀프 피드백을 해봅시다.
        </FeedBackNotice>
        <ReactQuill
          theme="bubble"
          value={feedback}
          onChange={setFeedback}
          placeholder="전 질문에 대한 셀프 피드백을 적어주세요."
        />
        <ButtonStyled type="button" onClick={handleGoNextProblem}>다음문제</ButtonStyled>
      </Wrapper>
    </InterviewsLayout>
  );
};

export default InterviewsFeedBackPage;

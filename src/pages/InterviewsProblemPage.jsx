import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import _ from 'lodash';

import { setSelectedQuizId } from '../modules/reducer';

import InterviewsLayout from '../layout/InterviewsLayout';

import { get } from '../modules/utils';
import QuizErrorMessage from '../components/quiz/QuizErrorMessage';

const isHaveNextProblem = (currentStep, problems) => (currentStep < problems.length);

// TODO 컴포넌트 분리해줘야함

const InterviewsProblemPage = () => {
  const dispatch = useDispatch();
  const quiz = useSelector(get('quiz'));
  const currentStep = useSelector(get('currentStep'));
  const history = useHistory();
  const currentQuiz = quiz?.problems?.[currentStep - 1];

  // const limitTime = quiz.limit_second; // TODO 추후 사용할 예정

  const handleGoNextProblem = useCallback(() => {
    if (isHaveNextProblem(currentStep, quiz.problems)) {
      dispatch(setSelectedQuizId(Number(currentStep) + 1));
      history.push('/interviews/problem/feedback');
    }

    // TODO: 마무리 페이지로 넘어가는 로직 작성
  }, [history, currentStep, quiz, currentQuiz]);

  if (_.isEmpty(quiz)) {
    return (
      <InterviewsLayout>
        <QuizErrorMessage />
      </InterviewsLayout>
    );
  }

  return (
    <InterviewsLayout>
      Q.
      {' '}
      {currentQuiz.title}

      <button type="button" onClick={handleGoNextProblem}>다음으로</button>
    </InterviewsLayout>
  );
};

export default InterviewsProblemPage;

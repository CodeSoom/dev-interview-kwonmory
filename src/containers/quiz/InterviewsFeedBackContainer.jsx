import React, {
  useCallback, useState,
} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import _ from 'lodash';

import { get } from '../../modules/utils';

import { saveFeedback, setCurrentStep } from '../../modules/reducer';

import InterviewsLayout from '../../layout/InterviewsLayout';

import QuizErrorMessage from '../../components/quiz/QuizErrorMessage';

import InterviewsFeedBack from '../../components/quiz/InterviewsFeedBack';

const InterviewsFeedBackContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [feedback, setFeedback] = useState('');

  const quiz = useSelector(get('quiz'));
  const currentStep = useSelector(get('currentStep'));

  const handleMoveNextProblem = useCallback(() => {
    const problemsIndex = currentStep - 1;

    dispatch(saveFeedback({ problemsIndex, feedback }));

    if (quiz.problems.length === currentStep) {
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
    <>
      <InterviewsFeedBack
        feedback={feedback}
        setFeedback={setFeedback}
        onMoveNextProblem={handleMoveNextProblem}
      />
    </>
  );
};

export default InterviewsFeedBackContainer;

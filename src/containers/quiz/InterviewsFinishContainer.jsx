import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import _ from 'lodash';

import { useSelector } from 'react-redux';

import InterviewsLayout from '../../layout/InterviewsLayout';
import QuizErrorMessage from '../../components/quiz/QuizErrorMessage';
import InterviewsFinish from '../../components/quiz/InterviewsFinish';

import { get } from '../../modules/utils';

const InterviewsFinishContainer = () => {
  const history = useHistory();

  const handleMoveNext = useCallback(() => {
    history.push('/interviews/quiz/problem/check');
  }, []);

  const quiz = useSelector(get('quiz'));

  if (_.isEmpty(quiz)) {
    return (
      <InterviewsLayout>
        <QuizErrorMessage />
      </InterviewsLayout>
    );
  }

  return (
    <>
      <InterviewsFinish onMoveNext={handleMoveNext} />
    </>
  );
};

export default InterviewsFinishContainer;

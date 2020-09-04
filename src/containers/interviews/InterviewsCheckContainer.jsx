import React, { useCallback } from 'react';

import { useSelector } from 'react-redux';

import _ from 'lodash';

import { useHistory } from 'react-router-dom';

import { get } from '../../utils';

import InterviewsLayout from '../../layout/InterviewsLayout';
import QuizErrorMessage from '../../components/interviews/QuizErrorMessage';

import InterviewsCheck from '../../components/interviews/InterviewsCheck';

const InterviewsCheckContainer = () => {
  const history = useHistory();
  const { problems } = useSelector(get('quiz'));

  const handleMoveInterviewsPage = useCallback(() => {
    history.push('/interviews');
  }, []);

  if (_.isEmpty(problems)) {
    return (
      <InterviewsLayout>
        <QuizErrorMessage />
      </InterviewsLayout>
    );
  }

  return (
    <>
      <InterviewsCheck onMoveInterviewsPage={handleMoveInterviewsPage} problems={problems} />
    </>
  );
};

export default InterviewsCheckContainer;

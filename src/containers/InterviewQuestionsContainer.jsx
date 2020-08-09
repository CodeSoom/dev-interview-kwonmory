import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadInterviewQuestions } from '../modules/reducer';

import InterivewQuestions from '../components/InterviewQuestions';

import { get } from '../modules/utils';

const InterviewQuestionsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInterviewQuestions());
  }, []);

  const { questions } = useSelector(get('interview'));

  return (
    <>
      <InterivewQuestions questions={questions} />
    </>
  );
};

export default InterviewQuestionsContainer;

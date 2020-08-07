import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import InterviewCategoriesContainer from '../containers/InterviewCategoriesContainer';
import InterviewQuestionsContainer from '../containers/InterviewQuestionsContainer';

import { loadQuestions, loadParts } from '../modules/reducer';

const InterviewPracticePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadParts());
  }, []);

  useEffect(() => {
    dispatch(loadQuestions());
  }, []);

  return (
    <>
      <InterviewCategoriesContainer />
      <InterviewQuestionsContainer />
    </>
  );
};

export default InterviewPracticePage;

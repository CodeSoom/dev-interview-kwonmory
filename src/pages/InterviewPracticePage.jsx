import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import InterviewQuestionsContainer from '../containers/InterviewQuestionsContainer';

import { loadQuestions } from '../modules/reducer';

const InterviewPracticePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadQuestions());
  }, []);

  return (
    <>
      <div>
        카테고리영역
        체감 난이도
        질문 유형
        회사별 질문
      </div>
      <InterviewQuestionsContainer />
    </>
  );
};

export default InterviewPracticePage;

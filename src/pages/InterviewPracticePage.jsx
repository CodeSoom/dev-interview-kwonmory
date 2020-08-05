import React from 'react';

import { useSelector } from 'react-redux';

import { get } from '../modules/utils';

const InterviewPracticePage = () => {
  const { questions } = useSelector(get('interview'));

  if (!questions || questions.length === 0) {
    return (<h2>인터뷰 질문이 없습니다.</h2>);
  }

  return (
    <>
      질문
    </>
  );
};

export default InterviewPracticePage;

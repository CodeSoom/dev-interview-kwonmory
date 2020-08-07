import React from 'react';
import { useSelector } from 'react-redux';

import { get } from '../modules/utils';

const InterviewQuestionsContainer = () => {
  const { questions } = useSelector(get('interview'));

  if (!questions || questions.length === 0) {
    return (<h2>인터뷰 질문이 없습니다.</h2>);
  }

  const questionList = questions.map((question) => (
    <li key={question.id}>
      <div>
        타이틀:
        {question.title}
      </div>
      <div>
        유형:
        {question.categories && question.categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    </li>
  ));

  return (
    <>
      <ul>
        {questionList}
      </ul>
    </>
  );
};

export default InterviewQuestionsContainer;

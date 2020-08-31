import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';

import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import _ from 'lodash';

import styled from '@emotion/styled';

import InterviewsLayout from '../layout/InterviewsLayout';

import QuizErrorMessage from '../components/quiz/QuizErrorMessage';
import ButtonStyled from '../components/common/ButtonStyled';

import { get } from '../modules/utils';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
  height: 'calc(100vh - 3.1rem)',
});

const QuizStyled = styled.div({
  fontSize: '3rem',
  color: '#fff',
});

const QuizTimerStyled = styled.div({
  color: '#fff',
  opacity: '0.8',
});

const InterviewsProblemPage = () => {
  const history = useHistory();

  const quiz = useSelector(get('quiz'));
  const currentStep = useSelector(get('currentStep'));

  const currentQuiz = quiz.problems?.[currentStep - 1];

  const limitTime = quiz.limit_second;

  const [time, setTime] = useState(limitTime);
  const [isError, setIsError] = useState(false);

  const timerRef = useRef(0);

  useEffect(() => {
    if (Number.isInteger(time)) {
      timerRef.current = setInterval(() => {
        setTime((previousTime) => previousTime - 1);
      }, 1000);
    } else {
      setIsError(true);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (time <= 0) {
      history.push('/interviews/quiz/problem/feedback');
    }
  }, [time]);

  const handleGoNextProblem = useCallback(() => {
    history.push('/interviews/quiz/problem/feedback');
  }, [currentStep, quiz, currentQuiz]);

  if (_.isEmpty(quiz) || isError) {
    return (
      <InterviewsLayout>
        <QuizErrorMessage />
      </InterviewsLayout>
    );
  }

  return (
    <InterviewsLayout>
      <Wrapper>
        <QuizTimerStyled>
          남은시간 :
          {' '}
          {time}
          초
        </QuizTimerStyled>
        <QuizStyled>
          Q.
          {' '}
          {currentQuiz?.title || '오류가 발생했습니다.'}
        </QuizStyled>
        <ButtonStyled type="button" onClick={handleGoNextProblem}>다음문제</ButtonStyled>
      </Wrapper>
    </InterviewsLayout>
  );
};

export default InterviewsProblemPage;

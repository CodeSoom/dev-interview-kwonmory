import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import _ from 'lodash';

import { useSelector } from 'react-redux';

import InterviewsLayout from '../layout/InterviewsLayout';
import QuizErrorMessage from '../components/quiz/QuizErrorMessage';
import ButtonStyled from '../components/common/ButtonStyled';

import { get } from '../modules/utils';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 3.1rem)',
  color: '#fff',

  h2: {
    fontSize: '2.4rem',
    marginBottom: '1rem',
  },

  p: {
    marginBottom: '2rem',
  },
});

const InterviewsFinishPage = () => {
  const history = useHistory();

  const handleNextButton = useCallback(() => {
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
    <InterviewsLayout>
      <Wrapper>
        <h2>수고하셨습니다.</h2>

        <p>이제 앞에서 작성하신 피드백을 통해 개선시킬 차례입니다.</p>

        <ButtonStyled type="button" onClick={handleNextButton}>모든 피드백 보기</ButtonStyled>
      </Wrapper>
    </InterviewsLayout>
  );
};

export default InterviewsFinishPage;

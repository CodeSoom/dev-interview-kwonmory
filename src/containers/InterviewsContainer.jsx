import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import {
  loadInterviews, clearQuiz, setSelectedQuizId,
} from '../modules/reducer';

import { get } from '../modules/utils';

import Interviews from '../components/Interviews';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const InterviewsContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadInterviews());
    dispatch(clearQuiz());
  }, []);

  const interviews = useSelector(get('interviews'));

  const handleStartButton = async (id) => {
    await dispatch(setSelectedQuizId(id));
    // Todo 인트로로 이동하기
    history.push('/interviews/quiz');
  };

  return (
    <Wrapper>
      <Interviews interviews={interviews} onStartButton={handleStartButton} />
    </Wrapper>
  );
};

export default InterviewsContainer;

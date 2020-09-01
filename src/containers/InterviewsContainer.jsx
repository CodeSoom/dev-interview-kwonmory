import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import { confirmAlert } from 'react-confirm-alert';
import {
  loadInterviews, clearQuiz, setSelectedQuizId,
} from '../modules/reducer';

import { get } from '../modules/utils';

import Interviews from '../components/Interviews';
import ConfirmAlert from '../components/common/ConfirmAlert';

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

  const handleStartButton = useCallback(async (id) => {
    await confirmAlert({
      customUI: ({ onClose }) => (
        <ConfirmAlert
          onClose={onClose}
          message="시작하시겠습니까?"
          confirmMessage="해볼래요"
          closeMessage="안할래요"
          onHandleConfirm={async () => {
            await dispatch(setSelectedQuizId(id));
            history.push('/interviews/quiz');
          }}
        />
      ),
    });
  }, []);

  return (
    <Wrapper>
      <Interviews interviews={interviews} onStartButton={handleStartButton} />
    </Wrapper>
  );
};

export default InterviewsContainer;

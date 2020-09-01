import React, { useCallback } from 'react';

import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import { confirmAlert } from 'react-confirm-alert';

import { get } from '../../modules/utils';

import QuizIntro from '../../components/quiz/QuizIntro';
import ConfirmAlert from '../../components/common/ConfirmAlert';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem',
});

const QuizIntroContainer = () => {
  const history = useHistory();
  const quiz = useSelector(get('quiz'));

  const handleStartButton = useCallback(() => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <ConfirmAlert
          onClose={onClose}
          message="시작시 시간 초는 흘러갑니다!"
          confirmMessage="시작하기"
          closeMessage="대기대기!"
          onHandleConfirm={async () => {
            history.push('/interviews/quiz/problem');
          }}
        />
      ),
    });
  }, []);

  return (
    <Wrapper>
      <QuizIntro quiz={quiz} onStartButton={handleStartButton} />
    </Wrapper>
  );
};

export default QuizIntroContainer;

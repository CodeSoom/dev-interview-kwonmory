import React, { useCallback } from 'react';

import { useSelector } from 'react-redux';

import { confirmAlert } from 'react-confirm-alert';

import { useLocation, useHistory } from 'react-router-dom';

import { get } from '../../utils';

import QuizHeader from '../../components/common/QuizHeader';
import ConfirmAlert from '../../components/common/ConfirmAlert';

const QuizHeaderContainer = () => {
  const location = useLocation();
  const history = useHistory();
  const currentStep = useSelector(get('currentStep'));
  const quiz = useSelector(get('quiz'));

  const handleExit = useCallback(() => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <ConfirmAlert
          onClose={onClose}
          message="나가시겠습니까?"
          confirmMessage="예"
          closeMessage="아니요"
          onHandleConfirm={() => {
            history.push('/interviews');
          }}
        />
      ),
    });
  }, []);

  return (
    <QuizHeader
      currentStep={currentStep}
      path={location.pathname}
      quiz={quiz}
      onExit={handleExit}
    />
  );
};

export default QuizHeaderContainer;

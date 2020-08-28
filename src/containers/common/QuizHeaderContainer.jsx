import React, { useCallback, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useLocation, useHistory } from 'react-router-dom';

import { get } from '../../modules/utils';

import QuizHeader from '../../components/common/QuizHeader';

const QuizHeaderContainer = () => {
  const location = useLocation();
  const history = useHistory();
  const currentStep = useSelector(get('currentStep'));
  const quiz = useSelector(get('quiz'));

  useEffect(() => {
    const unblock = history.block('나가시겠습니까?');

    return () => {
      unblock();
    };
  }, [history]);

  const handleExit = useCallback(() => {
    history.push('/interviews');
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

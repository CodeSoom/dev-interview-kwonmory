import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from '../modules/utils';

import { loadInterviews } from '../modules/reducer';

const InterviewsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInterviews());
  }, []);

  const interviews = useSelector(get('interviews'));

  if (!interviews || interviews.length === 0) {
    return (
      <div>
        인터뷰 리스트가 없습니다.
      </div>
    );
  }

  return (
    <div>
      인터뷰 리스트가 있음
    </div>
  );
};

export default InterviewsPage;

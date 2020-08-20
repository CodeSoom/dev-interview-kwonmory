import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadInterviews } from '../modules/reducer';

import { get } from '../modules/utils';

const InterivewsContainer = () => {
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
      {JSON.stringify(interviews)}
    </div>
  );
};

export default InterivewsContainer;

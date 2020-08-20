import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { loadInterviews } from '../modules/reducer';

import { get } from '../modules/utils';

import Interviews from '../components/Interviews';

const Wrapper = styled.div({

});

const InterivewsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInterviews());
  }, []);

  const interviews = useSelector(get('interviews'));

  return (
    <Wrapper>
      <Interviews interviews={interviews} />
    </Wrapper>
  );
};

export default InterivewsContainer;

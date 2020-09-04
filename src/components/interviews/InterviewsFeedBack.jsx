import React from 'react';

import ReactQuill from 'react-quill';

import styled from '@emotion/styled';

import ButtonStyled from '../common/ButtonStyled';

const FeedBackNotice = styled.div({
  fontSize: '1.2rem',
  color: '#fff',
  opacity: '.9',
});

const InterviewsFeedBack = ({ feedback, setFeedback, onMoveNextProblem }) => (
  <>
    <FeedBackNotice>
      방금 질문에 대해 어떻게 대답을 했나요? 셀프 피드백을 해봅시다.
    </FeedBackNotice>
    <ReactQuill
      theme="bubble"
      value={feedback}
      onChange={setFeedback}
      placeholder="전 질문에 대한 셀프 피드백을 적어주세요."
    />
    <ButtonStyled type="button" onClick={onMoveNextProblem}>다음문제</ButtonStyled>
  </>
);

export default InterviewsFeedBack;

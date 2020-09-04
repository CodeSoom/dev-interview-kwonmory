import React from 'react';

import ButtonStyled from '../common/ButtonStyled';

const InterviewsFinish = ({ onMoveNext }) => (
  <>
    <h2>수고하셨습니다.</h2>

    <p>이제 앞에서 작성하신 피드백을 통해 개선시킬 차례입니다.</p>

    <ButtonStyled type="button" onClick={onMoveNext}>모든 피드백 보기</ButtonStyled>
  </>
);

export default InterviewsFinish;

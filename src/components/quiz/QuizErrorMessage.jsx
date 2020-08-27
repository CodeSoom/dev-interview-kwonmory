import React from 'react';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  height: 'calc(100% - 2rem)',

  h2: {
    fontSize: '3rem',
    margin: '1rem 0',
  },
  p: {
    opacity: '.8',
  },
});

const bounce = keyframes`
  0% {
    opacity: .5;
  }
  50% {
  opacity: 1;
  }
  100% {
  opacity: .5;
  }
`;

const CharacterStyled = styled.img({
  width: '150px',
  animation: `${bounce} 1s ease-in-out infinite`,
});

const QuizErrorMessage = () => {
  const IMAGE = '../assets/images/avichu.png';

  return (
    <>
      <Wrapper>
        <CharacterStyled src={IMAGE} alt="귀여운 에비츄" />
        <h2>문제가 발생했습니다.ㅜ_ㅜ</h2>
        <p>나가기를 통해 다시 들어와주세요.</p>
      </Wrapper>
    </>
  );
};

export default QuizErrorMessage;

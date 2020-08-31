import React from 'react';

import styled from '@emotion/styled';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  color: '#fff',
  height: 'calc(100vh - 3.1rem)',
  userSelect: 'none',

  h2: {
    fontSize: '3rem',
    margin: '1rem 0',
  },
  p: {
    opacity: '.8',
  },
});

const CharacterStyled = styled.img({
  width: '11rem',
  background: '#fff',
  borderRadius: '1rem',
});

const QuizErrorMessage = () => {
  const IMAGE = 'https://svgsilh.com/svg/1770788.svg';

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

import React from 'react';
import styled from '@emotion/styled';

const TitleStyled = styled.span({
  opacity: '.8',
  fontWeight: '700',
  letterSpacing: '.2rem',
});

const StepStyled = styled.span({
  fontSize: '.8rem',

});

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '3.1rem',
  padding: '.5rem 1.5rem',
  color: '#fff',
  backgroundColor: '#253747',
});

const ExitButtonStyled = styled.button({
  width: '4.5rem',
  height: '2rem',
  border: 'none',
  borderRadius: '.2rem',
  fontWeight: '700',
  color: '#fff',
  backgroundColor: '#0984e3',
  cursor: 'pointer',

  '&: hover': {
    color: '#0984e3',
    backgroundColor: '#fff',
  },
});

const QuizHeader = ({
  quiz, path, currentStep, onExit,
}) => {
  if (path === '/interviews/quiz') {
    return (
      <Wrapper>
        <TitleStyled>인터뷰즈_</TitleStyled>
        <ExitButtonStyled onClick={onExit}>나가기</ExitButtonStyled>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <TitleStyled>
          {quiz?.title || '인터뷰즈_'}
        </TitleStyled>
        <StepStyled>
          _step
          {' '}
          {currentStep || 0}
          {' '}
          /
          {' '}
          {quiz?.quiz?.length || 0}
        </StepStyled>
      </div>
      <ExitButtonStyled onClick={onExit}>나가기</ExitButtonStyled>
    </Wrapper>
  );
};

export default QuizHeader;

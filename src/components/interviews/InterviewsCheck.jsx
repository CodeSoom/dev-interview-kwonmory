import React from 'react';

import ReactQuill from 'react-quill';

import styled from '@emotion/styled';

import ButtonStyled from '../common/ButtonStyled';

const CardListStyled = styled.ul({

});

const CardWrapperStyled = styled.li({
  flex: 'display',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minWidth: '20rem',
  margin: '1rem',
  padding: '1rem',
  backgroundColor: '#fff',
  borderRadius: '.3rem',
});

const CardTitleStyled = styled.div({
  fontSize: '1.2rem',
  marginBottom: '1rem',
  textAlign: 'center',
  borderBottom: '0.0625rem solid rgba(0,0,0,0.1)',
  padding: '1rem',
  fontWeight: 600,
});

const CardFeedbackStyled = styled.div({
  textAlign: 'center',
  '.ql-editor': {
    minHeight: 0,
  },
});

const InterviewsCheck = ({ problems, onMoveInterviewsPage }) => (
  <>
    <CardListStyled>
      {problems?.map((v) => (
        <CardWrapperStyled key={v.id}>
          <CardTitleStyled>
            Q.
            {' '}
            {v.title}
          </CardTitleStyled>
          <CardFeedbackStyled>
            <ReactQuill
              theme="bubble"
              value={v.feedback}
              readOnly
            />
          </CardFeedbackStyled>
        </CardWrapperStyled>
      ))}
    </CardListStyled>

    <ButtonStyled type="button" onClick={onMoveInterviewsPage}>처음으로</ButtonStyled>
  </>
);

export default InterviewsCheck;

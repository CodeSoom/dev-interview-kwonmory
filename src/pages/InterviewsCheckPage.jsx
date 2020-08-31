import React from 'react';

import { useSelector } from 'react-redux';

import _ from 'lodash';

import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import ReactQuill from 'react-quill';

import { get } from '../modules/utils';

import InterviewsLayout from '../layout/InterviewsLayout';
import QuizErrorMessage from '../components/quiz/QuizErrorMessage';

import ButtonStyled from '../components/common/ButtonStyled';

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '1rem',
});

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

const InterviewsCheckPage = () => {
  const history = useHistory();
  const { problems } = useSelector(get('quiz'));

  const handleGoToInterviews = () => {
    history.push('/interviews');
  };

  if (_.isEmpty(problems)) {
    return (
      <InterviewsLayout>
        <QuizErrorMessage />
      </InterviewsLayout>
    );
  }

  return (
    <InterviewsLayout>
      <Wrapper>
        <CardListStyled>
          {problems.map((v) => (
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

        <ButtonStyled type="button" onClick={handleGoToInterviews}>처음으로</ButtonStyled>
      </Wrapper>
    </InterviewsLayout>
  );
};

export default InterviewsCheckPage;

import React from 'react';

import styled from '@emotion/styled';

import _ from 'lodash';
import CustomLazyLoadImage from '../common/CustomLazyLoadImage';

const InterviewsItemStyled = styled.li({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  minWidth: '20rem',
  margin: '1.5rem .2rem',
  paddingBottom: '1rem',
  borderBottom: '1px solid rgba(0,0,0,0.1)',

  '@media (max-width: 48rem)': {
    flexDirection: 'column',
  },
});

const InterviewsImagesStyled = styled.div({
  display: 'flex',
  justifyContent: 'center',

  img: {
    width: '28rem',
    height: '100%',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  '@media (max-width: 48rem)': {
    width: '100%',
    height: '16.5rem',
    img: {
      width: '100%',
      maxWidth: '40rem',
      height: '16rem',
    },
  },
});

const InterviewsRightStyled = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '15rem',
  width: '100%',
  marginLeft: '2rem',

  '@media (max-width: 48rem)': {
    height: 'auto',
  },
});

const InterviewsTitleStyled = styled.h2({
  marginTop: '.7rem',
  marginBottom: '1rem',
  fontSize: '1.25rem',
  fontWeight: '700',
  color: '#263747',
  lineHeight: '1.3',

  '@media (max-width: 48rem)': {
    textAlign: 'center',
  },
});

const InterviewsDescriptionStyled = styled.p({
  width: '100%',
  marginBottom: '1rem',
  color: '#98A8B9',
  fontSize: '.9rem',
  lineHeight: 1.3,
  letterSpacing: '0.075rem',

  '@media (max-width: 48rem)': {
    textAlign: 'center',
  },
});

const InterviewsActiveStyled = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0 .5rem',
});

const InterviewsTagsStyled = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: 1,
  paddingRight: '1rem',

  span: {
    display: 'inline-block',
    fontSize: '.75rem',
    borderRadius: '0.25rem',
    fontWeight: 700,
    color: '#263747',
    marginRight: '.5rem',
    textTransform: 'uppercase',
  },
  a: {
    fontSize: '.75rem',
    fontWeight: 700,
    color: '#263747',
    textDecoration: 'none',
  },
});

const InterviewsActiveButtonStyled = styled.div({
  // empty
});

const ButtonStyled = styled.button({
  display: 'inline-block',
  width: '7.25rem',
  height: '2rem',
  padding: '.3rem',
  border: '2px solid #768bfa',
  textAlign: 'center',
  borderRadius: '.3rem',
  textDecoration: 'none',
  background: '#768bfa',
  color: '#fff',
  cursor: 'pointer',
  '&:hover': {
    background: '#fff',
    color: '#768bfa',
  },
});

const InterviewsItem = ({ interviews, onStartButton }) => {
  const DEFAULT_IMAGE = '../assets/images/interviews-default.png';
  const image = interviews.image?.url || DEFAULT_IMAGE;
  const imageAtl = interviews?.image?.alt || '디폴트 이미지';

  const madeImage = {
    src: image,
    alt: imageAtl,
    with: 320,
    height: 240,
  };

  return (
    <>
      <InterviewsItemStyled>
        <InterviewsImagesStyled>
          <CustomLazyLoadImage image={madeImage} />
        </InterviewsImagesStyled>
        <InterviewsRightStyled>
          <div>
            <InterviewsTitleStyled>
              {_.truncate(interviews?.title || '제목이 없습니다!', {
                length: 60,
              })}
            </InterviewsTitleStyled>
            <InterviewsDescriptionStyled>
              {_.truncate(interviews?.description || '설명이 없습니다!', {
                length: 350,
              }).split('\n').map((line) => (
                <span key={`${interviews.id}_${line}`}>
                  {line}
                  <br />
                </span>
              ))}
            </InterviewsDescriptionStyled>
          </div>
          <div>
            <InterviewsActiveStyled>
              <InterviewsTagsStyled>
                <div>
                  {interviews?.tags?.map((tag) => <span key={`tag_${interviews.id}_${tag.id}`}>{tag.title}</span>)}
                </div>
                <div>
                  {interviews?.source && <a key={interviews.id} href={interviews.source} target="_blank" rel="noreferrer">출처링크</a>}
                </div>
              </InterviewsTagsStyled>
              <InterviewsActiveButtonStyled>
                <ButtonStyled onClick={() => onStartButton(interviews.id)}>도전하기</ButtonStyled>
              </InterviewsActiveButtonStyled>
            </InterviewsActiveStyled>
          </div>
        </InterviewsRightStyled>
      </InterviewsItemStyled>
    </>
  );
};

export default InterviewsItem;

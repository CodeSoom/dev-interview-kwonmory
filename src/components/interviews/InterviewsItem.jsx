import React from 'react';

import styled from '@emotion/styled';

import _ from 'lodash';

const InterviewsItemStyled = styled.li({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: '20rem',
  minWidth: '20rem',
  minHeight: '23rem',
  maxHeight: '23rem',
  margin: '1.5rem .2rem',
});

const InterviewsImagesStyled = styled.div({
  display: 'flex',
  justifyContent: 'center',
  width: '300px',
  height: '200px',
  img: {
    width: '100%',
    height: '100%',
    borderRadius: '5px',
  },
});

const InterviewsTitleStyled = styled.h2({
  marginTop: '.7rem',
  marginBottom: '1rem',
  fontSize: '1.25rem',
  fontWeight: '700',
  color: '#263747',
  lineHeight: '1.3',
});

const InterviewsDescriptionStyled = styled.p({
  width: '100%',
  marginBottom: '1rem',
  padding: '0 .5rem',
  color: '#98A8B9',
  fontSize: '.9rem',
});

const InterviewsActiveStyled = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0 .5rem',
});

const InterviewsTagsStyled = styled.div({
  display: 'flex',
  alignItems: 'center',

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

  return (
    <>
      <InterviewsItemStyled>
        <InterviewsImagesStyled>
          <img src={image} alt={imageAtl} />
        </InterviewsImagesStyled>
        <InterviewsTitleStyled>
          {_.truncate(interviews?.title || '제목이 없습니다!', {
            length: 40,
          })}
        </InterviewsTitleStyled>
        <InterviewsDescriptionStyled>
          {_.truncate(interviews?.description || '설명이 없습니다!', {
            length: 100,
          })}
        </InterviewsDescriptionStyled>
        <InterviewsActiveStyled>
          <InterviewsTagsStyled>
            {interviews?.tags?.map((tag) => <span key={`tag_${interviews.id}_${tag.id}`}>{tag.title}</span>)}
            {interviews?.source && <a key={interviews.id} href={interviews.source} target="_blank" rel="noreferrer">출처</a>}
          </InterviewsTagsStyled>
          <InterviewsActiveButtonStyled>
            <ButtonStyled onClick={() => onStartButton(interviews.id)}>도전하기</ButtonStyled>
          </InterviewsActiveButtonStyled>
        </InterviewsActiveStyled>
      </InterviewsItemStyled>
    </>
  );
};

export default InterviewsItem;

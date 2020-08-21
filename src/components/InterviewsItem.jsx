import React from 'react';

import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import _ from 'lodash';

const InterviewsItemStyled = styled.li({
  display: 'flex',
  margin: '1rem 0',
  justifyContent: 'space-between',
  width: '100%',

  '.interviews__image': {
    width: '200px',
    height: '150px',
    img: {
      width: '100%',
      height: '100%',
      borderRadius: '5px',
    },
  },
  '.interviews__information': {
    padding: '.5rem 2rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '.interviews__description': {
      h2: {
        fontSize: '1.25rem',
        color: '#263747',
        fontWeight: '700',
        marginBottom: '1rem',
      },
      p: {
        color: '#98A8B9',
        fontSize: '.9rem',
        marginBottom: '1rem',
      },
    },
    '.interviews__tags': {
      span: {
        display: 'inline-block',
        fontSize: '.75rem',
        borderRadius: '0.25rem',
        fontWeight: 700,
        color: '#263747',
        marginRight: '.5rem',
      },
    },
  },
  '.interivews__enter-button': {
    display: 'flex',
    alignItems: 'flex-end',
    a: {
      display: 'inline-block',
      width: '7.25rem',
      height: '2rem',
      border: '2px solid #768bfa',
      padding: '.3rem',
      textAlign: 'center',
      color: '#fff',
      textDecoration: 'none',
      background: '#768bfa',
      borderRadius: '.3rem',
      '&:hover': {
        background: '#fff',
        color: '#768bfa',
      },
    },
  },
  '@media (max-width: 48rem)': {
    '&': {
      flexDirection: 'column',
      alignItems: 'center',
      '.interviews__information': {
        marginBottom: '1rem',
        '.interviews__description': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        },
        '.interviews__tags': {
          display: 'flex',
          justifyContent: 'flex-end',
        },
      },
      paddingBottom: '1rem',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
    },
  },
});
const InterviewsItem = ({ interviews }) => (
  <>
    <InterviewsItemStyled>
      <div className="interviews__image">
        <img src={interviews?.image?.[0]?.url || '../assets/images/interviews-default.png'} alt={interviews?.image?.[0]?.alt || '디폴트 이미지'} />
      </div>
      <div className="interviews__information">
        <div className="interviews__description">
          <h2>{interviews?.title || '제목이 없습니다!'}</h2>
          <p>
            {_.truncate(interviews?.description || '설명이 없습니다!', {
              length: 100,
            })}
          </p>
        </div>
        <div className="interviews__tags">
          {interviews?.tags?.map((tag) => <span key={tag.id}>{tag.title}</span>)}
        </div>
      </div>
      <div className="interivews__enter-button">
        <Link to="/">도전하기</Link>
      </div>
    </InterviewsItemStyled>
  </>
);

export default InterviewsItem;

import React from 'react';
import styled from '@emotion/styled';
import CustomLazyLoadImage from './CustomLazyLoadImage';

const ListStyled = styled.li({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '1rem 1.5rem',

  img: {
    width: '100%',
    maxWidth: '36rem',
    height: '100%',
    maxHeight: '23rem',
    margin: '1.1rem 0',
    borderRadius: '.3rem',
    transition: 'transform .5s',
  },

  h2: {
    color: '#fff',
  },
  '@media (max-width: 64rem)': {
    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
    h2: {
      marginTop: '2rem',
    },
  },
});

const GuideStepList = ({ image, text }) => (
  <ListStyled>
    <CustomLazyLoadImage image={image} />
    <h2>
      {text}
    </h2>
  </ListStyled>
);

export default GuideStepList;

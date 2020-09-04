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
    width: '18rem',
    margin: '1.1rem 0',
    borderRadius: '.3rem',
    transition: 'transform .5s',
    cursor: 'pointer',
  },
  h2: {
    color: '#fff',
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

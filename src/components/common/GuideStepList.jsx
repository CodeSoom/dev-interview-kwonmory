import React from 'react';
import styled from '@emotion/styled';

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

    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  h2: {
    color: '#fff',
  },
});

const GuideStepList = ({ image, text }) => (
  <ListStyled>
    <img src={image.src} alt={image.alt} />
    <h2>
      {text}
    </h2>
  </ListStyled>
);

export default GuideStepList;

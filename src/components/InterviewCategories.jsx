import React from 'react';

import styled from '@emotion/styled';

import CategoriesList from './CategoriesList';

const Wrapper = styled.div`
  min-width: 20rem;
  margin-right: 2.5rem;

  @media (max-width: 48rem) {
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

const CategoriesHeaderStyled = styled.h2`
  font-size: 0.9rem;
  border-top: 0.0625rem solid #D7E2EB;
  border-bottom: 0.0625rem solid #D7E2EB;
  margin-bottom: 1rem;
  padding: .5rem 0;
`;

const InterviewCategories = ({ categories, onCheckBox }) => (
  <Wrapper>
    <CategoriesHeaderStyled>파트별</CategoriesHeaderStyled>
    <CategoriesList categories={categories} onCheckBox={onCheckBox} />
  </Wrapper>
);

export default InterviewCategories;

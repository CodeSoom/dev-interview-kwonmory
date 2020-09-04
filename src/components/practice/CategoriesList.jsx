import React from 'react';

import styled from '@emotion/styled';

import CategoryItem from './CategoryItem';

const UlStyled = styled.ul`
  @media (max-width: 48rem) {
    display: flex;
    flex-wrap: wrap;
    li {
      margin: 0 .5rem;
    }
  }
`;

const CategoriesList = ({ categories, onCheckBox }) => (
  <UlStyled className="categories">
    {categories.map((category) => (
      <CategoryItem key={category.id} onCheckBox={onCheckBox} category={category} />
    ))}
  </UlStyled>
);

export default CategoriesList;

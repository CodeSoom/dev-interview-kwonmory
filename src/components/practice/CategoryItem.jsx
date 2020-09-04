import React from 'react';

import styled from '@emotion/styled';

const ItemStyled = styled.li`
  .label {
    display: block;
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 1rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      :checked ~ .checkmark {
        background-color: #2196F3;
        :after {
          display: block;
        }
      }
    }

    &:hover input ~ .checkmark {
      background-color: #ccc;
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1rem;
    width: 1rem;
    background-color: #eee;

    :after {
      content: "";
      position: absolute;
      display: none;
      left: 5px;
      top: 1px;
      width: 3px;
      height: 9px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

const CategoryItem = ({ category, onCheckBox }) => (
  <ItemStyled key={category.id}>
    <label className="label">
      {category.name}
      <input
        name={category.name}
        type="checkbox"
        onChange={onCheckBox}
        data-name={category.name}
      />
      <span className="checkmark" />
    </label>
  </ItemStyled>
);

export default CategoryItem;

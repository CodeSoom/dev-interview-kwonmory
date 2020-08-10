import React from 'react';

import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const ItemStyled = styled.li`
  border-top: 0.0625rem solid #D7E2EB;
  padding: 1rem 0 2rem 0;
  position: relative;

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  ul {
    margin-top: 0.625rem;
    li {
      color: #B2C0CC;
      text-transform: capitalize;
      font-weight: 400;
    }
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: -0.025rem;
    background-color: #2196F3;
    left: 0;
    width: 4.5rem;
    height: 0.1875rem;
  }
`;

const AStyled = styled(Link)`
  text-decoration: none;
  color: #263747;
  :hover {
    color: #2196F3;
  }
`;

const QuestionItem = ({ question }) => (
  <ItemStyled key={question.id}>
    <AStyled to="#">
      <h2>
        {question.title}
      </h2>
      <ul>
        {question.categories && question.categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </AStyled>
  </ItemStyled>
);

export default QuestionItem;

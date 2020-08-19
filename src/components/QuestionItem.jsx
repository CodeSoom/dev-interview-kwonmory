import React from 'react';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';

const ItemStyled = styled.li({
  borderTop: '0.0625rem solid #D7E2EB',
  padding: '1rem 0 2rem 0',
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',

  '&::before': {
    content: "''",
    display: 'block',
    position: 'absolute',
    top: '-0.025rem',
    backgroundColor: '#2196F3',
    left: 0,
    width: '4.5rem',
    height: '0.1875rem',
  },
});

const ReputationStyled = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  span: {
    margin: '0 10px',
  },
});

const DescriptionStyled = styled.div({
  h2: {
    fontSize: '1.2rem',
    fontWeight: 500,
  },
  ul: {
    marginTop: '0.625rem',
    li: {
      color: '#B2C0CC',
      textTransform: 'capitalize',
      fontWeight: 400,
    },
  },
});

const CategoriesStyled = styled.ul({
  display: 'flex',
});

const CategoryStyled = styled.li({
  marginRight: '10px',
});

const QuestionItem = ({ question }) => (
  <ItemStyled key={question.id}>
    <DescriptionStyled>
      <h2>
        {question.title}
      </h2>
      <CategoriesStyled>
        {question.categories && question.categories.map((category) => (
          <CategoryStyled key={`${question.id}-categories-${category.id}`}>
            •
            {' '}
            {category.name}
          </CategoryStyled>
        ))}
      </CategoriesStyled>
    </DescriptionStyled>
    <ReputationStyled>
      <span className="like">
        <FontAwesomeIcon size="lg" icon={faThumbsUp} />
        {' '}
        {question.reputation?.like || 0}
      </span>
      <span className="unlike">
        {' '}
        <FontAwesomeIcon size="lg" icon={faThumbsDown} />
        {' '}
        {question.reputation?.unlike || 0}
      </span>
    </ReputationStyled>
  </ItemStyled>
);

export default QuestionItem;

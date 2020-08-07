import React from 'react';
import { useSelector } from 'react-redux';

import { get } from '../modules/utils';

const InterviewCategoriesContainer = () => {
  const { parts } = useSelector(get('interview'));

  const handleCheckBox = ({ target }) => {
    // TODO
    // 값이 선택 될 때 마다 선택된 값으로 저장소에 넣어놓고
    // 그걸 불러올 수 있게 해야함
    console.log(target.name);
  };

  const item = parts.map((part) => (
    <li key={part.id}>
      {part.name}
      <ul>
        {part.categories.map((category) => (
          <li key={category.id}>
            <label>
              <input
                name={category.name}
                type="checkbox"
                onClick={handleCheckBox}
              />
              {category.name}
            </label>
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <ul>
      {item}
    </ul>
  );
};

export default InterviewCategoriesContainer;

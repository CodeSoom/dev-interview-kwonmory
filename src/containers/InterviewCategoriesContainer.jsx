import React from 'react';
import { useSelector } from 'react-redux';

import { get } from '../modules/utils';

const InterviewCategoriesContainer = () => {
  const { parts } = useSelector(get('interview'));

  const handleCheckBox = ({ target }) => {
    // TODO
    // 값이 선택 될 때 마다 선택된 값으로 저장소에 넣어놓고
    // 그걸 불러올 수 있게 해야함
    // 일단 생각은 state로 관리하도록 하고, state가 변경되면, 여기서 새로불러오도록 하자
    // page에서 말고 page는 단순하게 처음 시작할 때 불러와주는 용도로 하자
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

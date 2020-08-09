import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadInterviewCategories, loadInterviewQuestions, setCheckedCategories } from '../modules/reducer';

import { get } from '../modules/utils';

const InterviewCategoriesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInterviewCategories());
  }, []);

  const { categories } = useSelector(get('interview'));

  const handleCheckBox = () => {
    const checked = document.querySelectorAll("input[type='checkbox']:checked");
    const checkedList = [];
    checked.forEach((v) => {
      checkedList.push(v.dataset.name);
    });
    dispatch(setCheckedCategories(checkedList));
    dispatch(loadInterviewQuestions());
  };

  const item = categories.map((category) => (
    <li key={category.id}>
      <label>
        <input
          name={category.name}
          type="checkbox"
          onChange={handleCheckBox}
          data-name={category.name}
        />
        {category.name}
      </label>
    </li>
  ));

  return (
    <ul>
      {item}
    </ul>
  );
};

export default InterviewCategoriesContainer;

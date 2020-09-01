import React, { useCallback, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadInterviewCategories, loadInterviewQuestions, setCheckedCategories } from '../modules/reducer';

import { get } from '../modules/utils';

import InterviewCategories from '../components/InterviewCategories';

const InterviewCategoriesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInterviewCategories());
  }, []);

  const { categories } = useSelector(get('interview'));

  const handleCheckBox = useCallback(() => {
    const checked = document.querySelectorAll("input[type='checkbox']:checked");
    const checkedList = [];
    checked.forEach((v) => {
      checkedList.push(v.dataset.name);
    });
    dispatch(setCheckedCategories(checkedList));
    dispatch(loadInterviewQuestions());
  }, []);

  return (
    <>
      <InterviewCategories categories={categories} onCheckBox={handleCheckBox} />
    </>
  );
};

export default InterviewCategoriesContainer;

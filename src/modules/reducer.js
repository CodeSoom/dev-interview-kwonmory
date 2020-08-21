import { createSlice } from '@reduxjs/toolkit';

import {
  fetchInterviewCategories,
  fetchInterviewQuestions,
  fetchInterviews,
} from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    interview: {
      questions: [],
      categories: [],
    },
    interviews: [],
    accessToken: '',
  },
  reducers: {
    setAccessToken(state, { payload: accessToken }) {
      return {
        ...state,
        accessToken,
      };
    },
    setInterviewQuestions(state, { payload: questions }) {
      return {
        ...state,
        interview: {
          ...state.interview,
          questions,
        },
      };
    },
    clearInterviewQuestions(state) {
      return {
        ...state,
        interview: {
          ...state.interview,
          questions: [],
        },
      };
    },
    setInterviewCategories(state, { payload: categories }) {
      return {
        ...state,
        interview: {
          ...state.interview,
          categories,
        },
      };
    },
    setCheckedCategories(state, { payload: checkedCategories }) {
      return {
        ...state,
        interview: {
          ...state.interview,
          checkedCategories,
        },
      };
    },
    setInterviews(state, { payload: interviews }) {
      return {
        ...state,
        interviews,
      };
    },
  },
});

export const {
  setAccessToken,
  setInterviewQuestions,
  clearInterviewQuestions,
  setInterviewCategories,
  setCheckedCategories,
  setInterviews,
} = actions;
export default reducer;

export function loadInterviewQuestions() {
  return async (dispatch, getState) => {
    const { interview } = getState();

    const questions = await fetchInterviewQuestions(interview);

    dispatch(clearInterviewQuestions());
    dispatch(setInterviewQuestions(questions));
  };
}

export function loadInterviewCategories() {
  return async (dispatch) => {
    const categories = await fetchInterviewCategories();

    dispatch(setInterviewCategories(categories));
  };
}

export function loadInterviews() {
  return async (dispatch) => {
    const interviews = await fetchInterviews();

    dispatch(setInterviews(interviews));
  };
}

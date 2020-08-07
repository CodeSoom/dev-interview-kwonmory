import { createSlice } from '@reduxjs/toolkit';

import {
  fetchParts,
  fetchQuestions,
} from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    accessToken: '',
    interview: {
      questions: [],
      parts: [],
    },
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
    setInterviewParts(state, { payload: parts }) {
      return {
        ...state,
        interview: {
          ...state.interview,
          parts,
        },
      };
    },
  },
});

export const {
  setAccessToken,
  setInterviewQuestions,
  clearInterviewQuestions,
  setInterviewParts,
} = actions;
export default reducer;

export function loadQuestions() {
  return async (dispatch) => {
    const questions = await fetchQuestions();

    dispatch(clearInterviewQuestions());
    dispatch(setInterviewQuestions(questions));
  };
}

export function loadParts() {
  return async (dispatch) => {
    const parts = await fetchParts();

    dispatch(setInterviewParts(parts));
  };
}

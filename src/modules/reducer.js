import { createSlice } from '@reduxjs/toolkit';

import {
  fetchQuestions,
} from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    accessToken: '',
    interview: {
      questions: [],
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
  },
});

export const {
  setAccessToken,
  setInterviewQuestions,
  clearInterviewQuestions,
} = actions;
export default reducer;

export function loadQuestions() {
  return async (dispatch) => {
    const questions = await fetchQuestions();

    await dispatch(clearInterviewQuestions());
    await dispatch(setInterviewQuestions(questions));
  };
}

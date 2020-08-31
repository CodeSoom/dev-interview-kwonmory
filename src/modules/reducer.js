import { createSlice } from '@reduxjs/toolkit';

import produce from 'immer';

import _ from 'lodash';

import {
  fetchInterviewCategories,
  fetchInterviewQuestions,
  fetchInterviews,
  fetchQuiz,
} from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    interview: {
      questions: [],
      categories: [],
    },
    interviews: [],
    selectedQuizId: null,
    quiz: {},
    currentStep: 1,
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
    setQuiz(state, { payload: quiz }) {
      return {
        ...state,
        quiz,
      };
    },
    setSelectedQuizId(state, { payload: selectedQuizId }) {
      return {
        ...state,
        selectedQuizId,
      };
    },
    clearQuiz(state) {
      return {
        ...state,
        quiz: {},
        selectedQuizId: null,
        currentStep: 1,
      };
    },
    setCurrentStep(state, { payload: currentStep }) {
      return {
        ...state,
        currentStep,
      };
    },
    saveFeedback(state, { payload: { problemsIndex, feedback } }) {
      const nextState = produce(state, (draftState) => {
        // eslint-disable-next-line no-param-reassign
        draftState.quiz.problems[problemsIndex].feedback = feedback;
      });
      return nextState;
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
  setQuiz,
  setSelectedQuizId,
  clearQuiz,
  setCurrentStep,
  saveFeedback,
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

export function loadQuiz() {
  return async (dispatch, getState) => {
    const { selectedQuizId } = getState();

    const quiz = await fetchQuiz({ id: selectedQuizId });

    if (_.isEmpty(quiz)) dispatch(setQuiz({}));
    else dispatch(setQuiz(quiz));
  };
}

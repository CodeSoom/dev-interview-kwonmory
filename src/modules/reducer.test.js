import configureStore from 'redux-mock-store';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer,
{
  setAccessToken,
  setInterviewQuestions,
  clearInterviewQuestions,
  setInterviewCategories,
  setCheckedCategories,
  setInterviews,
  loadInterviews,
  loadInterviewQuestions,
  loadInterviewCategories,
} from './reducer';

import interviewQuestions from '../../fixtures/interview-questions';
import interviewCategories from '../../fixtures/interview-categories';

const mockStore = configureStore([...getDefaultMiddleware()]);

describe('reducer', () => {
  let store;
  const initialState = {
    interview: {
      questions: [],
      categories: [],
    },
    interviews: [],
    accessToken: '',
  };

  context('without state', () => {
    it('returns inistialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setAccessToken', () => {
    it('returns accessToken', () => {
      const ACCESS_TOKEN = 'ACCESS_TOKEN';

      const state = reducer(initialState, setAccessToken(ACCESS_TOKEN));

      expect(state.accessToken).toBe(ACCESS_TOKEN);
    });
  });

  describe('setInterviewQuestions', () => {
    const state = reducer(initialState, setInterviewQuestions(interviewQuestions));

    expect(state.interview.questions).toEqual(interviewQuestions);
  });

  describe('clearInterviewQuestions', () => {
    const state = reducer(initialState, clearInterviewQuestions());

    expect(state.interview.questions).toEqual([]);
  });

  describe('setInterviewCategories', () => {
    const state = reducer(initialState, setInterviewCategories(interviewCategories));

    expect(state.interview.categories).toEqual(interviewCategories);
  });

  describe('setCheckedCategories', () => {
    const categories = ['name'];
    const state = reducer(initialState, setCheckedCategories(categories));

    expect(state.interview.checkedCategories).toEqual(categories);
  });

  describe('setInterviews', () => {
    const interviews = [{
      id: 1,
      title: '인터뷰에 도전하라',
    }];

    const state = reducer(initialState, setInterviews(interviews));

    expect(state.interviews).toEqual(interviews);
  });

  describe('loadCategories', () => {
    beforeEach(() => {
      store = mockStore({
        interview: {
          categories: [],
        },
      });
      fetch.mockResponseOnce(JSON.stringify([]));
    });

    it('dispatchs setInterviewCategories', async () => {
      await store.dispatch(loadInterviewCategories());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setInterviewCategories([]));
    });
  });

  describe('loadInterviewQuestions', () => {
    beforeEach(() => {
      store = mockStore({
        interview: {
          questions: [],
        },
      });
      fetch.mockResponseOnce(JSON.stringify([]));
    });

    it('dispatchs clearInterviewQuestions and setInterviewQuestions', async () => {
      await store.dispatch(loadInterviewQuestions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(clearInterviewQuestions());
      expect(actions[1]).toEqual(setInterviewQuestions([]));
    });
  });

  describe('loadInterviews', () => {
    beforeEach(() => {
      store = mockStore({
        interviews: [],
      });
      fetch.mockResponseOnce(JSON.stringify([]));
    });

    it('dispatchs setInterviews', async () => {
      await store.dispatch(loadInterviews());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setInterviews([]));
    });
  });
});

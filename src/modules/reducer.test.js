import configureStore from 'redux-mock-store';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer,
{
  setAccessToken,
  setInterviewQuestions,
  clearInterviewQuestions,
  loadQuestions,
} from './reducer';

import interviewQuestions from '../../fixtures/interview-questions';

const mockStore = configureStore([...getDefaultMiddleware()]);

describe('reducer', () => {
  let store;

  const initialState = {
    accessToken: given.accessToken || '',
    interview: {
      questions: [],
    },
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

  describe('loadQuestions', () => {
    beforeEach(() => {
      store = mockStore({
        interview: {
          questions: [],
        },
      });
      fetch.mockResponseOnce(JSON.stringify([]));
    });

    it('dispatchs clearInterviewQuestions and setInterviewQuestions', async () => {
      await store.dispatch(loadQuestions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(clearInterviewQuestions());
      expect(actions[1]).toEqual(setInterviewQuestions([]));
    });
  });
});

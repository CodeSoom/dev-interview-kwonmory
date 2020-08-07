import configureStore from 'redux-mock-store';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer,
{
  setAccessToken,
  setInterviewQuestions,
  clearInterviewQuestions,
  setInterviewParts,
  loadQuestions,
  loadParts,
} from './reducer';

import interviewQuestions from '../../fixtures/interview-questions';
import interviewParts from '../../fixtures/parts';

const mockStore = configureStore([...getDefaultMiddleware()]);

describe('reducer', () => {
  let store;

  const initialState = {
    accessToken: given.accessToken || '',
    interview: {
      questions: [],
      parts: [],
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

  describe('setInterviewParts', () => {
    const state = reducer(initialState, setInterviewParts(interviewParts));

    expect(state.interview.parts).toEqual(interviewParts);
  });

  describe('loadParts', () => {
    beforeEach(() => {
      store = mockStore({
        interview: {
          parts: [],
        },
      });
      fetch.mockResponseOnce(JSON.stringify([]));
    });

    it('dispatchs setInterviewParts', async () => {
      await store.dispatch(loadParts());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setInterviewParts([]));
    });
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

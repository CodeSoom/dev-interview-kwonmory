import configureStore from 'redux-mock-store';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer,
{
  clearInterviewQuestions,
  setAccessToken,
  setInterviewQuestions,
  setInterviewCategories,
  setCheckedCategories,
  setInterviews,
  setQuiz,
  loadInterviews,
  loadInterviewQuestions,
  loadInterviewCategories,
  loadQuiz,
  setSelectedQuizId,
} from './reducer';

import mockInterviewQuestions from '../../fixtures/interview-questions';
import mockInterviewCategories from '../../fixtures/interview-categories';
import mockQuiz from '../../fixtures/quiz';

const mockStore = configureStore([...getDefaultMiddleware()]);

describe('reducer', () => {
  let store;
  const initialState = {
    interview: {
      questions: [],
      categories: [],
    },
    interviews: [],
    selectedQuizId: null,
    quiz: {},
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
    const state = reducer(initialState, setInterviewQuestions(mockInterviewQuestions));

    expect(state.interview.questions).toEqual(mockInterviewQuestions);
  });

  describe('clearInterviewQuestions', () => {
    const state = reducer(initialState, clearInterviewQuestions());

    expect(state.interview.questions).toEqual([]);
  });

  describe('setInterviewCategories', () => {
    const state = reducer(initialState, setInterviewCategories(mockInterviewCategories));

    expect(state.interview.categories).toEqual(mockInterviewCategories);
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

  describe('setQuiz', () => {
    const quiz = [
      {
        id: 1,
        title: 'what',
      },
    ];
    const state = reducer(initialState, setQuiz(quiz));

    expect(state.quiz).toEqual(quiz);
  });

  describe('setSelectedQuizId', () => {
    const id = 1;

    const state = reducer(initialState, setSelectedQuizId(id));

    expect(state.selectedQuizId).toBe(id);
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

  describe('loadQuiz', () => {
    beforeEach(() => {
      store = mockStore({
        quiz: {},
        selectedQuizId: given.selectedQuizId || null,
      });
    });

    context('with selectedQuizId', () => {
      beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify(mockQuiz));
      });

      const SELECTED_QUIZ_ID = 1;
      given('selectedQuizId', () => SELECTED_QUIZ_ID);

      it('dispatchs setQuiz', async () => {
        await store.dispatch(loadQuiz());

        const actions = store.getActions();

        expect(actions[0])
          .toEqual(setQuiz(mockQuiz));
      });
    });
    context('without selectedQuizId', () => {
      beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify(null));
      });

      const SELECTED_QUIZ_ID = null;
      given('selectedQuizId', () => SELECTED_QUIZ_ID);

      it('not dispatch setQuiz', async () => {
        await store.dispatch(loadQuiz());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setQuiz({}));
      });
    });
  });
});

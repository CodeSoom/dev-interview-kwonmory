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
  clearQuiz,
  setCurrentStep,
  saveFeedback,
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
    currentStep: 1,
    accessToken: '',
  };

  context('without state', () => {
    it('returns initialState', () => {
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
    it('set interviews questions', () => {
      const state = reducer(initialState, setInterviewQuestions(mockInterviewQuestions));

      expect(state.interview.questions).toEqual(mockInterviewQuestions);
    });
  });

  describe('clearInterviewQuestions', () => {
    it('clear interviews questions', () => {
      const state = reducer(initialState, clearInterviewQuestions());

      expect(state.interview.questions).toEqual([]);
    });
  });

  describe('setInterviewCategories', () => {
    it('set interviews categories', () => {
      const state = reducer(initialState, setInterviewCategories(mockInterviewCategories));

      expect(state.interview.categories).toEqual(mockInterviewCategories);
    });
  });

  describe('setCheckedCategories', () => {
    it('set checked categories', () => {
      const categories = ['name'];
      const state = reducer(initialState, setCheckedCategories(categories));

      expect(state.interview.checkedCategories).toEqual(categories);
    });
  });

  describe('setInterviews', () => {
    it('set interviews', () => {
      const interviews = [{
        id: 1,
        title: '인터뷰에 도전하라',
      }];

      const state = reducer(initialState, setInterviews(interviews));

      expect(state.interviews).toEqual(interviews);
    });
  });

  describe('setQuiz', () => {
    it('set quiz', () => {
      const quiz = [
        {
          id: 1,
          title: 'what',
        },
      ];
      const state = reducer(initialState, setQuiz(quiz));

      expect(state.quiz).toEqual(quiz);
    });
  });

  describe('setSelectedQuizId', () => {
    it('set selected quiz id', () => {
      const id = 1;

      const state = reducer(initialState, setSelectedQuizId(id));

      expect(state.selectedQuizId).toBe(id);
    });
  });

  describe('clearQuiz', () => {
    it('clear quiz', () => {
      const state = reducer(initialState, clearQuiz());

      expect(state.selectedQuizId).toBe(null);
      expect(state.quiz).toEqual({});
    });
  });

  describe('setCurrentStep', () => {
    it('set current quiz step', () => {
      const SECOND_STEP = 2;
      const state = reducer(initialState, setCurrentStep(SECOND_STEP));

      expect(state.currentStep).toBe(2);
    });
  });

  describe('saveFeedback', () => {
    it('save feedback', () => {
      const FEED_BACK_TEXT = '나는 신이 될꺼야';
      const PROBLEMS_INDEX = 0;
      const customInitialState = {
        quiz: {
          problems: [
            {
              id: 1,
              title: '첫번째 퀴즈',
            },
          ],
        },
      };

      const state = reducer(
        customInitialState,
        saveFeedback({
          problemsIndex: PROBLEMS_INDEX,
          feedback: FEED_BACK_TEXT,
        }),
      );

      expect(state.quiz.problems[PROBLEMS_INDEX].feedback).toBe(FEED_BACK_TEXT);
    });
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

    it('dispatches setInterviewCategories', async () => {
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

    it('dispatches clearInterviewQuestions and setInterviewQuestions', async () => {
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

    it('dispatches setInterviews', async () => {
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

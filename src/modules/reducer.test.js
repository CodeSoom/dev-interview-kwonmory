import reducer,
{
  setAccessToken,
  setInterviewQuestions,
} from './reducer';

import interviewQuestions from '../../fixtures/interview-questions';

describe('reducer', () => {
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
});

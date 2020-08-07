import {
  fetchQuestions,
} from './api';

import interviewQuestions from '../../fixtures/interview-questions';

describe('api', () => {
  describe('fetchQuestions', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify(interviewQuestions));
    });

    it('returns questions', async () => {
      const questions = await fetchQuestions();

      expect(questions).toEqual(interviewQuestions);
    });
  });
});

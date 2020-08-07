import {
  fetchParts,
  fetchQuestions,
} from './api';

import interviewQuestions from '../../fixtures/interview-questions';
import interviewParts from '../../fixtures/parts';

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

  describe('fetchParts', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify(interviewParts));
    });

    it('returns questions', async () => {
      const parts = await fetchParts();

      expect(parts).toEqual(interviewParts);
    });
  });
});

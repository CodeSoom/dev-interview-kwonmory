import {
  fetchInterviewQuestions,
  fetchInterviewCategories,
} from './api';

import interviewQuestions from '../../fixtures/interview-questions';
import interviewCategories from '../../fixtures/interview-categories';

describe('api', () => {
  describe('fetchInterviewQuestions', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify(interviewQuestions));
    });

    it('returns questions', async () => {
      const questions = await fetchInterviewQuestions();

      expect(questions).toEqual(interviewQuestions);
    });
  });

  describe('fetchInterviewCategories', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify(interviewCategories));
    });

    it('returns questions', async () => {
      const categories = await fetchInterviewCategories();

      expect(categories).toEqual(interviewCategories);
    });
  });
});

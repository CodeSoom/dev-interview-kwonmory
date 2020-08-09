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

    context('with query data', () => {
      it('returns questions', async () => {
        const questions = await fetchInterviewQuestions();

        expect(questions).toEqual(interviewQuestions);
      });
    });

    context('without query data', () => {
      it('returns questions', async () => {
        const data = {
          checkedCategories: ['testItem'],
        };
        const questions = await fetchInterviewQuestions(data);

        expect(questions).toEqual(interviewQuestions);
      });
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

import {
  fetchInterviewQuestions,
  fetchInterviewCategories,
  fetchInterviews,
  request,
} from './api';

import mockInterviewQuestions from '../../fixtures/interview-questions';
import mockInterviewCategories from '../../fixtures/interview-categories';
import mockInterviews from '../../fixtures/interviews';

describe('api', () => {
  describe('request', () => {
    beforeEach(() => {
      fetch.mockReject(new Error('foo'));
    });

    context('when error network', () => {
      it('returns null', async () => {
        const requestResult = await request();

        expect(requestResult).toBeNull();
      });
    });
  });

  describe('fetchInterviewQuestions', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify(mockInterviewQuestions));
    });

    context('with query data', () => {
      it('returns questions', async () => {
        const questions = await fetchInterviewQuestions();

        expect(questions).toEqual(mockInterviewQuestions);
      });
    });

    context('without query data', () => {
      it('returns questions', async () => {
        const data = {
          checkedCategories: ['testItem'],
        };
        const questions = await fetchInterviewQuestions(data);

        expect(questions).toEqual(mockInterviewQuestions);
      });
    });
  });

  describe('fetchInterviewCategories', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify(mockInterviewCategories));
    });

    it('returns questions', async () => {
      const categories = await fetchInterviewCategories();

      expect(categories).toEqual(mockInterviewCategories);
    });
  });

  describe('fetchInterviews', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify(mockInterviews));
    });

    it('returns interviews', async () => {
      const interviews = await fetchInterviews();

      expect(interviews).toEqual(mockInterviews);
    });
  });
});

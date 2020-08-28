import {
  fetchInterviewQuestions,
  fetchInterviewCategories,
  fetchInterviews,
  fetchQuiz,
} from './api';

import mockInterviewQuestions from '../../fixtures/interview-questions';
import mockInterviewCategories from '../../fixtures/interview-categories';
import mockInterviews from '../../fixtures/interviews';
import mockQuiz from '../../fixtures/quiz';

describe('api', () => {
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

  describe('fetchQuiz', () => {
    const mockQuizData = mockQuiz.quiz;

    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify(mockQuizData));
    });

    it('returns quiz', async () => {
      const FIRST_INTERVIEWS = 1;

      const quiz = await fetchQuiz({ id: FIRST_INTERVIEWS });

      expect(quiz).toEqual(mockQuizData);
    });
  });
});
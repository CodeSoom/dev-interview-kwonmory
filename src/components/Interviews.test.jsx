import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import mockInterview from '../../fixtures/interviews';

import Interviews from './Interviews';

function renderInterviews({ interviews }) {
  return render(<MemoryRouter><Interviews interviews={interviews} /></MemoryRouter>);
}

describe('Interviews', () => {
  context('with interviews', () => {
    it('renders interviews', () => {
      const interviews = mockInterview;
      const interviewsTitles = ['주니어 프론트엔드 개발자라면!',
        '주니어 백엔드 개발자를 위한 인터뷰',
        '기초 자바스크립트에 대해서 얼마나 아시나요?'];
      const interviewsTags = ['frontend', 'junior', 'backend', 'javascript', 'lang'];

      const { container } = renderInterviews({ interviews });

      expect(container).not.toHaveTextContent('인터뷰 리스트가 없습니다');

      interviewsTitles.forEach((title) => {
        expect(container).toHaveTextContent(title);
      });

      interviewsTags.forEach((tag) => {
        expect(container).toHaveTextContent(tag);
      });
    });
  });

  context('without interviews', () => {
    it('renders empty message in the interview page', () => {
      const interviews = [];
      const { container } = renderInterviews({ interviews });

      expect(container).toHaveTextContent('인터뷰 리스트가 없습니다');
    });
  });
});

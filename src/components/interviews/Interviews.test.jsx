import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import mockInterview from '../../../fixtures/interviews';

import Interviews from './Interviews';

function renderInterviews({ interviews, button }) {
  return render(
    <MemoryRouter>
      <Interviews
        interviews={interviews}
        onStartButton={button}
      />
    </MemoryRouter>,
  );
}

describe('Interviews', () => {
  context('with interviews', () => {
    it('renders interviews', () => {
      const interviews = mockInterview;

      const { container } = renderInterviews({ interviews });

      expect(container).not.toHaveTextContent('인터뷰 리스트가 없습니다');

      mockInterview.forEach((interview) => {
        expect(container).toHaveTextContent(interview.title);
        interview.tags.forEach((tag) => {
          expect(container).toHaveTextContent(tag.title);
        });
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

  context('when click "도전하기" button', () => {
    it('calls button event', () => {
      const interviews = mockInterview;
      const button = jest.fn();

      const { getAllByText } = renderInterviews({ interviews, button });

      expect(getAllByText('도전하기')[0]).not.toBeNull();

      fireEvent.click(getAllByText('도전하기')[0]);

      expect(button).toBeCalled();
    });
  });
});

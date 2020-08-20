import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import InterviewsPage from './InterviewsPage';

import mockInterviews from '../../fixtures/interviews';

jest.mock('react-redux');

function renderInterviewsPage() {
  return render(<MemoryRouter><InterviewsPage /></MemoryRouter>);
}
describe('InterviewsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      interviews: given.interviews || [],
    }));
  });

  it('calls interviews data', () => {
    renderInterviewsPage();

    expect(dispatch).toBeCalled();
  });

  context('with interviews', () => {
    it('renders interviews', () => {
      given('interviews', () => mockInterviews);
      const { container } = renderInterviewsPage();

      expect(container).not.toHaveTextContent('인터뷰 리스트가 없습니다');
    });
  });

  context('without interviews', () => {
    it('renders empty message in the interview page', () => {
      const { container } = renderInterviewsPage();

      expect(container).toHaveTextContent('인터뷰 리스트가 없습니다');
    });
  });
});

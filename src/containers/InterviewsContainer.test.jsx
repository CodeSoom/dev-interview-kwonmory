import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import InterviewsContainer from './InterviewsContainer';

import mockInterviews from '../../fixtures/interviews';

function renderInterviewsContainer() {
  return render(<MemoryRouter><InterviewsContainer /></MemoryRouter>);
}

jest.mock('react-redux');

describe('InterviewsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      interviews: given.interviews || [],
    }));
  });

  it('calls interviews data', () => {
    renderInterviewsContainer();

    expect(dispatch).toBeCalled();
  });

  context('with interviews', () => {
    it('renders interviews', () => {
      given('interviews', () => mockInterviews);
      const { container } = renderInterviewsContainer();

      expect(container).not.toHaveTextContent('인터뷰 리스트가 없습니다');
    });
  });

  context('without interviews', () => {
    it('renders empty message in the interview page', () => {
      const { container } = renderInterviewsContainer();

      expect(container).toHaveTextContent('인터뷰 리스트가 없습니다');
    });
  });
});

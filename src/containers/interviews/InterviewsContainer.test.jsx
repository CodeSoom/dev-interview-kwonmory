import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import InterviewsContainer from './InterviewsContainer';

import mockInterview from '../../../fixtures/interviews';

import { setSelectedQuizId } from '../../modules/reducer';

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

    expect(dispatch).toBeCalledTimes(2);
  });

  context('when click "도전하기" button', () => {
    given('interviews', () => mockInterview);

    it('dispatches setSelectedQuizId', async () => {
      const { container, getByText } = renderInterviewsContainer();

      fireEvent.click(container.querySelector('button'));
      fireEvent.click(getByText('해볼래요'));

      expect.assertions(1);

      await expect(dispatch).toBeCalledWith(setSelectedQuizId(1));
    });
  });
});

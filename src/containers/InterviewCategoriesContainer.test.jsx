import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import interviewCateogries from '../../fixtures/interview-categories';

import InterviewCategoriesContainer from './InterviewCategoriesContainer';

function renderInterviewCategoriesContainer() {
  return render(
    <MemoryRouter>
      <InterviewCategoriesContainer />
    </MemoryRouter>,
  );
}

jest.mock('react-redux');

describe('InterviewCategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      interview: {
        categories: given.categories || [],
      },
    }));

    given('categories', () => interviewCateogries);
  });

  it('renders InterviewCateogries', () => {
    renderInterviewCategoriesContainer();

    expect(dispatch).toHaveBeenCalled();
  });

  context('when check the checkbox', () => {
    it('listens checkbox change event', () => {
      const { container } = renderInterviewCategoriesContainer();

      expect(container.querySelector('input[name="FrontEnd"]').checked).toEqual(false);

      fireEvent.click(container.querySelector('input[name="FrontEnd"]'));

      expect(container.querySelector('input[name="FrontEnd"]').checked).toEqual(true);
      expect(dispatch).toBeCalledTimes(3);
    });
  });
});

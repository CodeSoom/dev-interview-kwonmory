import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import interviewParts from '../../fixtures/parts';

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
  /*
    1. 카테고리 이름들이 나와야함
    2. 카테고리에 있는 상태를 가지고 와서 출력해줘야함
    3. 카테고리는 체크 박스로 선택이 가능해야함
    4. 체크 박스를 선택했을 때, 페이지랑 연결되어야함
    5. 체크 박스 선택시 props로 넘겨서 이벤트를 발생 시켜야함
  */

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      interview: {
        parts: interviewParts,
      },
    }));
  });

  it('renders InterviewCateogries', () => {
    const { container } = renderInterviewCategoriesContainer();

    expect(container).toHaveTextContent('ComputerScience');
    expect(container).toHaveTextContent('Language');
    expect(container).toHaveTextContent('분야별');

    expect(container).toHaveTextContent('Database');
    expect(container).toHaveTextContent('Javascript');
    expect(container).toHaveTextContent('FrontEnd');
  });

  context('when check the checkbox', () => {
    it('listens checkbox change event', () => {
      const { container } = renderInterviewCategoriesContainer();

      expect(container.querySelector('input[name="FrontEnd"]').checked).toEqual(false);

      fireEvent.click(container.querySelector('input[name="FrontEnd"]'));

      expect(container.querySelector('input[name="FrontEnd"]').checked).toEqual(true);
    });
  });
});

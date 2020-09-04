import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import InterviewsFinish from './InterviewsFinish';

describe('InterviewFinish', () => {
  context('when click "모든 피드백 보기" button', () => {
    it('calls "다음으로 이동하는" method', () => {
      const onMoveNext = jest.fn();

      const { getByText } = render(<InterviewsFinish onMoveNext={onMoveNext} />);

      fireEvent.click(getByText('모든 피드백 보기'));

      expect(onMoveNext).toBeCalled();
    });
  });
});

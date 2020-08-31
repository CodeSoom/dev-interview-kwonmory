import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InterviewsCheck from './InterviewsCheck';

describe('InterviewsCheck', () => {
  it('renders InterviewsCheck', () => {
    const problems = [{
      id: 1,
      title: 'title',
      feedback: 'feedback1',
    }];

    const { container } = render(<InterviewsCheck problems={problems} />);

    expect(container).toHaveTextContent(problems[0].title);
    expect(container).toHaveTextContent(problems[0].feedback);
  });
  context('when click "처음으로" button', () => {
    it('calls move method', () => {
      const handleMoveInterviewsPage = jest.fn();
      const { getByText } = render(
        <InterviewsCheck
          onMoveInterviewsPage={handleMoveInterviewsPage}
        />,
      );

      fireEvent.click(getByText('처음으로'));

      expect(handleMoveInterviewsPage).toBeCalled();
    });
  });
});

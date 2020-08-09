import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import InterviewPracticePage from './InterviewPracticePage';

jest.mock('react-redux');

function renderInterviewListPage() {
  return render(
    <MemoryRouter>
      <InterviewPracticePage />
    </MemoryRouter>,
  );
}

describe('InterviewQuestionPage', () => {
  it('renders InterviewPracticePage ', () => {
    renderInterviewListPage();
  });
});

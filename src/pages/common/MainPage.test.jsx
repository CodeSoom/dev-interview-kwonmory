import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import MainPage from './MainPage';

describe('MainPage', () => {
  it('redners Mainpage', () => {
    render(<MemoryRouter><MainPage /></MemoryRouter>);
    // 테스트할 부분이 없음
    // E2E 테스트로
  });
});

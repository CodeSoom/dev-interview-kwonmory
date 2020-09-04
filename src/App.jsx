import React from 'react';

import styled from '@emotion/styled';

import { Switch, Route } from 'react-router-dom';

import MainPage from './pages/common/MainPage';
import InterviewPracticePage from './pages/practice/InterviewPracticePage';
import NotFoundPage from './pages/common/NotFoundPage';

import InterviewsPage from './pages/interviews/InterviewsPage';
import InterviewsIntroPage from './pages/interviews/InterviewsIntroPage';
import InterviewsProblemPage from './pages/interviews/InterviewsProblemPage';
import InterviewsFeedBackPage from './pages/interviews/InterviewsFeedBackPage';
import InterviewsFinishPage from './pages/interviews/InterviewsFinishPage';
import InterviewsCheckPage from './pages/interviews/InterviewsCheckPage';

const Wrapper = styled.div({
  // empty
});

const App = () => (
  <>
    <Wrapper>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/interviews" component={InterviewsPage} />
        <Route exact path="/interviews/practice" component={InterviewPracticePage} />
        <Route exact path="/interviews/quiz" component={InterviewsIntroPage} />
        <Route exact path="/interviews/quiz/problem" component={InterviewsProblemPage} />
        <Route exact path="/interviews/quiz/problem/feedback" component={InterviewsFeedBackPage} />
        <Route exact path="/interviews/quiz/problem/finish" component={InterviewsFinishPage} />
        <Route exact path="/interviews/quiz/problem/check" component={InterviewsCheckPage} />
        <Route exact component={NotFoundPage} />
      </Switch>
    </Wrapper>
  </>
);

export default App;

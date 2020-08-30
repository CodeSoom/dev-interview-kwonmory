import React from 'react';

import styled from '@emotion/styled';

import { Switch, Route } from 'react-router-dom';

import HeaderContainer from './containers/common/HeaderContainer';
import InterviewPracticePage from './pages/InterviewPracticePage';
import NotFoundPage from './pages/NotFoundPage';
import InterviewsPage from './pages/InterviewsPage';
import InterviewsIntroPage from './pages/InterviewsIntroPage';
import InterviewsProblemPage from './pages/InterviewsProblemPage';

const Wrapper = styled.div`
  //height: 100vh;
  /* background-image: linear-gradient(128deg, #6a80f8 6%, #4a65f6 91%); */
`;

const tempMainPage = () => (
  <>
    <HeaderContainer />
  </>
);

const App = () => (
  <>
    <Wrapper>
      <Switch>
        <Route exact path="/" component={tempMainPage} />
        <Route exact path="/interviews" component={InterviewsPage} />
        <Route exact path="/interviews/practice" component={InterviewPracticePage} />
        <Route exact path="/interviews/quiz" component={InterviewsIntroPage} />
        <Route exact path="/interviews/quiz/problem" component={InterviewsProblemPage} />
        <Route exact component={NotFoundPage} />
      </Switch>
    </Wrapper>
  </>
);

export default App;

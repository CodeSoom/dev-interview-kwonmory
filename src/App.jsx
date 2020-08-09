import React from 'react';

import styled from '@emotion/styled';

import { Switch, Route } from 'react-router-dom';

import HeaderContainer from './containers/common/HeaderContainer';
import InterviewPracticePage from './pages/InterviewPracticePage';

const Wrapper = styled.div`
  height: 100vh;
  /* background-image: linear-gradient(128deg, #6a80f8 6%, #4a65f6 91%); */
`;

const tempMainPage = () => (<></>);

const App = () => (
  <>
    <Wrapper>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={tempMainPage} />
        <Route exact path="/interviews/practice" component={InterviewPracticePage} />
      </Switch>
    </Wrapper>
  </>
);

export default App;

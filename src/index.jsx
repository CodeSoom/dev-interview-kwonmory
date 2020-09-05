import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import './css/react-transitions.css';

import ReactGA from 'react-ga';

import store from './modules/store';

import App from './App';

ReactGA.initialize('UA-151248860-3');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter basename={process?.env.PUBLIC_PATH || '/'}>
        <div className="transition-container fade-in">
          <App />
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);

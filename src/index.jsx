import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import './css/react-transitions.css';

import store from './modules/store';

import App from './App';

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

// <reference path='../custom.d.ts'/>
import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './scss/style.scss';
import { App } from './App';
require('dotenv').config();

const history = createHistory({
  basename: process.env.PUBLIC_URL,
});

render(
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);

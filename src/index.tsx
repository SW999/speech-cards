// <reference path='../custom.d.ts'/>
import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/style.scss';
import { App } from './App';

render(
  <Router basename="/speech-cards">
    <App />
  </Router>,
  document.getElementById('app')
);

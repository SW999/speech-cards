// <reference path='../custom.d.ts'/>
import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './scss/style.scss';
import { App } from './App';

render(
  <HashRouter basename="/">
    <App />
  </HashRouter>,
  document.getElementById('app')
);

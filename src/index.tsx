// <reference path='../custom.d.ts'/>
import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './scss/style.scss';
import { App } from './App';
require('dotenv').config();

render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);

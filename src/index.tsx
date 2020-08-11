// <reference path='../index.d.ts'/>
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './scss/style.scss';
import App from './App';

render(
  <BrowserRouter basename="/speech-cards">
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);

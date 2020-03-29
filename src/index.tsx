/* tslint:disable:import-name */
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { checkTouch, addSwipeEvent } from './utils/';
import './scss/style.scss';
import { Card } from './components/pages/card/Card';
import { Header } from './components/header/Header';
import { ShowSpeech } from './components/pages/show-speech/ShowSpeech';
import { CreateNew } from './components/pages/create-new/CreateNew';
import demo from './how_to_write_efficient_emails.json';

const App: FunctionComponent = () => {
  useEffect(() => {
    if (checkTouch()) {
      const touch = addSwipeEvent();

      for (const swipeEvent in touch) {
        document.addEventListener(swipeEvent, touch[swipeEvent], false);
      }

      return () => {
        for (const swipeEvent in touch) {
          document.removeEventListener(swipeEvent, touch[swipeEvent], false);
        }
      };
    }
  }, []);

  return (
    <Router basename="/">
      <Header />
      <main>
        <Route exact path="/">
          <h1>Simple speech cards</h1>
          <h2>How it works?</h2>
          <p>Description here</p>
        </Route>
        <Route path="/demo">
          <Card {...demo} />
        </Route>
        <Route path="/show-speech" component={ShowSpeech} />
        <Route path="/new" component={CreateNew} />
      </main>
    </Router>
  );
};

render(<App />, document.getElementById('app'));

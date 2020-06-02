// <reference path='../custom.d.ts'/>
import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { render } from 'react-dom';
import { Route, Link, HashRouter } from 'react-router-dom';
import { isMobileDevice, addSwipeEvent } from './utils/';
import './scss/style.scss';
import { Card } from './components/pages/card/Card';
import { Header } from './components/header/Header';
import { ShowSpeech } from './components/pages/show-speech/ShowSpeech';
import { CreateNew } from './components/pages/create-new/CreateNew';
import demo from './how_to_write_efficient_emails.json';
import github from './img/github.svg';

const App: FunctionComponent = () => {
  useEffect(() => {
    if (isMobileDevice()) {
      const touch = addSwipeEvent();

      for (const swipeEvent in touch) {
        document.addEventListener(swipeEvent, touch[swipeEvent], false);
      }

      return (): void => {
        for (const swipeEvent in touch) {
          document.removeEventListener(swipeEvent, touch[swipeEvent], false);
        }
      };
    }
  }, []);

  return (
    <HashRouter basename="/">
      <Header />
      <main>
        <Route exact path="/">
          <h1>Simple speech cards</h1>
          <h2>How it works?</h2>
          <p>
            After you have prepared well your speech, you may need a little
            helper in order not to lose the thread and be more confident.
          </p>
          <p>
            You may prepare such helper in some pieces of paper by pen or using
            this simple app.
          </p>
          <p>This app has some advantages:</p>
          <ul className="advantages">
            <li>
              - could be easily used on a mobile device to{' '}
              <Link to="/new">create</Link>, store and{' '}
              <Link to="/demo">use speech cards</Link>.
            </li>
            <li>
              - no way to lose or forget{' '}
              <Link to="/show-speech">your speech cards</Link>, because your
              mobile device is always with you. Am I right?
            </li>
            <li>
              - you may easily share prepared speech cards in JSON format with
              someone or to open it in a different device.
            </li>
          </ul>

          <h3>Tips</h3>
          <ul>
            <li>- Each card should be as simple as possible,</li>
            <li>- Should contain short clear heading,</li>
            <li>- Should contain main idea/ideas of current part of speech.</li>
          </ul>
        </Route>
        <Route path="/demo">
          <Card {...demo} />
        </Route>
        <Route path="/show-speech" component={ShowSpeech} />
        <Route path="/new" component={CreateNew} />
      </main>
      <Route exact path="/">
        <div className="footer">
          <a
            href="https://github.com/SW999/speech-cards"
            rel="nofollow"
            title="Github page"
          >
            <img src={github} alt="github" width="24" height="24" />
          </a>{' '}
          © SW999 2020
        </div>
      </Route>
    </HashRouter>
  );
};

render(<App />, document.getElementById('app'));

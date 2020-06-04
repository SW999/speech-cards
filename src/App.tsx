import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { isMobileDevice, addSwipeEvent } from './utils/';
import { Card } from './components/pages/card/Card';
import { Header } from './components/header/Header';
import { MySpeeches } from './components/pages/my-speeches/MySpeeches';
import { CreateNew } from './components/pages/create-new/CreateNew';
import { NoMatch } from './components/pages/no-match/NoMatch';
import demo from './how_to_write_efficient_emails.json';
import github from './img/github.svg';

export const App: FunctionComponent = () => {
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
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <h1>Simple speech cards</h1>
            <h2>How it works?</h2>
            <p>
              After you have prepared well your speech, you may need a little
              helper in order not to lose the thread and be more confident.
            </p>
            <p>
              You may prepare such helper in some pieces of paper by pen or
              using this simple app.
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
                <Link to="/my-speeches">your speech cards</Link>, because your
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
              <li>
                - Should contain main idea/ideas of current part of speech.
              </li>
            </ul>
          </Route>
          <Route exact path="/demo">
            <Card {...demo} />
          </Route>
          <Route exact path="/my-speeches" component={MySpeeches} />
          <Route exact path="/new" component={CreateNew} />
          <Route component={NoMatch} />
        </Switch>
      </main>
      <Switch>
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
      </Switch>
    </>
  );
};

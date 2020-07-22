import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { isMobileDevice, addSwipeEvent } from './utils/';
import { Card } from './components/pages/card/Card';
import { Header } from './components/header/Header';
import { Home } from './components/pages/home/Home';
import { Footer } from './components/footer/Footer';
import { MySpeeches } from './components/pages/my-speeches/MySpeeches';
import { CreateNew } from './components/pages/create-new/CreateNew';
import { NoMatch } from './components/pages/no-match/NoMatch';
import demo from './how_to_write_efficient_emails.json';

export const App: FunctionComponent = () => {
  useEffect(() => {
    if (isMobileDevice()) {
      const touch = addSwipeEvent();

      Object.keys(touch).forEach(swipeEvent => {
        document.addEventListener(swipeEvent, touch[swipeEvent], false);
      });

      return (): void => {
        Object.keys(touch).forEach(swipeEvent => {
          document.removeEventListener(swipeEvent, touch[swipeEvent], false);
        });
      };
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/demo">
            <Card {...demo} />
          </Route>
          <Route path="/my-speeches" component={MySpeeches} />
          <Route
            path="/new"
            render={(props): React.ReactNode => <CreateNew {...props} />}
          />
          <Route path="*" exact component={NoMatch} />
        </Switch>
      </main>
      <Switch>
        <Route exact path="/" component={Footer} />
      </Switch>
    </>
  );
};

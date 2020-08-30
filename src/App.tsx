import React, { FunctionComponent, useEffect, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { isMobileDevice, addSwipeEvent } from './utils';
import Header from './components/header/Header';
import WithLoader from './components/with-loader/WithLoader';

const Card = lazy(() => import('./components/card/Card'));
const CreateNew = lazy(() => import('./pages/create-new/CreateNew'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Home = lazy(() => import('./pages/home/Home'));
const MySpeeches = lazy(() => import('./pages/my-speeches/MySpeeches'));
const PageNotFound = lazy(() => import('./pages/page-not-found/PageNotFound'));
const Theme = lazy(() => import('./pages/theme/Theme'));

const App: FunctionComponent = () => {
  useEffect(() => {
    if (isMobileDevice()) {
      const touch = addSwipeEvent();

      Object.keys(touch).forEach(swipeEvent => {
        document.addEventListener(swipeEvent, touch[swipeEvent], false);
      });

      return () => {
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
          <Route exact path="/" component={WithLoader({ component: Home })} />
          <Route
            path="/demo"
            component={props => WithLoader({ component: Card })(props)}
          />
          <Route
            path="/my-speeches"
            component={WithLoader({ component: MySpeeches })}
          />
          <Route
            path="/new"
            component={props => WithLoader({ component: CreateNew })(props)}
          />
          <Route path="/theme" component={WithLoader({ component: Theme })} />
          <Route component={WithLoader({ component: PageNotFound })} />
        </Switch>
      </main>
      <Switch>
        <Route
          exact
          path="/"
          component={WithLoader({ component: Footer, onlyText: true })}
        />
      </Switch>
    </>
  );
};

export default App;

import React, { FunctionComponent, useEffect, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { isMobileDevice, addSwipeEvent } from './utils/';
import Header from './components/header/Header';
import demo from './how_to_write_efficient_emails.json';
import WithLoading from './components/with-loading/WithLoading';

const Card = lazy(() => import('./components/pages/card/Card'));
const CreateNew = lazy(() => import('./components/pages/create-new/CreateNew'));
const Footer = lazy(() => import('./components/footer/Footer'));
const Home = lazy(() => import('./components/pages/home/Home'));
const MySpeeches = lazy(() =>
  import('./components/pages/my-speeches/MySpeeches')
);
const PageNotFound = lazy(() =>
  import('./components/pages/page-not-found/PageNotFound')
);
const Theme = lazy(() => import('./components/pages/theme/Theme'));

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
          <Route exact path="/" component={WithLoading({ component: Home })} />
          <Route
            path="/demo"
            component={WithLoading({ component: Card, ...demo })}
          />
          <Route
            path="/my-speeches"
            component={WithLoading({ component: MySpeeches })}
          />
          <Route
            path="/new"
            component={props => WithLoading({ component: CreateNew })(props)}
          />
          <Route path="/theme" component={WithLoading({ component: Theme })} />
          <Route component={WithLoading({ component: PageNotFound })} />
        </Switch>
      </main>
      <Switch>
        <Route exact path="/" component={WithLoading({ component: Footer })} />
      </Switch>
    </>
  );
};

export default App;

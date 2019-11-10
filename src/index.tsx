import * as React from 'react';
import { FunctionComponent } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { downloadFile } from './utils';
import './scss/style.scss';
import { Demo } from './components/Demo';
import { ProjectStorage } from './components/ProjectStorage';
import { ProjectJSON } from './components/ProjectJSON';
import { CreateNew } from './components/CreateNew';

const myData = {
  name: ' Новый проект!!',
  speech: {
    page1: {
      title: 'Page 1',
      content: 'Some content for First page',
    },
  },
};

const App: FunctionComponent = () => {
  const saveToJSON = () => downloadFile(myData, myData.name);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/demo">Demo</Link> |
        <Link to="/from-storage">Open from local storage</Link> |
        <Link to="/from-json">Open from saved JSON</Link> |
        <Link to="/new">Create new</Link>
      </nav>
      <hr/>
      <Switch>
        <Route exact path="/">
          <h1>Simple speech cards</h1>
          <h2>How it works?</h2>
          <p>Some text</p>
        </Route>
        <Route path="/demo">
          <Demo/>
        </Route>
        <Route path="/from-storage">
          <ProjectStorage/>
        </Route>
        <Route path="/from-json">
          <ProjectJSON/>
        </Route>
        <Route path="/new">
          <CreateNew/>
        </Route>
      </Switch>
      <br/>
      <button className="btn btn-green" type="button" onClick={saveToJSON}>Save data as JSON</button>
    </Router>
  );
};

render(
  <App/>,
  document.getElementById('app'),
);

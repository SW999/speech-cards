import * as React from 'react';
import { FunctionComponent } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { downloadFile } from './utils';
import './scss/style.scss';
import { Demo } from './components/Demo';
import { Header } from './components/Header';
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
    <Router basename="/">
      <Header />
      <main>
        <Route exact path="/">
          <h1>Simple speech cards</h1>
          <h2>How it works?</h2>
          <p>Some text</p>
          <br />
          <button className="btn btn-green" type="button" onClick={saveToJSON}>
            Save data as JSON
          </button>
        </Route>
        <Route path="/demo" component={Demo} />
        <Route path="/from-storage" component={ProjectStorage} />
        <Route path="/from-json" component={ProjectJSON} />
        <Route path="/new" component={CreateNew} />
      </main>
    </Router>
  );
};

render(<App />, document.getElementById('app'));

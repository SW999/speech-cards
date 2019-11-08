import * as React from 'react';
import { FunctionComponent } from 'react';
import { render } from 'react-dom';
import { downloadFile } from './utils';
import './scss/style.scss';

const myData = {
  name: ' Новый проект!!',
  speech: {
    page1: {
      title: 'Page 1',
      content: 'Some content for First page'
    }
  }
};

const App: FunctionComponent = () => {
const saveToJSON = () => downloadFile(myData, myData.name);

  return (
    <>
      <h1>Hi there!</h1>
      <button className="btn btn-green" type="button" onClick={saveToJSON}>Save data as JSON</button>
    </>
  );
};

render(
  <App />,
  document.getElementById('app')
);

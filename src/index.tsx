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
      <h1>Simple speech cards</h1>
      <p>Now You can:
        <button className="btn btn-yellow" type="button" onClick={() => {}}>Check a demo project</button>
        <button className="btn btn-blue" type="button" onClick={() => {}}>Open an existing project from local storage</button>
        <button className="btn btn-blue" type="button" onClick={() => {}}>Load saved JSON file</button>
        <button className="btn btn-green" type="button" onClick={() => {}}>Create a new project</button>
</p>
      <br/>
      <button className="btn btn-green" type="button" onClick={saveToJSON}>Save data as JSON</button>
    </>
  );
};

render(
  <App />,
  document.getElementById('app')
);

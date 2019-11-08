import * as React from 'react';
import { FunctionComponent } from 'react';
import { render } from 'react-dom';
import './scss/style.scss';

const myData = {
  name: ' Some project ',
  speech: {
    page1: {
      title: 'Page 1',
      content: 'Some content for First page'
    }
  }
};

const App: FunctionComponent = () => {
  const downloadFile = async () => {
    const fileName = ((myData.name).trim()).replace(/ /g,'_').toLowerCase();
    const json = JSON.stringify(myData);
    const blob = new Blob([json],{type:'application/json'});
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <h1>Hi there!</h1>
      <button className="btn btn-green" type="button" onClick={downloadFile}>Save data as JSON</button>
    </>
  );
};

render(
  <App />,
  document.getElementById('app')
);

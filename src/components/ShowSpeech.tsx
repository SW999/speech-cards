import * as React from 'react';
import { FunctionComponent } from 'react';
import {
  getSpeechNamesFromStorage,
  doSpeechNameReadable,
  //readFromStorage,
} from '../utils';

export const ShowSpeech: FunctionComponent = () => {
  const speechesFromStorage = getSpeechNamesFromStorage();
  const speechesList = (): JSX.Element => {
    // TODO: add an event listener on click and styles
    if (speechesFromStorage.length > 0) {
      return (
        <>
          <h3>From browser local storage:</h3>
          <ul>
            {speechesFromStorage.map(name => (
              <li key={name} data-name={name}>
                <a href="#">{doSpeechNameReadable(name)}</a>
              </li>
            ))}
          </ul>
        </>
      );
    }

    return (
      <p>
        <strong>Not found.</strong>
      </p>
    );
  };

  return (
    <>
      <h2>Show speech</h2>
      <p>Select speech saved to local storage or download a JSON file.</p>
      {speechesList()}
    </>
  );
};

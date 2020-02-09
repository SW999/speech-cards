import * as React from 'react';
import { FunctionComponent, MouseEvent, useEffect, useState } from 'react';
import {
  getSpeechNamesFromStorage,
  doSpeechNameReadable,
  readFromStorage,
} from '../utils';
import { IState } from '../reducers';
import { Card } from './Card';

const speechesFromStorage = getSpeechNamesFromStorage();

export const ShowSpeech: FunctionComponent = () => {
  const [data, setData] = useState<IState | null>(null);
  const [speech, setSpeech] = useState<JSX.Element | null>(null);
  const openSpeech = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    const target = e.currentTarget;
    setData(() => readFromStorage(target.dataset.name));
  };

  const speechesList = (): JSX.Element => {
    if (speechesFromStorage.length > 0) {
      return (
        <>
          <h3>From browser local storage:</h3>
          <ul>
            {speechesFromStorage.map(name => (
              <li key={name} className="storage-item">
                <a href="#" data-name={name} onClick={openSpeech}>
                  {doSpeechNameReadable(name)}
                </a>
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

  useEffect(() => {
    setSpeech(() => {
      if (!data) {
        return null;
      }

      return <Card {...data} />;
    });
  }, [data]);

  if (speech) {
    return <>{speech}</>;
  }

  return (
    <>
      <h2>Show speech</h2>
      <p>Select a speech saved to local storage or download a JSON file.</p>
      {speechesList()}
    </>
  );
};

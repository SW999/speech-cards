import * as React from 'react';
import {
  ChangeEvent,
  FunctionComponent,
  MouseEvent,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import {
  getSpeechNamesFromStorage,
  doSpeechNameReadable,
  readFromStorage,
  validateJSON,
} from '../../../utils/';
import { IState } from '../../../types/';
import { Card } from '../card/Card';

export const MySpeeches: FunctionComponent = () => {
  const [data, setData] = useState<IState | null>(null);
  const [speech, setSpeech] = useState<ReactNode | null>(null);
  const [speechNames, setSpeechNames] = useState<string[]>([]);
  let fileReader;
  const openSpeech = (e: MouseEvent<HTMLButtonElement>): void => {
    const target = e.currentTarget;
    setData(() => readFromStorage(target.dataset.name));
  };
  const handleFileRead = (): void => {
    const data = JSON.parse(fileReader.result);
    if (validateJSON(data)) {
      setData(() => data);
    } else {
      alert('Not valid speech file!');
    }
  };

  const handleFileSelected = (e: ChangeEvent<HTMLInputElement>): void => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(e.target.files[0]);
  };

  const speechesList = (): ReactNode => {
    if (speechNames.length > 0) {
      return (
        <>
          <h3>From browser local storage:</h3>
          <ul>
            {speechNames.map(name => (
              <li key={name} className="storage-item">
                <button
                  className="btn-link"
                  data-name={name}
                  onClick={openSpeech}
                  type="button"
                >
                  {doSpeechNameReadable(name)}
                </button>
              </li>
            ))}
          </ul>
        </>
      );
    }

    return (
      <p>
        <strong>There are no saved speeches on local storage.</strong>
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

  useEffect(() => {
    const speechesFromStorage = getSpeechNamesFromStorage();
    if (speechesFromStorage.length > 0) {
      setSpeechNames(speechesFromStorage);
    }
  }, []);

  if (speech) {
    return <>{speech}</>;
  }

  return (
    <>
      <h1>My speeches</h1>
      <p>
        Select a speech saved to local storage or load an external JSON file
        with a speech.
      </p>
      {speechesList()}
      <br />
      <br />
      <h3>Load speech:</h3>
      <input
        type="file"
        id="file"
        className="file-input"
        accept=".json"
        onChange={handleFileSelected}
      />
      <label htmlFor="file" className="file-input-label btn-green">
        Choose a JSON file
      </label>
    </>
  );
};

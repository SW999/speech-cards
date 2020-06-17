import * as React from 'react';
import {
  FunctionComponent,
  MouseEvent,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { Redirect } from 'react-router-dom';
import {
  doSpeechNameReadable,
  getSpeechNamesFromStorage,
  readFromStorage,
} from '../../../utils/';
import { IState } from '../../../types/';
import { Card } from '../card/Card';
import { LoadSpeech } from '../../load-speech/LoadSpeech';

export const MySpeeches: FunctionComponent = () => {
  const [data, setData] = useState<IState | null>(null);
  const [edit, setEdit] = useState<IState | null>(null);
  const [speech, setSpeech] = useState<ReactNode | null>(null);
  const [speechNames, setSpeechNames] = useState<string[]>([]);
  const openSpeech = (e: MouseEvent<HTMLButtonElement>): void => {
    const target = e.currentTarget;
    setData(() => readFromStorage(target.dataset.name));
  };
  const editSpeech = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    const target = e.currentTarget;
    const data = await readFromStorage(target.dataset.name);
    setEdit({ ...data, step: 0 });
  };
  const onSpeechOpen = (data: IState): void => setData(data);

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
                <button
                  className="btn btn-green-outlined btn-bold btn-rounded"
                  data-name={name}
                  onClick={editSpeech}
                  title="Edit"
                  type="button"
                >
                  +
                </button>
                <button
                  className="btn btn-green-outlined btn-bold btn-rounded"
                  onClick={() => false}
                  title="Remove"
                  type="button"
                >
                  +
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
      <LoadSpeech onLoadSpeech={onSpeechOpen} />
      {edit && <Redirect to={{ pathname: '/new', state: { data: edit } }} />}
    </>
  );
};

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
  getSpeechNamesFromStorage,
  readFromStorage,
  removeFromStorage,
} from '../../../utils/';
import { IState } from '../../../types/';
import { Card } from '../card/Card';
import { ModalPopup } from '../../modal-popup/ModalPopup';
import { LoadSpeechBtn } from '../../load-speech-btn/LoadSpeechBtn';
import { SpeechesList } from '../../speeches-list/SpeechesList';

export const MySpeeches: FunctionComponent = () => {
  const [data, setData] = useState<IState | null>(null);
  const [edit, setEdit] = useState<IState | null>(null);
  const [removedItemName, setRemovedItemName] = useState<string | null>(null);
  const [speech, setSpeech] = useState<ReactNode | null>(null);
  const [speechNames, setSpeechNames] = useState<string[]>([]);

  const showSpeech = (e: MouseEvent<HTMLButtonElement>): void => {
    const target = e.currentTarget;
    setData(() => readFromStorage(target.dataset.name));
  };

  const updateSpeechesList = (): void =>
    setSpeechNames(getSpeechNamesFromStorage());

  const removeSpeech = (e: MouseEvent<HTMLButtonElement>): void => {
    const target = e.currentTarget;
    setRemovedItemName(target.dataset.name);
  };

  const editSpeech = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    const target = e.currentTarget;
    const data = await readFromStorage(target.dataset.name);
    setEdit({ ...data, step: 0 });
  };

  const onSpeechOpen = (data: IState): void => setData(data);

  const doModalAction = async (): Promise<void> => {
    await removeFromStorage(removedItemName);
    updateSpeechesList();
  };

  const hideModal = (): void => setRemovedItemName(null);

  useEffect(() => {
    setSpeech(() => {
      if (!data) {
        return null;
      }

      return <Card {...data} />;
    });
  }, [data]);

  useEffect(() => {
    updateSpeechesList();
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
      <SpeechesList
        editSpeech={editSpeech}
        removeSpeech={removeSpeech}
        showSpeech={showSpeech}
        speechNames={speechNames}
      />
      <ModalPopup
        callback={doModalAction}
        isOpen={!!removedItemName}
        onClose={hideModal}
      />
      <br />
      <br />
      <h3>Load speech:</h3>
      <LoadSpeechBtn onLoadSpeech={onSpeechOpen} />
      {edit && <Redirect to={{ pathname: '/new', state: { data: edit } }} />}
    </>
  );
};

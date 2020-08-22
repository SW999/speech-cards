import React, {
  FunctionComponent,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Redirect } from 'react-router-dom';
import {
  getSpeechNamesFromStorage,
  readFromStorage,
  removeFromStorage,
  validateJSON,
} from '../../utils';
import { IState } from '../../types';
import Card from '../card/Card';
import ModalPopup from '../../components/modal-popup/ModalPopup';
import LoadSpeechBtn from '../../components/load-speech-btn/LoadSpeechBtn';
import SpeechesList from '../../components/speeches-list/SpeechesList';

const MySpeeches: FunctionComponent = () => {
  const [data, setData] = useState<IState | null>(null);
  const [edit, setEdit] = useState<IState | null>(null);
  const [removedItemName, setRemovedItemName] = useState<string | null>(null);
  const [speechNames, setSpeechNames] = useState<string[]>([]);

  const showSpeech = (e: MouseEvent<HTMLButtonElement>): void => {
    const target = e.currentTarget;
    const data = readFromStorage(target.dataset.name);
    if (data) {
      setData(data);
    }
  };

  const updateSpeechesList = (): void => {
    const names = getSpeechNamesFromStorage();
    const _names = names.filter(name => {
      const data = readFromStorage(name);
      return validateJSON(data);
    });

    setSpeechNames(_names);
  };

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

  const onSpeechOpen = useCallback((data: IState): void => setData(data), []);

  const doModalAction = async (): Promise<void> => {
    await removeFromStorage(removedItemName);
    updateSpeechesList();
  };

  const hideModal = (): void => setRemovedItemName(null);

  useEffect(() => {
    updateSpeechesList();
  }, []);

  if (data) {
    return <Card {...data} />;
  }

  if (edit) {
    return <Redirect to={{ pathname: '/new', state: { data: edit } }} />;
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
    </>
  );
};

export default MySpeeches;
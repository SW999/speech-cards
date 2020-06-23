import * as React from 'react';
import { FunctionComponent, MouseEvent } from 'react';
import { doSpeechNameReadable } from '../../utils';

type SpeechesListType = {
  editSpeech: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  removeSpeech: (e: MouseEvent<HTMLButtonElement>) => void;
  showSpeech: (e: MouseEvent<HTMLButtonElement>) => void;
  speechNames: string[];
};

export const SpeechesList: FunctionComponent<SpeechesListType> = ({
  editSpeech,
  removeSpeech,
  showSpeech,
  speechNames,
}) => {
  if (speechNames.length < 1) {
    return (
      <p>
        <strong>There are no saved speeches on local storage.</strong>
      </p>
    );
  }

  return (
    <>
      <h3>From browser local storage:</h3>
      <ul>
        {speechNames.map(name => (
          <li key={name} className="storage-item">
            <button
              className="btn-link"
              data-name={name}
              onClick={showSpeech}
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
              <i className="icon-pencil icon" aria-hidden="true" />
            </button>
            <button
              className="btn btn-orange-outlined btn-bold btn-rounded"
              data-name={name}
              onClick={removeSpeech}
              title="Remove"
              type="button"
            >
              <i className="icon-trash-can icon" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
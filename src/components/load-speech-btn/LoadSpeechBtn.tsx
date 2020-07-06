import * as React from 'react';
import { ChangeEvent, FunctionComponent, memo } from 'react';
import { reviverJSON, validateJSON } from '../../utils';
import { IState } from '../../types';

type LoadSpeechBtnType = {
  onLoadSpeech: (data: IState) => void;
  name?: string;
};

export const LoadSpeechBtn: FunctionComponent<LoadSpeechBtnType> = memo(
  ({ onLoadSpeech, name = 'Choose a JSON file' }) => {
    let fileReader;
    const handleFileRead = (): void => {
      let data = null;

      try {
        data = JSON.parse(fileReader.result, reviverJSON);
      } catch (e) {}

      if (validateJSON(data)) {
        onLoadSpeech(data);
      } else {
        alert('Not valid speech file!');
      }
    };

    const handleFileSelected = (e: ChangeEvent<HTMLInputElement>): void => {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(e.target.files[0]);
    };

    return (
      <>
        <input
          type="file"
          id="file"
          className="file-input"
          accept=".json"
          onChange={handleFileSelected}
        />
        <label htmlFor="file" className="file-input-label btn-green">
          {name}
        </label>
      </>
    );
  }
);

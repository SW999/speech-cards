import * as React from 'react';
import { ChangeEvent, FunctionComponent } from 'react';
import { reviverJSON, validateJSON } from '../../utils';
import { IState } from '../../types';

type LoadSpeechType = {
  onLoadSpeech: (data: IState) => void;
};

export const LoadSpeech: FunctionComponent<LoadSpeechType> = ({
  onLoadSpeech,
}) => {
  let fileReader;
  const handleFileRead = (): void => {
    let data;

    try {
      data = JSON.parse(fileReader.result, reviverJSON);
    } catch (e) {
      data = null;
    }

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
        Choose a JSON file
      </label>
    </>
  );
};

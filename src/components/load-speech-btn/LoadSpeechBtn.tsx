import React, { ChangeEvent, FunctionComponent, memo } from 'react';
import { reviverJSON, validateJSON } from '../../utils';

type LoadSpeechBtnType = {
  onLoadSpeech: (data: IState) => void;
  name?: string;
};

const LoadSpeechBtn: FunctionComponent<LoadSpeechBtnType> = memo(
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
        <label className="file-input-label btn-green">
          {name}
          <input
            type="file"
            id="file"
            className="file-input"
            accept=".json"
            onChange={handleFileSelected}
          />
        </label>
      </>
    );
  }
);

export default LoadSpeechBtn;

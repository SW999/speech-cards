import * as React from 'react';
import { FormEvent, FunctionComponent } from 'react';

type FirstStepProps = {
  title: string;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
};

export const FirstStep: FunctionComponent<FirstStepProps> = ({
  title,
  handleChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor="speech-title">Speech title:</label>
      <input
        id="speech-title"
        name="title"
        type="text"
        autoCapitalize="none"
        autoCorrect="off"
        placeholder="Enter new speech title"
        onChange={handleChange}
        spellCheck={false}
        value={title}
      />
    </div>
  );
};

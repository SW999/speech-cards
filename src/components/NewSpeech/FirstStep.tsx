import * as React from 'react';
import { FormEvent, FunctionComponent } from 'react';

type FirstStepProps = {
  name: string;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
};

export const FirstStep: FunctionComponent<FirstStepProps> = ({
  name,
  handleChange,
}) => (
  <div className="form-group">
    <label htmlFor="speech-name">Speech name:</label>
    <input
      id="speech-name"
      name="name"
      type="text"
      autoCapitalize="none"
      autoCorrect="off"
      placeholder="Enter new speech name"
      onChange={handleChange}
      spellCheck={false}
      value={name}
      autoFocus
    />
  </div>
);

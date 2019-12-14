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
      <label htmlFor="speechTitle">Speech title:</label>
      <input
        id="speechTitle"
        name="title"
        type="text"
        autoCapitalize="none"
        autoCorrect="off"
        placeholder="Enter new speech title"
        onClick={handleChange}
        spellCheck={false}
        defaultValue={title}
      />
    </div>
  );
};

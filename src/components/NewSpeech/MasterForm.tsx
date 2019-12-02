import * as React from 'react';
import { FormEvent, FunctionComponent, useState } from 'react';

export const MasterForm: FunctionComponent = () => {
  const [speechData, setSpeechData] = useState({ name: '', speech: [] });
  const [step, setStep] = useState<number>(0);
  const handleChange = e => {
    const { name, value } = e.target;
    return e;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return e;
  };

  const nextStep = () => {};

  const prevStep = () => {};

  return (
    <form onSubmit={handleSubmit}>
      {step > 0 && (
        <button className="btn btn-green" type="button" onClick={prevStep}>
          Go back
        </button>
      )}
      <fieldset>
        <label htmlFor="speechName">Speech name:</label>
        <input
          id="speechName"
          name="speechName"
          type="text"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
        />
      </fieldset>
      <div>
        <button className="btn btn-green" type="button" onClick={nextStep}>
          Next card
        </button>
        <button
          className="btn btn-green-outlined"
          type="button"
          onClick={() => {}}
        >
          Save speech
        </button>
      </div>
      <button className="btn btn-orange-link" type="button" onClick={() => {}}>
        Clear project
      </button>
    </form>
  );
};

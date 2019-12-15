import * as React from 'react';
import { FormEvent, FunctionComponent, useState } from 'react';
import { FirstStep } from './FirstStep';

export const MasterForm: FunctionComponent = () => {
  const [speechData, setSpeechData] = useState({ title: '', speech: [] });
  const [step, setStep] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return e;
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    if (step < 1) {
      setSpeechData(data => ({ ...data, [name]: value }));
    } else {
      setSpeechData(data => ({ ...data, [`step${step}`]: { [name]: value } }));
    }
  };

  const nextStep = () => setStep(step => step + 1);

  const prevStep = () => {
    if (step < 1) {
      setStep(0);
    } else {
      setStep(step => step - 1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {step > 0 && (
        <button className="btn btn-green" type="button" onClick={prevStep}>
          Go back
        </button>
      )}
      {step < 1 && (
        <FirstStep title={speechData.title} handleChange={handleChange} />
      )}
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
        Clear speech
      </button>
    </form>
  );
};

import * as React from 'react';
import { FormEvent, FunctionComponent, useState } from 'react';
import { FirstStep } from './FirstStep';
import { MainStep } from './MainStep';

export const MasterForm: FunctionComponent = () => {
  const [speechData, setSpeechData] = useState({ name: '' });
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
      setSpeechData(data => ({
        ...data,
        [`step${step}`]: { ...data[`step${step}`], [name]: value },
      }));
    }
  };

  const nextStep = () => setStep(step => step + 1);

  const prevStep = e => {
    e.preventDefault();

    if (step < 1) {
      setStep(0);
    } else {
      setStep(step => step - 1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {step > 0 && (
        <>
          <h3 className="step-indicator">{`Step ${step}`}</h3>
          <a className="go-back" href="#" onClick={prevStep}>
            Back
          </a>
          <MainStep
            title={
              speechData[`step${step}`]
                ? speechData[`step${step}`].title || ''
                : ''
            }
            content={
              speechData[`step${step}`]
                ? speechData[`step${step}`].content || ''
                : ''
            }
            handleChange={handleChange}
            step={step}
          />
        </>
      )}
      {step < 1 && (
        <FirstStep name={speechData.name} handleChange={handleChange} />
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

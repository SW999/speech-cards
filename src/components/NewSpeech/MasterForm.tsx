import * as React from 'react';
import { FormEvent, FunctionComponent, useState } from 'react';
import { FirstStep } from './FirstStep';
import { MainStep } from './MainStep';
import { downloadFile } from '../../utils';

export const MasterForm: FunctionComponent = () => {
  const [speechData, setSpeechData] = useState({ name: '', speech: [] });
  const [step, setStep] = useState<number>(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await downloadFile(speechData, speechData.name);
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    if (step < 1) {
      setSpeechData(data => ({ ...data, name: value }));
    } else {
      setSpeechData(data => {
        if (!data['speech'][step - 1]) {
          data['speech'][step - 1] = {};
        }
        data['speech'][step - 1][name] = value;
        return { ...data };
      });
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
              speechData['speech'][step - 1]
                ? speechData['speech'][step - 1].title || ''
                : ''
            }
            content={
              speechData['speech'][step - 1]
                ? speechData['speech'][step - 1].content || ''
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
        <button className="btn btn-green-outlined" type="submit">
          Save speech
        </button>
      </div>
      <button className="btn btn-orange-link" type="button" onClick={() => {}}>
        Clear speech
      </button>
    </form>
  );
};

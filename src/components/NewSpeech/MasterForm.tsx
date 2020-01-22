import * as React from 'react';
import { FormEvent, MouseEvent, FunctionComponent, useReducer } from 'react';
import { newSpeechReducer } from '../../reducers';
import { FirstStep } from './FirstStep';
import { MainStep } from './MainStep';
import { downloadFile } from '../../utils';

const initialState = { name: '', step: 0, speech: [] };

export const MasterForm: FunctionComponent = () => {
  const [state, dispatch] = useReducer(newSpeechReducer, initialState);

  const addName = (e: FormEvent<HTMLInputElement>) =>
    dispatch({ type: 'ADD_NAME', payload: e.currentTarget.value });

  const addStepName = (title: string, step: number) =>
    dispatch({
      type: 'ADD_STEP_NAME',
      payload: { title: title, step: step },
    });

  const resetState = () => dispatch({ type: 'RESET', payload: initialState });

  const nextStep = () => dispatch({ type: 'NEXT_STEP' });

  const prevStep = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch({ type: 'PREV_STEP' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await downloadFile(state, state.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      {state.step > 0 && (
        <>
          <h3 className="step-indicator">{`Step ${state.step}`}</h3>
          <a className="go-back" href="#" onClick={prevStep}>
            Back
          </a>
          <MainStep
            title={
              state['speech'][state.step - 1]
                ? state['speech'][state.step - 1].title
                : ''
            }
            content={
              state['speech'][state.step - 1]
                ? state['speech'][state.step - 1].content
                : ['']
            }
            changeStepName={addStepName}
            step={state.step}
          />
        </>
      )}
      {state.step < 1 && <FirstStep name={state.name} handleChange={addName} />}
      <hr />
      <div className="form-group">
        <button className="btn btn-green" type="button" onClick={nextStep}>
          Next card
        </button>
        <button className="btn btn-green-outlined" type="submit">
          Save speech
        </button>
      </div>
      <button
        className="btn btn-orange-link"
        type="button"
        onClick={resetState}
      >
        Clear speech
      </button>
    </form>
  );
};

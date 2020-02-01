import * as React from 'react';
import {
  FormEvent,
  ChangeEvent,
  MouseEvent,
  FunctionComponent,
  useReducer,
  Reducer,
} from 'react';
import {
  newSpeechReducer,
  initialState,
  IAction,
  IState,
} from '../../reducers';
import { FirstStep } from './FirstStep';
import { MainStep } from './MainStep';
import { downloadFile } from '../../utils';

export const MasterForm: FunctionComponent = () => {
  const [state, dispatch] = useReducer<Reducer<IState, IAction>>(
    newSpeechReducer,
    initialState
  );

  const addName = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: 'ADD_NAME', payload: e.currentTarget.value });

  const addStepName = (title: string, step: number) =>
    dispatch({
      type: 'ADD_STEP_NAME',
      payload: { title, step },
    });

  const addStepContent = (content: string, step: number, itemNumber: number) =>
    dispatch({
      type: 'ADD_STEP_CONTENT',
      payload: { content, step, itemNumber },
    });

  const addContentItem = (step: number, itemNumber: number) =>
    dispatch({
      type: 'ADD_CONTENT_ITEM',
      payload: { step, itemNumber },
    });

  const removeContentItem = (step: number, itemNumber: number) =>
    dispatch({
      type: 'REMOVE_CONTENT_ITEM',
      payload: { step, itemNumber },
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
            changeStepContent={addStepContent}
            onAddContentItem={addContentItem}
            onRemoveContentItem={removeContentItem}
            step={state.step}
          />
        </>
      )}
      {state.step < 1 && <FirstStep name={state.name} handleChange={addName} />}
      <div className="form-group">
        <button className="btn btn-green" type="button" onClick={nextStep}>
          Next card
        </button>
        <button className="btn btn-green-outlined" type="submit">
          Save speech
        </button>
      </div>
      <button className="btn btn-orange-link" type="reset" onClick={resetState}>
        Clear speech
      </button>
    </form>
  );
};

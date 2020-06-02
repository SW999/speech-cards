import * as React from 'react';
import { useForm } from 'react-hook-form';
import {
  ChangeEvent,
  FunctionComponent,
  MouseEvent,
  Reducer,
  useReducer,
} from 'react';
import { debounce } from '../../utils/index';
import { IAction, IState } from '../../types/';
import { newSpeechReducer, initialState } from '../../reducers';
import { Input } from '../input/Input';
import { MainStep } from '../main-step/MainStep';
import { downloadFile, saveToStorage, normalizeState } from '../../utils/';

export const MasterForm: FunctionComponent = () => {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();
  const [state, dispatch] = useReducer<Reducer<IState, IAction>>(
    newSpeechReducer,
    initialState
  );

  const addName = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'ADD_NAME', payload: e.currentTarget.value });
    setValue('speechName', e.currentTarget.value);
  };

  const addStepName = (title: string, step: number): void =>
    dispatch({
      type: 'ADD_STEP_NAME',
      payload: { title, step },
    });

  const addStepContent = (
    content: string,
    step: number,
    itemNumber: number
  ): void =>
    dispatch({
      type: 'ADD_STEP_CONTENT',
      payload: { content, step, itemNumber },
    });

  const addContentItem = (step: number, itemNumber: number): void =>
    dispatch({
      type: 'ADD_CONTENT_ITEM',
      payload: { step, itemNumber },
    });

  const removeContentItem = (step: number, itemNumber: number): void =>
    dispatch({
      type: 'REMOVE_CONTENT_ITEM',
      payload: { step, itemNumber },
    });

  const resetState = debounce(
    (): void => dispatch({ type: 'RESET', payload: initialState }),
    500
  );

  const nextStep = debounce((): void => dispatch({ type: 'NEXT_STEP' }), 500);

  const prevStep = debounce((e: MouseEvent): void => {
    e.preventDefault();
    dispatch({ type: 'PREV_STEP' });
  }, 500);

  const onSubmit = async (): Promise<void> => {
    const normalizedState = normalizeState(state);
    saveToStorage(normalizedState);
    await downloadFile(normalizedState);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {state.step > 0 && (
        <>
          <h3 className="step-indicator">{`Step ${state.step}`}</h3>
          <button className="go-back" onClick={prevStep} type="button">
            Back
          </button>
          <MainStep
            changeStepContent={addStepContent}
            changeStepName={addStepName}
            content={
              state['speech'][state.step - 1]
                ? state['speech'][state.step - 1].content
                : ['']
            }
            error={errors}
            onAddContentItem={addContentItem}
            onRemoveContentItem={removeContentItem}
            register={register}
            step={state.step}
            setValue={setValue}
            title={
              state['speech'][state.step - 1]
                ? state['speech'][state.step - 1].title
                : ''
            }
          />
        </>
      )}
      {state.step < 1 && (
        <Input
          autoFocus
          error={errors}
          label="Speech name"
          name="speechName"
          onChange={addName}
          placeholder="Enter new speech name"
          register={register}
          required
          defaultValue={state.name}
        />
      )}
      <div className="form-group">
        <button
          className="btn btn-green"
          onClick={handleSubmit(nextStep)}
          type="button"
        >
          Next card
        </button>
        <button
          className="btn btn-green-outlined"
          type="submit"
          disabled={
            state['speech'][0]?.content.length < 1 ||
            state['speech'][0]?.content[0]?.trim() === '' ||
            !state['speech'][0]?.title
          }
        >
          Save speech
        </button>
      </div>
      <button className="btn btn-orange-link" type="reset" onClick={resetState}>
        Clear speech
      </button>
    </form>
  );
};

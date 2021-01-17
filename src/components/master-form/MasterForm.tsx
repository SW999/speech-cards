import { useForm } from 'react-hook-form';
import React, {
  ChangeEvent,
  FunctionComponent,
  Reducer,
  Suspense,
  lazy,
  useCallback,
  useReducer,
  useState,
} from 'react';
import { Redirect } from 'react-router-dom';
import { downloadFile, saveToStorage, normalizeState } from '~utils';
import { useDebounce } from '~hooks';
import { newSpeechReducer, initialState } from '~reducers';
import Input from '~components/input/Input';
import Loader from '~components/loader/Loader';
import LoadSpeechBtn from '~components/load-speech-btn/LoadSpeechBtn';
const MainStep = lazy(() => import('~components/main-step/MainStep'));
type DataType = {
  data?: IState;
};
const MasterForm: FunctionComponent<DataType> = ({ data = initialState }) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [showLoadBtn, setShowLoadBtn] = useState<boolean>(true);
  const [redirect, setRedirect] = useState<boolean>(false);
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();
  const [state, dispatch] = useReducer<Reducer<IState, IAction>>(
    newSpeechReducer,
    data
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

  const resetState = useDebounce((): void => dispatch({ type: 'RESET' }), 500);

  const nextStep = useDebounce(
    (): void => dispatch({ type: 'NEXT_STEP' }),
    500
  );

  const prevStep = (): void => dispatch({ type: 'PREV_STEP' });

  const editFile = useCallback((data: IState): void => {
    setShowLoadBtn(false);

    dispatch({
      type: 'LOAD_FILE',
      payload: { ...data, step: 0 },
    });
  }, []);

  const showMessageAndRedirect = (): void => {
    setShowMessage(true);
    setTimeout(() => setRedirect(true), 3000);
  };

  const onSubmit = async (): Promise<void> => {
    const normalizedState = normalizeState(state);
    saveToStorage(normalizedState);
    await downloadFile(normalizedState);
    showMessageAndRedirect();
  };

  if (showMessage) {
    return (
      <>
        <h3>Your speech was successfully saved!</h3>
        <p>You'll be redirected to a new speech after 3 seconds.</p>
        {redirect && <Redirect to="/my-speeches" />}
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {state.step > 0 && (
          <Suspense fallback={<Loader />}>
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
          </Suspense>
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
            {state.step < 1 ? 'Create card' : 'Next card'}
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
        <button
          className="btn btn-orange-link"
          type="reset"
          hidden
          onClick={resetState}
        >
          Clear speech
        </button>
      </form>
      {state.step === 0 && showLoadBtn && data === initialState && (
        <LoadSpeechBtn onLoadSpeech={editFile} name="Edit an existed speech" />
      )}
    </>
  );
};

export default MasterForm;

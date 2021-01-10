export const speechInitialState: IState = { name: '', step: 0, speech: [] };

export const newSpeechReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        name: action.payload,
      };

    case 'ADD_STEP_NAME':
      let arr1 = [...state.speech];

      if (state.speech.length < action.payload.step) {
        arr1 = [
          ...state.speech,
          { title: action.payload.title, content: [''] },
        ];
      } else {
        arr1[action.payload.step - 1].title = action.payload.title;
      }

      return {
        ...state,
        speech: [...arr1],
      };

    case 'ADD_STEP_CONTENT':
      let arr2 = [...state.speech];

      if (state.speech.length < action.payload.step) {
        arr2 = [
          ...state.speech,
          { title: '', content: [action.payload.content] },
        ];
      } else {
        arr2[action.payload.step - 1].content[action.payload.itemNumber] =
          action.payload.content;
      }

      return {
        ...state,
        speech: [...arr2],
      };

    case 'ADD_CONTENT_ITEM':
      return {
        ...state,
        speech: [
          ...((arr: SpeechItem[]): SpeechItem[] => {
            arr[action.payload.step - 1].content[
              action.payload.itemNumber + 1
            ] = '';

            return arr;
          })(state.speech),
        ],
      };

    case 'REMOVE_CONTENT_ITEM':
      return {
        ...state,
        speech: [
          ...((arr: SpeechItem[]): SpeechItem[] => {
            arr[action.payload.step - 1].content.splice(
              action.payload.itemNumber,
              1
            );

            return arr;
          })(state.speech),
        ],
      };

    case 'NEXT_STEP':
      return {
        ...state,
        step: state.step + 1,
      };

    case 'PREV_STEP':
      return {
        ...state,
        step: state.step <= 1 ? 0 : state.step - 1,
      };

    case 'LOAD_FILE':
      return { ...action.payload };

    case 'RESET':
      return speechInitialState;

    default:
      throw new Error();
  }
};

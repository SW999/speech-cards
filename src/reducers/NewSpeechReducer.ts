export const newSpeechReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        name: action.payload,
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
    case 'RESET':
      return action.payload;
    case 'ADD_STEP_NAME':
      return {
        ...state,
        //additionalPrice: state.additionalPrice + action.item.price,
        //car: { ...state.car, features: [...state.car.features, action.item] },
        //store: state.store.filter(x => x.id !== action.item.id),
      };
    default:
      return state;
  }
};

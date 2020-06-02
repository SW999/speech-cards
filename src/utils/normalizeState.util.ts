import { IState } from 'types';

export const normalizeState = (data: IState): IState => {
  if (data.step > data.speech.length) {
    return { ...data, step: data.speech.length };
  }

  return { ...data };
};

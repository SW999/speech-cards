import { IState } from 'types';

export const normalizeState = (data: IState): IState => ({
  ...data,
  step: data.speech.length,
});

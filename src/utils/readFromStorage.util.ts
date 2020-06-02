import { IState } from 'types';

export const readFromStorage = (name: string): IState =>
  JSON.parse(localStorage.getItem(name));

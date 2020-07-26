import { IState } from 'types';

export const readFromStorage = (name: string): IState | void => {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (e) {
    console.warn(
      'Error when passe JSON from storage in func "readFromStorage": ',
      e
    );
  }
};

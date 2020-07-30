import { IState } from 'types';

export const readFromStorage = (name: string): IState | null => {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (e) {
    console.warn(
      'Error when passe JSON from storage in func "readFromStorage": ',
      e
    );
    return null;
  }
};

import { IState } from 'types';

export const validateJSON = (o: IState | null): boolean => {
  return !!(
    o !== null &&
    typeof o?.name === 'string' &&
    typeof o?.step === 'number' &&
    Array.isArray(o?.speech) &&
    typeof o?.speech[0]?.title === 'string' &&
    Array.isArray(o?.speech[0]?.content)
  );
};

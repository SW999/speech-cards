import { IState } from 'types';

export const validateJSON = (o: IState): boolean => {
  return !!(
    typeof o?.name === 'string' &&
    typeof o?.step === 'number' &&
    typeof o?.speech[0]?.title === 'string' &&
    o?.speech[0]?.content.length
  );
};

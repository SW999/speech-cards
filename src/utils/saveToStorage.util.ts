import { IState } from 'types';
import { prepareSpeechName } from './prepareSpeechName.util';

export const saveToStorage = (data: IState): void =>
  localStorage.setItem(
    `speech_${prepareSpeechName(data.name)}`,
    JSON.stringify(data)
  );

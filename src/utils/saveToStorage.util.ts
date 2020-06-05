import { IState } from 'types';
import { prepareSpeechName } from './prepareSpeechName.util';
import { getSpeechNamesFromStorage } from './getSpeechNamesFromStorage.util';

export const saveToStorage = (data: IState): void => {
  const speechesList = getSpeechNamesFromStorage();
  let name = data.name;

  if (speechesList.includes(`speech_${name}`)) {
    name = `new_${name}`;
  }

  localStorage.setItem(
    `speech_${prepareSpeechName(name)}`,
    JSON.stringify(data)
  );
};

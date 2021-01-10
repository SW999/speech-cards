import { prepareSpeechName } from './prepareSpeechName.util';
import { getSpeechNamesFromStorage } from './getSpeechNamesFromStorage.util';
import { STORAGE_SPEECH_PREFIX } from '../constants/index';

export const saveToStorage = (data: IState): void => {
  const speechesList = getSpeechNamesFromStorage();
  let name = data.name;

  if (speechesList.includes(`${STORAGE_SPEECH_PREFIX}${name}`)) {
    name = `new_${name}`;
  }

  localStorage.setItem(
    `${STORAGE_SPEECH_PREFIX}${prepareSpeechName(name)}`,
    JSON.stringify(data)
  );
};

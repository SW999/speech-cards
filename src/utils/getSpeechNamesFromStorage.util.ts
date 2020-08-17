import { STORAGE_SPEECH_PREFIX } from '../constants/index';

const len = STORAGE_SPEECH_PREFIX.length;

export const getSpeechNamesFromStorage = (): string[] =>
  Object.keys(localStorage).filter(
    key => key.substring(0, len) === STORAGE_SPEECH_PREFIX
  );

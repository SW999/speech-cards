export const getSpeechNamesFromStorage = (): string[] =>
  Object.keys(localStorage).filter(key => key.substring(0, 7) === 'speech_');

export const doSpeechNameReadable = (name: string): string =>
  name.substring(7).replace(/_/g, ' ');

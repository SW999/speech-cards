import { transliterate } from './transliterate.util';

export const prepareSpeechName = (name: string): string =>
  transliterate(name).replace(/ /g, '_');

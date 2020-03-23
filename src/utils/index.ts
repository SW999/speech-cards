import 'regenerator-runtime/runtime';
import { IState } from '../types/';

const _prepareSpeechName = (name: string): string =>
  transliterate(name).replace(/ /g, '_');

export const normalizeState = (data: IState) => {
  if (data.step > data.speech.length) {
    return { ...data, step: data.speech.length };
  }

  return { ...data };
};

export const transliterate = (str: string): string => {
  const sp = '_';
  const text = str
    .trim()
    .toLowerCase()
    .split('');
  const transliterationMap = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'yo',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'j',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'c',
    ч: 'ch',
    ш: 'sh',
    щ: 'shch',
    ъ: "'",
    ы: 'y',
    ь: '',
    э: 'e',
    ю: 'yu',
    я: 'ya',
    '\u00AB': sp,
    '\u00BB': sp, // «»
    '`': sp,
    '~': sp,
    '!': sp,
    '@': sp,
    '#': sp,
    $: sp,
    '%': sp,
    '^': sp,
    '&': sp,
    '*': sp,
    '(': sp,
    ')': sp,
    '-': sp,
    '=': sp,
    '+': sp,
    '[': sp,
    ']': sp,
    '\\': sp,
    '|': sp,
    '/': sp,
    '.': sp,
    ',': sp,
    '{': sp,
    '}': sp,
    "'": sp,
    '"': sp,
    ';': sp,
    ':': sp,
    '?': sp,
    '<': sp,
    '>': sp,
    '№': sp,
  };

  return text
    .reduce((accumulator: [], currentValue: string) => {
      if (transliterationMap[currentValue] !== undefined) {
        return transliterationMap[currentValue] === sp
          ? accumulator
          : [...accumulator, transliterationMap[currentValue]];
      }

      return [...accumulator, currentValue];
    }, [])
    .join('');
};

export const downloadFile = async (data: IState): Promise<void> => {
  const json = JSON.stringify(data);
  const blob = new Blob([json], { type: 'application/json' });
  const href = await URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = `${_prepareSpeechName(data.name)}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const checkTouch = (): boolean =>
  'ontouchstart' in document.documentElement;

export const addSwipeEvent = () => {
  let nm = true;
  let startPoint = { x: 0, y: 0 };
  let endPoint = { x: 0, y: 0 };
  const customEvent = (e, eventName) => {
    let swipeEvent = document.createEvent('CustomEvent');
    swipeEvent.initCustomEvent(eventName, true, true, e.target);
    e.target.dispatchEvent(swipeEvent);
    swipeEvent = null;

    return false;
  };

  return {
    touchstart: e => {
      startPoint = { x: e.touches[0].pageX, y: e.touches[0].pageY };
    },
    touchmove: e => {
      nm = false;
      endPoint = { x: e.touches[0].pageX, y: e.touches[0].pageY };
    },
    touchend: e => {
      if (nm) {
        customEvent(e, 'fastClick');
      } else {
        const x = endPoint.x - startPoint.x;
        const y = endPoint.y - startPoint.y;
        const xr = Math.abs(x);
        const yr = Math.abs(y);

        if (xr > yr) {
          if (Math.max(xr) > 50) {
            customEvent(e, x < 0 ? 'swipeLeft' : 'swipeRight');
          }
        } else {
          if (Math.max(yr) > 50) {
            customEvent(e, y < 0 ? 'swipeUp' : 'swipeDown');
          }
        }
      }
      nm = true;
    },
    touchcancel: () => (nm = false),
  };
};

export const saveToStorage = (data: IState): void =>
  localStorage.setItem(
    `speech_${_prepareSpeechName(data.name)}`,
    JSON.stringify(data)
  );

export const readFromStorage = (name: string): IState =>
  JSON.parse(localStorage.getItem(name));

export const getSpeechNamesFromStorage = (): string[] =>
  Object.keys(localStorage).filter(key => key.substring(0, 7) === 'speech_');

export const doSpeechNameReadable = (name: string): string =>
  name.substring(7).replace(/_/g, ' ');

export const validateJSON = (o: IState): boolean => {
  return !!(
    typeof o?.name === 'string' &&
    typeof o?.step === 'number' &&
    typeof o?.speech[0]?.title === 'string' &&
    o?.speech[0]?.content.length
  );
};

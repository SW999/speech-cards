const sp = '_';
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

export const transliterate = (str: string): string => {
  const text = str.trim().toLowerCase().split('');

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

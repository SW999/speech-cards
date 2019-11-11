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
      } else {
        return [...accumulator, currentValue];
      }
    }, [])
    .join('');
};

export const downloadFile = async (data, name) => {
  const fileName = transliterate(name).replace(/ /g, '_');
  const json = JSON.stringify(data);
  const blob = new Blob([json], { type: 'application/json' });
  const href = await URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = fileName + '.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

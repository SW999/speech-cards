export const transliterate = (str: string): string => {
  const sp = '_';
  const text = str.trim().toLowerCase().split('');
  const transliterationMap = {
    '\u0430': 'a', '\u0431': 'b', '\u0432': 'v', '\u0433': 'g', '\u0434': 'd', '\u0435': 'e', '\u0451': 'yo', '\u0436': 'zh',
    '\u0437': 'z', '\u0438': 'i', '\u0439': 'j', '\u043a': 'k', '\u043b': 'l', '\u043c': 'm', '\u043d': 'n', '\u043e': 'o',
    '\u043f': 'p', '\u0440': 'r', '\u0441': 's', '\u0442': 't', '\u0443': 'u', '\u0444': 'f', '\u0445': 'h', '\u0446': 'c',
    '\u0447': 'ch', '\u0448': 'sh', '\u0449': 'shch', '\u044a': '\'', '\u044b': 'y', '\u044c': '', '\u044d': 'e', '\u044e': 'yu', '\u044f': 'ya',
    '\u00AB': sp, '\u00BB': sp, // «»
    '`': sp, '~': sp,
    '!': sp, '@': sp, '#': sp, '$': sp,
    '%': sp, '^': sp, '&': sp, '*': sp, '(': sp, ')': sp, '-': sp, '=': sp,
    '+': sp, '[': sp, ']': sp, '\\': sp, '|': sp, '/': sp, '.': sp, ',': sp,
    '{': sp, '}': sp, '\'': sp, '"': sp, ';': sp, ':': sp, '?': sp, '<': sp,
    '>': sp, '№': sp
  };

  return text.reduce((accumulator: [], currentValue: string) => {
    if (transliterationMap[currentValue] !== undefined) {
      return transliterationMap[currentValue] === sp ? accumulator : [...accumulator, transliterationMap[currentValue]];
    } else {
      return [...accumulator, currentValue];
    }
  }, []).join('');
};

export const downloadFile = async (data, name) => {
  const fileName = transliterate(name).replace(/ /g,'_');
  const json = JSON.stringify(data);
  const blob = new Blob([json],{type:'application/json'});
  const href = await URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = fileName + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

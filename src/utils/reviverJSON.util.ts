type ValueType = string | number | [];

export const reviverJSON = (k: string, v: ValueType): ValueType | null => {
  if (
    (k === 'name' && typeof v === 'string' && v.trim() !== '') ||
    (k === 'step' && typeof v === 'number' && v > 0) ||
    (k === 'speech' && Array.isArray(v) && v.length > 0) ||
    (k === 'title' && typeof v === 'string' && v.trim() !== '') ||
    (k === 'content' && Array.isArray(v) && v.length > 0) ||
    (!['name', 'step', 'speech', 'title', 'content', ''].includes(k) &&
      !isNaN(parseInt(k, 10))) ||
    k === ''
  ) {
    return v;
  }

  return null;
};

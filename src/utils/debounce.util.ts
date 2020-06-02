export const debounce = (
  func: Function,
  timeout: number
  /* eslint-disable @typescript-eslint/no-explicit-any */
): ((...args: any) => void) => {
  let timer: NodeJS.Timeout;
  return (...args: any): void => {
    /* eslint-enable @typescript-eslint/no-explicit-any */
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

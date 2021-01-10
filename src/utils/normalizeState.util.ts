export const normalizeState = (data: IState): IState => ({
  ...data,
  step: data.speech.length,
});

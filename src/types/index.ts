export type SpeechItem = {
  title: string;
  content: string[];
};

export type IState = {
  name?: string;
  step?: number;
  speech?: SpeechItem[];
};

export type LocationType = {
  pathname: string;
  search: string;
  hash: string;
  state?: null | { data: IState };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export type IAction = {
  type: string;
  payload?: any;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

type SpeechItem = {
  title: string;
  content: string[];
};

type IState = {
  name?: string;
  step?: number;
  speech?: SpeechItem[];
};

type LocationType = {
  pathname: string;
  search: string;
  hash: string;
  state?: null | { data: IState };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
type IAction = {
  type: string;
  payload?: any;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

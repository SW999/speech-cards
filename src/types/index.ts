export type SpeechItem = {
  title: string;
  content: string[];
};

export type IState = {
  name: string;
  step: number;
  speech: SpeechItem[];
};

export type IAction = {
  type: string;
  payload?: any;
};

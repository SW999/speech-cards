import { IState } from 'types';
import { prepareSpeechName } from './prepareSpeechName.util';

export const downloadFile = async (data: IState): Promise<void> => {
  const json = JSON.stringify(data);
  const blob = new Blob([json], { type: 'application/json' });
  const href = await URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = `${prepareSpeechName(data.name)}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

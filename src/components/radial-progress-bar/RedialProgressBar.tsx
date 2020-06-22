import * as React from 'react';
import { FunctionComponent, useEffect, useState } from 'react';

type RedialProgressBarProps = {
  currentValue: number;
  delay?: number;
  label?: string;
  total: number;
};

const RedialProgressBar: FunctionComponent<RedialProgressBarProps> = ({
  currentValue,
  delay = 30,
  label,
  total,
}) => {
  const [dynamicValue, setDynamicValue] = useState<number>(1);
  const result: string =
    dynamicValue === 100 ? 'Done' : label || `${dynamicValue}%`;

  useEffect(() => {
    const percent: number = Math.ceil((currentValue * 100) / total);
    let timer;

    if (dynamicValue !== percent) {
      const delta: number = percent > dynamicValue ? 1 : 0;
      timer = setInterval(() => setDynamicValue(v => v + delta), delay);
    }

    return (): void => clearInterval(timer);
  }, [currentValue, delay, dynamicValue, total]);

  if (total < 2) {
    return null;
  }

  return (
    <div className={`progress progress-${dynamicValue}`} role="progressbar">
      <div className="progress__count">{result}</div>
      <div className="progress__curve">
        <div className="progress__curve-first-half" />
        <div className="progress__curve-second-half" />
      </div>
    </div>
  );
};

export default RedialProgressBar;

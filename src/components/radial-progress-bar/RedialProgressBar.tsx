import * as React from 'react';
import { FunctionComponent, useEffect, useState } from 'react';

type RedialProgressBarProps = {
  currentValue: number;
  label?: string;
  total: number;
};

const RedialProgressBar: FunctionComponent<RedialProgressBarProps> = ({
  currentValue,
  label,
  total,
}) => {
  const [dynamicValue, setDynamicValue] = useState<number>(1);
  const result: string =
    dynamicValue === 100 ? 'Done' : label || `${dynamicValue}%`;

  useEffect(() => {
    const percent: number = Math.ceil((currentValue * 100) / total);
    const delta = ((): number => {
      if (percent === dynamicValue) return 0;
      return percent > dynamicValue ? 1 : -1;
    })();
    let timer;

    if (dynamicValue !== percent) {
      timer = setInterval(() => setDynamicValue(v => v + delta), 30);
    }

    return (): void => clearInterval(timer);
  }, [currentValue, dynamicValue, total]);

  return (
    <div className={`progress progress-${dynamicValue}`}>
      <div className="progress__count">{result}</div>
      <div className="progress__curve">
        <div className="progress__curve-first-half" />
        <div className="progress__curve-second-half" />
      </div>
    </div>
  );
};

export default RedialProgressBar;

import * as React from 'react';
import { FunctionComponent, useEffect, useState, memo } from 'react';

type RedialProgressBarProps = {
  currentValue: number;
  delay?: number;
  label?: string;
  total: number;
};

const RedialProgressBar: FunctionComponent<RedialProgressBarProps> = ({
  currentValue,
  delay = 25,
  label,
  total,
}) => {
  const [dynamicValue, setDynamicValue] = useState<number>(1);
  const [result, setResult] = useState<string>(label || `${dynamicValue}%`);

  useEffect(() => {
    const percent: number = Math.ceil((currentValue * 100) / total);
    let timer;

    // Don't touch it any more! )))
    if (dynamicValue !== percent) {
      const delta = dynamicValue < percent ? 1 : -1;
      timer = setTimeout(() => setDynamicValue(v => v + delta), delay);
    } else {
      setResult(() =>
        dynamicValue === 100 ? 'Done' : label || `${dynamicValue}%`
      );
    }

    return (): void => clearTimeout(timer);
  }, [currentValue, delay, dynamicValue, label, total]);

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

export default memo(RedialProgressBar);

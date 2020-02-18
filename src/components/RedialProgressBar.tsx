import * as React from 'react';
import { FunctionComponent } from 'react';

type RedialProgressBarProps = {
  current: number;
  total: number;
  label?: string;
};

const RedialProgressBar: FunctionComponent<RedialProgressBarProps> = ({
  current,
  total,
  label,
}) => {
  const percent = Math.ceil((current * 100) / total);

  return (
    <div className={`progress progress-${percent}`}>
      <div className="progress__count">{label || `${percent}%`}</div>
      <div className="progress__curve">
        <div className="progress__curve-first-half" />
        <div className="progress__curve-second-half" />
      </div>
    </div>
  );
};

export default RedialProgressBar;

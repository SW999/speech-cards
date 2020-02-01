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
    <div className={`radial-progress-bar progress-${percent}`}>
      <div className="radial-progress-bar__label">{label || `${percent}%`}</div>
      <div className="radial-progress-bar__pie">
        <div className="left-side radial-progress-bar__half-circle" />
        <div className="right-side radial-progress-bar__half-circle" />
      </div>
    </div>
  );
};

export default RedialProgressBar;
